(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{460:function(e,t,a){"use strict";var n=a(41),c=a(0),r=a.n(c),l=a(4),o=a(13),s=a(468),u=a(29);t.a=function(e){var t=e.circle,a=e.current,m=e.pageCount,i=e.width,E=e.onChange,O=Object(u.b)().t,f=Object(c.useState)([]),p=Object(n.a)(f,2),b=p[0],d=p[1],g="ltr"===O("DIRECTION")?"left":"right",h="ltr"===O("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!i&&(i=s.isMobile?o.w:o.v);var t=Math.ceil(i/2),n=a-t<1?1:a-t,c=a+t-1>m?m:a+t-1;c-n<i&&(1===n&&(c=m<i?m:i),c===m&&(n=m-i+1<1?1:m-i+1));for(var r=[],l=n;l<=c;l++)r.push(l);d(r)},[a,m,i]),r.a.createElement(c.Fragment,null,m>0&&r.a.createElement(l.M,{circle:t},r.a.createElement(l.K,{disabled:1===a,onClick:function(){return E(1)}},r.a.createElement(l.L,{className:"page-link"},r.a.createElement(l.y,{icon:"angle-double-".concat(g)}))),r.a.createElement(l.K,{disabled:1===a,onClick:function(){return E(a-1)}},r.a.createElement(l.L,{className:"page-link"},r.a.createElement(l.y,{icon:"angle-".concat(g)}))),b.map(function(e,t){return r.a.createElement(l.K,{key:e,active:e===a,onClick:function(){return a!==e&&E(e)}},r.a.createElement(l.L,{className:"page-link"},e))}),r.a.createElement(l.K,{disabled:a===m,onClick:function(){return E(a+1)}},r.a.createElement(l.L,{className:"page-link"},r.a.createElement(l.y,{icon:"angle-".concat(h)}))),r.a.createElement(l.K,{disabled:a===m,onClick:function(){return E(m)}},r.a.createElement(l.L,{className:"page-link"},r.a.createElement(l.y,{icon:"angle-double-".concat(h)})))))}},464:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(29),l=a(130);a(129);t.a=function(e){var t=Object(r.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(l.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},524:function(e,t,a){},525:function(e,t,a){},526:function(e,t,a){},527:function(e,t,a){},528:function(e,t,a){},529:function(e,t,a){},537:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(33),l=a(4),o=a(126),s=a(127),u=a(128),m=a(125),i=a(131),E=a(9),O=a(70),f=a(41),p=a(35),b=a(36),d=a(29),g=a(123),h=a(459),N=a(454),j=a(124),w=a(464),v=a(460),R=a(37),y=a(42),S=a(51),T={packages:function(e){return new Promise(function(t,a){Object(R.a)(y.d,S.a.vote.packages,e).then(function(e){t(e)},function(e){a(e)})})},getPackage:function(e){return new Promise(function(t,a){Object(R.a)(y.d,S.a.vote.getPackage,e).then(function(e){t(e)},function(e){a(e)})})},questions:function(e){return new Promise(function(t,a){Object(R.a)(y.d,S.a.vote.questions,e).then(function(e){t(e)},function(e){a(e)})})},update:function(e){return new Promise(function(t,a){Object(R.a)(y.d,S.a.vote.update,e).then(function(e){t(e)},function(e){a(e)})})},result:function(e){return new Promise(function(t,a){Object(R.a)(y.d,S.a.vote.result,e).then(function(e){t(e)},function(e){a(e)})})}},C=a(13);a(524);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var V=function(){var e=Object(r.h)(),t=e.scope,a=e.page,o=Object(d.b)().t,s=Object(r.g)(),u=Object(b.c)(function(e){return e}).auth,m=Object(n.useState)(!0),i=Object(f.a)(m,2),R=i[0],y=i[1],S=Object(n.useState)({}),V=Object(f.a)(S,2),P=V[0],I=V[1],A=Object(n.useState)(0),M=Object(f.a)(A,2),x=M[0],U=M[1],D=Object(n.useState)([]),_=Object(f.a)(D,2),K=_[0],B=_[1],q=a?parseInt(a):1,F=K.length-1;Object(n.useEffect)(function(e){g.animateScroll.scrollToTop({duration:C.J}),L()},[t,a,o]);var L=function(e){T.packages({scope:t,page:a,userId:u.user?u.user.id:void 0}).then(function(e){e.result===C.G?(U(e.pageCount),B(e.data),I(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},P,{show:!1}))):I({show:!0,color:C.a,message:e.message}),y(!1)}).catch(function(e){I({show:!0,color:C.a,message:o("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),y(!1)})},G=function(e){s.push("".concat(E.a.vote.all,"/").concat(t,"/").concat(e))};return c.a.createElement(n.Fragment,null,c.a.createElement(h.Helmet,null,c.a.createElement("title",null,o("VOTE.VOTE")," - ",o("SITE_NAME"))),c.a.createElement(l.e,null,c.a.createElement(l.f,null,o("NAVBAR.VOTE.VOTE")),c.a.createElement(l.f,{active:!0},t===C.A?o("NAVBAR.VOTE.CURRENT"):o("NAVBAR.VOTE.PREVIOUS"))),!!R&&c.a.createElement(j.a,null),!R&&!K.length&&c.a.createElement(w.a,null),!R&&!!K.length&&c.a.createElement(l.Q,null,c.a.createElement(l.p,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center h3-response"},t===C.A?o("NAVBAR.VOTE.CURRENT"):o("NAVBAR.VOTE.PREVIOUS"))),c.a.createElement(l.p,{md:12},c.a.createElement(N.a,{in:P.show,classNames:"fade-transition",timeout:C.J,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:P.color,dismiss:!0,onClosed:function(){return I({})}},P.message))),c.a.createElement(l.p,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(v.a,{circle:!0,current:q,pageCount:x,width:10,onChange:G}))),c.a.createElement(l.p,{md:12},K.map(function(e,n){return c.a.createElement("div",{key:n,className:"text-left"},c.a.createElement("h4",{className:"text-primary font-weight-bold mb-2 p-0"},c.a.createElement(p.b,{to:"".concat(t===C.A?E.a.vote.questions:E.a.vote.result,"/").concat(e.id,"/1/").concat(a||1)},e.name)),c.a.createElement("p",null,o("COMMON.BUTTON.QUESTIONS"),": ",c.a.createElement("span",{className:"font-weight-bold"},e.questions)),n<F&&c.a.createElement("hr",{className:"my-3"}))})),c.a.createElement(l.p,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-3"},c.a.createElement(v.a,{circle:!0,current:q,pageCount:x,width:10,onChange:G})))))},P=(a(525),function(e){var t=e.data,a=e.onUpdate,r=Object(d.b)().t,o=Object(n.useState)(),s=Object(f.a)(o,2),u=s[0],m=s[1];Object(n.useEffect)(function(e){m(t.answered)},[t]);return c.a.createElement("div",{className:"text-left"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a&&a({questionId:t.id,answerId:u})}},t.answers.map(function(e,t){return c.a.createElement(n.Fragment,{key:t},c.a.createElement(l.A,{onClick:function(t){return m(e.id)},checked:u===e.id,label:e.answer,type:"radio",id:"radio".concat(e.id)}))}),c.a.createElement(l.g,{type:"submit",size:"sm",color:"indigo",rounded:!0,className:"mt-3",disabled:!u},r("VOTE.VOTE"))))});a(526);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var M=function(){var e=Object(r.h)(),t=e.packageId,a=e.page,o=e.page2,s=Object(d.b)().t,u=(Object(r.g)(),Object(b.c)(function(e){return e}).auth),m=Object(n.useState)(!0),i=Object(f.a)(m,2),O=i[0],w=i[1],v=Object(n.useState)({}),R=Object(f.a)(v,2),y=R[0],S=R[1],k=Object(n.useState)(0),V=Object(f.a)(k,2),I=(V[0],V[1]),M=Object(n.useState)(""),x=Object(f.a)(M,2),U=x[0],D=x[1],_=Object(n.useState)([]),K=Object(f.a)(_,2),B=K[0],q=K[1],F=Object(n.useState)(0),L=Object(f.a)(F,2),G=L[0],J=L[1],W=Object(n.useState)(0),Q=Object(f.a)(W,2),H=Q[0],z=Q[1];a&&parseInt(a),B.length;Object(n.useEffect)(function(e){g.animateScroll.scrollToTop({duration:C.J}),Y()},[a,s]);var Y=function(e){T.getPackage({packageId:t}).then(function(e){e.result===C.G?(D(e.data.name),S(A({},y,{show:!1}))):S({show:!0,color:C.a,message:e.message})}).catch(function(e){S({show:!0,color:C.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),T.questions({packageId:t,page:a,userId:u.user.id}).then(function(e){if(e.result===C.G){var t=0,a=!0,n=!1,c=void 0;try{for(var r,l=e.data[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){if(!r.value.answered)break;t++}}catch(o){n=!0,c=o}finally{try{a||null==l.return||l.return()}finally{if(n)throw c}}J(t),z(t),q(e.data),I(e.pageCount),S(A({},y,{show:!1}))}else S({show:!0,color:C.a,message:e.message});w(!1)}).catch(function(e){S({show:!0,color:C.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),w(!1)})},X=function(e){var n=e.questionId,c=e.answerId;T.update({page:a,userId:u.user.id,packageId:t,questionId:n,answerId:c}).then(function(e){if(e.result===C.G){var t=0,a=!0,n=!1,c=void 0;try{for(var r,l=e.data[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){if(!r.value.answered)break;t++}}catch(o){n=!0,c=o}finally{try{a||null==l.return||l.return()}finally{if(n)throw c}}J(G+1),z(t),q(e.data),I(e.pageCount),S(A({},y,{show:!1}))}else S({show:!0,color:C.a,message:e.message});w(!1)}).catch(function(e){S({show:!0,color:C.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),w(!1)})};return c.a.createElement(n.Fragment,null,c.a.createElement(h.Helmet,null,c.a.createElement("title",null,s("VOTE.QUESTIONS")," - ",s("SITE_NAME"))),c.a.createElement(l.e,null,c.a.createElement(l.f,null,s("VOTE.VOTE")),c.a.createElement(l.f,null,c.a.createElement(p.b,{to:"".concat(E.a.vote.current,"/").concat(o)},s("NAVBAR.VOTE.CURRENT"))),c.a.createElement(l.f,{active:!0},s("VOTE.QUESTIONS"))),!!O&&c.a.createElement(j.a,null),!O&&!B.length&&c.a.createElement(n.Fragment,null,c.a.createElement("h4",{className:"text-primary font-weight-bold no-data-section p-0 text-center"},s("COMMON.ERROR.NO_DATA"))),!O&&!!B.length&&c.a.createElement(l.Q,null,c.a.createElement(l.p,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center h3-response"},s("VOTE.VOTE")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("VOTE.PACKAGE"),": "),U)),c.a.createElement(l.p,{md:12},c.a.createElement(N.a,{in:y.show,classNames:"fade-transition",timeout:C.J,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:y.color,dismiss:!0,onClosed:function(){return S({})}},y.message))),c.a.createElement(l.p,{md:12},c.a.createElement(l.W,{vertical:!0,className:"text-left"},B.map(function(e,t){return c.a.createElement(l.V,{key:t,className:"".concat(e.answered||t<=H?"completed":"")},c.a.createElement("a",{onClick:function(a){return(!!e.answered||t<=H)&&J(t)}},c.a.createElement("span",{className:"circle"},t+1),!!e.answered&&c.a.createElement("span",{className:"label text-left"},s("COMMON.COMPLETE.COMPLETED"))),t===G&&c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"step-content grey lighten-4"},c.a.createElement("h6",{className:"mb-0"},e.question)),c.a.createElement("div",{className:"step-content mt-3"},c.a.createElement(P,{data:e,onUpdate:X}))))})))))},x=(a(527),a(528),function(e){var t=e.data,a=Object(d.b)().t,r=Object(n.useState)(100),o=Object(f.a)(r,2),s=o[0],u=o[1],m=Object(n.useState)({}),i=Object(f.a)(m,2),E=i[0],p=i[1],b="ltr"===a("DIRECTION")?"/":"\\";return Object(n.useEffect)(function(e){var a={},n=!0,c=!1,r=void 0;try{for(var l,o=t.answers[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var s=l.value;a=Object.assign({},a,Object(O.a)({},s.answer,s.count))}}catch(m){c=!0,r=m}finally{try{n||null==o.return||o.return()}finally{if(c)throw r}}u(t.answersCount),p(a)},[t,a]),c.a.createElement("div",{className:"text-left"},t.answers.map(function(e,t){return c.a.createElement(n.Fragment,{key:t},c.a.createElement("p",{className:"mb-1"},e.answer),c.a.createElement(l.P,{className:"mt-0 mb-3",material:!0,value:(E[e.answer]||0)/s*100,animated:!0,height:"20px"},E[e.answer]," ",b," ",s))}))});function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var D=function(){var e=Object(r.h)(),t=e.packageId,a=e.page,o=e.page2,s=Object(d.b)().t,u=Object(r.g)(),m=(Object(b.c)(function(e){return e}).auth,Object(n.useState)(!0)),i=Object(f.a)(m,2),w=i[0],R=i[1],y=Object(n.useState)({}),S=Object(f.a)(y,2),k=S[0],V=S[1],P=Object(n.useState)(0),I=Object(f.a)(P,2),A=I[0],M=I[1],D=Object(n.useState)([]),_=Object(f.a)(D,2),K=_[0],B=_[1],q=Object(n.useState)({}),F=Object(f.a)(q,2),L=F[0],G=F[1],J=Object(n.useState)(""),W=Object(f.a)(J,2),Q=(W[0],W[1]),H=a?parseInt(a):1;Object(n.useEffect)(function(e){g.animateScroll.scrollToTop({duration:C.J}),z()},[a,s]);var z=function(e){T.getPackage({packageId:t}).then(function(e){e.result===C.G?(G(e.data),Q(e.data.releasedDate)):V({show:!0,color:C.a,message:e.message})}).catch(function(e){V({show:!0,color:C.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),T.result({packageId:t,page:a}).then(function(e){e.result===C.G?(M(e.pageCount),B(e.data),V(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},k,{show:!1}))):V({show:!0,color:C.a,message:e.message}),R(!1)}).catch(function(e){V({show:!0,color:C.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),R(!1)})},Y=function(e){u.push("".concat(E.a.vote.result,"/").concat(t,"/").concat(e,"/").concat(o))};return c.a.createElement(n.Fragment,null,c.a.createElement(h.Helmet,null,c.a.createElement("title",null,s("VOTE.RESULT")," - ",s("SITE_NAME"))),c.a.createElement(l.e,null,c.a.createElement(l.f,null,s("NAVBAR.VOTE.VOTE")),c.a.createElement(l.f,null,c.a.createElement(p.b,{to:"".concat(E.a.vote.previous,"/").concat(o||1)},s("NAVBAR.VOTE.PREVIOUS"))),c.a.createElement(l.f,{active:!0},s("VOTE.RESULT"))),!!w&&c.a.createElement(j.a,null),!w&&c.a.createElement(l.Q,null,c.a.createElement(l.p,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center h3-response"},s("VOTE.RESULT")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("VOTE.PACKAGE"),": "),L.name)),c.a.createElement(l.p,{md:12},c.a.createElement(N.a,{in:k.show,classNames:"fade-transition",timeout:C.J,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:k.color,dismiss:!0,onClosed:function(){return V({})}},k.message))),c.a.createElement(l.p,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(v.a,{circle:!0,current:H,pageCount:A,width:10,onChange:Y}))),c.a.createElement(l.p,{md:12,className:"text-left my-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(l.g,{size:"sm",color:"warning",onClick:function(e){u.goBack()}},s("COMMON.BUTTON.BACK")))),c.a.createElement(l.p,{md:12},c.a.createElement(l.W,{vertical:!0,className:"text-left"},K.map(function(e,t){return c.a.createElement(l.V,{key:t,className:"completed"},c.a.createElement("a",null,c.a.createElement("span",{className:"circle"},e.index)),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"step-content grey lighten-4"},c.a.createElement("h6",{className:"mb-0"},e.question)),c.a.createElement("div",{className:"step-content mt-3 progress-group"},c.a.createElement(x,{data:e}))))}))),c.a.createElement(l.p,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(v.a,{circle:!0,current:H,pageCount:A,width:10,onChange:Y})))))};a(529),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(o.a,null),c.a.createElement(l.r,{className:"section"},c.a.createElement(r.d,null,c.a.createElement(r.b,{path:"".concat(E.a.vote.all,"/:scope/:page?"),exact:!0,component:V}),c.a.createElement(i.a,{path:"".concat(E.a.vote.questions,"/:packageId/:page?/:page2?"),exact:!0,component:M}),c.a.createElement(r.b,{path:"".concat(E.a.vote.result,"/:packageId/:page?/:page2?"),exact:!0,component:D}),c.a.createElement(r.b,{component:m.a}))),c.a.createElement(s.a,null),c.a.createElement(u.a,null))}}}]);