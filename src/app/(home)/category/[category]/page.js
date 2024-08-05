import Image from "next/image"
import Card from "./card"
import ads from '/public/image/ads.WebP'
import SliderOneCatigory from "@/components/sliderOneCatigory/sliderOneCatigory"
import Ads2 from "/public/image/ads.WebP";
import MiddleCategory from "@/components/ads/MiddleCategory";
import AdsFooter from "@/components/ads/footer";
import AdsRightBar from "@/components/ads/RightBar";
import AdsLeftBar from "@/components/ads/LeftBar";

export default function page({ params }) {

    return (
        <div className="w-full min-h-screen flex gap-10 justify-between">
            <div className="max-lg:hidden">
                <AdsRightBar/>
            </div>

            <div className="w-full max-md:px-6">
                <SliderOneCatigory params={params.category}/>
                <div className="my-6">
                    <MiddleCategory/>
                </div>
                <div className="py-6">
                    <Card params={params}/>
                </div>
                <AdsFooter/>
            </div>

            <div className="max-md:hidden">
                <AdsLeftBar/>
            </div>
        </div>
    )
}