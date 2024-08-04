'use client'

import BG from "@/components/background/bg";
import Loader from "@/components/loader/loader";
import { apiData } from "@/data/url";
import axios from "axios";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";



export default function page() {

    const router = useRouter()
    const [loader, setloader] = useState(false)
    const [data, setData] = useState({
        email: '',
        password: '',
    })


    function funLoader() {
        if (loader) {
            return (
                <div className="z-50 bg-gray-200/80 w-full h-screen fixed top-0 right-0">
                    <Loader />
                </div>
            )
        }
    }

    function handleData(e) {
        const { name, value } = e.target
        setData(prev => ({
            ...prev, [name]: value
        }))
    }

    function postData(e) {
        e.preventDefault()
        setloader(true)
        

        if(getCookie('adminData')){
            router.push('/dashboard/home')
            return toast.warn('انت مسجل بالفعل')
        }

        axios({
            url: `${apiData}/admin/login`,
            method: 'post',
            data: data
        }).then((res) => {
            if(res.data.success){
                return toast.error("حدث خطا ما ! حاول مجددا")
            }else{
                setloader(false)
                setCookie('adminData',res.data)
                console.log(res)
                router.replace('/dashboard/home')
                return toast.success('تم تسجيل الدخول')
            }
        }).catch((err) => {
            setloader(false)
            console.log(err)
            if(err.message == 'Network Error'){
                return toast.error("تاكد من الاتصال بالانترنت ")
            } else{
                return toast.error("تاكد كلمه السر او البريد الالكتروني ")
            }
        })

    }

    return (
        <div className="flex justify-center items-center w-full h-screen">
            {funLoader()}
            <BG />
            <div className="p-6 rounded-lg bg-gray-200/70 z-10 max-sm:h-full max-sm:w-full flex items-center justify-center">
                <form onSubmit={postData} className="w-[400px] flex flex-col gap-6 max-sm:w-[340px]">
                    <h2 className="text-center font-bold text-2xl text-red-700">
                        تسجيل الدخول
                    </h2>
                    <div>
                        <label>البريد الالكترونى</label>
                        <input type='email' required name="email" onChange={handleData} className="w-full h-10 bg-inherit outline-none rounded-md border-2 focus:border-[3px] border-red-700 px-2" />
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <label>كلمه المرور</label>

                        </div>
                        <input type='password' required name="password" onChange={handleData} className="w-full h-10 bg-inherit outline-none rounded-md border-2 focus:border-[3px] border-red-700 px-2" />
                    </div>
                    <div className="text-center">
                        <input type='submit' value={"تسجيل الدخول"}  className="px-6 py-2 rounded-md font-bold text-white w-full cursor-pointer hover:bg-red-800 bg-red-700" />
                    </div>
                </form>
            </div>
        </div>
    )
}