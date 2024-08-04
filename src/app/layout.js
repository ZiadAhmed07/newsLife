
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
  description: "الوطنى نيوز",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8948820292282679"
          crossorigin="anonymous"></script>
      </Head>
      <body className={`${NKA.className}`}>
        <ToastContainer className={'text-right font-bold'} />
        <NextTopLoader />
        <div className="max-w-[1360px] relative">
          {children}
        </div>
      </body>
    </html>
  );
}
