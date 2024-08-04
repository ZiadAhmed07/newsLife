'use client'

import { useEffect, useState } from "react"
import axios from 'axios'
import { apiData, apiImg } from "@/data/url"
import adsImg from '/public/image/300300.WebP'
import Image from "next/image"
import Link from "next/link"


export default function MiddleHome1() {

    const [ads , setAds] = useState()

    useEffect(()=>{
        axios({
            url:`${apiData}/user/showAll/advertisement`,
            method:'get'
        }).then((res)=>{
            const data = res.data.data
            const filter = data.filter((el)=>{
                return el.position.id == 4
            })
            setAds(filter)
        })

    },[])

    function GetADs(){
        if(!ads || ads.length ==0){
            return(
                <div>
                    <Image src={adsImg} alt="..." className="w-[300px] h-[300px]" />
                </div>
            )
        }
        if(ads.length > 0){
            console.log(ads)
            return(
                <Link href={ads[0].url}>
                <Image src={`${apiImg}/${ads[0].img}`} alt='...' width={300} height={300} className="w-[300px] h-[300px]"/>
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
