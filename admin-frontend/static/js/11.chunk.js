(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{415:function(e,t,a){"use strict";var n=a(70),l=a(0),c=a.n(l),r=a(4),s=a(5),i=a(425),o=a(26);t.a=function(e){var t=e.circle,a=e.current,m=e.pageCount,u=e.width,E=e.onChange,d=Object(o.b)().t,O=Object(l.useState)([]),N=Object(n.a)(O,2),f=N[0],g=N[1],b="ltr"===d("DIRECTION")?"left":"right",h="ltr"===d("DIRECTION")?"right":"left";return Object(l.useEffect)(function(e){!u&&(u=i.isMobile?s.l:s.k);var t=Math.ceil(u/2),n=a-t<1?1:a-t,l=a+t-1>m?m:a+t-1;l-n<u&&(1===n&&(l=m<u?m:u),l===m&&(n=m-u+1<1?1:m-u+1));for(var c=[],r=n;r<=l;r++)c.push(r);g(c)},[a,m,u]),c.a.createElement(l.Fragment,null,m>0&&c.a.createElement(r.H,{circle:t},c.a.createElement(r.F,{disabled:1===a,onClick:function(){return E(1)}},c.a.createElement(r.G,{className:"page-link"},c.a.createElement(r.q,{icon:"angle-double-".concat(b)}))),c.a.createElement(r.F,{disabled:1===a,onClick:function(){return E(a-1)}},c.a.createElement(r.G,{className:"page-link"},c.a.createElement(r.q,{icon:"angle-".concat(b)}))),f.map(function(e,t){return c.a.createElement(r.F,{key:e,active:e===a,onClick:function(){return a!==e&&E(e)}},c.a.createElement(r.G,{className:"page-link"},e))}),c.a.createElement(r.F,{disabled:a===m,onClick:function(){return E(a+1)}},c.a.createElement(r.G,{className:"page-link"},c.a.createElement(r.q,{icon:"angle-".concat(h)}))),c.a.createElement(r.F,{disabled:a===m,onClick:function(){return E(m)}},c.a.createElement(r.G,{className:"page-link"},c.a.createElement(r.q,{icon:"angle-double-".concat(h)})))))}},420:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(26),r=a(130);a(129);t.a=function(e){var t=Object(c.b)().t;return l.a.createElement("div",{className:"loading-page"},l.a.createElement(r.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},422:function(e,t,a){"use strict";var n=a(426),l=a.n(n),c=a(5);t.a={isEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},isUsername:function(e){return e.length<=c.w&&/^[a-zA-Z_][0-9a-zA-Z_.-]+$/.test(String(e).toLowerCase())},isPhoneNumber:function(e){var t=l.a.PhoneNumberUtil.getInstance();try{var a=t.parseAndKeepRawInput(e);return t.isValidNumber(a)}catch(n){return!1}},isURL:function(e){return e.startsWith("http://")||e.startsWith("https://")}}},428:function(e,t,a){"use strict";var n=a(36),l=a(40),c=a(49);t.a={list:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.news.list,e).then(function(e){t(e)},function(e){a(e)})})},save:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.news.save,e).then(function(e){t(e)},function(e){a(e)})})},delete:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.news.delete,e).then(function(e){t(e)},function(e){a(e)})})},get:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.news.get,e).then(function(e){t(e)},function(e){a(e)})})},count:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.news.count,e).then(function(e){t(e)},function(e){a(e)})})}}},464:function(e,t,a){},465:function(e,t,a){},467:function(e,t,a){},468:function(e,t,a){},494:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(38),r=a(4),s=a(126),i=a(124),o=a(127),m=a(125),u=a(10),E=a(70),d=a(35),O=a(26),N=a(122),f=a(414),g=a(409),b=a(424),h=a(49),p=a(5),R=(a(464),function(e){var t=e.id,a=e.date,n=e.time,c=(e.author,e.comments,e.media),s=e.title,i=e.description,o=e.detailLabel,m=e.detailLink,u=e.handleDelete,E=Object(O.b)().t,N=i.length>p.e?i.substr(0,p.e)+" ...":i;return l.a.createElement(r.L,null,l.a.createElement(r.h,{lg:"5",xl:"4"},l.a.createElement(r.Y,{hover:!0,className:"rounded z-depth-1-half mb-lg-0 mb-4"},l.a.createElement("img",{className:"img-fluid post-media",src:c,alt:""}),l.a.createElement(d.b,{to:"".concat(m,"/").concat(t)},l.a.createElement(r.t,{overlay:"white-slight"})))),l.a.createElement(r.h,{lg:"7",xl:"8"},l.a.createElement("h3",{className:"font-weight-bold mb-3 p-0"},l.a.createElement(d.b,{to:"".concat(m,"/").concat(t)},l.a.createElement("strong",null,s))),l.a.createElement("div",{className:"infor-section"},l.a.createElement("p",{className:"mr-2"},l.a.createElement("span",{className:"mr-2"},l.a.createElement(r.q,{icon:"calendar-alt"})),a),l.a.createElement("p",{className:"mr-2"},n)),l.a.createElement("p",{className:"dark-grey-text"},N),l.a.createElement(d.b,{to:"".concat(m,"/").concat(t)},l.a.createElement(r.e,{size:"sm",rounded:!0,color:"indigo"},o)),l.a.createElement(r.e,{size:"sm",rounded:!0,color:"danger",onClick:function(e){return!!u&&u(t,s)}},E("COMMON.BUTTON.DELETE"))))}),v=function(e){var t=e.items,a=e.detailLabel,c=e.detailLink,r=e.handleDelete,s=t.length-1;return l.a.createElement("div",{className:"text-left mt-3"},t.map(function(e,t){return l.a.createElement(n.Fragment,{key:e.id},l.a.createElement(R,{id:e.id,date:e.date,time:e.time,author:"".concat(e.firstName," ").concat(e.lastName),title:e.title,description:e.description,media:e.media,detailLabel:a,detailLink:c,handleDelete:r}),t<s&&l.a.createElement("hr",{className:"my-5"}))}))},S=a(123),j=a(420),M=a(415),D=a(428),C=(a(465),function(){var e=Object(c.h)().page,t=Object(O.b)().t,a=Object(c.g)(),s=Object(n.useState)(!0),i=Object(E.a)(s,2),o=i[0],m=i[1],R=Object(n.useState)({}),C=Object(E.a)(R,2),w=C[0],I=C[1],A=Object(n.useState)({}),L=Object(E.a)(A,2),T=L[0],W=L[1],U=Object(n.useState)(0),F=Object(E.a)(U,2),x=F[0],k=F[1],_=Object(n.useState)([]),y=Object(E.a)(_,2),B=y[0],P=y[1],V=e?parseInt(e):1;Object(n.useEffect)(function(a){N.animateScroll.scrollToTop({duration:p.u}),D.a.list({page:e}).then(function(e){if(e.result===p.q){k(e.pageCount);var t=!0,a=!1,n=void 0;try{for(var l,c=e.data[Symbol.iterator]();!(t=(l=c.next()).done);t=!0){var r=l.value;r.media=r.media.startsWith("http://")||r.media.startsWith("https://")?r.media:Object(b.sprintf)("%s%s",h.a.assetsBaseUrl,r.media)}}catch(s){a=!0,n=s}finally{try{t||null==c.return||c.return()}finally{if(a)throw n}}P(e.data)}else I({show:!0,color:p.a,message:e.message});m(!1)}).catch(function(e){I({show:!0,color:p.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),m(!1)})},[e,t]);var z=function(e){W(Object.assign({},T,{show:!T.show}))},q=function(e){a.push("".concat(u.a.posts.all,"/").concat(e))};return l.a.createElement(n.Fragment,null,l.a.createElement(f.Helmet,null,l.a.createElement("title",null,t("NAVBAR.NEWS.NEWS")," - ",t("SITE_NAME"))),l.a.createElement(r.c,null,l.a.createElement(r.d,{active:!0},t("NAVBAR.NEWS.NEWS"))),!!o&&l.a.createElement(S.a,null),!o&&!B.length&&l.a.createElement(j.a,null),!o&&!!B.length&&l.a.createElement(r.L,null,l.a.createElement(r.h,{md:12},l.a.createElement(g.a,{in:w.show,classNames:"fade-transition",timeout:p.u,unmountOnExit:!0,appear:!0},l.a.createElement(r.b,{color:w.color,dismiss:!0,onClosed:function(){return I({})}},w.message))),l.a.createElement(r.h,{md:12,className:"text-center"},l.a.createElement("div",{className:"mt-5"},l.a.createElement(M.a,{circle:!0,current:V,pageCount:x,onChange:q}))),l.a.createElement(r.h,{md:12,className:"text-left mt-3"},l.a.createElement("div",{className:"full-width"},l.a.createElement(d.b,{to:u.a.news.add},l.a.createElement(r.e,{size:"sm",color:"primary"},t("NAVBAR.NEWS.ADD"))))),l.a.createElement(r.h,{md:12},l.a.createElement(v,{items:B,detailLabel:t("COMMON.BUTTON.MODIFY"),detailLink:u.a.news.add,handleDelete:function(e,a){W(Object.assign({},T,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:a}),deleteId:e}))}})),l.a.createElement(r.h,{md:12,className:"text-center"},l.a.createElement("div",{className:"mt-5"},l.a.createElement(M.a,{circle:!0,current:V,pageCount:x,onChange:q})))),l.a.createElement(r.u,{isOpen:!!T.show,toggle:z,centered:!0},l.a.createElement(r.x,{toggle:z},T.title),l.a.createElement(r.v,{className:"text-left"},T.message),l.a.createElement(r.w,null,l.a.createElement(r.e,{type:"button",color:"danger",onClick:function(a){D.a.delete({id:T.deleteId,page:e}).then(function(e){if(e.result===p.q){k(e.pageCount);var t=!0,a=!1,n=void 0;try{for(var l,c=e.data[Symbol.iterator]();!(t=(l=c.next()).done);t=!0){var r=l.value;r.media=r.media.startsWith("http://")||r.media.startsWith("https://")?r.media:Object(b.sprintf)("%s%s",h.a.assetsBaseUrl,r.media)}}catch(s){a=!0,n=s}finally{try{t||null==c.return||c.return()}finally{if(a)throw n}}P(e.data)}else I({show:!0,color:p.a,message:e.message}),N.animateScroll.scrollToTop({duration:p.u});m(!1),z()}).catch(function(e){I({show:!0,color:p.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),N.animateScroll.scrollToTop({duration:p.u}),m(!1),z()})}},t("COMMON.BUTTON.DELETE")),l.a.createElement(r.e,{type:"button",color:"secondary",onClick:z},t("COMMON.BUTTON.CANCEL")))))}),w=a(416),I=a.n(w),A=a(417),L=a(418),T=a(466),W=a(29),U=a(422),F=(a(467),function(e){Object(L.a)(e);var t=Object(c.h)().id,a=Object(O.b)().t,s=Object(c.g)(),i=Object(W.c)(function(e){return e}).auth,o=Object(n.useState)(!0),m=Object(E.a)(o,2),R=m[0],v=m[1],j=Object(n.useState)({}),M=Object(E.a)(j,2),C=M[0],w=M[1],F=Object(n.useState)({}),x=Object(E.a)(F,2),k=(x[0],x[1],Object(n.useState)({})),_=Object(E.a)(k,2),y=_[0],B=_[1],P=Object(n.useState)(),V=Object(E.a)(P,2),z=V[0],q=V[1],Y=Object(n.useState)(""),K=Object(E.a)(Y,2),G=K[0],Z=K[1],Q=Object(n.useState)(""),H=Object(E.a)(Q,2),J=H[0],$=H[1],X=Object(n.useState)(""),ee=Object(E.a)(X,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(null),le=Object(E.a)(ne,2),ce=le[0],re=le[1],se=Object(n.useState)(""),ie=Object(E.a)(se,2),oe=ie[0],me=ie[1],ue=["jpg","jpeg","png"];Object(n.useEffect)(function(e){N.animateScroll.scrollToTop({duration:p.u}),q(t),!t&&v(!1),!t&&q(void 0),!t&&Z(""),!t&&$(""),!t&&ae(""),t&&D.a.get({id:t}).then(function(e){e.result===p.q?(Z(e.data.title),$(e.data.description),ae(e.data.url),me(e.data.media.startsWith("http://")||e.data.media.startsWith("https://")?e.data.media:Object(b.sprintf)("%s%s",h.a.assetsBaseUrl,e.data.media))):w({show:!0,color:p.a,message:e.message}),v(!1)}).catch(function(e){console.log(e),w({show:!0,color:p.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),v(!1)})},[t]);var Ee=function(){var e=Object(A.a)(I.a.mark(function e(t){var n,l;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=new FormData,z&&n.append("id",z),n.append("userId",i.user.id),n.append("title",G),n.append("description",J),n.append("url",te),n.append("file",ce),e.next=11,D.a.save(n);case 11:l=e.sent,!z&&q(l.data.insertId),w({show:!0,color:l.result,message:l.message}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),w({show:!0,color:p.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 19:case"end":return e.stop()}},e,null,[[1,16]])}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement(f.Helmet,null,l.a.createElement("title",null,a(z?"NEWS.ADD.MODIFY_NEWS":"NEWS.ADD.ADD_NEWS")," - ",a("SITE_NAME"))),l.a.createElement(r.c,null,l.a.createElement(r.d,null,l.a.createElement(d.b,{to:u.a.news.all},a("NAVBAR.NEWS.NEWS"))),l.a.createElement(r.d,{active:!0},a(z?"NEWS.ADD.MODIFY_NEWS":"NEWS.ADD.ADD_NEWS"))),!!R&&l.a.createElement(S.a,null),!R&&l.a.createElement(r.f,null,l.a.createElement(r.g,{className:"mx-md-4 mx-sm-1 text-left"},l.a.createElement("form",{onSubmit:Ee},l.a.createElement("div",{className:"text-center"},l.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},l.a.createElement("strong",null,a(z?"NEWS.ADD.MODIFY_NEWS":"NEWS.ADD.ADD_NEWS")))),l.a.createElement(r.L,null,l.a.createElement(r.h,{md:8},l.a.createElement(r.r,{label:a("NEWS.TITLE"),outline:!0,autoFocus:!0,value:G,onChange:function(e){return Z(e.target.value)},onBlur:function(e){return B(Object.assign({},y,{title:!0}))}},y.title&&0===G.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("NEWS.TITLE")}))),l.a.createElement(r.r,{label:a("NEWS.DESCRIPTION"),type:"textarea",rows:p.t,outline:!0,value:J,onChange:function(e){return $(e.target.value)},onBlur:function(e){return B(Object.assign({},y,{description:!0}))}},y.description&&0===J.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("NEWS.DESCRIPTION")}))),l.a.createElement(r.r,{label:a("NEWS.URL"),outline:!0,value:te,onChange:function(e){return ae(e.target.value)},onBlur:function(e){return B(Object.assign({},y,{url:!0}))}},y.url&&!!te.length&&!U.a.isURL(te)&&l.a.createElement("div",{className:"invalid-field"},te.length?a("COMMON.VALIDATION.INVALID",{field:a("NEWS.URL")}):a("COMMON.VALIDATION.REQUIRED",{field:a("NEWS.URL")})))),l.a.createElement(r.h,{md:4},l.a.createElement("div",{className:"md-form"},l.a.createElement(T.a,{defaultFileSrc:oe,getValue:re,showRemove:!1,maxFileSize:p.g,allowedFileExtensions:ue,messageDefault:a("COMMON.FILE_UPLOAD.DEFAULT"),messageReplace:a("COMMON.FILE_UPLOAD.REPLACE"),messageRemove:a("COMMON.FILE_UPLOAD.REMOVE"),messageError:a("COMMON.FILE_UPLOAD.ERROR"),errorFileSize:a("COMMON.FILE_UPLOAD.ERROR_FILESIZE",{max:p.g}),errorFileExtension:a("COMMON.FILE_UPLOAD.ERROR_FILEEXTENSION",{extensions:ue.join(", ")})})))),l.a.createElement(g.a,{in:C.show,classNames:"fade-transition",timeout:p.u,unmountOnExit:!0,appear:!0},l.a.createElement(r.b,{color:C.color,dismiss:!0,onClosed:function(){return w({})}},C.message)),l.a.createElement(n.Fragment,null,l.a.createElement(r.e,{type:"submit",color:"indigo",size:"sm",disabled:!G||!G.length||!J||!J.length||!!te.length&&!U.a.isURL(te)},a(z?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),l.a.createElement(r.e,{flat:!0,size:"sm",onClick:function(e){s.goBack()}},a("COMMON.BUTTON.BACK")))))))});a(468),t.default=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(s.a,null),l.a.createElement(r.j,{className:"section"},l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"".concat(u.a.news.add,"/:id"),component:F}),l.a.createElement(c.b,{path:u.a.news.add,component:F}),l.a.createElement(c.b,{path:u.a.news.all,exact:!0,component:C}),l.a.createElement(c.b,{path:"".concat(u.a.news.all,"/:page"),exact:!0,component:C}),l.a.createElement(c.b,{component:m.a}))),l.a.createElement(i.a,null),l.a.createElement(o.a,null))}}}]);