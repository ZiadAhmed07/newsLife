'use client'

import BgImg from '/public/image/bg-dashborad.WebP'
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Time() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const now = new Date()
    const date = (new Intl.DateTimeFormat('ar', { dateStyle: 'full' })).format(now)


    return (
        <div className="w-full rounded-lg h-[200px] flex bg-white relative overflow-hidden">
            <Image src={BgImg} alt="..." className="w-full h-full" />
            <div className="font-20 absolute w-full h-full bg-gray-700/80 text-white p-6">
                <p className={" font-bold text-[70px]"}>{time.toLocaleTimeString('ar', { minute: '2-digit', hour: "2-digit" })}</p>
                <p className="font-bold">{date}</p>
            </div>
        </div>
    )
}
