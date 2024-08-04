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
                url: `${apiData}/admin/edit/adminProfile/${adminData.admin.id}`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                const data = res.data.news
                const filter = data?.filter(e => {
                    return e.status == "published"
                })
                console.log(filter)
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
                        data?.map((e , index) => {
                            return (
                                <Link href={`/dashboard/myNews/${e.id}`} key={index} className='hover:opacity-80 transition-all flex flex-col gap-2 shadow-md relative'>
                                    <div className=" absolute text-white bg-gray-600/60  top-0 right-0 z-10 py-1 px-3">{e.category.name}</div>
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
                <p className="font-bold">مراجعه الاخبار</p>
                <div className=" flex text-sm text-gray-600 gap-4 items-center">
                    <Link href={'/dashboard/myNews'} >المسوده</Link>
                    <Link href={'/dashboard/myNews/review'} >  قيد المراجعه</Link>
                    <Link href={'/dashboard/myNews/rejected'} > المرفوضه</Link>
                    <Link href={'/dashboard/myNews/published'} className="bg-red-700 rounded-md p-1 text-white"> المنشوره</Link>
                </div>
            </div>

        <div className="mt-8 bg-white">
            <div className="p-2 px-4  border flex font-bold justify-between bg-white border-r-8 border-r-red-700 ">
                <p >الاخبار المنشوره</p>
                <p>عدد الاخبار : {data?.length}</p>
            </div>

            {FunsetData()}
        </div>

        </div>
    )
}