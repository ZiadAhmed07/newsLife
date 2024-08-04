"use client"
import { useEffect } from 'react';
import Script from 'next/script';

export default function AdsNews2() {
  useEffect(() => {
    // تفعيل الإعلانات بعد تحميل السكربت
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="ad-container">
      {/* تحميل مكتبة AdSense */}
      <Script
        id="adsense-script"
        async
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8948820292282679"
        crossorigin="anonymous"
      />
      
      {/* عنصر الإعلان */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8948820292282679"
        data-ad-slot="1850833096"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      
      {/* تفعيل الإعلانات */}
      <Script
        id="adsense-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
        }}
      />
    </div>
  );
}
