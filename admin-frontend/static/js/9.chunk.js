(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{446:function(e,t,a){"use strict";var n=a(53),c=a(0),l=a.n(c),r=a(5),o=a(4),s=a(456),i=a(27);t.a=function(e){var t=e.circle,a=e.current,m=e.pageCount,E=e.width,u=e.onChange,O=Object(i.b)().t,N=Object(c.useState)([]),d=Object(n.a)(N,2),f=d[0],b=d[1],g="ltr"===O("DIRECTION")?"left":"right",R="ltr"===O("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!E&&(E=s.isMobile?o.m:o.l);var t=Math.ceil(E/2),n=a-t<1?1:a-t,c=a+t-1>m?m:a+t-1;c-n<E&&(1===n&&(c=m<E?m:E),c===m&&(n=m-E+1<1?1:m-E+1));for(var l=[],r=n;r<=c;r++)l.push(r);b(l)},[a,m,E]),l.a.createElement(c.Fragment,null,m>0&&l.a.createElement(r.J,{circle:t},l.a.createElement(r.H,{disabled:1===a,onClick:function(){return u(1)}},l.a.createElement(r.I,{className:"page-link"},l.a.createElement(r.r,{icon:"angle-double-".concat(g)}))),l.a.createElement(r.H,{disabled:1===a,onClick:function(){return u(a-1)}},l.a.createElement(r.I,{className:"page-link"},l.a.createElement(r.r,{icon:"angle-".concat(g)}))),f.map(function(e,t){return l.a.createElement(r.H,{key:e,active:e===a,onClick:function(){return a!==e&&u(e)}},l.a.createElement(r.I,{className:"page-link"},e))}),l.a.createElement(r.H,{disabled:a===m,onClick:function(){return u(a+1)}},l.a.createElement(r.I,{className:"page-link"},l.a.createElement(r.r,{icon:"angle-".concat(R)}))),l.a.createElement(r.H,{disabled:a===m,onClick:function(){return u(m)}},l.a.createElement(r.I,{className:"page-link"},l.a.createElement(r.r,{icon:"angle-double-".concat(R)})))))}},451:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(27),r=a(135);a(134);t.a=function(e){var t=Object(l.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(r.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},464:function(e,t,a){},504:function(e,t,a){},505:function(e,t,a){},506:function(e,t,a){},507:function(e,t,a){},508:function(e,t,a){},509:function(e,t,a){},510:function(e,t,a){},522:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(33),r=a(5),o=a(129),s=a(130),i=a(132),m=a(131),E=a(10),u=a(53),O=a(37),N=a(27),d=a(127),f=a(445),b=a(440),g=a(128),R=a(451),A=a(446),S=a(38),I=a(41),p=a(51),h=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.packages,e).then(function(e){t(e)},function(e){a(e)})})},T=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.savePackage,e).then(function(e){t(e)},function(e){a(e)})})},j=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.deletePackage,e).then(function(e){t(e)},function(e){a(e)})})},w=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.getPackage,e).then(function(e){t(e)},function(e){a(e)})})},U=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.questions,e).then(function(e){t(e)},function(e){a(e)})})},C=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.saveQuestion,e).then(function(e){t(e)},function(e){a(e)})})},v=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.deleteQuestion,e).then(function(e){t(e)},function(e){a(e)})})},D=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.getQuestion,e).then(function(e){t(e)},function(e){a(e)})})},M=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.answers,e).then(function(e){t(e)},function(e){a(e)})})},Q=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.saveAnswer,e).then(function(e){t(e)},function(e){a(e)})})},y=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.deleteAnswer,e).then(function(e){t(e)},function(e){a(e)})})},_=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.getAnswer,e).then(function(e){t(e)},function(e){a(e)})})},x=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.result,e).then(function(e){t(e)},function(e){a(e)})})},k=function(e){return new Promise(function(t,a){Object(S.a)(I.d,p.a.questionnaire.publish,e).then(function(e){t(e)},function(e){a(e)})})},q=a(4),B=(a(504),function(){var e=Object(l.h)().page,t=Object(N.b)().t,a=Object(l.g)(),o=Object(n.useState)(!0),s=Object(u.a)(o,2),i=s[0],m=s[1],S=Object(n.useState)({}),I=Object(u.a)(S,2),p=I[0],T=I[1],w=Object(n.useState)({}),U=Object(u.a)(w,2),C=U[0],v=U[1],D=Object(n.useState)(0),M=Object(u.a)(D,2),Q=M[0],y=M[1],_=Object(n.useState)([]),x=Object(u.a)(_,2),k=x[0],B=x[1],P=e?parseInt(e):1,K=[{label:"#",field:"id",sort:"asc"},{label:t("QUESTIONNAIRE.PACKAGE"),field:"question",sort:"asc"},{label:t("QUESTIONNAIRE.START_DATE"),field:"startDate",sort:"asc"},{label:t("QUESTIONNAIRE.END_DATE"),field:"endDate",sort:"asc"},{label:t("QUESTIONNAIRE.RELEASED_DATE"),field:"endDate",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(n.useEffect)(function(a){d.animateScroll.scrollToTop({duration:q.w}),h({page:e}).then(function(e){if(e.result===q.s){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=W(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}y(e.pageCount),B(e.data)}else T({show:!0,color:q.a,message:e.message});m(!1)}).catch(function(e){T({show:!0,color:q.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),m(!1)})},[e,t]);var W=function(t,a){return c.a.createElement(n.Fragment,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.addPackage,"/").concat(t,"/").concat(e||1)},c.a.createElement(r.f,{tag:"a",size:"sm",color:"indigo",floating:!0},c.a.createElement(r.r,{icon:"edit"}))),c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.questions,"/").concat(t,"/1/").concat(e||1)},c.a.createElement(r.f,{tag:"a",size:"sm",color:"primary",className:"mx-2",floating:!0},c.a.createElement(r.r,{icon:"list"}))),c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.result,"/").concat(t,"/1/").concat(e||1)},c.a.createElement(r.f,{tag:"a",size:"sm",color:"indigo",className:"mr-2",floating:!0},c.a.createElement(r.r,{icon:"eye"}))),c.a.createElement(r.f,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(e){return G(t,"#"+a)}},c.a.createElement(r.r,{icon:"trash"})))},V=function(e){v(Object.assign({},C,{show:!C.show}))},F=function(e){a.push("".concat(E.a.questionnaire.packages,"/").concat(e))},G=function(e,a){v(Object.assign({},C,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:a}),deleteId:e}))};return c.a.createElement(n.Fragment,null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,t("NAVBAR.QUESTIONNAIRE.PACKAGES")," - ",t("SITE_NAME"))),c.a.createElement(r.d,null,c.a.createElement(r.e,null,t("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.e,{active:!0},t("NAVBAR.QUESTIONNAIRE.PACKAGES"))),!!i&&c.a.createElement(g.a,null),!i&&!k.length&&c.a.createElement(R.a,null),!i&&!!k.length&&c.a.createElement(r.N,null,c.a.createElement(r.i,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},t("NAVBAR.QUESTIONNAIRE.PACKAGES"))),c.a.createElement(r.i,{md:12},c.a.createElement(b.a,{in:p.show,classNames:"fade-transition",timeout:q.w,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:p.color,dismiss:!0,onClosed:function(){return T({})}},p.message))),c.a.createElement(r.i,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:P,pageCount:Q,onChange:F}))),c.a.createElement(r.i,{md:12,className:"text-left mt-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(O.b,{to:E.a.questionnaire.addPackage},c.a.createElement(r.f,{size:"sm",color:"primary"},t("NAVBAR.QUESTIONNAIRE.ADD_PACKAGE"))))),c.a.createElement(r.i,{md:12},c.a.createElement(r.W,{responsive:!0,striped:!0},c.a.createElement(r.Y,null,c.a.createElement("tr",{className:"text-left"},K.map(function(e,t){return c.a.createElement("th",{key:t},e.label)}))),c.a.createElement(r.X,null,k.map(function(e,t){return c.a.createElement("tr",{key:t,className:"text-left"},c.a.createElement("td",null,e.number),c.a.createElement("td",null,e.name," ",!!e.ended&&!e.releasedDate.length&&c.a.createElement(r.r,{className:"text-danger",icon:"exclamation-circle"})),c.a.createElement("td",{className:"date-col"},e.startDate),c.a.createElement("td",{className:"date-col"},e.endDate),c.a.createElement("td",{className:"date-col2"},e.releasedDate),c.a.createElement("td",{className:"p-2 edit-col2"},e.button))})))),c.a.createElement(r.i,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:P,pageCount:Q,onChange:F})))),c.a.createElement(r.w,{isOpen:!!C.show,toggle:V,centered:!0},c.a.createElement(r.z,{toggle:V},C.title),c.a.createElement(r.x,{className:"text-left"},C.message),c.a.createElement(r.y,null,c.a.createElement(r.f,{type:"button",color:"danger",onClick:function(a){j({id:C.deleteId,page:e}).then(function(e){if(e.result===q.s){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=W(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}y(e.pageCount),B(e.data)}else T({show:!0,color:q.a,message:e.message}),d.animateScroll.scrollToTop({duration:q.w});m(!1),V()}).catch(function(e){T({show:!0,color:q.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),d.animateScroll.scrollToTop({duration:q.w}),m(!1),V()})}},t("COMMON.BUTTON.DELETE")),c.a.createElement(r.f,{type:"button",color:"secondary",onClick:V},t("COMMON.BUTTON.CANCEL")))))}),P=a(447),K=a.n(P),W=a(448),V=a(449),F=a(30),G=a(461),z=a.n(G),L=(a(464),function(e){Object(V.a)(e);var t=Object(l.h)(),a=t.id,o=t.page,s=Object(N.b)().t,i=Object(l.g)(),m=Object(F.c)(function(e){return e}).auth,R=Object(n.useState)(!0),A=Object(u.a)(R,2),S=A[0],I=A[1],p=Object(n.useState)({}),h=Object(u.a)(p,2),j=h[0],U=h[1],C=Object(n.useState)({}),v=Object(u.a)(C,2),D=(v[0],v[1],Object(n.useState)({})),M=Object(u.a)(D,2),Q=M[0],y=M[1],_=Object(n.useState)(),x=Object(u.a)(_,2),k=x[0],B=x[1],P=Object(n.useState)(""),G=Object(u.a)(P,2),L=G[0],Y=G[1],H=Object(n.useState)(),J=Object(u.a)(H,2),X=J[0],Z=J[1],$=Object(n.useState)(),ee=Object(u.a)($,2),te=ee[0],ae=ee[1];Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:q.w}),B(a),!a&&I(!1),!a&&B(void 0),!a&&Y(""),!a&&Z(new Date),!a&&ae(new Date),a&&w({id:a}).then(function(e){e.result===q.s?(Y(e.data.name),Z(e.data.startDate),ae(e.data.endDate)):U({show:!0,color:q.a,message:e.message}),I(!1)}).catch(function(e){console.log(e),U({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),I(!1)})},[a]);var ne=function(){var e=Object(W.a)(K.a.mark(function e(t){var a;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,T({id:k,userId:m.user.id,name:L,startDate:z()(X,"yyyy-mm-dd"),endDate:z()(te,"yyyy-mm-dd")});case 4:a=e.sent,!k&&B(a.data.insertId),U({show:!0,color:a.result,message:a.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),U({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,s(k?"QUESTIONNAIRE.ADD_PACKAGE.MODIFY_PACKAGE":"QUESTIONNAIRE.ADD_PACKAGE.ADD_PACKAGE")," - ",s("SITE_NAME"))),c.a.createElement(r.d,null,c.a.createElement(r.e,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.e,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.packages,"/").concat(o||1)},s("NAVBAR.QUESTIONNAIRE.PACKAGES"))),c.a.createElement(r.e,{active:!0},s(k?"QUESTIONNAIRE.ADD_PACKAGE.MODIFY_PACKAGE":"QUESTIONNAIRE.ADD_PACKAGE.ADD_PACKAGE"))),!!S&&c.a.createElement(g.a,null),c.a.createElement(r.g,null,c.a.createElement(r.h,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:ne},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},c.a.createElement("strong",null,s(k?"QUESTIONNAIRE.ADD_PACKAGE.MODIFY_PACKAGE":"QUESTIONNAIRE.ADD_PACKAGE.ADD_PACKAGE")))),c.a.createElement(r.N,null,c.a.createElement(r.i,{md:12},c.a.createElement(r.t,{label:s("QUESTIONNAIRE.PACKAGE"),outline:!0,autoFocus:!0,value:L,onChange:function(e){return Y(e.target.value)},onBlur:function(e){return y(Object.assign({},Q,{name:!0}))}},Q.name&&0===L.length&&c.a.createElement("div",{className:"invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("QUESTIONNAIRE.PACKAGE")}))))),c.a.createElement(r.N,null,c.a.createElement(r.i,{md:6},c.a.createElement(r.l,{format:q.b,autoOk:!0,className:"date-picker",value:X,getValue:function(e){return Z(e)}}),c.a.createElement("label",{className:"date-picker-label"},s("QUESTIONNAIRE.START_DATE"))),c.a.createElement(r.i,{md:6},c.a.createElement(r.l,{format:q.b,autoOk:!0,className:"date-picker",value:te,getValue:function(e){return ae(e)}}),c.a.createElement("label",{className:"date-picker-label"},s("QUESTIONNAIRE.END_DATE")))),c.a.createElement(b.a,{in:j.show,classNames:"fade-transition",timeout:q.w,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:j.color,dismiss:!0,onClosed:function(){return U({})}},j.message)),c.a.createElement(n.Fragment,null,c.a.createElement(r.f,{type:"submit",color:"indigo",size:"sm",disabled:!L||!L.length},s(k?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),c.a.createElement(r.f,{flat:!0,size:"sm",onClick:function(e){i.goBack()}},s("COMMON.BUTTON.BACK")))))))}),Y=(a(505),function(){var e=Object(l.h)(),t=e.packageId,a=e.page,o=e.page2,s=(e.page3,Object(N.b)().t),i=Object(l.g)(),m=Object(n.useState)(!0),R=Object(u.a)(m,2),S=R[0],I=R[1],p=Object(n.useState)({}),h=Object(u.a)(p,2),T=h[0],j=h[1],C=Object(n.useState)({}),D=Object(u.a)(C,2),M=D[0],Q=D[1],y=Object(n.useState)(0),_=Object(u.a)(y,2),x=_[0],k=_[1],B=Object(n.useState)([]),P=Object(u.a)(B,2),K=P[0],W=P[1],V=Object(n.useState)(""),F=Object(u.a)(V,2),G=F[0],z=F[1],L=a?parseInt(a):1,Y=[{label:"#",field:"id",sort:"asc"},{label:s("QUESTIONNAIRE.QUESTION"),field:"question",sort:"asc"},{label:s("QUESTIONNAIRE.TYPE"),field:"type",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:q.w}),H()},[a,s]);var H=function(){w({id:t}).then(function(e){e.result===q.s?z(e.data.name):j({show:!0,color:q.a,message:e.message})}).catch(function(e){j({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),U({packageId:t,page:a}).then(function(e){if(e.result===q.s){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.question=r.question.length>q.t?r.question.substring(0,q.t)+"...":r.question,r.button=J(r)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}k(e.pageCount),W(e.data)}else j({show:!0,color:q.a,message:e.message});I(!1)}).catch(function(e){j({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),I(!1)})},J=function(e){var l=e.id,s=e.number,i=e.type===q.p;return c.a.createElement(n.Fragment,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.addQuestion,"/").concat(t,"/").concat(l)},c.a.createElement(r.f,{tag:"a",size:"sm",color:"indigo",floating:!0},c.a.createElement(r.r,{icon:"edit"}))),c.a.createElement(O.b,{to:!i&&"".concat(E.a.questionnaire.answers,"/").concat(l,"/").concat(t,"/1/").concat(a||1,"/").concat(o||1)},c.a.createElement(r.f,{tag:"a",size:"sm",color:i?"mdb-color":"primary",className:"mx-2",floating:!0,disabled:i},c.a.createElement(r.r,{icon:"comments"}))),c.a.createElement(r.f,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(e){return $(l,"#"+s)}},c.a.createElement(r.r,{icon:"trash"})))},X=function(e){Q(Object.assign({},M,{show:!M.show}))},Z=function(e){i.push("".concat(E.a.questionnaire.questions,"/").concat(t,"/").concat(e,"/").concat(o||1))},$=function(e,t){Q(Object.assign({},M,{show:!0,title:s("COMMON.BUTTON.DELETE"),message:s("COMMON.QUESTION.DELETE",{item:t}),deleteId:e}))};return c.a.createElement(n.Fragment,null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,s("NAVBAR.QUESTIONNAIRE.QUESTIONS")," - ",s("SITE_NAME"))),c.a.createElement(r.d,null,c.a.createElement(r.e,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.e,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.packages,"/").concat(o||1)},s("NAVBAR.QUESTIONNAIRE.PACKAGES"))),c.a.createElement(r.e,{active:!0},s("QUESTIONNAIRE.QUESTIONS.QUESTIONS"))),!!S&&c.a.createElement(g.a,null),!S&&c.a.createElement(r.N,null,c.a.createElement(r.i,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},s("NAVBAR.QUESTIONNAIRE.QUESTIONS")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("QUESTIONNAIRE.PACKAGE"),": "),G)),c.a.createElement(r.i,{md:12},c.a.createElement(b.a,{in:T.show,classNames:"fade-transition",timeout:q.w,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:T.color,dismiss:!0,onClosed:function(){return j({})}},T.message))),c.a.createElement(r.i,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:L,pageCount:x,onChange:Z}))),c.a.createElement(r.i,{md:12,className:"text-left mt-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.addQuestion,"/").concat(t)},c.a.createElement(r.f,{size:"sm",color:"primary"},s("NAVBAR.QUESTIONNAIRE.ADD_QUESTION"))),c.a.createElement(r.f,{size:"sm",color:"warning",onClick:function(e){i.goBack()}},s("COMMON.BUTTON.BACK")))),c.a.createElement(r.i,{md:12},c.a.createElement(r.W,{responsive:!0,striped:!0},c.a.createElement(r.Y,null,c.a.createElement("tr",{className:"text-left"},Y.map(function(e,t){return c.a.createElement("th",{key:t},e.label)}))),c.a.createElement(r.X,null,!K.length&&c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5,className:"text-center"},s("COMMON.ERROR.NO_DATA"))),!!K.length&&K.map(function(e,t){return c.a.createElement("tr",{key:t,className:"text-left"},c.a.createElement("td",null,e.number),c.a.createElement("td",null,e.question),c.a.createElement("td",null,e.type2),c.a.createElement("td",{className:"p-2 edit-col"},e.button))})))),c.a.createElement(r.i,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:L,pageCount:x,onChange:Z})))),c.a.createElement(r.w,{isOpen:!!M.show,toggle:X,centered:!0},c.a.createElement(r.z,{toggle:X},M.title),c.a.createElement(r.x,{className:"text-left"},M.message),c.a.createElement(r.y,null,c.a.createElement(r.f,{type:"button",color:"danger",onClick:function(e){v({id:M.deleteId,packageId:t,page:a}).then(function(e){if(e.result===q.s){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.question=r.question.length>q.t?r.question.substring(0,q.t)+"...":r.question,r.button=J(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}k(e.pageCount),W(e.data)}else j({show:!0,color:q.a,message:e.message}),d.animateScroll.scrollToTop({duration:q.w});I(!1),X()}).catch(function(e){j({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),d.animateScroll.scrollToTop({duration:q.w}),I(!1),X()})}},s("COMMON.BUTTON.DELETE")),c.a.createElement(r.f,{type:"button",color:"secondary",onClick:X},s("COMMON.BUTTON.CANCEL")))))}),H=function(e){Object(V.a)(e);var t=Object(l.h)(),a=t.packageId,o=t.id,s=Object(N.b)().t,i=Object(l.g)(),m=Object(F.c)(function(e){return e}).auth,E=Object(n.useState)(!0),O=Object(u.a)(E,2),R=O[0],A=O[1],S=Object(n.useState)({}),I=Object(u.a)(S,2),p=I[0],h=I[1],T=Object(n.useState)({}),j=Object(u.a)(T,2),U=j[0],v=j[1],M=Object(n.useState)(),Q=Object(u.a)(M,2),y=Q[0],_=Q[1],x=Object(n.useState)(""),k=Object(u.a)(x,2),B=k[0],P=k[1],G=Object(n.useState)(""),z=Object(u.a)(G,2),L=z[0],Y=z[1];Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:q.w}),_(o),!o&&A(!1),!o&&_(void 0),!o&&Y(""),a&&w({id:a}).then(function(e){e.result===q.s?P(e.data.name):h({show:!0,color:q.a,message:e.message})}).catch(function(e){h({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),o&&D({id:o}).then(function(e){e.result===q.s?Y(e.data.question):h({show:!0,color:q.a,message:e.message}),A(!1)}).catch(function(e){console.log(e),h({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),A(!1)})},[o]);var H=function(){var e=Object(W.a)(K.a.mark(function e(t){var n;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,C({id:y,userId:m.user.id,packageId:a,question:L});case 4:n=e.sent,!y&&_(n.data.insertId),h({show:!0,color:n.result,message:n.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),h({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,s(y?"QUESTIONNAIRE.ADD_QUESTION.MODIFY_QUESTION":"QUESTIONNAIRE.ADD_QUESTION.ADD_QUESTION")," - ",s("SITE_NAME"))),c.a.createElement(r.d,null,c.a.createElement(r.e,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.e,null,s("NAVBAR.QUESTIONNAIRE.PACKAGES")),c.a.createElement(r.e,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONS")),c.a.createElement(r.e,{active:!0},s(y?"QUESTIONNAIRE.ADD_QUESTION.MODIFY_QUESTION":"QUESTIONNAIRE.ADD_QUESTION.ADD_QUESTION"))),!!R&&c.a.createElement(g.a,null),c.a.createElement(r.g,null,c.a.createElement(r.h,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:H},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},c.a.createElement("strong",null,s(y?"QUESTIONNAIRE.ADD_QUESTION.MODIFY_QUESTION":"QUESTIONNAIRE.ADD_QUESTION.ADD_QUESTION"))),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("QUESTIONNAIRE.PACKAGE"),": "),B)),c.a.createElement(r.N,null,c.a.createElement(r.i,{md:12},c.a.createElement(r.t,{label:s("QUESTIONNAIRE.QUESTION"),type:"textarea",rows:q.u,maxLength:q.f,outline:!0,autoFocus:!0,value:L,onChange:function(e){return Y(e.target.value)},onBlur:function(e){return v(Object.assign({},U,{question:!0}))}},U.question&&0===L.length&&c.a.createElement("div",{className:"invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("QUESTIONNAIRE.QUESTION")}))))),c.a.createElement(b.a,{in:p.show,classNames:"fade-transition",timeout:q.w,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:p.color,dismiss:!0,onClosed:function(){return h({})}},p.message)),c.a.createElement(n.Fragment,null,c.a.createElement(r.f,{type:"submit",color:"indigo",size:"sm",disabled:!L||!L.length},s(y?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),c.a.createElement(r.f,{flat:!0,size:"sm",onClick:function(e){i.goBack()}},s("COMMON.BUTTON.BACK")))))))},J=(a(506),function(){var e=Object(l.h)(),t=e.questionId,a=e.packageId,o=e.page,s=e.page2,i=e.page3,m=Object(N.b)().t,R=Object(l.g)(),S=Object(n.useState)(!0),I=Object(u.a)(S,2),p=I[0],h=I[1],T=Object(n.useState)({}),j=Object(u.a)(T,2),w=j[0],U=j[1],C=Object(n.useState)({}),v=Object(u.a)(C,2),Q=v[0],_=v[1],x=Object(n.useState)(0),k=Object(u.a)(x,2),B=k[0],P=k[1],K=Object(n.useState)(""),W=Object(u.a)(K,2),V=W[0],F=W[1],G=Object(n.useState)([]),z=Object(u.a)(G,2),L=z[0],Y=z[1],H=o?parseInt(o):1,J=[{label:"#",field:"id",sort:"asc"},{label:m("QUESTIONNAIRE.ANSWERS.ANSWER"),field:"answer",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:q.w}),D({id:t}).then(function(e){e.result===q.s?F(e.data.question):U({show:!0,color:q.a,message:e.message})}).catch(function(e){U({show:!0,color:q.a,message:m("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),M({questionId:t,page:H}).then(function(e){if(e.result===q.s){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=X(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}P(e.pageCount),Y(e.data)}else U({show:!0,color:q.a,message:e.message});h(!1)}).catch(function(e){U({show:!0,color:q.a,message:m("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),h(!1)})},[o,m]);var X=function(e,a){return c.a.createElement(n.Fragment,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.addAnswer,"/").concat(t,"/").concat(e)},c.a.createElement(r.f,{tag:"a",size:"sm",color:"indigo",className:"mr-2",floating:!0},c.a.createElement(r.r,{icon:"edit"}))),c.a.createElement(r.f,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(t){return ee(e,"#"+a)}},c.a.createElement(r.r,{icon:"trash"})))},Z=function(e){_(Object.assign({},Q,{show:!Q.show}))},$=function(e){R.push("".concat(E.a.questionnaire.answers,"/").concat(t,"/").concat(e,"/").concat(s||1,"/").concat(i||1))},ee=function(e,t){_(Object.assign({},Q,{show:!0,title:m("COMMON.BUTTON.DELETE"),message:m("COMMON.QUESTION.DELETE",{item:t}),deleteId:e}))};return c.a.createElement(n.Fragment,null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,m("QUESTIONNAIRE.ANSWERS.ANSWERS")," - ",m("SITE_NAME"))),c.a.createElement(r.d,null,c.a.createElement(r.e,null,m("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.e,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.packages,"/").concat(i||1)},m("NAVBAR.QUESTIONNAIRE.PACKAGES"))),c.a.createElement(r.e,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.questions,"/").concat(a,"/").concat(s||1,"/").concat(i||1)},m("NAVBAR.QUESTIONNAIRE.QUESTIONS"))),c.a.createElement(r.e,{active:!0},m("QUESTIONNAIRE.ANSWERS.ANSWERS"))),!!p&&c.a.createElement(g.a,null),!p&&c.a.createElement(r.N,null,c.a.createElement(r.i,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},m("QUESTIONNAIRE.ANSWERS.ANSWERS")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},m("QUESTIONNAIRE.QUESTION"),": "),V)),c.a.createElement(r.i,{md:12},c.a.createElement(b.a,{in:w.show,classNames:"fade-transition",timeout:q.w,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:w.color,dismiss:!0,onClosed:function(){return U({})}},w.message))),!!B&&c.a.createElement(r.i,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:H,pageCount:B,onChange:$}))),c.a.createElement(r.i,{md:12,className:"text-left mt-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.addAnswer,"/").concat(t)},c.a.createElement(r.f,{size:"sm",color:"primary"},m("QUESTIONNAIRE.ADD_ANSWER.ADD_ANSWER"))),c.a.createElement(r.f,{size:"sm",color:"warning",onClick:function(e){R.goBack()}},m("COMMON.BUTTON.BACK")))),c.a.createElement(r.i,{md:12},c.a.createElement(r.W,{responsive:!0,striped:!0},c.a.createElement(r.Y,null,c.a.createElement("tr",{className:"text-left"},J.map(function(e,t){return c.a.createElement("th",{key:t},e.label)}))),c.a.createElement(r.X,null,L.map(function(e,t){return c.a.createElement("tr",{key:t,className:"text-left"},c.a.createElement("td",null,e.number),c.a.createElement("td",null,e.answer),c.a.createElement("td",{className:"p-2 answer-edit-col"},e.button))})))),!!B&&c.a.createElement(r.i,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:H,pageCount:B,onChange:$})))),c.a.createElement(r.w,{isOpen:!!Q.show,toggle:Z,centered:!0},c.a.createElement(r.z,{toggle:Z},Q.title),c.a.createElement(r.x,{className:"text-left"},Q.message),c.a.createElement(r.y,null,c.a.createElement(r.f,{type:"button",color:"danger",onClick:function(e){y({id:Q.deleteId,page:H}).then(function(e){if(e.result===q.s){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=X(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}P(e.pageCount),Y(e.data)}else U({show:!0,color:q.a,message:e.message}),d.animateScroll.scrollToTop({duration:q.w});h(!1),Z()}).catch(function(e){U({show:!0,color:q.a,message:m("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),d.animateScroll.scrollToTop({duration:q.w}),h(!1),Z()})}},m("COMMON.BUTTON.DELETE")),c.a.createElement(r.f,{type:"button",color:"secondary",onClick:Z},m("COMMON.BUTTON.CANCEL")))))}),X=(a(507),function(e){Object(V.a)(e);var t=Object(l.h)(),a=t.questionId,o=t.id,s=Object(N.b)().t,i=Object(l.g)(),m=Object(F.c)(function(e){return e}).auth,R=Object(n.useState)(!0),A=Object(u.a)(R,2),S=A[0],I=A[1],p=Object(n.useState)({}),h=Object(u.a)(p,2),T=h[0],j=h[1],w=Object(n.useState)({}),U=Object(u.a)(w,2),C=(U[0],U[1],Object(n.useState)({})),v=Object(u.a)(C,2),M=v[0],y=v[1],x=Object(n.useState)(),k=Object(u.a)(x,2),B=k[0],P=k[1],G=Object(n.useState)(""),z=Object(u.a)(G,2),L=z[0],Y=z[1],H=Object(n.useState)(""),J=Object(u.a)(H,2),X=J[0],Z=J[1];Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:q.w}),P(o),!o&&I(!1),!o&&P(void 0),!o&&Z(""),a&&D({id:a}).then(function(e){e.result===q.s?Y(e.data.question):j({show:!0,color:q.a,message:e.message})}).catch(function(e){j({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),o&&_({id:o}).then(function(e){e.result===q.s?Z(e.data.answer):j({show:!0,color:q.a,message:e.message}),I(!1)}).catch(function(e){console.log(e),j({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),I(!1)})},[o]);var $=function(){var e=Object(W.a)(K.a.mark(function e(t){var n;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Q({id:B,userId:m.user.id,questionId:a,answer:X});case 4:n=e.sent,!B&&P(n.data.insertId),j({show:!0,color:n.result,message:n.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),j({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,s(B?"QUESTIONNAIRE.ADD_ANSWER.MODIFY_ANSWER":"QUESTIONNAIRE.ADD_ANSWER.ADD_ANSWER")," - ",s("SITE_NAME"))),c.a.createElement(r.d,null,c.a.createElement(r.e,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.e,null,c.a.createElement(O.b,{to:E.a.questionnaire.questions},s("NAVBAR.QUESTIONNAIRE.QUESTIONS"))),c.a.createElement(r.e,null,s("QUESTIONNAIRE.ANSWERS.ANSWERS")),c.a.createElement(r.e,{active:!0},s(B?"QUESTIONNAIRE.ADD_ANSWER.MODIFY_ANSWER":"QUESTIONNAIRE.ADD_ANSWER.ADD_ANSWER"))),!!S&&c.a.createElement(g.a,null),c.a.createElement(r.g,null,c.a.createElement(r.h,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:$},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},c.a.createElement("strong",null,s(B?"QUESTIONNAIRE.ADD_ANSWER.MODIFY_ANSWER":"QUESTIONNAIRE.ADD_ANSWER.ADD_ANSWER"))),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("QUESTIONNAIRE.QUESTION"),": "),L)),c.a.createElement(r.N,null,c.a.createElement(r.i,{md:12},c.a.createElement(r.t,{label:s("QUESTIONNAIRE.ANSWERS.ANSWER"),outline:!0,autoFocus:!0,value:X,onChange:function(e){return Z(e.target.value)},onBlur:function(e){return y(Object.assign({},M,{answer:!0}))}},M.answer&&0===X.length&&c.a.createElement("div",{className:"invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("QUESTIONNAIRE.ANSWERS.ANSWER")}))))),c.a.createElement(b.a,{in:T.show,classNames:"fade-transition",timeout:q.w,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:T.color,dismiss:!0,onClosed:function(){return j({})}},T.message)),c.a.createElement(n.Fragment,null,c.a.createElement(r.f,{type:"submit",color:"indigo",size:"sm",disabled:!X||!X.length},s(B?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),c.a.createElement(r.f,{flat:!0,size:"sm",onClick:function(e){i.goBack()}},s("COMMON.BUTTON.BACK")))))))}),Z=a(133),$=(a(508),function(e){var t=e.data,a=Object(N.b)().t,l=Object(n.useState)(100),o=Object(u.a)(l,2),s=o[0],i=o[1],m=Object(n.useState)({}),E=Object(u.a)(m,2),O=E[0],d=E[1],f="ltr"===a("DIRECTION")?"/":"\\";return Object(n.useEffect)(function(e){var a={},n=!0,c=!1,l=void 0;try{for(var r,o=t.answers[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){var s=r.value;a=Object.assign({},a,Object(Z.a)({},s.answer,s.count))}}catch(m){c=!0,l=m}finally{try{n||null==o.return||o.return()}finally{if(c)throw l}}i(t.answersCount),d(a)},[t,a]),c.a.createElement("div",{className:"text-left"},t.answers.map(function(e,t){return c.a.createElement(n.Fragment,{key:t},c.a.createElement("p",{className:"mb-1"},e.answer),c.a.createElement(r.M,{className:"mt-0 mb-3",material:!0,value:(O[e.answer]||0)/s*100,animated:!0,height:"20px"},O[e.answer]," ",f," ",s))}))});a(509);function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var te=function(){var e=Object(l.h)(),t=e.packageId,a=e.page,o=e.page2,s=Object(N.b)().t,i=Object(l.g)(),m=Object(n.useState)(!0),R=Object(u.a)(m,2),S=R[0],I=R[1],p=Object(n.useState)({}),h=Object(u.a)(p,2),T=h[0],j=h[1],U=Object(n.useState)(0),C=Object(u.a)(U,2),v=C[0],D=C[1],M=Object(n.useState)([]),Q=Object(u.a)(M,2),y=Q[0],_=Q[1],B=Object(n.useState)({}),P=Object(u.a)(B,2),K=P[0],W=P[1],V=Object(n.useState)(""),F=Object(u.a)(V,2),G=F[0],z=F[1],L=a?parseInt(a):1;Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:q.w}),Y()},[a,s]);var Y=function(e){w({id:t}).then(function(e){e.result===q.s?(W(e.data),z(e.data.releasedDate)):j({show:!0,color:q.a,message:e.message})}).catch(function(e){j({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),x({packageId:t,page:a}).then(function(e){e.result===q.s?(D(e.pageCount),_(e.data),j(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(a,!0).forEach(function(t){Object(Z.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},T,{show:!1}))):j({show:!0,color:q.a,message:e.message}),I(!1)}).catch(function(e){j({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),I(!1)})},H=function(e){i.push("".concat(E.a.questionnaire.result,"/").concat(t,"/").concat(e,"/").concat(o))};return c.a.createElement(n.Fragment,null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,s("QUESTIONNAIRE.RESULT.RESULT")," - ",s("SITE_NAME"))),c.a.createElement(r.d,null,c.a.createElement(r.e,null,s("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")),c.a.createElement(r.e,null,c.a.createElement(O.b,{to:"".concat(E.a.questionnaire.packages,"/").concat(o||1)},s("NAVBAR.QUESTIONNAIRE.PACKAGES"))),c.a.createElement(r.e,{active:!0},s("QUESTIONNAIRE.RESULT.RESULT"))),!!S&&c.a.createElement(g.a,null),!S&&c.a.createElement(r.N,null,c.a.createElement(r.i,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},s("QUESTIONNAIRE.RESULT.RESULT")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("QUESTIONNAIRE.PACKAGE"),": "),K.name)),c.a.createElement(r.i,{md:12},c.a.createElement(b.a,{in:T.show,classNames:"fade-transition",timeout:q.w,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:T.color,dismiss:!0,onClosed:function(){return j({})}},T.message))),c.a.createElement(r.i,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:L,pageCount:v,width:10,onChange:H}))),c.a.createElement(r.i,{md:12,className:"text-left my-3"},c.a.createElement("div",{className:"full-width"},K.endDate>=K.today&&c.a.createElement(r.f,{size:"sm",color:"primary",disabled:!0},s("COMMON.BUTTON.NOT_FINISHED")),K.endDate<K.today&&c.a.createElement(r.f,{size:"sm",color:G.length?"danger":"primary",onClick:function(e){k({id:t,page:a,release:!G.length}).then(function(e){e.result===q.s?z(e.data.releasedDate):j({show:!0,color:q.a,message:e.message})}).catch(function(e){j({show:!0,color:q.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})})}},G.length?s("COMMON.BUTTON.UNPUBLISH"):s("COMMON.BUTTON.PUBLISH")),c.a.createElement(r.f,{size:"sm",color:"warning",onClick:function(e){i.goBack()}},s("COMMON.BUTTON.BACK")))),c.a.createElement(r.i,{md:12},c.a.createElement(r.T,{vertical:!0,className:"text-left"},y.map(function(e,t){return c.a.createElement(r.S,{key:t,className:"completed"},c.a.createElement("a",null,c.a.createElement("span",{className:"circle"},e.index)),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"step-content grey lighten-4"},c.a.createElement("h6",{className:"mb-0"},e.question)),c.a.createElement("div",{className:"step-content mt-3 progress-group"},c.a.createElement($,{data:e}))))}))),c.a.createElement(r.i,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(A.a,{circle:!0,current:L,pageCount:v,width:10,onChange:H})))))};a(510),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(o.a,null),c.a.createElement(r.k,{className:"section"},c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.result,"/:packageId/:page?/:page2?"),exact:!0,component:te}),c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.addAnswer,"/:questionId/:id?"),exact:!0,component:X}),c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.answers,"/:questionId/:packageId/:page?/:page2?/:page3?"),exact:!0,component:J}),c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.addQuestion,"/:packageId/:id?"),exact:!0,component:H}),c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.questions,"/:packageId/:page?/:page2?"),exact:!0,component:Y}),c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.addPackage,"/:id?/:page?"),exact:!0,component:L}),c.a.createElement(l.b,{path:"".concat(E.a.questionnaire.packages,"/:page?"),exact:!0,component:B}),c.a.createElement(l.b,{path:m.a}))),c.a.createElement(s.a,null),c.a.createElement(i.a,null))}}}]);