'use client'

import Loader from "@/components/loader/loader"
import { apiData } from "@/data/url"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Select from "react-select"



export default function Search({DataSearch}) {

    const data = DataSearch.data
    const [hiddenSelect, setHiddenSelect] = useState(false)
    const router = useRouter()
    const [loader, setLoader] = useState(false)

    useEffect(()=>{
        setLoader(false)
    },[router])

    function FunSelect() {
        if (data) {
            let convertedCategories = data.map(el => ({
                id: el.news_id,
                value: el.news_id,
                label: el.title,
                id_categoty: el.category_id
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

    function FunLoader() {
        if (loader) {
            return (
                <div className="fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0">
                    <Loader />
                </div>
            )
        }
    }    


    function postSliderNews(e){
        setLoader(true)
        router.push(`/category/${e.id_categoty}/${e.id}`)
    }

    return (
        <form className=" border flex items-center px-4 py-2 rounded-lg">
            {FunSelect()}
            {FunLoader()}
            <input type='search' onClick={()=>{setHiddenSelect(true)}} placeholder="بحث" required className="w-[200px] outline-none max-md:w-full" />
            <button type='submit' >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </button>
        </form>
    )
}
