(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{409:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(25),r=a(123);a(122);t.a=function(e){var t=Object(l.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(r.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},410:function(e,t,a){"use strict";var n=a(66),c=a(0),l=a.n(c),r=a(5),o=a(9),i=a(417),s=a(25);t.a=function(e){var t=e.circle,a=e.current,m=e.pageCount,u=e.width,E=e.onChange,d=Object(s.b)().t,O=Object(c.useState)([]),f=Object(n.a)(O,2),b=f[0],h=f[1],g="ltr"===d("DIRECTION")?"left":"right",N="ltr"===d("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){var t=Math.ceil((u||(i.isMobile?o.h:o.g))/2),n=a-t<1?1:a-t,c=a+t-1>m?m:a+t-1;c-n<u&&(1===n&&(c=m<u?m:u),c===m&&(n=m-u+1<1?1:m-u+1));for(var l=[],r=n;r<=c;r++)l.push(r);h(l)},[a,m,u]),l.a.createElement(c.Fragment,null,m>0&&l.a.createElement(r.G,{circle:t},l.a.createElement(r.E,{disabled:1===a,onClick:function(){return E(1)}},l.a.createElement(r.F,{className:"page-link"},l.a.createElement(r.q,{icon:"angle-double-".concat(g)}))),l.a.createElement(r.E,{disabled:1===a,onClick:function(){return E(a-1)}},l.a.createElement(r.F,{className:"page-link"},l.a.createElement(r.q,{icon:"angle-".concat(g)}))),b.map(function(e,t){return l.a.createElement(r.E,{key:e,active:e===a,onClick:function(){return E(e)}},l.a.createElement(r.F,{className:"page-link"},e))}),l.a.createElement(r.E,{disabled:a===m,onClick:function(){return E(a+1)}},l.a.createElement(r.F,{className:"page-link"},l.a.createElement(r.q,{icon:"angle-".concat(N)}))),l.a.createElement(r.E,{disabled:a===m,onClick:function(){return E(m)}},l.a.createElement(r.F,{className:"page-link"},l.a.createElement(r.q,{icon:"angle-double-".concat(N)})))))}},411:function(e,t,a){"use strict";var n=a(415),c=a.n(n),l=a(9);t.a={isEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},isUsername:function(e){return e.length<=l.q&&/^[a-zA-Z_][0-9a-zA-Z_.-]+$/.test(String(e).toLowerCase())},isPhoneNumber:function(e){var t=c.a.PhoneNumberUtil.getInstance();try{var a=t.parseAndKeepRawInput(e);return t.isValidNumber(a)}catch(n){return!1}},isURL:function(e){return e.startsWith("http://")||e.startsWith("https://")}}},444:function(e,t,a){},445:function(e,t,a){},446:function(e,t,a){},447:function(e,t,a){},459:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(29),r=a(5),o=a(119),i=a(120),s=a(121),m=a(66),u=a(33),E=a(25),d=a(117),O=a(408),f=a(403),b=a(9),h=(a(444),function(e){var t=e.id,a=e.date,l=e.time,o=(e.author,e.url),i=e.title,s=e.isFile,m=e.detailLabel,d=e.detailLink,O=e.handleDelete,f=Object(E.b)().t,b=Object(n.useRef)();return c.a.createElement(r.K,null,c.a.createElement(r.h,{lg:"5",xl:"4"},!!s&&c.a.createElement(r.R,{hover:!0,className:"rounded z-depth-1-half mb-lg-0 mb-4",onMouseEnter:function(e){b.current.play()},onMouseLeave:function(e){b.current.pause()}},c.a.createElement("video",{ref:b,className:"video-fluid post-media",loop:!0},c.a.createElement("source",{src:o})),c.a.createElement(u.b,{to:"".concat(d,"/").concat(t)},c.a.createElement(r.s,{overlay:"white-slight"}))),!s&&c.a.createElement(r.R,{hover:!0,className:"rounded z-depth-1-half mb-lg-0 mb-4"},c.a.createElement("iframe",{className:"video-fluid post-media2",src:o,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),c.a.createElement(u.b,{to:"".concat(d,"/").concat(t)},c.a.createElement(r.s,{overlay:"white-slight"})))),c.a.createElement(r.h,{lg:"7",xl:"8"},c.a.createElement("h3",{className:"font-weight-bold mb-3 p-0"},c.a.createElement(u.b,{to:"".concat(d,"/").concat(t)},c.a.createElement("strong",null,i))),c.a.createElement("div",{className:"infor-section"},c.a.createElement("p",{className:"mr-2"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(r.q,{icon:"calendar-alt"})),a),c.a.createElement("p",{className:"mr-2"},l)),c.a.createElement("div",null,c.a.createElement(u.b,{to:"".concat(d,"/").concat(t)},c.a.createElement(r.e,{size:"sm",color:"indigo"},m)),c.a.createElement(r.e,{size:"sm",color:"danger",onClick:function(e){return!!O&&O(t,i)}},f("COMMON.BUTTON.DELETE")))))}),g=function(e){var t=e.items,a=e.detailLabel,l=e.detailLink,r=e.handleDelete,o=t.length-1;return c.a.createElement("div",{className:"text-left mt-3"},t.map(function(e,t){return c.a.createElement(n.Fragment,{key:e.id},c.a.createElement(h,{id:e.id,date:e.date,time:e.time,author:"".concat(e.firstName," ").concat(e.lastName),url:e.url,title:e.title,isFile:e.isFile,description:e.description,detailLabel:a,detailLink:l,handleDelete:r}),t<o&&c.a.createElement("hr",{className:"my-5"}))}))},N=a(118),p=a(409),D=a(410),v=a(36),R=a(39),I=a(47),j=function(e){return new Promise(function(t,a){Object(v.a)(R.d,I.a.video.list,e).then(function(e){t(e)},function(e){a(e)})})},C=function(e){return new Promise(function(t,a){Object(v.a)(R.d,I.a.video.save,e).then(function(e){t(e)},function(e){a(e)})})},M=function(e){return new Promise(function(t,a){Object(v.a)(R.d,I.a.video.delete,e).then(function(e){t(e)},function(e){a(e)})})},T=function(e){return new Promise(function(t,a){Object(v.a)(R.d,I.a.video.get,e).then(function(e){t(e)},function(e){a(e)})})},V=a(11),w=(a(445),function(){var e=Object(l.h)().page,t=Object(E.b)().t,a=Object(l.g)(),o=Object(n.useState)(!0),i=Object(m.a)(o,2),s=i[0],h=i[1],v=Object(n.useState)({}),R=Object(m.a)(v,2),I=R[0],C=R[1],T=Object(n.useState)({}),w=Object(m.a)(T,2),A=w[0],S=w[1],k=Object(n.useState)(0),L=Object(m.a)(k,2),F=L[0],U=L[1],x=Object(n.useState)([]),_=Object(m.a)(x,2),y=_[0],B=_[1],z=e?parseInt(e):1;Object(n.useEffect)(function(a){d.animateScroll.scrollToTop({duration:b.o}),j({page:e}).then(function(e){e.result===b.l?(U(e.pageCount),B(e.data)):C({show:!0,color:b.a,message:e.message}),h(!1)}).catch(function(e){C({show:!0,color:b.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),h(!1)})},[e,t]);var K=function(e){S(Object.assign({},A,{show:!A.show}))},q=function(e){a.push("".concat(V.a.posts.all,"/").concat(e))};return c.a.createElement(n.Fragment,null,c.a.createElement(O.Helmet,null,c.a.createElement("title",null,t("NAVBAR.VIDEO.VIDEO")," - ",t("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,{active:!0},t("NAVBAR.VIDEO.VIDEO"))),!!s&&c.a.createElement(N.a,null),!s&&!y.length&&c.a.createElement(p.a,null),!s&&!!y.length&&c.a.createElement(r.K,null,c.a.createElement(r.h,{md:12},c.a.createElement(f.a,{in:I.show,classNames:"fade-transition",timeout:b.o,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:I.color,dismiss:!0,onClosed:function(){return C({})}},I.message))),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(D.a,{circle:!0,current:z,pageCount:F,onChange:q}))),c.a.createElement(r.h,{md:12,className:"text-left mt-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(u.b,{to:V.a.video.add},c.a.createElement(r.e,{size:"sm",color:"primary"},t("NAVBAR.VIDEO.ADD"))))),c.a.createElement(r.h,{md:12},c.a.createElement(g,{items:y,detailLabel:t("COMMON.BUTTON.MODIFY"),detailLink:V.a.video.add,handleDelete:function(e,a){S(Object.assign({},A,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:a}),deleteId:e}))}})),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(D.a,{circle:!0,current:z,pageCount:F,onChange:q})))),c.a.createElement(r.t,{isOpen:!!A.show,toggle:K,centered:!0},c.a.createElement(r.w,{toggle:K},A.title),c.a.createElement(r.u,{className:"text-left"},A.message),c.a.createElement(r.v,null,c.a.createElement(r.e,{type:"button",color:"danger",onClick:function(a){M({id:A.deleteId,page:e}).then(function(e){e.result===b.l?(U(e.pageCount),B(e.data)):(C({show:!0,color:b.a,message:e.message}),d.animateScroll.scrollToTop({duration:b.o})),h(!1),K()}).catch(function(e){C({show:!0,color:b.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),d.animateScroll.scrollToTop({duration:b.o}),h(!1),K()})}},t("COMMON.BUTTON.DELETE")),c.a.createElement(r.e,{type:"button",color:"secondary",onClick:K},t("COMMON.BUTTON.CANCEL")))))}),A=a(413),S=a.n(A),k=a(414),L=a(416),F=a(34),U=a(411),x=(a(446),function(e){Object(L.a)(e);var t=Object(l.h)().id,a=Object(E.b)().t,o=Object(l.g)(),i=Object(F.c)(function(e){return e}).auth,s=Object(n.useState)(!0),h=Object(m.a)(s,2),g=h[0],p=h[1],D=Object(n.useState)({}),v=Object(m.a)(D,2),R=v[0],I=v[1],j=Object(n.useState)({}),M=Object(m.a)(j,2),w=(M[0],M[1],Object(n.useState)({})),A=Object(m.a)(w,2),x=A[0],_=A[1],y=Object(n.useState)(),B=Object(m.a)(y,2),z=B[0],K=B[1],q=Object(n.useState)(""),P=Object(m.a)(q,2),W=P[0],Y=P[1],Z=Object(n.useState)(""),Q=Object(m.a)(Z,2),H=Q[0],J=Q[1],$=Object(n.useState)(!1),G=Object(m.a)($,2),X=G[0],ee=G[1];Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:b.o}),K(t),!t&&p(!1),!t&&K(void 0),!t&&Y(""),!t&&J(""),!t&&ee(!1),t&&T({id:t}).then(function(e){e.result===b.l?(Y(e.data.title),J(e.data.url),ee(e.data.isFile)):I({show:!0,color:b.a,message:e.message}),p(!1)}).catch(function(e){console.log(e),I({show:!0,color:b.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),p(!1)})},[t]);var te=function(){var e=Object(k.a)(S.a.mark(function e(t){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,C({id:z,userId:i.user.id,title:W,url:H,isFile:X});case 4:n=e.sent,!z&&K(n.data.insertId),I({show:!0,color:n.result,message:n.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),I({show:!0,color:b.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(O.Helmet,null,c.a.createElement("title",null,a(z?"VIDEO.ADD.MODIFY_VIDEO":"VIDEO.ADD.ADD_VIDEO")," - ",a("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,c.a.createElement(u.b,{to:V.a.video.all},a("NAVBAR.VIDEO.VIDEO"))),c.a.createElement(r.d,{active:!0},a(z?"VIDEO.ADD.MODIFY_VIDEO":"VIDEO.ADD.ADD_VIDEO"))),!!g&&c.a.createElement(N.a,null),c.a.createElement(r.f,null,c.a.createElement(r.g,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:te},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},c.a.createElement("strong",null,a(z?"VIDEO.ADD.MODIFY_VIDEO":"VIDEO.ADD.ADD_VIDEO")))),c.a.createElement(r.K,null,c.a.createElement(r.h,{md:12},c.a.createElement(r.r,{label:a("VIDEO.TITLE"),outline:!0,autoFocus:!0,value:W,onChange:function(e){return Y(e.target.value)},onBlur:function(e){return _(Object.assign({},x,{title:!0}))}},x.title&&0===W.length&&c.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("VIDEO.TITLE")}))),c.a.createElement(r.r,{label:a("VIDEO.URL"),outline:!0,value:H,onChange:function(e){return J(e.target.value)},onBlur:function(e){return _(Object.assign({},x,{url:!0}))}},x.url&&!U.a.isURL(H)&&c.a.createElement("div",{className:"invalid-field"},H.length?a("COMMON.VALIDATION.INVALID",{field:a("VIDEO.URL")}):a("COMMON.VALIDATION.REQUIRED",{field:a("VIDEO.URL")}))),c.a.createElement("div",{className:"my-4"},c.a.createElement(r.r,{label:a("VIDEO.IS_FILE"),type:"checkbox",filled:!0,id:"isFile",checked:X,onClick:function(e){return ee(!X)}})))),c.a.createElement(f.a,{in:R.show,classNames:"fade-transition",timeout:b.o,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:R.color,dismiss:!0,onClosed:function(){return I({})}},R.message)),c.a.createElement(n.Fragment,null,c.a.createElement(r.e,{type:"submit",color:"indigo",size:"sm",disabled:!W||!W.length||!H||!U.a.isURL(H)},a(z?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),c.a.createElement(r.e,{flat:!0,size:"sm",onClick:function(e){o.goBack()}},a("COMMON.BUTTON.BACK")))))))});a(447),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(o.a,null),c.a.createElement(r.j,{className:"section"},c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"".concat(V.a.video.add,"/:id"),component:x}),c.a.createElement(l.b,{path:V.a.video.add,component:x}),c.a.createElement(l.b,{path:V.a.video.all,exact:!0,component:w}),c.a.createElement(l.b,{path:"".concat(V.a.video.all,"/:page"),exact:!0,component:w}))),c.a.createElement(i.a,null),c.a.createElement(s.a,null))}}}]);