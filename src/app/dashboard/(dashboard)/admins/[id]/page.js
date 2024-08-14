'use client'

import Loader from "@/components/loader/loader"
import { apiData } from "@/data/url"
import axios from "axios"
import { getCookie } from "cookies-next"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"


export default function Admin({ params }) {

    const [data, setData] = useState('')
    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [loader, setLoader] = useState(false)
    const [DeleteHidden, setDeleteHidden] = useState(false)
    const router = useRouter()

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
                url: `${apiData}/admin/edit/adminProfile/${params.id}`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                setData(res.data)
            })
        }
    }

    function setAdmin() {
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
                        <p className="font-bold">المسؤولين</p>
                    </div>
                    <div className=" relative overflow-hidden">
                        {
                            data.auther.status == "active"
                                ? <p className=" absolute top-[20px] -left-[60px] rounded-md  bg-green-500/60 px-20 -rotate-45 text-bold text-white">مفعل</p>
                                : <p className="absolute top-[20px] -left-[60px] rounded-md  bg-black/60 px-20 -rotate-45 text-bold text-white">غير مفعل</p>
                        }
                        <div className="p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center">
                            <p className="">المعلومات الاساسيه</p>
                        </div>
                        <div className="border p-6 bg-white flex flex-col gap-4">
                            <p>الاسم : {data.auther?.name}</p>
                            <p>الوظيفه : {data.auther?.role.name}</p>
                            <p>البريد : {data.auther?.email}</p>
                        </div>
                    </div>

                    {
                        data?.news?.length == 0
                            ? <div className=' min-w-[500px]'>
                                <div className="p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center">
                                    <p className="">اخبار {data.auther?.name}</p>
                                </div>
                                <div className=" flex items-center justify-center bg-white border h-[100px] py-3 font-bold text-gray-700 border-b">
                                    لايوجد اخبار
                                </div>
                            </div>
                            : <div className=' min-w-[500px]'>
                                <div className="p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center">
                                    <p className="">اخبار {data.auther?.name}</p>
                                </div>
                                <div className="grid grid-cols-4 bg-white border justify-center py-3 font-bold text-gray-700 border-b">
                                    <p className=" text-center col-start-1 col-end-4">الخبر</p>
                                    <p className=" text-center ">القسم</p>
                                </div>
                                {
                                    data.news?.map((el, index) => {
                                        let bg = 'bg-gray-50'
                                        if (index % 2 === 0) {
                                            bg = 'bg-gray-100'
                                        } else {
                                            bg = 'bg-gray-50'
                                        }

                                        return (
                                            <Link href={`/dashboard/newsReviwe/${el.id}`} key={index} className={`grid grid-cols-4 p-2 ${bg} hover:bg-gray-200 items-center`}>
                                                <p className=" text-center col-start-1 col-end-4 truncate">{el.title}</p>
                                                <p className=" text-center">{el.category?.name}</p>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                    }

                    <div className=" bg-white p-6 flex justify-center gap-6">
                        <button onClick={NotActive} className=" rounded-lg px-6 py-2 bg-gray-600 text-white hover:bg-gray-500">الغاء التفعيل</button>
                        <button onClick={Active} className=" rounded-lg px-6 py-2 bg-gray-600 text-white hover:bg-gray-500"> تفعيل</button>
                        <button onClick={() => { setDeleteHidden(true) }} className=" rounded-lg px-6 py-2 bg-gray-600 text-white hover:bg-red-500">حذف</button>
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

    function PDelete(e) {
        e.preventDefault()
        setLoader(true)
        axios({
            url: `${apiData}/admin/delete/adminProfile/${params.id}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            }
        }).then(() => {
            setLoader(false)
            setDeleteHidden(false)
            router.replace('/dashboard/admins')
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

    function NotActive() {
        setLoader(true)
        axios({
            url: `${apiData}/admin/notActive/admin/${params.id}`,
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            }
        }).then((res) => {
            setLoader(false)
            router.replace('/dashboard/admins')
            return toast.success('تم الغاء تفعيل الحساب')
        })
    }

    function Active() {
        setLoader(true)
        axios({
            url: `${apiData}/admin/active/admin/${params.id}`,
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            }
        }).then((res) => {
            setLoader(false)
            router.replace('/dashboard/admins')
            return toast.success('تم تفعيل الحساب')
        })
    }

    return (
        <div>
            {FunLoader()}
            {Fundelete()}
            {setAdmin()}
        </div>
    )
}