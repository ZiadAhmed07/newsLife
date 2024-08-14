// app/api/sitemap/route.js

import { apiData } from '@/data/url';
import { NextResponse } from 'next/server';


async function getNewsPages() {
  async function getData() {
    const res = await fetch(`${apiData}/user/showAll/news`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  const data = await getData()
  
  const filter = data.news?.filter((e)=>{
    return e.status == "published"
  })

  const newsPages = filter?.map((e)=>{
    return{
      path: `/category/${e.category?.id}/${e.id}`, 
      lastModified: new Date(), 
      priority : 1.0,
      changefreq : 'always'
    }
  })
  return newsPages
}
console.log(Date())
// دالة للحصول على بيانات الأقسام من قاعدة البيانات أو API
async function getSectionsPages() {

  async function getData() {
    const res = await fetch(`${apiData}/user/showAll/category`)
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  const data = await getData()
  
  const sectionsPages = data.data.map((e)=>{
    return{
      path: `/category/${e.id}`, 
      lastModified: new Date(), 
      priority : 0.8,
      changefreq : "always"
    }
  })

  return sectionsPages

}


// دالة للحصول على البيانات الثابتة
function getStaticPages() {
  return [
    { path: '/', lastModified: new Date(),priority : 1.0 ,changefreq : "always" },
    { path: '/ads', lastModified: new Date(),priority : 0.7 ,changefreq : "weekly" },
    { path: '/contact', lastModified: new Date(),priority : 0.7 ,changefreq : "weekly" },
    { path: '/about', lastModified: new Date(),priority : 0.7 ,changefreq : "weekly"},
    { path: '/user', lastModified: new Date() ,priority : 0.5 ,changefreq : "weekly"},
    { path: '/user/signin', lastModified: new Date(),priority : 0.5 ,changefreq : "weekly" },
    { path: '/user/signup', lastModified: new Date() ,priority : 0.5 ,changefreq : "weekly"},
    { path: '/user/sendEmail', lastModified: new Date(),priority : 0.5 ,changefreq : "weekly"},
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
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPages?.map(page => `
          <url>
            <loc>${baseUrl}${page.path}</loc>
            <lastmod>${page.lastModified.toISOString()}</lastmod>
            <priority>${page.priority}</priority>
            <changefreq>${page.changefreq}</changefreq>
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
