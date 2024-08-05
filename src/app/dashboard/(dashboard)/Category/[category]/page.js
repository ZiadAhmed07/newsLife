'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import Loader from "@/components/loader/loader";
import { apiData, apiImg } from "@/data/url";
import Select from "react-select";
import { toast } from "react-toastify";

export default function page({ params }) {


    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [data, setData] = useState('')
    const [loader, setLoader] = useState(false)
    const [SearchKey, setSearchKey] = useState('')
    const [hiddenSelect, setHiddenSelect] = useState(false)
    const [role , setRole] = useState('')

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
            if(data.admin.role.id == 4){
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
                url: `${apiData}/admin/edit/category/${params.category}`,
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
        if (data.length == 0) {
            return (
                <div className="w-full h-[100px] bg-gray-100 flex items-center justify-center font-bold text-gray-600">
                    لا يوجد اقسام
                </div>
            )
        }
        if (data) {

            const filter = data.news.filter((el) => {
                return el.status == "published"
            })

            const search = filter.filter((el) => {
                if (!SearchKey) {
                    return true
                } else {
                    return el.title.includes(SearchKey)
                }
            })

            let convertedCategories = filter?.map(el => ({
                id: el.id,
                value: el.id,
                label: el.title
            }));

            function FunSelect() {
                if (hiddenSelect) {
                    return (
                        <div className=" fixed top-0 left-0 w-full h-full flex items-start justify-center z-40">
                            <div className="w-full h-full bg-gray-200/80" onClick={() => { setHiddenSelect(false) }}></div>
                            <div className=" absolute p-6 my-20 sm:mr-[200px]">
                                <Select options={convertedCategories} onChange={(e) => { postBestNews(e) }} placeholder="بحث..." className="max-sm:w-[320px] w-[500px] text-sm max-sm:text-xs" />
                            </div>
                        </div>
                    )
                }
            }

            return (
                <div className="w-full overflow-auto">
                    {FunSelect()}
                    <div className="p-2 px-4 font-bold border flex justify-between bg-white border-r-8 border-r-red-700">
                        <p>{data.name}</p>
                        <p>عدد الاخبار : {data.news_count}</p>
                    </div>

                    <div className={`"my-6 p-2 bg-white flex max-md:flex-col justify-between gap-4 lg:p-6 ${role}`}>
                        <div className="h-full">
                            <p className="font-bold text-red-700 text-lg">اداره الاخبار العاجله</p>
                            <p> اضافه 4 اخبار للظهور في بدايه القسم</p>
                        </div>
                        <div className='grid grid-cols-3 gap-3 h-[300px] bg-white w-[450px]  max-sm:w-full max-sm:grid-cols-1 max-sm:grid-rows-3'>
                            {
                                data.bestNews[0]
                                    ? <div className="bg-gray-100 relative  cursor-pointer w-full sm:col-start-1 sm:col-end-3 max-sm:row-start-1 max-sm:row-end-3 flex items-center justify-center">
                                        <svg onClick={()=>{funDelete(data.bestNews[0].news.id)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill absolute top-2 left-2 w-6 h-6 p-1 rounded-full bg-red-700 text-white z-20" viewBox="0 0 16 16">
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                        </svg>
                                        <Link href={`/dashboard/Category/${params.category}/${data.bestNews[0].news.id}`} className="w-full h-full hover:opacity-80">
                                            <Image src={`${apiImg}/${data.bestNews[0].news.img}`} alt="..." width={500} height={500} className='w-full h-full' />
                                            <p className="font-bold text-white absolute p-2 bottom-2">{data.bestNews[0].news.title}</p>
                                        </Link>
                                    </div>
                                    : <div onClick={() => { setHiddenSelect(true) }} className="bg-gray-100 hover:opacity-80 cursor-pointer w-full sm:col-start-1 sm:col-end-3 max-sm:row-start-1 max-sm:row-end-3 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-600 bi bi-patch-plus-fill" viewBox="0 0 16 16">
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0" />
                                        </svg>
                                    </div>
                            }

                            <div className="w-full flex gap-3 flex-col max-sm:flex-row text-white">
                                {
                                    data.bestNews[1]
                                        ? <div className="bg-gray-100 relative cursor-pointer w-full h-full flex items-center justify-center">
                                            <svg onClick={()=>{funDelete(data.bestNews[0].news.id)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill absolute top-2 left-2 w-6 h-6 p-1 rounded-full bg-red-700 text-white z-20" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                            </svg>
                                            <Link href={`/dashboard/Category/${params.category}/${data.bestNews[1].news.id}`} className="w-full h-full hover:opacity-80">
                                                <Image src={`${apiImg}/${data.bestNews[1].news.img}`} alt="..." width={200} height={200} className='w-full h-full' />
                                                <p className="font-bold absolute p-2 bottom-2 text-[8px]">{data.bestNews[1].news.title}</p>
                                            </Link>
                                        </div>
                                        : <div onClick={() => { setHiddenSelect(true) }} className="bg-gray-100 hover:opacity-80 cursor-pointer  w-full h-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi text-gray-600 bi-patch-plus-fill" viewBox="0 0 16 16">
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0" />
                                            </svg>
                                        </div>
                                }
                                {
                                    data.bestNews[2]
                                        ? <div className="bg-gray-100 relative cursor-pointer  w-full h-full flex items-center justify-center">
                                            <svg onClick={()=>{funDelete(data.bestNews[0].news.id)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill absolute top-2 left-2 w-6 h-6 p-1 rounded-full bg-red-700 text-white z-20" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                            </svg>
                                            <Link href={`/dashboard/Category/${params.category}/${data.bestNews[2].news.id}`} className="w-full h-full hover:opacity-80">
                                                <Image src={`${apiImg}/${data.bestNews[2].news.img}`} alt="..." width={200} height={200} className='w-full h-full' />
                                                <p className="font-bold absolute p-2 bottom-2 text-[8px]">{data.bestNews[2].news.title}</p>
                                            </Link>
                                        </div>
                                        : <div onClick={() => { setHiddenSelect(true) }} className="bg-gray-100 hover:opacity-80 cursor-pointer  w-full h-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi text-gray-600 bi-patch-plus-fill" viewBox="0 0 16 16">
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0" />
                                            </svg>
                                        </div>
                                }
                                {
                                    data.bestNews[3]
                                        ? <div className="bg-gray-100 relative  cursor-pointer  w-full h-full flex items-center justify-center">
                                            <svg onClick={()=>{funDelete(data.bestNews[0].news.id)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill absolute top-2 left-2 w-6 h-6 p-1 rounded-full bg-red-700 text-white z-20" viewBox="0 0 16 16">
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                            </svg>
                                            <Link href={`/dashboard/Category/${params.category}/${data.bestNews[3].news.id}`} className="w-full h-full hover:opacity-80">
                                                <Image src={`${apiImg}/${data.bestNews[3].news.img}`} alt="..." width={200} height={200} className='w-full h-full' />
                                                <p className="font-bold absolute p-2 bottom-2 text-[8px]">{data.bestNews[3].news.title}</p>
                                            </Link>
                                        </div>
                                        : <div onClick={() => { setHiddenSelect(true) }} className="bg-gray-100 hover:opacity-80 cursor-pointer  w-full h-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi text-gray-600 bi-patch-plus-fill" viewBox="0 0 16 16">
                                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0" />
                                            </svg>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>


                    <div className="my-6 p-6 bg-white w-full flex flex-col gap-4">
                        <div className=" flex justify-between items-center max-sm:flex-col max-sm:gap-4">
                            <input type='search' onChange={(e) => { setSearchKey(e.target.value) }} placeholder="بحث" className="py-1 max-sm:w-full max-md:w-[230px] outline-none px-2 rounded-md w-[300px] border border-red-700" />
                            <Link href={'/dashboard/addNews'} className="text-white max-sm:w-full text-center font-bold bg-red-700 rounded-md hover:bg-red-600 py-1 px-2">اضافه خبر </Link>
                        </div>
                        <div className=" w-full grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                search.reverse().map((el, index) => {
                                    return (
                                        <Link href={`/dashboard/Category/${params.category}/${el.id}`} key={index} className='hover:opacity-80 transition-all flex flex-col gap-2 shadow-md'>
                                            <Image src={`${apiImg}/${el.img}`} alt="" width={390} height={200} className="max-h-[200px]"/>
                                            <div className="flex flex-col gap-2 p-3">
                                                <p className="text-gray-500 text-xs font-bold">{el.formatted_date}</p>
                                                <h2>{el.title}</h2>
                                                <div className="flex gap-3 items-center">
                                                    <div className="w-[40px] h-[40px] bg-red-700 flex items-center justify-center font-bold text-white rounded-full">{el?.writer[0]}</div>
                                                    <p>by : {el.writer}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })

                            }
                        </div>
                    </div>

                </div>
            )
        }
    }

    function funDelete(e){
        setLoader(true)
        console.log(e)
    }

    function postBestNews(e) {
        setLoader(true)
        axios({
            url: `${apiData}/admin/create/bestNews`,
            method: 'post',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            },
            data: {
                news_id: e.id
            }
        }).then((res) => {
            setLoader(false)
            setTimeout(() => {
                location.reload()
            }, 500)
            return toast.success('تم اضافه الخبر الى الاخبار المميزه')
        }).catch((err) => {
            console.log(err)
            setLoader(false)
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

    return (
        <div>
            {FunLoader()}
            {setCategory()}
        </div>
    )
}