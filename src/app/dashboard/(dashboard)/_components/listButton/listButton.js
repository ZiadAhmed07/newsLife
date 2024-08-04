'use client'

import Link from "next/link"
import "./style.css"
import { useState } from "react"
import { Links1 } from "../header/links"
import { Links2 } from "../header/links"
import { Links3 } from "../header/links"
import { usePathname } from "next/navigation"


export default function ListButton() {

    const [nav, setNav] = useState('hidden')
    const pathName = usePathname()

    function navbar() {
        return (
            <div className={`fixed top-0 left-0 w-full h-screen z-50  ${nav}`}>
                <div onClick={() => { setNav('hidden') }} className="w-full h-full bg-black/70"></div>
                <div className='absolute top-0 w-[300px] h-screen text-black font-bold flex flex-col p-6 gap-12'>
                    <div className="RightToLeftNav py-4 bg-gray-200 rounded-xl h-full w-full relative overflow-hidden">
                        <div onClick={() => { setNav('hidden') }} className="w-6 h-6 bg-red-500 rounded-full absolute top-2 left-2 cursor-pointer hover:bg-red-600"></div>
                        <h1 className="font-bold text-[25px] px-4 ">الوطنى <span className="text-red-700 text-[20px]">نيوز</span></h1>
                        <div className="flex flex-col gap-1 mt-2">
                            <ul className=" flex flex-col gap-1 ">
                                {
                                    Links1.map((el, index) => {
                                        let style = ''
                                        pathName.startsWith(el.Link) ? style = 'border-r-4 border-r-red-700 bg-gray-100' : style = ''

                                        return (
                                            <li key={index}>
                                                <Link href={el.Link} className={`flex gap-4 text-sm hover:bg-gray-100 p-2 ${style}`}>
                                                    {el.svg}
                                                    <span>{el.lable}</span>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="w-full h-[1px] bg-gray-100 my-[2px]"></div>
                            <ul className=" flex flex-col gap-1 ">
                                {
                                    Links2.map((el, index) => {
                                        let style = ''
                                        pathName.startsWith(el.Link) ? style = 'border-r-4 border-r-red-700 bg-gray-100' : style = ''

                                        return (
                                            <li key={index}>
                                                <Link href={el.Link} className={`flex gap-4 text-sm hover:bg-gray-100 p-2 ${style}`}>
                                                    {el.svg}
                                                    <span>{el.lable}</span>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className="w-full h-[1px] bg-gray-100 my-[2px]"></div>
                            <ul className=" flex flex-col gap-1 ">
                                {
                                    Links3.map((el, index) => {
                                        let style = ''
                                        pathName.startsWith(el.Link) ? style = 'border-r-4 border-r-red-700 bg-gray-100' : style = ''

                                        return (
                                            <li key={index}>
                                                <Link href={el.Link} className={`flex gap-4 text-sm hover:bg-gray-100 p-2 ${style}`}>
                                                    {el.svg}
                                                    <span>{el.lable}</span>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                            <div className=" absolute bottom-0 w-full">
                                <Link href={'/'} className="flex gap-4 p-2 bg-gray-100 hover:bg-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                    </svg>
                                    <span>خروج</span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    function handleNavbar() {

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