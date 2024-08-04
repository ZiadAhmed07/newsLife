'use client'

import Loader from "@/components/loader/loader";
import { getCookie } from "cookies-next";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export default function CheckAdmin() {

    const getAdmin = getCookie('adminData')
    const [hidden, setHidden] = useState('')
    const [hiddenRole, setHiddenRole] = useState('')
    const router = useRouter()
    const [admin, setAdmin] = useState()
    const pathName = usePathname()

    if(pathName.startsWith('/dashboard/Category') && pathName.endsWith('/edit')){
        console.log('dasa')
    }

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdmin(data)
            if (data.admin.status == "active") {
                setHidden('hidden')
            } else {
                router.replace('/')
            }
        } else {
            router.replace('/')
        }
    }, [])

    useEffect(() => {
        if (admin) {
            if (admin.admin.role.id == 4) {
                if (
                    pathName.startsWith('/dashboard/advertiseHere')
                    || pathName.startsWith('/dashboard/contact')
                    || pathName.startsWith('/dashboard/comments')
                    || pathName.startsWith('/dashboard/addAdmin')
                    || pathName.startsWith('/dashboard/users')
                    || pathName.startsWith('/dashboard/admins')
                    || pathName.startsWith('/dashboard/newsReviwe')
                    || pathName.startsWith('/dashboard/Category') && pathName.endsWith('/edit')
                ) {
                    router.replace('/dashboard/home')
                    setTimeout(()=>{
                        setHiddenRole('hidden')
                    },500)
                } else {
                    setHiddenRole('hidden')
                }
            }
        }
    }, [admin])

    useEffect(() => {
        if (admin) {
            if (admin.admin.role.id == 3) {
                if (
                    pathName.startsWith('/dashboard/addAdmin')
                    || pathName.startsWith('/dashboard/users')
                    || pathName.startsWith('/dashboard/admins')
                ) {
                    router.replace('/dashboard/home')
                    setTimeout(()=>{
                        setHiddenRole('hidden')
                    },500)
                } else {
                    setHiddenRole('hidden')
                }
            }
        }
    }, [admin])

    useEffect(() => {
        if (admin) {
            if (admin.admin.role.id == 1 || admin.admin.role.id == 2) {
                setHiddenRole('hidden')
            }
        }
    }, [admin])


    return (
        <>
            <div className={`fixed flex items-center justify-center w-full h-full bg-gray-200 z-50 ${hidden}`}>
                <Loader />
            </div>
            <div className={`fixed flex items-center justify-center w-full h-full bg-gray-200 z-50 ${hiddenRole}`}>
                <Loader />
            </div>
        </>
    )
}