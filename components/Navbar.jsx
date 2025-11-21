"use client";

import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useSwipeable } from "react-swipeable";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const sidebarRef = useRef(null);

  // دارک مود
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved === "dark" || (!saved && prefersDark);
    setIsDark(initial);
    if (initial) document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newVal = !prev;
      if (newVal) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newVal;
    });
  };

  // اسکرول برای تغییر نوار
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // بستن منو با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  // سوایپ
  const handlers = useSwipeable({
    onSwipedRight: () => setMobileOpen(true),
    onSwipedLeft: () => setMobileOpen(false),
    trackMouse: true,
  });

  const navItems = [
    { href: "/", label: "خانه" },
    { href: "/courses", label: "همه دوره‌ها" },
    { href: "/teachers", label: "اساتید" },
    { href: "/about", label: "درباره ما" },
    { href: "/blog", label: "بلاگ" },
    { href: "/contact", label: "تماس با ما" },
  ];

  const categories = [
    "برنامه‌نویسی و توسعه", "هوش مصنوعی", "طراحی و گرافیک", "رباتیک",
    "موسیقی", "مهارت‌های مالی", "هنرهای دستی", "عکاسی و فیلم‌برداری"
  ];

  return (
    <>
      {/* نوار اصلی */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-950/95 shadow-lg backdrop-blur-2xl"
          : " backdrop-blur-2xl"
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* چپ — همبرگر + لوگو */}
{/* چپ — لوگو + عنوان */}
<div className="flex items-center gap-5">
  {/* دکمه همبرگر فقط تو موبایل */}
  <button
    onClick={() => setMobileOpen(!mobileOpen)}
    className="lg:hidden z-50"
  >
    <Menu className={`w-7 h-7 transition-all ${mobileOpen ? "opacity-0" : "opacity-100"} ${scrolled ? "text-gray-900 dark:text-white" : "text-white"}`} />
    <X className={`w-7 h-7 absolute transition-all ${mobileOpen ? "opacity-100" : "opacity-0"} ${scrolled ? "text-gray-900 dark:text-white" : "text-white"}`} />
  </button>

  <a href="/" className="flex items-center gap-5">
    {/* لوگو — دقیقاً مثل فوتر */}
    <div className="relative w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-700 to-purple-900 rounded-2xl shadow-xl flex items-center justify-center border border-purple-300 dark:border-purple-700 overflow-hidden">
      {/* لوگوی واقعی */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/logo.png')" }}
      />
      {/* fallback: حرف ن */}
    </div>

    {/* عنوان — فقط تو دسکتاپ */}
    <span className={`hidden lg:block text-2xl font-black tracking-tight ${scrolled ? "text-gray-900 dark:text-white" : "text-white"}`}>
      آموزشگاه نخستین
    </span>
  </a>
</div>

            {/* منوی دسکتاپ */}
            <nav className={`hidden lg:flex items-center gap-1 font-medium ${scrolled ? "text-gray-700 dark:text-gray-300" : "text-white/90"}`}>
              {navItems.map(item => (
                <a key={item.href} href={item.href} className="px-6 py-4 hover:bg-white/10 dark:hover:bg-white/5 rounded-xl transition-all">
                  {item.label}
                </a>
              ))}
              <div className="relative group">
                <button className="px-6 py-4 hover:bg-white/10 dark:hover:bg-white/5 rounded-xl transition-all flex items-center gap-2">
                  دسته‌بندی‌ها
                  <svg className="w-4 h-4 group-hover:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-96 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 ease-out translate-y-4 group-hover:translate-y-0">
                  <div className="p-8 grid grid-cols-2 gap-5">
                    {categories.map(cat => (
                      <a key={cat} href="#" className="py-4 px-5 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white rounded-2xl transition-all text-gray-700 dark:text-gray-300">
                        {cat}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* راست */}
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="p-3 bg-black/30 dark:bg-white/20 backdrop-blur-lg rounded-full hover:scale-110 transition-all">
                {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-white/80" />}
              </button>
              <a href="/login" className="hidden lg:block px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-bold transition-all">
                ورود | ثبت‌نام
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* سایدبار موبایل — شاهکار نهایی */}
      <div
        ref={sidebarRef}
        {...handlers}
        className={`fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-white dark:bg-gray-950 shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-black text-xl">
              ن
            </div>
            <span className="text-xl font-black text-gray-900 dark:text-white">نخستین</span>
          </div>
          <button onClick={() => setMobileOpen(false)}>
            <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6 space-y-1 overflow-y-auto h-full pb-32">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-4 px-3 text-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all"
            >
              {item.label}
            </a>
          ))}

          <details className="group">
            <summary className="flex justify-between items-center py-4 px-3 text-lg font-medium text-gray-800 dark:text-gray-200 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl">
              دسته‌بندی‌ها
              <svg className="w-5 h-5 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="py-3 space-y-2 pl-6">
              {categories.map(cat => (
                <a key={cat} href="#" className="block py-2.5 text-purple-600 dark:text-purple-400 font-medium">
                  {cat}
                </a>
              ))}
            </div>
          </details>

          <a
            href="/login"
            onClick={() => setMobileOpen(false)}
            className="block mt-8 py-4 text-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl font-bold text-lg transition-all"
          >
            ورود | ثبت‌نام
          </a>
        </div>
      </div>

      {/* اوورلی تیره وقتی منو بازه */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}