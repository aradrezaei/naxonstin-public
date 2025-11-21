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
    "آموزشگاه نخستین با ۲۳ سال سابقه، ارائه‌دهنده مدرک معتبر بین‌المللی فنی و حرفه‌ای — بیش از ۱۰۰٬۰۰۰ فارغ‌التحصیل موفق",
  metadataBase: new URL("https://nakhostin.academy"),
  alternates: { canonical: "/" },

  openGraph: {
    title: "آموزشگاه نخستین",
    description:
      "بزرگ‌ترین آموزشگاه تخصصی مهارت‌های کاربردی ایران با مدرک معتبر بین‌المللی",
    url: "https://nakhostin.academy",
    siteName: "آموزشگاه نخستین",
    images: [
      {
        url: "/og-image.jpg",
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
    description: "۲۳ سال سابقه | مدرک معتبر | ۱۰۰٬۰۰۰+ فارغ‌التحصیل",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className="
        scroll-smooth
        dark:bg-gray-950
        bg-white
        min-h-full
      "
    >
      <head>
        {/* فونت شابنم — CDN اصلی */}
        <link rel="preconnect" href="https://cdn.fontcdn.ir" />
        <link
          href="https://cdn.fontcdn.ir/Font/Persian/Shabnam/Shabnam.css"
          rel="stylesheet"
        />

        {/* Favicon کامل */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body
        className="
          font-shabnam
          antialiased
          text-gray-900 dark:text-gray-100
          min-h-screen
          flex flex-col
          overflow-x-hidden     /* جلوگیری از اسکرول افقی */
          overscroll-none      /* جلوگیری از Bounce در موبایل */
          touch-pan-y
        "
      >
        <Navbar />

        {/* محتوای صفحات */}
        <main className="flex-1 w-full overflow-x-hidden text-gray-900 " >
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
