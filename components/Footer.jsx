"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {


  const socialLinks = [
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
  ];

  const quickLinks = [
    { label: "خانه", href: "/" },
    { label: "همه دوره‌ها", href: "/courses" },
    { label: "اساتید", href: "/teachers" },
    { label: "درباره ما", href: "/about" },
    { label: "بلاگ", href: "/blog" },
    { label: "تماس با ما", href: "/contact" },
  ];

  const categories = [
    "برنامه‌نویسی", "هوش مصنوعی", "طراحی گرافیک", "رباتیک",
    "موسیقی", "مهارت‌های مالی", "هنرهای دستی", "عکاسی"
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b dark:from-purple-950 dark:via-black dark:to-black from-gray-50 via-white to-gray-50 text-gray-700 dark:text-gray-300 border-t dark:border-purple-900/40 border-gray-200">
      
      {/* پس‌زمینه گرادیانت متحرک — فقط تو دارک مود */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-cyan-600/20 blur-3xl animate-pulse dark:block hidden" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* بخش 1: لوگو و توضیحات */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-70 group-hover:opacity-100 transition duration-700 dark:block hidden" />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-lg group-hover:opacity-100 transition hidden dark:block" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 dark:shadow-2xl shadow-lg rounded-2xl flex items-center justify-center text-white font-black text-3xl border border-white/20 dark:border-white/10">
                  ن
                </div>
              </div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 dark:bg-clip-text bg-clip-text text-transparent">
                نخستین
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
              بزرگ‌ترین آموزشگاه تخصصی مهارت‌های کاربردی ایران با اساتید برتر کشور و مدرک معتبر بین‌المللی.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className={`p-3 rounded-xl bg-gray-100 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 dark:hover:bg-purple-500/10 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/20`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* بخش 2: لینک‌های سریع */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
              لینک‌های سریع
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* بخش 3: دسته‌بندی‌ها */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
              دسته‌بندی دوره‌ها
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href="/categories"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-white/5 px-4 py-2 rounded-lg transition-all duration-300 text-sm backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-purple-400/50"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* بخش 4: تماس */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
              تماس با ما
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 dark:from-purple-600/20 dark:to-pink-600/20 backdrop-blur-lg border border-purple-300 dark:border-purple-500/30">
                  <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">تلفن پشتیبانی</p>
                  <p className="font-semibold text-gray-900 dark:text-white">021-65565004</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-pink-600/10 to-purple-600/10 dark:from-pink-600/20 dark:to-purple-600/20 backdrop-blur-lg border border-pink-300 dark:border-pink-500/30">
                  <Mail className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">ایمیل</p>
                  <p className="font-semibold text-gray-900 dark:text-white">info@nakhostin.academy</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-600/10 to-purple-600/10 dark:from-cyan-600/20 dark:to-purple-600/20 backdrop-blur-lg border border-cyan-300 dark:border-cyan-500/30">
                  <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-500">آدرس</p>
                  <p className="font-semibold text-gray-900 dark:text-white">تهران,اندیشه,فاز ۱,نرسیده به شاهد غربی</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* خط جداکننده */}
        <div className="mt-16 mb-8 h-px bg-gradient-to-r from-transparent via-purple-400/50 dark:via-purple-500/50 to-transparent" />

        {/* کپی‌رایت */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-600 dark:text-gray-500">
          <p>© ۱۴۰۴ - ۲۰۲۵ آموزشگاه نخستین • تمام حقوق محفوظ است</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400 transition">حریم خصوصی</Link>
            <Link href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition">شرایط استفاده</Link>
            <Link href="/faq" className="hover:text-purple-600 dark:hover:text-purple-400 transition">سوالات متداول</Link>
          </div>
        </div>
      </div>


    </footer>
  );
}