(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{464:function(e,t,a){"use strict";var n=a(471),c=a.n(n),l=a(13);t.a={isEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},isUsername:function(e){return e.length<=l.W&&/^[0-9a-zA-Z_][0-9a-zA-Z_.-]+$/.test(String(e).toLowerCase())},isPhoneNumber:function(e){var t=c.a.PhoneNumberUtil.getInstance();try{var a=t.parseAndKeepRawInput(e);return t.isValidNumber(a)}catch(n){return!1}},isURL:function(e){return e.startsWith("http://")||e.startsWith("https://")}}},541:function(e,t,a){},542:function(e,t,a){},543:function(e,t,a){},556:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(35),r=a(4),s=a(126),m=a(127),i=a(128),o=a(125),u=a(9),E=a(43),O=a(459),N=a(29),d=a(454),b=a(13),f=a(464),p=a(30),g=a(33),h=a(41),A=function(e){return new Promise(function(t,a){Object(p.a)(g.d,h.a.contact.us,e).then(function(e){t(e)},function(e){a(e)})})},T=function(e){return new Promise(function(t,a){Object(p.a)(g.d,h.a.contact.consultants,e).then(function(e){t(e)},function(e){a(e)})})},S=(a(541),function(){var e=Object(N.b)().t,t=Object(n.useState)({}),a=Object(E.a)(t,2),l=a[0],s=a[1],m=Object(n.useState)(!1),i=Object(E.a)(m,2),o=i[0],u=i[1],p=Object(n.useState)({}),g=Object(E.a)(p,2),h=g[0],T=g[1],S=Object(n.useState)(b.X?b.s:""),C=Object(E.a)(S,2),j=C[0],v=C[1],w=Object(n.useState)(b.X?b.k:""),y=Object(E.a)(w,2),I=y[0],R=y[1],U=Object(n.useState)(""),M=Object(E.a)(U,2),x=M[0],D=M[1],P=Object(n.useState)(""),L=Object(E.a)(P,2),V=L[0],k=L[1];Object(n.useEffect)(function(e){},[e]);return c.a.createElement(n.Fragment,null,c.a.createElement(O.Helmet,null,c.a.createElement("title",null,e("CONTACT.US.TITLE")," - ",e("SITE_NAME"))),c.a.createElement(r.r,{className:"section"},c.a.createElement(r.P,null,c.a.createElement(r.p,{md:12},c.a.createElement("h2",{className:"heading1 text-center font-weight-bold mb-5"},e("CONTACT.US.TITLE")),c.a.createElement("h5",{className:"heading2 text-center description-message"},e("CONTACT.US.DESCRIPTION1")),c.a.createElement("h5",{className:"heading2 text-center description-message"},e("CONTACT.US.DESCRIPTION2")))),c.a.createElement(r.P,{className:"mt-5"},c.a.createElement(r.p,{md:7},c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),u(!0),A({name:j,email:I,subject:x,message:V}).then(function(e){e.result===b.R&&(s({}),v(""),R(""),D(""),k("")),T({show:!0,color:e.result,message:e.message}),u(!1)}).catch(function(t){T({show:!0,color:b.a,message:e("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),u(!1)})},className:"pr-lg-4"},c.a.createElement("div",{className:"grey-text"},c.a.createElement(r.P,null,c.a.createElement(r.p,{md:6},c.a.createElement(r.A,{id:"name",name:"name",type:"text",label:e("CONTACT.US.NAME"),outline:!0,value:j,getValue:v,onBlur:function(){return s(Object.assign({},l,{name:!0}))}},l.name&&!j.length&&c.a.createElement("div",{className:"invalid-field"},e("COMMON.VALIDATION.REQUIRED",{field:e("CONTACT.US.NAME")})))),c.a.createElement(r.p,{md:6},c.a.createElement(r.A,{id:"email",name:"email",type:"email",label:e("CONTACT.US.EMAIL"),outline:!0,value:I,getValue:R,onBlur:function(){return s(Object.assign({},l,{email:!0}))}},l.email&&!f.a.isEmail(I)&&c.a.createElement("div",{className:"invalid-field"},0===I.length?e("COMMON.VALIDATION.REQUIRED",{field:e("CONTACT.US.EMAIL")}):f.a.isEmail(I)?"":e("COMMON.VALIDATION.INVALID",{field:e("CONTACT.US.EMAIL")})))),c.a.createElement(r.p,{md:12},c.a.createElement(r.A,{id:"subject",name:"subject",type:"text",label:e("CONTACT.US.SUBJECT"),outline:!0,value:x,getValue:D,onBlur:function(){return s(Object.assign({},l,{subject:!0}))}},l.subject&&!x.length&&c.a.createElement("div",{className:"invalid-field"},e("COMMON.VALIDATION.REQUIRED",{field:e("CONTACT.US.SUBJECT")})))),c.a.createElement(r.p,{md:12},c.a.createElement(r.A,{id:"message",name:"message",type:"textarea",rows:b.S,label:e("CONTACT.US.MESSAGE"),outline:!0,value:V,getValue:k,onBlur:function(){return s(Object.assign({},l,{message:!0}))}},l.message&&!V.length&&c.a.createElement("div",{className:"invalid-field"},e("COMMON.VALIDATION.REQUIRED",{field:e("CONTACT.US.MESSAGE")})))))),c.a.createElement(d.a,{in:h.show,classNames:"fade-transition",timeout:b.U,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:h.color,dismiss:!0,onClosed:function(){return T({})}},h.message)),c.a.createElement("div",{className:"text-left mb-3"},c.a.createElement(r.g,{type:"submit",color:"indigo",rounded:!0,className:"z-depth-1a",disabled:o||!j.length||!f.a.isEmail(I)||!x.length||!V.length},e("COMMON.BUTTON.SEND"))))),c.a.createElement(r.p,{md:5,className:"mt-3",dir:"ltr"},c.a.createElement("div",{className:"mb-5"},c.a.createElement(r.y,{icon:"phone-office",className:"contact-icon mr-4-f"}),c.a.createElement("span",{className:"contact-item"},b.f)),c.a.createElement("div",{className:"mb-5"},c.a.createElement(r.y,{icon:"phone",className:"contact-icon mr-4-f"}),c.a.createElement("span",{className:"contact-item"},b.e)),c.a.createElement("div",{className:"mb-5"},c.a.createElement(r.y,{icon:"envelope",className:"contact-icon mr-4-f"}),c.a.createElement("span",{className:"contact-item"},b.d)),c.a.createElement("div",{className:"mb-5"},c.a.createElement(r.y,{icon:"globe",className:"contact-icon mr-4-f"}),c.a.createElement("span",{className:"contact-item"},b.g)),c.a.createElement("div",{className:"mb-5"},c.a.createElement(r.y,{icon:"map-marker-alt",className:"contact-icon mr-4-f"}),c.a.createElement("span",{className:"contact-item"},b.c))))))}),C=a(54),j=a(124);a(542);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var w=function(){var e=Object(N.b)().t,t=Object(n.useState)(!1),a=Object(E.a)(t,2),l=a[0],s=a[1],m=Object(n.useState)({}),i=Object(E.a)(m,2),o=i[0],u=i[1],d=Object(n.useState)(!1),f=Object(E.a)(d,2),p=(f[0],f[1]),g=Object(n.useState)([]),h=Object(E.a)(g,2),A=(h[0],h[1]),S=Object(n.useState)([]),w=Object(E.a)(S,2),y=w[0],I=w[1],R=e("CODE");Object(n.useEffect)(function(t){var a=window.innerWidth<768;p(a),u(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach(function(t){Object(C.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},o,{show:!1})),s(!0),T().then(function(e){if(e.result===b.R){A(e.data);var t=U(e.data),n=M(t,a?1:3);I([n[0]])}else A([]),I([]),u({show:!0,color:b.a,message:e.message});s(!1)}).catch(function(t){A([]),I([]),u({show:!0,color:b.a,message:e("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),s(!1)})},[e]);var U=function(e){var t=!0,a=!1,n=void 0;try{for(var c,l=e[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.descriptionEn2=r.descriptionEn.length>b.t?r.descriptionEn.substr(0,b.t)+"...":r.descriptionEn,r.descriptionAr2=r.descriptionAr.length>b.t?r.descriptionAr.substr(0,b.t)+"...":r.descriptionAr}}catch(s){a=!0,n=s}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}return e},M=function(e,t){for(var a=[],n=0,c=e.length;n<c;n+=t)a.push(e.slice(n,n+t));return a};return c.a.createElement(n.Fragment,null,c.a.createElement(O.Helmet,null,c.a.createElement("title",null,e("CONTACT.CONSULTANTS.CONSULTANTS")," - ",e("SITE_NAME"))),c.a.createElement(r.r,{className:"section"},c.a.createElement(r.P,null,c.a.createElement(r.p,{md:12},c.a.createElement("h2",{className:"heading1 text-center font-weight-bold mb-5"},e("CONTACT.CONSULTANTS.CONSULTANTS"))),!!l&&c.a.createElement(j.a,null),!l&&c.a.createElement(r.p,{md:12},c.a.createElement(r.m,{activeItem:1,length:y.length,slide:!0,showControls:!0,multiItem:!0,testimonial:!0,className:"my-carousel"},c.a.createElement(r.n,null,c.a.createElement(r.P,null,y.map(function(e,t){return c.a.createElement(r.o,{itemId:t+1,key:t},e.map(function(e,a){return c.a.createElement(r.p,{md:"4",key:"".concat(t,"-").concat(a)},c.a.createElement(r.Y,{className:"text-center"},c.a.createElement(r.c,{className:"white text-center"},c.a.createElement("div",{className:"card-avatar z-depth-1 mx-auto",style:{backgroundImage:"url(".concat(e.media,")")}})),c.a.createElement("h4",{className:"font-weight-bold mt-4 text-center"},"en"===R?e.nameEn:e.nameAr),c.a.createElement("h6",{className:"font-weight-bold my-3 text-center"},"en"===R?e.titleEn:e.titleAr),c.a.createElement("p",{className:"font-weight-normal text-left"},"en"===R?e.descriptionEn2:e.descriptionAr2)))}))}))))))))};a(543),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(s.a,null),c.a.createElement(r.r,{className:"section"},c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"".concat(u.a.contact.us),exact:!0,component:S}),c.a.createElement(l.b,{path:"".concat(u.a.contact.consultants),exact:!0,component:w}),c.a.createElement(l.b,{component:o.a}))),c.a.createElement(m.a,null),c.a.createElement(i.a,null))}}}]);