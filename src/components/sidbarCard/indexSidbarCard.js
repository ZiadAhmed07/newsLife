'use client'

import Card from "./card";
import ads from '/public/image/300300.WebP'
import Image from "next/image";
import Loader from "../loader/loader";
import axios from "axios";
import { useEffect, useState } from "react";
import { apiData } from "@/data/url";
import Link from 'next/link'
import { apiImg } from '../../data/url'
import Ads2 from "/public/image/ads.WebP";
import Footer from "../footer/footer";
import AdsFooter from "../ads/footer";
import MiddleHome1 from "../ads/MiddleHome1";
import MiddleHome2 from "../ads/MiddleHome2";

export default function IndexSidbarCard() {

    const [data, setData] = useState(false)
    const [mostNews, setMostNews] = useState('')

    useEffect(() => {
        axios({
            url: `${apiData}/user/showAll/category`,
            method: 'get',
        }).then((res) => {
            const data = res.data.data
            const filter = data?.filter((el) => {
                return el.name == "رأى" || el.name == "تحيات"
            })
            setData(filter)
        })
    }, [])

    useEffect(() => {
        axios({
            url: `${apiData}/user/showAll/mostReadNews`,
            method: 'get',
        }).then((res) => {
            const data = res.data
            const filter = data.filter((e) => {
                return e.status == 'published'
            })
            setMostNews(filter)
        })
    }, [])

    function getCard() {
        if (!data) {
            return (
                <div>
                    <div className="border p-2 border-r-8 border-r-black flex justify-between items-center my-4 animate-pulse">
                        <h2 className="font-bold text-lg ">جارى التحميل</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full h-[300px]">
                        <div className=" rounded-md bg-gray-200 animate-pulse"></div>
                        <div className=" rounded-md bg-gray-200 animate-pulse"></div>
                        <div className=" rounded-md bg-gray-200 animate-pulse "></div>
                        <div className=" rounded-md bg-gray-200 animate-pulse"></div>
                        <div className=" rounded-md bg-gray-200 animate-pulse "></div>
                        <div className=" rounded-md bg-gray-200 animate-pulse"></div>
                    </div>
                </div>
            )
        }
        if (data && mostNews) {
            console.log(data)
            const filter1 = data[0]?.news.filter((e)=>{
                return e.status == "published"
            })
            const filter2 = data[1]?.news.filter((e)=>{
                return e.status == "published"
            })
            const rev1 =  filter1 ? [...filter1].reverse().splice(0,6) : console.log('123')
            const rev2 =  filter2 ? [...filter2].reverse().splice(0,6) : console.log('123')
            return (
                <div className="flex flex-col sticky top-0">
                    <div className='flex items-center justify-center my-6'>
                        <MiddleHome1 />
                    </div>
                    {
                        data[0].bestNews.length > 0 ?
                            <div className="flex flex-col gap-6 mt-10">
                                <div className="border p-2 border-r-8 border-r-black flex justify-between items-center">
                                    <h2 className="font-bold text-lg">{data[0]?.name}</h2>
                                    <Link href={`/category/${data[0]?.id}`} className="text-red-700 hover:text-red-600 font-bold text-sm">المزيد</Link>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {
                                        rev1.map((e, index) => {
                                            return (
                                                <Link href={`/category/${data[0]?.id}/${e.id}?news=${e.title.replace(/\s+/g, '-')}`} key={index} className="flex gap-4 sm:flex-col">
                                                    <Image src={`${apiImg}/${e.img}`} width={200} height={200} alt="..." className="hover:opacity-80 max-h-[150px] w-[200px] sm:w-full" />
                                                    <div className="flex flex-col gap-2">
                                                        <h2 className="text-xs font-bold">{e.title}</h2>
                                                        <p className="text-[10px] text-gray-500">{e.formatted_date}</p>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div> : <div></div>
                    }
                    {
                        data[1]?.bestNews.length > 0
                            ? <div className="flex flex-col gap-6 mt-10">
                                <div className="border p-2 border-r-8 border-r-black flex justify-between items-center">
                                    <h2 className="font-bold text-lg">{data[1]?.name}</h2>
                                    <Link href={`/category/${data[1]?.id}`} className="text-red-700 hover:text-red-600 font-bold text-sm">المزيد</Link>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {
                                        rev2.map((e, index) => {
                                            return (
                                                <Link href={`/category/${data[1]?.id}/${e.id}?news=${e.title.replace(/\s+/g, '-')}`} key={index} className="flex gap-4 sm:flex-col">
                                                    <Image src={`${apiImg}/${e.img}`} width={200} height={200} alt="..." className="hover:opacity-80 max-h-[150px] w-[200px] sm:w-full" />
                                                    <div className="flex flex-col gap-2">
                                                        <h2 className="text-xs font-bold">{e.title}</h2>
                                                        <p className="text-[10px] text-gray-500">{e.formatted_date}</p>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div> : <div></div>
                    }


                    <div className='flex items-center justify-center my-6'>
                        <MiddleHome2 />
                    </div>

                    <div className="flex flex-col gap-6 mt-10">
                        <div className="border p-2 border-r-8 border-r-black flex justify-between items-center">
                            <h2 className="font-bold text-lg">الاكثر قراءة</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {
                                mostNews?.slice(0, 6).map((e, index) => {
                                    return (
                                        <Link href={`/category/${e.category_id}/${e.id}?news=${e.title.replace(/\s+/g, '-')}`} key={index} className="flex gap-4 sm:flex-col">
                                            <Image src={`${apiImg}/${e.img}`} width={200} height={200} alt="..." className="hover:opacity-80 h-[150px] w-[200px] sm:w-full" />
                                            <div className="flex flex-col gap-2">
                                                <h2 className="text-xs font-bold">{e.title}</h2>
                                                <p className="text-[10px] text-gray-500">{e.formatted_date}</p>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <AdsFooter />
                    </div>

                </div>
            )
        }
    }

    return (
        <div>
            {getCard()}
        </div>
    )
}