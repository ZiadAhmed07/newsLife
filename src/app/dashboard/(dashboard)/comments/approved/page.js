"use client"

import Loader from "@/components/loader/loader"
import { apiData } from "@/data/url"
import axios from "axios"
import { getCookie } from "cookies-next"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function Page() {

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
        getComment()
    }, [adminData])

    function getComment() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/showAll/comment`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                setData(res.data.data)
            })
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
            const filter = data.filter((e)=>{
                return e.comment.status == 'approved'
            })
            return (
                <div>
                    <div className="p-2 px-4 border w-full flex justify-center gap-6 bg-white border-r-8 border-r-red-700 items-center">
                        <Link href={'/dashboard/comments'} >الكل</Link>
                        <Link href={`/dashboard/comments/pending`}>قيد المراجعه</Link>
                        <Link href={`/dashboard/comments/approved`} className="p-1 px-4 rounded-md bg-red-700 text-white">المقبوله</Link>
                        <Link href={`/dashboard/comments/rejected`} >المرفوضه</Link>
                    </div>
                    <div className="grad gap-6 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2">
                        {
                            filter?.map((el , i)=>{
                                console.log(el)
                                return(
                                    <Link key={i} href={`/dashboard/comments/${el.comment.id}`} className='p-4 hover:opacity-60 overflow-hidden relative rounded-md bg-white flex flex-col gap-2'>
                                            {
                                                el.comment.status == "pending"
                                                    ? <p className="absolute bg-yellow-600/60 text-white text-sm py-1 px-10 top-[10px] -left-[30px] -rotate-45">مراجعه</p>
                                                    : el.comment.status == 'approved'
                                                        ? <p className="absolute bg-green-600/60 text-white text-sm py-1 px-10 top-[10px] -left-[30px] -rotate-45">مقبول</p>
                                                        : el.comment.status == 'rejected'
                                                            ? <p className="absolute bg-black/60 text-white text-sm py-1 px-10 top-[10px] -left-[30px] -rotate-45">مرفوض</p>
                                                            : console.log('err')
                                            }
                                        <div className="p-1 border rounded-md"> {el.comment?.comment}</div>
                                        <div className="bg-gray-100 p-1 truncate">{el.comment.news?.title}</div>
                                        <div className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-red-700 text-white flex justify-center items-center font-bold">{el.comment.user?.name[0]}</div>
                                            <div>
                                                <p>{el.comment.user?.name || 'تم حذف المستخدم'}</p>
                                                <p>{el.comment.user?.email}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            )

        }
    }

    return (
        <div>
            <div className="p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center">
                <p className="font-bold">تعليقات المستخدمين</p>
            </div>
            <div >
                {setComment()}
            </div>
        </div>
    )
}

