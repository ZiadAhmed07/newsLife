'use client'

import Loader from "@/components/loader/loader";
import { apiData, apiImg } from "@/data/url";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default function page() {

    const [data, setData] = useState()
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
        getImg()
    }, [adminData])

    function getImg() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/showAll/adImg`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                setData(res.data.data)
                console.log(res.data.data)
            })
        }
    }

    function FungetImg() {
        if (!data) {
            return (
                <div className="w-full h-[300px] relative flex items-center justify-center">
                    <Loader />
                </div>
            )
        }
        if (data.length == 0) {
            return (
                <div className="w-full h-[300px] font-bold text-xl text-gray-600 flex items-center justify-center">
                    لا بوجد صور
                </div>
            )
        }
        if (data) {
            return (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
                    {
                        data.map((el , index) => {
                            return (
                                <div dir="ltr" key={index} className=" h-[200px] bg-gray-50 border sm:h-[250px] relative flex gap-4 sm:gap-1 sm:flex-col justify-between">
                                    <p onClick={()=>{deleteImg(el.id)}} className="bg-red-700 text-xs font-bold rounded-md text-white absolute top-2 left-2 p-2 opacity-50 cursor-pointer hover:opacity-100">حذف</p>
                                    <Image src={`${apiImg}/${el.img}`} alt='...' width={300} height={300} className={'w-full max-h-[200px] max-sm:max-h-[160px]'}/>
                                    <p className=" w-full break-words text-xs bg-gray-100">{`${apiImg}/${el.img}`}</p>
                                </div>
                            )
                        })
                    }

                </div>
            )
        }
    }

    function deleteImg(el) {
        setLoader(true)
        axios({
            url: `${apiData}/admin/forceDelete/adImg/${el}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`,
            }
        }).then((res) => {
            setLoader(false)
            location.reload()
            return toast.success('تم حذف الصوره بنجاح')
        }).catch((err)=>{
            setLoader(false)
            console.log(err)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
    }    

    function postImg(el) {
        setLoader(true)
        const img = el.target.files[0]
        axios({
            url: `${apiData}/admin/create/adImg`,
            method: 'post',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`,
                'Content-Type' : 'multipart/form-data'
            },
            data : {
                img : img
            }
        }).then((res) => {
            setLoader(false)
            location.reload()
            return toast.success('تم اضافه الصوره بنجاح')
        }).catch((err)=>{
            setLoader(false)
            console.log(err)
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
            <div className="w-full p-2 border border-r-8 border-r-red-700 bg-white flex justify-between items-center">
                <p className="font-bold">اداره الاعلانات</p>
                <div className="flex gap-4">
                    <Link href={"/dashboard/addAds"} className="hover:bg-red-700 rounded-md p-1 hover:text-white">الاعلانات </Link>
                    <Link href={"/dashboard/addAds/adsImg"} className="bg-red-700 rounded-md p-1 text-white">الصور</Link>
                </div>
            </div>
            <div className="w-full bg-white my-6">
                <div className="w-full p-2 border border-r-8 border-r-red-700 bg-white flex justify-between items-center">
                    <p>صور الاعلانات</p>
                    <label htmlFor="imgInput" className="bg-red-800 hover:bg-red-700 p-1 rounded-md text-white cursor-pointer">اضف صوره</label>
                    <input type={'file'} id='imgInput' className="hidden" onChange={(el) => { postImg(el) }} />
                </div>
                {FungetImg()}
            </div>
        </div>
    )
}