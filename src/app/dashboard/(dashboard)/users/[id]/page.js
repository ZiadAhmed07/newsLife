'use client'

import Loader from "@/components/loader/loader"
import { apiData } from "@/data/url"
import axios from "axios"
import { getCookie } from "cookies-next"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"


export default function Admin({params}){

    const [data, setData] = useState('')
    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [loader, setLoader] = useState(false)
    const [DeleteHidden, setDeleteHidden] = useState(false)

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
        }
    }, [])

    useEffect(() => {
        FungetAdmin()
    }, [adminData])

    function FungetAdmin() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/edit/user/${params.id}`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                setData(res.data.data)
            })
        }
    }


    function setUser() {
        if (!data) {
            return (
                <div className="w-full h-[300px] bg-gray-100 flex items-center justify-center relative">
                    <Loader />
                </div>
            )
        }
        if (data) {
            console.log(data)
            return (
                <div className="flex flex-col gap-6 w-full overflow-auto">
                    <div className="p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center">
                        <p className="font-bold">المستخدم</p>
                    </div>
                    <div>
                        <div className="p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center">
                            <p className="">المعلومات الاساسيه</p>
                        </div>
                        <div className="border p-6 bg-white flex flex-col gap-4">
                            <p>الاسم : {data.name}</p>
                            <p>البريد : {data.email}</p>
                        </div>
                    </div>

                    <div className=' min-w-[500px]'>
                        <div className="p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center">
                            <p className="">التعليقات</p>
                        </div>
                        <div className="grid grid-cols-4 bg-white border justify-center py-3 font-bold text-gray-700 border-b">
                            <p className=" text-center col-start-1 col-end-3">التعليق </p>
                            <p className=" text-center col-start-3 col-end-5">الخبر</p>
                        </div>
                        {
                            data.comments?.map((el, index) => {
                                let bg = 'bg-gray-50'
                                if (index % 2 === 0) {
                                    bg = 'bg-gray-100'
                                } else {
                                    bg = 'bg-gray-50'
                                }
                                return (
                                    <Link href={`/dashboard/comments/${el.comment.id}`} key={index} className={`grid grid-cols-4 p-2 ${bg} hover:bg-gray-200 items-center`}>
                                        <p className=" text-center col-start-1 col-end-3 truncate">{el.comment.comment}</p>
                                        <p className=" text-center col-start-3 col-end-5 truncate">{el.comment.news.title}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <div className=' min-w-[500px]'>
                        <div className="p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center">
                            <p className="">الاعلانات </p>
                        </div>
                        <div className="grid grid-cols-4 bg-white border justify-center py-3 font-bold text-gray-700 border-b">
                            <p className="text-center">id</p>
                            <p className=" text-center">الهاتف</p>
                            <p className=" text-center col-start-3 col-end-5">الرساله</p>
                        </div>
                        {
                            data.advertiseHere?.map((el, index) => {
                                let bg = 'bg-gray-50'
                                if (index % 2 === 0) {
                                    bg = 'bg-gray-100'
                                } else {
                                    bg = 'bg-gray-50'
                                }

                                return (
                                    <Link href={`/dashboard/advertiseHere/${el.AdvertiseHere.id}`} key={index} className={`grid grid-cols-4 p-2 ${bg} hover:bg-gray-200 items-center`}>
                                        <p className=" text-center">{el.AdvertiseHere.id}</p>
                                        <p className=" text-center">{el.AdvertiseHere.phone}</p>
                                        <p className=" text-center col-start-3 col-end-5 truncate">{el.AdvertiseHere.message}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <div className=' min-w-[500px]'>
                        <div className="p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center">
                            <p className="">الرسائل </p>
                        </div>
                        <div className="grid grid-cols-4 bg-white border justify-center py-3 font-bold text-gray-700 border-b">
                            <p className=" text-center ">id</p>
                            <p className=" text-center ">الهاتف</p>
                            <p className=" text-center col-start-3 col-end-5">الرساله</p>
                        </div>
                        {
                            data.contactUs?.map((el, index) => {
                                let bg = 'bg-gray-50'
                                if (index % 2 === 0) {
                                    bg = 'bg-gray-100'
                                } else {
                                    bg = 'bg-gray-50'
                                }

                                return (
                                    <Link href={`/dashboard/contact/${el.contact.id}`} key={index} className={`grid grid-cols-4 p-2 ${bg} hover:bg-gray-200 items-center`}>
                                        <p className=" text-center">{el.contact.id}</p>
                                        <p className=" text-center ">{el.contact.phone}</p>
                                        <p className=" text-center col-start-3 col-end-5">{el.contact.message}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <div className=" bg-white p-6 flex justify-center gap-6">
                        <Link href={"#"}></Link>
                        <button onClick={()=>{setDeleteHidden(true)}} className=" rounded-lg px-6 py-2 bg-gray-600 text-white hover:bg-red-500">حذف المستخدم</button>
                    </div>
                </div>
            )
        }
    }

    function Fundelete() {
        if (DeleteHidden) {
            return (
                <div className="w-full h-full fixed top-0 right-0 z-40 flex items-center justify-center">
                    <div onClick={() => { setDeleteHidden(false) }} className="w-full h-full bg-gray-800/80"></div>
                    <div className=" absolute w-[300px] flex flex-col gap-4 p-6 bg-gray-200 rounded-xl text-center font-bold text-gray-600">
                        <p>هل انت متاكد من الحذف</p>
                        <p className="text-xs text-red-700">اذا قمت بحذف هذا المسؤول فسوف تفقد كل الاخبار التى انشأها هذا الشخص</p>
                        <button onClick={PDelete} className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-red-500">حذف القسم</button>
                    </div>
                </div>
            )
        }
    }

    function PDelete(e){
        e.preventDefault()
        setLoader(true)
        axios({
            url: `${apiData}/admin/delete/user/${params.id}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            }
        }).then(() => {
            setLoader(false)
            setDeleteHidden(false)
            router.replace('/dashboard/users')
            return toast.success('تم الحذف بنجاح')
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            setDeleteHidden(false)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
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

    return(
        <div>
            {Fundelete()}
            {FunLoader()}
             {setUser()}
        </div>
    )
}