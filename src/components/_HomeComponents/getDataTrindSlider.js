import { apiData } from "@/data/url"
import SliderTrind from "../SliderTrind/SliderTrind"


  async function getDataSliderTrind() {
    const res = await fetch(`${apiData}/user/showAll/newSlider`,{cache: 'no-store'})
    if (!res.ok) {
      throw new Error('تاكد من الاتصال بالانترنت')
    }
    return res.json()
  }

export default async function TrindSlider() {

  const getSliderTrind = await getDataSliderTrind()

  return <SliderTrind getSliderTrind={getSliderTrind}/>
}
