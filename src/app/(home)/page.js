
import AdsLeftBar from '@/components/ads/LeftBar'
import AdsRightBar from '@/components/ads/RightBar'
import ButtonTop from '@/components/buttonTop/buttonTop'
import SocialLink from '@/components/socialLink/socialLink'
import HeroSlider from '@/components/_HomeComponents/getDataHeroSlider'
import { Suspense } from 'react'
import Loader from '@/components/loader/loader'
import TrindSlider from '@/components/_HomeComponents/getDataTrindSlider'
import CategorySlider from '@/components/_HomeComponents/getDataCategorySlider'
import CategorySlider2 from '@/components/_HomeComponents/getDataCategorySlider2'
import SearchCom from '@/components/_HomeComponents/getDataSearch'


export default function page() {


  return (
    <div >
      <SocialLink />
      <ButtonTop />

      <section className="flex justify-between p-6 max-md:flex-col">
        <div>
          <Suspense fallback={<div className='w-[300px] h-[40px] rounded-md bg-gray-200 animate-pulse'></div>}>
            <SearchCom />
          </Suspense>
        </div>
        <div className=' flex justify-center items-center gap-0'>
          <h3 className="max-sm:hidden">الاخبار الرائجه : </h3>
          <h3 className="sm:hidden">الرائجه: </h3>
          <Suspense fallback={<div className='w-[300px] mx-2  h-[30px] rounded-lg animate-pulse bg-gray-100'></div>}>
            <TrindSlider />
          </Suspense>
        </div>
      </section>

      <section>
        <Suspense
          fallback={
            <div className='w-full h-screen max-sm:h-[400px] max-md:h-[600px] max-h-[900px]'>
              <div className='w-[88%] h-[88%] rounded-lg bg-gray-200 mx-auto relative'>
                <Loader />
              </div>
            </div>
          }>
          <HeroSlider />
        </Suspense>
      </section>

      <section className="flex gap-10 max-sm:px-4 max-md:px-10">
        <div className="max-lg:hidden">
          <Suspense>
            <AdsRightBar />
          </Suspense>
        </div>
        <div className="w-full">
          <Suspense>
            <CategorySlider />
          </Suspense>
          <Suspense>
            <CategorySlider2 />
          </Suspense>
        </div>
        <div className="max-md:hidden">
          <Suspense>
            <AdsLeftBar />
          </Suspense>
        </div>
      </section>
    </div>
  )
}