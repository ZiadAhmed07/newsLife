"use client"

import Loader from '@/components/loader/loader';
import { apiData } from '@/data/url';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { toast } from 'react-toastify';
import { apiImg } from '@/data/url';
import QuillEditor from '@/app/dashboard/(dashboard)/_components/EditTextairya/textarya';



export default function page({ params }) {

    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [SelectData, setSelectData] = useState([])
    const [SelectDataNews, setSelectDataNews] = useState([])
    const [tags, setTags] = useState([]);
    const [loader, setLoader] = useState(false)
    const [category, setCategory] = useState('')
    const [hidden, setHidden] = useState('')
    const router = useRouter()
    const [CheckData, setCheckData] = useState(false)

    const [data, setData] = useState({
        title: '',
        description:'',
        writer: '',
        event_date: '',
        img: '',
        url: '',
        part1: '',
        part2: '',
        part3: "",
        keyWords: "",
        category_id: '',
        status: 'reviewed',
        adsenseCode: "",
        videoUrl:'',
        videoLabel:'',
        suggestedNews_ids:'',
    })

    useEffect(() => {
        if (getAdmin) {
            const data = JSON.parse(getAdmin)
            setAdminData(data)
        }
    }, [])

    useEffect(() => {
        getData()
        getDataInput()
        getNews()
    }, [adminData])

    function getDataInput() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/edit/news/${params.id}`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                const data = res.data.data
                setCheckData(true)
                console.log(data)
                setData({
                    title: data.title,
                    description : data.description,
                    category_id: data.category.id,
                    writer: data.writer,
                    img: data.img,
                    adsenseCode:data.adsenseCode,
                    event_date:data.event_date,
                    part1: data.part1,
                    part2: data.part2,
                    part3: data.part3,
                    url: data.url, 
                    event_date: data.event_date,
                    videoUrl:data.videoUrl,
                    videoLabel:data.videoLabel,
                    suggestedNews_ids:data.suggestedNews,
                    keyWords:data.keyWords

                })
                setTags(data.keyWords)
                setCategory(data.category)
            })
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
                console.log(data)
                const filer = data.filter((e)=>{
                    return e.status == "published"
                })
                let convertedCategories = filer?.map((el, i) => ({
                    id: i,
                    value: el.id,
                    label: el.title
                }));
                setSelectDataNews(convertedCategories)
            })
        }
    }

    function getData() {
        if (adminData) {
            axios({
                url: `${apiData}/admin/showAll/category`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                const data = res.data.data
                let convertedCategories = data?.map((el , i)=> ({
                    id: i,
                    value: el.id,
                    label: el.name
                }));
                setSelectData(convertedCategories)
            })
        }
    }

    function TagWord() {
        const handleChange = (e) => {
            setTags(e);
            setData(prev => ({
                ...prev, keyWords: e
            }))
        };
        return <TagsInput value={tags || ['']} required onChange={handleChange} />;
    }

    function postData(e) {
        e.preventDefault()
        const rejData = {
            title:data.title,
            writer:data.writer,
            url:data.url,
            img:data.img,
            part1:data.part1,
            part2:data.part2,
            part3:data.part3,
            category_id:data.category_id,
            'keyWords[]':data.keyWords,
            status:'reviewed',
            event_date:data.event_date,
            adsenseCode:data.adsenseCode,
            description:data.description,
            videoLabel:data.videoLabel,
            videoUrl:data.videoUrl,
            suggested_news_ids: JSON.stringify(data.suggestedNews_ids)
        }

        setLoader(true)
        axios({
            url: `${apiData}/admin/update/news/${params.id}`,
            method: 'post',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`,
                'Content-Type': 'multipart/form-data',
            },
            data: rejData,
        }).then((res) => {
            setLoader(false)
            router.replace(`/dashboard/myNews/${params.id}`)
            return toast.success('تم تعديل الخبر بنجاح')
        }).catch((err) => {
            console.log(err)
            setLoader(false)
            return toast.error('حدث خطا ما! حاول مجددا')
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

    function FunsetData() {
        if (!CheckData) {
            return (
                <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center relative">
                    <Loader />
                </div>
            )
        }
        if (CheckData) {
            console.log(data)
            return (
                <form onSubmit={postData} className="bg-white  p-6 flex flex-col gap-6">
                    <h2 className=" text-red-700 font-bold text-2xl">اضافه خبر جديد</h2>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label>عنوان الخبر</label><br />
                            <input type="text" required value={data.title} onChange={(e) => { setData(p => ({ ...p, title: e.target.value })) }} placeholder="ادخل عنوان الخبر" className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                        </div>
                        <div>
                            <label>الوصف</label><br />
                            <input type="text" required value={data.description} onChange={(e) => { setData(p => ({ ...p, description: e.target.value })) }} placeholder="ادخل وصف الخبر  " className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label>القسم</label><br />
                                <p>{category.name}</p>
                            </div>
                            <Select options={SelectData} onChange={(e) => { setData(p => ({ ...p, category_id: e.value })) }} />
                        </div>
                        <div>
                            <label>الكاتب</label><br />
                            <input type="text" value={data.writer } required placeholder="ادخل اسم كاتب المقال" onChange={(e) => { setData(p => ({ ...p, writer: e.target.value })) }} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                        </div>
                        <div className='w-full h-[1px] bg-red-700 my-3'></div>
                        <div>
                            <div className='flex justify-between'>
                            <label>صوره الخبر</label><br />
                            <Image src={`${apiImg}/${data.img}`} alt='...' width={100} height={100} className='w-14 h-10'/>
                            </div>
                            <input type='file' placeholder="" onChange={(e) => { setData(p => ({ ...p, img: e.target.files[0] })) }} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                        </div>
                        <div>
                            <label>تاريخ النشر</label><br />
                            <input type='date' value={data.event_date} required placeholder="ادخل الجزء الثالث من المقال" onChange={(e) => { setData(p => ({ ...p, event_date: e.target.value })) }} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                        </div>
                        <div>
                            <label>الاخبار المقترحه</label><br />
                            <Select options={SelectDataNews} isMulti onChange={(e) => { setData(p => ({ ...p, suggestedNews_ids: e.value })) }}/>
                        </div>
                        <div>
                            <label>فيديو خاص بالخبر</label><br />
                            <p className='text-xs text-blue-500'>يظهر عنوان الفيديو تحت القسم الجزء الثانى من المقال</p>
                            <div className='border p-3 flex flex-col gap-4 rounded-md'>
                                <input type="text" value={data.videoLabel} onChange={(e) => { setData(p => ({ ...p, videoLabel: e.target.value })) }} placeholder="ادخل اسم الفيديو" className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                                <input type='url' value={data.videoUrl} onChange={(e) => { setData(p => ({ ...p, videoUrl: e.target.value })) }} placeholder="رابط الفيديو" className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-red-700 my-3'></div>
                        <div>
                            <label>الجزء الاول من المقال</label><br />
                            <QuillEditor value={data.part1} onChange={(e) => { setData(p => ({ ...p, part1: e })) }} />
                        </div>

                        <div>
                            <label>الجزء الثانى من المقال</label><br />
                            <QuillEditor value={data.part2} onChange={(e) => { setData(p => ({ ...p, part2: e })) }} />
                        </div>
                        <div>
                            <label> الجزء الثالث من المقال</label><br />
                            <QuillEditor value={data.part3} onChange={(e) => { setData(p => ({ ...p, part3: e })) }} />
                        </div>

                        <div>
                            <label>الكلمات المفتاحيه</label><br />
                            {TagWord()}
                        </div>
                    </div>
                    <div className=" flex gap-6 flex-col sm:flex-row">
                        <input type='submit' value={'تعديل خبر جديد'} className=" text-white bg-red-700 p-2 px-6 cursor-pointer hover:bg-red-800 rounded-lg" />
                    </div>
                </form>
            )
        }
    }

    useEffect(() => {
        if (adminData) {
            if (adminData.admin.role.id == 4) {
                router.replace('/dashboard/home')
                return (
                    <div className={`fixed flex items-center justify-center w-full h-full bg-gray-200 z-50 ${hidden}`}>
                        <Loader />
                    </div>
                )
            } else {
                setHidden('hidden')
            }
        }
    }, [adminData, router])

    return (
        <div className="min-h-[550px] w-full flex flex-col gap-6">

            {FunLoader()}
            {FunsetData()}
        </div>
    )
}