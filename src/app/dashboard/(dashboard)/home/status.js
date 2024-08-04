'use client'

import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import Loader from "@/components/loader/loader";
import { apiData, apiImg } from "@/data/url";
import Select from "react-select";
import { toast } from "react-toastify";

export default function Status() {

    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [Statistics, setStatistics] = useState()

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
        }
    }, [])

    useEffect(() => {
        getStatistics()
    }, [adminData])

    function getStatistics() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/showAll/statistics`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                setStatistics(res.data)
                console.log(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    function FunStatistics() {
        if (!Statistics) {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="h-[200px] w-full rounded-lg bg-gray-100 animate-pulse ">
                    </div>
                    <div className="h-[200px] w-full rounded-lg bg-gray-100 animate-pulse"></div>
                    <div className="h-[200px] w-full rounded-lg bg-gray-100 animate-pulse"></div>
                    <div className="h-[200px] w-full rounded-lg bg-gray-100 animate-pulse"></div>
                </div>
            )
        }
        if (Statistics) {
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="h-[200px] w-full rounded-lg bg-white p-6 py-8 flex flex-col justify-between gap-2 text-red-700 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="p-2 rounded-md bg-gray-200 bi bi-newspaper" viewBox="0 0 16 16">
                            <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                            <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
                        </svg>
                        <p>عدد الاخبار : {Statistics.News_count}</p>
                    </div>
                    <div className="h-[200px] w-full rounded-lg bg-white p-6 py-8 flex flex-col justify-between gap-2 text-green-500 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="p-2 rounded-md bg-gray-200 bi bi-bookmarks" viewBox="0 0 16 16">
                            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
                            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
                        </svg>
                        <p>عدد الاقسام : {Statistics.Categories_count}</p>
                    </div>
                    <div className="h-[200px] w-full rounded-lg bg-white p-6 py-8 flex flex-col justify-between gap-2 text-purple-800 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="p-2 rounded-md bg-gray-200 bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                        <p>عدد المشاهدات : {Statistics.Views_count}</p>
                    </div>
                    <div className="h-[200px] w-full rounded-lg bg-white p-6 py-8 flex flex-col justify-between gap-2 text-blue-500 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="p-2 rounded-md bg-gray-200 bi bi-person-lines-fill" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
        </svg>
                        <p>عدد المسؤولين : {Statistics.Admins_count}</p>
                    </div>
                </div>
            )
        }
    }


    return (
        <div>
            {FunStatistics()}
        </div>
    )
}
