"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2613],{10338:function(e){class t{constructor(){window.console.error('iTooltip Error: positionX and positionY properties cannot be "center" at the same time.')}}class s{init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.settings=Object.assign({className:"tooltip",indentX:10,indentY:15,positionX:"right",positionY:"bottom"},e),"center"===this.settings.positionX&&"center"===this.settings.positionY)throw new t;this.objects.forEach(e=>{e.getAttribute("title")&&(e.addEventListener("mouseenter",e=>this.createTooltip(e)),e.addEventListener("mouseleave",e=>this.removeTooltip(e)))})}createTooltip(e){let t=e.target;this.tooltip=document.createElement("div"),this.tooltip.classList.add(this.settings.className),this.tooltip.innerHTML=t.getAttribute("title"),this.tooltip.style.position="absolute",this.changePosition(e),t.removeAttribute("title"),document.body.appendChild(this.tooltip),t.addEventListener("mousemove",e=>this.changePosition(e))}removeTooltip(e){e.target.setAttribute("title",this.tooltip.innerHTML),this.tooltip.remove()}changePosition(e){let[t,s]=this.getSizeTooltip(),i=this.getEdges(e),l=window.pageYOffset||document.documentElement.scrollTop,a=e.pageY,c=e.pageX;if(c="right"===this.settings.positionX?i.right<=t?e.clientX-t-this.settings.indentX:e.clientX+this.settings.indentX:"left"===this.settings.positionX?i.left<=t?i.left+this.settings.indentX:e.clientX-t-this.settings.indentX:i.left<=Math.round(t/2)?e.clientX-i.left:e.clientX-Math.round(t/2),"top"===this.settings.positionY)a=i.top<=s?l+e.clientY+this.settings.indentY:e.pageY-s-this.settings.indentY;else if("bottom"===this.settings.positionY)a=i.bottom<s&&i.top>s+this.settings.indentY?e.pageY-s-this.settings.indentY:l+e.clientY+this.settings.indentY;else{let e=Math.round(s/2);i.bottom<=e&&(e=Math.round(s-i.bottom)),i.top<=e&&(e=i.top),a-=e}this.tooltip.style.top="".concat(a,"px"),this.tooltip.style.left="".concat(c,"px")}getSizeTooltip(){let e=this.tooltip.getBoundingClientRect();return[e.right-e.left,e.bottom-e.top]}constructor(e="*"){this.getEdges=e=>{let t=document.documentElement;return{left:e.clientX,right:t.clientWidth-e.clientX,top:e.clientY,bottom:t.clientHeight-e.clientY}},this.objects=document.querySelectorAll("*"!==e?e:"*[title]")}}e.exports=s},970:function(e,t,s){s.r(t),s.d(t,{default:function(){return o}});var i=s(3827),l=s(96547),a=s(1280),c=s(70271);function o(){return(0,a.Z)(),(0,i.jsx)("div",{className:"grid grid-view projects-masonry mt-md-n20 mt-lg-n22 mb-20",children:(0,i.jsx)("div",{className:"row g-8 g-lg-10",children:c.q.map(e=>(0,i.jsx)("div",{className:"project col-md-6 col-xl-4",children:(0,i.jsx)(l.id,{...e})},e.id))})})}},34058:function(e,t,s){s.r(t),s.d(t,{default:function(){return r}});var i=s(3827),l=s(75504),a=s(63608),c=s(29664);let o=[{id:1,image:"pf1",title:"Fringilla Nullam",category:"drinks events"},{id:2,image:"pf2",title:"Ridiculus Parturient",category:"events"},{id:3,image:"pf3",title:"Ornare Ipsum",category:"pastries events"},{id:4,image:"pf4",title:"Nullam Mollis",category:"events"},{id:5,image:"pf5",title:"Euismod Risus",category:"pastries events"},{id:6,image:"pf6",title:"Ridiculus Tristique",category:"foods"},{id:7,image:"pf7",title:"Sollicitudin Pharetra",category:"foods drinks"},{id:8,image:"pf8",title:"Tristique Venenatis",category:"pastries"},{id:9,image:"pf9",title:"Cursus Fusce",category:"events"},{id:10,image:"pf10",title:"Consectetur Malesuada",category:"foods"},{id:11,image:"pf11",title:"Ultricies Aenean",category:"drinks"},{id:12,image:"pf12",title:"Pellentesque Commodo",category:"foods"},{id:13,image:"pf13",title:"Ultricies Aenean",category:"drinks"}];function r(){(0,c.Z)();let{filterKey:e,handleFilterKeyChange:t}=(0,a.Z)();return(0,i.jsx)("section",{id:"portfolio",children:(0,i.jsx)("div",{className:"wrapper bg-gray",children:(0,i.jsxs)("div",{className:"container py-15 py-md-17 text-center",children:[(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-lg-10 col-xl-8 col-xxl-7 mx-auto mb-8",children:[(0,i.jsx)("h2",{className:"display-5 mb-3",children:"My Selected Shots"}),(0,i.jsx)("p",{className:"lead fs-lg",children:"Photography is my passion and I love to turn ideas into beautiful things."})]})}),(0,i.jsxs)("div",{className:"grid grid-view projects-masonry",children:[(0,i.jsx)("div",{className:"isotope-filter filter mb-10",children:(0,i.jsx)("ul",{children:[{id:1,title:"All",value:"*"},{id:2,title:"Foods",value:".foods"},{id:3,title:"Drinks",value:".drinks"},{id:4,title:"Events",value:".events"},{id:5,title:"Pastries",value:".pastries"}].map(s=>{let{id:a,title:c,value:o}=s;return(0,i.jsx)("li",{children:(0,i.jsx)("a",{onClick:t(o),className:(0,l.Z)({"filter-item":!0,active:e===o}),children:c})},a)})})}),(0,i.jsx)("div",{className:"row gx-md-6 gy-6 isotope",children:o.map(e=>{let{category:t,id:s,image:l,title:a}=e;return(0,i.jsx)("div",{className:"project item col-md-6 col-xl-4 ".concat(t),children:(0,i.jsxs)("figure",{className:"overlay overlay-1 rounded",children:[(0,i.jsxs)("a",{href:"/img/photos/".concat(l,"-full.jpg"),"data-glightbox":!0,"data-gallery":"shots-group",children:[(0,i.jsx)("img",{src:"/img/photos/".concat(l,".jpg"),alt:a}),(0,i.jsx)("span",{className:"bg"})]}),(0,i.jsx)("figcaption",{children:(0,i.jsx)("h5",{className:"from-top mb-0",children:a})})]})},s)})})]})]})})})}},98004:function(e,t,s){s.r(t),s.d(t,{default:function(){return a}});var i=s(3827),l=s(43710);function a(){return(0,i.jsx)("section",{className:"wrapper bg-light wrapper-border",children:(0,i.jsxs)("div",{className:"container py-14 pt-md-18 pb-md-16",children:[(0,i.jsxs)("div",{className:"row align-items-center mb-10",children:[(0,i.jsxs)("div",{className:"col-md-8 col-lg-9 col-xl-8 col-xxl-7 pe-xl-20",children:[(0,i.jsx)("h2",{className:"display-4 mb-3",children:"Latest Projects"}),(0,i.jsx)("p",{className:"lead fs-20 mb-0",children:"Check out some of my latest projects with creative ideas."})]}),(0,i.jsx)("div",{className:"col-md-4 col-lg-3 ms-md-auto text-md-end mt-5 mt-md-0",children:(0,i.jsx)(l.Z,{title:"See All Projects",href:"#",className:"btn btn-outline-primary rounded-pill mb-0"})})]}),(0,i.jsx)("div",{className:"card bg-soft-violet mb-10",children:(0,i.jsx)("div",{className:"card-body p-12 pb-0",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-lg-4 pb-12 align-self-center",children:[(0,i.jsx)("div",{className:"post-category mb-3 text-violet",children:"Web Design"}),(0,i.jsx)("h3",{className:"h1 post-title mb-3",children:"Snowlake Theme"}),(0,i.jsx)("p",{children:"Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus."}),(0,i.jsx)(l.Z,{title:"See Project",href:"#",className:"more hover link-violet"})]}),(0,i.jsx)("div",{className:"col-lg-7 offset-lg-1 align-self-end",children:(0,i.jsx)("figure",{children:(0,i.jsx)("img",{className:"img-fluid",src:"/img/photos/f1.png",srcSet:"/img/photos/f1@2x.png 2x",alt:""})})})]})})}),(0,i.jsx)("div",{className:"card bg-soft-blue mb-10",children:(0,i.jsx)("div",{className:"card-body p-12",children:(0,i.jsxs)("div",{className:"row gy-10 align-items-center",children:[(0,i.jsxs)("div",{className:"col-lg-4 order-lg-2 offset-lg-1",children:[(0,i.jsx)("div",{className:"post-category mb-3 text-blue",children:"Mobile Design"}),(0,i.jsx)("h3",{className:"h1 post-title mb-3",children:"Budget App"}),(0,i.jsx)("p",{children:"Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus."}),(0,i.jsx)(l.Z,{title:"See Project",href:"#",className:"more hover link-blue"})]}),(0,i.jsx)("div",{className:"col-lg-7",children:(0,i.jsx)("figure",{children:(0,i.jsx)("img",{className:"img-fluid",src:"/img/photos/f2.png",srcSet:"/img/photos/f2@2x.png 2x",alt:""})})})]})})}),(0,i.jsxs)("div",{className:"row gx-md-8 gx-xl-10",children:[(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"card bg-soft-leaf mb-10",children:[(0,i.jsxs)("div",{className:"card-body p-12 pb-0",children:[(0,i.jsx)("div",{className:"post-category mb-3 text-leaf",children:"Web Design"}),(0,i.jsx)("h3",{className:"h1 post-title mb-3",children:"Missio Theme"}),(0,i.jsx)("p",{children:"Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque id ligula felis."}),(0,i.jsx)(l.Z,{title:"See Project",href:"#",className:"more hover link-leaf mb-8"})]}),(0,i.jsx)("img",{className:"card-img-bottom",src:"/img/photos/f3.png",srcSet:"/img/photos/f3@2x.png 2x",alt:""})]})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"card bg-soft-pink",children:[(0,i.jsxs)("div",{className:"card-body p-12 pb-0",children:[(0,i.jsx)("div",{className:"post-category mb-3 text-pink",children:"Mobile Design"}),(0,i.jsx)("h3",{className:"h1 post-title mb-3",children:"Storage App"}),(0,i.jsx)("p",{children:"Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper."}),(0,i.jsx)(l.Z,{title:"See Project",href:"#",className:"more hover link-pink mb-8"})]}),(0,i.jsx)("img",{className:"card-img-bottom",src:"/img/photos/f4.png",srcSet:"/img/photos/f4@2x.png 2x",alt:""})]})})]})]})})}},18290:function(e,t,s){s.d(t,{Z:function(){return a}});var i=s(3827),l=s(20703);function a(e){let{className:t,src:s,width:a,height:c,...o}=e;return(0,i.jsx)("figure",{className:t,...o,children:(0,i.jsx)(l.default,{src:s,alt:"demo",width:a,height:c,className:"w-100 h-auto"})})}},8994:function(e,t,s){s.r(t),s.d(t,{default:function(){return o}});var i=s(3827),l=s(20703),a=s(43710),c=s(29664);function o(e){let{link:t,title:s,image:o,category:r,fullImage:n}=e;return(0,c.Z)(),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("figure",{className:"rounded mb-6",children:[(0,i.jsx)(l.default,{width:410,height:440,src:o,alt:s,className:"w-100 h-auto"}),(0,i.jsx)("a",{className:"item-link",href:n,"data-glightbox":!0,"data-gallery":"projects-group",children:(0,i.jsx)("i",{className:"uil uil-focus-add"})})]}),(0,i.jsx)("div",{className:"project-details d-flex justify-content-center flex-column",children:(0,i.jsxs)("div",{className:"post-header",children:[(0,i.jsx)("h2",{className:"post-title h3",children:(0,i.jsx)(a.Z,{href:t,title:s,className:"link-dark"})}),(0,i.jsx)("div",{className:"post-category text-ash",children:r})]})})]})}},96547:function(e,t,s){s.d(t,{qu:function(){return c},Vy:function(){return r},$3:function(){return n.default},id:function(){return m}});var i=s(3827),l=s(20703),a=s(43710);function c(e){let{link:t,title:s,category:c,description:o,images:r}=e;return(0,i.jsx)("div",{className:"project grid grid-view",children:(0,i.jsxs)("div",{className:"row g-6 isotope",children:[(0,i.jsx)("div",{className:"item col-md-6",children:(0,i.jsxs)("div",{className:"project-details d-flex justify-content-center flex-column",children:[(0,i.jsxs)("div",{className:"post-header",children:[(0,i.jsx)("div",{className:"post-category text-red mb-3",children:c}),(0,i.jsx)("h2",{className:"post-title mb-3",children:s})]}),(0,i.jsxs)("div",{className:"post-content",children:[(0,i.jsx)("p",{children:o}),(0,i.jsx)(a.Z,{title:"See Project",href:t,className:"more hover link-red"})]})]})}),r.map((e,t)=>{let{url:a,height:c,width:o,tooltip:r,full:n}=e;return(0,i.jsx)("div",{className:"item col-md-6",children:(0,i.jsx)("figure",{className:"itooltip itooltip-light hover-scale rounded",title:r,children:(0,i.jsx)("a",{href:n,"data-glightbox":"title: ".concat(r),"data-gallery":"project-2",children:(0,i.jsx)(l.default,{alt:s,src:a,width:o,height:c,className:"w-100 h-auto"})})})},a+t)})]})})}var o=s(18290);function r(e){let{link:t,title:s,category:l,description:c,image:r,imageClassName:n,cardStyle:d,detailsStyle:m,color:h}=e;return(0,i.jsx)("div",{className:"project item",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)(o.Z,{width:r.width,height:r.height,src:r.url,className:n}),(0,i.jsx)("div",{className:"project-details d-flex justify-content-center flex-column",style:m,children:(0,i.jsx)("div",{className:"card shadow rellax","data-rellax-xs-speed":"0","data-rellax-mobile-speed":"0",style:d,children:(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsxs)("div",{className:"post-header",children:[(0,i.jsx)("div",{className:"post-category text-line ".concat(h?"text-".concat(h):"text-purple"," mb-3"),children:l}),(0,i.jsx)("h2",{className:"post-title mb-3",children:s})]}),(0,i.jsxs)("div",{className:"post-content",children:[(0,i.jsx)("p",{children:c}),(0,i.jsx)(a.Z,{title:"See Project",href:t,className:"more hover ".concat(h?"link-".concat(h):"link-purple")})]})]})})})]})})}var n=s(8994),d=s(8792);function m(e){let{image:t,title:s,color:a,category:c}=e;return(0,i.jsxs)("div",{className:"card shadow-lg",children:[(0,i.jsx)("figure",{className:"card-img-top",title:"Click to see the project",children:(0,i.jsx)(d.default,{href:"#",children:(0,i.jsx)(l.default,{src:t,width:1300,height:1132,alt:""})})}),(0,i.jsx)("div",{className:"card-body p-7",children:(0,i.jsxs)("div",{className:"post-header",children:[(0,i.jsx)("div",{className:"post-category text-line mb-2 text-".concat(a),children:c}),(0,i.jsx)("h3",{className:"mb-0",children:s})]})})]})}},1280:function(e,t,s){s.d(t,{Z:function(){return l}});var i=s(64090);function l(){(0,i.useEffect)(()=>{!async function(){new(s(10338))(".itooltip").init({indentX:15,indentY:15,positionX:"right",positionY:"bottom",className:"itooltip-inner"})}()},[])}}}]);