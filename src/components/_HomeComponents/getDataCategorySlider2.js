import { apiData } from "@/data/url"
import IndexSidbarCard  from '@/components/sidbarCard/indexSidbarCard'


async function Category() {
  const res = await fetch(`${apiData}/user/showAll/3Categories/with/latest6News`, { cache: 'no-store' })
  if (!res.ok) {
      throw new Error('تاكد من الاتصال بالانترنت')
  }
  return res.json()
}

export default async function CategorySlider2() {

  const data = await Category()

  return <IndexSidbarCard category={data}/>
}
