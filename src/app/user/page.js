'use client'

import BG from "@/components/background/bg"
import Loader from "@/components/loader/loader"
import { apiData } from "@/data/url"
import axios from "axios"
import { deleteCookie, getCookie, setCookie } from "cookies-next"
import { Joan } from "next/font/google"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"




export default function Page(){

    const getUser = getCookie('userData')
    const pathname  = usePathname()
    const router = useRouter()
    const [loader , setLoader] = useState(false)
    let data = ''

    if(getUser){
        data = JSON.parse(getUser)
    }

    function logout(){
        setLoader(true)

        axios({
            url:`${apiData}/user/logout`,
            method:'post',
            headers:{
                'Authorization':`Bearer ${data.access_token}`
            }
        }).then((res)=>{
            setLoader(false)
            deleteCookie('userData')
            router.replace('/user/signin')
            return toast.success('تم تسجيل الخروج بنجاح')
            
        }).catch((err)=>{
            setLoader(false)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
    }

    function checkUser(){
        if(!getUser){
            return(
                <div className="flex flex-col gap-4 items-center">
                    <p className="text-red-700 font-bold">يجب عليك تسجيل الدخول اولا</p>
                    <Link onClick={()=>{setCookie('PrevUrl',pathname)}} href={'/user/signin'} className="py-2 px-6 bg-red-700 text-white font-bold rounded-md hover:bg-red-800">تسجيل الدخول</Link>
                </div>
            )
        }
        if(getUser){

            const data = JSON.parse(getUser)

            return(
                <div className="flex flex-col gap-4 items-center">
                    <div className="text-center text-red-700 font-bold text-2xl my-2">
                        <h2>الحساب المستخدم</h2>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-[50px] h-[50px] rounded-full bg-red-700 font-bold text-white text-lg flex items-center justify-center">
                            {data.user.name[0]}
                        </div>
                        <div>
                            <p>الاسم : {data.user.name}</p>
                            <p>البريد : {data.user.email}</p>
                        </div>
                    </div>
                    <div >
                        <button onClick={logout} className="px-6 py-2 bg-red-700 font-bold text-white rounded-md hover:bg-red-800">تسجيل الخروج</button>
                    </div>
                </div>
            )
        }
    }

    function funLoader() {
        if (loader) {
            return (
                <div className="z-50 bg-gray-200/80 w-full h-screen fixed top-0 right-0">
                    <Loader />
                </div>
            )
        }
    }

    return(
        <div className="w-full h-screen flex items-center justify-center">
            <BG/>
            {funLoader()}
            <div className="p-6 bg-gray-200/80 rounded-lg w-[400px] z-10 max-sm:w-full max-sm:h-screen flex items-center justify-center">
                {checkUser()}
            </div>
        </div>
    )
}