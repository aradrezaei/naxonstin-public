"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import {
  Code2, Brain, Palette, Bot, Music, DollarSign, Brush, Camera
} from "lucide-react";

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldDark = saved === "dark" || (!saved && prefersDark);
    setIsDark(shouldDark);
    if (shouldDark) document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    document.querySelectorAll('.animate-fade-up').forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0');
      }, i * 150);
    });
  }, []);

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

      <section className={`relative min-h-screen flex items-center overflow-hidden transition-all duration-1000
        ${isDark 
          ? "bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900" 
          : "bg-gradient-to-br from-purple-950 via-purple-900 to-pink-900"
        }`}
      >
        {/* ذرات معلق */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? "bg-purple-500/30" : "bg-purple-600/20"}`}
              style={{
                top: `${5 + i * 13}%`,
                left: i % 2 === 0 ? '-20%' : '80%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '12s'
              }}
            />
          ))}
        </div>

        <div className={`absolute inset-0 ${isDark ? "bg-black/60" : "bg-black/40"}`} />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center max-w-7xl mx-auto">

            {/* تصویر */}
            <div className="order-1 lg:order-2 flex justify-center">
              <Image
                src="https://faradars.org/wp-content/uploads/2024/10/28/hero-illustration.svg"
                alt="آموزشگاه نخستین"
                width={600}
                height={600}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl"
                priority
              />
            </div>

            {/* متن + دکمه‌ها (کامل برگشت!) */}
            <div className="order-2 lg:order-1 text-center lg:text-right space-y-8 lg:space-y-10 max-w-xl lg:max-w-2xl">
              <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight animate-fade-up opacity-0 translate-y-12">
                <span className="inline-block whitespace-nowrap align-middle">
                  <span className="text-white dark:text-gray-100">آموزشگاه </span>
                  <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
                    نخستین
                  </span>
                </span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white/95 dark:text-gray-200 animate-fade-up opacity-0 translate-y-12">
                بزرگ‌ترین آموزشگاه تخصصی مهارت‌های کاربردی ایران
              </p>

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/80 dark:text-gray-300 animate-fade-up opacity-0 translate-y-12">
                بیش از ۱۵۰ دوره حرفه‌ای • حضوری در تهران • به‌زودی آنلاین در سراسر ایران<br className="hidden sm:block" />
                اولین جلسه رایگان • مدرک معتبر بین‌المللی • اساتید برتر کشور
              </p>

              {/* دکمه‌ها — کوچیک‌تر، فاصله بیشتر، کاملاً درست */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mt-12 animate-fade-up opacity-0 translate-y-12">
                <a
                  href="tel:02188456789"
                  className="px-7 py-4 text-base sm:text-lg font-bold rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-xl hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2.5 whitespace-nowrap"
                >
                  <Phone className="w-5 h-5" />
                  مشاوره رایگان: ۰۲۱-۸۸۴۵۶۷۸۹
                </a>

                <a
                  href="/courses"
                  className="px-7 py-4 text-base sm:text-lg font-bold rounded-2xl border-4 border-white/40 text-white backdrop-blur-md hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 whitespace-nowrap"
                >
                  مشاهده همه دوره‌ها
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* فلش پایین */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* دسته‌بندی‌ها */}
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div key={i} className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-1000 ease-out hover:-translate-y-8 cursor-pointer" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-30 transition-opacity duration-1000`} />
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-1000" />
                  <div className="relative p-6 sm:p-8 lg:p-10 text-center">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${cat.color} p-4 sm:p-5 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-700">
                      {cat.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">بیش از ۲۰ دوره حرفه‌ای</p>
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