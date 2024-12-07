'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import InfiniteScroll from 'react-infinite-scroll-component';
import { apiData, apiImg } from '@/data/url';
import { useEffect, useState } from "react";
import axios from "axios";


export default function Card({ params }) {

    const [news, setNews] = useState('')
    const [limit, setLimit] = useState(10)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        axios({
            url: `${apiData}/user/show/news/limited/category/${params.category}?limit=${limit}`,
            method: 'get'
        }).then((res) => {
            setNews(res.data)
            console.log(res.data.news.length)
        })
    }, [limit])

    function NextData() {
        setLimit(prev => prev + 10)
    }

    useEffect(() => {
        if(news){
            if (limit > news.news.length) {
                setHasMore(false);
            } else {
                setHasMore(true);
            }
        }
    }, [limit, news]);

    function getNews() {
        if (!news) {
            return (
                <div className="grid grid-cols-1  gap-5 py-2 sm:grid-cols-2 md:grid-cols-3 w-full">
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, i) => {
                            return (
                                <div key={i} className=' rounded-md bg-gray-200 h-[200px] animate-pulse'></div>
                            )
                        })
                    }

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
            const reverse = news.news

            return (
                <InfiniteScroll
                    dataLength={news.news.length}
                    next={NextData}
                    hasMore={hasMore}
                >
                    <div className="grid grid-cols-1  gap-5 py-2 sm:grid-cols-2 md:grid-cols-3">
                        {reverse?.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, translateY: "0px" }}
                                whileInView={{ opacity: 1, translateY: "0px" }}
                                transition={{ duration: 1.5 }}
                            >
                                <Link href={`/category/${news.category.id}/${item.news_id}?news=${item.title.replace(/\s+/g, '-')}`} className='hover:opacity-80 transition-all cursor-pointer bg-gray-50 rounded-md overflow-hidden flex flex-col gap-2 shadow-md'>
                                    <Image src={`${apiImg}/${item.img}`} alt={'...'} width={400} height={400} className='w-full h-[150px]' />
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
            <div>
                
            </div>
        </div>
    );
}
