(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{410:function(e,t,a){"use strict";var n=a(66),c=a(0),l=a.n(c),r=a(4),o=a(7),s=a(420),i=a(25);t.a=function(e){var t=e.circle,a=e.current,m=e.pageCount,E=e.width,u=e.onChange,O=Object(i.b)().t,N=Object(c.useState)([]),d=Object(n.a)(N,2),f=d[0],b=d[1],g="ltr"===O("DIRECTION")?"left":"right",R="ltr"===O("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!E&&(E=s.isMobile?o.k:o.j);var t=Math.ceil(E/2),n=a-t<1?1:a-t,c=a+t-1>m?m:a+t-1;c-n<E&&(1===n&&(c=m<E?m:E),c===m&&(n=m-E+1<1?1:m-E+1));for(var l=[],r=n;r<=c;r++)l.push(r);b(l)},[a,m,E]),l.a.createElement(c.Fragment,null,m>0&&l.a.createElement(r.H,{circle:t},l.a.createElement(r.F,{disabled:1===a,onClick:function(){return u(1)}},l.a.createElement(r.G,{className:"page-link"},l.a.createElement(r.q,{icon:"angle-double-".concat(g)}))),l.a.createElement(r.F,{disabled:1===a,onClick:function(){return u(a-1)}},l.a.createElement(r.G,{className:"page-link"},l.a.createElement(r.q,{icon:"angle-".concat(g)}))),f.map(function(e,t){return l.a.createElement(r.F,{key:e,active:e===a,onClick:function(){return a!==e&&u(e)}},l.a.createElement(r.G,{className:"page-link"},e))}),l.a.createElement(r.F,{disabled:a===m,onClick:function(){return u(a+1)}},l.a.createElement(r.G,{className:"page-link"},l.a.createElement(r.q,{icon:"angle-".concat(R)}))),l.a.createElement(r.F,{disabled:a===m,onClick:function(){return u(m)}},l.a.createElement(r.G,{className:"page-link"},l.a.createElement(r.q,{icon:"angle-double-".concat(R)})))))}},414:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(25),r=a(125);a(124);t.a=function(e){var t=Object(l.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(r.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},428:function(e,t,a){},468:function(e,t,a){},469:function(e,t,a){},470:function(e,t,a){},471:function(e,t,a){},472:function(e,t,a){},473:function(e,t,a){},474:function(e,t,a){},486:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(37),r=a(4),o=a(121),s=a(119),i=a(122),m=a(120),E=a(10),u=a(66),O=a(32),N=a(25),d=a(117),f=a(409),b=a(404),g=a(118),R=a(414),A=a(410),S=a(34),h=a(39),I=a(48),p=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.packages,e).then(function(e){t(e)},function(e){a(e)})})},T=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.savePackage,e).then(function(e){t(e)},function(e){a(e)})})},j=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.deletePackage,e).then(function(e){t(e)},function(e){a(e)})})},U=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.getPackage,e).then(function(e){t(e)},function(e){a(e)})})},C=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.questions,e).then(function(e){t(e)},function(e){a(e)})})},w=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.saveQuestion,e).then(function(e){t(e)},function(e){a(e)})})},v=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.deleteQuestion,e).then(function(e){t(e)},function(e){a(e)})})},D=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.getQuestion,e).then(function(e){t(e)},function(e){a(e)})})},M=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.answers,e).then(function(e){t(e)},function(e){a(e)})})},Q=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.saveAnswer,e).then(function(e){t(e)},function(e){a(e)})})},y=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.deleteAnswer,e).then(function(e){t(e)},function(e){a(e)})})},_=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.getAnswer,e).then(function(e){t(e)},function(e){a(e)})})},x=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.result,e).then(function(e){t(e)},function(e){a(e)})})},q=function(e){return new Promise(function(t,a){Object(S.a)(h.d,I.a.questionnaire.publish,e).then(function(e){t(e)},function(e){a(e)})})},k=a(7),B=(a(468),function(){var e=Object(l.h)().page,t=Object(N.b)().t,a=Object(l.g)(),o=Object(n.useState)(!0),s=Object(u.a)(o,2),i=s[0],m=s[1],S=Object(n.useState)({}),h=Object(u.a)(S,2),I=h[0],T=h[1],U=Object(n.useState)({}),C=Object(u.a)(U,2),w=C[0],v=C[1],D=Object(n.useState)(0),M=Object(u.a)(D,2),Q=M[0],y=M[1],_=Object(n.useState)([]),x=Object(u.a)(_,2),q=x[0],B=x[1],P=e?parseInt(e):1,K=[{label:"#",field:"id",sort:"asc"},{label:t("QUESTIONNAIRE.PACKAGE"),field:"question",sort:"asc"},{label:t("QUESTIONNAIRE.START_DATE"),field:"startDate",sort:"asc"},{label:t("QUESTIONNAIRE.END_DATE"),field:"endDate",sort:"asc"},{label:t("QUESTIONNAIRE.RELEASED_DATE"),field:"endDate",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(n.useEffect)(function(a){d.animateScroll.scrollToTop({duration:k.t}),p({page:e}).then(function(e){if(e.result===k.p){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=W(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}y(e.pageCount),B(e.data)}else T({show:!0,color:k.a,message:e.message});m(!1)}).catch(function(e){T({show:!0,color:k.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),m(!1)})},[e,t]);var W=function(t,a){return c.a.createElement(n.Fragment,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.addPackage,"/").concat(t,"/").concat(e||1)},c.a.createElement(r.e,{tag:"a",size:"sm",color:"indigo",floating:!0},c.a.createElement(r.q,{icon:"edit"}))),c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.questions,"/").concat(t,"/1/").concat(e||1)},c.a.createElement(r.e,{tag:"a",size:"sm",color:"primary",className:"mx-2",floating:!0},c.a.createElement(r.q,{icon:"list"}))),c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.result,"/").concat(t,"/1/").concat(e||1)},c.a.createElement(r.e,{tag:"a",size:"sm",color:"indigo",className:"mr-2",floating:!0},c.a.createElement(r.q,{icon:"eye"}))),c.a.createElement(r.e,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(e){return L(t,"#"+a)}},c.a.createElement(r.q,{icon:"trash"})))},V=function(e){v(Object.assign({},w,{show:!w.show}))},F=function(e){a.push("".concat(E.a.questionnaire.packages,"/").concat(e))},L=function(e,a){v(Object.assign({},w,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:a}),deleteId:e}))};return c.a.createElement(n.Fragment,null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,t("NAVBAR.QUESTIONNAIRE.PACKAGES")," - ",t("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,t("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.d,{active:!0},t("NAVBAR.QUESTIONNAIRE.PACKAGES"))),!!i&&c.a.createElement(g.a,null),!i&&!q.length&&c.a.createElement(R.a,null),!i&&!!q.length&&c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},t("NAVBAR.QUESTIONNAIRE.PACKAGES"))),c.a.createElement(r.h,{md:12},c.a.createElement(b.a,{in:I.show,classNames:"fade-transition",timeout:k.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:I.color,dismiss:!0,onClosed:function(){return T({})}},I.message))),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:P,pageCount:Q,onChange:F}))),c.a.createElement(r.h,{md:12,className:"text-left mt-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(O.b,{to:E.a.questionnaire.addPackage},c.a.createElement(r.e,{size:"sm",color:"primary"},t("NAVBAR.QUESTIONNAIRE.ADD_PACKAGE"))))),c.a.createElement(r.h,{md:12},c.a.createElement(r.U,{responsive:!0,striped:!0},c.a.createElement(r.W,null,c.a.createElement("tr",{className:"text-left"},K.map(function(e,t){return c.a.createElement("th",{key:t},e.label)}))),c.a.createElement(r.V,null,q.map(function(e,t){return c.a.createElement("tr",{key:t,className:"text-left"},c.a.createElement("td",null,e.number),c.a.createElement("td",null,e.name," ",!!e.ended&&!e.releasedDate.length&&c.a.createElement(r.q,{className:"text-danger",icon:"exclamation-circle"})),c.a.createElement("td",{className:"date-col"},e.startDate),c.a.createElement("td",{className:"date-col"},e.endDate),c.a.createElement("td",{className:"date-col2"},e.releasedDate),c.a.createElement("td",{className:"p-2 edit-col2"},e.button))})))),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:P,pageCount:Q,onChange:F})))),c.a.createElement(r.u,{isOpen:!!w.show,toggle:V,centered:!0},c.a.createElement(r.x,{toggle:V},w.title),c.a.createElement(r.v,{className:"text-left"},w.message),c.a.createElement(r.w,null,c.a.createElement(r.e,{type:"button",color:"danger",onClick:function(a){j({id:w.deleteId,page:e}).then(function(e){if(e.result===k.p){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=W(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}y(e.pageCount),B(e.data)}else T({show:!0,color:k.a,message:e.message}),d.animateScroll.scrollToTop({duration:k.t});m(!1),V()}).catch(function(e){T({show:!0,color:k.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),d.animateScroll.scrollToTop({duration:k.t}),m(!1),V()})}},t("COMMON.BUTTON.DELETE")),c.a.createElement(r.e,{type:"button",color:"secondary",onClick:V},t("COMMON.BUTTON.CANCEL")))))}),P=a(411),K=a.n(P),W=a(412),V=a(413),F=a(33),L=a(425),G=a.n(L),z=(a(428),function(e){Object(V.a)(e);var t=Object(l.h)(),a=t.id,o=t.page,s=Object(N.b)().t,i=Object(l.g)(),m=Object(F.c)(function(e){return e}).auth,R=Object(n.useState)(!0),A=Object(u.a)(R,2),S=A[0],h=A[1],I=Object(n.useState)({}),p=Object(u.a)(I,2),j=p[0],C=p[1],w=Object(n.useState)({}),v=Object(u.a)(w,2),D=(v[0],v[1],Object(n.useState)({})),M=Object(u.a)(D,2),Q=M[0],y=M[1],_=Object(n.useState)(),x=Object(u.a)(_,2),q=x[0],B=x[1],P=Object(n.useState)(""),L=Object(u.a)(P,2),z=L[0],Y=L[1],H=Object(n.useState)(),J=Object(u.a)(H,2),X=J[0],Z=J[1],$=Object(n.useState)(),ee=Object(u.a)($,2),te=ee[0],ae=ee[1];Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:k.t}),B(a),!a&&h(!1),!a&&B(void 0),!a&&Y(""),!a&&Z(new Date),!a&&ae(new Date),a&&U({id:a}).then(function(e){e.result===k.p?(Y(e.data.name),Z(e.data.startDate),ae(e.data.endDate)):C({show:!0,color:k.a,message:e.message}),h(!1)}).catch(function(e){console.log(e),C({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),h(!1)})},[a]);var ne=function(){var e=Object(W.a)(K.a.mark(function e(t){var a;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,T({id:q,userId:m.user.id,name:z,startDate:G()(X,"yyyy-mm-dd"),endDate:G()(te,"yyyy-mm-dd")});case 4:a=e.sent,!q&&B(a.data.insertId),C({show:!0,color:a.result,message:a.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),C({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,s(q?"QUESTIONNAIRE.ADD_PACKAGE.MODIFY_PACKAGE":"QUESTIONNAIRE.ADD_PACKAGE.ADD_PACKAGE")," - ",s("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.d,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.packages,"/").concat(o||1)},s("NAVBAR.QUESTIONNAIRE.PACKAGES"))),c.a.createElement(r.d,{active:!0},s(q?"QUESTIONNAIRE.ADD_PACKAGE.MODIFY_PACKAGE":"QUESTIONNAIRE.ADD_PACKAGE.ADD_PACKAGE"))),!!S&&c.a.createElement(g.a,null),c.a.createElement(r.f,null,c.a.createElement(r.g,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:ne},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},c.a.createElement("strong",null,s(q?"QUESTIONNAIRE.ADD_PACKAGE.MODIFY_PACKAGE":"QUESTIONNAIRE.ADD_PACKAGE.ADD_PACKAGE")))),c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement(r.r,{label:s("QUESTIONNAIRE.PACKAGE"),outline:!0,autoFocus:!0,value:z,onChange:function(e){return Y(e.target.value)},onBlur:function(e){return y(Object.assign({},Q,{name:!0}))}},Q.name&&0===z.length&&c.a.createElement("div",{className:"invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("QUESTIONNAIRE.PACKAGE")}))))),c.a.createElement(r.L,null,c.a.createElement(r.h,{md:6},c.a.createElement(r.k,{format:k.b,autoOk:!0,className:"date-picker",value:X,getValue:function(e){return Z(e)}}),c.a.createElement("label",{className:"date-picker-label"},s("QUESTIONNAIRE.START_DATE"))),c.a.createElement(r.h,{md:6},c.a.createElement(r.k,{format:k.b,autoOk:!0,className:"date-picker",value:te,getValue:function(e){return ae(e)}}),c.a.createElement("label",{className:"date-picker-label"},s("QUESTIONNAIRE.END_DATE")))),c.a.createElement(b.a,{in:j.show,classNames:"fade-transition",timeout:k.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:j.color,dismiss:!0,onClosed:function(){return C({})}},j.message)),c.a.createElement(n.Fragment,null,c.a.createElement(r.e,{type:"submit",color:"indigo",size:"sm",disabled:!z||!z.length},s(q?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),c.a.createElement(r.e,{flat:!0,size:"sm",onClick:function(e){i.goBack()}},s("COMMON.BUTTON.BACK")))))))}),Y=(a(469),function(){var e=Object(l.h)(),t=e.packageId,a=e.page,o=e.page2,s=(e.page3,Object(N.b)().t),i=Object(l.g)(),m=Object(n.useState)(!0),R=Object(u.a)(m,2),S=R[0],h=R[1],I=Object(n.useState)({}),p=Object(u.a)(I,2),T=p[0],j=p[1],w=Object(n.useState)({}),D=Object(u.a)(w,2),M=D[0],Q=D[1],y=Object(n.useState)(0),_=Object(u.a)(y,2),x=_[0],q=_[1],B=Object(n.useState)([]),P=Object(u.a)(B,2),K=P[0],W=P[1],V=Object(n.useState)(""),F=Object(u.a)(V,2),L=F[0],G=F[1],z=a?parseInt(a):1,Y=[{label:"#",field:"id",sort:"asc"},{label:s("QUESTIONNAIRE.QUESTION"),field:"question",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:k.t}),U({id:t}).then(function(e){e.result===k.p?G(e.data.name):j({show:!0,color:k.a,message:e.message})}).catch(function(e){j({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),C({packageId:t,page:a}).then(function(e){if(e.result===k.p){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.question=r.question.length>k.q?r.question.substring(0,k.q)+"...":r.question,r.button=H(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}q(e.pageCount),W(e.data)}else j({show:!0,color:k.a,message:e.message});h(!1)}).catch(function(e){j({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),h(!1)})},[a,s]);var H=function(e,l){return c.a.createElement(n.Fragment,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.addQuestion,"/").concat(t,"/").concat(e)},c.a.createElement(r.e,{tag:"a",size:"sm",color:"indigo",floating:!0},c.a.createElement(r.q,{icon:"edit"}))),c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.answers,"/").concat(e,"/").concat(t,"/1/").concat(a||1,"/").concat(o||1)},c.a.createElement(r.e,{tag:"a",size:"sm",color:"primary",className:"mx-2",floating:!0},c.a.createElement(r.q,{icon:"comments"}))),c.a.createElement(r.e,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(t){return Z(e,"#"+l)}},c.a.createElement(r.q,{icon:"trash"})))},J=function(e){Q(Object.assign({},M,{show:!M.show}))},X=function(e){i.push("".concat(E.a.questionnaire.questions,"/").concat(t,"/").concat(e,"/").concat(o||1))},Z=function(e,t){Q(Object.assign({},M,{show:!0,title:s("COMMON.BUTTON.DELETE"),message:s("COMMON.QUESTION.DELETE",{item:t}),deleteId:e}))};return c.a.createElement(n.Fragment,null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,s("NAVBAR.QUESTIONNAIRE.QUESTIONS")," - ",s("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.d,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.packages,"/").concat(o||1)},s("NAVBAR.QUESTIONNAIRE.PACKAGES"))),c.a.createElement(r.d,{active:!0},s("QUESTIONNAIRE.QUESTIONS.QUESTIONS"))),!!S&&c.a.createElement(g.a,null),!S&&c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},s("NAVBAR.QUESTIONNAIRE.QUESTIONS")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("QUESTIONNAIRE.PACKAGE"),": "),L)),c.a.createElement(r.h,{md:12},c.a.createElement(b.a,{in:T.show,classNames:"fade-transition",timeout:k.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:T.color,dismiss:!0,onClosed:function(){return j({})}},T.message))),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:z,pageCount:x,onChange:X}))),c.a.createElement(r.h,{md:12,className:"text-left mt-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.addQuestion,"/").concat(t)},c.a.createElement(r.e,{size:"sm",color:"primary"},s("NAVBAR.QUESTIONNAIRE.ADD_QUESTION"))),c.a.createElement(r.e,{size:"sm",color:"warning",onClick:function(e){i.goBack()}},s("COMMON.BUTTON.BACK")))),c.a.createElement(r.h,{md:12},c.a.createElement(r.U,{responsive:!0,striped:!0},c.a.createElement(r.W,null,c.a.createElement("tr",{className:"text-left"},Y.map(function(e,t){return c.a.createElement("th",{key:t},e.label)}))),c.a.createElement(r.V,null,!K.length&&c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5,className:"text-center"},s("COMMON.ERROR.NO_DATA"))),!!K.length&&K.map(function(e,t){return c.a.createElement("tr",{key:t,className:"text-left"},c.a.createElement("td",null,e.number),c.a.createElement("td",null,e.question),c.a.createElement("td",{className:"p-2 edit-col"},e.button))})))),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:z,pageCount:x,onChange:X})))),c.a.createElement(r.u,{isOpen:!!M.show,toggle:J,centered:!0},c.a.createElement(r.x,{toggle:J},M.title),c.a.createElement(r.v,{className:"text-left"},M.message),c.a.createElement(r.w,null,c.a.createElement(r.e,{type:"button",color:"danger",onClick:function(e){v({id:M.deleteId,packageId:t,page:a}).then(function(e){if(e.result===k.p){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.question=r.question.length>k.q?r.question.substring(0,k.q)+"...":r.question,r.button=H(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}q(e.pageCount),W(e.data)}else j({show:!0,color:k.a,message:e.message}),d.animateScroll.scrollToTop({duration:k.t});h(!1),J()}).catch(function(e){j({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),d.animateScroll.scrollToTop({duration:k.t}),h(!1),J()})}},s("COMMON.BUTTON.DELETE")),c.a.createElement(r.e,{type:"button",color:"secondary",onClick:J},s("COMMON.BUTTON.CANCEL")))))}),H=function(e){Object(V.a)(e);var t=Object(l.h)(),a=t.packageId,o=t.id,s=Object(N.b)().t,i=Object(l.g)(),m=Object(F.c)(function(e){return e}).auth,E=Object(n.useState)(!0),O=Object(u.a)(E,2),R=O[0],A=O[1],S=Object(n.useState)({}),h=Object(u.a)(S,2),I=h[0],p=h[1],T=Object(n.useState)({}),j=Object(u.a)(T,2),C=j[0],v=j[1],M=Object(n.useState)(),Q=Object(u.a)(M,2),y=Q[0],_=Q[1],x=Object(n.useState)(""),q=Object(u.a)(x,2),B=q[0],P=q[1],L=Object(n.useState)(""),G=Object(u.a)(L,2),z=G[0],Y=G[1];Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:k.t}),_(o),!o&&A(!1),!o&&_(void 0),!o&&Y(""),a&&U({id:a}).then(function(e){e.result===k.p?P(e.data.name):p({show:!0,color:k.a,message:e.message})}).catch(function(e){p({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),o&&D({id:o}).then(function(e){e.result===k.p?Y(e.data.question):p({show:!0,color:k.a,message:e.message}),A(!1)}).catch(function(e){console.log(e),p({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),A(!1)})},[o]);var H=function(){var e=Object(W.a)(K.a.mark(function e(t){var n;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w({id:y,userId:m.user.id,packageId:a,question:z});case 4:n=e.sent,!y&&_(n.data.insertId),p({show:!0,color:n.result,message:n.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),p({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,s(y?"QUESTIONNAIRE.ADD_QUESTION.MODIFY_QUESTION":"QUESTIONNAIRE.ADD_QUESTION.ADD_QUESTION")," - ",s("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.d,null,s("NAVBAR.QUESTIONNAIRE.PACKAGES")),c.a.createElement(r.d,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONS")),c.a.createElement(r.d,{active:!0},s(y?"QUESTIONNAIRE.ADD_QUESTION.MODIFY_QUESTION":"QUESTIONNAIRE.ADD_QUESTION.ADD_QUESTION"))),!!R&&c.a.createElement(g.a,null),c.a.createElement(r.f,null,c.a.createElement(r.g,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:H},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},c.a.createElement("strong",null,s(y?"QUESTIONNAIRE.ADD_QUESTION.MODIFY_QUESTION":"QUESTIONNAIRE.ADD_QUESTION.ADD_QUESTION"))),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("QUESTIONNAIRE.PACKAGE"),": "),B)),c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement(r.r,{label:s("QUESTIONNAIRE.QUESTION"),type:"textarea",rows:k.r,maxLength:k.f,outline:!0,autoFocus:!0,value:z,onChange:function(e){return Y(e.target.value)},onBlur:function(e){return v(Object.assign({},C,{question:!0}))}},C.question&&0===z.length&&c.a.createElement("div",{className:"invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("QUESTIONNAIRE.QUESTION")}))))),c.a.createElement(b.a,{in:I.show,classNames:"fade-transition",timeout:k.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:I.color,dismiss:!0,onClosed:function(){return p({})}},I.message)),c.a.createElement(n.Fragment,null,c.a.createElement(r.e,{type:"submit",color:"indigo",size:"sm",disabled:!z||!z.length},s(y?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),c.a.createElement(r.e,{flat:!0,size:"sm",onClick:function(e){i.goBack()}},s("COMMON.BUTTON.BACK")))))))},J=(a(470),function(){var e=Object(l.h)(),t=e.questionId,a=e.packageId,o=e.page,s=e.page2,i=e.page3,m=Object(N.b)().t,R=Object(l.g)(),S=Object(n.useState)(!0),h=Object(u.a)(S,2),I=h[0],p=h[1],T=Object(n.useState)({}),j=Object(u.a)(T,2),U=j[0],C=j[1],w=Object(n.useState)({}),v=Object(u.a)(w,2),Q=v[0],_=v[1],x=Object(n.useState)(0),q=Object(u.a)(x,2),B=q[0],P=q[1],K=Object(n.useState)(""),W=Object(u.a)(K,2),V=W[0],F=W[1],L=Object(n.useState)([]),G=Object(u.a)(L,2),z=G[0],Y=G[1],H=o?parseInt(o):1,J=[{label:"#",field:"id",sort:"asc"},{label:m("QUESTIONNAIRE.ANSWERS.ANSWER"),field:"answer",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:k.t}),D({id:t}).then(function(e){e.result===k.p?F(e.data.question):C({show:!0,color:k.a,message:e.message})}).catch(function(e){C({show:!0,color:k.a,message:m("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),M({questionId:t,page:H}).then(function(e){if(e.result===k.p){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=X(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}P(e.pageCount),Y(e.data)}else C({show:!0,color:k.a,message:e.message});p(!1)}).catch(function(e){C({show:!0,color:k.a,message:m("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),p(!1)})},[o,m]);var X=function(e,a){return c.a.createElement(n.Fragment,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.addAnswer,"/").concat(t,"/").concat(e)},c.a.createElement(r.e,{tag:"a",size:"sm",color:"indigo",className:"mx-2",floating:!0},c.a.createElement(r.q,{icon:"edit"}))),c.a.createElement(r.e,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(t){return ee(e,"#"+a)}},c.a.createElement(r.q,{icon:"trash"})))},Z=function(e){_(Object.assign({},Q,{show:!Q.show}))},$=function(e){R.push("".concat(E.a.questionnaire.answers,"/").concat(t,"/").concat(e,"/").concat(s||1,"/").concat(i||1))},ee=function(e,t){_(Object.assign({},Q,{show:!0,title:m("COMMON.BUTTON.DELETE"),message:m("COMMON.QUESTION.DELETE",{item:t}),deleteId:e}))};return c.a.createElement(n.Fragment,null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,m("QUESTIONNAIRE.ANSWERS.ANSWERS")," - ",m("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,m("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.d,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.packages,"/").concat(i||1)},m("NAVBAR.QUESTIONNAIRE.PACKAGES"))),c.a.createElement(r.d,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.questions,"/").concat(a,"/").concat(s||1,"/").concat(i||1)},m("NAVBAR.QUESTIONNAIRE.QUESTIONS"))),c.a.createElement(r.d,{active:!0},m("QUESTIONNAIRE.ANSWERS.ANSWERS"))),!!I&&c.a.createElement(g.a,null),!I&&c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},m("QUESTIONNAIRE.ANSWERS.ANSWERS")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},m("QUESTIONNAIRE.QUESTION"),": "),V)),c.a.createElement(r.h,{md:12},c.a.createElement(b.a,{in:U.show,classNames:"fade-transition",timeout:k.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:U.color,dismiss:!0,onClosed:function(){return C({})}},U.message))),!!B&&c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:H,pageCount:B,onChange:$}))),c.a.createElement(r.h,{md:12,className:"text-left mt-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.addAnswer,"/").concat(t)},c.a.createElement(r.e,{size:"sm",color:"primary"},m("QUESTIONNAIRE.ADD_ANSWER.ADD_ANSWER"))),c.a.createElement(r.e,{size:"sm",color:"warning",onClick:function(e){R.goBack()}},m("COMMON.BUTTON.BACK")))),c.a.createElement(r.h,{md:12},c.a.createElement(r.U,{responsive:!0,striped:!0},c.a.createElement(r.W,null,c.a.createElement("tr",{className:"text-left"},J.map(function(e,t){return c.a.createElement("th",{key:t},e.label)}))),c.a.createElement(r.V,null,z.map(function(e,t){return c.a.createElement("tr",{key:t,className:"text-left"},c.a.createElement("td",null,e.number),c.a.createElement("td",null,e.answer),c.a.createElement("td",{className:"p-2 edit-col"},e.button))})))),!!B&&c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:H,pageCount:B,onChange:$})))),c.a.createElement(r.u,{isOpen:!!Q.show,toggle:Z,centered:!0},c.a.createElement(r.x,{toggle:Z},Q.title),c.a.createElement(r.v,{className:"text-left"},Q.message),c.a.createElement(r.w,null,c.a.createElement(r.e,{type:"button",color:"danger",onClick:function(e){y({id:Q.deleteId,page:H}).then(function(e){if(e.result===k.p){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=X(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}P(e.pageCount),Y(e.data)}else C({show:!0,color:k.a,message:e.message}),d.animateScroll.scrollToTop({duration:k.t});p(!1),Z()}).catch(function(e){C({show:!0,color:k.a,message:m("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),d.animateScroll.scrollToTop({duration:k.t}),p(!1),Z()})}},m("COMMON.BUTTON.DELETE")),c.a.createElement(r.e,{type:"button",color:"secondary",onClick:Z},m("COMMON.BUTTON.CANCEL")))))}),X=(a(471),function(e){Object(V.a)(e);var t=Object(l.h)(),a=t.questionId,o=t.id,s=Object(N.b)().t,i=Object(l.g)(),m=Object(F.c)(function(e){return e}).auth,R=Object(n.useState)(!0),A=Object(u.a)(R,2),S=A[0],h=A[1],I=Object(n.useState)({}),p=Object(u.a)(I,2),T=p[0],j=p[1],U=Object(n.useState)({}),C=Object(u.a)(U,2),w=(C[0],C[1],Object(n.useState)({})),v=Object(u.a)(w,2),M=v[0],y=v[1],x=Object(n.useState)(),q=Object(u.a)(x,2),B=q[0],P=q[1],L=Object(n.useState)(""),G=Object(u.a)(L,2),z=G[0],Y=G[1],H=Object(n.useState)(""),J=Object(u.a)(H,2),X=J[0],Z=J[1];Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:k.t}),P(o),!o&&h(!1),!o&&P(void 0),!o&&Z(""),a&&D({id:a}).then(function(e){e.result===k.p?Y(e.data.question):j({show:!0,color:k.a,message:e.message})}).catch(function(e){j({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),o&&_({id:o}).then(function(e){e.result===k.p?Z(e.data.answer):j({show:!0,color:k.a,message:e.message}),h(!1)}).catch(function(e){console.log(e),j({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),h(!1)})},[o]);var $=function(){var e=Object(W.a)(K.a.mark(function e(t){var n;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Q({id:B,userId:m.user.id,questionId:a,answer:X});case 4:n=e.sent,!B&&P(n.data.insertId),j({show:!0,color:n.result,message:n.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),j({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,s(B?"QUESTIONNAIRE.ADD_ANSWER.MODIFY_ANSWER":"QUESTIONNAIRE.ADD_ANSWER.ADD_ANSWER")," - ",s("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.d,null,c.a.createElement(O.b,{to:E.a.questionnaire.questions},s("NAVBAR.QUESTIONNAIRE.QUESTIONS"))),c.a.createElement(r.d,null,s("QUESTIONNAIRE.ANSWERS.ANSWERS")),c.a.createElement(r.d,{active:!0},s(B?"QUESTIONNAIRE.ADD_ANSWER.MODIFY_ANSWER":"QUESTIONNAIRE.ADD_ANSWER.ADD_ANSWER"))),!!S&&c.a.createElement(g.a,null),c.a.createElement(r.f,null,c.a.createElement(r.g,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:$},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},c.a.createElement("strong",null,s(B?"QUESTIONNAIRE.ADD_ANSWER.MODIFY_ANSWER":"QUESTIONNAIRE.ADD_ANSWER.ADD_ANSWER"))),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("QUESTIONNAIRE.QUESTION"),": "),z)),c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement(r.r,{label:s("QUESTIONNAIRE.ANSWERS.ANSWER"),outline:!0,autoFocus:!0,value:X,onChange:function(e){return Z(e.target.value)},onBlur:function(e){return y(Object.assign({},M,{answer:!0}))}},M.answer&&0===X.length&&c.a.createElement("div",{className:"invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("QUESTIONNAIRE.ANSWERS.ANSWER")}))))),c.a.createElement(b.a,{in:T.show,classNames:"fade-transition",timeout:k.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:T.color,dismiss:!0,onClosed:function(){return j({})}},T.message)),c.a.createElement(n.Fragment,null,c.a.createElement(r.e,{type:"submit",color:"indigo",size:"sm",disabled:!X||!X.length},s(B?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),c.a.createElement(r.e,{flat:!0,size:"sm",onClick:function(e){i.goBack()}},s("COMMON.BUTTON.BACK")))))))}),Z=a(123),$=(a(472),function(e){var t=e.data,a=Object(N.b)().t,l=Object(n.useState)(100),o=Object(u.a)(l,2),s=o[0],i=o[1],m=Object(n.useState)({}),E=Object(u.a)(m,2),O=E[0],d=E[1],f="ltr"===a("DIRECTION")?"/":"\\";return Object(n.useEffect)(function(e){var a={},n=!0,c=!1,l=void 0;try{for(var r,o=t.answers[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){var s=r.value;a=Object.assign({},a,Object(Z.a)({},s.answer,s.count))}}catch(m){c=!0,l=m}finally{try{n||null==o.return||o.return()}finally{if(c)throw l}}i(t.answersCount),d(a)},[t,a]),c.a.createElement("div",{className:"text-left"},t.answers.map(function(e,t){return c.a.createElement(n.Fragment,{key:t},c.a.createElement("p",{className:"mb-1"},e.answer),c.a.createElement(r.K,{className:"mt-0 mb-3",material:!0,value:(O[e.answer]||0)/s*100,animated:!0,height:"20px"},O[e.answer]," ",f," ",s))}))});a(473);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var te=function(){var e=Object(l.h)(),t=e.packageId,a=e.page,o=e.page2,s=Object(N.b)().t,i=Object(l.g)(),m=Object(n.useState)(!0),R=Object(u.a)(m,2),S=R[0],h=R[1],I=Object(n.useState)({}),p=Object(u.a)(I,2),T=p[0],j=p[1],C=Object(n.useState)(0),w=Object(u.a)(C,2),v=w[0],D=w[1],M=Object(n.useState)([]),Q=Object(u.a)(M,2),y=Q[0],_=Q[1],B=Object(n.useState)({}),P=Object(u.a)(B,2),K=P[0],W=P[1],V=Object(n.useState)(""),F=Object(u.a)(V,2),L=F[0],G=F[1],z=a?parseInt(a):1;Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:k.t}),Y()},[a,s]);var Y=function(e){U({id:t}).then(function(e){e.result===k.p?(W(e.data),G(e.data.releasedDate)):j({show:!0,color:k.a,message:e.message})}).catch(function(e){j({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),x({packageId:t,page:a}).then(function(e){e.result===k.p?(D(e.pageCount),_(e.data),j(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach(function(t){Object(Z.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},T,{show:!1}))):j({show:!0,color:k.a,message:e.message}),h(!1)}).catch(function(e){j({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),h(!1)})},H=function(e){i.push("".concat(E.a.questionnaire.result,"/").concat(t,"/").concat(e,"/").concat(o))};return c.a.createElement(n.Fragment,null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,s("QUESTIONNAIRE.RESULT.RESULT")," - ",s("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.d,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.packages,"/").concat(o||1)},s("NAVBAR.QUESTIONNAIRE.PACKAGES"))),c.a.createElement(r.d,{active:!0},s("QUESTIONNAIRE.RESULT.RESULT"))),!!S&&c.a.createElement(g.a,null),!S&&c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},s("QUESTIONNAIRE.RESULT.RESULT")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("QUESTIONNAIRE.PACKAGE"),": "),K.name)),c.a.createElement(r.h,{md:12},c.a.createElement(b.a,{in:T.show,classNames:"fade-transition",timeout:k.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:T.color,dismiss:!0,onClosed:function(){return j({})}},T.message))),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:z,pageCount:v,width:10,onChange:H}))),c.a.createElement(r.h,{md:12,className:"text-left my-3"},c.a.createElement("div",{className:"full-width"},K.endDate>=K.today&&c.a.createElement(r.e,{size:"sm",color:"primary",disabled:!0},s("COMMON.BUTTON.NOT_FINISHED")),K.endDate<K.today&&c.a.createElement(r.e,{size:"sm",color:L.length?"danger":"primary",onClick:function(e){q({id:t,page:a,release:!L.length}).then(function(e){e.result===k.p?G(e.data.releasedDate):j({show:!0,color:k.a,message:e.message})}).catch(function(e){j({show:!0,color:k.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})})}},L.length?s("COMMON.BUTTON.UNPUBLISH"):s("COMMON.BUTTON.PUBLISH")),c.a.createElement(r.e,{size:"sm",color:"warning",onClick:function(e){i.goBack()}},s("COMMON.BUTTON.BACK")))),c.a.createElement(r.h,{md:12},c.a.createElement(r.R,{vertical:!0,className:"text-left"},y.map(function(e,t){return c.a.createElement(r.Q,{key:t,className:"completed"},c.a.createElement("a",null,c.a.createElement("span",{className:"circle"},e.index)),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"step-content grey lighten-4"},c.a.createElement("h6",{className:"mb-0"},e.question)),c.a.createElement("div",{className:"step-content mt-3 progress-group"},c.a.createElement($,{data:e}))))}))),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:z,pageCount:v,width:10,onChange:H})))))};a(474),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(o.a,null),c.a.createElement(r.j,{className:"section"},c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.result,"/:packageId/:page?/:page2?"),exact:!0,component:te}),c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.addAnswer,"/:questionId/:id?"),exact:!0,component:X}),c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.answers,"/:questionId/:packageId/:page?/:page2?/:page3?"),exact:!0,component:J}),c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.addQuestion,"/:packageId/:id?"),exact:!0,component:H}),c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.questions,"/:packageId/:page?/:page2?"),exact:!0,component:Y}),c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.addPackage,"/:id?/:page?"),exact:!0,component:z}),c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.packages,"/:page?"),exact:!0,component:B}),c.a.createElement(l.b,{path:m.a}))),c.a.createElement(s.a,null),c.a.createElement(i.a,null))}}}]);