// app/course-types/page.tsx  ←  نسخه نهایی بدون قیمت
"use client";
import { Check, X, Users, Video, Download, Phone, Shield } from "lucide-react";

export default function CourseTypesPage() {
  return (
    <>
      {/* هدر رسمی */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-purple-800 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-purple-950 dark:to-pink-950 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-4 mb-10 px-12 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
            <Shield className="w-10 h-10 text-white" />
            <span className="text-white font-bold text-xl tracking-wider">مقایسه انواع دوره‌های آموزشی</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            انتخاب هوشمندانه، آینده‌ای موفق
          </h1>
          <p className="text-xl md:text-2xl text-white/85 max-w-4xl mx-auto leading-relaxed">
            آموزشگاه نخستین با بیش از ۲۳ سال سابقه، سه قالب آموزشی معتبر ارائه می‌دهد
          </p>
        </div>
      </section>

      {/* مقایسه اصلی — بدون قیمت */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* حضوری */}
            <div className="group">
              <div className="relative bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <div className="text-center mb-10">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center mb-6 shadow-2xl">
                    <Users className="w-14 h-14 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-3">دوره حضوری</h3>
                  <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">یادگیری عمیق و حرفه‌ای</p>
                </div>

                <ul className="space-y-5 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <li className="flex items-start gap-4"><Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> کلاس در آموزشگاه تهران (میدان ونک)</li>
                  <li className="flex items-start gap-4"><Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> ارتباط مستقیم با استاد و همکلاسی‌ها</li>
                  <li className="flex items-start gap-4"><Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> تمرین عملی در کارگاه مجهز</li>
                  <li className="flex items-start gap-4"><Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> مدرک رسمی بین‌المللی</li>
                  <li className="flex items-start gap-4"><Check className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" /> پشتیبانی تا قبولی در آزمون</li>
                </ul>

                <div className="mt-12">
                  <button className="w-full py-5 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-emerald-500/50 transition-all duration-300">
                    ثبت‌نام حضوری
                  </button>
                </div>
              </div>
            </div>

            {/* آنلاین زنده — محبوب‌ترین */}
{/* آنلاین زنده — محبوب‌ترین — کاملاً تمیز و سر جاش */}
<div className="group lg:scale-105">
  <div className="relative bg-white dark:bg-gray-800/90 border-4 border-purple-600 dark:border-purple-500 rounded-3xl p-10 shadow-2xl hover sonho:shadow-purple-500/40 transition-all duration-500 overflow-hidden">
    
    {/* این قسمت کاملاً فیکس شده و هیچوقت پرت نمیشه */}
    <div className="absolute inset-x-0 -top-6 flex justify-center pointer-events-none">
      <span className="px-10 py-4 mt-7 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-2xl tracking-wider whitespace-nowrap">
        محبوب‌ترین انتخاب
      </span>
    </div>

    <div className="pt-8"> {/* فاصله از بالا برای تگ محبوب‌ترین */}
      <div className="text-center mb-10">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mb-6 shadow-2xl">
          <Video className="w-14 h-14 text-white" />
        </div>
        <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-3">دوره آنلاین زنده</h3>
        <p className="text-xl font-bold text-purple-600 dark:text-purple-400">مثل حضوری، اما از خانه</p>
      </div>

      <ul className="space-y-5 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        <li className="flex items-start gap-4"><Check className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" /> کلاس زنده هفتگی با استاد</li>
        <li className="flex items-start gap-4"><Check className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" /> ضبط جلسات + دسترسی ۶ ماه</li>
        <li className="flex items-start gap-4"><Check className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" /> گروه اختصاصی رفع اشکال</li>
        <li className="flex items-start gap-4"><Check className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" /> مدرک رسمی بین‌المللی</li>
        <li className="flex items-start gap-4"><Check className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" /> آزمون حضوری در تهران</li>
      </ul>

      <div className="mt-12">
        <button className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-purple-500/50 transition-all duration-300">
          ثبت‌نام آنلاین زنده
        </button>
      </div>
    </div>
  </div>
</div>

            {/* ضبط‌شده */}
            <div className="group">
              <div className="relative bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                <div className="text-center mb-10">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl flex items-center justify-center mb-6 shadow-2xl">
                    <Download className="w-14 h-14 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-3">دوره ضبط‌شده</h3>
                  <p className="text-xl font-bold text-blue-600 dark:text-blue-400">یادگیری در زمان دلخواه</p>
                </div>

                <ul className="space-y-5 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  <li className="flex items-start gap-4"><Check className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" /> دسترسی مادام‌العمر</li>
                  <li className="flex items-start gap-4"><Check className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" /> ویدیوهای با کیفیت بالا</li>
                  <li className="flex items-start gap-4"><Check className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" /> امکان دانلود</li>
                  <li className="flex items-start gap-4"><X className="w-6 h-6 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" /> بدون مدرک رسمی</li>
                  <li className="flex items-start gap-4"><Check className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" /> گواهی دیجیتال پایان دوره</li>
                </ul>

                <div className="mt-12">
                  <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-blue-500/50 transition-all duration-300">
                    خرید دوره ضبط‌شده
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* کال تو اکشن نهایی */}
      <section className="py-24 bg-purple-700 dark:bg-purple-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            کارشناسان ما آماده راهنمایی شما هستند
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            مشاوره تخصصی و کاملاً رایگان — بدون هیچ تعهدی
          </p>
          <a href="tel:02188456789" className="inline-flex items-center gap-5 px-16 py-7 bg-white text-purple-900 rounded-2xl font-black text-2xl shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300">
            <Phone className="w-9 h-9" />
            ۰۲۱-۶۵۵۶۵۰۰۴
          </a>
        </div>
      </section>
    </>
  );
}