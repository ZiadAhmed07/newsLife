'use client'

import { apiImg } from "@/data/url";
import Image from "next/image";
import Link from "next/link";



export default function CardNew({ category }) {

    const data = category.data?.slice(0, 6)

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

                    return (
                        <div key={i} className="flex flex-col gap-6">
                            <div className="border p-2 border-r-8 border-r-red-700 flex justify-between items-center">
                                <h2 className="font-bold text-lg">{data?.category_name}</h2>
                                <Link href={`/category/${data?.category_id}`} className="text-red-700 hover:text-red-600 font-bold text-sm">المزيد</Link>
                            </div>

                            <div className="flex gap-6 justify-between max-lg:flex-col max-md:flex-row max-sm:flex-col">
                                <Link href={`/category/${data?.category_id}/${data?.news[0].news_id}?news=${data?.news[0].title?.replace(/\s+/g, '-')}`} className="flex flex-col gap-4">
                                    <Image width={500} height={300} src={`${apiImg}/${data.news[0]?.img}`} alt="..." className="w-full md:w-[500px] lg:w-full hover:opacity-80 transition max-h-[300px] " />
                                    <h2 className="font-bold text-lg w-full md:w-[500px] lg:w-full">{data.news[0]?.title}</h2>
                                    <p className="text-sm font-bold text-gray-500">{data.news[0]?.formatted_date}</p>
                                </Link>

                                <div className="flex flex-col gap-4 max-lg:flex-row max-md:flex-col ">
                                    {
                                        data.news.slice(1,4).map((el, i) => {
                                            return (
                                                <Link key={i} href={`/category/${data?.category_id}/${el?.news_id}?news=${el.title?.replace(/\s+/g, '-')}`} className="flex gap-4 max-lg:flex-col max-sm:flex-row max-sm:gap-6">
                                                    <Image height={100} src={`${apiImg}/${el?.img}`} alt="..." width={120} className="w-full max-w-[140px] max-h-[100px] hover:opacity-80 transition" />
                                                    <div className="w-[300px] max-lg:w-[150px] max-sm:w-full flex flex-col justify-around max-md:w-[120px] gap-2">
                                                        <h2 className=" text-xs">{el?.title}</h2>
                                                        <p className="text-[10px] font-bold text-gray-500">{el?.formatted_date}</p>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
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