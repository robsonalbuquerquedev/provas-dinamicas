import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Provas das Dinâmicas",
  description: "Organização visual das provas para evento bíblico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-amber-50 text-gray-900">{children}</body>
    </html>
  );
}
