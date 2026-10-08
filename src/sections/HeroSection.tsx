"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ShieldCheck, Sparkles, Clock, CheckCircle2, FileText } from "lucide-react";
import { motion, useInView, animate, type Variants } from "framer-motion";

interface HeroProps {
  onPrimaryClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

function CountUp({
  to,
  suffix = "",
  prefix = "",
  duration = 1,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function HeroSection({ onPrimaryClick }: HeroProps) {
  const stats = [
    {
      value: <CountUp to={100} suffix="%" duration={1} />,
      label: "خدمة مجانية بالكامل",
      icon: CheckCircle2,
    },
    {
      value: <CountUp to={24} suffix=" ساعة" duration={0.8} />,
      label: "متوسط وقت الاستجابة",
      icon: Clock,
    },
    {
      value: "تأطير كامل",
      label: "صياغة قانونية للشكوى",
      icon: FileText,
    },
    {
      value: <CountUp to={10000} prefix="+" duration={1.2} />,
      label: "طلب تم توثيقه",
      icon: Sparkles,
    },
  ];

  return (
    <div className="w-full bg-slate-50 dir-rtl text-right overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-neutral-950 text-white pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        
        {/* خلفية الإضاءة المتدرجة (Glow Effects) باللون الأخضر */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />

        {/* شبكة الخلفية */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-15 bg-[radial-gradient(#rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* الجانب الأيمن: المحتوى والتفاعلات */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-right">
              
              {/* الشارة الترحيبية */}
              <motion.div 
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/90 px-4 py-1.5 text-xs sm:text-sm font-medium text-neutral-300 shadow-inner backdrop-blur-md"
              >
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>منصة مستقلة لتوثيق الشكاوى — دولة الإمارات</span>
              </motion.div>

              {/* العنوان الرئيسي والوصف */}
              <div className="space-y-4">
                <motion.h1 
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]"
                >
                  منصة <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-200 via-emerald-400 to-emerald-500">حماية المستهلك</span>
                </motion.h1>

                <motion.p 
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0"
                >
                  منصة رقمية مستقلة وغير تابعة لأي جهة حكومية لتوثيق وتنظيم الشكاوى ضد المنشآت التجارية، لتسهيل متابعتها وإيصالها للجهات المختصة بوضوح وسرعة.
                </motion.p>
              </div>

              {/* أزرار الدعوة للإجراء (CTA) */}
              <motion.div 
                custom={4}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="#complaint-form"
                  onClick={onPrimaryClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-400 hover:to-emerald-500 font-bold px-8 py-4 text-base transition-all duration-300 group active:scale-95 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                >
                  <span>تقديم طلب توثيق شكوى</span>
                  <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                </a>

                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/80 hover:bg-neutral-800/80 hover:border-neutral-700 px-8 py-4 text-base font-medium text-neutral-300 transition-all duration-200 active:scale-95"
                >
                  دليل الإجراءات
                </a>
              </motion.div>

            </div>

            {/* الجانب الأيسر: الصورة مع حركة مستمرة */}
            <motion.div 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-5 flex justify-center items-center relative"
            >
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                
                {/* الإضاءة الدائرية الخلفية للصورة */}
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-emerald-500/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />

                {/* الصورة مع حركة مستمرة */}
                <motion.img
                  src="/xxx.png"
                  alt="منصة حماية المستهلك"
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10 w-full h-auto max-h-[350px] sm:max-h-[420px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                />
              </div>
            </motion.div>

          </div>
        </div>

      </section>

      {/* 2. ABOUT & STATS SECTION */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* النص التوضيحي */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4 text-center lg:text-right"
          >
            <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
              نبذة عنا
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              نعمل على تسهيل صياغة وإيصال شكواك
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              خدمة إلكترونية متخصصة في إعادة تأطير وصياغة الشكاوى التجارية في دولة الإمارات، لضمان استيفائها للبيانات والمستندات المطلوبة قبل رفعها للجهات المعنية.
            </p>
          </motion.div>

          {/* شبكة الإحصائيات مع الأيقونات والتأثيرات الخضراء */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between space-y-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-2xl font-black text-neutral-900 tracking-tight">
                      {item.value}
                    </span>
                    <span className="block text-xs sm:text-sm text-neutral-500 font-medium leading-snug">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </section>
      </div>

    </div>
  );
}