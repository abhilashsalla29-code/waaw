import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Anima Project",
  description: "Migrated to Next.js",
  icons: {
    icon: "/vector.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}


