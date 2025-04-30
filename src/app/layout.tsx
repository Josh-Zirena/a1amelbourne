import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A1A Melbourne Wrestling",
  description: "Official site for A1A Wrestling Events in Melbourne, FL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
        <div id="dialog-portal" className="fixed inset-0 z-50 pointer-events-none" />
      </body>
    </html>
  );
}
