import{j as e}from"./vendor-Pe4HqKX7.js";function s({card:s,cardBg:r}){const{title:a,description:t,link:i}=s;return e.jsxs("div",{className:"card",style:{background:`url(${r}) no-repeat center center / cover`},children:[e.jsx("h3",{className:"card__title",children:a}),e.jsx("p",{className:"card__description",children:t}),e.jsx("a",{href:i,className:"card__link",children:"Learn more"})]})}const r=[{id:1,title:"Move the borders of reality!",description:"Go on a space adventure",link:"#"},{id:2,title:"Space is not just stars and planets",description:"it is a majestic journey to",link:"#"},{id:3,title:"For those who dream of stars",description:"Our offer: make your dream come true",link:"#"},{id:4,title:"Fulfill your fantastic dreams",description:"Space has never been so close",link:"#"}],a=["/assets/card_bg_1-DDhvfoRq.webp","/assets/card_bg_2-DXFkFpga.webp","/assets/card_bg_3-xu-UMFuR.webp","/assets/card_bg_4-BbHMQYo3.webp"];function t(){return e.jsxs("section",{className:"offers",children:[e.jsx("h2",{children:"Offers"}),e.jsx("div",{className:"offers__list",children:0===r.length?e.jsx("h3",{children:"Loading..."}):r.map((({id:r,...t})=>e.jsx(s,{card:t,cardBg:a[r-1]},r)))})]})}export{t as default};
