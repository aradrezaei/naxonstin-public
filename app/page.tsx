"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import {
  Code2, Brain, Palette, Bot, Music, DollarSign, Brush, Camera
} from "lucide-react";
import Categories from "@/components/Categories";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);

  /* Detect dark mode: saved theme > system preference */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = saved === "dark" || (!saved && prefersDark);

    setIsDark(shouldDark);
    if (shouldDark) document.documentElement.classList.add("dark");
  }, []);

  /* Fade-up animation for hero section text */
  useEffect(() => {
    document.querySelectorAll(".animate-fade-up").forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("opacity-100", "translate-y-0");
      }, i * 150);
    });
  }, []);



  return (
    <>
      {/* ==== HERO SECTION ==== */}
{/* ==== HERO SECTION (FINAL COLOR-FIXED) ==== */}
<section
  className="
    relative min-h-screen flex items-center justify-center overflow-hidden
    transition-all duration-1000
    bg-white
    dark:bg-gradient-to-br dark:from-gray-950 dark:via-purple-950 dark:to-pink-950
  "
>
  {/* Floating gradient lights */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="
          absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-3xl animate-pulse
          bg-purple-300/10 dark:bg-purple-500/25
        "
        style={{
          top: `${5 + i * 13}%`,
          left: i % 2 === 0 ? "-20%" : "80%",
          animationDelay: `${i * 0.35}s`,
          animationDuration: "12s",
        }}
      />
    ))}
  </div>

  <div className="absolute inset-0 dark:bg-black/40" />

  <div className="container mx-auto px-5 sm:px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center max-w-7xl mx-auto">

{/* Hero Image */}
<div className="order-1 lg:order-2 flex justify-center mt-12 lg:mt-0">
  <Image
    src="https://faradars.org/wp-content/uploads/2024/10/28/hero-illustration.svg"
    alt="Hero Illustration"
    width={650}
    height={650}
    className="w-[80%] max-w-sm sm:max-w-md lg:max-w-lg drop-shadow-2xl"
    priority
  />
</div>


      {/* Text Section */}
      <div className="order-2 lg:order-1 text-center lg:text-right space-y-6 sm:space-y-8 max-w-xl lg:max-w-2xl">

        {/* Title */}
        <h1
          className="
            font-black
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            leading-tight
            animate-fade-up opacity-0 translate-y-12
            text-gray-900 dark:text-white
          "
        >
          آموزشگاه{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
            نخستین
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="
            text-lg sm:text-2xl md:text-3xl lg:text-4xl
            font-bold
            animate-fade-up opacity-0 translate-y-12
            text-gray-800 dark:text-gray-200
          "
        >
          بزرگ‌ترین آموزشگاه تخصصی مهارت‌های کاربردی ایران
        </p>

        {/* Description */}
        <p
          className="
            text-base sm:text-lg md:text-xl
            leading-relaxed
            animate-fade-up opacity-0 translate-y-12
            text-gray-700 dark:text-gray-300
          "
        >
          بیش از ۱۵۰ دوره حرفه‌ای • حضوری در تهران • آنلاین در سراسر ایران
          <br className="hidden sm:block" />
          اولین جلسه رایگان • مدرک معتبر بین‌المللی • اساتید برتر کشور
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-8 animate-fade-up opacity-0 translate-y-12">

          <a
            href="tel:02188456789"
            className="
              px-7 py-4
              text-base sm:text-lg font-bold
              rounded-2xl
              bg-gradient-to-r from-pink-500 to-purple-600
              text-white shadow-xl hover:shadow-pink-500/40
              transition-all duration-300 hover:scale-105
              flex items-center justify-center gap-2.5
              whitespace-nowrap
            "
          >
            <Phone className="w-5 h-5" />
            مشاوره رایگان: ۶۵۵۶۵۰۰۴-۰۲۱
          </a>

          <a
            href="/courses"
            className="
              px-7 py-4
              text-base sm:text-lg font-bold
              rounded-2xl
              border-4 border-gray-300 dark:border-white/40
              text-gray-900 dark:text-white
              backdrop-blur-md
              hover:bg-gray-100/40 dark:hover:bg-white/10
              transition-all duration-300 whitespace-nowrap
            "
          >
            مشاهده همه دوره‌ها
          </a>
        </div>

      </div>
    </div>
  </div>

</section>

    <Categories />

    <WhyChooseUs />

    </>
  );
}
