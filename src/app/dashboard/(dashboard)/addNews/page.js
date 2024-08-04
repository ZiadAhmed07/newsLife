"use client"

import Loader from '@/components/loader/loader';
import { apiData } from '@/data/url';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { toast } from 'react-toastify';
import QuillEditor from './textarya';


export default function page() {

    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [SelectData, setSelectData] = useState([])
    const [SelectDataNews, setSelectDataNews] = useState([])
    const [tags, setTags] = useState([]);
    const [suggestedNews, setSuggestedNews] = useState([]);
    const [loader, setLoader] = useState(false)
    const router = useRouter()
    const [editorContent1, setEditorContent1] = useState('');
    const [editorContent2, setEditorContent2] = useState('');
    const [editorContent3, setEditorContent3] = useState('');

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
        status: '',
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
        getNews()
    }, [adminData])

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
                let convertedCategories = data?.map((el, i) => ({
                    id: i,
                    value: el.id,
                    label: el.name
                }));
                setSelectData(convertedCategories)

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

    function TagWord() {
        const handleChange = (e) => {
            setTags(e);
            setData(prev => ({
                ...prev, keyWords: e
            }))
        };
        return <TagsInput value={tags || ['']} onChange={handleChange} />;
    }

    function SasuggestedNews_ids() {
        const handleChange = (e) => {
            const value = e?.map((e)=>e.value)
            setSuggestedNews(e);
            setData(prev => ({
                ...prev, suggestedNews_ids:value
            }))
        };
        return <Select options={SelectDataNews} isMulti value={suggestedNews} onChange={handleChange }/>;
    }

    function postData(e) {
        e.preventDefault()
        const rejData = {
            title: data.title,
            writer: data.writer,
            event_date: data.event_date,
            img: data.img,
            url: data.url,
            part1: editorContent1,
            part2: editorContent2,
            part3: editorContent3,
            'keyWords[]': data.keyWords,
            category_id: data.category_id,
            status: 'reviewed',
            adsenseCode: adminData.admin.adsenseCode,
            description: data.description,
            videoUrl : data.videoUrl,
            videoLabel : data.videoLabel,
            suggested_news_ids: JSON.stringify(data.suggestedNews_ids)
        }
        if (data.title && data.writer && data.event_date && data.img && rejData.part1 && data.category_id && data.description ) {
            setLoader(true)
            axios({
                url: `${apiData}/admin/create/news`,
                method: 'post',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`,
                    'Content-Type': 'multipart/form-data',
                },
                data: rejData,
            }).then((res) => {
                console.log(res)
                setLoader(false)
                router.replace('/dashboard/myNews/review')
                return toast.success('تم انشاء الخبر بنجاح')
            }).catch((err) => {
                console.log(err)
                setLoader(false)
                return toast.error('حدث خطا ما! حاول مجددا')
            })
        } else {
            return toast.warn('يجب اكمال البيانات المفقوده')
        }
    }

    function SaveData(e) {
        e.preventDefault()
        setLoader(true)
        const rejData = {
            title: data.title,
            writer: data.writer,
            event_date: data.event_date,
            img: data.img,
            url: data.url,
            part1: editorContent1,
            part2: editorContent2,
            part3: editorContent3,
            'keyWords[]': data.keyWords,
            category_id: data.category_id,
            status: 'pending',
            adsenseCode: adminData.admin.adsenseCode,
            description: data.description,
            videoUrl : data.videoUrl,
            videoLabel : data.videoLabel,
            suggested_news_ids: JSON.stringify(data.suggestedNews_ids)
        }
        axios({
            url: `${apiData}/admin/create/news`,
            method: 'post',
            headers: {
                'Authorization': `Bearer ${adminData.access_token}`,
                'Content-Type': 'multipart/form-data',
            },
            data: rejData
        }).then((res) => {
            console.log(res)
            setLoader(false)
            router.replace('/dashboard/myNews')
            return toast.success('تم حفظ الخبر في المسوده')
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


    return (
        <div className="min-h-[550px] w-full flex flex-col gap-6">
            {FunLoader()}
            <form onSubmit={postData} className="bg-white  p-6 flex flex-col gap-6">
                <h2 className=" text-red-700 font-bold text-2xl">اضافه خبر جديد</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <label>عنوان الخبر</label><br />
                        <input type="text" onChange={(e) => { setData(p => ({ ...p, title: e.target.value })) }} placeholder="ادخل عنوان الخبر" className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                    <div>
                        <label>الوصف</label><br />
                        <input type="text" onChange={(e) => { setData(p => ({ ...p, description: e.target.value })) }} placeholder="ادخل اسم كاتب المقال" className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                    <div>
                        <label>القسم</label><br />
                        <Select options={SelectData} onChange={(e) => { setData(p => ({ ...p, category_id: e.value })) }} />
                    </div>
                    <div>
                        <label>الكاتب</label><br />
                        <input type="text" placeholder="ادخل اسم كاتب المقال" onChange={(e) => { setData(p => ({ ...p, writer: e.target.value })) }} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                    <div className='w-full h-[1px] bg-red-700 my-3'></div>
                    <div>
                        <label>صوره الخبر</label><br />
                        <input type='file' placeholder="" onChange={(e) => { setData(p => ({ ...p, img: e.target.files[0] })) }} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                    <div>
                        <label>تاريخ النشر</label><br />
                        <input type='date' placeholder="ادخل الجزء الثالث من المقال" onChange={(e) => { setData(p => ({ ...p, event_date: e.target.value })) }} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                    <div>
                        <label>الاخبار المقترحه</label><br />
                        {SasuggestedNews_ids()}
                    </div>
                    <div>
                        <label>فيديو خاص بالخبر</label><br />
                        <p className='text-xs text-blue-500'>يظهر عنوان الفيديو تحت القسم الجزء الثانى من المقال</p>
                        <div className='border p-3 flex flex-col gap-4 rounded-md'>
                            <input type="text" placeholder="ادخل اسم الفيديو" onChange={(e) => { setData(p => ({ ...p, videoLabel: e.target.value })) }} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                            <input type='url' placeholder="رابط الفيديو" onChange={(e) => { setData(p => ({ ...p, videoUrl: e.target.value })) }} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-red-700 my-3'></div>
                    <div>
                        <label>الجزء الاول من المقال</label><br />
                        <QuillEditor  onChange={(e)=>{setEditorContent1(e)}} />
                    </div>
                    <div>
                        <label>الكلمات المفتاحيه</label><br />
                        {TagWord()}
                    </div>
                </div>
                <div className=" flex gap-6 flex-col sm:flex-row">
                    <input type='submit' value={'اضافه خبر جديد'} className=" text-white bg-red-700 p-2 px-6 cursor-pointer hover:bg-red-800 rounded-lg" />
                    <input type='button' onClick={SaveData} value={'حفظ في مسوده'} className=" text-white bg-gray-700 p-2 px-6 cursor-pointer hover:bg-gray-800 rounded-lg" />
                </div>
            </form>
        </div>
    )
}