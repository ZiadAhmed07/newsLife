'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';
import { apiData } from '@/data/url';
import Link from 'next/link'

export default function SliderTrind({getSliderTrind}) {

  const data = getSliderTrind.data

  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        modules={[Mousewheel, Autoplay]}
        className=' h-[40px] w-[300px] relative'
      >
        {
          data?.map((el, i) => {
            return (
              <SwiperSlide key={i} className='flex text-center py-[10px] text-sm w-full truncate'>
                <Link href={`/category${el?.category_id}/${el?.id}`}>
                  {el?.title}
                </Link>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
