import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My City",
  description: "An app to improve polution in your city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
