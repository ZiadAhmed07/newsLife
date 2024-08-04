'use client'

import Loader from "@/components/loader/loader";
import { apiData, apiImg } from "@/data/url";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function page({ params }) {

    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [data, setData] = useState('')
    const [loader, setLoader] = useState(false)
    const router = useRouter()
    const [role, setRole] = useState('')


    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
            if (data.admin.role.id == 4) {
                setRole('hidden')
            }
        }
    }, [])

    useEffect(() => {
        getCategory()
    }, [adminData])

    function getCategory() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/edit/news/${params.id}`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                setData(res.data.data)
            })
        }
    }

    function setCategory() {
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
                <div className="flex flex-col gap-8 bg-white p-4">
                    <div>
                        <div className="font-bold p-2 border border-r-8 border-r-red-700">عنوان الخبر</div>
                        <div className="flex flex-col gap-4 p-6 border">
                            <h2 className="font-bold text-2xl max-md:text-xl">
                                {data.title}
                            </h2>
                            <div className="text-sm font-bold text-gray-600 flex gap-8">
                                <p> {data.formatted_date}</p>
                                <p>by : {data.writer}</p>
                                <p>{data.category.name}</p>
                            </div>
                            <p>الوصف : {data.description}</p>
                            <div className=" rounded-md p-2 border">
                                <p>وصف الفيديو : {data.videoLabel}</p>
                                <p>رابط الفيديو : {data.videoUrl}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold p-2 border border-r-8 border-r-red-700">صوره الخبر</div>
                        <Image src={`${apiImg}/${data.img}`} alt="" width={390} height={200} />
                    </div>
                    <div className="flex flex-col gap-6 font-bold  text-gray-600">
                        <div>
                            <div className="font-bold p-2 border border-r-8 border-r-red-700">الجزء الاول من المقال</div>
                            <p className=" max-sm:w-full  p-6 border whitespace-pre-wrap font-bold font-sans" dangerouslySetInnerHTML={{ __html: data.part1 }}>
                            </p>
                        </div>
                        <div>
                            <div className="font-bold p-2 border border-r-8 border-r-red-700">الجزء الثانى من المقال</div>
                            <p className=" max-sm:w-full  p-6 border whitespace-pre-wrap font-bold font-sans" dangerouslySetInnerHTML={{ __html: data.part2 }}>
                            </p>
                        </div>
                        <div>
                            <div className="font-bold p-2 border border-r-8 border-r-red-700">الجزء الثالث من المقال</div>
                            <p className="max-sm:w-full  p-6 border whitespace-pre-wrap font-bold font-sans" dangerouslySetInnerHTML={{ __html: data.part3 }}>
                            </p>
                        </div>

                    </div>
                    <div>
                        <div className="font-bold p-2 border border-r-8 border-r-red-700">الكلمات المفتاحيه</div>
                        <div className="flex gap-4 flex-wrap p-6 border">
                            {
                                data.keyWords?.map((el, i) => {
                                    return (
                                        <Link href={"#"} key={i} className="px-6 py-2 rounded-md shadow-lg">{el}</Link>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div>
                        <div className="font-bold p-2 border border-r-8 border-r-red-700">الاخبار المقترحه</div>
                        <div className="py-4 flex gap-4 flex-col border p-2 rounded-md mt-2">
                            {
                                data?.suggested_news?.map((e, i) => {
                                    return (
                                        <Link href={`/dashboard/Category/${e.suggested_news.category.id}/${e.suggested_news.id}`} key={i} className="flex gap-3 ">
                                            <Image src={`${apiImg}/${e.suggested_news.img}`} alt="..." width={200} height={200} className="w-[200px] h-[120px]" />
                                            <div className="flex flex-col gap-2 justify-end">
                                                <p>{e.suggested_news.title}</p>
                                                <p className="font-bold text-[10px] text-gray-600">{e.suggested_news.formatted_date}</p>
                                                <p className="text-red-700 font-bold">{e.suggested_news.category.name}</p>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="flex gap-6  justify-center ">
                            <Link href={`/dashboard/Category/${params.category}/${params.id}/edit`} className={`px-8 bg-gray-600 flex gap-4 items-center py-2 border rounded-lg hover:bg-blue-400 text-white ${role}`}>
                                <p> تعديل الخبر</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg>
                            </Link>
                            <button onClick={Fundelete} className={`px-8 flex gap-4 bg-gray-600 py-2 items-center border rounded-lg hover:bg-red-500 text-white ${role}`}>
                                <p>حذف الخبر</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                </svg>
                            </button>
                        </div>
                        <div className="text-center text-sm text-red-700 mt-2">
                            <p>اذا تم تعديل الخبر فسوف يسجل الخبر باسم من قام بالتعديل وليس من كتب الخبر</p>
                            <p>يجب عليك العوده الى كاتب الخبر  في حاله التعديل حتى يظل الخبر باسمه</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function Fundelete() {
        setLoader(true)
        axios({
            url: `${apiData}/admin/delete/news/${params.id}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            }
        }).then((res) => {
            console.log(res)
            router.replace(`/dashboard/Category/${params.category}`)
            return toast.success('تم حذف الخبر')
        }).catch((err) => {
            console.log(err)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
    }



    return (
        <div>

            {setCategory()}
        </div>
    )
}