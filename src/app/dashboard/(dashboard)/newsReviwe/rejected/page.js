'use client'

import Image from "next/image"
import Link from "next/link"

import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import { apiData, apiImg } from "@/data/url";
import Loader from "@/components/loader/loader";


export default function page() {

    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [data, setData] = useState('')
    const [countPage, setCountPage] = useState(1)

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
        }
    }, [])

    useEffect(() => {
        getData()
    }, [adminData , countPage])

    function getData() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/showAll/news/paginate/rejected?page=${countPage}`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                setData(res.data)
            })
        }
    }

    function FunsetData() {
        if (!data) {
            return (
                <div className="w-full h-[300px] bg-gray-100 flex items-center justify-center relative">
                    <Loader />
                </div>
            )
        }
        if (data.news.length == 0) {
            return (
                <div className="w-full h-[300px] bg-gray-100 flex items-center justify-center font-bold text-gray-600">
                    لا يوجد اخبار
                </div>
            )
        }
        if (data) {
            return (
                <div className=" w-full grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
                    {
                        data.news?.map((e, index) => {
                            return (
                                <Link href={`/dashboard/newsReviwe/${e.news_id}`} key={index} className='hover:opacity-80 overflow-hidden transition-all flex flex-col gap-2 shadow-md relative'>
                                    {
                                        e.status == "reviewed"
                                            ? <p className="absolute bg-yellow-600/60 text-white text-sm py-1 px-10 top-[10px] -left-[30px] -rotate-45">مراجعه</p>
                                            : e.status == 'published'
                                                ? <p className="absolute bg-green-600/60 text-white text-sm py-1 px-10 top-[10px] -left-[30px] -rotate-45">مقبول</p>
                                                : e.status == 'rejected'
                                                    ? <p className="absolute bg-black/60 text-white text-sm py-1 px-10 top-[10px] -left-[30px] -rotate-45">مرفوض</p>
                                                    : console.log('err')
                                    }
                                    <div className=" absolute text-white bg-gray-600/60  top-0 right-0 z-10 py-1 px-3">{e?.category_name}</div>
                                    <Image src={`${apiImg}/${e.img}`} alt="" width={390} height={200} />
                                    <div className="flex flex-col gap-2 p-3">
                                        <p className="text-gray-500 text-xs">{e.formatted_date}</p>
                                        <h2>{e.title}</h2>
                                        <div className="flex gap-3 items-center">
                                            <div className="w-[40px] h-[40px] bg-red-700 flex items-center justify-center font-bold text-white rounded-full">{e.writer[0]}</div>
                                            <p>by : {e.writer} </p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            )
        }
    }

    function Pagination() {
        const currentPage = data.pagination.current_page
        const totalPages = data.pagination.total_pages
        return (
            <div className=" bg-white my-4" dir="ltr">
                <nav className="flex items-center gap-x-1" aria-label="Pagination">
                    <button type="button" onClick={() => { setCountPage(prev => prev - 1) }} className={`min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none ${currentPage == 1 && 'pointer-events-none'}`} aria-label="Previous">
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </button>
                    <div className="flex items-center gap-x-1">
                        <button type="button" className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" aria-current="page">{currentPage}</button>
                        <button type="button" onClick={() => { setCountPage(prev => prev + 1) }} className={`min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none ${currentPage + 1 >= totalPages && 'hidden'}`}>{currentPage + 1}</button>
                        <button type="button" onClick={() => { setCountPage(prev => prev + 2) }} className={`min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none ${currentPage + 2 >= totalPages && 'hidden'}`}>{currentPage + 2}</button>
                        <div className="hs-tooltip inline-block">
                            <button type="button" className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400  p-2 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                                <span className=" text-xs">•••</span>
                            </button>
                        </div>
                        <button type="button" onClick={() => { setCountPage(totalPages) }} className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">{totalPages}</button>
                    </div>
                    <button type="button" onClick={() => { setCountPage(prev => prev + 1) }} className={`min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-label="Next ${currentPage == totalPages && 'pointer-events-none'}`}>
                        <span className="sr-only">Next</span>
                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </button>
                </nav>
            </div>
        )
    }

    return (
        <div className="w-full overflow-auto">
            <div className="p-2 px-4  border flex justify-between bg-white border-r-8 border-r-red-700">
                <p className="font-bold max-sm:hidden">مراجعه الاخبار</p>
                <div className=" flex text-sm text-gray-600 gap-4 items-center max-sm:justify-center">
                    <Link href={'/dashboard/newsReviwe'} >الكل</Link>
                    <Link href={'/dashboard/newsReviwe/pending'} >انتظار المراجعه</Link>
                    <Link href={'/dashboard/newsReviwe/rejected'} className="bg-red-700 rounded-md p-1 text-white"> المرفوضه</Link>
                    <Link href={'/dashboard/newsReviwe/published'}> المنشوره</Link>
                </div>
            </div>

            <div className="my-8 bg-white">
                <div className="p-2 px-4  border flex font-bold justify-between bg-white border-r-8 border-r-red-700 ">
                    <p >اخبار في انتظار المراجعه</p>
                    <p>عدد الاخبار : {data?.pagination?.total}</p>
                </div>

                {FunsetData()}
                <div className="flex w-full justify-center p-1 ">
                    {
                        data && Pagination()
                    }
                </div>
            </div>

        </div>
    )
}