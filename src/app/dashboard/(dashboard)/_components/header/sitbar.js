'use client'

import Link from "next/link";
import { Links1 } from "./links";
import { Links2 } from "./links";
import { Links3 } from "./links";
import { usePathname, useRouter } from "next/navigation";
import { apiData } from "@/data/url";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "@/components/loader/loader";
import { deleteCookie, getCookie } from "cookies-next";


export default function Sitbar() {

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
                <div className="w-full h-screen bg-gray-200/80 flex items-center justify-center fixed top-0 right-0 z-50">
                    <Loader />
                </div>
            )
        }
    }

    return (
        <div className="w-[200px] h-screen bg-white fixed z-30 max-sm:hidden over">
            {FunLoader()}
            <div className=" mt-[80px]">
                <ul className="flex flex-col gap-1">
                    {Links1.map((el, index) => {
                        const isActive = pathName.startsWith(el.Link);
                        const hasPermission = el.state.some(stateId => data?.admin?.role.id === stateId);

                        return (
                            <li key={index}>
                                <Link
                                    href={el.Link}
                                    className={`flex gap-4 text-sm hover:bg-gray-200 p-2 ${isActive ? 'border-r-4 border-r-red-700 bg-gray-200' : ''} ${hasPermission ? '' : 'hidden'}`}
                                >
                                    {el.svg}
                                    <span>{el.lable}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="w-full h-[1px] bg-gray-200 my-[2px]"></div>
                <ul className="flex flex-col gap-1">
                    {Links2.map((el, index) => {
                        const isActive = pathName.startsWith(el.Link);
                        const hasPermission = el.state.some(stateId => data?.admin?.role.id === stateId);

                        return (
                            <li key={index}>
                                <Link
                                    href={el.Link}
                                    className={`flex gap-4 text-sm hover:bg-gray-200 p-2 ${isActive ? 'border-r-4 border-r-red-700 bg-gray-200' : ''} ${hasPermission ? '' : 'hidden'}`}
                                >
                                    {el.svg}
                                    <span>{el.lable}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="w-full h-[1px] bg-gray-200 my-[2px]"></div>
                <ul className="flex flex-col gap-1">
                    {Links3.map((el, index) => {
                        const isActive = pathName.startsWith(el.Link);
                        const hasPermission = el.state.some(stateId => data?.admin?.role.id === stateId);

                        return (
                            <li key={index}>
                                <Link
                                    href={el.Link}
                                    className={`flex gap-4 text-sm hover:bg-gray-200 p-2 ${isActive ? 'border-r-4 border-r-red-700 bg-gray-200' : ''} ${hasPermission ? '' : 'hidden'}`}
                                >
                                    {el.svg}
                                    <span>{el.lable}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className=" w-full absolute bottom-0">
                <div className="w-full h-[1px] bg-gray-200 my-[2px]"></div>
                <button onClick={logout} className="flex gap-4 p-2  hover:bg-gray-200 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                    </svg>
                    <span>خروج</span>
                </button>
            </div>
        </div>
    )
}