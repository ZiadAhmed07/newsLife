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
                    return e.status == "pending"
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
                    لا يوجد مسوده
                </div>
            )
        }
        if (data) {
            console.log(data)
            return (
                <div className=" w-full grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
                    {
                        [...data].reverse()?.map((e , i)=>{
                            return(
                                <Link title="مسوده" key={i} href={`/dashboard/myNews/${e.id}`} className="shadow-xl rounded-md relative font-bold bg-gray-100 text-gray-600 p-4 ">
                                    <div className=" absolute w-3 h-3 rounded-full bg-black  top-3 left-3 "></div>
                                    <h2>الاسم : {e.title || 'لا يوجد اسم'}</h2>
                                    <p>القسم : {e.category?.name || 'لا يوجد قسم'}</p>
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
                    <Link href={'/dashboard/myNews'} className="bg-red-700 rounded-md p-1 text-white">المسوده</Link>
                    <Link href={'/dashboard/myNews/review'} >  قيد المراجعه</Link>
                    <Link href={'/dashboard/myNews/rejected'} > المرفوضه</Link>
                    <Link href={'/dashboard/myNews/published'}> المنشوره</Link>
                </div>
            </div>

        <div className="my-8 bg-white">
            <div className="p-2 px-4  border flex font-bold justify-between bg-white border-r-8 border-r-red-700 ">
                <p >اخبار قيد الكتابه</p>
                <p> مسوده : {data?.length}</p>
            </div>

            {FunsetData()}
        </div>

        </div>
    )
}