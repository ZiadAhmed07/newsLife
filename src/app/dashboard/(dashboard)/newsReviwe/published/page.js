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

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
        }
    }, [])

    useEffect(() => {
        getData()
    }, [adminData])

    function getData() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/showAll/news`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                const data = res.data.news
                const filter = data?.filter(e => {
                    return e.status === 'published'
                })    
                setData(filter)
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
        if (data.length == 0) {
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
                        data.reverse()?.map((e, index) => {
                            return (
                                <Link href={`/dashboard/newsReviwe/${e.id}`} key={index} className='hover:opacity-80 overflow-hidden transition-all flex flex-col gap-2 shadow-md relative'>
                                    {
                                        e.status == "reviewed"
                                            ? <p className="absolute bg-yellow-600/60 text-white text-sm py-1 px-10 top-[10px] -left-[30px] -rotate-45">مراجعه</p>
                                            : e.status == 'published'
                                                ? <p className="absolute bg-green-600/60 text-white text-sm py-1 px-10 top-[10px] -left-[30px] -rotate-45">مقبول</p>
                                                : e.status == 'rejected'
                                                    ? <p className="absolute bg-black/60 text-white text-sm py-1 px-10 top-[10px] -left-[30px] -rotate-45">مرفوض</p>
                                                    : console.log('err')
                                    }
                                    <div className=" absolute text-white bg-gray-600/60  top-0 right-0 z-10 py-1 px-3">{e.category?.name}</div>
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

    return (
        <div className="w-full overflow-auto">
            <div className="p-2 px-4  border flex justify-between bg-white border-r-8 border-r-red-700">
                <p className="font-bold max-sm:hidden">مراجعه الاخبار</p>
                <div className=" flex text-sm text-gray-600 gap-4 items-center max-sm:justify-center">
                    <Link href={'/dashboard/newsReviwe'} >الكل</Link>
                    <Link href={'/dashboard/newsReviwe/pending'} >انتظار المراجعه</Link>
                    <Link href={'/dashboard/newsReviwe/rejected'} > المرفوضه</Link>
                    <Link href={'/dashboard/newsReviwe/published'} className="bg-red-700 rounded-md p-1 text-white"> المنشوره</Link>
                </div>
            </div>

            <div className="my-8 bg-white">
                <div className="p-2 px-4  border flex font-bold justify-between bg-white border-r-8 border-r-red-700 ">
                    <p >اخبار في انتظار المراجعه</p>
                    <p>عدد الاخبار : {data?.length}</p>
                </div>

                {FunsetData()}
            </div>

        </div>
    )
}