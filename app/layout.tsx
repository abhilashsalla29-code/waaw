import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Waaw – Innovative Software Development & Digital Solutions",
  description: "Waaw is a leading software development company providing custom web development, e-commerce, design, digital marketing, and business automation services. We help clients turn their vision into seamless digital solutions.​",
  keywords: "software development, web development, digital transformation, e-commerce, IT consulting, bespoke software, Waaw",
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


