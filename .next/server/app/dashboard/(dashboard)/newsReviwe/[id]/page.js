(()=>{var e={};e.id=9869,e.ids=[9869],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},81137:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>l}),s(44337),s(77478),s(54141),s(68295),s(18131),s(6907),s(83724);var t=s(23191),a=s(88716),i=s(37922),o=s.n(i),d=s(95231),n={};for(let e in d)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>d[e]);s.d(r,n);let l=["",{children:["dashboard",{children:["(dashboard)",{children:["newsReviwe",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,44337)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\dashboard\\(dashboard)\\newsReviwe\\[id]\\page.js"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,77478)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\dashboard\\(dashboard)\\layout.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,54141)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\dashboard\\layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,68295)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(s.bind(s,18131)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\error.js"],loading:[()=>Promise.resolve().then(s.bind(s,6907)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,83724)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\dashboard\\(dashboard)\\newsReviwe\\[id]\\page.js"],p="/dashboard/(dashboard)/newsReviwe/[id]/page",x={require:s,loadChunk:()=>Promise.resolve()},h=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/(dashboard)/newsReviwe/[id]/page",pathname:"/dashboard/newsReviwe/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},93654:(e,r,s)=>{Promise.resolve().then(s.bind(s,8466))},46226:(e,r,s)=>{"use strict";s.d(r,{default:()=>a.a});var t=s(69029),a=s.n(t)},69029:(e,r,s)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var s in r)Object.defineProperty(e,s,{enumerable:!0,get:r[s]})}(r,{default:function(){return n},getImageProps:function(){return d}});let t=s(91174),a=s(23078),i=s(92481),o=t._(s(86820));function d(e){let{props:r}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(r))void 0===s&&delete r[e];return{props:r}}let n=i.Image},8466:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>h});var t=s(10326),a=s(63056),i=s(3652),o=s(44099),d=s(86615),n=s(46226),l=s(90434),c=s(35047),p=s(17577),x=s(29394);function h({params:e}){(0,d.getCookie)("adminData");let[r,s]=(0,p.useState)(""),[h,m]=(0,p.useState)(""),g=(0,c.useRouter)(),[u,b]=(0,p.useState)(!1);return(0,t.jsxs)("div",{children:[t.jsx("div",{className:"font-bold p-2 border border-r-8 border-r-red-700 bg-white my-4",children:"خبر تحت المراجعه"}),h?0==h.length?t.jsx("div",{className:"w-full h-[400px] bg-gray-100 flex items-center justify-center font-bold text-gray-600",children:"لا يوجد معلومات"}):h?(console.log(h),(0,t.jsxs)("div",{className:"flex flex-col gap-8 bg-white p-4 relative overflow-hidden",children:["reviewed"==h.data.status?t.jsx("p",{className:"absolute bg-yellow-600/60 text-white text-sm py-1 px-10 top-[10px] -left-[30px] -rotate-45",children:"مراجعه"}):"published"==h.data.status?t.jsx("p",{className:"absolute bg-green-600/60 text-white text-sm py-1 px-10 top-[10px] -left-[30px] -rotate-45",children:"مقبول"}):"rejected"==h.data.status?t.jsx("p",{className:"absolute bg-black/60 text-white text-sm py-1 px-10 top-[10px] -left-[30px] -rotate-45",children:"مرفوض"}):console.log("err"),(0,t.jsxs)("div",{children:[t.jsx("div",{className:"font-bold p-2 border border-r-8 border-r-red-700",children:"معلومات عن الكاتب"}),(0,t.jsxs)("div",{className:"flex flex-col p-6 py-4 gap-2 font-bold border",children:[(0,t.jsxs)("p",{children:["الاسم : ",h.data?.admin?.name]}),(0,t.jsxs)("p",{children:["الوظيفه : ",h.data?.admin?.role.name]}),(0,t.jsxs)("p",{children:["البريد : ",h.data?.admin?.email]})]})]}),(0,t.jsxs)("div",{children:[t.jsx("div",{className:"font-bold p-2 border border-r-8 border-r-red-700",children:"معلومات عن الخبر"}),(0,t.jsxs)("div",{className:"flex flex-col gap-4 p-6 border",children:[t.jsx("h2",{className:"font-bold text-2xl max-md:text-xl",children:h.data.title}),(0,t.jsxs)("div",{className:"text-sm font-bold text-gray-600 flex gap-8 flex-wrap",children:[t.jsx("p",{children:h.data.formatted_date}),(0,t.jsxs)("p",{children:["by : ",h.data.writer]}),t.jsx("p",{children:h.data?.category?.name}),(0,t.jsxs)("div",{className:" text-gray-600 flex text-xs font-bold gap-1 ",children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-eye-fill",viewBox:"0 0 16 16",children:[t.jsx("path",{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"}),t.jsx("path",{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"})]}),h.data.news_views_count]})]}),(0,t.jsxs)("p",{children:["الوصف : ",h.data.description]}),(0,t.jsxs)("div",{className:" rounded-md p-2 border",children:[(0,t.jsxs)("p",{children:["وصف الفيديو : ",h.data?.videoLabel||"لا يوجد فيديو"]}),(0,t.jsxs)("p",{children:["رابط الفيديو : ",t.jsx(l.default,{href:h.data?.videoUrl||"#",className:"text-sm text-sky-600",children:h.data?.videoUrl||"لا يوجد رابط"})]})]})]})]}),(0,t.jsxs)("div",{children:[t.jsx("div",{className:"font-bold p-2 border border-r-8 border-r-red-700",children:"صوره الخبر"}),t.jsx(n.default,{src:`${i.xS}/${h.data.img}`,alt:"...",width:600,height:400})]}),t.jsx("div",{className:"flex flex-col gap-6 font-bold  text-gray-600",children:(0,t.jsxs)("div",{children:[t.jsx("div",{className:"font-bold p-2 border border-r-8 border-r-red-700",children:"  المقال"}),t.jsx("p",{className:" max-sm:w-full  p-6 border whitespace-pre-wrap",dangerouslySetInnerHTML:{__html:h.data.part1}})]})}),(0,t.jsxs)("div",{children:[t.jsx("div",{className:"font-bold p-2 border border-r-8 border-r-red-700",children:"الكلمات المفتاحيه"}),t.jsx("div",{className:"flex gap-4 flex-wrap p-6 border",children:h.data?.keyWords?.map((e,r)=>t.jsx(l.default,{href:"#",className:"px-6 py-2 rounded-md shadow-lg",children:e},r))})]}),(0,t.jsxs)("div",{children:[t.jsx("div",{className:"font-bold p-2 border border-r-8 border-r-red-700",children:"الاخبار المقترحه"}),t.jsx("div",{className:"py-4 flex gap-4 flex-col border p-2 rounded-md my-2",children:h?.data.suggested_news?.map((e,r)=>t.jsxs(l.default,{href:`/dashboard/Category/${e.suggested_news?.category?.id}/${e.suggested_news?.id}`,className:"flex gap-3 ",children:[t.jsx(n.default,{src:`${i.xS}/${e.suggested_news?.img}`,alt:"...",width:200,height:200,className:"w-[200px] h-[120px]"}),t.jsxs("div",{className:"flex flex-col gap-2 justify-end",children:[t.jsx("p",{children:e.suggested_news?.title}),t.jsx("p",{className:"font-bold text-[10px] text-gray-600",children:e.suggested_news?.formatted_date}),t.jsx("p",{className:"text-red-700 font-bold",children:e.suggested_news?.category?.name})]})]},r))})]}),(0,t.jsxs)("div",{className:"flex gap-6 p-6 justify-center flex-wrap",children:[(0,t.jsxs)("button",{onClick:function(){b(!0),(0,o.Z)({url:`${i.BD}/admin/publish/news/${e.id}`,method:"PATCH",headers:{Authorization:`Bearer ${r.access_token}`}}).then(e=>(console.log(e),g.replace("/dashboard/newsReviwe/published"),x.Am.success("تم الموافقه على الخبر"))).catch(e=>(console.log(e),x.Am.error("حدث خطا ما! حاول مجددا")))},className:"px-8 flex gap-4 bg-gray-600 py-2 items-center border rounded-lg hover:bg-green-500 text-white",children:[t.jsx("p",{children:"موافقه "}),(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"bi bi-emoji-smile",viewBox:"0 0 16 16",children:[t.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),t.jsx("path",{d:"M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"})]})]}),(0,t.jsxs)("button",{onClick:function(){b(!0),(0,o.Z)({url:`${i.BD}/admin/reject/news/${e.id}`,method:"PATCH",headers:{Authorization:`Bearer ${r.access_token}`}}).then(e=>(console.log(e),g.replace("/dashboard/newsReviwe/rejected"),x.Am.success("تم رفض الخبر"))).catch(e=>(console.log(e),x.Am.error("حدث خطا ما! حاول مجددا")))},className:"px-8 flex gap-4 bg-gray-600 py-2 items-center border rounded-lg hover:bg-red-500 text-white",children:[t.jsx("p",{children:"رفض"}),(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"bi bi-emoji-frown",viewBox:"0 0 16 16",children:[t.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),t.jsx("path",{d:"M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"})]})]}),(0,t.jsxs)(l.default,{href:`/dashboard/newsReviwe/${e.id}/edit`,className:"px-8 bg-gray-600 flex gap-4 items-center py-2 border rounded-lg hover:bg-blue-400 text-white",children:[t.jsx("p",{children:" تعديل الخبر"}),(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[t.jsx("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),t.jsx("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"})]})]}),(0,t.jsxs)("button",{onClick:function(){b(!0),(0,o.Z)({url:`${i.BD}/admin/delete/news/${e.id}`,method:"delete",headers:{Authorization:`Bearer ${r.access_token}`}}).then(e=>(console.log(e),g.replace("/dashboard/newsReviwe/"),x.Am.success("تم حذف الخبر"))).catch(e=>(console.log(e),x.Am.error("حدث خطا ما! حاول مجددا")))},className:"px-8 flex gap-4 bg-gray-600 py-2 items-center border rounded-lg hover:bg-red-500 text-white",children:[t.jsx("p",{children:"حذف الخبر"}),t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",className:"bi bi-trash3-fill",viewBox:"0 0 16 16",children:t.jsx("path",{d:"M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"})})]})]})]})):void 0:t.jsx("div",{className:"w-full h-[400px] bg-gray-100 flex items-center justify-center relative",children:t.jsx(a.Z,{})}),function(){if(u)return t.jsx("div",{className:"fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0",children:t.jsx(a.Z,{})})}()]})}},44337:(e,r,s)=>{"use strict";s.r(r),s.d(r,{$$typeof:()=>o,__esModule:()=>i,default:()=>d});var t=s(68570);let a=(0,t.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\newsReviwe\[id]\page.js`),{__esModule:i,$$typeof:o}=a;a.default;let d=(0,t.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\newsReviwe\[id]\page.js#default`)}};var r=require("../../../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[8948,1883,5231,2105,2107],()=>s(81137));module.exports=t})();