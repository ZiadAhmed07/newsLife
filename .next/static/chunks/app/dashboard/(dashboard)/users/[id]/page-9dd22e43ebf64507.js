(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8042],{9666:function(e,t,r){Promise.resolve().then(r.bind(r,1443))},1449:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},i=(t||{}).decode||n,s=0;s<e.length;){var o=e.indexOf("=",s);if(-1===o)break;var a=e.indexOf(";",s);if(-1===a)a=e.length;else if(a<o){s=e.lastIndexOf(";",o-1)+1;continue}var c=e.slice(s,o).trim();if(void 0===r[c]){var l=e.slice(o+1,a).trim();34===l.charCodeAt(0)&&(l=l.slice(1,-1)),r[c]=function(e,t){try{return t(e)}catch(t){return e}}(l,i)}s=a+1}return r},t.serialize=function(e,t,n){var o=n||{},a=o.encode||s;if("function"!=typeof a)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var c=a(t);if(c&&!i.test(c))throw TypeError("argument val is invalid");var l=e+"="+c;if(null!=o.maxAge){var d=o.maxAge-0;if(isNaN(d)||!isFinite(d))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(d)}if(o.domain){if(!i.test(o.domain))throw TypeError("option domain is invalid");l+="; Domain="+o.domain}if(o.path){if(!i.test(o.path))throw TypeError("option path is invalid");l+="; Path="+o.path}if(o.expires){var u=o.expires;if("[object Date]"!==r.call(u)&&!(u instanceof Date)||isNaN(u.valueOf()))throw TypeError("option expires is invalid");l+="; Expires="+u.toUTCString()}if(o.httpOnly&&(l+="; HttpOnly"),o.secure&&(l+="; Secure"),o.partitioned&&(l+="; Partitioned"),o.priority)switch("string"==typeof o.priority?o.priority.toLowerCase():o.priority){case"low":l+="; Priority=Low";break;case"medium":l+="; Priority=Medium";break;case"high":l+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var r=Object.prototype.toString,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function n(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}function s(e){return encodeURIComponent(e)}},3375:function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},n=this&&this.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r};Object.defineProperty(t,"__esModule",{value:!0}),t.hasCookie=t.deleteCookie=t.setCookie=t.getCookie=t.getCookies=void 0;var s=r(1449),o=function(){return"undefined"!=typeof window},a=function(e){return!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},c=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&a(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&a(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&a(e.cookies())},l=function(e){var t={};return e.getAll().forEach(function(e){var r=e.name,i=e.value;t[r]=i}),t},d=function(e){try{if("string"==typeof e)return e;return JSON.stringify(e)}catch(t){return e}};t.getCookies=function(e){if(c(e)){if(null==e?void 0:e.req)return l(e.req.cookies);if(null==e?void 0:e.cookies)return l(e.cookies())}if(e&&(t=e.req),!o())return t&&t.cookies?t.cookies:t&&t.headers.cookie?(0,s.parse)(t.headers.cookie):{};for(var t,r={},i=document.cookie?document.cookie.split("; "):[],n=0,a=i.length;n<a;n++){var d=i[n].split("="),u=d.slice(1).join("=");r[d[0]]=u}return r},t.getCookie=function(e,r){var i=(0,t.getCookies)(r)[e];if(void 0!==i)return i?i.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):i},t.setCookie=function(e,t,r){if(c(r)){var a,l,u,f=r.req,h=r.res,p=r.cookies,m=n(r,["req","res","cookies"]),x=i({name:e,value:d(t)},m);f&&f.cookies.set(x),h&&h.cookies.set(x),p&&p().set(x);return}if(r){var f=r.req,h=r.res,g=n(r,["req","res"]);l=f,u=h,a=g}var v=(0,s.serialize)(e,d(t),i({path:"/"},a));if(o())document.cookie=v;else if(u&&l){var b=u.getHeader("Set-Cookie");if(Array.isArray(b)||(b=b?[String(b)]:[]),u.setHeader("Set-Cookie",b.concat(v)),l&&l.cookies){var y=l.cookies;""===t?delete y[e]:y[e]=d(t)}if(l&&l.headers&&l.headers.cookie){var y=(0,s.parse)(l.headers.cookie);""===t?delete y[e]:y[e]=d(t),l.headers.cookie=Object.entries(y).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},"")}}},t.deleteCookie=function(e,r){return(0,t.setCookie)(e,"",i(i({},r),{maxAge:-1}))},t.hasCookie=function(e,r){return!!e&&(0,t.getCookies)(r).hasOwnProperty(e)}},7138:function(e,t,r){"use strict";r.d(t,{default:function(){return n.a}});var i=r(231),n=r.n(i)},6463:function(e,t,r){"use strict";var i=r(1169);r.o(i,"usePathname")&&r.d(t,{usePathname:function(){return i.usePathname}}),r.o(i,"useRouter")&&r.d(t,{useRouter:function(){return i.useRouter}})},1443:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var i=r(7437),n=r(1138),s=r(3798),o=r(8472),a=r(3375),c=r(7138),l=r(6463),d=r(2265),u=r(3580);function f(e){let{params:t}=e,[r,f]=(0,d.useState)(""),h=(0,a.getCookie)("adminData"),[p,m]=(0,d.useState)(""),[x,g]=(0,d.useState)(!1),[v,b]=(0,d.useState)(!1),y=(0,l.useRouter)();function j(e){e.preventDefault(),g(!0),(0,o.Z)({url:"".concat(s.BD,"/admin/delete/user/").concat(t.id),method:"delete",headers:{Authorization:"Bearer ".concat(p.access_token)}}).then(()=>(g(!1),b(!1),y.replace("/dashboard/users"),u.Am.success("تم الحذف بنجاح"))).catch(e=>(console.log(e),g(!1),b(!1),u.Am.error("حدث خطا ما! حاول مجددا")))}return(0,d.useEffect)(()=>{h&&m(JSON.parse(h))},[]),(0,d.useEffect)(()=>{p&&(0,o.Z)({url:"".concat(s.BD,"/admin/edit/user/").concat(t.id),method:"get",headers:{Authorization:"Bearer ".concat(p.access_token)}}).then(e=>{f(e.data.data)})},[p]),(0,i.jsxs)("div",{children:[function(){if(v)return(0,i.jsxs)("div",{className:"w-full h-full fixed top-0 right-0 z-40 flex items-center justify-center",children:[(0,i.jsx)("div",{onClick:()=>{b(!1)},className:"w-full h-full bg-gray-800/80"}),(0,i.jsxs)("div",{className:" absolute w-[300px] flex flex-col gap-4 p-6 bg-gray-200 rounded-xl text-center font-bold text-gray-600",children:[(0,i.jsx)("p",{children:"هل انت متاكد من الحذف"}),(0,i.jsx)("p",{className:"text-xs text-red-700",children:"اذا قمت بحذف هذا المسؤول فسوف تفقد كل الاخبار التى انشأها هذا الشخص"}),(0,i.jsx)("button",{onClick:j,className:"bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-red-500",children:"حذف القسم"})]})]})}(),function(){if(x)return(0,i.jsx)("div",{className:"fixed w-full h-full bg-gray-200/80 z-50 flex items-center justify-center top-0 right-0",children:(0,i.jsx)(n.Z,{})})}(),function(){if(!r)return(0,i.jsx)("div",{className:"w-full h-[300px] bg-gray-100 flex items-center justify-center relative",children:(0,i.jsx)(n.Z,{})});if(r){var e,t,s;return console.log(r),(0,i.jsxs)("div",{className:"flex flex-col gap-6 w-full overflow-auto",children:[(0,i.jsx)("div",{className:"p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center",children:(0,i.jsx)("p",{className:"font-bold",children:"المستخدم"})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center",children:(0,i.jsx)("p",{className:"",children:"المعلومات الاساسيه"})}),(0,i.jsxs)("div",{className:"border p-6 bg-white flex flex-col gap-4",children:[(0,i.jsxs)("p",{children:["الاسم : ",r.name]}),(0,i.jsxs)("p",{children:["البريد : ",r.email]})]})]}),(0,i.jsxs)("div",{className:" min-w-[500px]",children:[(0,i.jsx)("div",{className:"p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center",children:(0,i.jsx)("p",{className:"",children:"التعليقات"})}),(0,i.jsxs)("div",{className:"grid grid-cols-4 bg-white border justify-center py-3 font-bold text-gray-700 border-b",children:[(0,i.jsx)("p",{className:" text-center col-start-1 col-end-3",children:"التعليق "}),(0,i.jsx)("p",{className:" text-center col-start-3 col-end-5",children:"الخبر"})]}),null===(e=r.comments)||void 0===e?void 0:e.map((e,t)=>{let r="bg-gray-50";return r=t%2==0?"bg-gray-100":"bg-gray-50",(0,i.jsxs)(c.default,{href:"/dashboard/comments/".concat(e.comment.id),className:"grid grid-cols-4 p-2 ".concat(r," hover:bg-gray-200 items-center"),children:[(0,i.jsx)("p",{className:" text-center col-start-1 col-end-3 truncate",children:e.comment.comment}),(0,i.jsx)("p",{className:" text-center col-start-3 col-end-5 truncate",children:e.comment.news.title})]},t)})]}),(0,i.jsxs)("div",{className:" min-w-[500px]",children:[(0,i.jsx)("div",{className:"p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center",children:(0,i.jsx)("p",{className:"",children:"الاعلانات "})}),(0,i.jsxs)("div",{className:"grid grid-cols-4 bg-white border justify-center py-3 font-bold text-gray-700 border-b",children:[(0,i.jsx)("p",{className:"text-center",children:"id"}),(0,i.jsx)("p",{className:" text-center",children:"الهاتف"}),(0,i.jsx)("p",{className:" text-center col-start-3 col-end-5",children:"الرساله"})]}),null===(t=r.advertiseHere)||void 0===t?void 0:t.map((e,t)=>{let r="bg-gray-50";return r=t%2==0?"bg-gray-100":"bg-gray-50",(0,i.jsxs)(c.default,{href:"/dashboard/advertiseHere/".concat(e.AdvertiseHere.id),className:"grid grid-cols-4 p-2 ".concat(r," hover:bg-gray-200 items-center"),children:[(0,i.jsx)("p",{className:" text-center",children:e.AdvertiseHere.id}),(0,i.jsx)("p",{className:" text-center",children:e.AdvertiseHere.phone}),(0,i.jsx)("p",{className:" text-center col-start-3 col-end-5 truncate",children:e.AdvertiseHere.message})]},t)})]}),(0,i.jsxs)("div",{className:" min-w-[500px]",children:[(0,i.jsx)("div",{className:"p-2 px-4 border w-full flex justify-between bg-white border-r-8 border-r-red-700 items-center",children:(0,i.jsx)("p",{className:"",children:"الرسائل "})}),(0,i.jsxs)("div",{className:"grid grid-cols-4 bg-white border justify-center py-3 font-bold text-gray-700 border-b",children:[(0,i.jsx)("p",{className:" text-center ",children:"id"}),(0,i.jsx)("p",{className:" text-center ",children:"الهاتف"}),(0,i.jsx)("p",{className:" text-center col-start-3 col-end-5",children:"الرساله"})]}),null===(s=r.contactUs)||void 0===s?void 0:s.map((e,t)=>{let r="bg-gray-50";return r=t%2==0?"bg-gray-100":"bg-gray-50",(0,i.jsxs)(c.default,{href:"/dashboard/contact/".concat(e.contact.id),className:"grid grid-cols-4 p-2 ".concat(r," hover:bg-gray-200 items-center"),children:[(0,i.jsx)("p",{className:" text-center",children:e.contact.id}),(0,i.jsx)("p",{className:" text-center ",children:e.contact.phone}),(0,i.jsx)("p",{className:" text-center col-start-3 col-end-5",children:e.contact.message})]},t)})]}),(0,i.jsxs)("div",{className:" bg-white p-6 flex justify-center gap-6",children:[(0,i.jsx)(c.default,{href:"#"}),(0,i.jsx)("button",{onClick:()=>{b(!0)},className:" rounded-lg px-6 py-2 bg-gray-600 text-white hover:bg-red-500",children:"حذف المستخدم"})]})]})}}()]})}},1138:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(7437);function n(){return(0,i.jsx)("div",{className:"loader"})}r(9441)},3798:function(e,t,r){"use strict";r.d(t,{BD:function(){return i},xS:function(){return n}});let i="https://zaha.alwatanynews.com/api",n="https://zaha.alwatanynews.com/public"},9441:function(){}},function(e){e.O(0,[269,8472,231,3580,2971,7023,1744],function(){return e(e.s=9666)}),_N_E=e.O()}]);