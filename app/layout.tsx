import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "AAPLAH",
  description:
    "Bienvenue sur le site de l'Association AAPELAH, une organisation dédiée à la lutte contre l'insécurité alimentaire et à l'amélioration des conditions de vie des communautés vulnérables de Beni, en République Démocratique du Congo. Nous menons des projets de production agricole, piscicole et avicole pour renforcer l'autosuffisance alimentaire, tout en fournissant des formations pratiques pour développer des compétences durables. Découvrez comment nous contribuons à la sécurité alimentaire et à la création de revenus pour les familles locales, et rejoignez-nous dans notre mission pour un avenir meilleur.",
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
