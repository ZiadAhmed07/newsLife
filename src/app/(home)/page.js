import AdsLeftBar from "@/components/ads/LeftBar";
import AdsRightBar from "@/components/ads/RightBar";
import ButtonTop from "@/components/buttonTop/buttonTop";
import CardNew from "@/components/cardNew/CardNew";
import IndexCard from "@/components/cardNew/IndexCard";
import IndexSidbarCard from "@/components/sidbarCard/indexSidbarCard";
import ShapeSlider from "@/components/sliderHero/slider";
import SliderTrind from "@/components/SliderTrind/SliderTrind";
import SocialLink from "@/components/socialLink/socialLink";
import Search from "./search";




export default function page() {
    return (
        <div >
            <SocialLink />
            <ButtonTop />
            <section className="flex justify-between p-6 max-md:flex-col">
                <div>
                    <Search/>
                </div>
                <div className=' flex justify-center items-center gap-0'>
                    <h3 className="max-sm:hidden">الاخبار الرائجه : </h3>
                    <h3 className="sm:hidden">الرائجه: </h3>
                    <SliderTrind />
                </div>
            </section>
            <section>
                <ShapeSlider />
            </section>
            <section className="flex gap-10 max-sm:px-4 max-md:px-10">
                <div className="max-lg:hidden">
                    <AdsRightBar/>
                </div>
                <div className="w-full">
                    <IndexCard/>
                    <IndexSidbarCard/>
                </div>
                <div className="max-md:hidden">
                    <AdsLeftBar/>
                </div>
            </section>
        </div>
    )
}