'use client'

import { apiData, apiImg } from "@/data/url";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "../loader/loader";



export default function CardNew() {

    const [data, setData] = useState(false)

    useEffect(() => {
        axios({
            url: `${apiData}/user/showAll/category`,
            method: 'get',
        }).then((res) => {
            setData(res.data.data.slice(0, 6))
        })
    }, [])

    function getCard() {
        if (!data) {
            return (
                <div className="flex flex-col gap-6 w-full ">
                    <div className="border p-2 border-r-8 border-r-red-700 flex justify-between items-center animate-pulse ">
                        <h2 className="font-bold text-lg">جارى التحميل</h2>
                    </div>
                    <div className="flex gap-6 justify-between max-lg:flex-col max-md:flex-row max-sm:flex-col h-[300px] rounded-md">
                        <div className="bg-gray-200 w-full h-full"></div>
                        <div className="flex flex-col gap-4 max-lg:flex-row max-md:flex-col w-full h-full">
                            <div className="bg-gray-200 rounded-md h-full w-full"></div>
                            <div className="bg-gray-200 rounded-md h-full w-full"></div>
                            <div className="bg-gray-200 rounded-md h-full w-full"></div> 
                        </div>
                    </div>
                </div>
            )
        }
        if (data) {
            return (
                data?.map((data, i) => {
                    console.log(data)
                    return (
                        <div key={i} className="flex flex-col gap-6">
                            <div className="border p-2 border-r-8 border-r-red-700 flex justify-between items-center">
                                <h2 className="font-bold text-lg">{data?.name}</h2>
                                <Link href={`/category/${data?.id}`} className="text-red-700 hover:text-red-600 font-bold text-sm">المزيد</Link>
                            </div>

                            <div className="flex gap-6 justify-between max-lg:flex-col max-md:flex-row max-sm:flex-col">
                                <Link href={`/category/${data?.id}/${data?.bestNews[0]?.news.id}?news=${data.bestNews[0]?.news?.title.replace(/\s+/g, '-')}`} className="flex flex-col gap-4">
                                    <Image width={400} height={400} src={`${apiImg}/${data?.bestNews[0]?.news.img}`} alt="..." className="w-full md:w-[500px] lg:w-full hover:opacity-80 transition max-h-[300px] " />
                                    <h2 className="font-bold text-lg w-full md:w-[500px] lg:w-full">{data?.bestNews[0]?.news?.title}</h2>
                                    <p className="text-sm font-bold text-gray-500">{data?.bestNews[0]?.news?.formatted_date}</p>
                                </Link>

                                <div className="flex flex-col gap-4 max-lg:flex-row max-md:flex-col ">
                                    <Link href={`/category/${data?.id}/${data?.bestNews[1]?.news.id}?news=${data.bestNews[0]?.news?.title.replace(/\s+/g, '-')}`} className="flex gap-4 max-lg:flex-col max-sm:flex-row max-sm:gap-6">
                                        <Image  height={200} src={`${apiImg}/${data?.bestNews[1]?.news.img}`} alt="..." width={120} className="w-full  max-w-[140px] max-h-[100px] hover:opacity-80 transition" />
                                        <div className="w-[300px] max-lg:w-[150px] max-sm:w-full flex flex-col justify-around max-md:w-[120px] gap-2">
                                            <h2 className=" text-xs">{data?.bestNews[1]?.news?.title}</h2>
                                            <p className="text-[10px] font-bold text-gray-500">{data?.bestNews[1]?.news?.formatted_date}</p>
                                        </div>
                                    </Link>

                                    <Link href={`/category/${data?.id}/${data?.bestNews[2]?.news.id}?news=${data.bestNews[0]?.news?.title.replace(/\s+/g, '-')}`} className="flex gap-4 max-lg:flex-col max-sm:flex-row max-sm:gap-6">
                                        <Image  height={200} src={`${apiImg}/${data?.bestNews[2]?.news.img}`} alt="..." width={120} className="w-full  max-w-[140px] max-h-[100px] hover:opacity-80 transition" />
                                        <div className="w-[300px] max-lg:w-[150px] max-sm:w-full flex flex-col justify-around max-md:w-[120px] gap-2">
                                            <h2 className=" text-xs">{data?.bestNews[2]?.news?.title}</h2>
                                            <p className="text-[10px] font-bold text-gray-500">{data?.bestNews[2]?.news?.formatted_date}</p>
                                        </div>
                                    </Link>

                                    <Link href={`/category/${data?.id}/${data?.bestNews[3]?.news.id}?news=${data.bestNews[0]?.news?.title.replace(/\s+/g, '-')}`} className="flex gap-4 max-lg:flex-col max-sm:flex-row max-sm:gap-6">
                                        <Image  height={200} src={`${apiImg}/${data?.bestNews[3]?.news.img}`} alt="..." width={120} className="w-full max-w-[140px] max-h-[100px] hover:opacity-80 transition" />
                                        <div className="w-[300px] max-lg:w-[150px] max-sm:w-full flex flex-col justify-around max-md:w-[120px] gap-2">
                                            <h2 className=" text-xs">{data?.bestNews[3]?.news?.title}</h2>
                                            <p className="text-[10px] font-bold text-gray-500">{data?.bestNews[3]?.news?.formatted_date}</p>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    )
                })
            )
        }
    }

    return (
        <div className="flex flex-col gap-10">
            {getCard()}
        </div>
    )
}