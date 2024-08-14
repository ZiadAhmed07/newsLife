
import Link from "next/link";
import ListButton from "../listButton/listButton";
import Image from "next/image";
import Logo from '/public/image/tr.WebP'
import ads from '/public/image/ads.WebP'
import SliderType from "../SliderType/SliderType";
import Time from "../time/time";
import AdsHeader from "../ads/adsHeader";

export default function Header() {

    const now = new Date()
    const date = (new Intl.DateTimeFormat('ar', { dateStyle: 'full' })).format(now)

    return (
        <>
        <nav className="flex flex-col  shadow-xl">
            <div className="h-[60px] w-full bg-white shadow-lg text-gray-900 text-sm flex justify-between px-10 max-sm:px-2 items-center transition">
                <div className="flex gap-10 max-sm:hidden">
                    <h1 className="font-bold text-[25px]">الوطنى <span className="text-red-700 text-[20px]">نيوز</span></h1>
                </div>
                <div className="flex gap-6 max-md:hidden">
                    <Link href={'/ads'} className="flex items-center gap-2 hover:text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="text-red-500 bi bi-megaphone-fill" viewBox="0 0 16 16">
                            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
                        </svg>
                        <p className="font-bold text-[16px]">الاعلان معنا</p>
                    </Link>
                    <Link href={'/contact'} className="flex items-center gap-2 hover:text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="text-red-500 bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                        <p className="font-bold text-[16px]">تواصل معنا</p>
                    </Link>
                </div>
                <div className="flex gap-8 max-sm:hidden max-md:hidden">
                    <p className=" font-bold">{date}</p>
                    <Time />
                </div>

                <div className="flex justify-between w-full items-center sm:hidden px-1">
                    <h1 className="font-bold text-[25px]">الوطنى <span className="text-red-700 text-[20px]">نيوز</span></h1>
                    <ListButton />
                </div>
            </div>
            <div className="flex items-center px-6 gap-4 max-lg:flex-col ">
                <Image src={Logo} alt="..." width={400} className='w-[350px] -z-10 my-2'/>

                <AdsHeader/>

            </div>
            <div className="px-6">
                <SliderType />
            </div>
        </nav>
        <div className="my-6 w-">
            <AdsHeader/>
        </div>
        
         </>
    );
}
