import Image from "next/image";
import Link from "next/link";



export default function CardNew({ heroCard, smollCard, NewType }) {
    return (
        <div className="flex flex-col gap-6">
            <div className="border p-2 border-r-8 border-r-red-700 flex justify-between items-center">
                <h2 className="font-bold text-lg">{NewType.label}</h2>
                <Link href={NewType.link} className="text-red-700 hover:text-red-600 font-bold text-sm">المزيد</Link>
            </div>
            <div className="flex gap-6 justify-between max-lg:flex-col max-md:flex-row max-sm:flex-col">
                <Link href={heroCard.link} className="flex flex-col gap-4">
                    <Image src={heroCard.Img} alt="..." className="hover:opacity-80 transition max-h-[300px] " />
                    <h2 className="font-bold text-lg">{heroCard.title}</h2>
                    <p className="text-sm font-bold text-gray-500">{heroCard.date}</p>
                </Link>
                <div className="flex flex-col gap-4 max-lg:flex-row max-md:flex-col ">
                    {
                        smollCard?.map((e , index) => {
                            return (
                                <Link key={index} href={e.link} className="flex gap-4 max-lg:flex-col max-sm:flex-row max-sm:gap-6">
                                    <Image src={e.Img} alt="..." width={120} className=" hover:opacity-80 transition" />
                                    <div className="w-[300px] max-lg:w-[150px] max-sm:w-full flex flex-col justify-around max-md:w-[120px] gap-2">
                                        <h2 className=" text-xs">{e.title}</h2>
                                        <p className="text-[10px] font-bold text-gray-500">{e.date}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}