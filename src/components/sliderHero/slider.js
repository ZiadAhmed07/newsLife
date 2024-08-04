"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import axios from 'axios';
import { apiData, apiImg } from '@/data/url';
import Loader from '../loader/loader';


export default function ShapeSlider() {

    const [data, setData] = useState()

    useEffect(() => {
        axios({
            url: `${apiData}/user/showAll/slider`,
            method: 'get',
        }).then((res) => {
            const filter = res.data.data?.filter((el) => {
                return el.news?.status == "published"
            })
            setData(filter)
        })
    }, [])

    function slider() {
        if (!data ) {
            return (
                <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className='w-[88%] h-[88%]'
            >
                <SwiperSlide className='rounded-[16px] bg-gray-200  shadow-2xl'></SwiperSlide>    
                <SwiperSlide className='rounded-[16px] bg-gray-200  shadow-2xl'></SwiperSlide>    
                <SwiperSlide className='rounded-[16px] bg-gray-200  shadow-2xl'></SwiperSlide>    
                <SwiperSlide className='rounded-[16px] bg-gray-200  shadow-2xl'></SwiperSlide>    
                <SwiperSlide className='rounded-[16px] bg-gray-200  shadow-2xl'></SwiperSlide>                
            </Swiper>
            )
        }

        if(data.length == 0){
            return(
                <div className='w-full h-[500px] bg-gray-200 flex items-center justify-center font-bold text-gray-600 text-xl'>
                     لا يوجد اخبار
                </div>
            )
        }

        if (data) {
            return (
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    className='w-[88%] h-[88%]'
                >
                    {
                        data.map((el, index) => {
                            return (
                                <SwiperSlide key={index} className='rounded-[16px]  shadow-2xl'>
                                    <div className='w-full h-full relative'>
                                        <div className='absolute w-full h-full flex flex-col justify-center p-6 gap-4 bg-gray-950/50'>
                                            <h2 className='text-[30px] max-sm:text-[20px] font-bold text-white max-sm:w-[100%] w-[70%]'>{el.news.title}</h2>
                                            <p className='text-[20px] max-sm:text-[16px] text-white max-sm:w-[100%] w-[70%] h-[60px] max-sm:h-[46px] overflow-hidden'>{el.news.part1}</p>
                                            <Link href={`/category/${el.news.category?.id}/${el.news.id}`} className='px-8 py-2 font-bold bg-red-700 text-white w-fit rounded-md hover:shadow-xl hover:bg-red-800'>التفاصيل</Link>
                                        </div>
                                        <Image src={`${apiImg}/${el.news.img}`} alt='...' className='w-full h-full' width={1000} height={1000} />
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            )
        }
    }

    return (
        <>
            <div className='w-full h-screen max-sm:h-[400px] max-md:h-[600px] max-h-[900px] relative overflow-hidden p-4'>
                {slider()}
            </div>
        </>
    );
}


