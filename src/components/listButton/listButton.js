'use client'

import Link from "next/link"
import "./style.css"
import { useEffect, useState } from "react"
import Time from "../time/time"
import { usePathname } from "next/navigation"
import axios from "axios"
import { apiData } from "@/data/url"

export default function ListButton() {

    const [nav, setNav] = useState('hidden')
    const now = new Date()
    const date = (new Intl.DateTimeFormat('ar', { dateStyle: 'full' })).format(now)

    const [data, setData] = useState([])
    const pathName = usePathname()

    useEffect(() => {
        axios({
            url: `${apiData}/user/showAll/newCategory`,
            method: 'get',
        }).then((res) => {
            setData(res.data.data)
        })
    }, [])

    function HoemLink() {
        if (pathName == '/') {
            return (
                <div className='cursor-pointer py-2 font-bold text-red-700 relative text-center'>
                    <Link href={`/`}>الرئيسيه</Link>
                    <div className={`absolute h-[2px] bg-red-700 w-full bottom-0`}></div>
                </div>
            )
        } else {
            return (
                <div className='cursor-pointer py-2 text-center relative navbar-hover'>
                    <Link href={`/`}>الرئيسيه</Link>
                    <div className={`absolute h-[2px] bg-red-700 bottom-0 w-[0px]`}></div>
                </div>
            )
        }
    }

    function navbar() {
        return (
            <div className={`fixed top-0 left-0 w-full h-screen z-50  ${nav}`}>
                <div onClick={() => { setNav('hidden') }} className="w-full h-full bg-black/70"></div>
                <div className='absolute top-0 w-[300px] h-screen text-black font-bold flex flex-col p-6 gap-12'>
                    <div className="RightToLeftNav bg-gray-200 rounded-xl h-full w-full px-6 py-8 relative overflow-auto">
                        <div onClick={() => { setNav('hidden') }} className="w-6 h-6 bg-red-500 rounded-full absolute top-2 left-2 cursor-pointer hover:bg-red-600"></div>
                        <h1 className="font-bold text-[25px] mb-16">الوطنى <span className="text-red-700 text-[20px]">نيوز</span></h1>
                        <div className="flex flex-col gap-2">
                            {HoemLink()}
                            {
                                data?.map((el, i) => {
                                    let textStyle = ''

                                    if (pathName.startsWith(`/category/${el.id}`)) {
                                        textStyle = 'text-red-700 font-bold bg-gray-100'
                                    }

                                    return (
                                        <div key={i} className={`cursor-pointer py-2 relative text-center navbar-hover ${textStyle}`}>
                                            <div className={`absolute h-[2px] bg-red-700 bottom-0 w-[0px]`}></div>
                                            <Link href={`/category/${el.id}`} className>{el.name}</Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div>
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