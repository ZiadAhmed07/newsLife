'use client'

import Loader from "@/components/loader/loader"
import { apiData } from "@/data/url"
import axios from "axios"
import { getCookie, setCookie } from "cookies-next"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function Form () {

    const userData = getCookie('userData')
    const [stateUserData , setUserData] = useState('')
    const router = useRouter()
    const pathname = usePathname()
    const [hidden , setHidden] = useState('')
    const [email , setEmail] = useState('')
    const [name , setName] = useState('')
    const [loader , setLoader] = useState(false)
    const [user_id , setUser_id] = useState('')
    const [data , setData] = useState({
        message : '',
        phone : ''
    })

    useEffect(()=>{
        if(userData){
            const data = JSON.parse(userData)
            setUserData(data)
            setHidden('hidden')
            setEmail(data.user.email)
            setName(data.user.name)
            setUser_id(data.user.id)
        }
    },[])

    function handleData(e){
        const {name , value} = e.target
        setData(
            prev => ({
                ...prev , [name] : value
            })
        )
    }

    function postData(e){
        e.preventDefault()
        setLoader(true)
        axios({
            url:`${apiData}/user/create/contactUs`,
            method:'post',
            data:{
                user_id : user_id,
                message : data.message,
                phone : data.phone
            },
            headers:{
                'Authorization ' : `Bearer ${stateUserData.access_token}`
            }
        }).then(()=>{
            setLoader(false)
            router.replace("/")
            return toast.success('تم ارسال طلبك وسيتم الرد عليك في اقرب وقت')
        }).catch(()=>{
            setLoader(false)
            return toast.error('حدث خطا ما ! حاول مجددا')
        })
    }

    function funLoader (){
        if(loader){
            return(
                <div className="w-full h-full fixed top-0 right-0 bg-gray-200/80 z-50 flex items-center justify-center">
                    <Loader/>
                </div>
            )
        }
    }

    return (
        <div className=" relative" >
            {funLoader()}
            <div className={`w-full h-full bg-gray-200/60 absolute flex flex-col justify-center items-center ${hidden}`}>
                <p className="font-bold text-gray-700 bg-gray-200 p-2 rounded-lg">يجب عليك تسجيل الدخول اولا! <Link href={'/user/signin'} onClick={()=>{setCookie('PrevUrl',pathname)}} className="text-red-700 hover:text-red-800">تسجيل</Link></p>
            </div>
            <form onSubmit={postData} className='flex gap-4 max-sm:flex-col'>
                <textarea name="message" onChange={handleData} required placeholder='الرساله' className='p-3 max-sm:h-[200px] outline-none border-2 focus:border-[3px] border-red-700 w-full' />
                <div className='flex flex-col gap-4'>
                    <input type='text' required value={name} readOnly placeholder='الاسم' className='bg-gray-200 text-gray-500 px-2 h-10 outline-none border-2 focus:border-[3px] border-red-700 ' />
                    <input type='email' required value={email} readOnly placeholder='البريد اللكترونى' className='bg-gray-200 text-gray-500 px-2 h-10 outline-none border-2 focus:border-[3px] border-red-700 ' />
                    <input type='number' required name="phone" onChange={handleData} placeholder='الهاتف' className='px-2 h-10 outline-none border-2 focus:border-[3px] border-red-700 ' />
                    <input type='submit' className='py-2 font-bold text-white bg-red-700 cursor-pointer' />
                </div>
            </form>
        </div>
    )
}