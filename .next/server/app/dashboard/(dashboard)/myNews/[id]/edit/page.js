(()=>{var e={};e.id=4072,e.ids=[4072],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},26191:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>p,routeModule:()=>x,tree:()=>l}),t(56048),t(77478),t(54141),t(68295),t(18131),t(6907),t(83724);var s=t(23191),a=t(88716),i=t(37922),o=t.n(i),n=t(95231),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);t.d(r,d);let l=["",{children:["dashboard",{children:["(dashboard)",{children:["myNews",{children:["[id]",{children:["edit",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,56048)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\dashboard\\(dashboard)\\myNews\\[id]\\edit\\page.js"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,77478)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\dashboard\\(dashboard)\\layout.js"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,54141)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\dashboard\\layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,68295)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(t.bind(t,18131)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\error.js"],loading:[()=>Promise.resolve().then(t.bind(t,6907)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(t.bind(t,83724)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\dashboard\\(dashboard)\\myNews\\[id]\\edit\\page.js"],c="/dashboard/(dashboard)/myNews/[id]/edit/page",u={require:t,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/(dashboard)/myNews/[id]/edit/page",pathname:"/dashboard/myNews/[id]/edit",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},33105:(e,r,t)=>{Promise.resolve().then(t.bind(t,51755))},51755:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>h});var s=t(10326),a=t(63056),i=t(3652),o=t(44099),n=t(86615),d=t(46226),l=t(35047),p=t(17577),c=t(96691),u=t(65166),x=t.n(u);t(61121);var m=t(29394),g=t(77021);function h({params:e}){(0,n.getCookie)("adminData");let[r,t]=(0,p.useState)(""),[u,h]=(0,p.useState)([]),[j,b]=(0,p.useState)([]),[v,f]=(0,p.useState)([]),[w,y]=(0,p.useState)(!1),[N,P]=(0,p.useState)(""),[_,q]=(0,p.useState)(""),C=(0,l.useRouter)(),[S,D]=(0,p.useState)(!1),[k,$]=(0,p.useState)([]),[A,G]=(0,p.useState)({title:"",description:"",writer:"",event_date:"",img:"",url:"",part1:"",part2:"",part3:"",keyWords:"",category_id:"",status:"reviewed",adsenseCode:"",videoUrl:"",videoLabel:"",suggestedNews_ids:""});return(0,s.jsxs)("div",{className:"min-h-[550px] w-full flex flex-col gap-6",children:[function(){if(w)return s.jsx("div",{className:"fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0",children:s.jsx(a.Z,{})})}(),S?S?(console.log(A),(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault();let s={title:A.title,writer:A.writer,url:A.url,img:A.img,part1:A.part1,part2:A.part2,part3:A.part3,category_id:A.category_id,"keyWords[]":A.keyWords,status:"reviewed",event_date:A.event_date,adsenseCode:A.adsenseCode,description:A.description,videoLabel:A.videoLabel,videoUrl:A.videoUrl,suggested_news_ids:JSON.stringify(A.suggestedNews_ids)};y(!0),(0,o.Z)({url:`${i.BD}/admin/update/news/${e.id}`,method:"post",headers:{Authorization:`Bearer ${r.access_token}`,"Content-Type":"multipart/form-data"},data:s}).then(r=>(y(!1),C.replace(`/dashboard/myNews/${e.id}`),m.Am.success("تم تعديل الخبر بنجاح"))).catch(e=>(console.log(e),y(!1),m.Am.error("حدث خطا ما! حاول مجددا")))},className:"bg-white  p-6 flex flex-col gap-6",children:[s.jsx("h2",{className:" text-red-700 font-bold text-2xl",children:"اضافه خبر جديد"}),(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsxs)("div",{children:[s.jsx("label",{children:"عنوان الخبر"}),s.jsx("br",{}),s.jsx("input",{type:"text",required:!0,value:A.title,onChange:e=>{G(r=>({...r,title:e.target.value}))},placeholder:"ادخل عنوان الخبر",className:"w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none"})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{children:"الوصف"}),s.jsx("br",{}),s.jsx("input",{type:"text",required:!0,value:A.description,onChange:e=>{G(r=>({...r,description:e.target.value}))},placeholder:"ادخل وصف الخبر  ",className:"w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[s.jsx("label",{children:"القسم"}),s.jsx("br",{}),s.jsx("p",{children:N?.name})]}),s.jsx(c.ZP,{options:u,onChange:e=>{G(r=>({...r,category_id:e.value}))}})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{children:"الكاتب"}),s.jsx("br",{}),s.jsx("input",{type:"text",value:A.writer,required:!0,placeholder:"ادخل اسم كاتب المقال",onChange:e=>{G(r=>({...r,writer:e.target.value}))},className:"w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none"})]}),s.jsx("div",{className:"w-full h-[1px] bg-red-700 my-3"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex justify-between",children:[s.jsx("label",{children:"صوره الخبر"}),s.jsx("br",{}),s.jsx(d.default,{src:`${i.xS}/${A.img}`,alt:"...",width:100,height:100,className:"w-14 h-10"})]}),s.jsx("input",{type:"file",placeholder:"",onChange:e=>{G(r=>({...r,img:e.target.files[0]}))},className:"w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none"})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{children:"الاخبار المقترحه"}),s.jsx("br",{}),s.jsx(c.ZP,{options:j,isMulti:!0,value:k,onChange:e=>{let r=e?.map(e=>e.value);$(e),G(e=>({...e,suggestedNews_ids:r}))}})]}),s.jsx("div",{className:" border p-2 flex flex-col gap-1 text-xs -mt-4",children:A.suggestedNews_ids?.map((e,r)=>s.jsx("p",{children:e.suggested_news?.title},r))}),(0,s.jsxs)("div",{children:[s.jsx("label",{children:"فيديو خاص بالخبر"}),s.jsx("br",{}),s.jsx("p",{className:"text-xs text-blue-500",children:"يظهر عنوان الفيديو تحت القسم الجزء الثانى من المقال"}),(0,s.jsxs)("div",{className:"border p-3 flex flex-col gap-4 rounded-md",children:[s.jsx("input",{type:"text",value:A.videoLabel,onChange:e=>{G(r=>({...r,videoLabel:e.target.value}))},placeholder:"ادخل اسم الفيديو",className:"w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none"}),s.jsx("input",{type:"url",value:A.videoUrl,onChange:e=>{G(r=>({...r,videoUrl:e.target.value}))},placeholder:"رابط الفيديو",className:"w-full h-10 text-sm rounded-lg p-2 border-gray-200 border focus:border-[2px] outline-none"})]})]}),s.jsx("div",{className:"w-full h-[1px] bg-red-700 my-3"}),(0,s.jsxs)("div",{children:[s.jsx("label",{children:" المقال"}),s.jsx("br",{}),s.jsx(g.Z,{value:A.part1,required:!0,onChange:e=>{G(r=>({...r,part1:e}))}})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{children:"الكلمات المفتاحيه"}),s.jsx("br",{}),s.jsx(x(),{value:v||[""],required:!0,onChange:e=>{f(e),G(r=>({...r,keyWords:e}))}})]})]}),s.jsx("div",{className:" flex gap-6 flex-col sm:flex-row",children:s.jsx("input",{type:"submit",value:"تعديل خبر جديد",className:" text-white bg-red-700 p-2 px-6 cursor-pointer hover:bg-red-800 rounded-lg"})})]})):void 0:s.jsx("div",{className:"w-full h-[400px] bg-gray-100 flex items-center justify-center relative",children:s.jsx(a.Z,{})})]})}},56048:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>o,__esModule:()=>i,default:()=>n});var s=t(68570);let a=(0,s.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\myNews\[id]\edit\page.js`),{__esModule:i,$$typeof:o}=a;a.default;let n=(0,s.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\myNews\[id]\edit\page.js#default`)}};var r=require("../../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[8948,1883,5231,6691,2105,2107,4636],()=>t(26191));module.exports=s})();