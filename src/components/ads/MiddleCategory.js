'use client'

import { useEffect, useState } from "react"
import axios from 'axios'
import { apiData, apiImg } from "@/data/url"
import adsImg from '/public/image/ads.WebP';
import Image from "next/image";
import Link from 'next/link'


export default function MiddleCategory() {

    const [ads, setAds] = useState()

    useEffect(() => {
        axios({
            url: `${apiData}/user/showAll/advertisement`,
            method: 'get'
        }).then((res) => {
            const data = res.data.data
            const filter = data.filter((el) => {
                return el.position.id == 7
            })
            setAds(filter)
        })

    }, [])


    function GetADs() {
        if (!ads || ads.length == 0) {
            return (
                <div className="w-full">
                    <Link href={'/ads'}>
                        <Image src={adsImg} alt='...' width={970} height={90} className="w-[970px] h-[90px]" />
                    </Link>
                </div>
            )
        }
        if (ads.length > 0) {
            console.log(ads)
            return (
                <Link href={ads[0].url}>
                    <Image src={`${apiImg}/${ads[0].img}`} alt='...' width={970} height={90} className="w-[970px] h-[90px]" />
                </Link>
            )
        }
    }

    return (
        <div>
            {GetADs()}
        </div>
    )
}

