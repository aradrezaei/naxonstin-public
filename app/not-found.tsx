// app/not-found.tsx
"use client";

import Link from "next/link";
import { Home, Search, ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12 py-20">
          {/* آیکون بزرگ */}
          <div className="relative">
            <div className="absolute inset-0 bg-purple-600/20 dark:bg-purple-500/10 blur-3xl rounded-full w-96 h-96 mx-auto" />
            <div className="relative">
              <AlertCircle className="w-32 h-32 md:w-48 md:h-48 text-purple-600 dark:text-purple-400 mx-auto animate-pulse" />
            </div>
          </div>

          {/* متن اصلی */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 dark:text-white">
              ۴۰۴
            </h1>
            <p className="text-3xl md:text-5xl font-bold text-gray-700 dark:text-gray-300">
              صفحه مورد نظر یافت نشد
            </p>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              متأسفانه آدرس وارد شده صحیح نیست یا صفحه حذف شده است.
              <br />
              اما نگران نباشید — ما هنوز اینجاییم تا به شما کمک کنیم!
            </p>
          </div>

          {/* دکمه‌ها */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-4 px-10 py-6 bg-purple-700 hover:bg-purple-800 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              <Home className="w-7 h-7 group-hover:scale-110 transition" />
              بازگشت به خانه
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center gap-4 px-10 py-6 bg-white dark:bg-gray-800 border-4 border-purple-700 dark:border-purple-600 text-purple-700 dark:text-purple-400 rounded-2xl font-bold text-xl hover:bg-purple-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <Search className="w-7 h-7" />
              مشاهده دوره‌ها
            </Link>
          </div>

          {/* پیام احساسی */}
          <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              یا از منوی بالا به بخش مورد نظر خود بروید
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 text-purple-700 dark:text-purple-400">
              <ArrowLeft className="w-6 h-6 animate-pulse" />
              <span className="font-bold text-xl">منتظر شما هستیم</span>
              <ArrowLeft className="w-6 h-6 animate-pulse rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}