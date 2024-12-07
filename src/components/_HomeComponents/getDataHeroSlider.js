import { apiData } from "@/data/url"
import ShapeSlider from "../sliderHero/slider"

async function Slider() {
    const res = await fetch(`${apiData}/user/showAll/newSlider`, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('تاكد من الاتصال بالانترنت')
    }
    return res.json()
}

export default async function HeroSlider() {

    const slider = await Slider()

    return <ShapeSlider slider={slider}/>
}
