import Image from 'next/image'
import Logo from '/public/Logo.png'
import Link from 'next/link'
import whatsapp from '/public/image/WhatsApp Image 2024-07-17 at 9.46.57 PM.WebP'
import GNews from '/public/icon/icons8-google-news-94.png'
import Form from './Form'

export default function page() {
    return (
        <div className="flex justify-between gap-10">
            <div className="max-lg:hidden">
                <p className="w-[160px] h-[600px] bg-gray-200 sticky top-0 flex items-center justify-center">
                    160*600
                </p>
            </div>

            <div className='my-10 flex w-full flex-col gap-6 p-6'>
            <div>
                <h3 className="font-bold text-lg p-2 border border-r-8 border-r-red-700">
                    الاعلان معنا
                </h3>
            </div>
                <div className='w-full bg-white shadow-lg h-[400px] flex items-center justify-center'>
                    <Image src={Logo} alt='...' className='w-[300px]' />
                </div>
                <div className='flex flex-col '>
                    <Link className='p-2 border' href={"tel:0123456789"}>الهاتف : 0123456789</Link>
                    <Link className='p-2 border' href={'mailto:exampel@gmail.com'}>البريد الالكترونى : exampel@gmail.com</Link>
                </div>
                <Form/>
                <div>
                    <Link href={'https://whatsapp.com/channel/0029Va6KQauGpLHNwhiXp90e'} target='_blank'><Image src={whatsapp} alt='...' className='w-full h-[300px]' /></Link>
                </div>
                <div>
                    <Link href={"https://news.google.com/s/CBIwgvK0gKYB?sceid=EG:ar&sceid=EG:ar&r=0&oc=1"} target="_blank" className="flex gap-4 items-center w-full shadow-md p-2 rounded-md">
                        <Image src={GNews} alt="..." width={50} />
                        <p className="font-bold">تابعوا آخر أخبار الوطنى نيوز عبر Google News</p>
                    </Link>
                </div>
            </div>

            <div className="max-md:hidden">
                <p className="w-[160px] h-[600px] bg-gray-200 sticky top-0 flex items-center justify-center">
                    160*600
                </p>
            </div>
        </div>
    )
}