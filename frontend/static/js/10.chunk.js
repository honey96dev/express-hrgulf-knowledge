(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{406:function(e,t,a){"use strict";var n=a(47),c=a(0),r=a.n(c),l=a(7),o=a(31),s=a(412),u=a(24);t.a=function(e){var t=e.circle,a=e.current,i=e.pageCount,m=e.width,E=e.onChange,O=Object(u.b)().t,f=Object(c.useState)([]),d=Object(n.a)(f,2),b=d[0],p=d[1],g="ltr"===O("DIRECTION")?"left":"right",h="ltr"===O("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){var t=Math.ceil((m||(s.isMobile?o.r:o.q))/2),n=a-t<1?1:a-t,c=a+t-1>i?i:a+t-1;c-n<m&&(1===n&&(c=i<m?i:m),c===i&&(n=i-m+1<1?1:i-m+1));for(var r=[],l=n;l<=c;l++)r.push(l);p(r)},[a,i,m]),r.a.createElement(c.Fragment,null,i>0&&r.a.createElement(l.E,{circle:t},r.a.createElement(l.C,{disabled:1===a,onClick:function(){return E(1)}},r.a.createElement(l.D,{className:"page-link"},r.a.createElement(l.q,{icon:"angle-double-".concat(g)}))),r.a.createElement(l.C,{disabled:1===a,onClick:function(){return E(a-1)}},r.a.createElement(l.D,{className:"page-link"},r.a.createElement(l.q,{icon:"angle-".concat(g)}))),b.map(function(e,t){return r.a.createElement(l.C,{key:e,active:e===a,onClick:function(){return a!==e&&E(e)}},r.a.createElement(l.D,{className:"page-link"},e))}),r.a.createElement(l.C,{disabled:a===i,onClick:function(){return E(a+1)}},r.a.createElement(l.D,{className:"page-link"},r.a.createElement(l.q,{icon:"angle-".concat(h)}))),r.a.createElement(l.C,{disabled:a===i,onClick:function(){return E(i)}},r.a.createElement(l.D,{className:"page-link"},r.a.createElement(l.q,{icon:"angle-double-".concat(h)})))))}},409:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(24),l=a(124);a(123);t.a=function(e){var t=Object(r.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(l.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},458:function(e,t,a){},459:function(e,t,a){},460:function(e,t,a){},461:function(e,t,a){},462:function(e,t,a){},463:function(e,t,a){},465:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),l=a(7),o=a(120),s=a(121),u=a(122),i=a(119),m=a(125),E=a(12),O=a(66),f=a(47),d=a(32),b=a(33),p=a(24),g=a(117),h=a(404),N=a(399),j=a(118),w=a(409),R=a(406),v=a(34),y=a(39),S=a(48),C={packages:function(e){return new Promise(function(t,a){Object(v.a)(y.d,S.a.vote.packages,e).then(function(e){t(e)},function(e){a(e)})})},getPackage:function(e){return new Promise(function(t,a){Object(v.a)(y.d,S.a.vote.getPackage,e).then(function(e){t(e)},function(e){a(e)})})},questions:function(e){return new Promise(function(t,a){Object(v.a)(y.d,S.a.vote.questions,e).then(function(e){t(e)},function(e){a(e)})})},update:function(e){return new Promise(function(t,a){Object(v.a)(y.d,S.a.vote.update,e).then(function(e){t(e)},function(e){a(e)})})},result:function(e){return new Promise(function(t,a){Object(v.a)(y.d,S.a.vote.result,e).then(function(e){t(e)},function(e){a(e)})})}},T=a(31);a(458);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var I=function(){var e=Object(r.h)(),t=e.scope,a=e.page,o=Object(p.b)().t,s=Object(r.g)(),u=Object(b.c)(function(e){return e}).auth,i=Object(n.useState)(!0),m=Object(f.a)(i,2),v=m[0],y=m[1],S=Object(n.useState)({}),I=Object(f.a)(S,2),P=I[0],M=I[1],V=Object(n.useState)(0),D=Object(f.a)(V,2),x=D[0],U=D[1],A=Object(n.useState)([]),_=Object(f.a)(A,2),q=_[0],B=_[1],F=a?parseInt(a):1,z=q.length-1;Object(n.useEffect)(function(e){g.animateScroll.scrollToTop({duration:T.z}),K()},[t,a,o]);var K=function(e){C.packages({scope:t,page:a,userId:u.user?u.user.id:void 0}).then(function(e){e.result===T.w?(U(e.pageCount),B(e.data),M(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},P,{show:!1}))):M({show:!0,color:T.a,message:e.message}),y(!1)}).catch(function(e){M({show:!0,color:T.a,message:o("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),y(!1)})},H=function(e){s.push("".concat(E.a.vote.all,"/").concat(t,"/").concat(e))};return c.a.createElement(n.Fragment,null,c.a.createElement(h.Helmet,null,c.a.createElement("title",null,o("VOTE.VOTE")," - ",o("SITE_NAME"))),c.a.createElement(l.c,null,c.a.createElement(l.d,null,o("NAVBAR.VOTE.VOTE")),c.a.createElement(l.d,{active:!0},t===T.v?o("NAVBAR.VOTE.CURRENT"):o("NAVBAR.VOTE.PREVIOUS"))),!!v&&c.a.createElement(j.a,null),!v&&!q.length&&c.a.createElement(w.a,null),!v&&!!q.length&&c.a.createElement(l.I,null,c.a.createElement(l.h,{md:12},c.a.createElement(N.a,{in:P.show,classNames:"fade-transition",timeout:T.z,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:P.color,dismiss:!0,onClosed:function(){return M({})}},P.message))),c.a.createElement(l.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(R.a,{circle:!0,current:F,pageCount:x,width:10,onChange:H}))),c.a.createElement(l.h,{md:12},q.map(function(e,n){return c.a.createElement("div",{key:n,className:"text-left"},c.a.createElement("h4",{className:"text-primary font-weight-bold mb-2 p-0"},c.a.createElement(d.b,{to:"".concat(t===T.v?E.a.vote.questions:E.a.vote.result,"/").concat(e.id,"/1/").concat(a||1)},e.name)),c.a.createElement("p",null,o("VOTE.QUESTIONS"),": ",c.a.createElement("span",{className:"font-weight-bold"},e.questions)),n<z&&c.a.createElement("hr",{className:"my-3"}))})),c.a.createElement(l.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-3"},c.a.createElement(R.a,{circle:!0,current:F,pageCount:x,width:10,onChange:H})))))},P=(a(459),function(e){var t=e.data,a=e.onUpdate,r=Object(p.b)().t,o=Object(n.useState)(),s=Object(f.a)(o,2),u=s[0],i=s[1];Object(n.useEffect)(function(e){i(t.answered)},[t]);return c.a.createElement("div",{className:"text-left"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a&&a({questionId:t.id,answerId:u})}},t.answers.map(function(e,t){return c.a.createElement(n.Fragment,{key:t},c.a.createElement(l.r,{onClick:function(t){return i(e.id)},checked:u===e.id,label:e.answer,type:"radio",id:"radio".concat(e.id)}))}),c.a.createElement(l.e,{type:"submit",size:"sm",color:"indigo",rounded:!0,className:"mt-3",disabled:!u},r("VOTE.VOTE"))))});a(460);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var D=function(){var e=Object(r.h)(),t=e.packageId,a=e.page,o=e.page2,s=Object(p.b)().t,u=(Object(r.g)(),Object(b.c)(function(e){return e}).auth),i=Object(n.useState)(!0),m=Object(f.a)(i,2),O=m[0],w=m[1],R=Object(n.useState)({}),v=Object(f.a)(R,2),y=v[0],S=v[1],k=Object(n.useState)(0),I=Object(f.a)(k,2),M=(I[0],I[1]),D=Object(n.useState)(""),x=Object(f.a)(D,2),U=(x[0],x[1]),A=Object(n.useState)([]),_=Object(f.a)(A,2),q=_[0],B=_[1],F=Object(n.useState)(0),z=Object(f.a)(F,2),K=z[0],H=z[1],L=Object(n.useState)(0),W=Object(f.a)(L,2),Q=W[0],J=W[1];a&&parseInt(a),q.length;Object(n.useEffect)(function(e){g.animateScroll.scrollToTop({duration:T.z}),G()},[a,s]);var G=function(e){C.getPackage({packageId:t}).then(function(e){e.result===T.w?(U(e.data.name),S(V({},y,{show:!1}))):S({show:!0,color:T.a,message:e.message})}).catch(function(e){S({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),C.questions({packageId:t,page:a,userId:u.user.id}).then(function(e){if(e.result===T.w){var t=0,a=!0,n=!1,c=void 0;try{for(var r,l=e.data[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){if(!r.value.answered)break;t++}}catch(o){n=!0,c=o}finally{try{a||null==l.return||l.return()}finally{if(n)throw c}}H(t),J(t),B(e.data),M(e.pageCount),S(V({},y,{show:!1}))}else S({show:!0,color:T.a,message:e.message});w(!1)}).catch(function(e){S({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),w(!1)})},Y=function(e){var n=e.questionId,c=e.answerId;C.update({page:a,userId:u.user.id,packageId:t,questionId:n,answerId:c}).then(function(e){if(e.result===T.w){var t=0,a=!0,n=!1,c=void 0;try{for(var r,l=e.data[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){if(!r.value.answered)break;t++}}catch(o){n=!0,c=o}finally{try{a||null==l.return||l.return()}finally{if(n)throw c}}H(K+1),J(t),B(e.data),M(e.pageCount),S(V({},y,{show:!1}))}else S({show:!0,color:T.a,message:e.message});w(!1)}).catch(function(e){S({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),w(!1)})};return c.a.createElement(n.Fragment,null,c.a.createElement(h.Helmet,null,c.a.createElement("title",null,s("VOTE.QUESTIONS")," - ",s("SITE_NAME"))),c.a.createElement(l.c,null,c.a.createElement(l.d,null,s("VOTE.VOTE")),c.a.createElement(l.d,null,c.a.createElement(d.b,{to:"".concat(E.a.vote.current,"/").concat(o)},s("NAVBAR.VOTE.CURRENT"))),c.a.createElement(l.d,{active:!0},s("VOTE.QUESTIONS"))),!!O&&c.a.createElement(j.a,null),!O&&!q.length&&c.a.createElement(n.Fragment,null,c.a.createElement("h4",{className:"text-primary font-weight-bold no-data-section p-0 text-center"},s("COMMON.ERROR.NO_DATA"))),!O&&!!q.length&&c.a.createElement(l.I,null,c.a.createElement(l.h,{md:12},c.a.createElement(N.a,{in:y.show,classNames:"fade-transition",timeout:T.z,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:y.color,dismiss:!0,onClosed:function(){return S({})}},y.message))),c.a.createElement(l.h,{md:12},c.a.createElement(l.O,{vertical:!0,className:"text-left"},q.map(function(e,t){return c.a.createElement(l.N,{key:t,className:"".concat(e.answered||t<=Q?"completed":"")},c.a.createElement("a",{onClick:function(a){return(!!e.answered||t<=Q)&&H(t)}},c.a.createElement("span",{className:"circle"},t+1),!!e.answered&&c.a.createElement("span",{className:"label text-left"},s("COMMON.COMPLETE.COMPLETED"))),t===K&&c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"step-content grey lighten-4"},c.a.createElement("h6",{className:"mb-0"},e.question)),c.a.createElement("div",{className:"step-content mt-3"},c.a.createElement(P,{data:e,onUpdate:Y}))))})))))},x=(a(461),a(462),function(e){var t=e.data,a=Object(p.b)().t,r=Object(n.useState)(100),o=Object(f.a)(r,2),s=o[0],u=o[1],i=Object(n.useState)({}),m=Object(f.a)(i,2),E=m[0],d=m[1],b="ltr"===a("DIRECTION")?"/":"\\";return Object(n.useEffect)(function(e){var a={},n=!0,c=!1,r=void 0;try{for(var l,o=t.answers[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var s=l.value;a=Object.assign({},a,Object(O.a)({},s.answer,s.count))}}catch(i){c=!0,r=i}finally{try{n||null==o.return||o.return()}finally{if(c)throw r}}u(t.answersCount),d(a)},[t,a]),c.a.createElement("div",{className:"text-left"},t.answers.map(function(e,t){return c.a.createElement(n.Fragment,{key:t},c.a.createElement("p",{className:"mb-1"},e.answer),c.a.createElement(l.H,{className:"mt-0 mb-3",material:!0,value:(E[e.answer]||0)/s*100,animated:!0,height:"20px"},E[e.answer]," ",b," ",s))}))});function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var A=function(){var e=Object(r.h)(),t=e.packageId,a=e.page,o=e.page2,s=Object(p.b)().t,u=Object(r.g)(),i=(Object(b.c)(function(e){return e}).auth,Object(n.useState)(!0)),m=Object(f.a)(i,2),w=m[0],v=m[1],y=Object(n.useState)({}),S=Object(f.a)(y,2),k=S[0],I=S[1],P=Object(n.useState)(0),M=Object(f.a)(P,2),V=M[0],D=M[1],A=Object(n.useState)([]),_=Object(f.a)(A,2),q=_[0],B=_[1],F=Object(n.useState)({}),z=Object(f.a)(F,2),K=z[0],H=z[1],L=Object(n.useState)(""),W=Object(f.a)(L,2),Q=W[0],J=W[1],G=a?parseInt(a):1;Object(n.useEffect)(function(e){g.animateScroll.scrollToTop({duration:T.z}),Y()},[a,s]);var Y=function(e){C.getPackage({packageId:t}).then(function(e){e.result===T.w?(H(e.data),J(e.data.releasedDate)):I({show:!0,color:T.a,message:e.message})}).catch(function(e){I({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),C.result({packageId:t,page:a}).then(function(e){e.result===T.w?(D(e.pageCount),B(e.data),I(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},k,{show:!1}))):I({show:!0,color:T.a,message:e.message}),v(!1)}).catch(function(e){I({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),v(!1)})},X=function(e){u.push("".concat(E.a.vote.result,"/").concat(t,"/").concat(e,"/").concat(o))};return c.a.createElement(n.Fragment,null,c.a.createElement(h.Helmet,null,c.a.createElement("title",null,s("VOTE.RESULT")," - ",s("SITE_NAME"))),c.a.createElement(l.c,null,c.a.createElement(l.d,null,s("NAVBAR.VOTE.VOTE")),c.a.createElement(l.d,null,c.a.createElement(d.b,{to:"".concat(E.a.vote.previous,"/").concat(o||1)},s("NAVBAR.VOTE.PREVIOUS"))),c.a.createElement(l.d,{active:!0},s("VOTE.RESULT"))),!!w&&c.a.createElement(j.a,null),!w&&c.a.createElement(l.I,null,c.a.createElement(l.h,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},s("VOTE.RESULT")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("VOTE.PACKAGE"),": "),K.name)),c.a.createElement(l.h,{md:12},c.a.createElement(N.a,{in:k.show,classNames:"fade-transition",timeout:T.z,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:k.color,dismiss:!0,onClosed:function(){return I({})}},k.message))),c.a.createElement(l.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(R.a,{circle:!0,current:G,pageCount:V,width:10,onChange:X}))),c.a.createElement(l.h,{md:12,className:"text-left my-3"},c.a.createElement("div",{className:"full-width"},K.endDate>=K.today&&c.a.createElement(l.e,{size:"sm",color:"primary",disabled:!0},s("COMMON.BUTTON.NOT_FINISHED")),K.endDate<K.today&&c.a.createElement(l.e,{size:"sm",color:Q.length?"danger":"primary",onClick:function(e){C.publish({id:t,page:a,release:!Q.length}).then(function(e){e.result===T.w?J(e.data.releasedDate):I({show:!0,color:T.a,message:e.message})}).catch(function(e){I({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})})}},Q.length?s("COMMON.BUTTON.UNPUBLISH"):s("COMMON.BUTTON.PUBLISH")),c.a.createElement(l.e,{size:"sm",color:"warning",onClick:function(e){u.goBack()}},s("COMMON.BUTTON.BACK")))),c.a.createElement(l.h,{md:12},c.a.createElement(l.O,{vertical:!0,className:"text-left"},q.map(function(e,t){return c.a.createElement(l.N,{key:t,className:"completed"},c.a.createElement("a",null,c.a.createElement("span",{className:"circle"},e.index)),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"step-content grey lighten-4"},c.a.createElement("h6",{className:"mb-0"},e.question)),c.a.createElement("div",{className:"step-content mt-3 progress-group"},c.a.createElement(x,{data:e}))))}))),c.a.createElement(l.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(R.a,{circle:!0,current:G,pageCount:V,width:10,onChange:X})))))};a(463),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(o.a,null),c.a.createElement(l.j,{className:"section"},c.a.createElement(r.d,null,c.a.createElement(r.b,{path:"".concat(E.a.vote.all,"/:scope/:page?"),exact:!0,component:I}),c.a.createElement(m.a,{path:"".concat(E.a.vote.questions,"/:packageId/:page?/:page2?"),exact:!0,component:D}),c.a.createElement(m.a,{path:"".concat(E.a.vote.result,"/:packageId/:page?/:page2?"),exact:!0,component:A}),c.a.createElement(r.b,{component:i.a}))),c.a.createElement(s.a,null),c.a.createElement(u.a,null))}}}]);