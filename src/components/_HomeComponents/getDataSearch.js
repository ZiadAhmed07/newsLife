import { apiData } from "@/data/url"
import Search from "./search"


  async function getDataSearch() {
    const res = await fetch(`${apiData}/user/showAll/news/with/title`,{cache: 'no-store'})
    if (!res.ok) {
      throw new Error('تاكد من الاتصال بالانترنت')
    }
    return res.json()
  }

export default async function SearchCom() {

  const DataSearch = await getDataSearch()

  return <Search DataSearch={DataSearch}/>
}
