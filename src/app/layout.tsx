import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoobTeam",
  description: "Let's work together to learn and grow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-200 font-serif">{children}</body>
    </html>
  );
}
