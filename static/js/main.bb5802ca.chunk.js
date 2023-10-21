(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{45:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n,a=c(24),s=c.n(a),r=c(1),i=c(5),o=c(4),l=c(22),u=(c(45),c(7)),d=c.n(u),j=c(0),b=function(e){var t=e.isActive;return d()("nav__link",{"nav__link--active":t})},O=function(){return Object(j.jsx)("nav",{className:"nav",children:Object(j.jsxs)("ul",{className:"nav__list",children:[Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)(i.c,{to:"/",className:b,children:"home"})}),Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)(i.c,{to:"/phones",className:b,children:"phones"})}),Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)(i.c,{to:"/tablets",className:b,children:"tablets"})}),Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)(i.c,{to:"/accessories",className:b,children:"accessories"})})]})})},_=l.c,m=l.b,p=c(16),h=Object(p.b)({name:"menu",initialState:!1,reducers:{open:function(){return!0},close:function(){return!1}}}),f=h.actions,v=h.reducer,x=function(){var e=m();return Object(j.jsx)(i.b,{to:"/",className:"logo header__logo",onClick:function(){return e(f.close())},children:Object(j.jsx)("img",{src:"./img/logo/logo.svg",alt:"Logo",className:"logo__image"})})},N=c(2);!function(e){e.Cart="cart",e.Favourites="favourites"}(n||(n={}));var g=function(e){var t=e.isActive;return d()("header-button header__button",{"haeder-button header__button header-button--active":t})},y=function(e){var t=e.type,c=Object(r.useState)(0),a=Object(N.a)(c,2),s=a[0],o=a[1],l=m(),u=_((function(e){return e.cart})),b=_((function(e){return e.favourites}));return Object(r.useEffect)((function(){var e=t===n.Favourites?b.length:u.reduce((function(e,t){return e+t.quantity}),0);o(e)}),[u,b]),Object(j.jsxs)(i.c,{to:"/".concat(t),className:g,onClick:function(){return l(f.close())},children:[Object(j.jsx)("div",{className:d()("header-button__icon","header-button__icon--".concat(t))}),!!s&&Object(j.jsx)("p",{className:"header-button__count",children:s})]})},k=function(){var e=Object(i.d)(),t=Object(N.a)(e,2),c=t[0],n=t[1],a=m(),s=Object(o.o)(),r=c.get("query")||"",l="/favourites"===s.pathname||"/phones"===s.pathname||"/tablets"===s.pathname||"/accessories"===s.pathname;return Object(j.jsxs)("div",{className:d()("search",{"search--is":l}),children:[Object(j.jsx)("input",{type:"text",className:d()("search__input",{"search__input--active":r}),placeholder:"Search in ".concat(s.pathname.slice(1),"..."),onChange:function(e){var t=new URLSearchParams(c);t.set("query",e.target.value),t.get("query")||t.delete("query"),n(t)},value:r,onClick:function(){return a(f.close())}}),r?Object(j.jsx)("button",{type:"button",className:d()("search__icon",{"search__icon--active":r}),"aria-label":"Close",onClick:function(){var e=new URLSearchParams(c);e.delete("query"),n(e)}}):Object(j.jsx)("div",{className:"search__icon"})]})},S=function(e){var t=e.isActive;return d()("menu__nav-link",{"menu__nav-link--active":t})},C=function(){var e=m(),t=_((function(e){return e.menu})),c=function(){e(t?f.close():f.open())};return Object(j.jsxs)("div",{className:"menu",children:[Object(j.jsx)("button",{className:d()("menu__icon",{"menu__icon--active":t}),type:"button","aria-label":"Menu",onClick:c}),Object(j.jsxs)("ul",{className:d()("menu__nav-list",{"menu__nav-list--active":t}),children:[Object(j.jsx)("li",{className:"menu__nav-item",children:Object(j.jsx)(i.c,{to:"/",className:S,onClick:c,children:"home"})}),Object(j.jsx)("li",{className:"menu__nav-item",children:Object(j.jsx)(i.c,{to:"/phones",className:S,onClick:c,children:"phones"})}),Object(j.jsx)("li",{className:"menu__nav-item",children:Object(j.jsx)(i.c,{to:"/tablets",className:S,onClick:c,children:"tablets"})}),Object(j.jsx)("li",{className:"menu__nav-item",children:Object(j.jsx)(i.c,{to:"/accessories",className:S,onClick:c,children:"accessories"})}),Object(j.jsx)("li",{className:"menu__nav-item menu__nav-item--phone",children:Object(j.jsx)(i.c,{to:"/favourites",className:S,onClick:c,children:"favourites"})}),Object(j.jsx)("li",{className:"menu__nav-item menu__nav-item--phone",children:Object(j.jsx)(i.c,{to:"/cart",className:S,onClick:c,children:"cart"})})]})]})},w=function(){var e=_((function(e){return e.menu}));Object(r.useEffect)((function(){e?document.body.classList.add("body-overflow"):document.body.classList.remove("body-overflow")}),[e]);var t="/cart"===Object(o.o)().pathname;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsxs)("div",{className:"header__nav-container",children:[Object(j.jsx)(C,{}),Object(j.jsx)(x,{}),!t&&Object(j.jsx)(O,{})]}),Object(j.jsxs)("div",{className:"header__button-container",children:[Object(j.jsx)(k,{}),!t&&Object(j.jsx)(y,{type:n.Favourites}),Object(j.jsx)(y,{type:n.Cart})]})]})},E=function(){return Object(j.jsxs)("button",{type:"button",className:"footer-button",onClick:function(){window.scrollTo({top:0})},children:["Back to top",Object(j.jsx)("div",{className:"footer-button__icon"})]})},L=function(){return Object(j.jsx)(i.b,{to:"/",className:"logo",children:Object(j.jsx)("img",{src:"./img/logo/logo.svg",alt:"",className:"logo__image"})})},R=function(){return Object(j.jsx)("nav",{className:"nav footer__nav",children:Object(j.jsxs)("ul",{className:"nav__list",children:[Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)("a",{href:"https://github.com/yevheniikulish",target:"_blank",className:"nav__link",rel:"noreferrer",children:"github"})}),Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)("a",{href:"tel:+380932881881",target:"_blank",className:"nav__link",rel:"noreferrer",children:"contacts"})}),Object(j.jsx)("li",{className:"nav__item",children:Object(j.jsx)("a",{href:"https://mate.academy",target:"_blank",className:"nav__link",rel:"noreferrer",children:"rights"})})]})})},q=function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("div",{className:"footer__container",children:[Object(j.jsx)(L,{}),Object(j.jsx)(R,{}),Object(j.jsx)(E,{})]})})},M=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(w,{}),Object(j.jsx)(o.b,{}),Object(j.jsx)(q,{})]})},A=c(11),B=[0,1,2],I=["./img/photos/banner-phones.png","./img/photos/banner-tablets.png","./img/photos/banner-accessories.png"].map((function(e){return Object(j.jsx)("img",{className:"photos__photo",src:e,alt:"Accessories"},e)})),T=function(){var e=Object(r.useState)(0),t=Object(N.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),s=Object(N.a)(a,2),i=s[0],o=s[1];Object(r.useEffect)((function(){c<0&&n(I.length-1),c>I.length-1&&n(0),o(!0);var e=setTimeout((function(){o(!1)}),1e3);return function(){return clearTimeout(e)}}),[c]);var l=function(){n((function(e){return e+1}))};Object(r.useEffect)((function(){var e=setInterval((function(){l()}),5e3);return function(){return clearInterval(e)}}),[c]);return Object(j.jsxs)("div",{className:"photos",children:[Object(j.jsxs)("div",{className:"photos__container",children:[Object(j.jsx)("button",{className:d()("photos__button photos__button--left"),type:"button","aria-label":"Left button",onClick:function(){n((function(e){return e-1}))},disabled:i}),Object(j.jsx)("div",{className:"photos__slider-track",children:I.map((function(e,t){var n=Object(A.a)({},e);return n.props=Object(A.a)(Object(A.a)({},n.props),{},{className:"photos__photo photos__photo--next"}),t===c&&(n.props=Object(A.a)(Object(A.a)({},n.props),{},{className:"photos__photo photos__photo--current"})),(t===c-1||0===c&&t===I.length-1)&&(n.props=Object(A.a)(Object(A.a)({},n.props),{},{className:"photos__photo photos__photo--prev"})),n}))}),Object(j.jsx)("button",{className:d()("photos__button photos__button--right"),type:"button","aria-label":"Right button",onClick:l,disabled:i})]}),Object(j.jsx)("div",{className:"photos__dots",children:B.map((function(e){return Object(j.jsx)("button",{type:"button","aria-label":"Photo ".concat(e+1),className:d()("photos__dot",{"photos__dot--active":e===c}),onClick:(t=e,function(){n(t)}),disabled:i},e);var t}))})]})},P=function(e){return fetch("https://mate-academy.github.io/react_phone-catalog/"+e).then((function(e){if(!e.ok)throw new Error;return e.json()}))},D=function(){return P("_new/products.json")},F=Object(p.b)({name:"cart",initialState:[],reducers:{add:function(e,t){e.push(t.payload),localStorage.setItem("cart",JSON.stringify(e))},take:function(e,t){var c=e.filter((function(e){return e.id!==t.payload.id}));return localStorage.setItem("cart",JSON.stringify(c)),c},updateQuantity:function(e,t){var c=e.map((function(e){return e.id!==t.payload.id?e:Object(A.a)(Object(A.a)({},e),{},{quantity:t.payload.quantity})}));return localStorage.setItem("cart",JSON.stringify(c)),c},set:function(){return JSON.parse(localStorage.getItem("cart")||"[]")}}}),J=F.actions,U=F.reducer,$=Object(p.b)({name:"favourites",initialState:[],reducers:{add:function(e,t){e.push(t.payload),localStorage.setItem("favourites",JSON.stringify(e))},take:function(e,t){var c=e.filter((function(e){return e.id!==t.payload.id}));return localStorage.setItem("favourites",JSON.stringify(c)),c},set:function(){return JSON.parse(localStorage.getItem("favourites")||"[]")}}}),W=$.actions,K=$.reducer,Q=function(e){var t=e.product,c=m(),n=_((function(e){return e.cart})),a=_((function(e){return e.favourites})),s=t.image,o=t.name,l=t.price,u=t.fullPrice,b=t.screen,O=t.capacity,p=t.ram,h=t.phoneId;return Object(r.useEffect)((function(){c(J.set()),c(W.set())}),[]),Object(j.jsxs)("div",{className:"product-card","data-cy":"cardsContainer",children:[Object(j.jsxs)(i.b,{to:"/phones/".concat(h),className:"product-card__container",children:[Object(j.jsx)("img",{src:"./".concat(s),alt:o,className:"product-card__image"}),Object(j.jsx)("p",{className:"product-card__name",children:o})]}),Object(j.jsxs)("div",{className:"product-card__container",children:[Object(j.jsxs)("p",{className:"product-card__price",children:["$".concat(10*Math.round(l/10)-1),l!==u&&Object(j.jsxs)(j.Fragment,{children:[" ",Object(j.jsx)("span",{className:"product-card__full-price",children:"$".concat(10*Math.round(u/10)-1)})]})]}),Object(j.jsx)("div",{className:"product-card__line"}),Object(j.jsxs)("div",{className:"product-card__text-box",children:[Object(j.jsx)("p",{className:"product-card__param-name",children:"Screen"}),Object(j.jsx)("p",{className:"product-card__param-value",children:b})]}),Object(j.jsxs)("div",{className:"product-card__text-box",children:[Object(j.jsx)("p",{className:"product-card__param-name",children:"Capacity"}),Object(j.jsx)("p",{className:"product-card__param-value",children:O})]}),Object(j.jsxs)("div",{className:"product-card__text-box",children:[Object(j.jsx)("p",{className:"product-card__param-name",children:"RAM"}),Object(j.jsx)("p",{className:"product-card__param-value",children:p})]}),Object(j.jsxs)("div",{className:"product-card__interaction-block",children:[n.some((function(e){return e.id===t.id}))?Object(j.jsx)("button",{className:d()("product-card__cart-button","product-card__cart-button--added"),type:"button",onClick:function(){return c(J.take({product:t,id:t.id,quantity:1}))},children:"Added to cart"}):Object(j.jsx)("button",{className:"product-card__cart-button",type:"button",onClick:function(){return c(J.add({product:t,id:t.id,quantity:1}))},children:"Add to cart"}),Object(j.jsx)("button",{type:"button",className:"product-card__favourites-button",onClick:function(){return a.some((function(e){return e.id===t.id}))?c(W.take(t)):c(W.add(t))},children:Object(j.jsx)("div",{className:d()("product-card__favourites-icon",{"product-card__favourites-icon--added":a.some((function(e){return e.id===t.id}))})})})]})]})]})},Y=function(e){var t=e.title,c=e.onLeftClick,n=e.onRightClick,a=e.isLeftButtonDisabled,s=e.isRightButtonDisabled,r=e.reference,i=e.translate,o=e.products;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"slider__panel",children:[Object(j.jsx)("h2",{className:"slider__title",children:t}),Object(j.jsxs)("div",{className:"slider__buttons",children:[Object(j.jsx)("button",{className:"slider__button slider__button--left",type:"button","aria-label":"Left button",onClick:c,disabled:a}),Object(j.jsx)("button",{className:"slider__button slider__button--right",type:"button","aria-label":"Right button",onClick:n,disabled:s})]})]}),Object(j.jsx)("div",{className:"slider__track-container",ref:r,children:Object(j.jsx)("div",{className:"slider__track",style:{transform:"translate(".concat(i,"px)")},children:o.map((function(e){return Object(j.jsx)(Q,{product:e},e.id)}))})})]})},H=16,Z=function(){var e,t=Object(r.useState)([]),c=Object(N.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(0),i=Object(N.a)(s,2),o=i[0],l=i[1],u=Object(r.useState)(!1),d=Object(N.a)(u,2),b=d[0],O=d[1],_=Object(r.useState)(!1),m=Object(N.a)(_,2),p=m[0],h=m[1],f=Object(r.useRef)(),v=(null===(e=f.current)||void 0===e?void 0:e.clientWidth)||0,x=Object(r.useMemo)((function(){return 1136===v?(v+H)/4:848===v?(v+H)/3:560===v?(v+H)/2:v+H}),[v]);Object(r.useEffect)((function(){return D().then((function(e){return e.sort((function(e,t){return t.fullPrice-e.fullPrice+e.price-t.price})).slice(0,12)})).then(a).catch((function(){return new Error("Loading products error")})),function(){return a(n)}}),[]),Object(r.useEffect)((function(){0===o?O(!0):(n.length-4)*x===-o?h(!0):(O(!1),h(!1))}),[o]);return Object(j.jsx)("div",{className:"slider slider--first",children:Object(j.jsx)(Y,{title:"Hot prices",onLeftClick:function(){l((function(e){return e+x}))},onRightClick:function(){l((function(e){return e-x}))},isLeftButtonDisabled:b,isRightButtonDisabled:p,reference:f,translate:o,products:n})})},z=function(){var e=Object(r.useState)(0),t=Object(N.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(0),s=Object(N.a)(a,2),o=s[0],l=s[1],u=Object(r.useState)(0),d=Object(N.a)(u,2),b=d[0],O=d[1];return Object(r.useEffect)((function(){return D().then((function(e){O(e.filter((function(e){return"phones"===e.category})).length)})).catch((function(){throw new Error("Loading product error")})),function(){n(0),l(0),O(0)}}),[]),Object(j.jsxs)("div",{className:"categories",children:[Object(j.jsx)("h2",{className:"categories__title",children:"Shop by category"}),Object(j.jsxs)("div",{className:"categories__container","data-cy":"categoryLinksContainer",children:[Object(j.jsxs)(i.b,{to:"/phones",className:"categories__link categories__link--1",children:[Object(j.jsx)("div",{className:"categories__image categories__image--1"}),Object(j.jsx)("p",{className:"categories__category",children:"Mobile phones"}),Object(j.jsx)("p",{className:"categories__count",children:"".concat(b," models")})]}),Object(j.jsxs)(i.b,{to:"/tablets",className:"categories__link categories__link--2",children:[Object(j.jsx)("div",{className:"categories__image categories__image--2"}),Object(j.jsx)("p",{className:"categories__category",children:"Tablets"}),Object(j.jsx)("p",{className:"categories__count",children:"".concat(c," models")})]}),Object(j.jsxs)(i.b,{to:"/accessories",className:"categories__link categories__link--3",children:[Object(j.jsx)("div",{className:"categories__image categories__image--3"}),Object(j.jsx)("p",{className:"categories__category",children:"Accessories"}),Object(j.jsx)("p",{className:"categories__count",children:"".concat(o," models")})]})]})]})},G=16,V=function(){var e,t=Object(r.useState)([]),c=Object(N.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(0),i=Object(N.a)(s,2),o=i[0],l=i[1],u=Object(r.useState)(!1),d=Object(N.a)(u,2),b=d[0],O=d[1],_=Object(r.useState)(!1),m=Object(N.a)(_,2),p=m[0],h=m[1],f=Object(r.useRef)(),v=(null===(e=f.current)||void 0===e?void 0:e.clientWidth)||0,x=Object(r.useMemo)((function(){return 1136===v?(v+G)/4:848===v?(v+G)/3:560===v?(v+G)/2:v+G}),[v]);Object(r.useEffect)((function(){return D().then((function(e){return e.filter((function(e){return 2019===e.year})).sort((function(e,t){return t.fullPrice-e.fullPrice})).slice(0,12)})).then(a).catch((function(){return new Error("Loading products error")})),function(){return a([])}}),[]),Object(r.useEffect)((function(){0!==o?(n.length-4)*x!==-o?(O(!1),h(!1)):h(!0):O(!0)}),[o]);return Object(j.jsx)("div",{className:"slider",children:Object(j.jsx)(Y,{title:"Brands new models",onLeftClick:function(){l((function(e){return e+x}))},onRightClick:function(){l((function(e){return e-x}))},isLeftButtonDisabled:b,isRightButtonDisabled:p,reference:f,translate:o,products:n})})},X=function(){return Object(j.jsxs)("main",{className:"home page__main-container",children:[Object(j.jsx)(T,{}),Object(j.jsx)(Z,{}),Object(j.jsx)(z,{}),Object(j.jsx)(V,{})]})},ee=function(e){var t=e.options,c=e.label,n=e.value,a=e.setOption,s=e.valueKey,i=e.handleOnClick,o=Object(r.useState)(!1),l=Object(N.a)(o,2),u=l[0],b=l[1];return Object(j.jsxs)("div",{className:"products-list__sort",children:[Object(j.jsx)("div",{className:"products-list__sort-by",children:c}),Object(j.jsxs)("button",{className:d()("products-list__selector",{"products-list__selector--active":u}),type:"button",onClick:function(){b(!u)},children:[n,Object(j.jsx)("div",{className:d()("products-list__icon",{"products-list__icon--active":u})})]}),u&&Object(j.jsx)("div",{className:"products-list__options-container",children:t.map((function(e){return Object(j.jsx)("button",{className:"products-list__option",type:"button",onClick:function(){i(e,a,s),b(!1)},children:e},e)}))})]})},te=function(e){var t=e.currentPage,c=e.pagesCount,n=e.onClick;return Object(j.jsx)("div",{className:"pagination",children:Object(j.jsxs)("div",{className:"pagination__container",children:[Object(j.jsx)("button",{className:"pagination__button pagination__button--left","data-cy":"paginationLeft","aria-label":"Button left",type:"button",onClick:n((+t-1).toString()),disabled:1===+t}),function(e){var c=[1,+t-1,+t,+t+1,e];if(1!==+t&&2!==+t||(c=[1,2,3,4,e]),+t!==e-1&&+t!==e||(c=[1,e-3,e-2,e-1,e]),e<5){c=[];for(var a=1;a<=e;a+=1)c.push(a)}return c.map((function(e){return Object(j.jsx)("button",{className:d()("pagination__button",{"pagination__button--active":+t===e}),type:"button",onClick:n(e.toString()),children:e},e)}))}(c),Object(j.jsx)("button",{className:"pagination__button pagination__button--right","data-cy":"paginationRight","aria-label":"Button right",type:"button",onClick:n((+t+1).toString()),disabled:+t===c})]})})},ce=["Newest","Alphabetically","Cheapest"],ne=["4","8","16","all"],ae=["age","name","price"],se=["Sort by","Items on page"],re=["sort","perPage","page"],ie=function(e){var t=e.products,c=Object(r.useState)("age"),n=Object(N.a)(c,2),a=n[0],s=n[1],o=Object(r.useState)("16"),l=Object(N.a)(o,2),u=l[0],d=l[1],b=Object(r.useState)(1),O=Object(N.a)(b,2),_=O[0],m=O[1],p=Object(r.useState)("1"),h=Object(N.a)(p,2),f=h[0],v=h[1],x=Object(i.d)(),g=Object(N.a)(x,2),y=g[0],k=g[1],S=Object(r.useState)(t),C=Object(N.a)(S,2),w=C[0],E=C[1];Object(r.useEffect)((function(){var e=new URLSearchParams(y);s(e.get(re[0])||a),d(e.get(re[1])||u),v(e.get(re[2])||f),k(e)}),[]),Object(r.useEffect)((function(){if("all"!==u){var e=Math.ceil(((null===t||void 0===t?void 0:t.length)||0)/+u);e<+f&&v("1"),m(e)}else m(1)}),[u,y,t]),Object(r.useEffect)((function(){var e=null===t||void 0===t?void 0:t.sort((function(e,t){switch(a){case"name":return e.name.localeCompare(t.name);case"age":return t.year-e.year;case"price":return e.price-t.price;default:throw new Error("Sort error")}})),c="all"===u?(null===e||void 0===e?void 0:e.slice(0))||null:(null===e||void 0===e?void 0:e.slice((+f-1)*+u,+f*+u))||null;E(c)}),[a,u,f,t]);var L=function(e,t,c){var n=new URLSearchParams(y),a="sort"===c?ae[ce.indexOf(e)]:e;t(a),n.set(c,a),v("1"),k(n)};return Object(j.jsxs)("div",{className:"products-list","data-cy":"productList",children:[Object(j.jsxs)("div",{className:"products-list__sort-form",children:[Object(j.jsx)(ee,{options:ce,label:se[0],value:ce[ae.indexOf(a)],setOption:s,valueKey:re[0],handleOnClick:L}),Object(j.jsx)(ee,{options:ne,label:se[1],value:u,setOption:d,valueKey:re[1],handleOnClick:L})]}),Object(j.jsx)("div",{className:"products-list__container",children:null===w||void 0===w?void 0:w.map((function(e){return Object(j.jsx)(Q,{product:e},e.id)}))}),_>1&&Object(j.jsx)(te,{currentPage:f,pagesCount:_,onClick:function(e){return function(){var t=new URLSearchParams(y);v(e),t.set("page",e),k(t)}}})]})},oe=function(){return Object(j.jsx)("div",{className:"loader",children:Object(j.jsx)("div",{className:"loader__spiner"})})},le=function(e){var t=e.title;return Object(j.jsx)("div",{className:"no-results",children:"".concat(t," not found")})},ue=function(e){var t=e.name,c=Object(o.o)(),n=Object(r.useMemo)((function(){return c.pathname.split("/").slice(1)[0]}),[]),a=Object(r.useMemo)((function(){return(e=n)[0].toUpperCase()+e.slice(1);var e}),[]);return Object(j.jsxs)("div",{className:"breadcrumbs",children:[Object(j.jsx)(i.b,{to:"/home",className:"breadcrumbs__home"}),Object(j.jsx)("div",{className:"breadcrumbs__icon"}),t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i.b,{to:"/".concat(n),className:"breadcrumbs__link",children:a}),Object(j.jsx)("div",{className:"breadcrumbs__icon"}),Object(j.jsx)("p",{className:"breadcrumbs__text",children:t})]}):Object(j.jsx)("p",{className:"breadcrumbs__text",children:a})]})},de=function(e){var t=e.title;return Object(j.jsx)("div",{className:"no-results",children:"".concat(t," not found by this params")})},je=function(e){var t=e.products,c=e.isLoading,n=e.title,a=e.isNoSearchResults;return Object(j.jsxs)("div",{className:"phones page__phones",children:[c&&Object(j.jsx)(oe,{}),!c&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ue,{name:""}),Object(j.jsx)("h1",{className:"phones__title",children:n}),Object(j.jsx)("p",{className:"phones__count",children:"".concat(null===t||void 0===t?void 0:t.length," model").concat(1===(null===t||void 0===t?void 0:t.length)?"":"s")}),!a&&!(null===t||void 0===t?void 0:t.length)&&Object(j.jsx)(le,{title:n}),!a&&!!(null===t||void 0===t?void 0:t.length)&&Object(j.jsx)(ie,{products:t}),a&&Object(j.jsx)(de,{title:n})]})]})},be=function(e,t,c){c(!0),D().then((function(c){t(c.filter((function(t){return t.category===e})))})).catch((function(){throw new Error("Loading products error")})).finally((function(){return c(!1)}))},Oe=function(e,t,c,n){var a=null===e||void 0===e?void 0:e.filter((function(e){return e.name.trim().toLowerCase().includes(t.toLowerCase())}));c(a||[]),n(!(null===a||void 0===a?void 0:a.length)&&!!(null===e||void 0===e?void 0:e.length))},_e=function(){var e,t=Object(r.useState)(null),c=Object(N.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(null),o=Object(N.a)(s,2),l=o[0],u=o[1],d=Object(r.useState)(!1),b=Object(N.a)(d,2),O=b[0],_=b[1],m=Object(r.useState)(!1),p=Object(N.a)(m,2),h=p[0],f=p[1],v=Object(r.useState)(""),x=Object(N.a)(v,2),g=x[0],y=x[1],k=Object(r.useRef)(0),S=Object(i.d)(),C=(null===(e=Object(N.a)(S,1)[0].get("query"))||void 0===e?void 0:e.split("+").join(" "))||"";return Object(r.useEffect)((function(){be("phones",a,_)}),[]),Object(r.useEffect)((function(){return k.current=window.setTimeout((function(){y(C)}),1e3),function(){return clearTimeout(k.current)}}),[C]),Object(r.useEffect)((function(){Oe(n,g,u,f)}),[g,n]),Object(j.jsx)(je,{isNoSearchResults:h,products:l,isLoading:O,title:"Mobile phones"})},me=function(){var e,t=Object(r.useState)(null),c=Object(N.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(null),o=Object(N.a)(s,2),l=o[0],u=o[1],d=Object(r.useState)(!1),b=Object(N.a)(d,2),O=b[0],_=b[1],m=Object(r.useState)(!1),p=Object(N.a)(m,2),h=p[0],f=p[1],v=Object(r.useState)(""),x=Object(N.a)(v,2),g=x[0],y=x[1],k=Object(r.useRef)(0),S=Object(i.d)(),C=(null===(e=Object(N.a)(S,1)[0].get("query"))||void 0===e?void 0:e.split("+").join(" "))||"";return Object(r.useEffect)((function(){be("tablets",a,_)}),[]),Object(r.useEffect)((function(){return k.current=window.setTimeout((function(){y(C)}),1e3),function(){return clearTimeout(k.current)}}),[C]),Object(r.useEffect)((function(){Oe(n,g,u,f)}),[g,n]),Object(j.jsx)(je,{isNoSearchResults:h,products:l,isLoading:O,title:"Tablets"})},pe=function(){var e,t=Object(r.useState)(null),c=Object(N.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(null),o=Object(N.a)(s,2),l=o[0],u=o[1],d=Object(r.useState)(!1),b=Object(N.a)(d,2),O=b[0],_=b[1],m=Object(r.useState)(!1),p=Object(N.a)(m,2),h=p[0],f=p[1],v=Object(r.useState)(""),x=Object(N.a)(v,2),g=x[0],y=x[1],k=Object(r.useRef)(0),S=Object(i.d)(),C=(null===(e=Object(N.a)(S,1)[0].get("query"))||void 0===e?void 0:e.split("+").join(" "))||"";return Object(r.useEffect)((function(){be("accessories",a,_)}),[]),Object(r.useEffect)((function(){return k.current=window.setTimeout((function(){y(C)}),1e3),function(){return clearTimeout(k.current)}}),[C]),Object(r.useEffect)((function(){Oe(n,g,u,f)}),[g,n]),Object(j.jsx)(je,{isNoSearchResults:h,products:l,isLoading:O,title:"Accessories"})},he=function(e){for(var t=[],c=e.length,n=function(){return Math.floor(Math.random()*c)},a=0;a<10&&a<c;a+=1){for(var s=e[n()];t.includes(s);)s=e[n()];t.push(s)}return t},fe=16,ve=function(){var e,t=Object(r.useState)([]),c=Object(N.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(0),i=Object(N.a)(s,2),o=i[0],l=i[1],u=Object(r.useState)(!1),d=Object(N.a)(u,2),b=d[0],O=d[1],_=Object(r.useState)(!1),m=Object(N.a)(_,2),p=m[0],h=m[1],f=Object(r.useRef)(),v=(null===(e=f.current)||void 0===e?void 0:e.clientWidth)||0,x=Object(r.useMemo)((function(){return 1136===v?(v+fe)/4:848===v?(v+fe)/3:560===v?(v+fe)/2:v+fe}),[v]);Object(r.useEffect)((function(){return D().then(he).then(a).catch((function(){return new Error("Loading products error")})),function(){return a(n)}}),[]),Object(r.useEffect)((function(){0===o?O(!0):(n.length-4)*x===-o?h(!0):(O(!1),h(!1))}),[o]);return Object(j.jsx)("div",{className:"slider",children:Object(j.jsx)(Y,{title:"You may also like",onLeftClick:function(){l((function(e){return e+x}))},onRightClick:function(){l((function(e){return e-x}))},isLeftButtonDisabled:b,isRightButtonDisabled:p,reference:f,translate:o,products:n})})},xe=function(){return Object(j.jsxs)("button",{className:"back-button",type:"button",onClick:function(){window.history.back()},children:[Object(j.jsx)("div",{className:"back-button__icon"}),Object(j.jsx)("p",{className:"back-button__text",children:"Back"})]})},Ne={black:"#222",rosegold:"#e2a0b0",gold:"#ffd799",silver:"#eee",spacegray:"#717378",green:"#8eb",yellow:"#fe0",white:"#ffe",purple:"#d0a0d0",red:"#e23",midnightgreen:"#004953",coral:"#f88379"},ge=["Screen","Resolution","Processor","RAM"],ye=[].concat(ge,["Capacity","Camera","Zoom","Cell"]),ke=function(){var e=Object(r.useState)(null),t=Object(N.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(!1),s=Object(N.a)(a,2),l=s[0],u=s[1],b=Object(r.useState)(""),O=Object(N.a)(b,2),p=O[0],h=O[1],f=Object(r.useState)(""),v=Object(N.a)(f,2),x=v[0],g=v[1],y=Object(r.useState)(""),k=Object(N.a)(y,2),S=k[0],C=k[1],w=Object(r.useState)(null),E=Object(N.a)(w,2),L=E[0],R=E[1],q=Object(r.useState)(!1),M=Object(N.a)(q,2),A=M[0],B=M[1],I=m(),T=_((function(e){return e.cart})),F=_((function(e){return e.favourites}));Object(r.useEffect)((function(){I(J.set()),I(W.set())}),[]);var U=Object(o.s)().productId;Object(r.useEffect)((function(){D().then((function(e){R(e.find((function(e){return e.phoneId===U})))})).catch((function(){throw new Error("Loading phones error")}))}),[c]),Object(r.useEffect)((function(){var e,t=null===U||void 0===U?void 0:U.split("-");g((null===t||void 0===t||null===(e=t.at(-2))||void 0===e?void 0:e.toUpperCase())||""),C((null===t||void 0===t?void 0:t.at(-1))||"")}),[U]),Object(r.useEffect)((function(){u(!0),B(!1),function(e){return P("_new/products/".concat(e,".json"))}(U||"").then((function(e){n(e),h(e.images[0])})).catch((function(){B(!0)})).finally((function(){u(!1)}))}),[U]);var $=function(e){return function(){h(e)}},K="/phones/".concat(null===U||void 0===U?void 0:U.split("-").slice(0,-2).join("-"));return l?Object(j.jsx)(oe,{}):Object(j.jsxs)("div",{className:"product-details page__details",children:[Object(j.jsx)(ue,{name:(null===c||void 0===c?void 0:c.name)||""}),Object(j.jsx)(xe,{}),!L||A?Object(j.jsx)("h2",{className:"no-results",children:"Phone was not found"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"product-details__title",children:null===c||void 0===c?void 0:c.name}),Object(j.jsxs)("div",{className:"product-details__interaction-block",children:[Object(j.jsx)("div",{className:"product-details__images",children:null===c||void 0===c?void 0:c.images.map((function(e){return Object(j.jsx)("button",{type:"button",className:d()("product-details__image-button",{"product-details__image-button--selected":e===p}),onClick:$(e),children:Object(j.jsx)("img",{src:"./".concat(e),alt:e,className:"product-details__image-icon"})},e)}))}),Object(j.jsx)("div",{className:"product-details__current-image",children:Object(j.jsx)("img",{src:"./".concat(p),alt:null===c||void 0===c?void 0:c.name,className:"product-details__phone-image"})}),Object(j.jsxs)("div",{className:"product-details__interaction",children:[Object(j.jsxs)("div",{className:"product-details__select-container",children:[Object(j.jsx)("p",{className:"product-details__name",children:"Available colors"}),Object(j.jsx)("ul",{className:"product-details__select-buttons",children:null===c||void 0===c?void 0:c.colorsAvailable.map((function(e){return Object(j.jsx)("li",{className:d()("product-details__color",{"product-details__color--active":e===S}),children:Object(j.jsx)(i.b,{to:"".concat(K,"-").concat(x.toLowerCase(),"-").concat(e),className:d()("product-details__color-border",{"product-details__color-border--active":e===S}),style:{backgroundColor:Ne[e]}})},e)}))})]}),Object(j.jsx)("div",{className:"product-details__line"}),Object(j.jsxs)("div",{className:"product-details__select-container",children:[Object(j.jsx)("p",{className:"product-details__name",children:"Select capacity"}),Object(j.jsx)("div",{className:"product-details__select-buttons",children:null===c||void 0===c?void 0:c.capacityAvailable.map((function(e){return Object(j.jsx)(i.b,{to:"".concat(K,"-").concat(e.toLowerCase(),"-").concat(S),className:d()("product-details__capacity",{"product-details__capacity--active":e===x}),children:e},e)}))})]}),Object(j.jsx)("div",{className:d()("product-details__line","product-details__line--bigger")}),Object(j.jsxs)("div",{className:"product-details__price-block",children:[Object(j.jsxs)("p",{className:"product-details__price",children:["$".concat(10*Math.round(((null===c||void 0===c?void 0:c.priceDiscount)||0)/10)-1," "),Object(j.jsx)("span",{className:"product-details__regular-price",children:"$".concat(10*Math.round(((null===c||void 0===c?void 0:c.priceRegular)||0)/10)-1)})]}),Object(j.jsxs)("div",{className:"product-details__buttons",children:[T.some((function(e){return e.id===L.id}))?Object(j.jsx)("button",{className:d()("product-details__cart-button","product-details__cart-button--added"),type:"button",onClick:function(){return I(J.take({product:L,id:(null===L||void 0===L?void 0:L.id)||"0",quantity:1}))},children:"Added to cart"}):Object(j.jsx)("button",{className:"product-details__cart-button",type:"button",onClick:function(){return I(J.add({product:L,id:(null===L||void 0===L?void 0:L.id)||"0",quantity:1}))},children:"Add to cart"}),Object(j.jsx)("button",{type:"button",className:"product-details__favourites-button",onClick:function(){return F.some((function(e){return e.id===L.id}))?I(W.take(L)):I(W.add(L))},children:Object(j.jsx)("div",{className:d()("product-details__favourites-icon",{"product-details__favourites-icon--added":F.some((function(e){return e.id===L.id}))})})})]})]}),Object(j.jsx)("div",{className:"product-details__info",children:ge.map((function(e){return Object(j.jsxs)("div",{className:"product-details__info-row",children:[Object(j.jsx)("p",{className:"product-details__info-name",children:e}),Object(j.jsx)("p",{className:"product-details__info-value",children:c&&c[e.toLowerCase()]})]},e)}))})]})]}),Object(j.jsxs)("div",{className:"product-details__text-block",children:[Object(j.jsxs)("div",{className:"product-details__description","data-cy":"productDescription",children:[Object(j.jsx)("h3",{className:"product-details__text-subtitle",children:"About"}),Object(j.jsx)("div",{className:d()("product-details__line","product-details__line--bigger")}),null===c||void 0===c?void 0:c.description.map((function(e){return Object(j.jsxs)("div",{className:"product-details__description-block",children:[Object(j.jsx)("p",{className:"product-details__description-title",children:e.title}),Object(j.jsx)("p",{className:"product-details__description-text",children:e.text})]},e.title)}))]}),Object(j.jsxs)("div",{className:"product-details__specs",children:[Object(j.jsx)("h3",{className:"product-details__text-subtitle",children:"Tech specs"}),Object(j.jsx)("div",{className:"product-details__line"}),ye.map((function(e){return Object(j.jsxs)("div",{className:"product-details__specs-row",children:[Object(j.jsx)("p",{className:"product-details__specs-name",children:"Capacity"===e?"Built in memory":e}),Object(j.jsx)("p",{className:"product-details__specs-value",children:c&&c[e.toLowerCase()]})]},e)}))]})]}),Object(j.jsx)(ve,{})]})]})},Se=function(){var e=Object(r.useState)(0),t=Object(N.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(0),s=Object(N.a)(a,2),i=s[0],o=s[1],l=Object(r.useState)(!1),u=Object(N.a)(l,2),b=u[0],O=u[1],p=m(),h=_((function(e){return e.cart}));Object(r.useEffect)((function(){p(J.set())}),[]),Object(r.useEffect)((function(){n(h.reduce((function(e,t){return e+t.quantity}),0)),o(h.reduce((function(e,t){var c=t.quantity,n=t.product;return e+c*(10*Math.round(n.price/10)-1)}),0))}),[h]);var f=Object(r.useCallback)((function(){O(!0);var e=setTimeout((function(){O(!1)}),5e3);return function(){return clearTimeout(e)}}),[]),v=function(e,t,c){return function(){if("minus"!==c||1!==t){var n=t+("plus"===c?1:-1),a=h.find((function(t){var c=t.id;return(null===e||void 0===e?void 0:e.id)===c}));p(J.updateQuantity(Object(A.a)(Object(A.a)({},a),{},{quantity:n})))}}};return Object(j.jsxs)("div",{className:"cart page__cart",children:[Object(j.jsx)(xe,{}),Object(j.jsx)("h1",{className:"cart__title",children:"Cart"}),Object(j.jsx)("div",{className:"cart__container",children:h.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"cart__products",children:h.map((function(e){var t=e.product,c=e.quantity,n=e.id;return Object(j.jsxs)("div",{className:"cart__product",children:[Object(j.jsxs)("div",{className:"cart__product-info",children:[Object(j.jsx)("button",{type:"button",className:d()("cart__delete-button","cart__delete-button--tablet"),"aria-label":"Delete",onClick:function(){return p(J.take({product:t,quantity:c,id:n}))},"data-cy":"cartDeleteButton"}),Object(j.jsx)("div",{className:"cart__image-container",children:Object(j.jsx)("img",{src:"./".concat(t.image),alt:t.name,className:"cart__image"})}),Object(j.jsx)("p",{className:"cart__name",children:t.name}),Object(j.jsxs)("div",{className:"cart__quantity-block",children:[Object(j.jsx)("button",{type:"button",className:d()("cart__quantity-button","cart__quantity-button--minus"),"aria-label":"minus",onClick:v(t,c,"minus"),disabled:1===c}),Object(j.jsx)("p",{className:"cart__quantity","data-cy":"productQauntity",children:c}),Object(j.jsx)("button",{type:"button",className:d()("cart__quantity-button","cart__quantity-button--plus"),"aria-label":"plus",onClick:v(t,c,"plus")})]}),Object(j.jsx)("button",{type:"button",className:"cart__delete-button cart__delete-button--phone","aria-label":"Delete",onClick:function(){return p(J.take({product:t,quantity:c,id:n}))},"data-cy":"cartDeleteButton"})]}),Object(j.jsx)("div",{className:"cart__product-price",children:"$".concat(c*(10*Math.round(t.price/10)-1))})]},n)}))}),Object(j.jsxs)("div",{className:"cart__cost",children:[Object(j.jsxs)("div",{className:"cart__total-block",children:[Object(j.jsx)("p",{className:"cart__total-price",children:"$".concat(i)}),Object(j.jsx)("p",{className:"cart__total-quantity",children:"Total for ".concat(c," items")})]}),Object(j.jsx)("div",{className:"cart__line"}),b?Object(j.jsx)("button",{type:"button",className:d()("cart__checkout-button","cart__checkout-button--clicked"),disabled:!0,children:"We are sorry, but this feature is not implemented yet"}):Object(j.jsx)("button",{type:"button",className:"cart__checkout-button",onClick:f,children:"Checkout"})]})]}):Object(j.jsx)("div",{className:"no-results",children:"Your cart is empty"})})]})},Ce="Favourites",we=function(){var e,t=Object(r.useState)(0),c=Object(N.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(null),o=Object(N.a)(s,2),l=o[0],u=o[1],d=Object(r.useState)(""),b=Object(N.a)(d,2),O=b[0],p=b[1],h=m(),f=_((function(e){return e.favourites})),v=Object(r.useRef)(0),x=Object(i.d)(),g=(null===(e=Object(N.a)(x,1)[0].get("query"))||void 0===e?void 0:e.split("+").join(" "))||"";return Object(r.useEffect)((function(){h(J.set()),h(W.set())}),[]),Object(r.useEffect)((function(){a(f.length)}),[f]),Object(r.useEffect)((function(){return v.current=window.setTimeout((function(){p(g)}),1e3),function(){return clearTimeout(v.current)}}),[g]),Object(r.useEffect)((function(){var e=null===f||void 0===f?void 0:f.filter((function(e){return e.name.trim().toLowerCase().includes(O.toLowerCase())}));u(e||[])}),[O,f]),Object(j.jsxs)("div",{className:"favourites page__cart",children:[Object(j.jsx)(xe,{}),Object(j.jsx)("h1",{className:"favourites__title",children:Ce}),Object(j.jsx)("p",{className:"favourites__count",children:"".concat(null===l||void 0===l?void 0:l.length," item").concat(1===(null===l||void 0===l?void 0:l.length)?"":"s")}),Object(j.jsxs)("div",{className:"favourites__container",children:[!n&&Object(j.jsx)("div",{className:"no-results",children:"Favourites not found"}),!!n&&!(null===l||void 0===l?void 0:l.length)&&Object(j.jsx)(de,{title:Ce}),!!n&&!!(null===l||void 0===l?void 0:l.length)&&Object(j.jsx)("div",{className:"favourites__products",children:null===l||void 0===l?void 0:l.map((function(e){return Object(j.jsx)(Q,{product:e},e.id)}))})]})]})},Ee=function(){return Object(j.jsx)("div",{className:"not-found  page__not-found",children:Object(j.jsx)("h1",{className:"not-found__title",children:"Sorry, page not found..."})})},Le=Object(p.a)({reducer:{favourites:K,cart:U,menu:v}}),Re=function(){return Object(j.jsx)(l.a,{store:Le,children:Object(j.jsx)(i.a,{children:Object(j.jsx)(o.e,{children:Object(j.jsxs)(o.c,{path:"/",element:Object(j.jsx)(M,{}),children:[Object(j.jsx)(o.c,{index:!0,element:Object(j.jsx)(X,{})}),Object(j.jsx)(o.c,{path:"home",element:Object(j.jsx)(o.a,{to:"/",replace:!0})}),Object(j.jsxs)(o.c,{path:"phones",children:[Object(j.jsx)(o.c,{index:!0,element:Object(j.jsx)(_e,{})}),Object(j.jsx)(o.c,{path:":productId",element:Object(j.jsx)(ke,{})})]}),Object(j.jsxs)(o.c,{path:"tablets",children:[Object(j.jsx)(o.c,{index:!0,element:Object(j.jsx)(me,{})}),Object(j.jsx)(o.c,{path:":productId",element:Object(j.jsx)(ke,{})})]}),Object(j.jsxs)(o.c,{path:"accessories",children:[Object(j.jsx)(o.c,{index:!0,element:Object(j.jsx)(pe,{})}),Object(j.jsx)(o.c,{path:":productId",element:Object(j.jsx)(ke,{})})]}),Object(j.jsx)(o.c,{path:"cart",element:Object(j.jsx)(Se,{})}),Object(j.jsx)(o.c,{path:"favourites",element:Object(j.jsx)(we,{})}),Object(j.jsx)(o.c,{path:"*",element:Object(j.jsx)(Ee,{})})]})})})})};s.a.render(Object(j.jsx)(Re,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.bb5802ca.chunk.js.map