(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i(1),a=i(27),c=i.n(a);var r=function(){return Object(s.jsxs)("div",{className:"nav",children:[Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("img",{className:"logo",src:"imgs/logo.png",alt:"mellow logo"})}),Object(s.jsx)("input",{type:"checkbox",id:"menu"}),Object(s.jsx)("label",{for:"menu",children:"\u2630"}),Object(s.jsx)("div",{className:"nav-control",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#recipes",children:"Recipes"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"Go Green"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"Pricing"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"How it works"})})]})}),Object(s.jsx)("div",{className:"userPicBorder",children:Object(s.jsx)("div",{className:"userPic",children:Object(s.jsx)("img",{className:"picture",src:"https://www.hypeness.com.br/1/2018/08/edit_florescer1.jpg",alt:""})})})]})};var o=function(e){return Object(s.jsxs)("li",{children:[e.benefitText,Object(s.jsx)("span",{className:"benefit-dash",children:"-"})]})};var l=function(e){var t="card-".concat(e.number," cardImgContainer");return Object(s.jsxs)("div",{className:"planCard",children:[Object(s.jsxs)("h2",{children:["Plan ",e.number]}),Object(s.jsx)("p",{children:"7 Days trial"}),Object(s.jsx)("div",{className:t,children:Object(s.jsx)("img",{className:"cardImg",src:e.imgURL,alt:"food"})}),Object(s.jsx)("ul",{children:e.benefits.map((function(e,t){return Object(s.jsx)(o,{benefitText:e},t)}))}),Object(s.jsx)("button",{className:"btn-try",children:"LET'S TRY"})]})},d=[{id:1,imgURL:"./imgs/panela.png",benefits:["Users","Save Recipes","Manage Purchase","Compare Price","New recipes every week"]},{id:2,imgURL:"./imgs/abacate.png",benefits:["Users","Save Recipes","Manage Purchase","Compare Price","New recipes every week"]},{id:3,imgURL:"./imgs/tigela.png",benefits:["Users","Save Recipes","Manage Purchase","Compare Price","New recipes every week"]}];var u=function(){return Object(s.jsxs)("div",{className:"heading",id:"heading",children:[Object(s.jsxs)("div",{className:"vertical-images",children:[Object(s.jsx)("img",{className:"img-food-1",src:"./imgs/onion.png",alt:"food"}),Object(s.jsx)("img",{className:"img-food-2",src:"./imgs/bowl.png",alt:"food"}),Object(s.jsx)("img",{className:"img-food-3",src:"./imgs/spoons.png",alt:"food"}),Object(s.jsx)("img",{className:"img-food-4",src:"./imgs/bread.png",alt:"food"}),Object(s.jsx)("img",{className:"img-food-5",src:"./imgs/bowl-cream.png",alt:"food"})]}),Object(s.jsxs)("div",{className:"heading-content",children:[Object(s.jsxs)("div",{className:"heading-text-box",children:[Object(s.jsx)("h1",{children:"Your subscription has expired..."}),Object(s.jsx)("div",{className:"heading-text",children:Object(s.jsx)("p",{className:"text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a interdum urna, et sagittis libero. In eros nunc, congue eget elit at"})})]}),Object(s.jsx)("div",{className:"cards",children:d.map((function(e){return Object(s.jsx)(l,{number:e.id>9?e.id:"0"+e.id,imgURL:e.imgURL,benefits:e.benefits},e.id)}))})]})]})},m=i(6),j=i(23),p=i(22),b=i(11);function h(){var e=Object(b.a)(["\n    transform: translateX(-","rem);\n    transition: transform ease-out ","s;\n    width: ","rem;\n    display: flex;\n"]);return h=function(){return e},e}var g=i(28).a.div(h(),(function(e){return e.translate}),(function(e){return e.transition}),(function(e){return e.customWidth*e.numberSlides})),x=i(12),O=i(7),f=i.p+"static/media/right-arrow-transl.6e5502ef.svg",v=i.p+"static/media/left-arrow.caad36af.svg";function N(){var e=Object(b.a)(["\n                display: flex;\n                position: absolute;\n                top: 50%;\n                ",";\n                height: 50px;\n                width: 50px;\n                justify-content: center;\n                cursor: pointer;\n                align-items: center;\n                transition: transform ease-in 0.1s;\n                &:hover {\n                    transform: scale(1.1);\n                }\n                img {\n                    transform: translateX(","px);\n                    &:focus {\n                    outline: 0;\n                    }\n                }\n            "]);return N=function(){return e},e}var w=function(e){var t=e.direction,i=e.handleClick;return Object(x.a)("div",{onClick:i,css:Object(O.a)(N(),"right"===t?"right: 25px":"left: 25px","left"===t?"-2":"2"),children:Object(x.a)("img",{className:"arrow-img",src:"right"===t?f:v,alt:"food"})})},S=i.p+"static/media/right-arrow.8b850ab7.svg";function C(){var e=Object(b.a)(["\n                display: flex;\n                position: absolute;\n                top: 50%;\n                ",";\n                height: 50px;\n                width: 50px;\n                justify-content: center;\n                background:  rgb(0, 234, 135);\n                border-radius: 50%;\n                cursor: pointer;\n                align-items: center;\n                transition: transform ease-in 0.1s;\n                &:hover {\n                    transform: scale(1.1);\n                }\n                img {\n                    transform: translateX(","px);\n                    &:focus {\n                    outline: 0;\n                    }\n                }\n            "]);return C=function(){return e},e}var k=function(e){var t=e.direction,i=e.handleClick;return Object(x.a)("div",{onClick:i,css:Object(O.a)(C(),"right"===t?"right: 25px":"left: 25px","left"===t?"-2":"2"),children:Object(x.a)("img",{className:"arrow-img",src:"right"===t?S:v,alt:"food"})})};var q=function(e){var t=e.title,i=e.content;return Object(s.jsxs)("div",{className:"gg-slide-content",children:[Object(s.jsx)("h1",{children:t}),Object(s.jsx)("p",{children:i})]})};var y=function(e){var t=e.content;return Object(s.jsx)("div",{className:"slide-content",style:{backgroundImage:"url(".concat(t,")")}})};var R=function(e){var t=e.title,i=e.content,n=e.imgURL;return Object(s.jsxs)("div",{className:"hit-slide-content",children:[Object(s.jsx)("div",{className:"hit-img-container",children:Object(s.jsx)("img",{src:n,alt:"ovocado"})}),Object(s.jsxs)("div",{className:"hit-slide-text",children:[Object(s.jsx)("h1",{children:t}),Object(s.jsx)("p",{children:i})]})]})},U=[{id:0,title:"Go Green",content:"Culpa qui perspiciatisundnapa sit voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus errortus error sit volup im id est laborum. Sed ut perspiciatisunde omnis iste natus error sit voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatisunde omnis iste natus error sit voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatisunde omnis iste natus error sit voluptartem "},{id:1,title:"About us",content:"Culpa qui offiut perspiciatm Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatisunde omnis iste natus error sit voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatisunde omnis iste natus error sit voluptartem "},{id:2,title:"Another Example",content:"Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste it voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptartem "}],L=["https://images.immediate.co.uk/production/volatile/sites/30/2019/12/tandoori-trout-bb9fe6c.jpg?quality=90&resize=960,872","https://i.pinimg.com/736x/15/93/5d/15935d5e5e1c28c3d7bea2bc0fcd483f.jpg","https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1333&h=1777&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2016%2F11%2Fhealthy-recipes-2017-2346701_qfshe_4810-1.jpg","https://img.jamieoliver.com/jamieoliver/recipe-database/92507799.jpg?tr=w-330","https://hips.hearstapps.com/rbk.h-cdn.co/assets/16/02/2560x3723/rbk020116hungrygirl_001.jpg?resize=480:*","https://media.self.com/photos/5efcca30f694d6c7c0c4bbea/3:4/w_914,h_1219,c_limit/Spinach-Garlic-Parmesan-Orzo.jpg","https://cooknourishbliss.com/wp-content/uploads/2019/08/Healthy_breakfast_tacos.jpg"],I=[{id:0,imgURL:"./imgs/ovocados.jpg",title:"How it works",content:"Culpa qui perspiciatisundnapa sit voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus errortus error sit volup im id est laborum. Sed ut perspiciatisunde omnis iste natus error sit voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatisunde omnis iste natus error sit voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatisunde omnis iste natus error sit voluptartem "},{id:1,imgURL:"./imgs/ovocado_pink.jpg",title:"A title",content:"Culpa qui offiut perspiciatm Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatisunde omnis iste natus error sit voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatisunde omnis iste natus error sit voluptartem "},{id:2,imgURL:"./imgs/ovocados.jpg",title:"Another Example",content:"Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste it voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptartemCulpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptartem "}];var P=function(e){var t=Object(n.useState)({activeSlide:0,translate:0,transition:.45}),i=Object(p.a)(t,2),a=i[0],c=i[1],r=a.activeSlide,o=a.translate,l=a.transition,d=[],u=0,b=0;function h(){if("goBack"===e.end){if(r===d.length-1)return c(Object(m.a)(Object(m.a)({},a),{},{activeSlide:0,translate:0}))}else if("stop"===e.end&&r+b===d.length-1)return c(Object(m.a)(Object(m.a)({},a),{},{activeSlide:r+1,translate:u*d.length-u*b}));r!==d.length-b&&c(Object(m.a)(Object(m.a)({},a),{},{activeSlide:r+1,translate:u*(r+1)}))}return"recipes"===e.section?(d=Object(j.a)(L),u=17.5,b=4):"goGreen"===e.section?(d=Object(j.a)(U),u=35,b=1):"howItWorks"===e.section&&(d=Object(j.a)(I),u=67,b=1),Object(s.jsx)("div",{className:"carousel",children:Object(s.jsxs)("div",{className:"slider",children:[Object(s.jsx)(g,{translate:o,transition:l,customWidth:u,numberSlides:d.length,children:d.map((function(t,i){return"recipes"===e.section?Object(s.jsx)(y,{content:t},i):"goGreen"===e.section?Object(s.jsx)(q,{title:t.title,content:t.content},t.id):"howItWorks"===e.section?Object(s.jsx)(R,{imgURL:t.imgURL,title:t.title,content:t.content},t.id):null}))}),"goBack"===e.end?Object(s.jsx)(w,{direction:"right",handleClick:h}):Object(s.jsxs)("div",{children:[Object(s.jsx)(k,{direction:"right",handleClick:h}),Object(s.jsx)(k,{direction:"left",handleClick:function(){0!==r&&c(Object(m.a)(Object(m.a)({},a),{},{activeSlide:r-1,translate:u*(r-1)}))}})]})]})})};var T=function(){return Object(s.jsxs)("div",{id:"recipes",className:"recipes",children:[Object(s.jsxs)("div",{className:"recipes-text",children:[Object(s.jsx)("h1",{children:"Recipes"}),Object(s.jsx)("p",{className:"text",children:"Culpa qui officia deserunt mollit anim id est laborum . Sed ut perspiciatis unde omnis iste natus error sit voluptartem accusantium doloremque laudantium, tatum rem aperiam, eaque ipsa quae ab illo iventore veritatis et quasi ropeior architecto beatae vitae dicta sunt"})]}),Object(s.jsx)(P,{section:"recipes",end:"stop"})]})},G=i(8),_=i(9);var E=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),i=t[0],a=t[1];return Object(s.jsxs)("div",{id:"footer",className:"footer",children:[Object(s.jsx)("div",{className:"footer-links",children:Object(s.jsxs)("ul",{className:"links",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"ABOUT US"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"CONTACT"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"GO GREEN"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"/",children:"TERMS & CONDITIONS"})})]})}),Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("img",{className:"footer-logo",src:"imgs/logo.png",alt:"mellow logo"})}),Object(s.jsxs)("div",{className:"footer-box",children:[Object(s.jsxs)("div",{className:"footer-text",children:[Object(s.jsx)("span",{children:"Cool phrase goes here"}),Object(s.jsx)("span",{className:"footer-text-green",children:"Maybe in two lines"})]}),Object(s.jsxs)("div",{className:"subscribe",children:[Object(s.jsx)("input",{className:"sub-input",placeholder:"Email Address"}),Object(s.jsx)("button",{className:"sub-button",children:"SUBSCRIBE"})]}),Object(s.jsxs)("div",{className:"icons",children:[Object(s.jsx)(G.a,{className:"midia-icon",icon:_.b}),Object(s.jsx)(G.a,{className:"midia-icon",icon:_.e}),Object(s.jsx)(G.a,{className:"midia-icon",icon:_.c}),Object(s.jsx)("div",{onMouseOver:function(){a("border-green")},onMouseOut:function(){a("")},className:"pinterest-circle ".concat(i),children:Object(s.jsx)(G.a,{className:"pinterest-icon",icon:_.d})})]}),Object(s.jsx)("p",{className:"footer-small-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing"})]})]})};var A=function(){return Object(s.jsxs)("div",{id:"go-green",className:"go-green",children:[Object(s.jsx)("div",{className:"gg-image-container",children:Object(s.jsx)("img",{src:"./imgs/pepper.png",alt:"orange pepper"})}),Object(s.jsx)("div",{className:"gg-content",children:Object(s.jsxs)("div",{className:"gg-box-control",children:[Object(s.jsx)(P,{className:"gg-carousel",section:"goGreen",end:"goBack"}),Object(s.jsxs)("div",{className:"logos",children:[Object(s.jsx)("img",{className:"logo-1",src:"./imgs/logo1.png",alt:"logo waitrose"}),Object(s.jsx)("img",{className:"logo-2",src:"./imgs/logo2.png",alt:"logo tesco"}),Object(s.jsx)("img",{className:"logo-3",src:"./imgs/logo3.png",alt:"logo ocado"})]})]})})]})};var F=function(){return Object(s.jsx)("div",{id:"how-it-works",className:"how-it-works",children:Object(s.jsx)(P,{section:"howItWorks",end:"stop"})})};var B=function(){return Object(s.jsxs)("div",{id:"try",className:"try",children:[Object(s.jsxs)("div",{className:"try-content",children:[Object(s.jsx)("h1",{children:"Delicius"}),Object(s.jsx)("h1",{children:"Planet-friendly food"}),Object(s.jsx)("p",{children:Object(s.jsx)("span",{className:"try-subtext",children:"Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit"})}),Object(s.jsx)("button",{className:"btn-try",children:"LET'S TRY"}),Object(s.jsxs)("div",{className:"try-download",children:[Object(s.jsx)("p",{children:"Download on iOS and android for free"}),Object(s.jsx)("a",{href:"#",children:Object(s.jsxs)("div",{className:"btn-download",children:[Object(s.jsx)(G.a,{className:"apple-icon",icon:_.a}),Object(s.jsxs)("div",{className:"download-button-text",children:[Object(s.jsx)("span",{className:"btn-up-text",children:"Download on the"}),Object(s.jsx)("span",{className:"btn-bottom-text",children:"App Store"})]})]})}),Object(s.jsx)("a",{href:"#",children:Object(s.jsxs)("div",{className:"btn-download",children:[Object(s.jsx)("img",{className:"playstore-icon",src:"./imgs/google_play_icon.png",alt:"playstore icon"}),Object(s.jsxs)("div",{className:"download-button-text",children:[Object(s.jsx)("span",{className:"btn-up-text",children:"GET IT ON"}),Object(s.jsx)("span",{className:"btn-bottom-text",children:"Google Play"})]})]})})]})]}),Object(s.jsx)("div",{className:"try-img-container"})]})};var M=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(r,{}),Object(s.jsx)(u,{}),Object(s.jsx)(T,{}),Object(s.jsx)(A,{}),Object(s.jsx)(F,{}),Object(s.jsx)(B,{}),Object(s.jsx)(E,{})]})};c.a.render(Object(s.jsx)(M,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0eb1bf10.chunk.js.map