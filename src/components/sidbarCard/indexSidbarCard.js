'use client'

import Image from "next/image";
import Link from 'next/link'
import { apiImg } from '../../data/url'
import AdsFooter from "../ads/footer";
import MiddleHome1 from "../ads/MiddleHome1";
import MiddleHome2 from "../ads/MiddleHome2";

export default function IndexSidbarCard({category}) {

    const data = category.data 

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
        if (data ) {
            const rev1 = data[0]
            const rev2 = data[1]
            const rev3 = data[2]
            return (
                <div className="flex flex-col sticky top-0">
                    <div className="flex justify-center">
                    <MiddleHome1 />
                    </div>

                    
                    {
                        data[0].news.length > 0 ?
                            <div className="flex flex-col gap-6 mt-10">
                                <div className="border p-2 border-r-8 border-r-black flex justify-between items-center">
                                    <h2 className="font-bold text-lg">{data[0].category_name}</h2>
                                    <Link href={`/category/${data[0]?.category_id}`} className="text-red-700 hover:text-red-600 font-bold text-sm">المزيد</Link>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {
                                        rev1.news.map((e, index) => {
                                            return (
                                                <Link href={`/category/${data[0]?.category_id}/${e.news_id}?news=${e.title.replace(/\s+/g, '-')}`} key={index} className="flex gap-4 sm:flex-col">
                                                    <Image  src={`${apiImg}/${e.img}`} width={200} height={150} alt="..." className="hover:opacity-80 max-h-[150px] w-[200px] sm:w-full" />
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
                    {
                        data[1]?.news.length > 0
                            ? <div className="flex flex-col gap-6 mt-10">
                                <div className="border p-2 border-r-8 border-r-black flex justify-between items-center">
                                    <h2 className="font-bold text-lg">{data[1]?.category_name}</h2>
                                    <Link href={`/category/${data[1]?.category_id}`} className="text-red-700 hover:text-red-600 font-bold text-sm">المزيد</Link>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {
                                        rev2.news.map((e, index) => {
                                            return (
                                                <Link href={`/category/${data[1]?.category_id}/${e.news_id}?news=${e.title.replace(/\s+/g, '-')}`} key={index} className="flex gap-4 sm:flex-col">
                                                    <Image  src={`${apiImg}/${e.img}`} width={200} height={150} alt="..." className="hover:opacity-80 max-h-[150px] w-[200px] sm:w-full" />
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
                        
                    </div>
                    {
                        data[2]?.news.length > 0
                            ? <div className="flex flex-col gap-6 mt-10">
                                <div className="border p-2 border-r-8 border-r-black flex justify-between items-center">
                                    <h2 className="font-bold text-lg">{data[2]?.category_name}</h2>
                                    <Link href={`/category/${data[2]?.category_id}`} className="text-red-700 hover:text-red-600 font-bold text-sm">المزيد</Link>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {
                                        rev3.news.map((e, index) => {
                                            return (
                                                <Link href={`/category/${data[2]?.category_id}/${e.news_id}?news=${e.title.replace(/\s+/g, '-')}`} key={index} className="flex gap-4 sm:flex-col">
                                                    <Image  src={`${apiImg}/${e.img}`} width={200} height={150} alt="..." className="hover:opacity-80 max-h-[150px] w-[200px] sm:w-full" />
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



                    {/*
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
                    */}

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