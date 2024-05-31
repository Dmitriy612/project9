(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4207:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>_,pages:()=>d,routeModule:()=>m,tree:()=>o});var s=a(482),r=a(9108),i=a(2563),n=a.n(i),l=a(8300),c={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>l[e]);a.d(t,c);let o=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,5983)),"/home/student/project9/front/app/page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,3910)),"/home/student/project9/front/app/layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/student/project9/front/app/page.js"],_="/page",p={require:a,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},3415:(e,t,a)=>{Promise.resolve().then(a.bind(a,3952))},5858:(e,t,a)=>{"use strict";a.d(t,{S:()=>i});var s=a(3729),r=a(6439);let i=(e,t)=>{let[a,i]=(0,s.useState)(null);return(0,s.useEffect)(()=>{(async function(){i(await (0,r.BJ)(e,t))})()},[]),a}},290:(e,t,a)=>{"use strict";a.d(t,{r:()=>g});var s=a(5344),r=a(1217),i=a.n(r),n=a(783),l=a.n(n),c=a(7246),o=a.n(c);let d=e=>(0,s.jsxs)("article",{className:o().card,children:[s.jsx("img",{src:e.image,alt:"",className:o().card__image}),(0,s.jsxs)("div",{className:o()["card__content-block"],children:[s.jsx("h3",{className:o().card__title,children:e.title}),s.jsx("p",{className:o().card__description,children:e.description}),(0,s.jsxs)("div",{className:o()["card__info-container"],children:[(0,s.jsxs)("p",{className:o().card__author,children:["Автор:"," ",s.jsx("span",{className:o().card__accent,children:e.developer})]}),(0,s.jsxs)("p",{className:o().card__votes,children:["Голосов на сайте:",s.jsx("span",{className:o().card__accent,children:e.users.length})]})]})]})]}),_=e=>s.jsx("ul",{className:i()["cards-list"],children:e.data.map(e=>s.jsx("li",{className:i()["cards-list__item"],children:s.jsx(l(),{href:`/games/${e.id}`,className:i()["card-list__link"],children:s.jsx(d,{...e})})},e.id))});var p=a(3732),m=a(3583);a(3754),a(3141);var u=a(3729),x=a(5563),h=a.n(x);let j=e=>((0,u.useEffect)(()=>{let e={loop:!1,spaceBetween:10,allowTouchMove:!0,slidesPerView:1,autoplay:{enabled:!1},pagination:{el:".swiper-pagination",type:"fraction",enabled:!0,clickable:!0},breakpoints:{450:{loop:!0,spaceBetween:20,allowTouchMove:!1,slidesPerView:"auto",speed:6500,autoplay:{enabled:!0,delay:0},pagination:{enabled:!1}}},modules:[m.pt,m.tl]};new p.Z(".swiper",e)},[]),(0,s.jsxs)("div",{className:`swiper ${h().slider}`,children:[s.jsx("ul",{className:`swiper-wrapper ${h()["slider-wrapper"]}`,children:e.data.map((e,t)=>s.jsx("li",{className:`swiper-slide ${h().slide}`,children:s.jsx(l(),{href:`/games/${e.id}`,children:s.jsx(d,{...e})})},t))}),s.jsx("div",{className:`swiper-pagination ${h().pagination}`})]})),g=e=>(0,s.jsxs)("section",{className:i()["list-section"],children:[s.jsx("h2",{className:i()["list-section__title"],id:e.id,children:e.title}),"slider"===e.type?s.jsx(j,{data:e.data}):s.jsx(_,{data:e.data})]})},239:(e,t,a)=>{"use strict";a.d(t,{p:()=>r});var s=a(5344);let r=()=>s.jsx("div",{style:{aspectRatio:"16/9",display:"grid",placeItems:"center"},className:"preloader",children:(0,s.jsxs)("svg",{style:{width:"10vw"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",children:[s.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",r:"15",cx:"35",cy:"100",children:s.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:"0"})}),s.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".8",r:"15",cx:"35",cy:"100",children:s.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:"0.05"})}),s.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".6",r:"15",cx:"35",cy:"100",children:s.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:".1"})}),s.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".4",r:"15",cx:"35",cy:"100",children:s.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:".15"})}),s.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".2",r:"15",cx:"35",cy:"100",children:s.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:".2"})})]})})},3952:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>x});var s=a(5344),r=a(3196),i=a(3341),n=a.n(i);let l=()=>(0,s.jsxs)("section",{className:n().banner,children:[(0,s.jsxs)("div",{className:n().banner__description,children:[s.jsx("h1",{className:n().banner__title,children:"Портал инди-игр от\xa0студентов Яндекс Практикума"}),s.jsx("div",{className:n()["banner__text-block"],children:s.jsx("p",{className:n().banner__text,children:"Студенты курсов разрабатывают свои игры на Unity, здесь мы их публикуем. Вы можете играть прямо на сайте. А если у вас есть аккаунт пользователя — получаете возможность голосовать за игры."})}),s.jsx("a",{href:"#popular",className:`button ${n().banner__link}`,children:"Смотреть игры"})]}),s.jsx("img",{src:"/images/banner-illustration.jpg",alt:"Рука, утопленная в желтом фоне",className:n().banner__image})]});var c=a(290),o=a(3729),d=a(9367),_=a.n(d);let p=()=>{let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{let a;return e&&(a=setTimeout(()=>{t(!1)},5e3)),()=>{clearTimeout(a)}},[e]),(0,s.jsxs)("section",{className:_().promo,children:[(0,s.jsxs)("div",{className:_()["promo__description-block"],children:[s.jsx("h2",{className:_().promo__title,children:"Твой промокод"}),s.jsx("p",{className:_().promo__description,children:"Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!"}),s.jsx("button",{className:`button ${_().promo__button}`,onClick:()=>{e||t(!0)},children:e?s.jsx("span",{className:_()["promo-code"],children:"WEBTEENS10"}):"Получить код"})]}),s.jsx("img",{src:"/images/promo-illustration.svg",alt:"Собака",className:_().promo__image})]})};var m=a(5858),u=a(239);function x(){let e=(0,m.S)(r.H.games,"popular"),t=(0,m.S)(r.H.games,"new");return(0,s.jsxs)("main",{className:"main",children:[s.jsx(l,{}),e&&t?(0,s.jsxs)(s.Fragment,{children:[s.jsx(c.r,{id:"popular",title:"Популярные",data:e,type:"slider"}),s.jsx(c.r,{id:"new",title:"Новинки",data:t,type:"slider"})]}):s.jsx(u.p,{}),s.jsx(p,{})]})}},3341:e=>{e.exports={banner:"Banner_banner__PUe_2",banner__title:"Banner_banner__title__MP_Rt","banner__text-block":"Banner_banner__text-block__7jHlu",banner__link:"Banner_banner__link__Z0lMZ",banner__image:"Banner_banner__image__UxOLs"}},7246:e=>{e.exports={card:"Card_card__CWDle",card__image:"Card_card__image__4mueK","card__content-block":"Card_card__content-block__wBJdj",card__title:"Card_card__title__GTs84",card__description:"Card_card__description__D5I82","card__info-container":"Card_card__info-container__4sDHi",card__author:"Card_card__author__u6zAO",card__accent:"Card_card__accent__yghaH",card__votes:"Card_card__votes__P29Ky"}},1217:e=>{e.exports={"list-section":"CardsListSection_list-section__MeWSR","list-section__title":"CardsListSection_list-section__title__IGZpD","cards-list":"CardsListSection_cards-list__2oXa_","card-list__link":"CardsListSection_card-list__link__yht_d"}},5563:e=>{e.exports={slider:"CardsSlider_slider__DGH8R",slide:"CardsSlider_slide__sq162","slider-wrapper":"CardsSlider_slider-wrapper__gP7pQ",pagination:"CardsSlider_pagination__wnCz1"}},9367:e=>{e.exports={promo:"Promo_promo__tR27v",promo__title:"Promo_promo__title__q2Ekr",promo__description:"Promo_promo__description__cgn7e",promo__image:"Promo_promo__image__X0h3c",promo__button:"Promo_promo__button__W82nm","promo-code":"Promo_promo-code__7c8iH"}},5983:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>i,__esModule:()=>r,default:()=>n});let s=(0,a(6843).createProxy)(String.raw`/home/student/project9/front/app/page.js`),{__esModule:r,$$typeof:i}=s,n=s.default},7481:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var s=a(337);let r=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[638,359,337,221,168],()=>a(4207));module.exports=s})();