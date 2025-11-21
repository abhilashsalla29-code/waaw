import { NextResponse } from 'next/server';
import { google } from 'googleapis';

type ContactPayload = {
  name?: string;
  businessName?: string;
  contactNumber?: string;
  email?: string;
  message?: string;
};

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SHEET_RANGE = process.env.GOOGLE_SHEET_RANGE ?? 'Sheet1!A:F';

const HEADERS = ['Timestamp', 'Name', 'Business Name', 'Contact Number', 'Email', 'Message'];

function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    throw new Error('Missing Google Sheets environment variables');
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES
  });

  const sheets = google.sheets({ version: 'v4', auth });

  return { sheets, spreadsheetId };
}

function getSheetName(range: string): string {
  const match = range.match(/^([^!]+)!/);
  return match ? match[1] : 'Sheet1';
}

async function ensureHeaders(sheets: any, spreadsheetId: string, sheetName: string) {
  try {
    // Check if row 1 exists and has headers
    const headerRange = `${sheetName}!A1:F1`;
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: headerRange
    });

    const existingHeaders = response.data.values?.[0] || [];
    
    // Check if headers match (case-insensitive)
    const headersMatch = HEADERS.every((header, index) => {
      const existing = existingHeaders[index]?.toString().trim() || '';
      return existing.toLowerCase() === header.toLowerCase();
    });

    if (!headersMatch || existingHeaders.length === 0) {
      // Headers don't exist or don't match, add them
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: headerRange,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [HEADERS]
        }
      });
    }
  } catch (error) {
    // If row 1 doesn't exist or sheet is empty, add headers
    const headerRange = `${sheetName}!A1:F1`;
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: headerRange,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [HEADERS]
      }
    });
  }
}

function sanitizePayload(payload: ContactPayload) {
  const trimmed = Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, (value ?? '').toString().trim()])
  ) as Required<ContactPayload>;

  if (!trimmed.name) {
    throw new Error('Name is required');
  }
  if (!trimmed.email) {
    throw new Error('Email is required');
  }

  return trimmed;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const data = sanitizePayload(body);
    const { sheets, spreadsheetId } = getSheetsClient();
    const sheetName = getSheetName(SHEET_RANGE);

    // Ensure headers exist before appending data
    await ensureHeaders(sheets, spreadsheetId, sheetName);

    const values = [
      [
        new Date().toISOString(),
        data.name,
        data.businessName || '',
        data.contactNumber || '',
        data.email,
        data.message || ''
      ]
    ];

    // Append data starting from row 2 (after headers)
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:F`,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form submission failed', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
