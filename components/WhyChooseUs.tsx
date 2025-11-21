"use client";
import { Award, Shield, GraduationCap, Globe, Building2, Users, Phone, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* عنوان با کمی مدرنیته */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            چرا آموزشگاه نخستین؟
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium max-w-4xl mx-auto leading-relaxed">
            چون ما بیش از دو دهه است که آینده شغلی هزاران نفر را با کیفیت تضمین‌شده ساخته‌ایم
          </p>
        </div>

        {/* ۳ ستون طلایی — رسمی + کمی مدرن */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* ۱. مجوز و مدرک */}
          <div className="group bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-xl hover:shadow-2xl 
                          border border-gray-200 dark:border-gray-800 transition-all duration-500">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-blue-800 
                            rounded-2xl flex items-center justify-center shadow-2xl ring-4 ring-blue-100 dark:ring-blue-900/30">
              <Award className="w-14 h-14 text-white" />
            </div>
            <h3 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-6">
              مجوز رسمی و مدرک بین‌المللی
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-lg leading-relaxed">
              دارای مجوز رسمی از سازمان فنی و حرفه‌ای کشور<br />
              مدرک معتبر و قابل ترجمه برای اشتغال و مهاجرت در سراسر جهان
            </p>
          </div>

          {/* ۲. اساتید — کمی برجسته‌تر و مدرن‌تر */}
          <div className="group bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-2xl 
                          border-4 border-blue-700 dark:border-blue-600 relative overflow-hidden
                          transform md:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5" />
            <div className="relative">
              <div className="w-28 h-28 mx-auto mb-8 bg-gradient-to-br from-blue-700 to-blue-900 
                              rounded-3xl flex items-center justify-center shadow-2xl ring-8 ring-blue-100/50 dark:ring-blue-900/40">
                <GraduationCap className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-3xl font-black text-center text-blue-800 dark:text-blue-400 mb-6">
                اساتید با سابقه اجرایی
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center text-lg leading-relaxed font-medium">
                اساتید ما مدیران و متخصصان فعال در صنعت هستند<br />
                آموزش بر پایه تجربه واقعی و پروژه‌های عملی
              </p>
            </div>
          </div>

          {/* ۳. تعهد به موفقیت */}
          <div className="group bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-xl hover:shadow-2xl 
                          border border-gray-200 dark:border-gray-800 transition-all duration-500">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-emerald-600 to-emerald-800 
                            rounded-2xl flex items-center justify-center shadow-2xl ring-4 ring-emerald-100 dark:ring-emerald-900/30">
              <Shield className="w-14 h-14 text-white" />
            </div>
            <h3 className="text-3xl font-black text-center text-gray-900 dark:text-white mb-6">
              تعهد به موفقیت شما
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-lg leading-relaxed">
              پشتیبانی کامل تا زمان اشتغال<br />
              معرفی به کار، مشاوره شغلی و به‌روزرسانی مداوم محتوا
            </p>
          </div>

        </div>

        {/* اعتبار سازمانی — کمی مدرن‌تر */}
        <div className="mt-24 bg-white dark:bg-gray-900 rounded-3xl p-16 shadow-2xl border border-gray-200 dark:border-gray-800">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <Building2 className="w-16 h-16 mx-auto text-blue-700 dark:text-blue-400" />
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">موسسه ثبت‌شده</h4>
              <p className="text-gray-600 dark:text-gray-400">شماره ثبت: ۲۸۴۵۶</p>
            </div>
            <div className="space-y-4">
              <Globe className="w-16 h-16 mx-auto text-blue-700 dark:text-blue-400" />
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">مجوز بین‌المللی</h4>
              <p className="text-gray-600 dark:text-gray-400">سازمان فنی و حرفه‌ای کشور</p>
            </div>
            <div className="space-y-4">
              <Users className="w-16 h-16 mx-auto text-blue-700 dark:text-blue-400" />
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">از سال ۱۳۸۱</h4>
              <p className="text-gray-600 dark:text-gray-400">در خدمت جامعه آموزشی ایران</p>
            </div>
          </div>
        </div>

        {/* کال تو اکشن — رسمی + کمی مدرن */}


      </div>
    </section>
  );
}