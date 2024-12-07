'use client'

import Loader from "@/components/loader/loader";
import { apiData } from "@/data/url";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiImg } from "@/data/url";

export default function page() {

    const [hidden, setHidden] = useState(false)
    const [data, setData] = useState()
    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [loader, setLoader] = useState(false)
    const [Code, setCode] = useState('')
    const [img, setImg] = useState('')
    const [url, setUrl] = useState('')
    const [adPositionId, setAdPositionId] = useState('')

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
        }
    }, [])

    useEffect(() => {
        getAds()
    }, [adminData])

    function getAds() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/showAll/advertisement`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                setData(res.data.data)
            })
        }
    }


    function AdsAddWin() {
        if (hidden) {
            return (
                <div className="w-full h-full fixed top-0 right-0 pt-[60px] md:pr-[200px] flex items-center justify-center z-30">
                    <div className="w-full h-full bg-gray-200/80" onClick={() => { setHidden(false) }}></div>
                    <div className=" bg-white p-6 rounded-lg absolute">
                        <form onSubmit={postAd} className="flex flex-col gap-4 w-[350px]">
                            <div>
                                <label>رابط المعلن</label>
                                <input type={'url'} required onChange={(e) => { setUrl(e.target.value) }} className="w-full border focus:border-2 outline-none h-10 text-sm px-2 rounded-md" />
                            </div>
                            <div>
                                <label>صوره الاعلان</label>
                                <input type={'file'} required onChange={(e) => { setImg(e.target.files[0]) }} className="w-full border focus:border-2 outline-none text-xs text-center rounded-md p-2" />
                            </div>
                            <input type={'submit'} value="اضافه" className="py-2 w-full bg-red-700 rounded-md text-white cursor-pointer hover:bg-red-600" />
                        </form>
                    </div>
                </div>
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

    function funSetAds() {
        if (!data) {
            return (
                <>
                    <div className=" bg-white">
                        <div className="w-full p-2 border border-r-8 border-r-red-700 bg-white flex justify-between items-center">
                            اعلانات داخل الصفحه الرئيسيه
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <div className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col animate-pulse">
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                <div className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col  animate-pulse">

                                </div>
                                <div className="flex flex-col gap-4 col-start-2 col-end-4">
                                    <div className="h-[300px] bg-gray-100 max-sm:h-[150px] flex items-center justify-center flex-col gap-2 animate-pulse">

                                    </div>
                                    <div className="h-[300px] bg-gray-100 max-sm:h-[150px] flex items-center justify-center flex-col gap-2 animate-pulse">

                                    </div>
                                </div>
                                <div className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col animate-pulse">
                                </div>
                            </div>
                            <div className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col animate-pulse">

                            </div>
                        </div>
                    </div>

                    <div className=" bg-white ">
                        <div className="w-full p-2 border border-r-8 border-r-red-700 bg-white flex justify-between items-center">
                            اعلانات داخل صفحه القسم
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <div className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col animate-pulse">

                            </div>
                            <div className="grid grid-cols-5 gap-4">
                                <div className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col animate-pulse">

                                </div>
                                <div className="flex flex-col gap-4 col-start-2 col-end-5">
                                    <div className="h-[300px] bg-gray-100 max-sm:h-[150px] flex items-center justify-center flex-col gap-2 animate-pulse">

                                    </div>
                                </div>
                                <div className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col animate-pulse">

                                </div>
                            </div>
                            <div className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col animate-pulse">

                            </div>
                        </div>
                    </div>

                    <div className=" bg-white ">
                        <div className="w-full p-2 border border-r-8 border-r-red-700 bg-white flex justify-between items-center">
                            اعلانات داخل صفحه الخبر
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <div className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col animate-pulse">

                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                <div className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col animate-pulse">
                                </div>
                                <div className="flex flex-col gap-4 col-start-2 col-end-4">
                                    <div className="h-[300px] bg-gray-100 max-sm:h-[150px] flex items-center justify-center flex-col gap-2 ">
                                        
                                    </div>
                                    <div className="h-[300px] bg-gray-100 max-sm:h-[150px] flex items-center justify-center flex-col gap-2 ">
                                        
                                    </div>
                                </div>
                                <div className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col animate-pulse">
                                </div>
                            </div>
                            <div className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col animate-pulse">
                            </div>
                        </div>
                    </div>
                </>
            )
        }
        if (data) {

            const header = data?.filter((el) => {
                return el.position.id == 1
            })
            const rightBar = data?.filter((el) => {
                return el.position.id == 2
            })
            const leftBar = data?.filter((el) => {
                return el.position.id == 3
            })
            const middleHome1 = data?.filter((el) => {
                return el.position.id == 4
            })
            const middleHome2 = data?.filter((el) => {
                return el.position.id == 5
            })
            const Footer = data?.filter((el) => {
                return el.position.id == 6
            })
            const MiddleCategory = data?.filter((el) => {
                return el.position.id == 7
            })
            const TopNews = data?.filter((el) => {
                return el.position.id == 8
            })
            const MiddleNews = data?.filter((el) => {
                return el.position.id == 9
            })
            const BottonNews = data?.filter((el) => {
                return el.position.id == 10
            })
            TopNews && console.log(MiddleNews)
            return (
                <>
                    <div className=" bg-white">
                        <div className="w-full p-2 border border-r-8 border-r-red-700 bg-white flex justify-between items-center">
                            اعلانات داخل الصفحه الرئيسيه
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            {
                                header.length == 0
                                    ? <div onClick={() => { setHidden(true), setAdPositionId(1) }} className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col hover:opacity-50 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                        </svg>
                                        <p>970X90</p>
                                    </div>
                                    : <div className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col gap-2 relative">
                                        <p onClick={() => { deleteAds(header[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                        <Image src={`${apiImg}/${header[0].img}`} alt='..' width={500} height={100} className='w-full h-full'/>
                                    </div>

                            }
                            <div className="grid grid-cols-4 gap-4">
                                {
                                    rightBar.length == 0
                                        ? <div onClick={() => { setHidden(true), setAdPositionId(2) }} className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col hover:opacity-50 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                            </svg>
                                            <p>600X160</p>
                                        </div>
                                        : <div className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col relative">
                                            <p onClick={() => { deleteAds(rightBar[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                            <Image src={`${apiImg}/${rightBar[0].img}`} alt='..' width={100} height={500} className='w-full h-full'/>
                                        </div>
                                }
                                <div className="flex flex-col gap-4 col-start-2 col-end-4">
                                    {
                                        middleHome1.length == 0
                                            ? <div onClick={() => { setHidden(true), setAdPositionId(4) }} className="h-[300px] bg-gray-100 max-sm:h-[150px] flex items-center justify-center flex-col gap-2 hover:opacity-50 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                                </svg>
                                                <p>300X300</p>
                                            </div>
                                            : <div className="h-[300px] relative bg-gray-100 max-sm:h-[150px] flex items-center justify-center flex-col gap-2 ">
                                                <p onClick={() => { deleteAds(middleHome1[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                                <Image src={`${apiImg}/${middleHome1[0].img}`} alt='..' width={200} height={200} className='w-full h-full'/>
                                            </div>
                                    }
                                    {
                                        middleHome2.length == 0
                                            ? <div onClick={() => { setHidden(true), setAdPositionId(5) }} className="h-[300px] bg-gray-100 max-sm:h-[150px] flex items-center justify-center flex-col gap-2 hover:opacity-50 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                                </svg>
                                                <p>300X300</p>
                                            </div>
                                            : <div className="h-[300px] relative bg-gray-100 max-sm:h-[150px] flex items-center justify-center flex-col gap-2 ">
                                                <p onClick={() => { deleteAds(middleHome2[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                                <Image src={`${apiImg}/${middleHome2[0].img}`} alt='..' width={200} height={200} className='w-full h-full'/>
                                            </div>
                                    }
                                </div>
                                {
                                    leftBar.length == 0
                                        ? <div onClick={() => { setHidden(true), setAdPositionId(3) }} className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col hover:opacity-50 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                            </svg>
                                            <p>600X160</p>
                                        </div>
                                        : <div className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex relative items-center justify-center flex-col ">
                                            <p onClick={() => { deleteAds(leftBar[0].id) }} className="bg-red-700  p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                            <Image src={`${apiImg}/${leftBar[0].img}`} alt='..' width={100} height={500} className='w-full h-full'/>
                                        </div>
                                }
                            </div>
                            {
                                Footer.length == 0
                                    ? <div onClick={() => { setHidden(true), setAdPositionId(6) }} className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col hover:opacity-50 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                        </svg>
                                        <p>970X90</p>
                                    </div>
                                    : <div className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col gap-2 relative">
                                        <p onClick={() => { deleteAds(Footer[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                        <Image src={`${apiImg}/${Footer[0].img}`} alt='..' width={500} height={100} className='w-full h-full'/>
                                    </div>

                            }
                        </div>
                    </div>

                    <div className=" bg-white ">
                        <div className="w-full p-2 border border-r-8 border-r-red-700 bg-white flex justify-between items-center">
                            اعلانات داخل صفحه القسم
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            {
                                header.length == 0
                                    ? <div onClick={() => { setHidden(true), setAdPositionId(1) }} className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col hover:opacity-50 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                        </svg>
                                        <p>970X90</p>
                                    </div>
                                    : <div className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col gap-2 relative">
                                        <p onClick={() => { deleteAds(header[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                        <Image src={`${apiImg}/${header[0].img}`} alt='..' width={500} height={100} className='w-full h-full'/>
                                    </div>

                            }
                            <div className="grid grid-cols-5 gap-4">
                                {
                                    rightBar.length == 0
                                        ? <div onClick={() => { setHidden(true), setAdPositionId(2) }} className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col hover:opacity-50 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                            </svg>
                                            <p>600X160</p>
                                        </div>
                                        : <div className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex relative items-center justify-center flex-col ">
                                            <p onClick={() => { deleteAds(rightBar[0].id) }} className="bg-red-700  p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                            <Image src={`${apiImg}/${rightBar[0].img}`} alt='..' width={100} height={500} className='w-full h-full'/>
                                        </div>
                                }
                                {
                                    MiddleCategory.length == 0
                                        ? <div className="flex flex-col gap-4 col-start-2 col-end-5">
                                            <div onClick={() => { setHidden(true), setAdPositionId(7) }} className="h-[120px] bg-gray-100 max-sm:h-[150px] flex items-center justify-center flex-col gap-2 hover:opacity-50 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                                </svg>
                                                <p>970X90</p>
                                            </div>
                                        </div>
                                        : <div className="flex flex-col gap-4 col-start-2 col-end-5">
                                            <div className="h-[300px] relative bg-gray-100 max-sm:h-[150px] flex items-center justify-center flex-col gap-2 ">
                                                <p onClick={() => { deleteAds(MiddleCategory[0].id) }} className="bg-red-700  p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                                <Image src={`${apiImg}/${MiddleCategory[0].img}`} alt='..' width={200} height={200} className='w-full h-full'/>
                                            </div>
                                        </div>
                                }

                                {
                                    leftBar.length == 0
                                        ? <div onClick={() => { setHidden(true), setAdPositionId(3) }} className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col hover:opacity-50 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                            </svg>
                                            <p>600X160</p>
                                        </div>
                                        : <div className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex relative items-center justify-center flex-col ">
                                            <p onClick={() => { deleteAds(leftBar[0].id) }} className="bg-red-700  p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                            <Image src={`${apiImg}/${leftBar[0].img}`} alt='..' width={100} height={500} className='w-full h-full'/>
                                        </div>
                                }
                            </div>
                            {
                                Footer.length == 0
                                    ? <div onClick={() => { setHidden(true), setAdPositionId(6) }} className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col hover:opacity-50 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                        </svg>
                                        <p>970X90</p>
                                    </div>
                                    : <div className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col gap-2 relative">
                                        <p onClick={() => { deleteAds(Footer[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                        <Image src={`${apiImg}/${Footer[0].img}`} alt='..' width={500} height={100} className='w-full h-full'/>
                                    </div>

                            }
                        </div>
                    </div>

                    <div className=" bg-white ">
                        <div className="w-full p-2 border border-r-8 border-r-red-700 bg-white flex justify-between items-center">
                            اعلانات داخل صفحه الخبر
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            {
                                header.length == 0
                                    ? <div onClick={() => { setHidden(true), setAdPositionId(1) }} className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col hover:opacity-50 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                        </svg>
                                        <p>970X90</p>
                                    </div>
                                    : <div className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col gap-2 relative">
                                        <p onClick={() => { deleteAds(header[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                        <Image src={`${apiImg}/${header[0].img}`} alt='..' width={500} height={100} className='w-full h-full'/>
                                    </div>

                            }
                            <div className="grid grid-cols-4 gap-4">
                                {
                                    rightBar.length == 0
                                        ? <div onClick={() => { setHidden(true), setAdPositionId(2) }} className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col hover:opacity-50 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                            </svg>
                                            <p>600X160</p>
                                        </div>
                                        : <div className="bg-gray-100 relative w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col ">
                                            <p onClick={() => { deleteAds(rightBar[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                            <Image src={`${apiImg}/${rightBar[0].img}`} alt='..' width={100} height={500} className='w-full h-full'/>
                                        </div>
                                }
                                <div className="flex flex-col gap-4 col-start-2 col-end-4">
                                    {
                                        TopNews.length == 0
                                            ? <div onClick={() => { setHidden(true), setAdPositionId(8) }} className="h-[200px] bg-gray-100 max-sm:h-[100px] flex items-center justify-center flex-col gap-2 hover:opacity-50 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                                </svg>
                                                <p>300X300</p>
                                            </div>
                                            : <div className="h-[200px] relative bg-gray-100 max-sm:h-[100px] flex items-center justify-center flex-col gap-2 ">
                                                <p onClick={() => { deleteAds(TopNews[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                                <Image src={`${apiImg}/${TopNews[0].img}`} alt='..' width={200} height={200} className='w-full h-full'/>
                                            </div>
                                    }
                                    {
                                        MiddleNews.length == 0
                                            ? <div onClick={() => { setHidden(true), setAdPositionId(9) }} className="h-[200px] bg-gray-100 max-sm:h-[100px] flex items-center justify-center flex-col gap-2 hover:opacity-50 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                                </svg>
                                                <p>300X300</p>
                                            </div>
                                            : <div className="h-[200px] relative bg-gray-100 max-sm:h-[100px] flex items-center justify-center flex-col gap-2 ">
                                                <p onClick={() => { deleteAds(MiddleNews[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                                <Image src={`${apiImg}/${MiddleNews[0].img}`} alt='..' width={200} height={200} className='w-full h-full'/>
                                            </div>
                                    }
                                    {
                                        BottonNews.length == 0
                                            ? <div onClick={() => { setHidden(true), setAdPositionId(10) }} className="h-[200px] bg-gray-100 max-sm:h-[100px] flex items-center justify-center flex-col gap-2 hover:opacity-50 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                                </svg>
                                                <p>300X300</p>
                                            </div>
                                            : <div className="h-[200px] relative bg-gray-100 max-sm:h-[100px] flex items-center justify-center flex-col gap-2 ">
                                                <p onClick={() => { deleteAds(BottonNews[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                                <Image src={`${apiImg}/${BottonNews[0].img}`} alt='..' width={200} height={200} className='w-full h-full'/>
                                            </div>
                                    }
                                </div>
                                {
                                    leftBar.length == 0
                                        ? <div onClick={() => { setHidden(true), setAdPositionId(3) }} className="bg-gray-100 w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col hover:opacity-50 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                            </svg>
                                            <p>600X160</p>
                                        </div>
                                        : <div className="bg-gray-100 relative w-full h-[600px] max-sm:h-[350px] flex items-center justify-center flex-col ">
                                            <p onClick={() => { deleteAds(leftBar[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                            <Image src={`${apiImg}/${leftBar[0].img}`} alt='..' width={100} height={500} className='w-full h-full'/>
                                        </div>
                                }
                            </div>
                            {
                                Footer.length == 0
                                    ? <div onClick={() => { setHidden(true), setAdPositionId(6) }} className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col hover:opacity-50 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="text-gray-500 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                        </svg>
                                        <p>970X90</p>
                                    </div>
                                    : <div className=" bg-gray-100 h-[120px] w-full flex items-center justify-center flex-col gap-2 relative">
                                        <p onClick={() => { deleteAds(Footer[0].id) }} className="bg-red-700 p-1 rounded-md text-white text-xs opacity-50 hover:opacity-100 absolute top-3 left-3 cursor-pointer">حذف</p>
                                        <Image src={`${apiImg}/${Footer[0].img}`} alt='..' width={500} height={100} className='w-full h-full'/>
                                    </div>
                            }
                        </div>
                    </div>
                </>
            )
        }

    }

    function deleteAds(e) {
        console.log(e)
        setLoader(true)
        axios({
            url: `${apiData}/admin/forceDelete/advertisement/${e}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`,
            }
        }).then((res) => {
            setLoader(false)
            location.reload()
            return toast.success('تم حذف الاعلان بنجاح')
        }).catch((err) => {
            setLoader(false)
            console.log(err)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
    }

    function postAd(e) {
        e.preventDefault()
        setLoader(true)
        axios({
            url: `${apiData}/admin/create/advertisement`,
            method: 'post',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`,
                'Content-Type': 'multipart/form-data'
            },
            data: {
                img: img,
                url: url,
                ad_position_id: adPositionId
            }
        }).then((res) => {
            setLoader(false)
            location.reload()
            return toast.success('تم اضافه الاعلان بنجاح')
        }).catch((err) => {
            setLoader(false)
            console.log(err)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
    }

    return (
        <div className="flex flex-col gap-6">
            {FunLoader()}
            {AdsAddWin()}
            <div className="w-full p-2 border border-r-8 border-r-red-700 bg-white flex justify-between items-center">
                <p>اداره الاعلانات</p>
                <div className="flex gap-4">
                    <Link href={"/dashboard/addAds"} className="bg-red-700 rounded-md p-1 text-white">الاعلانات</Link>
                    <Link href={"/dashboard/addAds/adsImg"} className="hover:bg-red-700 rounded-md p-1 hover:text-white">الصور </Link>
                </div>
            </div>



            {funSetAds()}
        </div>
    )
}