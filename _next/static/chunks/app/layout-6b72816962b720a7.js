(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{28494:function(s,e,t){Promise.resolve().then(t.t.bind(t,86978,23)),Promise.resolve().then(t.t.bind(t,15314,23)),Promise.resolve().then(t.t.bind(t,1734,23)),Promise.resolve().then(t.t.bind(t,87644,23)),Promise.resolve().then(t.t.bind(t,70501,23)),Promise.resolve().then(t.t.bind(t,14132,23)),Promise.resolve().then(t.t.bind(t,98661,23)),Promise.resolve().then(t.t.bind(t,4491,23)),Promise.resolve().then(t.t.bind(t,86091,23)),Promise.resolve().then(t.t.bind(t,63385,23)),Promise.resolve().then(t.bind(t,81427)),Promise.resolve().then(t.t.bind(t,77675,23)),Promise.resolve().then(t.bind(t,54036)),Promise.resolve().then(t.t.bind(t,66416,23)),Promise.resolve().then(t.bind(t,78831))},47907:function(s,e,t){"use strict";var c=t(15313);t.o(c,"usePathname")&&t.d(e,{usePathname:function(){return c.usePathname}})},81427:function(s,e,t){"use strict";t.r(e),t.d(e,{default:function(){return r}});var c=t(3827),o=t(64090),n=t(47907);function r(s){let{children:e}=s,r=(0,n.usePathname)(),[a,l]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{(async()=>{let s=(await t.e(7615).then(t.bind(t,27615))).default;s.init({interval:-400,duration:700,percentage:.8}),s.update()})()},[r]),(0,o.useEffect)(()=>{l(!1)},[]),a?(0,c.jsx)("div",{className:"page-loader"}):(0,c.jsx)(c.Fragment,{children:e})}},54036:function(s,e,t){"use strict";t.r(e),t.d(e,{default:function(){return n}});var c=t(3827),o=t(64090);function n(){let s=(0,o.useRef)(null),e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(e.current&&s.current){let t=e.current,c=s.current,o=t.getTotalLength();t.style.transition=t.style.transition="none",t.style.strokeDasharray=o+" "+o,t.style.strokeDashoffset=o.toString(),t.getBoundingClientRect(),t.style.transition=t.style.transition="stroke-dashoffset 10ms linear",window.addEventListener("scroll",function(){let s=document.body.scrollTop||document.documentElement.scrollTop,e=document.documentElement.scrollHeight-document.documentElement.clientHeight;t.style.strokeDashoffset=(o-s*o/e).toString(),(document.body.scrollTop||document.documentElement.scrollTop)>=50?c.classList.add("active-progress"):c.classList.remove("active-progress")}),c.addEventListener("click",function(s){s.preventDefault(),window.scroll({top:0,left:0,behavior:"smooth"})})}},[]),(0,c.jsx)("div",{className:"progress-wrap mb-10",ref:s,children:(0,c.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,c.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",ref:e})})})}},78831:function(s,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var c=t(3827),o=t(47907),n=t(64090),r=t(57079),a=t.n(r);let l=(s,e)=>{var t,c,o,n;if(null===(t=document.getElementById("custom-theme"))||void 0===t||t.remove(),null===(c=document.getElementById("custom-font"))||void 0===c||c.remove(),s){let e=document.createElement("link");e.setAttribute("href",s),e.setAttribute("rel","stylesheet"),e.setAttribute("id","custom-theme"),null===(o=document.querySelector("head"))||void 0===o||o.appendChild(e)}if(e){document.body.className="";let s=document.createElement("link");s.setAttribute("href",e),s.setAttribute("rel","preload"),s.setAttribute("as","style"),s.setAttribute("onload","this.rel='stylesheet'"),s.setAttribute("id","custom-font"),null===(n=document.querySelector("head"))||void 0===n||n.appendChild(s)}else document.body.className=a().className};var i=s=>{switch(s){case"/":case"/demo-15":l("/css/colors/red.css","/css/fonts/montserrat.css");break;case"/demo-1":l("/css/colors/yellow.css","/css/fonts/thicccboi.css");break;case"/demo-2":case"/demo-9":l(null,"/css/fonts/dm.css");break;case"/demo-3":case"/demo-6":l("/css/colors/aqua.css","/css/fonts/thicccboi.css");break;case"/demo-4":l("/css/colors/violet.css","/css/fonts/dm.css");break;case"/demo-7":case"/demo-34":l("/css/colors/purple.css","/css/fonts/thicccboi.css");break;case"/demo-8":l("/css/colors/aqua.css","/css/fonts/dm.css");break;case"/demo-10":l("/css/colors/orange.css","/css/fonts/thicccboi.css");break;case"/demo-11":case"/demo-13":l("/css/colors/purple.css",null);break;case"/demo-12":l("/css/colors/orange.css",null);break;case"/demo-14":l("/css/colors/violet.css","/css/fonts/thicccboi.css");break;case"/demo-16":l("/css/colors/pink.css",null);break;case"/demo-17":case"/demo-27":l("/css/colors/navy.css",null);break;case"/demo-18":case"/demo-26":l("/css/colors/grape.css","/css/fonts/urbanist.css");break;case"/demo-19":l("/css/colors/violet.css","/css/fonts/urbanist.css");break;case"/demo-20":case"/demo-22":l("/css/colors/purple.css","/css/fonts/urbanist.css");break;case"/demo-21":l("/css/colors/sky.css","/css/fonts/urbanist.css");break;case"/demo-23":l("/css/colors/leaf.css","/css/fonts/urbanist.css");break;case"/demo-24":l("/css/colors/yellow.css","/css/fonts/urbanist.css");break;case"/demo-25":l("/css/colors/pink.css","/css/fonts/urbanist.css");break;case"/demo-28":l("/css/colors/purple.css","/css/fonts/space.css");break;case"/demo-29":case"/demo-30":l("/css/colors/grape.css","/css/fonts/space.css");break;case"/demo-31":case"/demo-32":l(null,"/css/fonts/space.css");break;case"/demo-33":l("/css/colors/navy.css","/css/fonts/space.css");break;default:l("/css/colors/red.css","/css/fonts/montserrat.css");return}};function u(s){let{children:e}=s,t=(0,o.usePathname)(),r=()=>{let s=document.querySelector(".page-loader");s&&s.remove()};return(0,n.useEffect)(()=>{let s;return i(t),s=setTimeout(()=>r(),1e3),()=>clearTimeout(s)},[t]),(0,c.jsx)(c.Fragment,{children:e})}},4491:function(){},98661:function(){},15314:function(){},1734:function(){},87644:function(){},70501:function(){},14132:function(){},86978:function(){},63385:function(){},66416:function(){},77675:function(){},86091:function(s){s.exports={style:{fontFamily:"'__Manrope_da1155', '__Manrope_Fallback_da1155'",fontStyle:"normal"},className:"__className_da1155"}},57079:function(s){s.exports={style:{fontFamily:"'__Manrope_da1155', '__Manrope_Fallback_da1155'",fontStyle:"normal"},className:"__className_da1155"}}},function(s){s.O(0,[8598,2971,8069,1744],function(){return s(s.s=28494)}),_N_E=s.O()}]);