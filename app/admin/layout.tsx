import React from "react";
import type { Metadata } from "next";
import AdminHeader from "../components/AdminHeader";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
}
