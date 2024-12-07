'use client'

import { useEffect, useState } from "react"
import axios from 'axios'
import { apiData, apiImg } from "@/data/url"
import adsImg from '/public/image/300300.WebP'
import Image from "next/image"
import Link from "next/link"


export default function News2() {

    const [ads, setAds] = useState()

    useEffect(() => {
        axios({
            url: `${apiData}/user/showAll/advertisement`,
            method: 'get'
        }).then((res) => {
            const data = res.data.data
            const filter = data.filter((el) => {
                return el.position.id == 9
            })
            setAds(filter)
        })

    }, [])


    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.log(error.message)
        }
    }, [])

    function GetADs() {
        if (!ads || ads.length == 0) {
            return (
                <>
                    <div className="max-sm:hidden w-[300px] h-[300px] bg-gray-100">
                        <ins className="adsbygoogle "
                            style={{ display: "block" }}
                            data-ad-client="ca-pub-8948820292282679"
                            data-ad-slot="8916664233"
                            data-ad-format="rspv"
                            data-full-width-responsive="true">
                        </ins>
                    </div>
                    <div className="sm:hidden w-full h-[300px] bg-gray-100">
                        <amp-ad width="100vw" height="300"
                            type="adsense"
                            data-ad-client="ca-pub-8948820292282679"
                            data-ad-slot="8916664233"
                            data-auto-format="rspv"
                            data-full-width="">
                            <div overflow=""></div>
                        </amp-ad>
                    </div>
                </>
            )
        }
        if (ads.length > 0) {
            console.log(ads)
            return (
                <Link href={ads[0].url}>
                    <Image src={`${apiImg}/${ads[0].img}`} alt='...' width={300} height={300} className="w-[300px] h-[300px]" />
                </Link>
            )
        }
    }

    return (
        <div className="w-[300px] h-[300px]">
            {GetADs()}
        </div>
    )
}

