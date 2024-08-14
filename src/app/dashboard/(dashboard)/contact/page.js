'use client'

import Loader from "@/components/loader/loader"
import { apiData } from "@/data/url"
import axios from "axios"
import { getCookie } from "cookies-next"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function page() {

    const [data, setData] = useState('')
    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
        }
    }, [])

    useEffect(() => {
        getAdvertiseHere()
    }, [adminData])

    function getAdvertiseHere() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/showAll/contactUs`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                setData(res.data.data)
            })
        }
    }

    function setAdvertiseHere() {
        if (!data) {
            return (
                <div className="w-full h-[300px] bg-gray-100 flex items-center justify-center relative">
                    <Loader />
                </div>
            )
        }
        if (data.length == 0) {
            return (
                <div className="w-full h-[100px] bg-gray-100 flex items-center justify-center font-bold text-gray-600">
                    لا يوجد رسائل
                </div>
            )
        }
        if (data) {
            console.log(data)
            return (
                data.map((el, index) => {
                    let bg = 'bg-gray-50'
                    if (index % 2 === 0) {
                        bg = 'bg-gray-100'
                    } else {
                        bg = 'bg-gray-50'
                    }
                    return (
                        <Link href={`/dashboard/contact/${el.contact.id}`} key={index} className={`grid grid-cols-4 p-2 ${bg} hover:bg-gray-200 items-center`}>
                            <p className=" text-center">{el.user?.name || 'تم حذف المستخدم'}</p>
                            <p className=" text-center">{el.contact?.phone}</p>
                            <p className=" text-center col-start-3 col-end-5 truncate text-gray-600 px-4">{el.contact.message}</p>
                        </Link>
                    )
                })
            )
        }
    }

    function FunLoader() {
        if (loader) {
            return (
                <div className="fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0">
                    <Loader />
                </div>
            )
        }
    }

    return (
        <div className="w-full overflow-auto">
            {FunLoader()}
            <div className="p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center">
                <p className="font-bold">رسائل المستخدمين</p>
            </div>
            <div className="bg-white my-6 min-w-[600px]">
                <div className="grid grid-cols-4 justify-center py-3 font-bold text-gray-700 border-b">
                    <p className=" text-center">الاسم</p>
                    <p className=" text-center">الهاتف</p>
                    <p className=" text-center col-start-3 col-end-5"> الرساله</p>
                </div>
                <div>
                    {setAdvertiseHere()}
                </div>
            </div>
        </div>
    )
}