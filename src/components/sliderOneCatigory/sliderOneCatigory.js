"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { apiData, apiImg } from '@/data/url';
import Loader from '../loader/loader';

export default function SliderOneCatigory({ params }) {

    const [data, setData] = useState('')

    useEffect(() => {
        axios({
            url: `${apiData}/user/show/category/${params}`,
            method: 'get',
        }).then((res) => {
            setData(res.data.data)
        })
    }, [])

    function getCategory() {
        if (!data.bestNews) {
            const load = [1,2,3,4]
            return (
                <div>
                    <div className=" p-2 w-full border  border-r-8 border-r-red-700 my-10 animate-pulse">
                        <h2 className="font-bold text-lg">...جارى التحميل</h2>
                    </div>

                    <div className='w-full md:hidden'>
                        <Swiper
                            pagination={true}
                            modules={[Pagination]}
                            className=' max-sm:w-full h-[300px]'
                        >
                            {
                                load.map((el , index) => {
                                    return (
                                        <SwiperSlide key={index} className='bg-gray-200 w-full h-full animate-pulse'>

                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>

                    <div className='max-md:hidden w-full h-[350px] flex flex-col gap-4 lg:flex-row relative'>
                        <div className='w-full h-full bg-gray-200 hover:opacity-80 animate-pulse relative flex items-center'></div>
                        <div className='w-full flex gap-4 h-[150px] lg:h-full animate-pulse lg:w-[200px] lg:flex-col absolute bottom-0 p-4 lg:p-0 lg:relative'>
                            {
                                load.slice(1,4).map((el , i)=>{
                                    return(
                                        <div key={i} className=' bg-gray-200 animate-pulse w-full h-full hover:opacity-80 relative'> </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )}

        if (data.bestNews?.length == 0) {
            return (
                <div className='w-full h-[400px] my-6 bg-gray-100 flex items-center justify-center relative'>
                    <p className='text-xl font-bold text-gray-600'> لا يوجد اخبار</p>
                </div>)
        }
        if (data) {
            return (
                <div>
                    <div className=" p-2 w-full border  border-r-8 border-r-red-700 my-10">
                        <h2 className="font-bold text-lg">{data.name}</h2>
                    </div>

                    <div className='w-full md:hidden'>
                        <Swiper
                            pagination={true}
                            modules={[Pagination]}
                            className=' max-sm:w-full h-[300px]'
                        >
                            {
                                data.bestNews?.map((el , index) => {
                                    return (
                                        <SwiperSlide key={index} className='bg-red-200 w-full h-full'>
                                            <Link href={`/category/${data.id}/${el.news.id}`}>
                                                <h2 className='absolute text-xl font-bold w-[90%] bottom-6 right-6 text-white'>{el.news.title}</h2>
                                                <Image width={300} height={300} src={`${apiImg}/${el.news.img}`} alt='...' className='w-full h-full' />
                                            </Link>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>

                    <div className='max-md:hidden w-full h-full  flex flex-col gap-4 lg:flex-row relative'>

                        <Link href={`/category/${data.id}/${data.bestNews[0]?.news.id}`} className='w-full h-full hover:opacity-80 relative flex items-center'>
                            <Image width={300} height={300} src={`${apiImg}/${data.bestNews[0]?.news.img}`} alt='...' className='w-full h-full ' />
                            <h2 className='absolute text-xl font-bold w-[80%] lg:bottom-6 right-6 text-white'>{data.bestNews[0]?.news.title}</h2>
                        </Link>

                        <div className='w-full flex gap-4 h-[150px] lg:h-full lg:w-[200px] lg:flex-col absolute bottom-0 p-4 lg:p-0 lg:relative'>
                            {
                                data.bestNews?.slice(1,4).map((el , i)=>{
                                    return(
                                        <Link key={i} href={`/category/${data.id}/${el.news.id}`} className=' w-full h-full hover:opacity-80 relative'>
                                            <h2 className='absolute p-2 text-xs md:bottom-0 md:right-0 text-white'>{el.news.title}</h2>
                                            <Image width={300} height={300} src={`${apiImg}/${el.news.img}`} alt='...' className='w-full h-full ' />
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {getCategory()}
        </div>
    );
}
