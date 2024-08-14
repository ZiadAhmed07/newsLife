'use client'

import { useEffect, useState } from "react";
import axios from 'axios';
import { apiData, apiImg } from "@/data/url";
import adsImg from '/public/image/ads.WebP';
import Image from "next/image";
import Link from 'next/link'


export default function AdsHeader() {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        axios.get(`${apiData}/user/showAll/advertisement`)
            .then((res) => {
                const data = res.data.data;
                const filteredAds = data.filter((el) => el.position.id === 1);
                setAds(filteredAds);
            })
            .catch((error) => {
                console.error("Error fetching ads:", error);
            });
    }, []);


    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.log(error.message)
        }
    }, [])

    function GetADs() {
        if (ads.length === 0) {
            return (
                <div className="w-full flex justify-center ">
                    <div className="sm:hidden w-full h-[300px] bg-gray-100">
                        <amp-ad width="100vw" height="300"
                            type="adsense"
                            data-ad-client="ca-pub-8948820292282679"
                            data-ad-slot="7732241352"
                            data-auto-format="rspv"
                            data-full-width="">
                            <div overflow=""></div>
                        </amp-ad>
                    </div>
                    <div className="bg-gray-100 w-full max-w-[970px] h-[90px] overflow-hidden max-sm:hidden">
                        <ins className="adsbygoogle"
                            style={{ display: "block" }}
                            data-ad-client="ca-pub-8948820292282679"
                            data-ad-slot="7732241352"
                            data-ad-format="rspv"
                            data-full-width-responsive="true">
                        </ins>
                    </div>
                </div>
            );
        }

        if (ads.length > 0) {
            return (
                <Link href={ads[0].url}>
                    <Image src={`${apiImg}/${ads[0].img}`} alt='...' width={970} height={90} className="w-[970px] h-[90px]" />
                </Link>
            );
        }
    }

    return (
        <div className="w-full">
            {GetADs()}
        </div>
    );
}
