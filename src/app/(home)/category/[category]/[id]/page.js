import AdsLeftBar from "@/components/ads/LeftBar";
import AdsRightBar from "@/components/ads/RightBar";
import { apiData } from "@/data/url";
import News from "./news";


async function getData(params) {
    const res = await fetch(`${apiData}/user/show/news/${params.id}`,{cache: 'no-store'})
    if (!res.ok) {
      throw new Error('تاكد من الاتصال بالانترنت')
    }
    return res.json()
  }

export async function generateMetadata({params}){

    const data = await getData(params)
    return{
        title:data.data.title,
        description:data.data.description
    }
}


export default async function page({ params }) {

    const data = await getData(params)

    return (
        <>
        <div className="w-full min-h-screen flex gap-10 justify-between">
            <div className="max-lg:hidden">
            <AdsRightBar/>
            </div>

            <News getData={data}/>

            <div className="max-md:hidden">
            <AdsLeftBar/>
            </div>
        </div>
        </>
    );
}
