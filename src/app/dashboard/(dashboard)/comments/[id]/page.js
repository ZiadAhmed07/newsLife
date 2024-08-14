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
    const router = useRouter()

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
        }
    }, [])

    useEffect(() => {
        getComment()
    }, [adminData])

    function getComment() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/edit/comment/${params.id}`,
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

    function setComment() {
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
                    لا يوجد تعليقات
                </div>
            )
        }
        if (data) {
            console.log(data)
            return (
                <div className="flex flex-col gap-6 relative">
                    {
                        data.comment.status == "pending"
                            ? <p className="absolute bg-yellow-600/60 text-white text-sm py-1 px-20 text-bold top-[20px] -left-[60px] -rotate-45">مراجعه</p>
                            : data.comment.status == 'approved'
                                ? <p className="absolute bg-green-600/60 text-white text-sm py-1 px-20 text-bold top-[20px] -left-[60px] -rotate-45">مقبول</p>
                                : data.comment.status == 'rejected'
                                    ? <p className="absolute bg-black/60 text-white text-sm py-1 px-20 text-bold top-[20px] -left-[60px] -rotate-45">مرفوض</p>
                                    : console.log('err')
                    }
                    <div className="flex gap-6">
                        <div className=" rounded-full w-[50px] h-[50px] bg-red-700 font-bold text-white text-xl flex items-center justify-center">{data.comment.user?.name[0]}</div>
                        <div>
                            <p className="font-bold">{data.comment.user?.name || 'تم حذف المستخدم'}</p>
                            <p>{data.comment.user?.email}</p>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-200"></div>
                    <div className="p-2 border-r-red-700 border-r-8 border">
                        الخبر : {data.comment.news.title}
                    </div>
                    <div className="p-2 border-r-red-700 border-r-8 border min-h-[100px]">
                        الرساله : {data.comment.comment}
                    </div>
                    <div className=" flex justify-center gap-6">
                        <button onClick={() => { setDeleteHidden(true) }} className="flex gap-3 px-6 py-2 rounded-lg bg-gray-600 items-center text-white hover:bg-gray-500">
                            <span>
                                حذف
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                            </svg>
                        </button>
                        <button onClick={Approve} className="flex gap-3 px-6 py-2 rounded-lg bg-gray-600 items-center text-white hover:bg-green-500">
                            <span>
                                قبول
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                            </svg>
                        </button>
                        <button onClick={Reject} className="flex gap-3 px-6 py-2 rounded-lg bg-gray-600 items-center text-white hover:bg-red-500">
                            <span>
                                رفض
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
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
                        <button onClick={Delete} className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-red-500" >حذف الرساله</button>
                    </div>
                </div>
            )
        }
    }

    function Delete() {
        setLoader(true)
        axios({
            url: `${apiData}/admin/delete/comment/${params.id}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            }
        }).then(() => {
            setLoader(false)
            setDeleteHidden(false)
            router.replace("/dashboard/comments")
            return toast.success('تم حذف التعليق بنجاح')
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            setDeleteHidden(false)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
    }

    function Approve() {
        setLoader(true)
        axios({
            url: `${apiData}/admin/approve/comment/${params.id}`,
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            }
        }).then(() => {
            setLoader(false)
            setDeleteHidden(false)
            router.replace("/dashboard/comments")
            return toast.success('تم قبول التعليق بنجاح')
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            setDeleteHidden(false)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
    }

    function Reject() {
        setLoader(true)
        axios({
            url: `${apiData}/admin/reject/comment/${params.id}`,
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            }
        }).then(() => {
            setLoader(false)
            setDeleteHidden(false)
            router.replace("/dashboard/comments")
            return toast.success('تم رفض التعليق بنجاح')
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
                <p className="font-bold">التعليقات الخاصه ب {data?.comment?.user?.name}</p>
            </div>
            <div className="p-4 bg-white my-6 w-full overflow-hidden">
                {setComment()}
            </div>
        </div>
    )
}


