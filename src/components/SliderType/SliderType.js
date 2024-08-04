"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Autoplay, HashNavigation } from 'swiper/modules';
import axios from 'axios';
import { apiData } from '@/data/url';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SliderType() {

  const [data, setData] = useState([])
  const pathName = usePathname()

  useEffect(() => {
    axios({
      url: `${apiData}/user/showAll/category`,
      method: 'get',
    }).then((res) => {
      setData(res.data.data)
    })
  }, [])

  function HoemLink() {
    if (pathName == '/') {
      return(
        <SwiperSlide className='cursor-pointer py-2 font-bold text-red-700 relative text-center'>
        <Link href={`/`}>الرئيسيه</Link>
        <div className={`absolute h-[2px] bg-red-700 w-full bottom-0`}></div>
      </SwiperSlide>
      )
    } else{
      return(
        <SwiperSlide className='cursor-pointer py-2 text-center navbar-hover'>
        <Link href={`/`}>الرئيسيه</Link>
        <div className={`absolute h-[2px] bg-red-700 bottom-0 w-[0px]`}></div>
      </SwiperSlide>
      )
    }
  }

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 7,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 9,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Autoplay, HashNavigation]}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {HoemLink()}
        {
          data?.map((el, i) => {
            let underLine = 'hidden'
            let textStyle = ''

            if (pathName.startsWith(`/category/${el.id}`)) {
              underLine = ''
              textStyle = 'text-red-700 font-bold'
            }

            return (
              <SwiperSlide key={i} className={`cursor-pointer py-2 relative text-center navbar-hover ${textStyle}`}>
                <div className={`absolute h-[2px] bg-red-700 bottom-0 w-[0px]`}></div>
                <div className={`absolute h-[2px] bg-red-700 bottom-0 w-full ${underLine}`}></div>
                <Link href={`/category/${el.id}`} className>{el.name}</Link>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
