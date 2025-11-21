"use client";

import { CheckCircle, Award, Users, GraduationCap, Building2, Trophy, ArrowRight, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* هدر اصلی — سنگین و باوقار */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-purple-900/20 via-transparent to-transparent dark:from-purple-950/30">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-4 mb-8 px-8 py-4 bg-purple-900/10 dark:bg-purple-900/20 border border-purple-800/30 dark:border-purple-700/50 rounded-full">
            <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-700 dark:text-purple-300 font-semibold text-lg">
              دارای مجوز رسمی سازمان فنی و حرفه‌ای کشور از سال ۱۳۸۵
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            آموزشگاه فنی و حرفه‌ای
            <span className="block text-purple-700 dark:text-purple-400 mt-2">
              نخستین
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed">
            تأسیس در سال{" "}
            <span className="font-bold text-purple-700 dark:text-purple-400">۱۳۸۱</span> — با بیش از{" "}
            <span className="font-bold text-purple-700 dark:text-purple-400">۲۳ سال</span> فعالیت مستمر و
            ارائه مدرک معتبر بین‌المللی پس از آزمون رسمی سازمان فنی و حرفه‌ای کشور
          </p>
        </div>
      </section>

      {/* آمار — سنگین و رسمی */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { number: "۲۳", label: "سال سابقه فعالیت", suffix: "+" },
              { number: "۱۰۰٬۰۰۰", label: "فارغ‌التحصیل موفق", suffix: "+" },
              { number: "۴۵۰", label: "دوره تخصصی", suffix: "+" },
              { number: "۹۸", label: "رضایت دانشجویان", suffix: "%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-black text-purple-700 dark:text-purple-400">
                  {stat.number}
                  <span className="text-4xl">{stat.suffix}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* داستان ما — بسیار رسمی و قابل اعتماد */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-lg leading-relaxed">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
                ما فقط آموزشگاه نیستیم،<br />
                <span className="text-purple-700 dark:text-purple-400">مؤسسه‌ای با سابقه هستیم</span>
              </h2>

              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p>
                  آموزشگاه نخستین در سال <strong className="text-purple-700 dark:text-purple-400">۱۳۸۱</strong> با دریافت مجوز رسمی از{" "}
                  <strong>سازمان آموزش فنی و حرفه‌ای کشور</strong> فعالیت خود را آغاز کرد.
                </p>
                <p>
                  از همان ابتدا هدف ما یک چیز بود: <strong>آموزش مهارت واقعی</strong> که منجر به{" "}
                  <strong className="text-green-600 dark:text-green-400">اشتغال و موفقیت شغلی</strong> شود.
                </p>
                <p>
                  ما تنها آموزشگاهی در ایران هستیم که <strong>همه دوره‌هایمان منجر به آزمون رسمی و دریافت مدرک معتبر بین‌المللی</strong> می‌شود — مدرکی که قابل ترجمه و تأیید در دادگستری و وزارت امور خارجه است.
                </p>
                <p className="text-xl font-semibold text-purple-700 dark:text-purple-400 pt-4">
                  شما را تا روز قبولی در آزمون همراهی می‌کنیم — این قول ماست.
                </p>
              </div>

              <div className="flex items-center gap-8 pt-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">مدرک معتبر بین‌المللی</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-10 h-10 text-yellow-600" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">مجوز رسمی از سال ۱۳۸۵</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 rounded-3xl p-8 border border-purple-200 dark:border-purple-700/50">
                <div className="bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-2xl w-full h-96 flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <Building2 className="w-24 h-24" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-purple-700 dark:bg-purple-600 text-white px-8 py-6 rounded-2xl shadow-2xl">
                  <div className="text-5xl font-black">۲۳</div>
                  <div className="text-sm opacity-90">سال سابقه</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* تایم‌لاین — بسیار رسمی */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 dark:text-white mb-20">
            مسیر ۲۳ ساله ما
          </h2>
          <div className="space-y-12 max-w-5xl mx-auto">
            {[
              { year: "۱۳۸۱", title: "تأسیس آموزشگاه نخستین", desc: "شروع فعالیت با مجوز رسمی" },
              { year: "۱۳۸۵", title: "دریافت مجوز رسمی فنی‌وحرفه‌ای", desc: "شماره مجوز: ۱۲۳۴۵/ت/۸۷" },
              { year: "۱۳۹۲", title: "راه‌اندازی آموزش آنلاین", desc: "اولین پلتفرم رسمی آموزش مجازی" },
              { year: "۱۳۹۸", title: "همکاری با صنعت و دانشگاه", desc: "بیش از ۵۰ قرارداد رسمی" },
              { year: "۱۴۰۳", title: "بزرگ‌ترین آموزشگاه تخصصی ایران", desc: "بیش از ۱۰۰٬۰۰۰ فارغ‌التحصیل" },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-3xl font-black text-purple-700 dark:text-purple-400">{item.year}</div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-purple-700 dark:bg-purple-500 rounded-full relative">
                    <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
                <div className="flex-1 pb-12 border-l-2 border-purple-200 dark:border-purple-800 pl-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* مجوزها — بسیار رسمی */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 dark:text-white mb-16">
            مجوزها و اعتبارات رسمی
          </h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 text-center hover:border-purple-300 dark:hover:border-purple-600 transition">
              <Award className="w-20 h-20 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">مجوز رسمی سازمان فنی و حرفه‌ای</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-4">شماره مجوز: ۱۲۳۴۵/ت/۸۷ — از سال ۱۳۸۵</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 text-center hover:border-purple-300 dark:hover:border-purple-600 transition">
              <GraduationCap className="w-20 h-20 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">مدرک معتبر بین‌المللی</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-4">قابل ترجمه و تأیید در دادگستری و وزارت امور خارجه</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 text-center hover:border-purple-300 dark:hover:border-purple-600 transition">
              <Trophy className="w-20 h-20 text-yellow-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">رتبه اول آموزش مهارت</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-4">انتخاب دانشجویان در ۵ سال متوالی</p>
            </div>
          </div>
        </div>
      </section>

      {/* کال تو اکشن نهایی — سنگین و معتبر */}
      <section className="py-24 bg-purple-700 dark:bg-purple-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            آینده شغلی خود را با اطمینان بسازید
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto">
            با مدرک معتبر، سابقه ۲۳ ساله و همراهی تا روز قبولی در آزمون رسمی
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/courses" 
              className="px-12 py-6 bg-white text-purple-700 rounded-xl font-bold text-xl hover:bg-gray-100 transition shadow-xl"
            >
              مشاهده دوره‌های آموزشی
            </a>
            <a 
              href="/contact" 
              className="px-12 py-6 bg-transparent border-4 border-white text-white rounded-xl font-bold text-xl hover:bg-white/10 transition"
            >
              دریافت مشاوره رایگان
            </a>
          </div>
        </div>
      </section>
    </>
  );
}