"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import {
  Code2, Brain, Palette, Bot, Music, DollarSign, Brush, Camera
} from "lucide-react";

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

  /* Categories (grid section) */
  const categories = [
    { name: "برنامه‌نویسی و توسعه", icon: Code2, color: "from-blue-500 to-cyan-500" },
    { name: "هوش مصنوعی", icon: Brain, color: "from-purple-500 to-pink-500" },
    { name: "طراحی و گرافیک", icon: Palette, color: "from-orange-500 to-red-500" },
    { name: "رباتیک", icon: Bot, color: "from-green-500 to-emerald-500" },
    { name: "موسیقی", icon: Music, color: "from-indigo-500 to-purple-500" },
    { name: "مهارت‌های مالی", icon: DollarSign, color: "from-yellow-500 to-amber-600" },
    { name: "هنرهای دستی", icon: Brush, color: "from-pink-500 to-rose-500" },
    { name: "عکاسی و فیلم‌برداری", icon: Camera, color: "from-teal-500 to-cyan-600" },
  ];

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
      <div className="order-1 lg:order-2 flex justify-center">
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
            مشاوره رایگان: ۰۲۱-۸۸۴۵۶۷۸۹
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


      {/* ==== CATEGORIES SECTION ==== */}
      <section className="py-20 sm:py-28 bg-gray-50 dark:bg-gray-900 transition-colors duration-1000">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-4">
              دسته‌بندی‌های آموزشی
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
              مهارت آینده‌ات رو همین امروز انتخاب کن
            </p>
          </div>

          {/* Grid of categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={i}
                  className="
                    group relative bg-white dark:bg-gray-800
                    rounded-3xl overflow-hidden shadow-xl
                    hover:shadow-3xl transition-all duration-1000 ease-out
                    hover:-translate-y-8 cursor-pointer
                  "
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Hover color glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-30 transition-opacity duration-1000`} />

                  {/* Outer neon blur */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-1000" />

                  <div className="relative p-6 sm:p-8 lg:p-10 text-center">

                    {/* Icon */}
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${cat.color} p-4 sm:p-5 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000`}>
                      <Icon className="w-full h-full text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-700">
                      {cat.name}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                      بیش از ۲۰ دوره حرفه‌ای
                    </p>

                    {/* Hover text animation */}
                    <div className="overflow-hidden h-8">
                      <span className="inline-block text-purple-600 dark:text-purple-400 font-bold text-sm sm:text-base translate-y-12 group-hover:translate-y-0 transition-transform duration-1000 ease-out">
                        مشاهده دوره‌ها
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
