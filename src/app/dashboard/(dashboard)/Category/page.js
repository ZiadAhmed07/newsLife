'use client'

import Loader from "@/components/loader/loader"
import { apiData } from "@/data/url"
import axios from "axios"
import { getCookie } from "cookies-next"
import Link from "next/link"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

export default function page() {

    const getAdmin = getCookie('adminData')
    const [DeleteHidden, setDeleteHidden] = useState(false)
    const [EditHidden, setEditHidden] = useState(false)
    const [AddHidden, setAddHidden] = useState(false)
    const [loader, setLoader] = useState(false)
    const [data, setData] = useState('')
    const [adminData, setAdminData] = useState('')
    const [EditID, setEditID] = useState('')
    const [DeleteID, setDeleteID] = useState('')
    const [role , setRole] = useState('')

    const [edit, setEdit] = useState({
        name: '',
        url: ''
    })

    const [add, setAdd] = useState({
        name: '',
        url: ''
    })

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
        getCategory()
    }, [adminData])

    function getCategory() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/showAll/categories`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                setData(res.data.data)
            })
        }
    }

    function setCategory() {
        if (!data) {
            return (
                <div className="w-full h-[300px] bg-gray-100 flex items-center justify-center relative">
                    <Loader />
                </div>
            )
        }
        if (data.length == 0) {
            return (
                <div className="w-full h-[100px] bg-gray-100 flex items-center justify-center font-bold text-gray-600">
                    لا يوجد اقسام
                </div>
            )
        }
        if (data) {
            console.log(data)
            return (
                data.map((el, index) => {
                    let bg = 'bg-gray-50'

                    if (index % 2 === 0) {
                        bg = 'bg-gray-100'
                    } else {
                        bg = 'bg-gray-50'
                    }

                    return (
                        <div key={index} className={`grid grid-cols-4 p-2 ${bg} hover:bg-gray-200`}>
                            <p className=" text-center">{el.name}</p>
                            <p className=" text-center">{el.news_count}</p>
                            <p className=" text-center">{el.views_count}</p>
                            <div className="flex gap-6 justify-center">
                                <Link href={`/dashboard/Category/${el.id}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-gray-500 hover:text-green-700 bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                    </svg>
                                </Link>
                                <div className={`${role}`} onClick={() => { setEditHidden(true), setEditID(el.id) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" text-gray-500 cursor-pointer hover:text-blue-500 bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                    </svg>
                                </div>
                                <div className={`${role}`} onClick={() => { setDeleteHidden(true) , setDeleteID(el.id)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" cursor-pointer text-gray-500 hover:text-red-500 bi bi-trash3-fill" viewBox="0 0 16 16">
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    function deleteCategory() {
        if (DeleteHidden) {
            return (
                <div className="w-full h-full fixed top-0 right-0 z-40 flex items-center justify-center">
                    <div onClick={() => { setDeleteHidden(false) }} className="w-full h-full bg-gray-800/80"></div>
                    <div className=" absolute w-[300px] flex flex-col gap-4 p-6 bg-gray-200 rounded-xl text-center font-bold text-gray-600">
                        <p>هل انت متاكد من الحذف</p>
                        <button onClick={PDeleteCategoty} className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-red-500">حذف القسم</button>
                    </div>
                </div>
            )
        }
    }

    function PEditCategory(e) {
        setLoader(true)
        e.preventDefault()
        axios({
            url:`${apiData}/admin/update/category/${EditID}`,
            method:'post',
            headers:{
                'Authorization':`Bearer ${adminData.access_token}`
            },
            data:edit
        }).then((res) => {
            console.log(res)
            setLoader(false)
            setEditHidden(false)
            setTimeout(() => {
                location.reload()
            }, 1000)
            return toast.success('تم تعديل القسم بنحاج')
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            setEditHidden(false)
            return toast.error('حدث خطا ما! حاول مجددا')
        })


    }

    function PAddCategory(e) {
        e.preventDefault()
        setLoader(true)
        e.preventDefault()
        axios({
            url: `${apiData}/admin/create/category`,
            method: 'post',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            },
            data: add
        }).then(() => {
            setLoader(false)
            setAddHidden(false)
            setTimeout(() => {
                location.reload()
            }, 1500)
            return toast.success('تم اضافه قسم جديد')
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            setAddHidden(false)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
    }

    function EditCategory() {
        if (EditHidden) {
            return (
                <div className="w-full h-full fixed top-0 right-0 z-40 flex items-center justify-center">
                    <div onClick={() => { setEditHidden(false) }} className="w-full h-full bg-gray-800/80"></div>
                    <form onSubmit={PEditCategory} className=" absolute w-[300px] flex flex-col gap-4 p-6 bg-gray-200 rounded-xl text-center  text-gray-600">
                        <p className="text-red-700 font-bold text-lg">تعديل القسم </p>
                        <div className="text-start">
                            <label>اسم القسم</label>
                            <input type='text' required onChange={(e) => { setEdit(prev => ({url : e.target.value , name : e.target.value })) }} className="p-1 rounded-md border-2 border-gray-600 text-xs w-full h-10 outline-none focus:border-red-700" />
                        </div>
                        <button type='submit' className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-red-500">تعديل القسم</button>
                    </form>
                </div>
            )
        }
    }

    function PDeleteCategoty(e){
        e.preventDefault()
        setLoader(true)
        axios({
            url: `${apiData}/admin/delete/category/${DeleteID}`,
            method: 'delete',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`
            }
        }).then(() => {
            setLoader(false)
            setDeleteHidden(false)
            setTimeout(() => {
                location.reload()
            }, 1500)
            return toast.success('تم حذف القسم بنجاح')
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            setDeleteHidden(false)
            return toast.error('حدث خطا ما! حاول مجددا')
        })
    }

    function AddCategory() {
        if (AddHidden) {
            return (
                <div className="w-full h-full fixed top-0 right-0 z-40 flex items-center justify-center">
                    <div onClick={() => { setAddHidden(false) }} className="w-full h-full bg-gray-800/80"></div>
                    <form onSubmit={PAddCategory} className=" absolute w-[300px] flex flex-col gap-4 p-6 bg-gray-200 rounded-xl text-center  text-gray-600">
                        <p className="text-red-700 font-bold text-lg">اضافه قسم جدبد</p>
                        <div className="text-start">
                            <label>اسم القسم</label>
                            <input type='text' required onChange={(e) => { setAdd(prev => ({url:e.target.value , name:e.target.value})) }} className="p-1 rounded-md border-2 border-gray-600 text-xs w-full h-10 outline-none focus:border-red-700" />
                        </div>
                        <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-red-500">اضافه القسم</button>
                    </form>
                </div>
            )
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
        <div className="w-full overflow-auto">
            {deleteCategory()}
            {EditCategory()}
            {AddCategory()}
            {FunLoader()}
            <div className="p-2 px-4 border flex justify-between bg-white border-r-8 border-r-red-700 items-center">
                <p className="font-bold">الاقسام</p>
                <button className={`text-sm text-red-700 ${role}`} onClick={() => { setAddHidden(true) }}>اضف قسم</button>
            </div>
            <div className="bg-white my-6 min-w-[500px]">
                <div className="grid grid-cols-4 justify-center py-3 font-bold text-gray-700 border-b">
                    <p className=" text-center">اسم القسم</p>
                    <p className=" text-center">عدد الاخبار</p>
                    <p className=" text-center">عدد المشاهدات</p>
                    <p className=" text-center"></p>
                </div>
                <div>
                    {setCategory()}
                </div>
            </div>
        </div>
    )
}