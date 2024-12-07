"use client"

import Loader from '@/components/loader/loader';
import { apiData } from '@/data/url';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import { toast } from 'react-toastify';
import QuillEditor from './textarya';


export default function page() {

    //const tagsValue = localStorage.getItem('tags')?.split(',')

    const getAdmin = getCookie('adminData')
    const [adminData, setAdminData] = useState('')
    const [SelectData, setSelectData] = useState([])
    const [SelectDataNews, setSelectDataNews] = useState([])
    const [tags, setTags] = useState("");
    const [suggestedNews, setSuggestedNews] = useState('');
    const [loader, setLoader] = useState(false)
    const router = useRouter()
    const pathName = usePathname() 
    const [editorContent1, setEditorContent1] = useState('');
    const [editorContent2, setEditorContent2] = useState('');
    const [editorContent3, setEditorContent3] = useState('');

    const [data, setData] = useState({
        title: '',
        description: '',
        writer: '',
        event_date: '',
        img: '',
        url: '',
        part1: "",
        part2: '',
        part3: "",
        keyWords: "",
        category_id: '',
        status: '',
        adsenseCode: "",
        videoUrl: '',
        videoLabel: '',
        suggestedNews_ids: "",
    })

    useEffect(()=>{
        if(typeof window != undefined){
                setData(prev => ({
                    ...prev,
                    title: localStorage.getItem('title') || '',
                    description: localStorage.getItem('description') || '',
                    writer: localStorage.getItem('writer') || '',
                    videoUrl: localStorage.getItem('videoUrl') || '',
                    videoLabel: localStorage.getItem('videoLabel') || '',
                }))         
                setEditorContent1(localStorage.getItem('editorContent1')) || '';   
                setTags(localStorage.getItem('tags')?.split(',') || [])
        }
    },[])

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
                url: `${apiData}/user/showAll/newCategory`,
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
                url: `${apiData}/user/showAll/news/with/title`,
                method: 'get',
                headers: {
                    'Authorization': `Bearer ${adminData.access_token}`
                }
            }).then((res) => {
                const data = res.data.data
                const rev = [...data].reverse()
                let convertedCategories = rev?.map((el, i) => ({
                    id: i,
                    value: el.news_id,
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
            const value = e?.map((e) => e.value)
            setSuggestedNews(e);
            setData(prev => ({
                ...prev, suggestedNews_ids: value
            }))
        };
        return <Select options={SelectDataNews} isMulti value={suggestedNews} onChange={handleChange} />;
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
            videoUrl: data.videoUrl,
            videoLabel: data.videoLabel,
            suggested_news_ids: JSON.stringify(data.suggestedNews_ids)
        }
        if (data.title && data.description && data.category_id && data.writer && data.img && rejData.part1) {
            if (data.description.length <= 160) {
                if (true) {
                    setLoader(true)
                    removerData()
                    axios({
                        url: `${apiData}/admin/create/news`,
                        method: 'post',
                        headers: {
                            'Authorization': `Bearer ${adminData.access_token}`,
                            'Content-Type': 'multipart/form-data',
                        },
                        data: rejData,
                        onUploadProgress: function (progressEvent) {
                            console.log(progressEvent.bytes)
                        }
                    }).then((res) => {
                        console.log(res)
                        setLoader(false)
                        router.replace('/dashboard/myNews/review')
                        return toast.success('تم انشاء الخبر بنجاح')
                    }).catch((err) => {
                        setLoader(false)
                        if (err.message == 'Request failed with status code 500') {
                            return toast.error('يجب تقليل عدد وحجم الصور داخل الخبر')
                        }
                        if (err.message == 'Network Error') {
                            return toast.error('تاكد من التحقق بالانترنت')
                        }
                        else {
                            console.log(err)
                            return toast.error('حدث خطا ما! حاول مجددا')
                        }
                    })
                } else {
                    return toast.warn('يجب ان يكون  المقال اكثر من 2000 حرف')
                }
            } else {
                return toast.warn('يجب ان يكون وصف الخبر اقل من 160 حرف')
            }
        } else {
            return toast.warn('يجب اكمال البيانات المفقوده')
        }
    }

    function SaveData(e) {
        e.preventDefault()
        setLoader(true)
        removerData()
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
            videoUrl: data.videoUrl,
            videoLabel: data.videoLabel,
            suggested_news_ids: JSON.stringify(data.suggestedNews_ids)
        }
        console.log(rejData)
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

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('title', data.title);
            localStorage.setItem('description', data.description);
            localStorage.setItem('writer', data.writer);
            localStorage.setItem('videoLabel', data.videoLabel);
            localStorage.setItem('videoUrl', data.videoUrl);
            localStorage.setItem('editorContent1', editorContent1);
            localStorage.setItem('tags', tags);
        };
    
        const handlePopState = () => {
            localStorage.setItem('title', data.title);
            localStorage.setItem('description', data.description);
            localStorage.setItem('writer', data.writer);
            localStorage.setItem('videoLabel', data.videoLabel);
            localStorage.setItem('videoUrl', data.videoUrl);
            localStorage.setItem('editorContent1', editorContent1);
            localStorage.setItem('tags', tags);
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('popstate', handlePopState);
    
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('popstate', handlePopState);
        };
    }, [data, editorContent1, tags]); // إضافة التبعيات المطلوبة هنا
    

    function removerData(){
        setData({
            title: '',
            description: '',
            writer: '',
            event_date: '',
            img: '',
            url: '',
            part1: "",
            part2: '',
            part3: "",
            keyWords: "",
            category_id: '',
            status: '',
            adsenseCode: "",
            videoUrl: "",
            videoLabel: '',
            suggestedNews_ids: "",
        })
        setTags('')
    }

    return (
        <div className="min-h-[550px] w-full flex flex-col gap-6">
            {FunLoader()}
            <form onSubmit={(e)=>{postData(e) , removerData()}} className="bg-white  p-6 flex flex-col gap-6">
                <h2 className=" text-red-700 font-bold text-2xl">اضافه خبر جديد</h2>
                <div className="flex flex-col gap-4">
                    <div>
                        <label>عنوان الخبر</label><br />
                        <input type="text" value={data.title} onChange={(e) => { setData(p => ({ ...p, title: e.target.value })) }} placeholder="ادخل عنوان الخبر" className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                    <div>
                        <label>الوصف</label><br />
                        <input type="text" value={data.description}  onChange={(e) => { setData(p => ({ ...p, description: e.target.value })) }} placeholder="ادخل وصف الخبر  " className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                    <div>
                        <label>القسم</label><br />
                        <Select options={SelectData} onChange={(e) => { setData(p => ({ ...p, category_id: e.value })) }} />
                    </div>
                    <div>
                        <label>الكاتب</label><br />
                        <input type="text" placeholder="كاتب المقال" value={data.writer} onChange={(e) => { setData(p => ({ ...p, writer: e.target.value })) }} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>
                    <div className='w-full h-[1px] bg-red-700 my-3'></div>
                    <div>
                        <label>صوره الخبر</label><br />
                        <input type='file' placeholder=""  onChange={(e) => { setData(p => ({ ...p, img: e.target.files[0] })) }} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div> 
                    {/*<div>
                        <label>تاريخ النشر</label><br />
                        <input type='date' onChange={(e) => { setData(p => ({ ...p, event_date: e.target.value })) }} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                    </div>*/}
                    <div>
                        <label>الاخبار المقترحه</label><br />
                        {SasuggestedNews_ids()}
                    </div>

                    <div>
                        <label>فيديو خاص بالخبر</label><br />
                        <p className='text-xs text-blue-500'>يظهر عنوان الفيديو تحت القسم الجزء الثانى من المقال</p>
                        <div className='border p-3 flex flex-col gap-4 rounded-md'>
                            <input type="text" value={data.videoLabel} placeholder="ادخل اسم الفيديو" onChange={(e) => { setData(p => ({ ...p, videoLabel: e.target.value })) }} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                            <p className='text-sm'>يجب اضافه رابط تضمين الفيديو وليس رابط الصفحه</p>
                            <input type='url' value={data.videoUrl} placeholder="رابط الفيديو" onChange={(e) => { setData(p => ({ ...p, videoUrl: e.target.value })) }} className="w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none" />
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-red-700 my-3'></div>
                    <div>
                        <div className='flex justify-between'>
                        <label>المقال</label><br />
                        <div onClick={()=>{setEditorContent1('')}} className=' bg-red-500 px-2 py-1 cursor-pointer rounded-md hover:bg-red-600 text-white text-[10px]'>مسح المقال بالكامل</div>
                        </div>
                        {
                            typeof window && <QuillEditor onChange={(e) => { setEditorContent1(e) }} value={editorContent1} />
                        }
                    </div>
                    <div>
                        <label>الكلمات المفتاحيه</label><br />
                        {TagWord()}
                    </div>
                </div>
                <div className='p-4 border border-red-700 rounded-md text-gray-500 font-bold text-sm'>
                    <h2 className='text-lg'> اتباع القواعد اللغوية والاملائيه</h2>
                    <ol className='p-2 pr-6'>
                        <div className='flex gap-2 items-center'>
                            <span className='h-2 w-2 rounded-full bg-red-700'></span>
                            <li>مراعاه ال seo</li>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='h-2 w-2 rounded-full bg-red-700'></span>
                            <li>الوصف ا يعزيد عن ٢٠ كلمه {'(160 حرف)'}</li>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='h-2 w-2 rounded-full bg-red-700'></span>
                            <li>العنوان  الرئيسي لا يزيد عن ١٠ كلمات</li>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='h-2 w-2 rounded-full bg-red-700'></span>
                            <li>مراعات عمل عناوين فرعيه {'(heading 2)'}</li>
                        </div>
                    </ol>
                </div>
                <div className=" flex gap-6 flex-col sm:flex-row">
                    <input type='submit' value={'اضافه خبر جديد'} className=" text-white bg-red-700 p-2 px-6 cursor-pointer hover:bg-red-800 rounded-lg" />
                    <input type='button' onClick={(e)=>{SaveData(e) , removerData()}} value={'حفظ في مسوده'} className=" text-white bg-gray-700 p-2 px-6 cursor-pointer hover:bg-gray-800 rounded-lg" />
                </div>
            </form>
        </div>
    )
}