import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Blog App",
  description: "A full-featured blog application with real API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}