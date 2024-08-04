'use client'

import Loader from "@/components/loader/loader"
import { apiData } from "@/data/url"
import axios from "axios"
import { getCookie } from "cookies-next"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function NewsDelete() {

    const getAdmin = getCookie('adminData')
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState('')
    const [adminData, setAdminData] = useState('')

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
        }
    }, [])

    useEffect(() => {
        getData()
    }, [adminData])

    function getData() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/showDeleted/news`,
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

    function FunSetData() {
        if (!data) {
            return (
                <div className=" bg-white h-[200px] flex items-center justify-center relative">
                    <Loader />
                </div>
            )
        }
        if (data.length == 0) {
            return (
                <div className=" bg-white h-[200px] flex items-center justify-center relative">
                    <p className="font-bold text-gray-600 text-lg">لا يوجد محذوفات</p>
                </div>
            )
        }
        if (data) {
            return (
                <div className="w-full h-[300px] bg-white border min-w-[500px]">
                    <div className="w-full grid grid-cols-4 border p-1 font-bold">
                    <p className="text-center">الخبر</p>
                        <p className="text-center">الكاتب</p>
                        <p className="text-center">التاريخ</p>
                        <p className="text-center"></p>
                    </div>
                    {
                        data.map((el, i) => {
                            let bg = 'bg-gray-50'
                            if (i % 2 === 0) {
                                bg = 'bg-gray-100'
                            } else {
                                bg = 'bg-gray-50'
                            }
                            return (
                                <div key={i} className={`w-full grid grid-cols-4 ${bg} p-1`}>
                                    <p className="text-center truncate">{el.title}</p>
                                    <p className="text-center ">{el.writer}</p>
                                    <p className="text-center ">{el.formatted_date}</p>
                                    <div className="text-center flex items-center justify-center gap-2">
                                        <button onClick={()=>{deleteData(el.id)}} className="bg-red-700 text-white px-2 rounded-md">حذف</button>
                                        <button onClick={()=>{restData(el.id)}} className="bg-sky-700 text-white px-2 rounded-md">استرجاع</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

    function deleteData(id){
        setLoader(true)
        axios({
            url: `${apiData}/admin/forceDelete/news/${id}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            }
        }).then((res) => {
            setLoader(false)
            location.reload()
            return toast.success('تم الحذف بنجاح')
        }).catch((err)=>{
            setLoader(false)
            console.log(err)
            return toast.error('حدق خطا ما ! حاول مجددا')
        })
    }

    function restData(id){
        setLoader(true)
        axios({
            url: `${apiData}/admin/restore/news/${id}`,
            method: 'get',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            }
        }).then((res) => {
            setLoader(false)
            location.reload()
            return toast.success('تم الاسترجاع بنجاح')
        }).catch((err)=>{
            setLoader(false)
            console.log(err)
            return toast.error('حدق خطا ما ! حاول مجددا')
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
        <div className="w-full overflow-auto">
            {FunLoader()}
            <div className="p-2 px-4 border flex justify-between bg-white border-r-8 border-r-red-700 items-center">
                <p className="font-bold">الاخبار</p>
            </div>
            {FunSetData()}
        </div>
    )
}
