import { apiData } from "@/data/url"
import ComFooter from "./com"


async function getData() {
  const res = await fetch(`${apiData}/user/showAll/newCategory`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Footer() {

 const category = await getData()

  return (
    <ComFooter category={category}/>
  )
}
