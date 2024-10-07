import type { Metadata } from "next";
import "./globals.css";
import { SearchProvider } from "@/utils/SearchContext";

export const metadata: Metadata = {
  title: "Kitt Travel",
  description: "Kitt Travel Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
        {children}
        </SearchProvider>
      </body>
    </html>
  );
}
