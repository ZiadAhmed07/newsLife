'use client'

import BG from "@/components/background/bg";
import Loader from "@/components/loader/loader";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import {apiData} from '@/data/url'
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";


export default function page(){

    const router = useRouter()
    const [loader , setloader] = useState(false)
    const [data , setData] = useState({
        name : '',
        email : '',
        password : '',
        password_confirmation : ''
    })

    if(getCookie('userData')){
        router.replace('/user')
        return toast.warn('انت مسجل بالفعل')
    }

    function funLoader(){
        if(loader){
            return(
                <div className="z-50 bg-gray-200/80 w-full h-screen fixed top-0 right-0">
                    <Loader/>
                </div>
            )
        }
    }

    function handleData(e){
        const {name , value} = e.target
        setData( prev => ({
            ...prev , [name] : value
        }))
    }

    function postData(e){
        e.preventDefault()
        setloader(true)

        if(data.password == data.password_confirmation){
            axios({
                url:`${apiData}/user/register`,
                method:'post',
                data : data
            }).then((res)=>{
                setloader(false)
                if(res.data.message == 'Registration successful!'){
                    router.replace('/user/signin')
                    setloader(false)
                    return toast.success('تم انشاء الحساب بنجاح')
                }
                if(res.data.message == 'Validation errors'){
                    router.replace('/user/signin')
                    setloader(false)
                    return toast.warn('هذا الحساب مستخدم من قبل')
                }
                console.log(res)
            }).catch((err)=>{
                console.log(err)
                setloader(false)
                return toast.error("حدث خطا ما ! حاول مجددا")
            })
        } else{
            setloader(false)
            return toast.error(' تاكد من كتابة نفس كلمه المرور في حقل تاكيد كلمه المرور')
        }
        

    }

    return(
        <div className="flex justify-center items-center w-full h-screen">
            <BG/>
            {funLoader()}
            <div className="p-6 rounded-lg bg-gray-200/70 z-10 max-sm:h-full max-sm:w-full flex items-center justify-center">
                <form onSubmit={postData} className="w-[400px] flex flex-col gap-6 max-sm:w-[340px]">
                    <h2 className="text-center font-bold text-2xl text-red-700">
                        انشاء حساب 
                    </h2>
                    <div>
                        <label>الاسم كامل</label>
                        <input type='text' required name="name" onChange={handleData} className="w-full h-10 bg-inherit outline-none rounded-md border-2 focus:border-[3px] border-red-700 px-2"/>
                    </div>
                    <div>
                        <label>البريد الالكترونى</label>
                        <input type='email' required name="email" onChange={handleData} className="w-full h-10 bg-inherit outline-none rounded-md border-2 focus:border-[3px] border-red-700 px-2"/>
                    </div>
                    <div>
                        <label>كلمه المرور </label>
                        <input type="password"  minLength={6} required name="password" onChange={handleData} className="w-full h-10 bg-inherit outline-none rounded-md border-2 focus:border-[3px] border-red-700 px-2"/>
                    </div>
                    <div>
                        <label>تاكيد كلمه المرور</label>
                        <input type='password' minLength={6} required name='password_confirmation' onChange={handleData} className="w-full h-10 bg-inherit outline-none rounded-md border-2 focus:border-[3px] border-red-700 px-2"/>
                    </div>
                    <div className="text-center">
                        <input type='submit' value={"انشاء حساب "} className="px-6 py-2 rounded-md font-bold text-white w-full cursor-pointer hover:bg-red-800 bg-red-700"/>
                    </div>
                    <div className="text-center text-sm text-blue-500">
                        <Link href={'/user/signin'}>لديا حساب! تسجيل الدخول</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}