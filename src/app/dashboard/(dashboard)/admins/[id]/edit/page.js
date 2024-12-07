"use client"

import Loader from "@/components/loader/loader"
import { apiData } from "@/data/url"
import axios from "axios"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function page({params}) {

    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [loader ,setLoader] = useState(false)
    const router = useRouter()
    const [role , setRole] = useState('')
    const [data, setData] = useState({
        name: '',
        email: '',
        role_id: '',
        adsenseCode:"",
        status:''
    })

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
        }
    }, [])

    useEffect(()=>{
        if(adminData){
            axios({
                url:`${apiData}/admin/edit/adminProfile/${params.id}`,
                method:'get',
                headers:{
                    'Authorization':`Bearer ${adminData.access_token}`
                }
            }).then((res)=>{
                const data = res.data.auther
                setData({
                    name : data.name,
                    email : data.email,
                    role_id : data.role.id,
                    adsenseCode:"",
                    status:''
                })
                setRole(data.role.name)
            })
        }
},[adminData])

    function handleChange(e) {
        const {name , value} = e.target
        setData(prev => ({
            ...prev , [name] : value
        }))
    }

    function postData(e){
        e.preventDefault()
        console.log(data)
        setLoader(true)
            axios({
                url:`${apiData}/admin/update/admin/${params.id}`,
                method:'post',
                headers:{
                    'Authorization':`Bearer ${adminData.access_token}`
                },
                data : data
            }).then((res)=>{
                setLoader(false)
                console.log(res)
                router.replace(`/dashboard/admins/${params.id}`)
                return toast.success('تم تعديل المسؤول بنجاح')
            }).catch((err)=>{
                console.log(err)
                setLoader(false)
                return toast.error('حدث خطا ما! حاول مجددا')
            })
    }

    function FunLoader(){
        if(loader){
            return(
                <div className=" fixed w-full h-full bg-gray-200/80 top-0 right-0 z-50 flex justify-center items-center">
                    <Loader/>
                </div>
            )
        }
    }

    return (
        <div className="min-h-[550px] w-full flex flex-col gap-6">
            {FunLoader()}
            <div className={`w-full  h-screen fixed bg-gray-200/50 top-0 left-0 z-20 ${data.name && 'hidden'}`}>
                <Loader/>
            </div>
            <form onSubmit={postData} className="bg-white  p-6 flex flex-col gap-6">
                <h2 className=" text-red-700 font-bold text-2xl">تعديل مسؤول</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <label>الاسم بالكامل</label><br />
                        <input type="text" value={data.name} required name="name" placeholder="ادخل اسم المسؤول" onChange={handleChange} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                    <div>
                        <label>البريد الالكترونى</label><br />
                        <input type="email" value={data.email} required name="email" placeholder=" ادخل البريد الالكترونى" onChange={handleChange} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                    {
                        /*
                        <div>
                        <label>كود ادسينس</label><br />
                        <input type="text" name="password_confirmation" placeholder="ادخل الرمز التعريفى " onChange={handleChange} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                        */
                    }

                    <div>
                        <label>وظيفه المسؤول</label><br />
                        <div>
                            <div className="flex justify-start gap-6 px-6 max-sm:justify-center max-sm:gap-2 items-center w-full h-10 border rounded-md outline-none ">
                                <div className={`${data.role_id == 2 ? 'bg-red-600 text-white' : ''} text-gray-600 p-1 px-6 rounded-md bg-gray-200`}>

                                    <label htmlFor="firstGrade">ادمن</label>
                                    <input
                                        id="firstGrade"
                                        type="radio"
                                        name="role_id"
                                        value={2}
                                        onChange={handleChange}
                                        className='absolute opacity-0'
                                        required
                                    />
                                </div>
                                <div className={`${data.role_id == 3 ? 'bg-red-600 text-white' : ''} text-gray-600 p-1 px-6 rounded-md bg-gray-200`}>

                                    <label htmlFor="secondGrade">مراجع</label>
                                    <input
                                        id="secondGrade"
                                        type="radio"
                                        name="role_id"
                                        value={3}
                                        onChange={handleChange}
                                        className='absolute opacity-0'
                                        required
                                    />
                                </div>
                                <div className={`${data.role_id == 4 ? 'bg-red-600 text-white' : ''} text-gray-600 p-1 px-6 rounded-md bg-gray-200`}>
                                    <label htmlFor="thirdGrade">كاتب</label>
                                    <input
                                        id="thirdGrade"
                                        type="radio"
                                        name="role_id"
                                        value={4}
                                        onChange={handleChange}
                                        className='absolute opacity-0'
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <input type='submit' value={'تعديل مسؤول '} className=" text-white bg-red-700 p-2 px-6 cursor-pointer hover:bg-red-800 rounded-lg" />
                </div>
            </form>
        </div>
    )
}