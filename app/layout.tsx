import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "مکتب‌من",
  description: "آموزش آنلاین حرفه‌ای",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <head>
        {/* فونت شبنم از CDN (بهترین و سریع‌ترین روش) */}
        <link
          rel="preconnect"
          href="https://cdn.fontcdn.ir"
        />
        <link
          href="https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-shabnam antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}