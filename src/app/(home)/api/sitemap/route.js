// app/api/sitemap/route.js

import { apiData } from '@/data/url';
import { NextResponse } from 'next/server';


async function getNewsPages() {
  async function getData() {
    const res = await fetch(`${apiData}/user/showAll/news/with/title` , {cache : 'no-store'})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  const data = await getData()
  
  const newsPages = data.data?.map((e)=>{
    return{
      path: `/category/${e.category_id}/${e.news_id}`,
      namePage: e.title, 
      lastModified: new Date(), 
    }
  })
  return newsPages
}

// دالة للحصول على بيانات الأقسام من قاعدة البيانات أو API
async function getSectionsPages() {

  async function getData() {
    const res = await fetch(`${apiData}/user/showAll/newCategory`, {cache : 'no-store'})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  const data = await getData()
  const sectionsPages = data.data.map((e)=>{
    return{
      path: `/category/${e.id}`, 
      namePage: e.name,
      lastModified: new Date(), 
    }
  })

  return sectionsPages

}


// دالة للحصول على البيانات الثابتة
function getStaticPages() {
  return [
    { path: '/', lastModified: new Date(), namePage:"الصفحه الرئيسيه" },
    { path: '/ads', lastModified: new Date(), namePage:"الاعلانات" },
    { path: '/contact', lastModified: new Date(), namePage:"تواصل معنا" },
    { path: '/about', lastModified: new Date(), namePage:"من نحن"},
    { path: '/user', lastModified: new Date() , namePage:"المستخدم"},
    { path: '/user/signin', lastModified: new Date(), namePage:"تسجيل الدخول" },
    { path: '/user/signup', lastModified: new Date() , namePage:"انشاء حساب"},
    { path: '/user/sendEmail', lastModified: new Date(), namePage:"نسيت كلمه المرور"},
  ];
}



export async function GET() {
  try {
    const baseUrl = 'https://alwatanynews.com'; // تأكد من صحة النطاق

    // الحصول على جميع الصفحات
    const staticPages = getStaticPages();
    const newsPages = await getNewsPages();
    const sectionsPages = await getSectionsPages();

    // دمج جميع الصفحات
    const allPages = [...staticPages, ...sectionsPages , ...newsPages];

    // توليد XML لخريطة الموقع
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
        ${allPages?.map(page => `
          <url>
            <loc>${baseUrl}${page.path}</loc>
            <news:news>
              <news:publication>
                <news:name>الوطني نيوز</news:name>
                <news:language>ar</news:language>
              </news:publication>
              <news:publication_date>${page.lastModified.toISOString()}</news:publication_date>
              <news:title>${page.namePage}</news:title>
            </news:news>
          </url>
        `).join('')}
      </urlset>`;

    // إرجاع استجابة XML
    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error.message);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
