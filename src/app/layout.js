
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import Script from "next/script";

const NKA = Noto_Kufi_Arabic({ subsets: ["latin"] });

export const metadata = {
  title: "الوطنى نيوز",
  description: "الوطنى نيوز هو مصدر موثوق لأحدث الأخبار والتحديثات المحلية والعالمية. نقدم تغطية شاملة لأخبار السياسة، الاقتصاد، الرياضة، التكنولوجيا، الثقافة، والفنون.... تابعنا للحصول على تقارير تحليلية ومقالات محدثة في الوقت الحقيقي من جميع أنحاء العالم.",
  keywords: "أخبار, أخبار اليوم, أخبار عاجلة, أحدث الأخبار, أخبار عالمية, أخبار محلية, تحديثات الأخبار, أخبار الساعة, مستجدات الأخبار, تغطية إخبارية, أخبار السياسة, أخبار الاقتصاد, أخبار الرياضة, أخبار التكنولوجيا, أخبار الثقافة, أخبار الفن, أخبار الصحة, أخبار العلوم, أخبار التعليم, أخبار الطقس, أخبار في الوقت الحقيقي, أخبار بدون إعلانات, مقالات تحليلية, تقارير إخبارية مفصلة, تحديثات سياسية لحظية, تحليلات اقتصادية, تغطية شاملة للأحداث, أفضل مواقع الأخبار, مصادر أخبار موثوقة, أخبار مؤثرة اليوم, أخبار كرة القدم, أخبار السيارات, أخبار السفر, أخبار الموضة, الوطنى نيوز , اخبار مصر ,أخبار الألعاب",
  site_name: 'الوطنى نيوز',
  robots: {
    index: true,
    follow: true,
  },
  language: 'ar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8948820292282679"
          crossorigin="anonymous"
        />
        <Script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"/>
      </head>
      <body className={`${NKA.className}`}>
        <ToastContainer className={'text-right font-bold'} />
        <NextTopLoader color="red" />
        <div className="max-w-[1360px] relative">
          {children}
        </div>
      </body>
    </html>
  );
}
