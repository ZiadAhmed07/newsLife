'use client'
import Script from "next/script";

export default function GoogleAds() {
    return (
        <>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8948820292282679"
                crossorigin="anonymous"
            />
            <Script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js" />
            <meta name="google-adsense-account" content="ca-pub-8948820292282679"></meta>
        </>
    )
}