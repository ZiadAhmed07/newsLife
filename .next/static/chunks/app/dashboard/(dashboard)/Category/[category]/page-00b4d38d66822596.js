(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2191],{9357:function(e,t,r){Promise.resolve().then(r.bind(r,4169))},1449:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},i=(t||{}).decode||o,n=0;n<e.length;){var a=e.indexOf("=",n);if(-1===a)break;var s=e.indexOf(";",n);if(-1===s)s=e.length;else if(s<a){n=e.lastIndexOf(";",a-1)+1;continue}var l=e.slice(n,a).trim();if(void 0===r[l]){var c=e.slice(a+1,s).trim();34===c.charCodeAt(0)&&(c=c.slice(1,-1)),r[l]=function(e,t){try{return t(e)}catch(t){return e}}(c,i)}n=s+1}return r},t.serialize=function(e,t,o){var a=o||{},s=a.encode||n;if("function"!=typeof s)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var l=s(t);if(l&&!i.test(l))throw TypeError("argument val is invalid");var c=e+"="+l;if(null!=a.maxAge){var u=a.maxAge-0;if(isNaN(u)||!isFinite(u))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(u)}if(a.domain){if(!i.test(a.domain))throw TypeError("option domain is invalid");c+="; Domain="+a.domain}if(a.path){if(!i.test(a.path))throw TypeError("option path is invalid");c+="; Path="+a.path}if(a.expires){var d=a.expires;if("[object Date]"!==r.call(d)&&!(d instanceof Date)||isNaN(d.valueOf()))throw TypeError("option expires is invalid");c+="; Expires="+d.toUTCString()}if(a.httpOnly&&(c+="; HttpOnly"),a.secure&&(c+="; Secure"),a.partitioned&&(c+="; Partitioned"),a.priority)switch("string"==typeof a.priority?a.priority.toLowerCase():a.priority){case"low":c+="; Priority=Low";break;case"medium":c+="; Priority=Medium";break;case"high":c+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c};var r=Object.prototype.toString,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function o(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}function n(e){return encodeURIComponent(e)}},3375:function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0}),t.hasCookie=t.deleteCookie=t.setCookie=t.getCookie=t.getCookies=void 0;var n=r(1449),a=function(){return"undefined"!=typeof window},s=function(e){return!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},l=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&s(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&s(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&s(e.cookies())},c=function(e){var t={};return e.getAll().forEach(function(e){var r=e.name,i=e.value;t[r]=i}),t},u=function(e){try{if("string"==typeof e)return e;return JSON.stringify(e)}catch(t){return e}};t.getCookies=function(e){if(l(e)){if(null==e?void 0:e.req)return c(e.req.cookies);if(null==e?void 0:e.cookies)return c(e.cookies())}if(e&&(t=e.req),!a())return t&&t.cookies?t.cookies:t&&t.headers.cookie?(0,n.parse)(t.headers.cookie):{};for(var t,r={},i=document.cookie?document.cookie.split("; "):[],o=0,s=i.length;o<s;o++){var u=i[o].split("="),d=u.slice(1).join("=");r[u[0]]=d}return r},t.getCookie=function(e,r){var i=(0,t.getCookies)(r)[e];if(void 0!==i)return i?i.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):i},t.setCookie=function(e,t,r){if(l(r)){var s,c,d,f=r.req,p=r.res,h=r.cookies,m=o(r,["req","res","cookies"]),x=i({name:e,value:u(t)},m);f&&f.cookies.set(x),p&&p.cookies.set(x),h&&h().set(x);return}if(r){var f=r.req,p=r.res,g=o(r,["req","res"]);c=f,d=p,s=g}var v=(0,n.serialize)(e,u(t),i({path:"/"},s));if(a())document.cookie=v;else if(d&&c){var y=d.getHeader("Set-Cookie");if(Array.isArray(y)||(y=y?[String(y)]:[]),d.setHeader("Set-Cookie",y.concat(v)),c&&c.cookies){var w=c.cookies;""===t?delete w[e]:w[e]=u(t)}if(c&&c.headers&&c.headers.cookie){var w=(0,n.parse)(c.headers.cookie);""===t?delete w[e]:w[e]=u(t),c.headers.cookie=Object.entries(w).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},"")}}},t.deleteCookie=function(e,r){return(0,t.setCookie)(e,"",i(i({},r),{maxAge:-1}))},t.hasCookie=function(e,r){return!!e&&(0,t.getCookies)(r).hasOwnProperty(e)}},6648:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var i=r(5601),o=r.n(i)},7138:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var i=r(231),o=r.n(i)},5601:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return s}});let i=r(9920),o=r(497),n=r(8173),a=i._(r(1241));function s(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=n.Image},4169:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var i=r(7437),o=r(6648),n=r(7138),a=r(2265),s=r(3375),l=r(8472),c=r(1138),u=r(3798),d=r(9531),f=r(3580);function p(e){let{params:t}=e,r=(0,s.getCookie)("adminData"),[p,h]=(0,a.useState)(""),[m,x]=(0,a.useState)(""),[g,v]=(0,a.useState)(!1),[y,w]=(0,a.useState)(""),[b,k]=(0,a.useState)(!1),[j,N]=(0,a.useState)("");return(0,a.useEffect)(()=>{if(r){let e=JSON.parse(r);h(e),4==e.admin.role.id&&N("hidden")}},[]),(0,a.useEffect)(()=>{p&&(0,l.Z)({url:"".concat(u.BD,"/admin/edit/category/").concat(t.category),method:"get",headers:{Authorization:"Bearer ".concat(p.access_token)}}).then(e=>{x(e.data.data)})},[p]),(0,i.jsxs)("div",{children:[function(){if(g)return(0,i.jsx)("div",{className:"fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0",children:(0,i.jsx)(c.Z,{})})}(),function(){if(!m)return(0,i.jsx)("div",{className:"w-full h-[300px] bg-gray-100 flex items-center justify-center relative",children:(0,i.jsx)(c.Z,{})});if(0==m.length)return(0,i.jsx)("div",{className:"w-full h-[100px] bg-gray-100 flex items-center justify-center font-bold text-gray-600",children:"لا يوجد اقسام"});if(m){let e=m.news.filter(e=>"published"==e.status),r=e.filter(e=>!y||e.title.includes(y)),a=null==e?void 0:e.map(e=>({id:e.id,value:e.id,label:e.title}));return(0,i.jsxs)("div",{className:"w-full overflow-auto",children:[function(){if(b)return(0,i.jsxs)("div",{className:" fixed top-0 left-0 w-full h-full flex items-start justify-center z-40",children:[(0,i.jsx)("div",{className:"w-full h-full bg-gray-200/80",onClick:()=>{k(!1)}}),(0,i.jsx)("div",{className:" absolute p-6 my-20 sm:mr-[200px]",children:(0,i.jsx)(d.ZP,{options:a,onChange:e=>{v(!0),(0,l.Z)({url:"".concat(u.BD,"/admin/create/bestNews"),method:"post",headers:{Authorization:"Bearer ".concat(p.access_token)},data:{news_id:e.id}}).then(e=>(v(!1),setTimeout(()=>{location.reload()},500),f.Am.success("تم اضافه الخبر الى الاخبار المميزه"))).catch(e=>(console.log(e),v(!1),f.Am.error("حدث خطا ما! حاول مجددا")))},placeholder:"بحث...",className:"max-sm:w-[320px] w-[500px] text-sm max-sm:text-xs"})})]})}(),(0,i.jsxs)("div",{className:"p-2 px-4 font-bold border flex justify-between bg-white border-r-8 border-r-red-700",children:[(0,i.jsx)("p",{children:m.name}),(0,i.jsxs)("p",{children:["عدد الاخبار : ",m.news_count]})]}),(0,i.jsxs)("div",{className:"my-6 p-6 bg-white w-full flex flex-col gap-4",children:[(0,i.jsxs)("div",{className:" flex justify-between items-center max-sm:flex-col max-sm:gap-4",children:[(0,i.jsx)("input",{type:"search",onChange:e=>{w(e.target.value)},placeholder:"بحث",className:"py-1 max-sm:w-full max-md:w-[230px] outline-none px-2 rounded-md w-[300px] border border-red-700"}),(0,i.jsx)(n.default,{href:"/dashboard/addNews",className:"text-white max-sm:w-full text-center font-bold bg-red-700 rounded-md hover:bg-red-600 py-1 px-2",children:"اضافه خبر "})]}),(0,i.jsx)("div",{className:" w-full grid gap-4 sm:grid-cols-2 lg:grid-cols-3",children:r.reverse().map((e,r)=>(0,i.jsxs)(n.default,{href:"/dashboard/Category/".concat(t.category,"/").concat(e.id),className:"hover:opacity-80 relative  transition-all flex flex-col gap-2 shadow-md",children:[(0,i.jsxs)("div",{className:" absolute top-2 left-2 text-gray-100 flex text-xs font-bold gap-1 bg-gray-600/50",children:[(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-eye-fill",viewBox:"0 0 16 16",children:[(0,i.jsx)("path",{d:"M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"}),(0,i.jsx)("path",{d:"M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"})]}),null==e?void 0:e.news_views_count]}),(0,i.jsx)(o.default,{src:"".concat(u.xS,"/").concat(e.img),alt:"",width:390,height:200,className:"max-h-[200px]"}),(0,i.jsxs)("div",{className:"flex flex-col gap-2 p-3 ",children:[(0,i.jsx)("p",{className:"text-gray-500 text-xs font-bold",children:e.formatted_date}),(0,i.jsx)("h2",{children:e.title}),(0,i.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,i.jsx)("div",{className:"w-[40px] h-[40px] bg-red-700 flex items-center justify-center font-bold text-white rounded-full",children:null==e?void 0:e.writer[0]}),(0,i.jsxs)("p",{children:["by : ",e.writer]})]})]})]},r))})]})]})}}()]})}},1138:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(7437);function o(){return(0,i.jsx)("div",{className:"loader"})}r(9441)},3798:function(e,t,r){"use strict";r.d(t,{BD:function(){return i},xS:function(){return o}});let i="https://zaha.alwatanynews.com/api",o="https://zaha.alwatanynews.com/public"},9441:function(){}},function(e){e.O(0,[269,8472,231,8173,3580,9531,2971,7023,1744],function(){return e(e.s=9357)}),_N_E=e.O()}]);