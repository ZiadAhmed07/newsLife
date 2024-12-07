'use client'

import { useEffect, useState } from "react";
import axios from 'axios';
import { apiData, apiImg } from "@/data/url";
import adsImg from '/public/image/ads.WebP';
import Image from "next/image";
import Link from 'next/link';
import AdSense from 'react-adsense';

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

    function GetADs() {
        if (ads.length === 0) {
            return (
                <Link href={'/ads'}>
                    <Image src={adsImg} alt='...' width={970} height={90} className="w-[970px] h-[90px]" />
                </Link>
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
