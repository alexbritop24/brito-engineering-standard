import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BES Next.js SaaS Template",
  description: "Production-ready SaaS foundation following the Brito Engineering Standard.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
