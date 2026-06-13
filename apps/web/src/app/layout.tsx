import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vitória Concursos",
  description: "Compare editais e acompanhe o aproveitamento da sua preparação."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
