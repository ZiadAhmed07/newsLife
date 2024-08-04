"use client"

import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import Loader from "@/components/loader/loader";
import { apiData, apiImg } from "@/data/url";
import Select from "react-select";
import { toast } from "react-toastify";

export default function SliderNews() {

    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [SliderNews, setSliderNews] = useState('')
    const [News, setNews] = useState('')
    const [hiddenSelect, setHiddenSelect] = useState(false)
    const [loader, setLoader] = useState(false)
    const [role , setRole] = useState('')

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
            if(data.admin.role.id == 4){
                setRole('hidden')
            }
        }
    }, [])

    useEffect(() => {
        getSliderNews()
        getNews()
    }, [adminData])


    function getSliderNews() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/showAll/slider`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                setSliderNews(res.data.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    function FungetSliderNews() {
        if (!SliderNews) {
            return (
                <div className="w-full h-[300px] bg-gray-100 flex items-center justify-center relative">
                    <Loader />
                </div>
            )
        }
        if (SliderNews.length == 0) {
            return (
                <div className="w-full h-[200px] bg-gray-100 flex items-center justify-center font-bold text-gray-600">
                    لا يوجد اخبار
                </div>
            )
        }
        if (SliderNews) {
            return (
                <div className="min-h-[200px] bg-white">
                    {
                        SliderNews?.map((el, i) => {
                            let bg = 'bg-gray-100'
                            i % 2 == 0 ? bg = 'bg-gray-100' : bg = 'bg-gray-50'
                            return (
                                <div key={i} className={`p-2 ${bg} text-sm truncate flex gap-3 items-center relative`}>
                                    <p onClick={()=>{FunDelete(el.id)}} className={`absolute text-red-500 left-0 px-2 cursor-pointer ${role} ${bg}`}>حذف</p>
                                    <p className="w-3 h-3 rounded-full bg-red-700"></p>
                                    <p>{el.news?.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }

    function FunDelete(e) {
        setLoader(true)
        axios({
            url: `${apiData}/admin/forceDelete/slider/${e}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            },
        }).then((res) => {
            setLoader(false)
            setTimeout(() => {
                location.reload()
            }, 500)
            return toast.success('تم حذف الخبر')
        }).catch((err) => {
            setLoader(false)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
    }

    function postSliderNews(e) {
        setLoader(true)
        axios({
            url: `${apiData}/admin/create/slider`,
            method: 'post',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            },
            data: {
                trending_news_id: 1,
                news_id: e.value
            }
        }).then((res) => {
            setLoader(false)
            setHiddenSelect(false)
            setTimeout(() => {
                location.reload()
            }, 500)
            return toast.success('تم اضافه الخبر')
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            setHiddenSelect(false)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
    }

    function FunSelect() {
        if (News) {
            let convertedCategories = News.map(el => ({
                id: el.id,
                value: el.id,
                label: el.title
            }));

            if (hiddenSelect) {
                return (
                    <div className=" fixed top-0 left-0 w-full h-full flex items-start justify-center z-40">
                        <div className="w-full h-full bg-gray-200/80" onClick={() => { setHiddenSelect(false) }}></div>
                        <div className=" absolute p-6 my-20">
                            <Select options={convertedCategories} onChange={(e) => { postSliderNews(e) }} placeholder="بحث..." className="max-sm:w-[320px] w-[500px] text-sm max-sm:text-xs" />
                        </div>
                    </div>
                )
            }
        }
    }

    function getNews() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/showAll/news`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                const data = res.data.news
                const filter = data?.filter((el)=>{
                    return el.status == 'published'
                })
                setNews(filter)
            }).catch((err) => {
                console.log(err)
            })
        }
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
        <div>
            {FunLoader()}
            <div className="p-2 px-4 font-bold border flex items-center justify-between bg-white border-r-8 border-r-red-700">
                <p>الاخبار المنزلقه</p>
                <button onClick={() => { setHiddenSelect(true) }} className={`text-sm bg-red-700 text-white rounded-md p-1 ${role}`}>اضافه خبر</button>
            </div>
            <div>
                {FunSelect()}
                {FungetSliderNews()}
            </div>
        </div>
    )
}