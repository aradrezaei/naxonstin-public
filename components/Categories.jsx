"use client";
import { 
  Code2, Brain, Palette, Bot, Music, DollarSign, Brush, Camera 
} from "lucide-react";

export default function CategoriesSection() {
  const categories = [
    { name: "برنامه‌نویسی و توسعه", icon: Code2, color: "from-blue-600 to-blue-800", courses: "۳۲ دوره" },
    { name: "هوش مصنوعی و یادگیری ماشین", icon: Brain, color: "from-purple-600 to-purple-800", courses: "۲۸ دوره" },
    { name: "طراحی و گرافیک", icon: Palette, color: "from-orange-600 to-orange-800", courses: "۲۶ دوره" },
    { name: "رباتیک و اینترنت اشیاء", icon: Bot, color: "from-emerald-600 to-emerald-800", courses: "۲۲ دوره" },
    { name: "موسیقی حرفه‌ای", icon: Music, color: "from-indigo-600 to-indigo-800", courses: "۱۹ دوره" },
    { name: "مهارت‌های مالی و سرمایه‌گذاری", icon: DollarSign, color: "from-amber-600 to-amber-800", courses: "۲۴ دوره" },
    { name: "هنرهای دستی و صنایع خلاق", icon: Brush, color: "from-rose-600 to-rose-800", courses: "۲۰ دوره" },
    { name: "عکاسی و فیلم‌برداری حرفه‌ای", icon: Camera, color: "from-cyan-600 to-cyan-800", courses: "۲۵ دوره" },
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* عنوان */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tight">
            حوزه‌های آموزشی آموزشگاه نخستین
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium max-w-4xl mx-auto">
            انتخاب از میان ۸ حوزه تخصصی با اساتید دارای سابقه صنعتی و مدرک بین‌المللی
          </p>
        </div>

        {/* گرید — فوق تمیز + هاور خیلی ظریف و شیک */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((cat, i) => {
            const Icon = cat.icon;

            return (
              <div
                key={i}
                className="group bg-white dark:bg-gray-900 rounded-3xl shadow-xl 
                           border border-gray-200 dark:border-gray-800 
                           transition-all duration-500 h-full flex flex-col
                           hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-700
                           hover:-translate-y-2 hover:ring-4 hover:ring-blue-500/10"
              >
                {/* نوار رنگی بالا */}
                <div className={`h-1.5 rounded-t-3xl bg-gradient-to-r ${cat.color}`} />

                <div className="p-8 flex flex-col items-center text-center flex-grow">

                  {/* آیکون — کاملاً واضح در هر دو مود */}
                  <div className={`w-24 h-24 mb-8 rounded-3xl bg-gradient-to-br ${cat.color} 
                                  p-6 shadow-2xl flex items-center justify-center
                                  ring-8 ring-white/70 dark:ring-gray-900/70
                                  transition-transform duration-500 group-hover:scale-110`}>
                    <Icon className="w-14 h-14 text-white" />
                  </div>

                  {/* عنوان */}
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 leading-tight px-4">
                    {cat.name}
                  </h3>

                  {/* فقط تعداد دوره — ساده و شیک */}
                  <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800 w-full">
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      {cat.courses}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* خط جداکننده ظریف */}
        <div className="mt-20 flex justify-center">
          <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
        </div>

      </div>
    </section>
  );
}