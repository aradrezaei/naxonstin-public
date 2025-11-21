export default function Footer() {
  return (
    <footer className="bg-[rgb(10,6,20)] text-gray-300 py-12 mt-24 border-t border-purple-900/40">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-3">EduPro</h2>
          <p className="text-sm leading-relaxed">
            آموزش آنلاین حرفه‌ای با جدیدترین متدهای یادگیری.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold mb-2 text-white">لینک‌ها</span>
          <a className="hover:text-purple-400 transition">خانه</a>
          <a className="hover:text-purple-400 transition">درباره ما</a>
          <a className="hover:text-purple-400 transition">وبلاگ</a>
          <a className="hover:text-purple-400 transition">ارتباط با ما</a>
        </div>

        <div>
          <span className="font-semibold mb-2 block text-white">شبکه‌های اجتماعی</span>
          <div className="flex gap-4 text-lg">
            <span className="hover:text-purple-400 cursor-pointer">🌐</span>
            <span className="hover:text-purple-400 cursor-pointer">📘</span>
            <span className="hover:text-purple-400 cursor-pointer">📸</span>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-10">
        © 2025 EduPro – تمام حقوق محفوظ است.
      </p>
    </footer>
  );
}
