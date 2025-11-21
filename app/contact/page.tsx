"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building2, Shield } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* هدر صفحه */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent dark:from-purple-950/20">
        <div className="container mx-auto px-6 sm:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6 sm:mb-8 px-6 py-3 sm:px-8 sm:py-4 bg-purple-900/10 dark:bg-purple-900/20 border border-purple-800/30 dark:border-purple-700/50 rounded-full text-sm sm:text-base">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-700 dark:text-purple-300 font-semibold">
              پشتیبانی در ساعات کاری
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6">
            تماس با ما
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            کارشناسان ما آماده پاسخگویی به سوالات شما هستند.<br />
            از ساعت ۹ صبح تا ۱۰ شب، شنبه تا پنجشنبه
          </p>
        </div>
      </section>

      {/* اطلاعات تماس */}
      <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-3">

            {/* کارت تماس */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:border-purple-300 dark:hover:border-purple-600 transition">
              <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                <div className="p-3 sm:p-4 bg-purple-100 dark:bg-purple-900/50 rounded-2xl">
                  <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">تلفن پشتیبانی</h3>
                  <p className="text-xl sm:text-3xl font-black text-purple-700 dark:text-purple-400 mt-1 sm:mt-2">021-65565004</p>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">شنبه تا پنجشنبه: ۹ صبح تا ۱۰ شب</p>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">جمعه‌ها تعطیل</p>
                </div>
              </div>
            </div>

            {/* کارت ایمیل */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:border-purple-300 dark:hover:border-purple-600 transition">
              <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                <div className="p-3 sm:p-4 bg-purple-100 dark:bg-purple-900/50 rounded-2xl">
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">ایمیل</h3>
                  <p className="text-base sm:text-xl font-semibold text-purple-700 dark:text-purple-400 mt-1 sm:mt-2">info@nakhostin.academy</p>
                  <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1">پاسخگویی حداکثر تا ۲۴ ساعت</p>
                </div>
              </div>
            </div>

            {/* کارت آدرس */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:border-purple-300 dark:hover:border-purple-600 transition">
              <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                <div className="p-3 sm:p-4 bg-purple-100 dark:bg-purple-900/50 rounded-2xl">
                  <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">آدرس دفتر مرکزی</h3>
                  <p className="text-sm sm:text-lg font-semibold text-gray-700 dark:text-gray-300 mt-1 sm:mt-2">
                    تهران، اندیشه، فاز ۱، نرسیده به شاهد غربی
                  </p>
                </div>
              </div>
              <div className="bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-xl w-full h-40 sm:h-48 flex items-center justify-center">
                <Building2 className="w-12 sm:w-16 h-12 sm:h-16 text-gray-400" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* فرم تماس */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 sm:px-8 max-w-3xl sm:max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6">
              پیام خود را ارسال کنید
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 sm:p-10 md:p-16">
            {submitted ? (
              <div className="text-center py-16 sm:py-20">
                <CheckCircle className="w-20 sm:w-24 h-20 sm:h-24 text-green-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">پیام شما با موفقیت ارسال شد</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">در اسرع وقت با شما تماس خواهیم گرفت</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                  <div>
                    <label className="block text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="علی محمدی"
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-400 focus:ring-2 sm:focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">
                      شماره تماس
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="09123456789"
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-400 focus:ring-2 sm:focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">
                    ایمیل (اختیاری)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-400 focus:ring-2 sm:focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">
                    پیام شما
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="سوال یا درخواست خود را اینجا بنویسید..."
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-400 focus:ring-2 sm:focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 transition resize-none"
                  />
                </div>

                <div className="text-center pt-4 sm:pt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-3 sm:py-4 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold text-base sm:text-xl transition shadow-lg"
                  >
                    <Send className="w-4 sm:w-6 h-4 sm:h-6" />
                    ارسال پیام
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* کال تو اکشن نهایی */}
      <section className="py-16 sm:py-20 bg-purple-700 dark:bg-purple-800">
        <div className="container mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-8">
            منتظر تماس شما هستیم
          </h2>
          <p className="text-base sm:text-lg text-purple-100 max-w-xl sm:max-w-3xl mx-auto">
            هر سوالی دارید، همین امروز بپرسید. کارشناسان ما آماده راهنمایی شما هستند.
          </p>
        </div>
      </section>
    </>
  );
}
