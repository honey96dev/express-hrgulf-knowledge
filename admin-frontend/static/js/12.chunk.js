(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{446:function(e,t,a){"use strict";var n=a(53),l=a(0),c=a.n(l),r=a(4),i=a(5),s=a(456),o=a(27);t.a=function(e){var t=e.circle,a=e.current,m=e.pageCount,u=e.width,E=e.onChange,d=Object(o.b)().t,O=Object(l.useState)([]),f=Object(n.a)(O,2),N=f[0],g=f[1],b="ltr"===d("DIRECTION")?"left":"right",h="ltr"===d("DIRECTION")?"right":"left";return Object(l.useEffect)(function(e){!u&&(u=s.isMobile?i.n:i.m);var t=Math.ceil(u/2),n=a-t<1?1:a-t,l=a+t-1>m?m:a+t-1;l-n<u&&(1===n&&(l=m<u?m:u),l===m&&(n=m-u+1<1?1:m-u+1));for(var c=[],r=n;r<=l;r++)c.push(r);g(c)},[a,m,u]),c.a.createElement(l.Fragment,null,m>0&&c.a.createElement(r.I,{circle:t},c.a.createElement(r.G,{disabled:1===a,onClick:function(){return E(1)}},c.a.createElement(r.H,{className:"page-link"},c.a.createElement(r.r,{icon:"angle-double-".concat(b)}))),c.a.createElement(r.G,{disabled:1===a,onClick:function(){return E(a-1)}},c.a.createElement(r.H,{className:"page-link"},c.a.createElement(r.r,{icon:"angle-".concat(b)}))),N.map(function(e,t){return c.a.createElement(r.G,{key:e,active:e===a,onClick:function(){return a!==e&&E(e)}},c.a.createElement(r.H,{className:"page-link"},e))}),c.a.createElement(r.G,{disabled:a===m,onClick:function(){return E(a+1)}},c.a.createElement(r.H,{className:"page-link"},c.a.createElement(r.r,{icon:"angle-".concat(h)}))),c.a.createElement(r.G,{disabled:a===m,onClick:function(){return E(m)}},c.a.createElement(r.H,{className:"page-link"},c.a.createElement(r.r,{icon:"angle-double-".concat(h)})))))}},451:function(e,t,a){"use strict";var n=a(0),l=a.n(n),c=a(27),r=a(135);a(134);t.a=function(e){var t=Object(c.b)().t;return l.a.createElement("div",{className:"loading-page"},l.a.createElement(r.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},453:function(e,t,a){"use strict";var n=a(457),l=a.n(n),c=a(5);t.a={isEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},isUsername:function(e){return e.length<=c.F&&/^[a-zA-Z_][0-9a-zA-Z_.-]+$/.test(String(e).toLowerCase())},isPhoneNumber:function(e){var t=l.a.PhoneNumberUtil.getInstance();try{var a=t.parseAndKeepRawInput(e);return t.isValidNumber(a)}catch(n){return!1}},isURL:function(e){return e.startsWith("http://")||e.startsWith("https://")}}},459:function(e,t,a){"use strict";var n=a(38),l=a(42),c=a(51);t.a={list:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.news.list,e).then(function(e){t(e)},function(e){a(e)})})},save:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.news.save,e).then(function(e){t(e)},function(e){a(e)})})},delete:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.news.delete,e).then(function(e){t(e)},function(e){a(e)})})},get:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.news.get,e).then(function(e){t(e)},function(e){a(e)})})},count:function(e){return new Promise(function(t,a){Object(n.a)(l.d,c.a.news.count,e).then(function(e){t(e)},function(e){a(e)})})}}},496:function(e,t,a){},497:function(e,t,a){},498:function(e,t,a){},499:function(e,t,a){},526:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(33),r=a(4),i=a(129),s=a(130),o=a(132),m=a(131),u=a(10),E=a(53),d=a(37),O=a(27),f=a(127),N=a(445),g=a(440),b=a(454),h=a(51),p=a(5),R=(a(496),a(137)),v=function(e){var t=e.id,a=e.date,n=e.time,c=(e.author,e.comments,e.media),i=e.title,s=e.description,o=e.detailLabel,m=e.detailLink,u=e.handleDelete,E=Object(O.b)().t,f=s.length>p.e?s.substr(0,p.e)+" ...":s;return l.a.createElement(r.M,null,l.a.createElement(r.i,{lg:"5",xl:"4"},l.a.createElement(r.Z,{hover:!0,className:"rounded z-depth-1-half mb-lg-0 mb-4"},!!c.length&&l.a.createElement("img",{className:"img-fluid post-media",src:c,alt:""}),!c.length&&l.a.createElement("img",{className:"img-fluid post-media",src:R.a.newsListitem,alt:""}),l.a.createElement(d.b,{to:"".concat(m,"/").concat(t)},l.a.createElement(r.u,{overlay:"white-slight"})))),l.a.createElement(r.i,{lg:"7",xl:"8"},l.a.createElement("h3",{className:"font-weight-bold mb-3 p-0"},l.a.createElement(d.b,{to:"".concat(m,"/").concat(t)},l.a.createElement("strong",null,i))),l.a.createElement("div",{className:"infor-section"},l.a.createElement("p",{className:"mr-2"},l.a.createElement("span",{className:"mr-2"},l.a.createElement(r.r,{icon:"calendar-alt"})),a),l.a.createElement("p",{className:"mr-2"},n)),l.a.createElement("p",{className:"dark-grey-text"},f),l.a.createElement(d.b,{to:"".concat(m,"/").concat(t)},l.a.createElement(r.f,{size:"sm",rounded:!0,color:"indigo"},o)),l.a.createElement(r.f,{size:"sm",rounded:!0,color:"danger",onClick:function(e){return!!u&&u(t,i)}},E("COMMON.BUTTON.DELETE"))))},S=function(e){var t=e.items,a=e.detailLabel,c=e.detailLink,r=e.handleDelete,i=t.length-1;return l.a.createElement("div",{className:"text-left mt-3"},t.map(function(e,t){return l.a.createElement(n.Fragment,{key:e.id},l.a.createElement(v,{id:e.id,date:e.date,time:e.time,author:"".concat(e.firstName," ").concat(e.lastName),title:e.title,description:e.description,media:e.media,detailLabel:a,detailLink:c,handleDelete:r}),t<i&&l.a.createElement("hr",{className:"my-5"}))}))},D=a(128),j=a(451),M=a(446),C=a(459),w=(a(497),function(){var e=Object(c.h)().page,t=Object(O.b)().t,a=Object(c.g)(),i=Object(n.useState)(!0),s=Object(E.a)(i,2),o=s[0],m=s[1],R=Object(n.useState)({}),v=Object(E.a)(R,2),w=v[0],I=v[1],A=Object(n.useState)({}),T=Object(E.a)(A,2),L=T[0],W=T[1],U=Object(n.useState)(0),x=Object(E.a)(U,2),k=x[0],F=x[1],_=Object(n.useState)([]),y=Object(E.a)(_,2),B=y[0],P=y[1],V=e?parseInt(e):1;Object(n.useEffect)(function(a){f.animateScroll.scrollToTop({duration:p.D}),C.a.list({page:e}).then(function(e){if(e.result===p.z){F(e.pageCount);var t=!0,a=!1,n=void 0;try{for(var l,c=e.data[Symbol.iterator]();!(t=(l=c.next()).done);t=!0){var r=l.value;r.media.length&&(r.media=r.media.startsWith("http://")||r.media.startsWith("https://")?r.media:Object(b.sprintf)("%s%s",h.a.assetsBaseUrl,r.media))}}catch(i){a=!0,n=i}finally{try{t||null==c.return||c.return()}finally{if(a)throw n}}P(e.data)}else I({show:!0,color:p.a,message:e.message});m(!1)}).catch(function(e){I({show:!0,color:p.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),m(!1)})},[e,t]);var z=function(e){W(Object.assign({},L,{show:!L.show}))},H=function(e){a.push("".concat(u.a.news.all,"/").concat(e))};return l.a.createElement(n.Fragment,null,l.a.createElement(N.Helmet,null,l.a.createElement("title",null,t("NAVBAR.NEWS.NEWS")," - ",t("SITE_NAME"))),l.a.createElement(r.d,null,l.a.createElement(r.e,{active:!0},t("NAVBAR.NEWS.NEWS"))),!!o&&l.a.createElement(D.a,null),!o&&!B.length&&l.a.createElement(j.a,null),!o&&!!B.length&&l.a.createElement(r.M,null,l.a.createElement(r.i,{md:12},l.a.createElement(g.a,{in:w.show,classNames:"fade-transition",timeout:p.D,unmountOnExit:!0,appear:!0},l.a.createElement(r.b,{color:w.color,dismiss:!0,onClosed:function(){return I({})}},w.message))),l.a.createElement(r.i,{md:12,className:"text-center"},l.a.createElement("div",{className:"mt-5"},l.a.createElement(M.a,{circle:!0,current:V,pageCount:k,onChange:H}))),l.a.createElement(r.i,{md:12,className:"text-left mt-3"},l.a.createElement("div",{className:"full-width"},l.a.createElement(d.b,{to:u.a.news.add},l.a.createElement(r.f,{size:"sm",color:"primary"},t("NAVBAR.NEWS.ADD"))))),l.a.createElement(r.i,{md:12},l.a.createElement(S,{items:B,detailLabel:t("COMMON.BUTTON.MODIFY"),detailLink:u.a.news.add,handleDelete:function(e,a){W(Object.assign({},L,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:a}),deleteId:e}))}})),l.a.createElement(r.i,{md:12,className:"text-center"},l.a.createElement("div",{className:"mt-5"},l.a.createElement(M.a,{circle:!0,current:V,pageCount:k,onChange:H})))),l.a.createElement(r.v,{isOpen:!!L.show,toggle:z,centered:!0},l.a.createElement(r.y,{toggle:z},L.title),l.a.createElement(r.w,{className:"text-left"},L.message),l.a.createElement(r.x,null,l.a.createElement(r.f,{type:"button",color:"danger",onClick:function(a){C.a.delete({id:L.deleteId,page:e}).then(function(e){if(e.result===p.z){F(e.pageCount);var t=!0,a=!1,n=void 0;try{for(var l,c=e.data[Symbol.iterator]();!(t=(l=c.next()).done);t=!0){var r=l.value;r.media.length&&(r.media=r.media.startsWith("http://")||r.media.startsWith("https://")?r.media:Object(b.sprintf)("%s%s",h.a.assetsBaseUrl,r.media))}}catch(i){a=!0,n=i}finally{try{t||null==c.return||c.return()}finally{if(a)throw n}}P(e.data)}else I({show:!0,color:p.a,message:e.message}),f.animateScroll.scrollToTop({duration:p.D});m(!1),z()}).catch(function(e){I({show:!0,color:p.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),f.animateScroll.scrollToTop({duration:p.D}),m(!1),z()})}},t("COMMON.BUTTON.DELETE")),l.a.createElement(r.f,{type:"button",color:"secondary",onClick:z},t("COMMON.BUTTON.CANCEL")))))}),I=a(447),A=a.n(I),T=a(448),L=a(449),W=a(464),U=a(30),x=a(453),k=(a(498),function(e){Object(L.a)(e);var t=Object(c.h)().id,a=Object(O.b)().t,i=Object(c.g)(),s=Object(U.c)(function(e){return e}).auth,o=Object(n.useState)(!0),m=Object(E.a)(o,2),R=m[0],v=m[1],S=Object(n.useState)({}),j=Object(E.a)(S,2),M=j[0],w=j[1],I=Object(n.useState)({}),k=Object(E.a)(I,2),F=(k[0],k[1],Object(n.useState)({})),_=Object(E.a)(F,2),y=_[0],B=_[1],P=Object(n.useState)(),V=Object(E.a)(P,2),z=V[0],H=V[1],K=Object(n.useState)(""),Y=Object(E.a)(K,2),Z=Y[0],G=Y[1],Q=Object(n.useState)(""),J=Object(E.a)(Q,2),$=J[0],X=J[1],q=Object(n.useState)(""),ee=Object(E.a)(q,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(null),le=Object(E.a)(ne,2),ce=le[0],re=le[1],ie=Object(n.useState)(""),se=Object(E.a)(ie,2),oe=se[0],me=se[1],ue=["jpg","jpeg","png"];Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:p.D}),H(t),!t&&v(!1),!t&&H(void 0),!t&&G(""),!t&&X(""),!t&&ae(""),t&&C.a.get({id:t}).then(function(e){e.result===p.z?(G(e.data.title),X(e.data.description),ae(e.data.url),e.data.media.length&&me(e.data.media.startsWith("http://")||e.data.media.startsWith("https://")?e.data.media:Object(b.sprintf)("%s%s",h.a.assetsBaseUrl,e.data.media))):w({show:!0,color:p.a,message:e.message}),v(!1)}).catch(function(e){console.log(e),w({show:!0,color:p.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),v(!1)})},[t]);var Ee=function(){var e=Object(T.a)(A.a.mark(function e(t){var n,l;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=new FormData,z&&n.append("id",z),n.append("userId",s.user.id),n.append("title",Z),n.append("description",$),n.append("url",te),n.append("file",ce),e.next=11,C.a.save(n);case 11:l=e.sent,!z&&H(l.data.insertId),w({show:!0,color:l.result,message:l.message}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),w({show:!0,color:p.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 19:case"end":return e.stop()}},e,null,[[1,16]])}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement(N.Helmet,null,l.a.createElement("title",null,a(z?"NEWS.ADD.MODIFY_NEWS":"NEWS.ADD.ADD_NEWS")," - ",a("SITE_NAME"))),l.a.createElement(r.d,null,l.a.createElement(r.e,null,l.a.createElement(d.b,{to:u.a.news.all},a("NAVBAR.NEWS.NEWS"))),l.a.createElement(r.e,{active:!0},a(z?"NEWS.ADD.MODIFY_NEWS":"NEWS.ADD.ADD_NEWS"))),!!R&&l.a.createElement(D.a,null),!R&&l.a.createElement(r.g,null,l.a.createElement(r.h,{className:"mx-md-4 mx-sm-1 text-left"},l.a.createElement("form",{onSubmit:Ee},l.a.createElement("div",{className:"text-center"},l.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},l.a.createElement("strong",null,a(z?"NEWS.ADD.MODIFY_NEWS":"NEWS.ADD.ADD_NEWS")))),l.a.createElement(r.M,null,l.a.createElement(r.i,{md:8},l.a.createElement(r.t,{label:a("NEWS.TITLE"),outline:!0,autoFocus:!0,value:Z,onChange:function(e){return G(e.target.value)},onBlur:function(e){return B(Object.assign({},y,{title:!0}))}},y.title&&0===Z.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("NEWS.TITLE")}))),l.a.createElement(r.t,{label:a("NEWS.DESCRIPTION"),type:"textarea",rows:p.C,outline:!0,value:$,onChange:function(e){return X(e.target.value)},onBlur:function(e){return B(Object.assign({},y,{description:!0}))}},y.description&&0===$.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("NEWS.DESCRIPTION")}))),l.a.createElement(r.t,{label:a("NEWS.URL"),outline:!0,value:te,onChange:function(e){return ae(e.target.value)},onBlur:function(e){return B(Object.assign({},y,{url:!0}))}},y.url&&!!te.length&&!x.a.isURL(te)&&l.a.createElement("div",{className:"invalid-field"},te.length?a("COMMON.VALIDATION.INVALID",{field:a("NEWS.URL")}):a("COMMON.VALIDATION.REQUIRED",{field:a("NEWS.URL")})))),l.a.createElement(r.i,{md:4},l.a.createElement("div",{className:"md-form"},l.a.createElement(W.a,{defaultFileSrc:oe,getValue:re,showRemove:!1,maxFileSize:p.g,allowedFileExtensions:ue,messageDefault:a("COMMON.FILE_UPLOAD.DEFAULT"),messageReplace:a("COMMON.FILE_UPLOAD.REPLACE"),messageRemove:a("COMMON.FILE_UPLOAD.REMOVE"),messageError:a("COMMON.FILE_UPLOAD.ERROR"),errorFileSize:a("COMMON.FILE_UPLOAD.ERROR_FILESIZE",{max:p.g}),errorFileExtension:a("COMMON.FILE_UPLOAD.ERROR_FILEEXTENSION",{extensions:ue.join(", ")})})))),l.a.createElement(g.a,{in:M.show,classNames:"fade-transition",timeout:p.D,unmountOnExit:!0,appear:!0},l.a.createElement(r.b,{color:M.color,dismiss:!0,onClosed:function(){return w({})}},M.message)),l.a.createElement(n.Fragment,null,l.a.createElement(r.f,{type:"submit",color:"indigo",size:"sm",disabled:!Z||!Z.length||!$||!$.length||!!te.length&&!x.a.isURL(te)},a(z?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),l.a.createElement(r.f,{flat:!0,size:"sm",onClick:function(e){i.goBack()}},a("COMMON.BUTTON.BACK")))))))});a(499),t.default=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(i.a,null),l.a.createElement(r.k,{className:"section"},l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"".concat(u.a.news.add,"/:id"),component:k}),l.a.createElement(c.b,{path:u.a.news.add,component:k}),l.a.createElement(c.b,{path:u.a.news.all,exact:!0,component:w}),l.a.createElement(c.b,{path:"".concat(u.a.news.all,"/:page"),exact:!0,component:w}),l.a.createElement(c.b,{component:m.a}))),l.a.createElement(s.a,null),l.a.createElement(o.a,null))}}}]);