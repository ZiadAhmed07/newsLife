'use client'

import Loader from "@/components/loader/loader"
import { apiData } from "@/data/url"
import axios from "axios"
import { getCookie } from "cookies-next"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"



export default function page({ params }) {

    const [data, setData] = useState('')
    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [loader, setLoader] = useState(false)
    const [DeleteHidden, setDeleteHidden] = useState(false)
    const [DeleteID, setDeleteID] = useState('')
    const router = useRouter()

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
                url: `${apiData}/admin/edit/contactUs/${params.id}`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                setData(res.data.data)
            })
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
                <div className="flex flex-col gap-6">
                    <div className="flex gap-6">
                        <div className=" rounded-full w-[50px] h-[50px] bg-red-700 font-bold text-white text-xl flex items-center justify-center">{data.user.name[0]}</div>
                        <div>
                            <p className="font-bold">{data.user.name}</p>
                            <p>{data.user.email}</p>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-200"></div>
                    <div className="p-2 border-r-red-700 border-r-8 border">
                        رقم الهاتف : {data.contact.phone}
                    </div>
                    <div className="p-2 border-r-red-700 border-r-8 border min-h-[100px]">
                        الرساله : {data.contact.message}
                    </div>
                    <div className=" flex justify-center gap-6">
                        <Link href={`tel:${data.contact.phone}`} className="flex gap-3 px-6 py-2 rounded-lg bg-gray-600 items-center text-white hover:bg-gray-500">
                            <span>اتصال</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                            </svg>
                        </Link>
                        <button onClick={()=>{ setDeleteHidden(true) , setDeleteID(data.contact.id)}} className="flex gap-3 px-6 py-2 rounded-lg bg-gray-600 items-center text-white hover:bg-gray-500">
                            <span>
                                حذف
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            )
        }
    }


    function fundelete() {
        if (DeleteHidden) {
            return (
                <div className="w-full h-full fixed top-0 right-0 z-40 flex items-center justify-center">
                    <div onClick={() => { setDeleteHidden(false) }} className="w-full h-full bg-gray-800/80"></div>
                    <div className=" absolute w-[300px] flex flex-col gap-4 p-6 bg-gray-200 rounded-xl text-center font-bold text-gray-600">
                        <p>هل انت متاكد من الحذف</p>
                        <button onClick={Delete}  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-red-500" >حذف الرساله</button>
                    </div>
                </div>
            )
        }
    }

    function Delete(){
        setLoader(true)
        console.log(DeleteID)
        axios({
            url: `${apiData}/admin/delete/contactUs/${DeleteID}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            }
        }).then(() => {
            setLoader(false)
            setDeleteHidden(false)
            router.replace("/dashboard/contact")
            return toast.success('تم حذف القسم بنجاح')
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            setDeleteHidden(false)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
    }

    return (
        <div className="">
            {FunLoader()}
            {fundelete()}
            <div className="p-2 px-4 border flex justify-between bg-white border-r-8 border-r-red-700 items-center">
                <p className="font-bold">الرسائل الخاصه ب {data?.user?.name}</p>
            </div>
            <div className="p-4 bg-white my-6">
                {setAdvertiseHere()}
            </div>
        </div>
    )
}


