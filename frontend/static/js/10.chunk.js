(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{432:function(e,t,a){"use strict";var n=a(48),c=a(0),r=a.n(c),l=a(4),o=a(15),s=a(440),i=a(26);t.a=function(e){var t=e.circle,a=e.current,u=e.pageCount,m=e.width,E=e.onChange,O=Object(i.b)().t,f=Object(c.useState)([]),b=Object(n.a)(f,2),p=b[0],N=b[1],d="ltr"===O("DIRECTION")?"left":"right",g="ltr"===O("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!m&&(m=s.isMobile?o.w:o.v);var t=Math.ceil(m/2),n=a-t<1?1:a-t,c=a+t-1>u?u:a+t-1;c-n<m&&(1===n&&(c=u<m?u:m),c===u&&(n=u-m+1<1?1:u-m+1));for(var r=[],l=n;l<=c;l++)r.push(l);N(r)},[a,u,m]),r.a.createElement(c.Fragment,null,u>0&&r.a.createElement(l.K,{circle:t},r.a.createElement(l.I,{disabled:1===a,onClick:function(){return E(1)}},r.a.createElement(l.J,{className:"page-link"},r.a.createElement(l.x,{icon:"angle-double-".concat(d)}))),r.a.createElement(l.I,{disabled:1===a,onClick:function(){return E(a-1)}},r.a.createElement(l.J,{className:"page-link"},r.a.createElement(l.x,{icon:"angle-".concat(d)}))),p.map(function(e,t){return r.a.createElement(l.I,{key:e,active:e===a,onClick:function(){return a!==e&&E(e)}},r.a.createElement(l.J,{className:"page-link"},e))}),r.a.createElement(l.I,{disabled:a===u,onClick:function(){return E(a+1)}},r.a.createElement(l.J,{className:"page-link"},r.a.createElement(l.x,{icon:"angle-".concat(g)}))),r.a.createElement(l.I,{disabled:a===u,onClick:function(){return E(u)}},r.a.createElement(l.J,{className:"page-link"},r.a.createElement(l.x,{icon:"angle-double-".concat(g)})))))}},436:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(26),l=a(127);a(126);t.a=function(e){var t=Object(r.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(l.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},490:function(e,t,a){},491:function(e,t,a){},492:function(e,t,a){},493:function(e,t,a){},494:function(e,t,a){},495:function(e,t,a){},510:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(30),l=a(4),o=a(123),s=a(124),i=a(125),u=a(122),m=a(128),E=a(9),O=a(68),f=a(48),b=a(34),p=a(35),N=a(26),d=a(120),g=a(431),h=a(426),R=a(121),j=a(436),I=a(432),w=a(36),S=a(40),v=a(49),y={packages:function(e){return new Promise(function(t,a){Object(w.a)(S.d,v.a.questionnaire.packages,e).then(function(e){t(e)},function(e){a(e)})})},getPackage:function(e){return new Promise(function(t,a){Object(w.a)(S.d,v.a.questionnaire.getPackage,e).then(function(e){t(e)},function(e){a(e)})})},questions:function(e){return new Promise(function(t,a){Object(w.a)(S.d,v.a.questionnaire.questions,e).then(function(e){t(e)},function(e){a(e)})})},update:function(e){return new Promise(function(t,a){Object(w.a)(S.d,v.a.questionnaire.update,e).then(function(e){t(e)},function(e){a(e)})})},result:function(e){return new Promise(function(t,a){Object(w.a)(S.d,v.a.questionnaire.result,e).then(function(e){t(e)},function(e){a(e)})})}},A=a(15);a(490);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var U=function(){var e=Object(r.h)(),t=e.scope,a=e.page,o=Object(N.b)().t,s=Object(r.g)(),i=Object(p.c)(function(e){return e}).auth,u=Object(n.useState)(!0),m=Object(f.a)(u,2),w=m[0],S=m[1],v=Object(n.useState)({}),U=Object(f.a)(v,2),C=U[0],k=U[1],P=Object(n.useState)(0),x=Object(f.a)(P,2),M=x[0],Q=x[1],q=Object(n.useState)([]),D=Object(f.a)(q,2),V=D[0],_=D[1],B=a?parseInt(a):1,J=V.length-1;Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:A.J}),K()},[t,a,o]);var K=function(e){y.packages({scope:t,page:a,userId:i.user?i.user.id:void 0}).then(function(e){e.result===A.G?(Q(e.pageCount),_(e.data),k(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},C,{show:!1}))):k({show:!0,color:A.a,message:e.message}),S(!1)}).catch(function(e){k({show:!0,color:A.a,message:o("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),S(!1)})},F=function(e){s.push("".concat(E.a.questionnaire.all,"/").concat(t,"/").concat(e))};return c.a.createElement(n.Fragment,null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,o("QUESTIONNAIRE.QUESTIONNAIRE")," - ",o("SITE_NAME"))),c.a.createElement(l.d,null,c.a.createElement(l.e,null,o("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(l.e,{active:!0},t===A.A?o("NAVBAR.QUESTIONNAIRE.CURRENT"):o("NAVBAR.QUESTIONNAIRE.PREVIOUS"))),!!w&&c.a.createElement(R.a,null),!w&&!V.length&&c.a.createElement(j.a,null),!w&&!!V.length&&c.a.createElement(l.O,null,c.a.createElement(l.o,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},t===A.A?o("NAVBAR.QUESTIONNAIRE.CURRENT"):o("NAVBAR.QUESTIONNAIRE.PREVIOUS"))),c.a.createElement(l.o,{md:12},c.a.createElement(h.a,{in:C.show,classNames:"fade-transition",timeout:A.J,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:C.color,dismiss:!0,onClosed:function(){return k({})}},C.message))),c.a.createElement(l.o,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(I.a,{circle:!0,current:B,pageCount:M,width:10,onChange:F}))),c.a.createElement(l.o,{md:12},V.map(function(e,n){return c.a.createElement("div",{key:n,className:"text-left"},c.a.createElement("h4",{className:"text-primary font-weight-bold mb-2 p-0"},c.a.createElement(b.b,{to:"".concat(t===A.A?E.a.questionnaire.questions:E.a.questionnaire.result,"/").concat(e.id,"/1/").concat(a||1)},e.name)),c.a.createElement("p",null,o("COMMON.BUTTON.QUESTIONS"),": ",c.a.createElement("span",{className:"font-weight-bold"},e.questions)),n<J&&c.a.createElement("hr",{className:"my-3"}))})),c.a.createElement(l.o,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-3"},c.a.createElement(I.a,{circle:!0,current:B,pageCount:M,width:10,onChange:F})))))},C=(a(491),function(e){var t=e.data,a=e.onUpdate,r=(Object(N.b)().t,Object(n.useState)({})),o=Object(f.a)(r,2),s=o[0],i=o[1];Object(n.useEffect)(function(e){var a={};if(t.answered){var n=!0,c=!1,r=void 0;try{for(var l,o=t.answered[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){a[l.value]=!0}}catch(s){c=!0,r=s}finally{try{n||null==o.return||o.return()}finally{if(c)throw r}}}i(a)},[t]);return c.a.createElement("div",{className:"text-left"},c.a.createElement("form",null,t.answers.map(function(e,n){return c.a.createElement("div",{key:n,className:"my-2"},c.a.createElement(l.y,{onClick:function(n){return function(e){i(e);var n=[];Object.keys(e).map(function(t){e[t]&&n.push(t)}),a({questionId:t.id,answeredIds:n})}(Object.assign({},s,Object(O.a)({},e.id,!s[e.id])))},checked:s[e.id]||!1,label:e.answer,type:"checkbox",filled:!0,id:"checkbox".concat(e.id)}))})))});a(492);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var x=function(){var e=Object(r.h)(),t=(e.scope,e.packageId),a=e.page,o=e.page2,s=Object(N.b)().t,i=(Object(r.g)(),Object(p.c)(function(e){return e}).auth),u=Object(n.useState)(!0),m=Object(f.a)(u,2),j=m[0],I=m[1],w=Object(n.useState)({}),S=Object(f.a)(w,2),v=S[0],T=S[1],U=Object(n.useState)(0),k=Object(f.a)(U,2),x=(k[0],k[1]),M=Object(n.useState)(""),Q=Object(f.a)(M,2),q=Q[0],D=Q[1],V=Object(n.useState)([]),_=Object(f.a)(V,2),B=_[0],J=_[1],K=Object(n.useState)({}),F=Object(f.a)(K,2),G=F[0],W=F[1];a&&parseInt(a),B.length;Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:A.J}),L()},[a,s]);var L=function(e){y.getPackage({packageId:t}).then(function(e){e.result===A.G?(D(e.data.name),T(P({},v,{show:!1}))):T({show:!0,color:A.a,message:e.message})}).catch(function(e){T({show:!0,color:A.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),y.questions({packageId:t,page:a,userId:i.user.id}).then(function(e){e.result===A.G?(J(e.data),x(e.pageCount),T(P({},v,{show:!1}))):T({show:!0,color:A.a,message:e.message}),I(!1)}).catch(function(e){T({show:!0,color:A.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),I(!1)})},H=function(e){var t=e.questionId,a=e.answeredIds;W(Object.assign({},G,Object(O.a)({},t,a)))};return c.a.createElement(n.Fragment,null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,s("QUESTIONNAIRE.QUESTIONS")," - ",s("SITE_NAME"))),c.a.createElement(l.d,null,c.a.createElement(l.e,null,s("QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(l.e,null,c.a.createElement(b.b,{to:"".concat(E.a.questionnaire.current,"/").concat(o)},s("NAVBAR.QUESTIONNAIRE.CURRENT"))),c.a.createElement(l.e,{active:!0},s("QUESTIONNAIRE.QUESTIONS"))),!!j&&c.a.createElement(R.a,null),!j&&!B.length&&c.a.createElement(n.Fragment,null,c.a.createElement("h4",{className:"text-primary font-weight-bold no-data-section p-0 text-center"},s("COMMON.ERROR.NO_DATA"))),!j&&!!B.length&&c.a.createElement(l.O,null,c.a.createElement(l.o,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},s("QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("QUESTIONNAIRE.PACKAGE"),": "),q)),c.a.createElement(l.o,{md:12},c.a.createElement(h.a,{in:v.show,classNames:"fade-transition",timeout:A.J,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:v.color,dismiss:!0,onClosed:function(){return T({})}},v.message))),c.a.createElement(l.o,{md:12},c.a.createElement(l.U,{vertical:!0,className:"text-left"},B.map(function(e,t){return c.a.createElement(l.T,{key:t,className:"completed"},c.a.createElement("a",null,c.a.createElement("span",{className:"circle"},t+1)),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"step-content grey lighten-4"},c.a.createElement("h6",{className:"mb-0"},e.question)),c.a.createElement("div",{className:"step-content mt-3"},c.a.createElement(C,{data:e,onUpdate:H}))))})),c.a.createElement("div",{className:"text-left"},c.a.createElement(l.f,{size:"sm",rounded:!0,color:"indigo",onClick:function(e){y.update({page:a,userId:i.user.id,packageId:t,answers:G}).then(function(e){e.result===A.G?(J(e.data),x(e.pageCount),T(P({},v,{show:!1}))):T({show:!0,color:A.a,message:e.message}),I(!1)}).catch(function(e){T({show:!0,color:A.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),I(!1)})}},s("COMMON.BUTTON.DELIVERY"))))))},M=(a(493),function(e){var t=e.data,a=Object(N.b)().t,r=Object(n.useState)(100),o=Object(f.a)(r,2),s=o[0],i=o[1],u=Object(n.useState)({}),m=Object(f.a)(u,2),E=m[0],b=m[1],p="ltr"===a("DIRECTION")?"/":"\\";return Object(n.useEffect)(function(e){var a={},n=!0,c=!1,r=void 0;try{for(var l,o=t.answers[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var s=l.value;a=Object.assign({},a,Object(O.a)({},s.answer,s.count))}}catch(u){c=!0,r=u}finally{try{n||null==o.return||o.return()}finally{if(c)throw r}}i(t.answersCount),b(a)},[t,a]),c.a.createElement("div",{className:"text-left"},t.answers.map(function(e,t){return c.a.createElement(n.Fragment,{key:t},c.a.createElement("p",{className:"mb-1"},e.answer),c.a.createElement(l.N,{className:"mt-0 mb-3",material:!0,value:(E[e.answer]||0)/s*100,animated:!0,height:"20px"},E[e.answer]," ",p," ",s))}))});a(494);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var q=function(){var e=Object(r.h)(),t=e.packageId,a=e.page,o=e.page2,s=Object(N.b)().t,i=Object(r.g)(),u=(Object(p.c)(function(e){return e}).auth,Object(n.useState)(!0)),m=Object(f.a)(u,2),j=m[0],w=m[1],S=Object(n.useState)({}),v=Object(f.a)(S,2),T=v[0],U=v[1],C=Object(n.useState)(0),k=Object(f.a)(C,2),P=k[0],x=k[1],q=Object(n.useState)([]),D=Object(f.a)(q,2),V=D[0],_=D[1],B=Object(n.useState)({}),J=Object(f.a)(B,2),K=J[0],F=J[1],G=Object(n.useState)(""),W=Object(f.a)(G,2),L=(W[0],W[1]),H=a?parseInt(a):1;Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:A.J}),z()},[a,s]);var z=function(e){y.getPackage({packageId:t}).then(function(e){e.result===A.G?(F(e.data),L(e.data.releasedDate)):U({show:!0,color:A.a,message:e.message})}).catch(function(e){U({show:!0,color:A.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),y.result({packageId:t,page:a}).then(function(e){e.result===A.G?(x(e.pageCount),_(e.data),U(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},T,{show:!1}))):U({show:!0,color:A.a,message:e.message}),w(!1)}).catch(function(e){U({show:!0,color:A.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),w(!1)})},Y=function(e){i.push("".concat(E.a.questionnaire.result,"/").concat(t,"/").concat(e,"/").concat(o))};return c.a.createElement(n.Fragment,null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,s("QUESTIONNAIRE.RESULT")," - ",s("SITE_NAME"))),c.a.createElement(l.d,null,c.a.createElement(l.e,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(l.e,null,c.a.createElement(b.b,{to:"".concat(E.a.questionnaire.previous,"/").concat(o||1)},s("NAVBAR.QUESTIONNAIRE.PREVIOUS"))),c.a.createElement(l.e,{active:!0},s("QUESTIONNAIRE.RESULT"))),!!j&&c.a.createElement(R.a,null),!j&&c.a.createElement(l.O,null,c.a.createElement(l.o,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},s("QUESTIONNAIRE.RESULT")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("QUESTIONNAIRE.PACKAGE"),": "),K.name)),c.a.createElement(l.o,{md:12},c.a.createElement(h.a,{in:T.show,classNames:"fade-transition",timeout:A.J,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:T.color,dismiss:!0,onClosed:function(){return U({})}},T.message))),c.a.createElement(l.o,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(I.a,{circle:!0,current:H,pageCount:P,width:10,onChange:Y}))),c.a.createElement(l.o,{md:12,className:"text-left my-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(l.f,{size:"sm",color:"warning",onClick:function(e){i.goBack()}},s("COMMON.BUTTON.BACK")))),c.a.createElement(l.o,{md:12},c.a.createElement(l.U,{vertical:!0,className:"text-left"},V.map(function(e,t){return c.a.createElement(l.T,{key:t,className:"completed"},c.a.createElement("a",null,c.a.createElement("span",{className:"circle"},e.index)),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"step-content grey lighten-4"},c.a.createElement("h6",{className:"mb-0"},e.question)),c.a.createElement("div",{className:"step-content mt-3 progress-group"},c.a.createElement(M,{data:e}))))}))),c.a.createElement(l.o,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(I.a,{circle:!0,current:H,pageCount:P,width:10,onChange:Y})))))};a(495),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(o.a,null),c.a.createElement(l.q,{className:"section"},c.a.createElement(r.d,null,c.a.createElement(r.b,{path:"".concat(E.a.questionnaire.all,"/:scope/:page?"),exact:!0,component:U}),c.a.createElement(m.a,{path:"".concat(E.a.questionnaire.questions,"/:packageId/:page?/:page2?"),exact:!0,component:x}),c.a.createElement(r.b,{path:"".concat(E.a.questionnaire.result,"/:packageId/:page?/:page2?"),exact:!0,component:q}),c.a.createElement(r.b,{component:u.a}))),c.a.createElement(s.a,null),c.a.createElement(i.a,null))}}}]);