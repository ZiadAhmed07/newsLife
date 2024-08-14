'use client'

import { useEffect, useState } from "react";
import ListButton from "../listButton/listButton";
import { deleteCookie, getCookie } from "cookies-next";
import Loader from "@/components/loader/loader";
import axios from "axios";
import { apiData } from "@/data/url";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


export default function Navbar() {

    const [hidden , setHidden] = useState('hidden')
    const [data , setData] = useState('')
    const getAdmin = getCookie('adminData')
    const [loader ,setLoader] = useState(false)
    const router = useRouter()

    useEffect(()=>{
        if(getAdmin){
            const data = JSON.parse(getAdmin)
            setData(data)
        }
    },[])

    function logout(){
        setLoader(true)
        axios({
            url:`${apiData}/admin/logout`,
            method:`post`,
            headers:{
                'Authorization':`Bearer ${data.access_token}`
            }
        }).then(()=>{
            deleteCookie('adminData')
            setLoader(false)
            router.replace('/dashboard/login')
            return toast.success('تم تسجيل الخروج')
        }).catch((err)=>{
            console.log(err)
            setLoader(false)
            return toast.error('حدث خطا ما')
        })
    }

    function FunLoader(){
        if(loader){
            return(
                <div className="w-full h-screen bg-gray-200/80 flex items-center justify-center fixed top-0 right-0 z-50">
                    <Loader/>
                </div>
            )
        }
    }

    return (
        <div className="w-full h-[60px] bg-white fixed z-40 flex justify-between items-center px-6">
            {FunLoader()}
            <div className="sm:hidden">
                <ListButton />
            </div>
            <div >
                <h1 className="font-bold text-[25px]">الوطنى <span className="text-red-700 text-[20px]">نيوز</span></h1>
            </div>
            <div>
                <div onClick={()=>{setHidden('')}} className="w-[40px] h-[40px] rounded-full bg-red-700 flex items-center justify-center font-bold text-white text-2xl cursor-pointer ">
                    {data?.admin?.name[0]}
                </div>
                <div onClick={()=>{setHidden('hidden')}} className={`w-full h-screen bg-gray-500/60 absolute top-0 right-0 ${hidden}`}></div>
                <div className={`p-6 w-[300px] rounded-lg bg-gray-50 border-red-700 border absolute top-[65px] left-[30px] flex flex-col gap-6 ${hidden}`}>
                    <div onClick={()=>{setHidden('hidden')}} className="w-[15px] h-[15px] rounded-full bg-red-700 absolute top-3 right-3 cursor-pointer"></div>
                    <div className="flex items-center flex-col gap-4">
                        <div className="w-[40px] h-[40px] rounded-full bg-red-700 flex items-center justify-center font-bold text-white text-2xl cursor-pointer ">
                            {data?.admin?.name[0]}
                        </div>
                        <div className="font-bold">
                            <p> مرحبا {data?.admin?.name}</p>
                        </div>
                        <div className="font-bold flex items-center gap-4">
                            <p>{data?.admin?.role.name}</p>
                            <p className="h-4 w-4 rounded-full bg-green-500"></p>
                        </div>
                    </div>
                    <div className="p-6 border border-gray-300 rounded-lg">
                        <p>{data?.admin?.name}</p>
                        <p className="truncate">{data?.admin?.email}</p>
                        <button onClick={logout} className="py-2 text-red-500 hover:text-red-700">تسجيل الخروج</button>
                    </div>
                </div>
            </div>
        </div>
    )
}