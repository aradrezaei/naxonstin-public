// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "آموزشگاه نخستین | بزرگ‌ترین آموزشگاه فنی و حرفه‌ای ایران",
    template: "%s | آموزشگاه نخستین",
  },
  description:
    "آموزشگاه نخستین با بیش از ۲۳ سال سابقه، ارائه‌دهنده مدرک معتبر بین‌المللی فنی و حرفه‌ای — بیش از ۱۰۰٬۰۰۰ فارغ‌التحصیل موفق",
  keywords: [
    "آموزشگاه فنی و حرفه‌ای",
    "مدرک معتبر بین‌المللی",
    "دوره‌های حضوری تهران",
    "آموزش مهارت",
    "سازمان فنی و حرفه‌ای",
    "آموزشگاه نخستین",
  ],
  authors: [{ name: "آموزشگاه نخستین" }],
  creator: "Nakhostin Academy",
  publisher: "Nakhostin Academy",
  metadataBase: new URL("https://nakhostin.academy"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "آموزشگاه نخستین",
    description: "بزرگ‌ترین آموزشگاه تخصصی مهارت‌های کاربردی ایران با مدرک معتبر بین‌المللی",
    url: "https://nakhostin.academy",
    siteName: "آموزشگاه نخستین",
    images: [
      {
        url: "/og-image.jpg", // بذار یه عکس 1200x630 تو public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "آموزشگاه نخستین",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "آموزشگاه نخستین",
    description: "مدرک معتبر بین‌المللی | ۲۳ سال سابقه | ۱۰۰٬۰۰۰+ فارغ‌التحصیل",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // بعداً بذار
  },
  category: "education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <head>
        {/* فونت شبنم — بهترین روش CDN */}
        <link rel="preconnect" href="https://cdn.fontcdn.ir" />
        <link href="https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.css" rel="stylesheet" />

        {/* Favicon حرفه‌ای — همه سایزها */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preload مهم */}
        <link rel="preload" href="/logo.png" as="image" />
      </head>

      <body className="font-shabnam antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}