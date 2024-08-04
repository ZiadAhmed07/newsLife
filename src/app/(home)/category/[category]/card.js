'use client'

import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { apiData, apiImg } from '@/data/url';

export default function Card({ params }) {
    const [news, setNews] = useState("");
    const [hasMore, setHasMore] = useState(true);


    const fetchNews = async () => {
        axios({
            url: `${apiData}/user/show/category/${params.category}`,
            method: 'get',
        }).then((res) => {
            setNews(res.data.data)
        })
    }


    useEffect(() => {
        fetchNews();
    }, []);

    const handleScroll = () => {
        if (!hasMore) return;
        fetchNews();
    };

    function getNews() {
        if (!news) {
            return (
                <div className="grid grid-cols-1  gap-5 py-2 sm:grid-cols-2 md:grid-cols-3 w-full">
                    <div className=' rounded-md bg-gray-200 h-[200px] animate-pulse'></div>
                    <div className=' rounded-md bg-gray-200 h-[200px]  animate-pulse'></div>
                    <div className=' rounded-md bg-gray-200 h-[200px]  animate-pulse'></div>
                    <div className=' rounded-md bg-gray-200 h-[200px]  animate-pulse'></div>
                    <div className=' rounded-md bg-gray-200 h-[200px]  animate-pulse'></div>
                    <div className=' rounded-md bg-gray-200 h-[200px]  animate-pulse'></div>
                </div>
            )
        }
        if (news.length == 0) {
            return (
                <div className='w-full bg-gray-200 flex h-[400px] items-center justify-center font-bold text-xl text-gray-600'>
                    لايوجد اخبار
                </div>
            )
        }
        if (news) {
            const filter = news.news?.filter((el)=>{
                return el.status == "published"
            })
            return (
                <InfiniteScroll
                    dataLength={filter.length}
                    next={handleScroll}
                    hasMore={hasMore}
                    loader={''}
                    endMessage={''}
                >
                    <div className="grid grid-cols-1  gap-5 py-2 sm:grid-cols-2 md:grid-cols-3">
                        {filter?.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, translateY: "0px" }}
                                whileInView={{ opacity: 1, translateY: "0px" }}
                                transition={{ duration: 1.5 }}
                            >
                                <Link href={`/category/${news.id}/${item.id}`} className='hover:opacity-80 transition-all flex flex-col gap-2 shadow-md'>
                                    <Image src={`${apiImg}/${item.img}`} alt={'...'} width={400} height={400} className='w-full h-[150px]'/>
                                    <div className="flex flex-col gap-2 p-3">
                                        <p className="text-gray-500 text-xs ">{item.formatted_date}</p>
                                        <h2 className=' max-h-[80px] overflow-hidden'>{item.title}</h2>
                                        <div className="flex gap-3 items-center">
                                            <div className="w-[40px] h-[40px] bg-red-700 flex items-center justify-center font-bold text-white rounded-full">{item.writer[0]}</div>
                                            <p>by : {item.writer}</p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </InfiniteScroll>
            )
        }
    }

    return (
        <div>
            {getNews()}
        </div>
    );
}
