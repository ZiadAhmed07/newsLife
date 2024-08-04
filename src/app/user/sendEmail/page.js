'use client'

import BG from "@/components/background/bg";
import Loader from "@/components/loader/loader";
import { apiData } from "@/data/url";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";



export default function page() {

    const [data, setData] = useState('')
    const [loader, setLoader] = useState(false)
    const router = useRouter()

    if(getCookie('userData')){
        router.replace('/user')
        return toast.warn('انت مسجل بالفعل')
    }

    function postData(e) {
        e.preventDefault()
        setLoader(true)

        axios({
            url: `${apiData}/password/forgot`,
            method: 'post',
            data: {
                email: data
            }
        }).then((res) => {
            setLoader(false)
            if (res.data.message == "Validation errors") {
                router.replace('/user/signup')
                return toast.warn('لايوجد حساب بهذا البريد')
            }
            if (res.data.message == "Please check your email.") {
                setCookie('email',data)
                router.replace('/user/restPass')
                return toast.success('تم ارسال رمز تحقق الى بريدك الالكترونى')
            }
            console.log(res)
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            return toast.error('حدث خطا ما ! حاول مجددا')
        })
    }

    function funLoader() {
        if (loader) {
            return (
                <div className="bg-gray-200/80 z-50 fixed w-full h-full top-0 right-0">
                    <Loader />
                </div>
            )
        }
    }

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <BG />
            {funLoader()}
            <div className="p-6 rounded-lg bg-gray-200/70 z-10 max-sm:h-full max-sm:w-full flex items-center justify-center">
                <form onSubmit={postData} className="w-[400px] flex flex-col gap-6 max-sm:w-[340px]">
                    <h2 className="text-center font-bold text-2xl text-red-700">
                        اعاده تعيين كلمه المرور
                    </h2>
                    <div>
                        <label>البريد الالكترونى</label>
                        <input type='email' required onChange={(e) => { setData(e.target.value) }} className="w-full h-10 bg-inherit outline-none rounded-md border-2 focus:border-[3px] border-red-700 px-2" />
                    </div>
                    <div className="text-center">
                        <input type='submit' value={"ارسال"} className="px-6 py-2 rounded-md font-bold text-white w-full cursor-pointer hover:bg-red-800 bg-red-700" />
                    </div>
                    <div className="text-center text-sm text-blue-500">
                        <Link href={'/user/signin'}>  تذكرت كلمه المرور! تسجيل الدخول</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}