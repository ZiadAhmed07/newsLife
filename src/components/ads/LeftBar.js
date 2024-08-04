'use client'

import { useEffect, useState } from "react"
import axios from 'axios'
import { apiData, apiImg } from "@/data/url"
import Link from 'next/link'
import Image from "next/image";

export default function AdsLeftBar() {

    const [ads , setAds] = useState()

    useEffect(()=>{
        axios({
            url:`${apiData}/user/showAll/advertisement`,
            method:'get'
        }).then((res)=>{
            const data = res.data.data
            const filter = data.filter((el)=>{
                return el.position.id == 3
            })
            setAds(filter)
        })

    },[])

    function GetADs(){
        if(!ads || ads.length == 0){
            return(
                <div className="w-full h-full bg-gray-200  flex items-center justify-center">160X600</div>
            )
        }
        if(ads.length > 0){
            console.log(ads)
            return(
                <Link href={ads[0].url}>
                    <Image src={`${apiImg}/${ads[0].img}`} alt='...' width={160} height={600} className="w-[160px] h-[600px]"/>
                </Link>
            )
        }
    }

  return (
    <div className="sticky top-0 w-[160px] h-[600px]">
        {GetADs()}
    </div>
  )
}

