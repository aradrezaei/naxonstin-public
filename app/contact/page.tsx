"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Building2, Shield } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // اینجا بعداً به API وصل می‌کنی
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* هدر صفحه */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent dark:from-purple-950/20">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-purple-900/10 dark:bg-purple-900/20 border border-purple-800/30 dark:border-purple-700/50 rounded-full">
            <Shield className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            <span className="text-purple-700 dark:text-purple-300 font-semibold">
              پشتیبانی ۲۴ ساعته در ۷ روز هفته
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6">
            تماس با ما
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            کارشناسان ما آماده پاسخگویی به سوالات شما هستند.<br />
            از ساعت ۸ صبح تا ۱۰ شب، هر روز هفته
          </p>
        </div>
      </section>

      {/* اطلاعات تماس + نقشه */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* کارت تماس */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 shadow-lg hover:border-purple-300 dark:hover:border-purple-600 transition">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 bg-purple-100 dark:bg-purple-900/50 rounded-2xl">
                  <Phone className="w-10 h-10 text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">تلفن پشتیبانی</h3>
                  <p className="text-3xl font-black text-purple-700 dark:text-purple-400 mt-2">021-88456789</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">پاسخگویی ۸ صبح تا ۱۰ شب</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p className="flex items-center gap-3"><Clock className="w-5 h-5" /> شنبه تا پنجشنبه: ۸ الی ۲۲</p>
                <p className="flex items-center gap-3"><Clock className="w-5 h-5" /> جمعه و تعطیل: ۹ الی ۲۰</p>
              </div>
            </div>

            {/* کارت ایمیل */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 shadow-lg hover:border-purple-300 dark:hover:border-purple-600 transition">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 bg-purple-100 dark:bg-purple-900/50 rounded-2xl">
                  <Mail className="w-10 h-10 text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">ایمیل</h3>
                  <p className="text-xl font-semibold text-purple-700 dark:text-purple-400 mt-2">info@nakhostin.academy</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">پاسخگویی حداکثر تا ۲۴ ساعت</p>
                </div>
              </div>
            </div>

            {/* کارت آدرس */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-10 shadow-lg hover:border-purple-300 dark:hover:border-purple-600 transition">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 bg-purple-100 dark:bg-purple-900/50 rounded-2xl">
                  <MapPin className="w-10 h-10 text-purple-700 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">آدرس دفتر مرکزی</h3>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mt-2">
                    تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۲۳۴
                  </p>
                </div>
              </div>
              <div className="bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-xl w-full h-48 flex items-center justify-center">
                <Building2 className="w-16 h-16 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* فرم تماس */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              پیام خود را ارسال کنید
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-3xl p-10 md:p-16">
            {submitted ? (
              <div className="text-center py-20">
                <CheckCircle className="w-24 h-24 text-green-600 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">پیام شما با موفقیت ارسال شد</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">در اسرع وقت با شما تماس خواهیم گرفت</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 transition"
                      placeholder="علی محمدی"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      شماره تماس
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 transition"
                      placeholder="09123456789"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    ایمیل (اختیاری)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 transition"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    پیام شما
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-100 dark:focus:ring-purple-900/50 transition resize-none"
                    placeholder="سوال یا درخواست خود را اینجا بنویسید..."
                  />
                </div>

                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-4 px-12 py-6 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-bold text-xl transition shadow-xl"
                  >
                    <Send className="w-6 h-6" />
                    ارسال پیام
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* کال تو اکشن نهایی */}
      <section className="py-20 bg-purple-700 dark:bg-purple-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            منتظر تماس شما هستیم
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            هر سوالی دارید، همین امروز بپرسید. کارشناسان ما آماده راهنمایی شما هستند.
          </p>
        </div>
      </section>
    </>
  );
}