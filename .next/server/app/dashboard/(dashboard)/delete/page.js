(()=>{var e={};e.id=763,e.ids=[763],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},5855:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>m,pages:()=>d,routeModule:()=>h,tree:()=>o}),r(90855),r(77478),r(54141),r(68295),r(18131),r(6907),r(83724);var s=r(23191),a=r(88716),n=r(37922),i=r.n(n),c=r(95231),l={};for(let e in c)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>c[e]);r.d(t,l);let o=["",{children:["dashboard",{children:["(dashboard)",{children:["delete",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,90855)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\dashboard\\(dashboard)\\delete\\page.js"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,77478)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\dashboard\\(dashboard)\\layout.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,54141)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\dashboard\\layout.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,68295)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(r.bind(r,18131)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\error.js"],loading:[()=>Promise.resolve().then(r.bind(r,6907)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,83724)),"D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Programming\\programming projects\\important ptojects\\news\\news2\\src\\app\\dashboard\\(dashboard)\\delete\\page.js"],m="/dashboard/(dashboard)/delete/page",x={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/dashboard/(dashboard)/delete/page",pathname:"/dashboard/delete",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},42358:(e,t,r)=>{Promise.resolve().then(r.bind(r,11837)),Promise.resolve().then(r.bind(r,82426)),Promise.resolve().then(r.bind(r,74666)),Promise.resolve().then(r.bind(r,86727)),Promise.resolve().then(r.bind(r,233)),Promise.resolve().then(r.bind(r,71384)),Promise.resolve().then(r.bind(r,96135))},11837:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(10326),a=r(63056),n=r(3652),i=r(44099),c=r(86615),l=r(17577),o=r(29394);function d(){(0,c.getCookie)("adminData");let[e,t]=(0,l.useState)(!1),[r,d]=(0,l.useState)(""),[m,x]=(0,l.useState)("");return(0,s.jsxs)("div",{className:"w-full overflow-auto",children:[function(){if(e)return s.jsx("div",{className:"fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0",children:s.jsx(a.Z,{})})}(),s.jsx("div",{className:"p-2 px-4 border flex justify-between bg-white border-r-8 border-r-red-700 items-center",children:s.jsx("p",{className:"font-bold",children:"المسؤولين"})}),r?0==r.length?s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx("p",{className:"font-bold text-gray-600 text-lg",children:"لا يوجد محذوفات"})}):r?(0,s.jsxs)("div",{className:"w-full h-[300px] bg-white border min-w-[500px]",children:[(0,s.jsxs)("div",{className:"w-full grid grid-cols-4 p-1 font-bold",children:[s.jsx("p",{className:"text-center",children:"الاسم"}),s.jsx("p",{className:"text-center",children:"البريد"}),s.jsx("p",{className:"text-center",children:"الوظيفه"}),s.jsx("p",{className:"text-center"})]}),r.map((e,r)=>{let a="bg-gray-50";return a=r%2==0?"bg-gray-100":"bg-gray-50",(0,s.jsxs)("div",{className:`w-full grid grid-cols-4 ${a} p-1`,children:[s.jsx("p",{className:"text-center",children:e.name}),s.jsx("p",{className:"text-center truncate",children:e.email}),s.jsx("p",{className:"text-center",children:e.role.name}),(0,s.jsxs)("div",{className:"text-center flex items-center justify-center gap-2",children:[s.jsx("button",{onClick:()=>{var r;r=e.id,t(!0),(0,i.Z)({url:`${n.BD}/admin/forceDelete/admin/${r}`,method:"delete",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الحذف بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدق خطا ما ! حاول مجددا")))},className:"bg-red-700 text-white px-2 rounded-md",children:"حذف"}),s.jsx("button",{onClick:()=>{var r;r=e.id,t(!0),(0,i.Z)({url:`${n.BD}/admin/restore/admin/${r}`,method:"get",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الاسترجاع بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدق خطا ما ! حاول مجددا")))},className:"bg-sky-700 text-white px-2 rounded-md",children:"استرجاع"})]})]},r)})]}):void 0:s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx(a.Z,{})})]})}},82426:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(10326),a=r(63056),n=r(3652),i=r(44099),c=r(86615),l=r(17577),o=r(29394);function d(){(0,c.getCookie)("adminData");let[e,t]=(0,l.useState)(!1),[r,d]=(0,l.useState)(""),[m,x]=(0,l.useState)("");return(0,s.jsxs)("div",{className:"w-full overflow-auto",children:[function(){if(e)return s.jsx("div",{className:"fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0",children:s.jsx(a.Z,{})})}(),s.jsx("div",{className:"p-2 px-4 border flex justify-between bg-white border-r-8 border-r-red-700 items-center",children:s.jsx("p",{className:"font-bold",children:"الاقسام"})}),r?0==r.length?s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx("p",{className:"font-bold text-gray-600 text-lg",children:"لا يوجد محذوفات"})}):r?(0,s.jsxs)("div",{className:"w-full h-[300px] bg-white border min-w-[500px]",children:[(0,s.jsxs)("div",{className:"w-full grid grid-cols-4 border p-1 font-bold",children:[s.jsx("p",{className:"text-center",children:"id"}),s.jsx("p",{className:"text-center",children:"الاسم"}),s.jsx("p",{className:"text-center",children:"عدد الاخبار"}),s.jsx("p",{className:"text-center"})]}),r.map((e,r)=>{let a="bg-gray-50";return a=r%2==0?"bg-gray-100":"bg-gray-50",(0,s.jsxs)("div",{className:`w-full grid grid-cols-4 ${a} p-1`,children:[s.jsx("p",{className:"text-center",children:e.id}),s.jsx("p",{className:"text-center ",children:e.name}),s.jsx("p",{className:"text-center truncate",children:e.news_count}),(0,s.jsxs)("div",{className:"text-center flex items-center justify-center gap-2",children:[s.jsx("button",{onClick:()=>{var r;r=e.id,t(!0),(0,i.Z)({url:`${n.BD}/admin/forceDelete/category/${r}`,method:"delete",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الحذف بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدق خطا ما ! حاول مجددا")))},className:"bg-red-700 text-white px-2 rounded-md",children:"حذف"}),s.jsx("button",{onClick:()=>{var r;r=e.id,t(!0),(0,i.Z)({url:`${n.BD}/admin/restore/category/${r}`,method:"get",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الاسترجاع بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدق خطا ما ! حاول مجددا")))},className:"bg-sky-700 text-white px-2 rounded-md",children:"استرجاع"})]})]},r)})]}):void 0:s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx(a.Z,{})})]})}},74666:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(10326),a=r(63056),n=r(3652),i=r(44099),c=r(86615),l=r(17577),o=r(29394);function d(){(0,c.getCookie)("adminData");let[e,t]=(0,l.useState)(!1),[r,d]=(0,l.useState)(""),[m,x]=(0,l.useState)("");return(0,s.jsxs)("div",{className:"w-full overflow-auto",children:[function(){if(e)return s.jsx("div",{className:"fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0",children:s.jsx(a.Z,{})})}(),s.jsx("div",{className:"p-2 px-4 border flex justify-between bg-white border-r-8 border-r-red-700 items-center",children:s.jsx("p",{className:"font-bold",children:"التعليقات"})}),r?0==r.length?s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx("p",{className:"font-bold text-gray-600 text-lg",children:"لا يوجد محذوفات"})}):r?(0,s.jsxs)("div",{className:"w-full h-[300px] bg-white border min-w-[500px]",children:[(0,s.jsxs)("div",{className:"w-full grid grid-cols-4 border p-1 font-bold",children:[s.jsx("p",{className:"text-center",children:"id"}),s.jsx("p",{className:"text-center",children:"الاسم"}),s.jsx("p",{className:"text-center",children:"المستخدم"}),s.jsx("p",{className:"text-center"})]}),r.map((e,r)=>{let a="bg-gray-50";return a=r%2==0?"bg-gray-100":"bg-gray-50",(0,s.jsxs)("div",{className:`w-full grid grid-cols-4 ${a} p-1`,children:[s.jsx("p",{className:"text-center",children:e.comment.id}),s.jsx("p",{className:"text-center truncate",children:e.comment.comment}),s.jsx("p",{className:"text-center ",children:e.comment.user?.name}),(0,s.jsxs)("div",{className:"text-center flex items-center justify-center gap-2",children:[s.jsx("button",{onClick:()=>{var r;r=e.comment.id,t(!0),(0,i.Z)({url:`${n.BD}/admin/forceDelete/comment/${r}`,method:"delete",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الحذف بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدق خطا ما ! حاول مجددا")))},className:"bg-red-700 text-white px-2 rounded-md",children:"حذف"}),s.jsx("button",{onClick:()=>{var r;r=e.comment.id,t(!0),(0,i.Z)({url:`${n.BD}/admin/restore/comment/${r}`,method:"get",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الاسترجاع بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدق خطا ما ! حاول مجددا")))},className:"bg-sky-700 text-white px-2 rounded-md",children:"استرجاع"})]})]},r)})]}):void 0:s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx(a.Z,{})})]})}},86727:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(10326),a=r(63056),n=r(3652),i=r(44099),c=r(86615),l=r(17577),o=r(29394);function d(){(0,c.getCookie)("adminData");let[e,t]=(0,l.useState)(!1),[r,d]=(0,l.useState)(""),[m,x]=(0,l.useState)("");return(0,s.jsxs)("div",{className:"w-full overflow-auto",children:[function(){if(e)return s.jsx("div",{className:"fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0",children:s.jsx(a.Z,{})})}(),s.jsx("div",{className:"p-2 px-4 border flex justify-between bg-white border-r-8 border-r-red-700 items-center",children:s.jsx("p",{className:"font-bold",children:"رسائل المستخدمين"})}),r?0==r.length?s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx("p",{className:"font-bold text-gray-600 text-lg",children:"لا يوجد محذوفات"})}):r?(0,s.jsxs)("div",{className:"w-full h-[300px] bg-white border min-w-[500px]",children:[(0,s.jsxs)("div",{className:"w-full grid grid-cols-4 border p-1 font-bold",children:[s.jsx("p",{className:"text-center",children:"id"}),s.jsx("p",{className:"text-center",children:"الاسم"}),s.jsx("p",{className:"text-center",children:"عدد الاخبار"}),s.jsx("p",{className:"text-center"})]}),r.map((e,r)=>{let a="bg-gray-50";return a=r%2==0?"bg-gray-100":"bg-gray-50",(0,s.jsxs)("div",{className:`w-full grid grid-cols-4 ${a} p-1`,children:[s.jsx("p",{className:"text-center",children:e.contact.id}),s.jsx("p",{className:"text-center truncate",children:e.contact.message}),s.jsx("p",{className:"text-center ",children:e.contact.phone}),(0,s.jsxs)("div",{className:"text-center flex items-center justify-center gap-2",children:[s.jsx("button",{onClick:()=>{var r;r=e.contact.id,t(!0),(0,i.Z)({url:`${n.BD}/admin/forceDelete/contactUs/${r}`,method:"delete",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الحذف بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدق خطا ما ! حاول مجددا")))},className:"bg-red-700 text-white px-2 rounded-md",children:"حذف"}),s.jsx("button",{onClick:()=>{var r;r=e.contact.id,t(!0),(0,i.Z)({url:`${n.BD}admin/restore/contactUs/${r}`,method:"get",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الاسترجاع بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدق خطا ما ! حاول مجددا")))},className:"bg-sky-700 text-white px-2 rounded-md",children:"استرجاع"})]})]},r)})]}):void 0:s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx(a.Z,{})})]})}},233:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(10326),a=r(63056),n=r(3652),i=r(44099),c=r(86615),l=r(17577),o=r(29394);function d(){(0,c.getCookie)("adminData");let[e,t]=(0,l.useState)(!1),[r,d]=(0,l.useState)(""),[m,x]=(0,l.useState)("");return(0,s.jsxs)("div",{className:"w-full overflow-auto",children:[function(){if(e)return s.jsx("div",{className:"fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0",children:s.jsx(a.Z,{})})}(),s.jsx("div",{className:"p-2 px-4 border flex justify-between bg-white border-r-8 border-r-red-700 items-center",children:s.jsx("p",{className:"font-bold",children:"رسائل المعلنين"})}),r?0==r.length?s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx("p",{className:"font-bold text-gray-600 text-lg",children:"لا يوجد محذوفات"})}):r?(0,s.jsxs)("div",{className:"w-full h-[300px] bg-white border min-w-[500px]",children:[(0,s.jsxs)("div",{className:"w-full grid grid-cols-4 border p-1 font-bold",children:[s.jsx("p",{className:"text-center",children:"id"}),s.jsx("p",{className:"text-center",children:"الاسم"}),s.jsx("p",{className:"text-center",children:"عدد الاخبار"}),s.jsx("p",{className:"text-center"})]}),r.map((e,r)=>{let a="bg-gray-50";return a=r%2==0?"bg-gray-100":"bg-gray-50",(0,s.jsxs)("div",{className:`w-full grid grid-cols-4 ${a} p-1`,children:[s.jsx("p",{className:"text-center",children:e.AdvertiseHere.id}),s.jsx("p",{className:"text-center truncate",children:e.AdvertiseHere.message}),s.jsx("p",{className:"text-center ",children:e.AdvertiseHere.phone}),(0,s.jsxs)("div",{className:"text-center flex items-center justify-center gap-2",children:[s.jsx("button",{onClick:()=>{var r;r=e.AdvertiseHere.id,t(!0),(0,i.Z)({url:`${n.BD}/admin/forceDelete/advertiseHere/${r}`,method:"delete",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الحذف بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدق خطا ما ! حاول مجددا")))},className:"bg-red-700 text-white px-2 rounded-md",children:"حذف"}),s.jsx("button",{onClick:()=>{var r;r=e.AdvertiseHere.id,t(!0),(0,i.Z)({url:`${n.BD}/admin/restore/advertiseHere/${r}`,method:"get",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الاسترجاع بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدق خطا ما ! حاول مجددا")))},className:"bg-sky-700 text-white px-2 rounded-md",children:"استرجاع"})]})]},r)})]}):void 0:s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx(a.Z,{})})]})}},71384:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(10326),a=r(63056),n=r(3652),i=r(44099),c=r(86615),l=r(17577),o=r(29394);function d(){(0,c.getCookie)("adminData");let[e,t]=(0,l.useState)(!1),[r,d]=(0,l.useState)(""),[m,x]=(0,l.useState)("");return(0,s.jsxs)("div",{className:"w-full overflow-auto",children:[function(){if(e)return s.jsx("div",{className:"fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0",children:s.jsx(a.Z,{})})}(),s.jsx("div",{className:"p-2 px-4 border flex justify-between bg-white border-r-8 border-r-red-700 items-center",children:s.jsx("p",{className:"font-bold",children:"الاخبار"})}),r?0==r.length?s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx("p",{className:"font-bold text-gray-600 text-lg",children:"لا يوجد محذوفات"})}):r?(0,s.jsxs)("div",{className:"w-full h-[300px] bg-white border min-w-[500px]",children:[(0,s.jsxs)("div",{className:"w-full grid grid-cols-4 border p-1 font-bold",children:[s.jsx("p",{className:"text-center",children:"الخبر"}),s.jsx("p",{className:"text-center",children:"الكاتب"}),s.jsx("p",{className:"text-center",children:"التاريخ"}),s.jsx("p",{className:"text-center"})]}),r.map((e,r)=>{let a="bg-gray-50";return a=r%2==0?"bg-gray-100":"bg-gray-50",(0,s.jsxs)("div",{className:`w-full grid grid-cols-4 ${a} p-1`,children:[s.jsx("p",{className:"text-center truncate",children:e.title}),s.jsx("p",{className:"text-center ",children:e.writer}),s.jsx("p",{className:"text-center ",children:e.formatted_date}),(0,s.jsxs)("div",{className:"text-center flex items-center justify-center gap-2",children:[s.jsx("button",{onClick:()=>{var r;r=e.id,t(!0),(0,i.Z)({url:`${n.BD}/admin/forceDelete/news/${r}`,method:"delete",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الحذف بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدق خطا ما ! حاول مجددا")))},className:"bg-red-700 text-white px-2 rounded-md",children:"حذف"}),s.jsx("button",{onClick:()=>{var r;r=e.id,t(!0),(0,i.Z)({url:`${n.BD}/admin/restore/news/${r}`,method:"get",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الاسترجاع بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدق خطا ما ! حاول مجددا")))},className:"bg-sky-700 text-white px-2 rounded-md",children:"استرجاع"})]})]},r)})]}):void 0:s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx(a.Z,{})})]})}},96135:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(10326),a=r(63056),n=r(3652),i=r(44099),c=r(86615),l=r(17577),o=r(29394);function d(){(0,c.getCookie)("adminData");let[e,t]=(0,l.useState)(!1),[r,d]=(0,l.useState)(""),[m,x]=(0,l.useState)("");return(0,s.jsxs)("div",{className:"w-full overflow-auto",children:[function(){if(e)return s.jsx("div",{className:"fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0",children:s.jsx(a.Z,{})})}(),s.jsx("div",{className:"p-2 px-4 border flex justify-between bg-white border-r-8 border-r-red-700 items-center",children:s.jsx("p",{className:"font-bold",children:"المستخدمين"})}),r?0==r.length?s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx("p",{className:"font-bold text-gray-600 text-lg",children:"لا يوجد محذوفات"})}):r?(0,s.jsxs)("div",{className:"w-full h-[300px] bg-white border min-w-[500px]",children:[(0,s.jsxs)("div",{className:"w-full grid grid-cols-4 border p-1 font-bold",children:[s.jsx("p",{className:"text-center",children:"id"}),s.jsx("p",{className:"text-center",children:"الاسم"}),s.jsx("p",{className:"text-center",children:"البريد"}),s.jsx("p",{className:"text-center"})]}),r.map((e,r)=>{let a="bg-gray-50";return a=r%2==0?"bg-gray-100":"bg-gray-50",(0,s.jsxs)("div",{className:`w-full grid grid-cols-4 ${a} p-1`,children:[s.jsx("p",{className:"text-center",children:e.id}),s.jsx("p",{className:"text-center ",children:e.name}),s.jsx("p",{className:"text-center truncate",children:e.email}),(0,s.jsxs)("div",{className:"text-center flex items-center justify-center gap-2",children:[s.jsx("button",{onClick:()=>{var r;r=e.id,t(!0),(0,i.Z)({url:`${n.BD}/admin/forceDelete/user/${r}`,method:"delete",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الحذف بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدث خطا ما ! حاول مجددا")))},className:"bg-red-700 text-white px-2 rounded-md",children:"حذف"}),s.jsx("button",{onClick:()=>{var r;r=e.id,t(!0),(0,i.Z)({url:`${n.BD}/admin/restore/user/${r}`,method:"get",headers:{Authorization:`Bearer ${m.access_token}`}}).then(e=>(t(!1),location.reload(),o.Am.success("تم الاسترجاع بنجاح"))).catch(e=>(t(!1),console.log(e),o.Am.error("حدث خطا ما ! حاول مجددا")))},className:"bg-sky-700 text-white px-2 rounded-md",children:"استرجاع"})]})]},r)})]}):void 0:s.jsx("div",{className:" bg-white h-[200px] flex items-center justify-center relative",children:s.jsx(a.Z,{})})]})}},90855:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>q});var s=r(19510),a=r(68570);let n=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\adminDelete.js`),{__esModule:i,$$typeof:c}=n;n.default;let l=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\adminDelete.js#default`),o=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\categoryDelete.js`),{__esModule:d,$$typeof:m}=o;o.default;let x=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\categoryDelete.js#default`),h=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\comment.js`),{__esModule:p,$$typeof:u}=h;h.default;let g=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\comment.js#default`),j=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\contactDelete.js`),{__esModule:f,$$typeof:b}=j;j.default;let w=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\contactDelete.js#default`),v=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\messDelete.js`),{__esModule:N,$$typeof:y}=v;v.default;let D=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\messDelete.js#default`),P=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\newsDelete.js`),{__esModule:$,$$typeof:A}=P;P.default;let k=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\newsDelete.js#default`),_=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\userDelete.js`),{__esModule:S,$$typeof:B}=_;_.default;let Z=(0,a.createProxy)(String.raw`D:\Programming\programming projects\important ptojects\news\news2\src\app\dashboard\(dashboard)\delete\userDelete.js#default`);function q(){return(0,s.jsxs)("div",{className:"flex flex-col gap-6",children:[s.jsx(l,{}),s.jsx(Z,{}),s.jsx(k,{}),s.jsx(x,{}),s.jsx(D,{}),s.jsx(w,{}),s.jsx(g,{})]})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[8948,1883,5231,2105,2107],()=>r(5855));module.exports=s})();