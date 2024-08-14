"use client"

import Loader from "@/components/loader/loader"
import { apiData } from "@/data/url"
import axios from "axios"
import { getCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function page() {

    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [loader ,setLoader] = useState(false)
    const router = useRouter()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role_id: '',
        adsenseCode:""
    })

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
        }
    }, [])

    function handleChange(e) {
        const {name , value} = e.target
        setData(prev => ({
            ...prev , [name] : value
        }))
    }

    function postData(e){
        e.preventDefault()
        setLoader(true)
        if(data.password === data.password_confirmation){
            axios({
                url:`${apiData}/admin/register`,
                method:'post',
                headers:{
                    'Authorization':`Bearer ${adminData.access_token}`
                },
                data:data
            }).then(()=>{
                setLoader(false)
                router.replace('/dashboard/home')
                return toast.success('تم اضافه المسؤول بنجاح')
            }).catch((err)=>{
                console.log(err)
                setLoader(false)
                return toast.error('حدث خطا ما! حاول مجددا')
            })
        }else{
            setLoader(false)
            return toast.error('تحقق من حقل تاكيد كبمه المرور')
        }
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
            <form onSubmit={postData} className="bg-white  p-6 flex flex-col gap-6">
                <h2 className=" text-red-700 font-bold text-2xl">اضافه مسؤول</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <label>الاسم بالكامل</label><br />
                        <input type="text" name="name" placeholder="ادخل اسم المسؤول" required onChange={handleChange} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                    <div>
                        <label>البريد الالكترونى</label><br />
                        <input type="text" name="email" placeholder=" ادخل البريد الالكترونى" required onChange={handleChange} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                    <div>
                        <label>كلمه المرور</label><br />
                        <input type="text" name="password" placeholder=" ادخل كلمه المرور" required onChange={handleChange} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                    <div>
                        <label>تاكيد كلمه المرور</label><br />
                        <input type="password" name="password_confirmation" placeholder="تاكيد كلمه المرور" required onChange={handleChange} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
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
                    <input type='submit' value={'اضافه مسؤول جديد'} className=" text-white bg-red-700 p-2 px-6 cursor-pointer hover:bg-red-800 rounded-lg" />
                </div>
            </form>
        </div>
    )
}