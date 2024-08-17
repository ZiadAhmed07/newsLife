(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9570],{4497:function(e,t,r){Promise.resolve().then(r.bind(r,9955)),Promise.resolve().then(r.bind(r,4934)),Promise.resolve().then(r.bind(r,9200)),Promise.resolve().then(r.bind(r,9653))},1449:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},i=(t||{}).decode||n,s=0;s<e.length;){var a=e.indexOf("=",s);if(-1===a)break;var o=e.indexOf(";",s);if(-1===o)o=e.length;else if(o<a){s=e.lastIndexOf(";",a-1)+1;continue}var l=e.slice(s,a).trim();if(void 0===r[l]){var c=e.slice(a+1,o).trim();34===c.charCodeAt(0)&&(c=c.slice(1,-1)),r[l]=function(e,t){try{return t(e)}catch(t){return e}}(c,i)}s=o+1}return r},t.serialize=function(e,t,n){var a=n||{},o=a.encode||s;if("function"!=typeof o)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var l=o(t);if(l&&!i.test(l))throw TypeError("argument val is invalid");var c=e+"="+l;if(null!=a.maxAge){var d=a.maxAge-0;if(isNaN(d)||!isFinite(d))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(d)}if(a.domain){if(!i.test(a.domain))throw TypeError("option domain is invalid");c+="; Domain="+a.domain}if(a.path){if(!i.test(a.path))throw TypeError("option path is invalid");c+="; Path="+a.path}if(a.expires){var u=a.expires;if("[object Date]"!==r.call(u)&&!(u instanceof Date)||isNaN(u.valueOf()))throw TypeError("option expires is invalid");c+="; Expires="+u.toUTCString()}if(a.httpOnly&&(c+="; HttpOnly"),a.secure&&(c+="; Secure"),a.partitioned&&(c+="; Partitioned"),a.priority)switch("string"==typeof a.priority?a.priority.toLowerCase():a.priority){case"low":c+="; Priority=Low";break;case"medium":c+="; Priority=Medium";break;case"high":c+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c};var r=Object.prototype.toString,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function n(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}function s(e){return encodeURIComponent(e)}},3375:function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0}),t.hasCookie=t.deleteCookie=t.setCookie=t.getCookie=t.getCookies=void 0;var s=r(1449),a=function(){return"undefined"!=typeof window},o=function(e){return!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},l=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&o(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&o(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&o(e.cookies())},c=function(e){var t={};return e.getAll().forEach(function(e){var r=e.name,i=e.value;t[r]=i}),t},d=function(e){try{if("string"==typeof e)return e;return JSON.stringify(e)}catch(t){return e}};t.getCookies=function(e){if(l(e)){if(null==e?void 0:e.req)return c(e.req.cookies);if(null==e?void 0:e.cookies)return c(e.cookies())}if(e&&(t=e.req),!a())return t&&t.cookies?t.cookies:t&&t.headers.cookie?(0,s.parse)(t.headers.cookie):{};for(var t,r={},i=document.cookie?document.cookie.split("; "):[],n=0,o=i.length;n<o;n++){var d=i[n].split("="),u=d.slice(1).join("=");r[d[0]]=u}return r},t.getCookie=function(e,r){var i=(0,t.getCookies)(r)[e];if(void 0!==i)return i?i.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):i},t.setCookie=function(e,t,r){if(l(r)){var o,c,u,f=r.req,h=r.res,m=r.cookies,p=n(r,["req","res","cookies"]),g=i({name:e,value:d(t)},p);f&&f.cookies.set(g),h&&h.cookies.set(g),m&&m().set(g);return}if(r){var f=r.req,h=r.res,x=n(r,["req","res"]);c=f,u=h,o=x}var v=(0,s.serialize)(e,d(t),i({path:"/"},o));if(a())document.cookie=v;else if(u&&c){var w=u.getHeader("Set-Cookie");if(Array.isArray(w)||(w=w?[String(w)]:[]),u.setHeader("Set-Cookie",w.concat(v)),c&&c.cookies){var b=c.cookies;""===t?delete b[e]:b[e]=d(t)}if(c&&c.headers&&c.headers.cookie){var b=(0,s.parse)(c.headers.cookie);""===t?delete b[e]:b[e]=d(t),c.headers.cookie=Object.entries(b).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},"")}}},t.deleteCookie=function(e,r){return(0,t.setCookie)(e,"",i(i({},r),{maxAge:-1}))},t.hasCookie=function(e,r){return!!e&&(0,t.getCookies)(r).hasOwnProperty(e)}},6648:function(e,t,r){"use strict";r.d(t,{default:function(){return n.a}});var i=r(5601),n=r.n(i)},5601:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return o}});let i=r(9920),n=r(497),s=r(8173),a=i._(r(1241));function o(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=s.Image},291:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let i=r(9920)._(r(2265)).default.createContext(null)},9955:function(e,t,r){"use strict";r.d(t,{default:function(){return u}});var i=r(7437),n=r(2265),s=r(3375),a=r(8472),o=r(1138),l=r(3798),c=r(9531),d=r(3580);function u(){let e=(0,s.getCookie)("adminData"),[t,r]=(0,n.useState)(""),[u,f]=(0,n.useState)(""),[h,m]=(0,n.useState)(""),[p,g]=(0,n.useState)(!1),[x,v]=(0,n.useState)(!1),[w,b]=(0,n.useState)("");return(0,n.useEffect)(()=>{if(e){let t=JSON.parse(e);r(t),4==t.admin.role.id&&b("hidden")}},[]),(0,n.useEffect)(()=>{t&&(0,a.Z)({url:"".concat(l.BD,"/admin/showAll/slider"),method:"get",headers:{Authorization:"Bearer ".concat(t.access_token)}}).then(e=>{f(e.data.data)}).catch(e=>{console.log(e)}),t&&(0,a.Z)({url:"".concat(l.BD,"/admin/showAll/news"),method:"get",headers:{Authorization:"Bearer ".concat(t.access_token)}}).then(e=>{let t=e.data.news;m(null==t?void 0:t.filter(e=>"published"==e.status))}).catch(e=>{console.log(e)})},[t]),(0,i.jsxs)("div",{children:[function(){if(x)return(0,i.jsx)("div",{className:"fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0",children:(0,i.jsx)(o.Z,{})})}(),(0,i.jsxs)("div",{className:"p-2 px-4 font-bold border flex items-center justify-between bg-white border-r-8 border-r-red-700",children:[(0,i.jsx)("p",{children:"الاخبار المنزلقه"}),(0,i.jsx)("button",{onClick:()=>{g(!0)},className:"text-sm bg-red-700 text-white rounded-md p-1 ".concat(w),children:"اضافه خبر"})]}),(0,i.jsxs)("div",{children:[function(){if(h){let e=h.map(e=>({id:e.id,value:e.id,label:e.title}));if(p)return(0,i.jsxs)("div",{className:" fixed top-0 left-0 w-full h-full flex items-start justify-center z-40",children:[(0,i.jsx)("div",{className:"w-full h-full bg-gray-200/80",onClick:()=>{g(!1)}}),(0,i.jsx)("div",{className:" absolute p-6 my-20",children:(0,i.jsx)(c.ZP,{options:e,onChange:e=>{v(!0),(0,a.Z)({url:"".concat(l.BD,"/admin/create/slider"),method:"post",headers:{Authorization:"Bearer ".concat(t.access_token)},data:{trending_news_id:1,news_id:e.value}}).then(e=>(v(!1),g(!1),setTimeout(()=>{location.reload()},500),d.Am.success("تم اضافه الخبر"))).catch(e=>(console.log(e),v(!1),g(!1),d.Am.error("حدث خطا ما! حاول مجددا")))},placeholder:"بحث...",className:"max-sm:w-[320px] w-[500px] text-sm max-sm:text-xs"})})]})}}(),u?0==u.length?(0,i.jsx)("div",{className:"w-full h-[200px] bg-gray-100 flex items-center justify-center font-bold text-gray-600",children:"لا يوجد اخبار"}):u?(0,i.jsx)("div",{className:"min-h-[200px] bg-white",children:null==u?void 0:u.map((e,r)=>{var n;let s="bg-gray-100";return s=r%2==0?"bg-gray-100":"bg-gray-50",(0,i.jsxs)("div",{className:"p-2 ".concat(s," text-sm truncate flex gap-3 items-center relative"),children:[(0,i.jsx)("p",{onClick:()=>{var r;r=e.id,v(!0),(0,a.Z)({url:"".concat(l.BD,"/admin/forceDelete/slider/").concat(r),method:"delete",headers:{Authorization:"Bearer ".concat(t.access_token)}}).then(e=>(v(!1),setTimeout(()=>{location.reload()},500),d.Am.success("تم حذف الخبر"))).catch(e=>(v(!1),d.Am.error("حدث خطا ما! حاول مجددا")))},className:"absolute text-red-500 left-0 px-2 cursor-pointer ".concat(w," ").concat(s),children:"حذف"}),(0,i.jsx)("p",{className:"w-3 h-3 rounded-full bg-red-700"}),(0,i.jsx)("p",{children:null===(n=e.news)||void 0===n?void 0:n.title})]},r)})}):void 0:(0,i.jsx)("div",{className:"w-full h-[300px] bg-gray-100 flex items-center justify-center relative",children:(0,i.jsx)(o.Z,{})})]})]})}},4934:function(e,t,r){"use strict";r.d(t,{default:function(){return l}});var i=r(7437),n=r(2265),s=r(3375),a=r(8472);r(1138);var o=r(3798);function l(){let e=(0,s.getCookie)("adminData"),[t,r]=(0,n.useState)(""),[l,c]=(0,n.useState)();return(0,n.useEffect)(()=>{e&&r(JSON.parse(e))},[]),(0,n.useEffect)(()=>{t&&(0,a.Z)({url:"".concat(o.BD,"/admin/showAll/statistics"),method:"get",headers:{Authorization:"Bearer ".concat(t.access_token)}}).then(e=>{c(e.data),console.log(e.data)}).catch(e=>{console.log(e)})},[t]),(0,i.jsx)("div",{children:l?l?(0,i.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[(0,i.jsxs)("div",{className:"h-[200px] w-full rounded-lg bg-white p-6 py-8 flex flex-col justify-between gap-2 text-red-700 font-bold",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",fill:"currentColor",className:"p-2 rounded-md bg-gray-200 bi bi-newspaper",viewBox:"0 0 16 16",children:[(0,i.jsx)("path",{d:"M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"}),(0,i.jsx)("path",{d:"M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"})]}),(0,i.jsxs)("p",{children:["عدد الاخبار : ",l.News_count]})]}),(0,i.jsxs)("div",{className:"h-[200px] w-full rounded-lg bg-white p-6 py-8 flex flex-col justify-between gap-2 text-green-500 font-bold",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",fill:"currentColor",className:"p-2 rounded-md bg-gray-200 bi bi-bookmarks",viewBox:"0 0 16 16",children:[(0,i.jsx)("path",{d:"M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"}),(0,i.jsx)("path",{d:"M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"})]}),(0,i.jsxs)("p",{children:["عدد الاقسام : ",l.Categories_count]})]}),(0,i.jsxs)("div",{className:"h-[200px] w-full rounded-lg bg-white p-6 py-8 flex flex-col justify-between gap-2 text-purple-800 font-bold",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",fill:"currentColor",className:"p-2 rounded-md bg-gray-200 bi bi-eye-fill",viewBox:"0 0 16 16",children:[(0,i.jsx)("path",{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"}),(0,i.jsx)("path",{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"})]}),(0,i.jsxs)("p",{children:["عدد المشاهدات : ",l.Views_count]})]}),(0,i.jsxs)("div",{className:"h-[200px] w-full rounded-lg bg-white p-6 py-8 flex flex-col justify-between gap-2 text-blue-500 font-bold",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"60",fill:"currentColor",className:"p-2 rounded-md bg-gray-200 bi bi-person-lines-fill",viewBox:"0 0 16 16",children:(0,i.jsx)("path",{d:"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"})}),(0,i.jsxs)("p",{children:["عدد المسؤولين : ",l.Admins_count]})]})]}):void 0:(0,i.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[(0,i.jsx)("div",{className:"h-[200px] w-full rounded-lg bg-gray-100 animate-pulse "}),(0,i.jsx)("div",{className:"h-[200px] w-full rounded-lg bg-gray-100 animate-pulse"}),(0,i.jsx)("div",{className:"h-[200px] w-full rounded-lg bg-gray-100 animate-pulse"}),(0,i.jsx)("div",{className:"h-[200px] w-full rounded-lg bg-gray-100 animate-pulse"})]})})}r(3580)},9200:function(e,t,r){"use strict";r.d(t,{default:function(){return o}});var i=r(7437),n={src:"/_next/static/media/bg-dashborad.9e496fbe.WebP",height:2896,width:6e3,blurWidth:0,blurHeight:0},s=r(6648),a=r(2265);function o(){let[e,t]=(0,a.useState)(new Date);(0,a.useEffect)(()=>{let e=setInterval(()=>{t(new Date)},6e4);return()=>clearInterval(e)},[]);let r=new Date,o=new Intl.DateTimeFormat("ar",{dateStyle:"full"}).format(r);return(0,i.jsxs)("div",{className:"w-full rounded-lg h-[200px] flex bg-white relative overflow-hidden",children:[(0,i.jsx)(s.default,{src:n,alt:"...",className:"w-full h-full"}),(0,i.jsxs)("div",{className:"font-20 absolute w-full h-full bg-gray-700/80 text-white p-6",children:[(0,i.jsx)("p",{className:" font-bold text-[70px]",children:e.toLocaleTimeString("ar",{minute:"2-digit",hour:"2-digit"})}),(0,i.jsx)("p",{className:"font-bold",children:o})]})]})}},9653:function(e,t,r){"use strict";r.d(t,{default:function(){return u}});var i=r(7437),n=r(2265),s=r(3375),a=r(8472),o=r(1138),l=r(3798),c=r(9531),d=r(3580);function u(){let e=(0,s.getCookie)("adminData"),[t,r]=(0,n.useState)(""),[u,f]=(0,n.useState)(""),[h,m]=(0,n.useState)(""),[p,g]=(0,n.useState)(!1),[x,v]=(0,n.useState)(!1),[w,b]=(0,n.useState)("");return(0,n.useEffect)(()=>{if(e){let t=JSON.parse(e);r(t),4==t.admin.role.id&&b("hidden")}},[]),(0,n.useEffect)(()=>{t&&(0,a.Z)({url:"".concat(l.BD,"/admin/showAll/TNews"),method:"get",headers:{Authorization:"Bearer ".concat(t.access_token)}}).then(e=>{f(e.data.data)}).catch(e=>{console.log(e)}),t&&(0,a.Z)({url:"".concat(l.BD,"/admin/showAll/news"),method:"get",headers:{Authorization:"Bearer ".concat(t.access_token)}}).then(e=>{m(e.data.news.filter(e=>"published"==e.status))}).catch(e=>{console.log(e)})},[t]),(0,i.jsxs)("div",{children:[function(){if(p)return(0,i.jsx)("div",{className:"fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0",children:(0,i.jsx)(o.Z,{})})}(),(0,i.jsxs)("div",{className:"p-2 px-4 font-bold border flex items-center justify-between bg-white border-r-8 border-r-red-700",children:[(0,i.jsx)("p",{children:"الاخبار الرائجه"}),(0,i.jsx)("button",{onClick:()=>{v(!0)},className:"text-sm bg-red-700 text-white rounded-md p-1 ".concat(w),children:"اضافه خبر"})]}),(0,i.jsxs)("div",{children:[function(){if(h){let e=h.map(e=>({id:e.id,value:e.id,label:e.title}));if(x)return(0,i.jsxs)("div",{className:" fixed top-0 left-0 w-full h-full flex items-start justify-center z-40",children:[(0,i.jsx)("div",{className:"w-full h-full bg-gray-200/80",onClick:()=>{v(!1)}}),(0,i.jsx)("div",{className:" absolute p-6 my-20",children:(0,i.jsx)(c.ZP,{options:e,onChange:e=>{g(!0),(0,a.Z)({url:"".concat(l.BD,"/admin/create/TNews"),method:"post",headers:{Authorization:"Bearer ".concat(t.access_token)},data:{trending_news_id:1,news_id:e.value}}).then(e=>(g(!1),v(!1),setTimeout(()=>{location.reload()},500),d.Am.success("تم اضافه الخبر"))).catch(e=>(console.log(e),g(!1),v(!1),d.Am.error("حدث خطا ما! حاول مجددا")))},placeholder:"بحث...",className:"max-sm:w-[320px] w-[500px] text-sm max-sm:text-xs"})})]})}}(),u?0==u.length?(0,i.jsx)("div",{className:"w-full h-[200px] bg-gray-100 flex items-center justify-center font-bold text-gray-600",children:"لا يوجد اخبار"}):u?(0,i.jsx)("div",{className:"min-h-[200px] bg-white",children:null==u?void 0:u.map((e,r)=>{var n;let s="bg-gray-100";return s=r%2==0?"bg-gray-100":"bg-gray-50",(0,i.jsxs)("div",{className:"p-2 ".concat(s," text-sm truncate flex gap-3 items-center relative"),children:[(0,i.jsx)("p",{onClick:()=>{var r;r=e.id,g(!0),(0,a.Z)({url:"".concat(l.BD,"/admin/forceDelete/TNews/").concat(r),method:"delete",headers:{Authorization:"Bearer ".concat(t.access_token)}}).then(e=>(g(!1),setTimeout(()=>{location.reload()},500),d.Am.success("تم حذف الخبر"))).catch(e=>(g(!1),d.Am.error("حدث خطا ما! حاول مجددا")))},className:"absolute ".concat(w," text-red-500 left-0 px-2 cursor-pointer ").concat(s),children:"حذف"}),(0,i.jsx)("p",{className:"w-3 h-3 rounded-full bg-red-700"}),(0,i.jsx)("p",{children:null===(n=e.news)||void 0===n?void 0:n.title})]},r)})}):void 0:(0,i.jsx)("div",{className:"w-full h-[300px] bg-gray-100 flex items-center justify-center relative",children:(0,i.jsx)(o.Z,{})})]})]})}},1138:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(7437);function n(){return(0,i.jsx)("div",{className:"loader"})}r(9441)},3798:function(e,t,r){"use strict";r.d(t,{BD:function(){return i},xS:function(){return n}});let i="https://zaha.alwatanynews.com/api",n="https://zaha.alwatanynews.com/public"},9441:function(){}},function(e){e.O(0,[269,8472,8173,3580,9531,2971,7023,1744],function(){return e(e.s=4497)}),_N_E=e.O()}]);