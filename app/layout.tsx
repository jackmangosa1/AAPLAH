import React from "react";
import type { Metadata } from "next";
import "react-quill/dist/quill.snow.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "AGIR - Agro-industrie Rurale",
  description:
    "AGIR promeut une agro-industrie durable et inclusive, soutenant les producteurs ruraux dans la transformation locale, la formation et l’accès aux marchés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-full">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
