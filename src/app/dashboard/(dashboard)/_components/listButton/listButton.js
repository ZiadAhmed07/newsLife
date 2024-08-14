'use client'

import Link from "next/link"
import "./style.css"
import { useEffect, useState } from "react"
import { Links1 } from "../header/links"
import { Links2 } from "../header/links"
import { Links3 } from "../header/links"
import { usePathname, useRouter } from "next/navigation"
import Loader from "@/components/loader/loader"
import { toast } from "react-toastify"
import axios from "axios"
import { apiData } from "@/data/url"
import { deleteCookie, getCookie } from "cookies-next"



export default function ListButton() {

    const [nav, setNav] = useState('hidden')
    const pathName = usePathname()
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState('')
    const getAdmin = getCookie('adminData')
    const router = useRouter()

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setData(data)
        }
    }, [])

    function logout() {
        setLoader(true)
        axios({
            url: `${apiData}/admin/logout`,
            method: `post`,
            headers: {
                'Authorization': `Bearer ${data.access_token}`
            }
        }).then(() => {
            deleteCookie('adminData')
            setLoader(false)
            router.replace('/')
            return toast.success('تم تسجيل الخروج')
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            return toast.error('حدث خطا ما')
        })
    }

    function FunLoader() {
        if (loader) {
            return (
                <div className="w-full h-screen bg-gray-200/80 flex items-center justify-center fixed top-0 right-0 z-[100]">
                    <Loader />
                </div>
            )
        }
    }

    function navbar() {
        return (
            <div className={`fixed top-0 left-0 w-full h-screen z-50  ${nav}`}>
                <div onClick={() => { setNav('hidden') }} className="w-full h-full bg-black/70"></div>
                <div className='absolute top-0 w-[300px] h-screen text-black font-bold flex flex-col p-6 gap-12'>
                    <div className="RightToLeftNav py-4 bg-gray-200 rounded-xl h-full w-full relative overflow-auto">
                        <div onClick={() => { setNav('hidden') }} className="w-6 h-6 bg-red-500 rounded-full absolute top-2 left-2 cursor-pointer hover:bg-red-600"></div>
                        <h1 className="font-bold text-[25px] px-4 ">الوطنى <span className="text-red-700 text-[20px]">نيوز</span></h1>
                        <div className="flex flex-col gap-1 mt-8 pb-8">
                            <ul className="flex flex-col gap-1">
                                {Links1.map((el, index) => {
                                    const isActive = pathName.startsWith(el.Link);
                                    const hasPermission = el.state.some(stateId => data?.admin?.role.id === stateId);

                                    return (
                                        <li key={index}>
                                            <Link
                                                href={el.Link}
                                                className={`flex gap-4 text-sm hover:bg-gray-100 p-2 ${isActive ? 'border-r-4 border-r-red-700 bg-gray-100' : ''} ${hasPermission ? '' : 'hidden'}`}
                                            >
                                                {el.svg}
                                                <span>{el.lable}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="w-full h-[1px] bg-gray-100 my-[2px]"></div>
                            <ul className="flex flex-col gap-1">
                                {Links2.map((el, index) => {
                                    const isActive = pathName.startsWith(el.Link);
                                    const hasPermission = el.state.some(stateId => data?.admin?.role.id === stateId);

                                    return (
                                        <li key={index}>
                                            <Link
                                                href={el.Link}
                                                className={`flex gap-4 text-sm hover:bg-gray-100 p-2 ${isActive ? 'border-r-4 border-r-red-700 bg-gray-100' : ''} ${hasPermission ? '' : 'hidden'}`}
                                            >
                                                {el.svg}
                                                <span>{el.lable}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="w-full h-[1px] bg-gray-100 my-[2px]"></div>
                            <ul className="flex flex-col gap-1">
                                {Links3.map((el, index) => {
                                    const isActive = pathName.startsWith(el.Link);
                                    const hasPermission = el.state.some(stateId => data?.admin?.role.id === stateId);

                                    return (
                                        <li key={index}>
                                            <Link
                                                href={el.Link}
                                                className={`flex gap-4 text-sm hover:bg-gray-100 p-2 ${isActive ? 'border-r-4 border-r-red-700 bg-gray-100' : ''} ${hasPermission ? '' : 'hidden'}`}
                                            >
                                                {el.svg}
                                                <span>{el.lable}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="flex gap-4 p-2 bg-gray-100 fixed bottom-6 w-[238px]  cursor-pointer hover:bg-gray-50" onClick={logout}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                    </svg>
                                    <span>خروج</span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div>
            {FunLoader()}
            <label className="hamburger" onClick={() => { setNav('') }}>
                <input type="checkbox" />
                <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </label>
            {navbar()}
        </div>
    )
}