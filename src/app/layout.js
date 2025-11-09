import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: 'Helpdesk Ticket Board',
  description: 'Filter, search, queue, and watch live ticket updates.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        {children}
      </body>
    </html>
  );
}