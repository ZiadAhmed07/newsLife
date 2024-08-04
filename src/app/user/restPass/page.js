'use client'

import BG from "@/components/background/bg";
import Loader from "@/components/loader/loader";
import { apiData } from "@/data/url";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";



export default function page() {

    const router = useRouter()
    const [loader, setloader] = useState(false)
    const [ConPass, setConPass] = useState('')
    const [data, setData] = useState({
        email: '',
        password: '',
        otp: ''
    })

    if(getCookie('userData')){
        router.replace('/user')
        return toast.warn('انت مسجل بالفعل')
    }

    useEffect(() => {
        setData(prev => ({
            ...prev, email: getCookie('email')
        }))
    }, [])

    function handleData(e) {
        const { name, value } = e.target
        setData(prev => ({
            ...prev, [name]: value
        }))
    }

    function postData(e) {
        e.preventDefault()
        setloader(true)

        if (!data.email) {
            router.replace('/user/sendEmail')
            return toast.warn('يجب عليك ارسال البريد الالكترونى اولا')
        } else {
            if (data.password == ConPass) {
                axios({
                    url: `${apiData}/password/reset`,
                    method: 'post',
                    data: data
                }).then((res) => {
                    setloader(false)
                    if (res.data.message == 'The password reset successfully.') {
                        router.replace('/user/signin')
                        return toast.success('تم تغيير كلمه المرور بنجاح')
                    }
                    console.log(res)
                }).catch((err) => {
                    setloader(false)
                    return toast.error('تاكد من رمز التحقق')
                })
            } else {
                setloader(false)
                return toast.error(' تاكد من كتابة نفس كلمه المرور في حقل تاكيد كلمه المرور')
            }

        }
    }

    function funLoader() {
        if (loader) {
            return (
                <div className="w-full h-full fixed top-0 right-0 flex items-center justify-center bg-gray-200/80 z-50">
                    <Loader />
                </div>
            )
        }
    }


    return (
        <div className="flex justify-center items-center w-full h-screen">
            {funLoader()}
            <BG />
            <div className="p-6 rounded-lg bg-gray-200/70 z-10 max-sm:h-full max-sm:w-full flex items-center justify-center">
                <form onSubmit={postData} className="w-[400px] flex flex-col gap-6 max-sm:w-[340px]">
                    <h2 className="text-center font-bold text-2xl text-red-700">
                        اعاده تعيين كلمه المرور
                    </h2>
                    <div>
                        <label>رمز التحقق</label>
                        <input type='number' required name="otp" onChange={handleData} className="w-full h-10 bg-inherit outline-none rounded-md border-2 focus:border-[3px] border-red-700 px-2" />
                    </div>
                    <div>
                        <label>كلمه المرور</label>
                        <input type='password' required name="password" onChange={handleData} minLength={6} className="w-full h-10 bg-inherit outline-none rounded-md border-2 focus:border-[3px] border-red-700 px-2" />
                    </div>
                    <div>
                        <label>تاكيد كلمه المرور</label>
                        <input type='password' onChange={(e) => { setConPass(e.target.value) }} minLength={6} required className="w-full h-10 bg-inherit outline-none rounded-md border-2 focus:border-[3px] border-red-700 px-2" />
                    </div>
                    <div className="text-center">
                        <input type='submit' value={"اعاده تعيين كلمه المرور"} className="px-6 py-2 rounded-md font-bold text-white w-full cursor-pointer hover:bg-red-800 bg-red-700" />
                    </div>
                    <div className="text-xs text-center">
                        <p>تم ارسال رمز التحقق الى بريدك الالكترونى</p>
                        <p>اذا كنت مسجل ب بريد وهمى , فلا يمكنك اعاده حسابك مره اخرى</p>
                        <p>وبدلا من ذلك عليك <Link href={'/user/singin'} className="text-blue-500">انشاء حساب جديد</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}