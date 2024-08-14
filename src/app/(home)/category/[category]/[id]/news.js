'use client'
import Image from "next/image";
import NewsPage from "./shareNews";
import Ads from "/public/image/250250.WebP";
import Ads2 from "/public/image/ads.WebP";
import Link from "next/link";
import GNews from '/public/icon/icons8-google-news-94.png'
import Form from "./form";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiData, apiImg } from "@/data/url";
import AdsFooter from "@/components/ads/footer";

export default function News({ params }) {

    const [data, setData] = useState()
    const [HiddenVideo, setHiddenVideo] = useState('hidden')


    useEffect(() => {
        axios({
            url: `${apiData}/user/show/news/${params.id}`,
            method: 'get',
        }).then((res) => {
            const data = res.data.data
            setData(data)
        })
    }, [])


    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (error) {
            console.log(error.message)
        }
    }, [])


    function getNews() {
        if (!data) {
            return (
                <div className=" w-full my-10 px-6 flex flex-col gap-6">
                    <div>
                        <h3 className="font-bold text-lg p-2 border border-r-8 border-r-red-700 animate-pulse">
                            جارى التحميل
                        </h3>
                    </div>
                    <div className="flex gap-6 w-full">
                        <div className="h-10 w-40 bg-gray-200 rounded-md"></div>
                        <div className="h-10 w-40 bg-gray-200 rounded-md"></div>
                        <div className="h-10 w-40 bg-gray-200 rounded-md"></div>
                    </div>
                    <div className=" rounded-md bg-gray-200 h-[300px]"></div>
                    <div className="flex flex-col gap-1">
                        <div className="h-6 rounded-md bg-gray-200"></div>
                        <div className="h-6 rounded-md bg-gray-200"></div>
                        <div className="h-6 rounded-md bg-gray-200"></div>
                        <div className="h-6 rounded-md bg-gray-200"></div>
                        <div className="h-6 rounded-md bg-gray-200"></div>
                    </div>
                </div>
            )
        }
        if (data.length == 0) {
            return (
                <div className='w-full bg-gray-200 flex h-[400px] items-center justify-center font-bold text-xl text-gray-600'>
                    لايوجد اخبار
                </div>
            )
        }
        if (data) {
            const filter = data.comments?.filter((el) => {
                return el.status == "published"
            })
            console.log(data)
            if (data.status = 'published') {
                return (
                    <div className=" w-full my-10 px-6 flex flex-col gap-6">

                        <div>
                            <h3 className="font-bold text-lg p-2 border border-r-8 border-r-red-700">
                                {data.category.name}
                            </h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className="font-bold text-2xl max-md:text-xl">
                                {data.title}
                            </h1>
                            <div className="text-sm font-bold text-gray-600 flex gap-8">
                                <p> {data.event_date}</p>
                                <p>by : {data.writer}</p>
                            </div>
                        </div>
                        <div>
                            <Image src={`${apiImg}/${data.img}`} width={600} height={600} alt="..." className="w-[600px]" />
                        </div>

                        <div className="flex justify-center ">
                            <div className="max-sm:hidden bg-gray-100 h-[300px] w-[300px]">
                            <ins className="adsbygoogle "
                                style={{ display: "block" }}
                                data-ad-client="ca-pub-8948820292282679"
                                data-ad-slot="5236804482"
                                data-ad-format="rspv"
                                data-full-width-responsive="true">
                            </ins>
                            </div>
                            <div className="sm:hidden bg-gray-100 w-full h-[300px]">
                                <amp-ad width="100vw" height="300"
                                    type="adsense"
                                    data-ad-client="ca-pub-8948820292282679"
                                    data-ad-slot="5236804482"
                                    data-auto-format="rspv"
                                    data-full-width="">
                                    <div overflow=""></div>
                                </amp-ad>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 font-bold  text-gray-600">
                            <div className="w-[90%] max-sm:w-full whitespace-pre-wrap font-bold text-lg font-sans leading-relaxed" dangerouslySetInnerHTML={{ __html: data.part1 }}></div>
                            {
                                data.videoLabel
                                    ? <div>
                                        <p className=" cursor-pointer flex gap-2 items-center border p-2 rounded-md w-fit px-6" onClick={() => { setHiddenVideo('') }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-youtube text-red-700" viewBox="0 0 16 16">
                                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                                            </svg>
                                            {data.videoLabel}
                                        </p>
                                        <div className={`fixed bottom-6 left-6 z-20 ${HiddenVideo}`}>
                                            <div onClick={() => { setHiddenVideo('hidden') }} className="text-red-700 cursor-pointer bg-gray-200 p-2 rounded-full w-6 h-6 font-bold text-lg hover:bg-gray-300 flex justify-center items-center ">x</div>
                                            <iframe src={data.videoUrl} frameborder="0" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                    : console.log('123')
                            }
                        </div>

                        <div className="flex justify-center">
                            <div className="max-sm:hidden w-[300px] h-[300px] bg-gray-100">
                            <ins className="adsbygoogle "
                                style={{display:"block"}}
                                data-ad-client="ca-pub-8948820292282679"
                                data-ad-slot="8916664233"
                                data-ad-format="rspv"
                                data-full-width-responsive="true">
                            </ins>
                            </div>
                            <div className="sm:hidden w-full h-[300px] bg-gray-100">
                                <amp-ad width="100vw" height="300"
                                    type="adsense"
                                    data-ad-client="ca-pub-8948820292282679"
                                    data-ad-slot="8916664233"
                                    data-auto-format="rspv"
                                    data-full-width="">
                                    <div overflow=""></div>
                                </amp-ad>
                            </div>
                        </div>

                        <div className="flex gap-4 flex-wrap">
                            {
                                data.keyWords?.map((e, i) => {
                                    return (
                                        <Link key={i} href={"#"} className="px-6 py-2 rounded-md shadow-lg">{e}</Link>
                                    )
                                })
                            }
                        </div>

                        <div>
                            <NewsPage news={{ title: data.title, content: data.description, url: `${"https://alwatanynews.com"}/category/${data.category.id}/${data.id}` }} />
                        </div>
                        <div>
                            <Link href={"https://news.google.com/s/CBIwgvK0gKYB?sceid=EG:ar&sceid=EG:ar&r=0&oc=1"} target="_blank" className="flex gap-4 items-center w-full shadow-md p-2 rounded-md">
                                <Image src={GNews} alt="..." width={50} />
                                <p className="font-bold">تابعوا آخر أخبار الوطنى نيوز عبر Google News</p>
                            </Link>
                        </div>
                        <div className="w-full h-[1px] bg-gray-200 my-4"></div>

                        <div>
                            <div className="font-bold p-2 border border-r-8 border-r-red-700">اقراء ايضا</div>
                            <div className="py-4 flex gap-4 flex-col border p-2 rounded-md my-2">
                                {
                                    data?.suggestedNews.length > 0 ? data?.suggestedNews?.map((e, i) => {
                                        return (
                                            <Link href={`/category/${e.suggested_news.category.id}/${e.suggested_news.id}?news=${e.suggested_news.title.replace(/\s+/g, '-')}`} key={i} className="flex gap-4 max-sm:flex-col hover:bg-gray-100">
                                                <Image src={`${apiImg}/${e.suggested_news.img}`} alt="..." width={200} height={200} className="w-[200px] h-[120px]" />
                                                <div className="flex flex-col gap-2 justify-end max-sm:w-[250px]">
                                                    <p>{e.suggested_news.title}</p>
                                                    <p className="font-bold text-[10px] text-gray-600">{e.suggested_news.formatted_date}</p>
                                                    <p className="text-red-700 font-bold">{e.suggested_news.category.name}</p>
                                                </div>
                                            </Link>
                                        )
                                    })
                                        : <p>لايوجد اخبار</p>
                                }
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-gray-200 my-4"></div>

                        <div className="mt-4">
                            <div className="flex justify-between  text-lg p-2 border border-r-8 border-r-red-700 items-center gap-6">
                                <h3 className="font-bold">
                                    شاركنا برايك
                                </h3>
                                <p className="text-xs text-red-700">سيتم مراجعه التعليق قبل النشر</p>
                            </div>
                            <Form params={params} />
                            <div className=" w-full flex flex-col gap-4 my-4">
                                {
                                    filter.length > 0
                                        ? filter?.map((e, i) => {
                                            return (
                                                <div className="flex flex-col border rounded-xl overflow-hidden">
                                                    <div className="flex gap-4 bg-gray-50 p-2">
                                                        <div className="bg-red-700 h-[40px] w-[40px] rounded-full flex justify-center items-center font-bold text-white text-lg">م</div>
                                                        <div>
                                                            <p className=" font-bold">{e.comment.user.name}</p>
                                                            <p className="font-bold text-xs text-gray-600">{e.comment.user.name}</p>
                                                        </div>
                                                    </div>
                                                    <div className="p-6">
                                                        {e.comment.comment}
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : <div className="border p-6 h-[150px] flex items-center justify-center">لا يوجد تعليقات</div>
                                }
                            </div>
                        </div>
                        <AdsFooter />
                    </div>
                )
            }
        }
    }

    return getNews()
}