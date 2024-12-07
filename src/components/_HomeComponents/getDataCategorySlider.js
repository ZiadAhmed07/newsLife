import { apiData } from "@/data/url"
import IndexCard  from '@/components/cardNew/IndexCard'


async function Category() {
  const res = await fetch(`${apiData}/user/showAll/6Categories/with/latest4News`, { cache: 'no-store' })
  if (!res.ok) {
      throw new Error('تاكد من الاتصال بالانترنت')
  }
  return res.json()
}

export default async function CategorySlider() {

  const data = await Category()

  return <IndexCard category={data}/>
}
