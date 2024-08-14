(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3880],{9076:function(e,t,r){Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,9405)),Promise.resolve().then(r.bind(r,661)),Promise.resolve().then(r.bind(r,4843))},1449:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},i=(t||{}).decode||o,n=0;n<e.length;){var a=e.indexOf("=",n);if(-1===a)break;var s=e.indexOf(";",n);if(-1===s)s=e.length;else if(s<a){n=e.lastIndexOf(";",a-1)+1;continue}var c=e.slice(n,a).trim();if(void 0===r[c]){var u=e.slice(a+1,s).trim();34===u.charCodeAt(0)&&(u=u.slice(1,-1)),r[c]=function(e,t){try{return t(e)}catch(t){return e}}(u,i)}n=s+1}return r},t.serialize=function(e,t,o){var a=o||{},s=a.encode||n;if("function"!=typeof s)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var c=s(t);if(c&&!i.test(c))throw TypeError("argument val is invalid");var u=e+"="+c;if(null!=a.maxAge){var l=a.maxAge-0;if(isNaN(l)||!isFinite(l))throw TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(l)}if(a.domain){if(!i.test(a.domain))throw TypeError("option domain is invalid");u+="; Domain="+a.domain}if(a.path){if(!i.test(a.path))throw TypeError("option path is invalid");u+="; Path="+a.path}if(a.expires){var f=a.expires;if("[object Date]"!==r.call(f)&&!(f instanceof Date)||isNaN(f.valueOf()))throw TypeError("option expires is invalid");u+="; Expires="+f.toUTCString()}if(a.httpOnly&&(u+="; HttpOnly"),a.secure&&(u+="; Secure"),a.partitioned&&(u+="; Partitioned"),a.priority)switch("string"==typeof a.priority?a.priority.toLowerCase():a.priority){case"low":u+="; Priority=Low";break;case"medium":u+="; Priority=Medium";break;case"high":u+="; Priority=High";break;default:throw TypeError("option priority is invalid")}if(a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"none":u+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return u};var r=Object.prototype.toString,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function o(e){return -1!==e.indexOf("%")?decodeURIComponent(e):e}function n(e){return encodeURIComponent(e)}},3375:function(e,t,r){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0}),t.hasCookie=t.deleteCookie=t.setCookie=t.getCookie=t.getCookies=void 0;var n=r(1449),a=function(){return"undefined"!=typeof window},s=function(e){return!!e&&"getAll"in e&&"set"in e&&"function"==typeof e.getAll&&"function"==typeof e.set},c=function(e){return!!(null==e?void 0:e.req)&&"cookies"in e.req&&s(null==e?void 0:e.req.cookies)||!!(null==e?void 0:e.res)&&"cookies"in e.res&&s(null==e?void 0:e.res.cookies)||!!(null==e?void 0:e.cookies)&&s(e.cookies())},u=function(e){var t={};return e.getAll().forEach(function(e){var r=e.name,i=e.value;t[r]=i}),t},l=function(e){try{if("string"==typeof e)return e;return JSON.stringify(e)}catch(t){return e}};t.getCookies=function(e){if(c(e)){if(null==e?void 0:e.req)return u(e.req.cookies);if(null==e?void 0:e.cookies)return u(e.cookies())}if(e&&(t=e.req),!a())return t&&t.cookies?t.cookies:t&&t.headers.cookie?(0,n.parse)(t.headers.cookie):{};for(var t,r={},i=document.cookie?document.cookie.split("; "):[],o=0,s=i.length;o<s;o++){var l=i[o].split("="),f=l.slice(1).join("=");r[l[0]]=f}return r},t.getCookie=function(e,r){var i=(0,t.getCookies)(r)[e];if(void 0!==i)return i?i.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):i},t.setCookie=function(e,t,r){if(c(r)){var s,u,f,d=r.req,p=r.res,h=r.cookies,A=o(r,["req","res","cookies"]),m=i({name:e,value:l(t)},A);d&&d.cookies.set(m),p&&p.cookies.set(m),h&&h().set(m);return}if(r){var d=r.req,p=r.res,g=o(r,["req","res"]);u=d,f=p,s=g}var v=(0,n.serialize)(e,l(t),i({path:"/"},s));if(a())document.cookie=v;else if(f&&u){var y=f.getHeader("Set-Cookie");if(Array.isArray(y)||(y=y?[String(y)]:[]),f.setHeader("Set-Cookie",y.concat(v)),u&&u.cookies){var b=u.cookies;""===t?delete b[e]:b[e]=l(t)}if(u&&u.headers&&u.headers.cookie){var b=(0,n.parse)(u.headers.cookie);""===t?delete b[e]:b[e]=l(t),u.headers.cookie=Object.entries(b).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},"")}}},t.deleteCookie=function(e,r){return(0,t.setCookie)(e,"",i(i({},r),{maxAge:-1}))},t.hasCookie=function(e,r){return!!e&&(0,t.getCookies)(r).hasOwnProperty(e)}},7138:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var i=r(231),o=r.n(i)},6463:function(e,t,r){"use strict";var i=r(1169);r.o(i,"usePathname")&&r.d(t,{usePathname:function(){return i.usePathname}}),r.o(i,"useRouter")&&r.d(t,{useRouter:function(){return i.useRouter}})},4843:function(e,t,r){"use strict";r.d(t,{default:function(){return d}});var i=r(7437),o=r(1138),n=r(3798),a=r(8472),s=r(3375),c=r(7138),u=r(6463),l=r(2265),f=r(3580);function d(){let e=(0,s.getCookie)("userData"),[t,r]=(0,l.useState)(""),d=(0,u.useRouter)(),p=(0,u.usePathname)(),[h,A]=(0,l.useState)(""),[m,g]=(0,l.useState)(""),[v,y]=(0,l.useState)(""),[b,x]=(0,l.useState)(!1),[k,w]=(0,l.useState)(""),[C,O]=(0,l.useState)({message:"",phone:""});function S(e){let{name:t,value:r}=e.target;O(e=>({...e,[t]:r}))}return(0,l.useEffect)(()=>{if(e){let t=JSON.parse(e);r(t),A("hidden"),g(t.user.email),y(t.user.name),w(t.user.id)}},[]),(0,i.jsxs)("div",{className:" relative",children:[function(){if(b)return(0,i.jsx)("div",{className:"w-full h-full fixed top-0 right-0 bg-gray-200/80 z-50 flex items-center justify-center",children:(0,i.jsx)(o.Z,{})})}(),(0,i.jsx)("div",{className:"w-full h-full bg-gray-200/60 absolute flex flex-col justify-center items-center ".concat(h),children:(0,i.jsxs)("p",{className:"font-bold text-gray-700 bg-gray-200 p-2 rounded-lg",children:["يجب عليك تسجيل الدخول اولا! ",(0,i.jsx)(c.default,{href:"/user/signin",onClick:()=>{(0,s.setCookie)("PrevUrl",p)},className:"text-red-700 hover:text-red-800",children:"تسجيل"})]})}),(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(!0),(0,a.Z)({url:"".concat(n.BD,"/user/create/contactUs"),method:"post",data:{user_id:k,message:C.message,phone:C.phone},headers:{"Authorization ":"Bearer ".concat(t.access_token)}}).then(()=>(x(!1),d.replace("/"),f.Am.success("تم ارسال طلبك وسيتم الرد عليك في اقرب وقت"))).catch(()=>(x(!1),f.Am.error("حدث خطا ما ! حاول مجددا")))},className:"flex gap-4 max-sm:flex-col",children:[(0,i.jsx)("textarea",{name:"message",onChange:S,required:!0,placeholder:"الرساله",className:"p-3 max-sm:h-[200px] outline-none border-2 focus:border-[3px] border-red-700 w-full"}),(0,i.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,i.jsx)("input",{type:"text",required:!0,value:v,readOnly:!0,placeholder:"الاسم",className:"bg-gray-200 text-gray-500 px-2 h-10 outline-none border-2 focus:border-[3px] border-red-700 "}),(0,i.jsx)("input",{type:"email",required:!0,value:m,readOnly:!0,placeholder:"البريد اللكترونى",className:"bg-gray-200 text-gray-500 px-2 h-10 outline-none border-2 focus:border-[3px] border-red-700 "}),(0,i.jsx)("input",{type:"number",required:!0,name:"phone",onChange:S,placeholder:"الهاتف",className:"px-2 h-10 outline-none border-2 focus:border-[3px] border-red-700 "}),(0,i.jsx)("input",{type:"submit",className:"py-2 font-bold text-white bg-red-700 cursor-pointer"})]})]})]})}},1138:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(7437);function o(){return(0,i.jsx)("div",{className:"loader"})}r(9441)},3798:function(e,t,r){"use strict";r.d(t,{BD:function(){return i},xS:function(){return o}});let i="https://zaha.alwatanynews.com/api",o="https://zaha.alwatanynews.com/public"},9441:function(){},661:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/Logo.337422b5.png",height:284,width:672,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAALVBMVEWFgIDtaWPysa6YmZn88PDxhYGNjY35tbHljYrU19fBtrX64uGfior6zcv///9/yqeIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAI0lEQVR4nGPgZOZiZmBiZ2XgYWBjYOBgZWJg4WZkZORl4QMABiQAegwCmWUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},9405:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/icons8-google-news-94.32db843c.png",height:94,width:94,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVMaXECY9N9xhpZlNwiyxf/YwACZNSKvOMtvPsLctr/AAAhcskSh+MfrA1NbqH/DwCNamg+u+9igmmUyW98y21sst//twBVpbg71yVan+psdp6jrGFtv6Ovy2T+dNE+AAAAGXRSTlMAwsb8FhjR/vt3ErWnut9Ci/z8ifz6Pcu37mS5kwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD1JREFUeJxFy8cBgCAQAMEl3mFWMGDov01/Ov+Bjz+s7T2EXJ5rmQLbrTrrOcIuq8jQQFedqy2QojEx/fkFTwQCCcMBCFQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[269,8472,231,8173,3580,2971,7023,1744],function(){return e(e.s=9076)}),_N_E=e.O()}]);