(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{415:function(e,t,a){"use strict";var n=a(47),c=a(0),r=a.n(c),l=a(5),o=a(31),s=a(423),i=a(24);t.a=function(e){var t=e.circle,a=e.current,u=e.pageCount,m=e.width,E=e.onChange,O=Object(i.b)().t,f=Object(c.useState)([]),b=Object(n.a)(f,2),p=b[0],d=b[1],N="ltr"===O("DIRECTION")?"left":"right",g="ltr"===O("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!m&&(m=s.isMobile?o.w:o.v);var t=Math.ceil(m/2),n=a-t<1?1:a-t,c=a+t-1>u?u:a+t-1;c-n<m&&(1===n&&(c=u<m?u:m),c===u&&(n=u-m+1<1?1:u-m+1));for(var r=[],l=n;l<=c;l++)r.push(l);d(r)},[a,u,m]),r.a.createElement(c.Fragment,null,u>0&&r.a.createElement(l.G,{circle:t},r.a.createElement(l.E,{disabled:1===a,onClick:function(){return E(1)}},r.a.createElement(l.F,{className:"page-link"},r.a.createElement(l.t,{icon:"angle-double-".concat(N)}))),r.a.createElement(l.E,{disabled:1===a,onClick:function(){return E(a-1)}},r.a.createElement(l.F,{className:"page-link"},r.a.createElement(l.t,{icon:"angle-".concat(N)}))),p.map(function(e,t){return r.a.createElement(l.E,{key:e,active:e===a,onClick:function(){return a!==e&&E(e)}},r.a.createElement(l.F,{className:"page-link"},e))}),r.a.createElement(l.E,{disabled:a===u,onClick:function(){return E(a+1)}},r.a.createElement(l.F,{className:"page-link"},r.a.createElement(l.t,{icon:"angle-".concat(g)}))),r.a.createElement(l.E,{disabled:a===u,onClick:function(){return E(u)}},r.a.createElement(l.F,{className:"page-link"},r.a.createElement(l.t,{icon:"angle-double-".concat(g)})))))}},419:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(24),l=a(124);a(123);t.a=function(e){var t=Object(r.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(l.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},471:function(e,t,a){},472:function(e,t,a){},473:function(e,t,a){},474:function(e,t,a){},475:function(e,t,a){},476:function(e,t,a){},488:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),l=a(5),o=a(120),s=a(121),i=a(122),u=a(119),m=a(125),E=a(9),O=a(66),f=a(47),b=a(32),p=a(33),d=a(24),N=a(117),g=a(414),h=a(409),R=a(118),j=a(419),w=a(415),I=a(34),S=a(39),v=a(48),k={packages:function(e){return new Promise(function(t,a){Object(I.a)(S.d,v.a.questionnaire.packages,e).then(function(e){t(e)},function(e){a(e)})})},getPackage:function(e){return new Promise(function(t,a){Object(I.a)(S.d,v.a.questionnaire.getPackage,e).then(function(e){t(e)},function(e){a(e)})})},questions:function(e){return new Promise(function(t,a){Object(I.a)(S.d,v.a.questionnaire.questions,e).then(function(e){t(e)},function(e){a(e)})})},update:function(e){return new Promise(function(t,a){Object(I.a)(S.d,v.a.questionnaire.update,e).then(function(e){t(e)},function(e){a(e)})})},result:function(e){return new Promise(function(t,a){Object(I.a)(S.d,v.a.questionnaire.result,e).then(function(e){t(e)},function(e){a(e)})})}},y=a(31);a(471);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var T=function(){var e=Object(r.h)(),t=e.scope,a=e.page,o=Object(d.b)().t,s=Object(r.g)(),i=Object(p.c)(function(e){return e}).auth,u=Object(n.useState)(!0),m=Object(f.a)(u,2),I=m[0],S=m[1],v=Object(n.useState)({}),T=Object(f.a)(v,2),C=T[0],U=T[1],P=Object(n.useState)(0),x=Object(f.a)(P,2),M=x[0],Q=x[1],q=Object(n.useState)([]),B=Object(f.a)(q,2),D=B[0],V=B[1],_=a?parseInt(a):1,F=D.length-1;Object(n.useEffect)(function(e){N.animateScroll.scrollToTop({duration:y.E}),K()},[t,a,o]);var K=function(e){k.packages({scope:t,page:a,userId:i.user?i.user.id:void 0}).then(function(e){e.result===y.B?(Q(e.pageCount),V(e.data),U(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},C,{show:!1}))):U({show:!0,color:y.a,message:e.message}),S(!1)}).catch(function(e){U({show:!0,color:y.a,message:o("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),S(!1)})},W=function(e){s.push("".concat(E.a.questionnaire.all,"/").concat(t,"/").concat(e))};return c.a.createElement(n.Fragment,null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,o("QUESTIONNAIRE.QUESTIONNAIRE")," - ",o("SITE_NAME"))),c.a.createElement(l.c,null,c.a.createElement(l.d,null,o("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(l.d,{active:!0},t===y.A?o("NAVBAR.QUESTIONNAIRE.CURRENT"):o("NAVBAR.QUESTIONNAIRE.PREVIOUS"))),!!I&&c.a.createElement(R.a,null),!I&&!D.length&&c.a.createElement(j.a,null),!I&&!!D.length&&c.a.createElement(l.K,null,c.a.createElement(l.k,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},t===y.A?o("NAVBAR.QUESTIONNAIRE.CURRENT"):o("NAVBAR.QUESTIONNAIRE.PREVIOUS"))),c.a.createElement(l.k,{md:12},c.a.createElement(h.a,{in:C.show,classNames:"fade-transition",timeout:y.E,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:C.color,dismiss:!0,onClosed:function(){return U({})}},C.message))),c.a.createElement(l.k,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(w.a,{circle:!0,current:_,pageCount:M,width:10,onChange:W}))),c.a.createElement(l.k,{md:12},D.map(function(e,n){return c.a.createElement("div",{key:n,className:"text-left"},c.a.createElement("h4",{className:"text-primary font-weight-bold mb-2 p-0"},c.a.createElement(b.b,{to:"".concat(t===y.A?E.a.questionnaire.questions:E.a.questionnaire.result,"/").concat(e.id,"/1/").concat(a||1)},e.name)),c.a.createElement("p",null,o("COMMON.BUTTON.QUESTIONS"),": ",c.a.createElement("span",{className:"font-weight-bold"},e.questions)),n<F&&c.a.createElement("hr",{className:"my-3"}))})),c.a.createElement(l.k,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-3"},c.a.createElement(w.a,{circle:!0,current:_,pageCount:M,width:10,onChange:W})))))},C=(a(472),function(e){var t=e.data,a=e.onUpdate,r=(Object(d.b)().t,Object(n.useState)({})),o=Object(f.a)(r,2),s=o[0],i=o[1];Object(n.useEffect)(function(e){var a={};if(t.answered){var n=!0,c=!1,r=void 0;try{for(var l,o=t.answered[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){a[l.value]=!0}}catch(s){c=!0,r=s}finally{try{n||null==o.return||o.return()}finally{if(c)throw r}}}i(a)},[t]);return c.a.createElement("div",{className:"text-left"},c.a.createElement("form",null,t.answers.map(function(e,n){return c.a.createElement("div",{key:n,className:"my-2"},c.a.createElement(l.u,{onClick:function(n){return function(e){i(e);var n=[];Object.keys(e).map(function(t){e[t]&&n.push(t)}),a({questionId:t.id,answeredIds:n})}(Object.assign({},s,Object(O.a)({},e.id,!s[e.id])))},checked:s[e.id]||!1,label:e.answer,type:"checkbox",filled:!0,id:"checkbox".concat(e.id)}))})))});a(473);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var x=function(){var e=Object(r.h)(),t=(e.scope,e.packageId),a=e.page,o=e.page2,s=Object(d.b)().t,i=(Object(r.g)(),Object(p.c)(function(e){return e}).auth),u=Object(n.useState)(!0),m=Object(f.a)(u,2),j=m[0],w=m[1],I=Object(n.useState)({}),S=Object(f.a)(I,2),v=S[0],A=S[1],T=Object(n.useState)(0),U=Object(f.a)(T,2),x=(U[0],U[1]),M=Object(n.useState)(""),Q=Object(f.a)(M,2),q=Q[0],B=Q[1],D=Object(n.useState)([]),V=Object(f.a)(D,2),_=V[0],F=V[1],K=Object(n.useState)({}),W=Object(f.a)(K,2),G=W[0],H=W[1];a&&parseInt(a),_.length;Object(n.useEffect)(function(e){N.animateScroll.scrollToTop({duration:y.E}),J()},[a,s]);var J=function(e){k.getPackage({packageId:t}).then(function(e){e.result===y.B?(B(e.data.name),A(P({},v,{show:!1}))):A({show:!0,color:y.a,message:e.message})}).catch(function(e){A({show:!0,color:y.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),k.questions({packageId:t,page:a,userId:i.user.id}).then(function(e){e.result===y.B?(F(e.data),x(e.pageCount),A(P({},v,{show:!1}))):A({show:!0,color:y.a,message:e.message}),w(!1)}).catch(function(e){A({show:!0,color:y.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),w(!1)})},L=function(e){var t=e.questionId,a=e.answeredIds;H(Object.assign({},G,Object(O.a)({},t,a)))};return c.a.createElement(n.Fragment,null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,s("QUESTIONNAIRE.QUESTIONS")," - ",s("SITE_NAME"))),c.a.createElement(l.c,null,c.a.createElement(l.d,null,s("QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(l.d,null,c.a.createElement(b.b,{to:"".concat(E.a.questionnaire.current,"/").concat(o)},s("NAVBAR.QUESTIONNAIRE.CURRENT"))),c.a.createElement(l.d,{active:!0},s("QUESTIONNAIRE.QUESTIONS"))),!!j&&c.a.createElement(R.a,null),!j&&!_.length&&c.a.createElement(n.Fragment,null,c.a.createElement("h4",{className:"text-primary font-weight-bold no-data-section p-0 text-center"},s("COMMON.ERROR.NO_DATA"))),!j&&!!_.length&&c.a.createElement(l.K,null,c.a.createElement(l.k,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},s("QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("QUESTIONNAIRE.PACKAGE"),": "),q)),c.a.createElement(l.k,{md:12},c.a.createElement(h.a,{in:v.show,classNames:"fade-transition",timeout:y.E,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:v.color,dismiss:!0,onClosed:function(){return A({})}},v.message))),c.a.createElement(l.k,{md:12},c.a.createElement(l.Q,{vertical:!0,className:"text-left"},_.map(function(e,t){return c.a.createElement(l.P,{key:t,className:"completed"},c.a.createElement("a",null,c.a.createElement("span",{className:"circle"},t+1)),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"step-content grey lighten-4"},c.a.createElement("h6",{className:"mb-0"},e.question)),c.a.createElement("div",{className:"step-content mt-3"},c.a.createElement(C,{data:e,onUpdate:L}))))})),c.a.createElement("div",{className:"text-left"},c.a.createElement(l.e,{size:"sm",rounded:!0,color:"indigo",onClick:function(e){k.update({page:a,userId:i.user.id,packageId:t,answers:G}).then(function(e){e.result===y.B?(F(e.data),x(e.pageCount),A(P({},v,{show:!1}))):A({show:!0,color:y.a,message:e.message}),w(!1)}).catch(function(e){A({show:!0,color:y.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),w(!1)})}},s("COMMON.BUTTON.SUBMIT"))))))},M=(a(474),function(e){var t=e.data,a=Object(d.b)().t,r=Object(n.useState)(100),o=Object(f.a)(r,2),s=o[0],i=o[1],u=Object(n.useState)({}),m=Object(f.a)(u,2),E=m[0],b=m[1],p="ltr"===a("DIRECTION")?"/":"\\";return Object(n.useEffect)(function(e){var a={},n=!0,c=!1,r=void 0;try{for(var l,o=t.answers[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var s=l.value;a=Object.assign({},a,Object(O.a)({},s.answer,s.count))}}catch(u){c=!0,r=u}finally{try{n||null==o.return||o.return()}finally{if(c)throw r}}i(t.answersCount),b(a)},[t,a]),c.a.createElement("div",{className:"text-left"},t.answers.map(function(e,t){return c.a.createElement(n.Fragment,{key:t},c.a.createElement("p",{className:"mb-1"},e.answer),c.a.createElement(l.J,{className:"mt-0 mb-3",material:!0,value:(E[e.answer]||0)/s*100,animated:!0,height:"20px"},E[e.answer]," ",p," ",s))}))});a(475);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var q=function(){var e=Object(r.h)(),t=e.packageId,a=e.page,o=e.page2,s=Object(d.b)().t,i=Object(r.g)(),u=(Object(p.c)(function(e){return e}).auth,Object(n.useState)(!0)),m=Object(f.a)(u,2),j=m[0],I=m[1],S=Object(n.useState)({}),v=Object(f.a)(S,2),A=v[0],T=v[1],C=Object(n.useState)(0),U=Object(f.a)(C,2),P=U[0],x=U[1],q=Object(n.useState)([]),B=Object(f.a)(q,2),D=B[0],V=B[1],_=Object(n.useState)({}),F=Object(f.a)(_,2),K=F[0],W=F[1],G=Object(n.useState)(""),H=Object(f.a)(G,2),J=(H[0],H[1]),L=a?parseInt(a):1;Object(n.useEffect)(function(e){N.animateScroll.scrollToTop({duration:y.E}),z()},[a,s]);var z=function(e){k.getPackage({packageId:t}).then(function(e){e.result===y.B?(W(e.data),J(e.data.releasedDate)):T({show:!0,color:y.a,message:e.message})}).catch(function(e){T({show:!0,color:y.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),k.result({packageId:t,page:a}).then(function(e){e.result===y.B?(x(e.pageCount),V(e.data),T(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},A,{show:!1}))):T({show:!0,color:y.a,message:e.message}),I(!1)}).catch(function(e){T({show:!0,color:y.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),I(!1)})},Y=function(e){i.push("".concat(E.a.questionnaire.result,"/").concat(t,"/").concat(e,"/").concat(o))};return c.a.createElement(n.Fragment,null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,s("QUESTIONNAIRE.RESULT")," - ",s("SITE_NAME"))),c.a.createElement(l.c,null,c.a.createElement(l.d,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(l.d,null,c.a.createElement(b.b,{to:"".concat(E.a.questionnaire.previous,"/").concat(o||1)},s("NAVBAR.QUESTIONNAIRE.PREVIOUS"))),c.a.createElement(l.d,{active:!0},s("QUESTIONNAIRE.RESULT"))),!!j&&c.a.createElement(R.a,null),!j&&c.a.createElement(l.K,null,c.a.createElement(l.k,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},s("QUESTIONNAIRE.RESULT")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("QUESTIONNAIRE.PACKAGE"),": "),K.name)),c.a.createElement(l.k,{md:12},c.a.createElement(h.a,{in:A.show,classNames:"fade-transition",timeout:y.E,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:A.color,dismiss:!0,onClosed:function(){return T({})}},A.message))),c.a.createElement(l.k,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(w.a,{circle:!0,current:L,pageCount:P,width:10,onChange:Y}))),c.a.createElement(l.k,{md:12,className:"text-left my-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(l.e,{size:"sm",color:"warning",onClick:function(e){i.goBack()}},s("COMMON.BUTTON.BACK")))),c.a.createElement(l.k,{md:12},c.a.createElement(l.Q,{vertical:!0,className:"text-left"},D.map(function(e,t){return c.a.createElement(l.P,{key:t,className:"completed"},c.a.createElement("a",null,c.a.createElement("span",{className:"circle"},e.index)),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"step-content grey lighten-4"},c.a.createElement("h6",{className:"mb-0"},e.question)),c.a.createElement("div",{className:"step-content mt-3 progress-group"},c.a.createElement(M,{data:e}))))}))),c.a.createElement(l.k,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(w.a,{circle:!0,current:L,pageCount:P,width:10,onChange:Y})))))};a(476),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(o.a,null),c.a.createElement(l.m,{className:"section"},c.a.createElement(r.d,null,c.a.createElement(r.b,{path:"".concat(E.a.questionnaire.all,"/:scope/:page?"),exact:!0,component:T}),c.a.createElement(m.a,{path:"".concat(E.a.questionnaire.questions,"/:packageId/:page?/:page2?"),exact:!0,component:x}),c.a.createElement(r.b,{path:"".concat(E.a.questionnaire.result,"/:packageId/:page?/:page2?"),exact:!0,component:q}),c.a.createElement(r.b,{component:u.a}))),c.a.createElement(s.a,null),c.a.createElement(i.a,null))}}}]);