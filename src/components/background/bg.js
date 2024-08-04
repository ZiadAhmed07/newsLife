import Image from 'next/image'
import icon1 from '/public/icon/icons8-google-news-94.png'
import icon2 from '/public/icon/icons8-magazine-94.png'
import icon3 from '/public/icon/icons8-megaphone-94.png'
import icon4 from '/public/icon/icons8-news-94.png'


export default function BG(){
    return(
        <div className="w-full h-screen fixed top-0 right-0 overflow-hidden flex items-center justify-center">
            <Image src={icon1} alt='...' width={50} className='absolute left-[100px] top-[100px]  rotate-45'/>
            <Image src={icon2} alt='...' width={50} className='absolute left-[800px] top-[300px]  -rotate-45'/>
            <Image src={icon3} alt='...' width={20} className='absolute left-[1000px] top-[600px] rotate-0'/>
            <Image src={icon4} alt='...' width={30} className='absolute left-[600px] top-[50px]  -rotate-45'/>
            <Image src={icon1} alt='...' width={50} className='absolute left-[1100px] top-[500px]  rotate-0'/>
            <Image src={icon2} alt='...' width={50} className='absolute left-[350px] top-[600px]  rotate-0'/>
            <Image src={icon3} alt='...' width={40} className='absolute left-[1050px] top-[150px]  rotate-12'/>
            <Image src={icon4} alt='...' width={30} className='absolute left-[563px] top-[520px]  rotate-12'/>
            <Image src={icon1} alt='...' width={30} className='absolute left-[463px] top-[160px]  -rotate-12'/>
            <Image src={icon2} alt='...' width={20} className='absolute left-[136px] top-[310px]  rotate-90'/>
            <Image src={icon3} alt='...' width={50} className='absolute left-[200px] top-[500px]  -rotate-12'/>
            <Image src={icon4} alt='...' width={40} className='absolute left-[400px] top-[400px]'/>
        </div>  
    )
}


