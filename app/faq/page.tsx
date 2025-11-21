"use client";

import { useState } from "react";
import { ChevronDown, Shield, Award, Phone, GraduationCap, Clock, MapPin, CheckCircle } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "آیا مدرک شما معتبر است و قابل ترجمه می‌باشد؟",
      a: "بله، تمام دوره‌های آموزشگاه نخستین منجر به آزمون رسمی سازمان فنی و حرفه‌ای کشور می‌شود و پس از قبولی، مدرک معتبر بین‌المللی دریافت می‌کنید که قابل ترجمه رسمی و تأیید در دادگستری و وزارت امور خارجه است."
    },
    {
      q: "آیا کلاس‌ها حضوری است یا آنلاین؟",
      a: "در حال حاضر تمام دوره‌ها به صورت حضوری در تهران برگزار می‌شوند. به‌زودی (تا پایان سال ۱۴۰۴) پلتفرم آموزش آنلاین سراسری راه‌اندازی خواهد شد."
    },
    {
      q: "اولین جلسه کلاس رایگان است؟",
      a: "بله! اولین جلسه هر دوره کاملاً رایگان و بدون تعهد است. می‌توانید استاد، محیط و روش تدریس را ببینید و سپس تصمیم به ثبت‌نام بگیرید."
    },
    {
      q: "آزمون فنی و حرفه‌ای چطور برگزار می‌شود؟",
      a: "ما شما را تا روز آزمون همراهی می‌کنیم. پس از اتمام دوره، برایتان در نزدیک‌ترین مرکز آزمون فنی و حرفه‌ای ثبت‌نام می‌کنیم و تا روز قبولی در کنارتان هستیم."
    },
    {
      q: "آیا تضمین اشتغال دارید؟",
      a: "بله. برای بیش از ۸۰٪ دوره‌های تخصصی، معرفی به کار و تضمین اشتغال تا ۶ ماه پس از اتمام دوره داریم. بیش از ۶۵٪ فارغ‌التحصیلان ما در ۳ ماه اول مشغول به کار شده‌اند."
    },
    {
      q: "ساعات کاری آموزشگاه چه زمانی است؟",
      a: "شنبه تا پنجشنبه: ۸ صبح تا ۱۰ شب\nجمعه و تعطیلات: ۹ صبح تا ۸ شب\nپشتیبانی تلفنی ۲۴ ساعته: 021-88456789"
    },
    {
      q: "آدرس دقیق آموزشگاه کجاست؟",
      a: "تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۲۳۴ (روبروی ایستگاه مترو ونک)\nطبقه همکف و اول ساختمان آموزشی نخستین"
    },
    {
      q: "آیا امکان پرداخت قسطی وجود دارد؟",
      a: "بله. برای اکثر دوره‌ها امکان پرداخت در ۳ تا ۶ قسط بدون سود وجود دارد. همچنین تخفیف‌های ویژه برای پرداخت نقدی و ثبت‌نام زودتر از موعد داریم."
    },
    {
      q: "حداقل مدرک تحصیلی برای ثبت‌نام چیست؟",
      a: "برای اکثر دوره‌ها مدرک دیپلم کافی است. برخی دوره‌های تخصصی (مثل هوش مصنوعی پیشرفته) نیاز به مدرک کاردانی یا بالاتر دارند که در صفحه هر دوره مشخص شده است."
    },
    {
      q: "آیا اساتید شما تجربه صنعتی دارند؟",
      a: "همه اساتید ما حداقل ۷ سال سابقه کار صنعتی یا تدریس دانشگاهی دارند. بسیاری از آن‌ها در شرکت‌های بزرگ یا به صورت فریلنس در سطح بین‌المللی فعالیت می‌کنند."
    }
  ];

  return (
    <>
      {/* هدر صفحه */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent dark:from-purple-950/20">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-purple-900/10 dark:bg-purple-900/20 border border-purple-800/30 dark:border-purple-700/50 rounded-full">
            <Shield className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-700 dark:text-purple-300 font-semibold">
              پاسخ به سوالات شما با شفافیت کامل
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6">
            سوالات متداول
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            پاسخ به رایج‌ترین سوالاتی که دانشجویان قبل از ثبت‌نام می‌پرسند
          </p>
        </div>
      </section>

      {/* لیست سوالات */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 text-right flex items-center justify-between gap-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
                >
                  <ChevronDown
                    className={`w-6 h-6 text-purple-600 dark:text-purple-400 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-right flex-1">
                    {faq.q}
                  </h3>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8 pr-16">
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA نهایی */}
      <section className="py-24 bg-purple-700 dark:bg-purple-800">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              هنوز سوالی دارید؟
            </h2>
            <p className="text-xl text-purple-100 mb-12">
              کارشناسان ما آماده پاسخگویی به شما هستند — ۲۴ ساعته، حتی در تعطیلات
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:02188456789"
                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-purple-700 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/50 transition"
              >
                <Phone className="w-7 h-7" />
                تماس فوری: ۰۲۱-۸۸۴۵۶۷۸۹
              </a>
              <a
                href="/contact"
                className="px-12 py-6 bg-transparent border-4 border-white text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition"
              >
                ارسال پیام از طریق فرم تماس
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}