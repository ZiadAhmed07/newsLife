"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import { apiData, apiImg } from '@/data/url';
import { useEffect, useState } from 'react';
import axios from 'axios';



export default function ShapeSlider({slider}) {

    const data = slider.data

    function Slider() {
        if (!data) {
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

        if (data.length == 0) {
            return (
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
                            if(el){
                                return (
                                    <SwiperSlide key={index} className='rounded-[16px]  shadow-2xl'>
                                        <div className='w-full h-full relative'>
                                            <div className='absolute w-full h-full flex flex-col justify-center p-6 gap-4 bg-gray-950/50'>
                                                <h2 className='text-[30px] max-sm:text-[20px] font-bold text-white max-sm:w-[100%] w-[70%]'>{el?.title}</h2>
                                                <p className='text-[20px] max-sm:text-[16px] text-white max-sm:w-[100%] w-[70%] h-[60px] max-sm:h-[46px] overflow-hidden'>{el?.description}</p>
                                                <Link href={`/category/${el.category_id}/${el?.news_id}?news=${el?.title.replace(/\s+/g, '-')}`} className='px-8 py-2 font-bold bg-red-700 text-white w-fit rounded-md hover:shadow-xl hover:bg-red-800'>التفاصيل</Link>
                                            </div>
                                            <Image src={`${apiImg}/${el?.img}`} quality={30} alt='...' className='w-full h-full' width={500} height={300} quality={50}/>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        })
                    }
                </Swiper>
            )
        }
    }

    return (
        <>
            <div className='w-full h-screen max-sm:h-[400px] max-md:h-[600px] max-h-[900px] relative overflow-hidden p-4'>
                {Slider()}
            </div>
        </>
    );
}


