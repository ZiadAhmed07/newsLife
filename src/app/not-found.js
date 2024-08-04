
import BG from "@/components/background/bg";
import Image from "next/image";
import Link from "next/link"



function NotFoundPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <BG/>
            <div className="flex items-center gap-6 flex-col z-10">
                <p className="font-extrabold text-7xl md:text-9xl text-red-700">Error 404</p>
                <p className="text-xl font-bold">هذا المسار غير موجود </p>
                <Link className=" py-2 px-6 rounded-md border  hover:bg-red-700 hover:text-white" href={"/"}>
                    الرجوع الى الصفحه الرئيسيه
                </Link>
            </div>
        </div>
    )
}

export default NotFoundPage;