import Image from "next/image";
import Link from "next/link";




export default function Card({ card, link, label }) {
    return (
        <div className="flex flex-col gap-6 mt-10">
            <div className="border p-2 border-r-8 border-r-black flex justify-between items-center">
                <h2 className="font-bold text-lg">{label}</h2>
                <Link href={link} className="text-red-700 hover:text-red-600 font-bold text-sm">المزيد</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    card?.map((e , index) => {
                        return (
                            <Link href={e.link} key={index} className="flex gap-4 sm:flex-col">
                                <Image src={e.img} alt="..." className="hover:opacity-80 max-h-[150px] w-[200px] sm:w-full" />
                                <div className="flex flex-col gap-4">
                                    <h2 className="text-xs">{e.title}</h2>
                                    <p className="text-[10px] text-gray-500">{e.date}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}