(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{445:function(e,t,a){"use strict";var n=a(52),c=a(0),l=a.n(c),r=a(4),o=a(5),s=a(459),m=a(27);t.a=function(e){var t=e.circle,a=e.current,i=e.pageCount,u=e.width,E=e.onChange,O=Object(m.b)().t,d=Object(c.useState)([]),f=Object(n.a)(d,2),g=f[0],N=f[1],b="ltr"===O("DIRECTION")?"left":"right",p="ltr"===O("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!u&&(u=s.isMobile?o.o:o.n);var t=Math.ceil(u/2),n=a-t<1?1:a-t,c=a+t-1>i?i:a+t-1;c-n<u&&(1===n&&(c=i<u?i:u),c===i&&(n=i-u+1<1?1:i-u+1));for(var l=[],r=n;r<=c;r++)l.push(r);N(l)},[a,i,u]),l.a.createElement(c.Fragment,null,i>0&&l.a.createElement(r.J,{circle:t},l.a.createElement(r.H,{disabled:1===a,onClick:function(){return E(1)}},l.a.createElement(r.I,{className:"page-link"},l.a.createElement(r.s,{icon:"angle-double-".concat(b)}))),l.a.createElement(r.H,{disabled:1===a,onClick:function(){return E(a-1)}},l.a.createElement(r.I,{className:"page-link"},l.a.createElement(r.s,{icon:"angle-".concat(b)}))),g.map(function(e,t){return l.a.createElement(r.H,{key:e,active:e===a,onClick:function(){return a!==e&&E(e)}},l.a.createElement(r.I,{className:"page-link"},e))}),l.a.createElement(r.H,{disabled:a===i,onClick:function(){return E(a+1)}},l.a.createElement(r.I,{className:"page-link"},l.a.createElement(r.s,{icon:"angle-".concat(p)}))),l.a.createElement(r.H,{disabled:a===i,onClick:function(){return E(i)}},l.a.createElement(r.I,{className:"page-link"},l.a.createElement(r.s,{icon:"angle-double-".concat(p)})))))}},451:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(27),r=a(133);a(132);t.a=function(e){var t=Object(l.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(r.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},452:function(e,t,a){"use strict";var n=a(39),c=a(42),l=a(64);t.a={packages:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.packages,e).then(function(e){t(e)},function(e){a(e)})})},savePackage:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.savePackage,e).then(function(e){t(e)},function(e){a(e)})})},deletePackage:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.deletePackage,e).then(function(e){t(e)},function(e){a(e)})})},getPackage:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.getPackage,e).then(function(e){t(e)},function(e){a(e)})})},questions:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.questions,e).then(function(e){t(e)},function(e){a(e)})})},saveQuestion:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.saveQuestion,e).then(function(e){t(e)},function(e){a(e)})})},deleteQuestion:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.deleteQuestion,e).then(function(e){t(e)},function(e){a(e)})})},getQuestion:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.getQuestion,e).then(function(e){t(e)},function(e){a(e)})})},answers:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.answers,e).then(function(e){t(e)},function(e){a(e)})})},saveAnswer:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.saveAnswer,e).then(function(e){t(e)},function(e){a(e)})})},deleteAnswer:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.deleteAnswer,e).then(function(e){t(e)},function(e){a(e)})})},getAnswer:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.getAnswer,e).then(function(e){t(e)},function(e){a(e)})})},result:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.result,e).then(function(e){t(e)},function(e){a(e)})})},publish:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.publish,e).then(function(e){t(e)},function(e){a(e)})})},count:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.count,e).then(function(e){t(e)},function(e){a(e)})})}}},468:function(e,t,a){},520:function(e,t,a){},521:function(e,t,a){},522:function(e,t,a){},523:function(e,t,a){},524:function(e,t,a){},525:function(e,t,a){},526:function(e,t,a){},539:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(33),r=a(4),o=a(128),s=a(129),m=a(131),i=a(130),u=a(10),E=a(52),O=a(38),d=a(27),f=a(126),g=a(444),N=a(439),b=a(127),p=a(451),R=a(445),h=a(452),T=a(5),A=(a(520),function(){var e=Object(l.h)().page,t=Object(d.b)().t,a=Object(l.g)(),o=Object(n.useState)(!0),s=Object(E.a)(o,2),m=s[0],i=s[1],A=Object(n.useState)({}),j=Object(E.a)(A,2),S=j[0],v=j[1],C=Object(n.useState)({}),w=Object(E.a)(C,2),D=w[0],M=w[1],V=Object(n.useState)(0),y=Object(E.a)(V,2),I=y[0],k=y[1],_=Object(n.useState)([]),x=Object(E.a)(_,2),U=x[0],B=x[1],P=e?parseInt(e):1,K=[{label:"#",field:"id",sort:"asc"},{label:t("VOTE.PACKAGE"),field:"question",sort:"asc"},{label:t("VOTE.START_DATE"),field:"startDate",sort:"asc"},{label:t("VOTE.END_DATE"),field:"endDate",sort:"asc"},{label:t("VOTE.RELEASED_DATE"),field:"endDate",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(n.useEffect)(function(a){f.animateScroll.scrollToTop({duration:T.F}),h.a.packages({page:e}).then(function(e){if(e.result===T.B){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=W(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}k(e.pageCount),B(e.data)}else v({show:!0,color:T.a,message:e.message});i(!1)}).catch(function(e){v({show:!0,color:T.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),i(!1)})},[e,t]);var W=function(t,a){return c.a.createElement(n.Fragment,null,c.a.createElement(O.b,{to:"".concat(u.a.vote.addPackage,"/").concat(e||1,"/").concat(t)},c.a.createElement(r.g,{tag:"a",size:"sm",color:"indigo",floating:!0},c.a.createElement(r.s,{icon:"edit"}))),c.a.createElement(O.b,{to:"".concat(u.a.vote.questions,"/").concat(t,"/1/").concat(e||1)},c.a.createElement(r.g,{tag:"a",size:"sm",color:"primary",className:"mx-2",floating:!0},c.a.createElement(r.s,{icon:"list"}))),c.a.createElement(O.b,{to:"".concat(u.a.vote.result,"/").concat(t,"/1/").concat(e||1)},c.a.createElement(r.g,{tag:"a",size:"sm",color:"indigo",className:"mr-2",floating:!0},c.a.createElement(r.s,{icon:"eye"}))),c.a.createElement(r.g,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(e){return q(t,"#"+a)}},c.a.createElement(r.s,{icon:"trash"})))},F=function(e){M(Object.assign({},D,{show:!D.show}))},Q=function(e){a.push("".concat(u.a.vote.packages,"/").concat(e))},q=function(e,a){M(Object.assign({},D,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:a}),deleteId:e}))};return c.a.createElement(n.Fragment,null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,t("NAVBAR.VOTE.PACKAGES")," - ",t("SITE_NAME"))),c.a.createElement(r.e,null,c.a.createElement(r.f,null,t("NAVBAR.VOTE.VOTE")),c.a.createElement(r.f,{active:!0},t("NAVBAR.VOTE.PACKAGES"))),!!m&&c.a.createElement(b.a,null),!m&&!U.length&&c.a.createElement(p.a,null),!m&&!!U.length&&c.a.createElement(r.N,null,c.a.createElement(r.j,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},t("NAVBAR.VOTE.PACKAGES"))),c.a.createElement(r.j,{md:12},c.a.createElement(N.a,{in:S.show,classNames:"fade-transition",timeout:T.F,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:S.color,dismiss:!0,onClosed:function(){return v({})}},S.message))),c.a.createElement(r.j,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(R.a,{circle:!0,current:P,pageCount:I,onChange:Q}))),c.a.createElement(r.j,{md:12,className:"text-left mt-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(O.b,{to:"".concat(u.a.vote.addPackage,"/").concat(e||1)},c.a.createElement(r.g,{size:"sm",color:"primary"},t("NAVBAR.VOTE.ADD_PACKAGE"))))),c.a.createElement(r.j,{md:12},c.a.createElement(r.W,{responsive:!0,striped:!0},c.a.createElement(r.Y,null,c.a.createElement("tr",{className:"text-left"},K.map(function(e,t){return c.a.createElement("th",{key:t},e.label)}))),c.a.createElement(r.X,null,U.map(function(e,t){return c.a.createElement("tr",{key:t,className:"text-left"},c.a.createElement("td",null,e.number),c.a.createElement("td",null,e.name," ",!!e.ended&&!e.releasedDate.length&&c.a.createElement(r.s,{className:"text-danger",icon:"exclamation-circle"})),c.a.createElement("td",{className:"date-col"},e.startDate),c.a.createElement("td",{className:"date-col"},e.endDate),c.a.createElement("td",{className:"date-col2"},e.releasedDate),c.a.createElement("td",{className:"p-2 edit-col4"},e.button))})))),c.a.createElement(r.j,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(R.a,{circle:!0,current:P,pageCount:I,onChange:Q})))),c.a.createElement(r.w,{isOpen:!!D.show,toggle:F,centered:!0},c.a.createElement(r.z,{toggle:F},D.title),c.a.createElement(r.x,{className:"text-left"},D.message),c.a.createElement(r.y,null,c.a.createElement(r.g,{type:"button",color:"danger",onClick:function(a){h.a.deletePackage({id:D.deleteId,page:e}).then(function(e){if(e.result===T.B){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=W(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}k(e.pageCount),B(e.data)}else v({show:!0,color:T.a,message:e.message}),f.animateScroll.scrollToTop({duration:T.F});i(!1),F()}).catch(function(e){v({show:!0,color:T.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),f.animateScroll.scrollToTop({duration:T.F}),i(!1),F()})}},t("COMMON.BUTTON.DELETE")),c.a.createElement(r.g,{type:"button",color:"secondary",onClick:F},t("COMMON.BUTTON.CANCEL")))))}),j=a(446),S=a.n(j),v=a(447),C=a(448),w=a(31),D=a(457),M=a.n(D),V=(a(468),function(e){Object(C.a)(e);var t=Object(l.h)(),a=t.id,o=t.page,s=Object(d.b)().t,m=Object(l.g)(),i=Object(w.c)(function(e){return e}).auth,p=Object(n.useState)(!0),R=Object(E.a)(p,2),A=R[0],j=R[1],D=Object(n.useState)({}),V=Object(E.a)(D,2),y=V[0],I=V[1],k=Object(n.useState)({}),_=Object(E.a)(k,2),x=(_[0],_[1],Object(n.useState)({})),U=Object(E.a)(x,2),B=U[0],P=U[1],K=Object(n.useState)(),W=Object(E.a)(K,2),F=W[0],Q=W[1],q=Object(n.useState)(""),z=Object(E.a)(q,2),G=z[0],L=z[1],Y=Object(n.useState)(),H=Object(E.a)(Y,2),J=H[0],X=H[1],Z=Object(n.useState)(),$=Object(E.a)(Z,2),ee=$[0],te=$[1],ae=Object(n.createRef)(null),ne=Object(n.createRef)(null);Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:T.F}),Q(a),!a&&j(!1),!a&&Q(void 0),!a&&L(""),!a&&X(new Date),!a&&te(new Date),a&&h.a.getPackage({id:a}).then(function(e){e.result===T.B?(L(e.data.name),X(e.data.startDate),te(e.data.endDate)):I({show:!0,color:T.a,message:e.message}),j(!1)}).catch(function(e){console.log(e),I({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),j(!1)})},[a]);var ce=function(){var e=Object(v.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.a.savePackage({id:F,userId:i.user.id,name:G,startDate:M()(J,"yyyy-mm-dd"),endDate:M()(ee,"yyyy-mm-dd")});case 4:a=e.sent,!F&&Q(a.data.insertId),I({show:!0,color:a.result,message:a.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),I({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,s(F?"VOTE.ADD_PACKAGE.MODIFY_PACKAGE":"VOTE.ADD_PACKAGE.ADD_PACKAGE")," - ",s("SITE_NAME"))),c.a.createElement(r.e,null,c.a.createElement(r.f,null,s("NAVBAR.VOTE.VOTE")),c.a.createElement(r.f,null,c.a.createElement(O.b,{to:"".concat(u.a.vote.packages,"/").concat(o||1)},s("NAVBAR.VOTE.PACKAGES"))),c.a.createElement(r.f,{active:!0},s(F?"VOTE.ADD_PACKAGE.MODIFY_PACKAGE":"VOTE.ADD_PACKAGE.ADD_PACKAGE"))),!!A&&c.a.createElement(b.a,null),!A&&c.a.createElement(r.h,null,c.a.createElement(r.i,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:ce},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},c.a.createElement("strong",null,s(F?"VOTE.ADD_PACKAGE.MODIFY_PACKAGE":"VOTE.ADD_PACKAGE.ADD_PACKAGE")))),c.a.createElement(r.N,null,c.a.createElement(r.j,{md:12},c.a.createElement(r.u,{label:s("VOTE.PACKAGE"),outline:!0,autoFocus:!0,value:G,onChange:function(e){return L(e.target.value)},onBlur:function(e){return P(Object.assign({},B,{name:!0}))}},B.name&&0===G.length&&c.a.createElement("div",{className:"invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("VOTE.PACKAGE")}))))),c.a.createElement(r.N,null,c.a.createElement(r.j,{md:6},c.a.createElement(r.m,{ref:ae,format:T.b,autoOk:!0,keyboard:!0,className:"date-picker",value:J,getValue:function(e){return X(e)}}),c.a.createElement("label",{className:"date-picker-label"},s("VOTE.START_DATE"))),c.a.createElement(r.j,{md:6},c.a.createElement(r.m,{ref:ne,format:T.b,autoOk:!0,keyboard:!0,className:"date-picker",value:ee,getValue:function(e){return te(e)}}),c.a.createElement("label",{className:"date-picker-label"},s("VOTE.END_DATE")))),c.a.createElement(N.a,{in:y.show,classNames:"fade-transition",timeout:T.F,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:y.color,dismiss:!0,onClosed:function(){return I({})}},y.message)),c.a.createElement(n.Fragment,null,c.a.createElement(r.g,{type:"submit",color:"indigo",size:"sm",disabled:!G||!G.length},s(F?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),c.a.createElement(r.g,{type:"button",color:"primary",size:"sm",disabled:!!A,onClick:function(e){I({}),Q(void 0),L(""),ae.current&&(ae.current.state.selectedDate=M()(new Date,"yyyy-mm-dd")),ne.current&&(ne.current.state.selectedDate=M()(new Date,"yyyy-mm-dd")),P({}),m.push("".concat(u.a.vote.addPackage))}},s("COMMON.BUTTON.NEW")),c.a.createElement(r.g,{flat:!0,size:"sm",onClick:function(e){m.goBack()}},s("COMMON.BUTTON.BACK")))))))}),y=(a(521),function(){var e=Object(l.h)(),t=e.packageId,a=e.page,o=e.page2,s=(e.page3,Object(d.b)().t),m=Object(l.g)(),i=Object(n.useState)(!0),p=Object(E.a)(i,2),A=p[0],j=p[1],S=Object(n.useState)({}),v=Object(E.a)(S,2),C=v[0],w=v[1],D=Object(n.useState)({}),M=Object(E.a)(D,2),V=M[0],y=M[1],I=Object(n.useState)(0),k=Object(E.a)(I,2),_=k[0],x=k[1],U=Object(n.useState)([]),B=Object(E.a)(U,2),P=B[0],K=B[1],W=Object(n.useState)(""),F=Object(E.a)(W,2),Q=F[0],q=F[1],z=a?parseInt(a):1,G=[{label:"#",field:"id",sort:"asc"},{label:s("VOTE.QUESTION"),field:"question",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:T.F}),h.a.getPackage({id:t}).then(function(e){e.result===T.B?q(e.data.name):w({show:!0,color:T.a,message:e.message})}).catch(function(e){w({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),h.a.questions({packageId:t,page:a}).then(function(e){if(e.result===T.B){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.question=r.question.length>T.C?r.question.substring(0,T.C)+"...":r.question,r.button=L(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}x(e.pageCount),K(e.data)}else w({show:!0,color:T.a,message:e.message});j(!1)}).catch(function(e){w({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),j(!1)})},[a,s]);var L=function(e,l){return c.a.createElement(n.Fragment,null,c.a.createElement(O.b,{to:"".concat(u.a.vote.addQuestion,"/").concat(t,"/").concat(a||1,"/").concat(o||1,"/").concat(e)},c.a.createElement(r.g,{tag:"a",size:"sm",color:"indigo",floating:!0},c.a.createElement(r.s,{icon:"edit"}))),c.a.createElement(O.b,{to:"".concat(u.a.vote.answers,"/").concat(e,"/").concat(t,"/1/").concat(a||1,"/").concat(o||1)},c.a.createElement(r.g,{tag:"a",size:"sm",color:"primary",className:"mx-2",floating:!0},c.a.createElement(r.s,{icon:"comments"}))),c.a.createElement(r.g,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(t){return J(e,"#"+l)}},c.a.createElement(r.s,{icon:"trash"})))},Y=function(e){y(Object.assign({},V,{show:!V.show}))},H=function(e){m.push("".concat(u.a.vote.questions,"/").concat(t,"/").concat(e,"/").concat(o||1))},J=function(e,t){y(Object.assign({},V,{show:!0,title:s("COMMON.BUTTON.DELETE"),message:s("COMMON.QUESTION.DELETE",{item:t}),deleteId:e}))};return c.a.createElement(n.Fragment,null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,s("NAVBAR.VOTE.QUESTIONS")," - ",s("SITE_NAME"))),c.a.createElement(r.e,null,c.a.createElement(r.f,null,s("NAVBAR.VOTE.VOTE")),c.a.createElement(r.f,null,c.a.createElement(O.b,{to:"".concat(u.a.vote.packages,"/").concat(o||1)},s("NAVBAR.VOTE.PACKAGES"))),c.a.createElement(r.f,{active:!0},s("VOTE.QUESTIONS.QUESTIONS"))),!!A&&c.a.createElement(b.a,null),!A&&c.a.createElement(r.N,null,c.a.createElement(r.j,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},s("NAVBAR.VOTE.QUESTIONS")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("VOTE.PACKAGE"),": "),Q)),c.a.createElement(r.j,{md:12},c.a.createElement(N.a,{in:C.show,classNames:"fade-transition",timeout:T.F,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:C.color,dismiss:!0,onClosed:function(){return w({})}},C.message))),c.a.createElement(r.j,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(R.a,{circle:!0,current:z,pageCount:_,onChange:H}))),c.a.createElement(r.j,{md:12,className:"text-left mt-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(O.b,{to:"".concat(u.a.vote.addQuestion,"/").concat(t,"/").concat(a||1,"/").concat(o||1)},c.a.createElement(r.g,{size:"sm",color:"primary"},s("NAVBAR.VOTE.ADD_QUESTION"))),c.a.createElement(r.g,{size:"sm",color:"warning",onClick:function(e){m.goBack()}},s("COMMON.BUTTON.BACK")))),c.a.createElement(r.j,{md:12},c.a.createElement(r.W,{responsive:!0,striped:!0},c.a.createElement(r.Y,null,c.a.createElement("tr",{className:"text-left"},G.map(function(e,t){return c.a.createElement("th",{key:t},e.label)}))),c.a.createElement(r.X,null,!P.length&&c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5,className:"text-center"},s("COMMON.ERROR.NO_DATA"))),!!P.length&&P.map(function(e,t){return c.a.createElement("tr",{key:t,className:"text-left"},c.a.createElement("td",null,e.number),c.a.createElement("td",null,e.question),c.a.createElement("td",{className:"p-2 edit-col3"},e.button))})))),c.a.createElement(r.j,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(R.a,{circle:!0,current:z,pageCount:_,onChange:H})))),c.a.createElement(r.w,{isOpen:!!V.show,toggle:Y,centered:!0},c.a.createElement(r.z,{toggle:Y},V.title),c.a.createElement(r.x,{className:"text-left"},V.message),c.a.createElement(r.y,null,c.a.createElement(r.g,{type:"button",color:"danger",onClick:function(e){h.a.deleteQuestion({id:V.deleteId,packageId:t,page:a}).then(function(e){if(e.result===T.B){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.question=r.question.length>T.C?r.question.substring(0,T.C)+"...":r.question,r.button=L(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}x(e.pageCount),K(e.data)}else w({show:!0,color:T.a,message:e.message}),f.animateScroll.scrollToTop({duration:T.F});j(!1),Y()}).catch(function(e){w({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),f.animateScroll.scrollToTop({duration:T.F}),j(!1),Y()})}},s("COMMON.BUTTON.DELETE")),c.a.createElement(r.g,{type:"button",color:"secondary",onClick:Y},s("COMMON.BUTTON.CANCEL")))))}),I=function(e){Object(C.a)(e);var t=Object(l.h)(),a=t.packageId,o=t.id,s=t.page,m=t.page2,i=(t.page3,Object(d.b)().t),p=Object(l.g)(),R=Object(w.c)(function(e){return e}).auth,A=Object(n.useState)(!0),j=Object(E.a)(A,2),D=j[0],M=j[1],V=Object(n.useState)({}),y=Object(E.a)(V,2),I=y[0],k=y[1],_=Object(n.useState)({}),x=Object(E.a)(_,2),U=x[0],B=x[1],P=Object(n.useState)(),K=Object(E.a)(P,2),W=K[0],F=K[1],Q=Object(n.useState)(""),q=Object(E.a)(Q,2),z=q[0],G=q[1],L=Object(n.useState)(""),Y=Object(E.a)(L,2),H=Y[0],J=Y[1];Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:T.F}),F(o),!o&&M(!1),!o&&F(void 0),!o&&J(""),a&&h.a.getPackage({id:a}).then(function(e){e.result===T.B?G(e.data.name):k({show:!0,color:T.a,message:e.message})}).catch(function(e){k({show:!0,color:T.a,message:i("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),o&&h.a.getQuestion({id:o}).then(function(e){e.result===T.B?J(e.data.question):k({show:!0,color:T.a,message:e.message}),M(!1)}).catch(function(e){console.log(e),k({show:!0,color:T.a,message:i("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),M(!1)})},[o]);var X=function(){var e=Object(v.a)(S.a.mark(function e(t){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.a.saveQuestion({id:W,userId:R.user.id,packageId:a,question:H});case 4:n=e.sent,!W&&F(n.data.insertId),k({show:!0,color:n.result,message:n.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),k({show:!0,color:T.a,message:i("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,i(W?"VOTE.ADD_QUESTION.MODIFY_QUESTION":"VOTE.ADD_QUESTION.ADD_QUESTION")," - ",i("SITE_NAME"))),c.a.createElement(r.e,null,c.a.createElement(r.f,null,i("NAVBAR.VOTE.VOTE")),c.a.createElement(r.f,null,c.a.createElement(O.b,{to:"".concat(u.a.vote.packages,"/").concat(m||1)},i("NAVBAR.VOTE.PACKAGES"))),c.a.createElement(r.f,null,c.a.createElement(O.b,{to:"".concat(u.a.vote.questions,"/").concat(a,"/").concat(s||1,"/").concat(m||1)},i("NAVBAR.VOTE.QUESTIONS"))),c.a.createElement(r.f,{active:!0},i(W?"VOTE.ADD_QUESTION.MODIFY_QUESTION":"VOTE.ADD_QUESTION.ADD_QUESTION"))),!!D&&c.a.createElement(b.a,null),!D&&c.a.createElement(r.h,null,c.a.createElement(r.i,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:X},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},c.a.createElement("strong",null,i(W?"VOTE.ADD_QUESTION.MODIFY_QUESTION":"VOTE.ADD_QUESTION.ADD_QUESTION"))),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},i("VOTE.PACKAGE"),": "),z)),c.a.createElement(r.N,null,c.a.createElement(r.j,{md:12},c.a.createElement(r.u,{label:i("VOTE.QUESTION"),type:"textarea",rows:T.D,maxLength:T.f,outline:!0,autoFocus:!0,value:H,onChange:function(e){return J(e.target.value)},onBlur:function(e){return B(Object.assign({},U,{question:!0}))}},U.question&&0===H.length&&c.a.createElement("div",{className:"invalid-field"},i("COMMON.VALIDATION.REQUIRED",{field:i("VOTE.QUESTION")}))))),c.a.createElement(N.a,{in:I.show,classNames:"fade-transition",timeout:T.F,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:I.color,dismiss:!0,onClosed:function(){return k({})}},I.message)),c.a.createElement(n.Fragment,null,c.a.createElement(r.g,{type:"submit",color:"indigo",size:"sm",disabled:!H||!H.length},i(W?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),c.a.createElement(r.g,{type:"button",color:"primary",size:"sm",disabled:!!D,onClick:function(e){k({}),F(void 0),J(""),B({}),p.push("".concat(u.a.vote.addQuestion,"/").concat(a,"/").concat(s||1,"/").concat(m||1))}},i("COMMON.BUTTON.NEW")),c.a.createElement(r.g,{flat:!0,size:"sm",onClick:function(e){p.goBack()}},i("COMMON.BUTTON.BACK")))))))},k=(a(522),function(){var e=Object(l.h)(),t=e.questionId,a=e.packageId,o=e.page,s=e.page2,m=e.page3,i=Object(d.b)().t,p=Object(l.g)(),A=Object(n.useState)(!0),j=Object(E.a)(A,2),S=j[0],v=j[1],C=Object(n.useState)({}),w=Object(E.a)(C,2),D=w[0],M=w[1],V=Object(n.useState)({}),y=Object(E.a)(V,2),I=y[0],k=y[1],_=Object(n.useState)(0),x=Object(E.a)(_,2),U=x[0],B=x[1],P=Object(n.useState)(""),K=Object(E.a)(P,2),W=K[0],F=K[1],Q=Object(n.useState)([]),q=Object(E.a)(Q,2),z=q[0],G=q[1],L=o?parseInt(o):1,Y=[{label:"#",field:"id",sort:"asc"},{label:i("VOTE.ANSWERS.ANSWER"),field:"answer",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:T.F}),h.a.getQuestion({id:t}).then(function(e){e.result===T.B?F(e.data.question):M({show:!0,color:T.a,message:e.message})}).catch(function(e){M({show:!0,color:T.a,message:i("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),h.a.answers({questionId:t,page:L}).then(function(e){if(e.result===T.B){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=H(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}B(e.pageCount),G(e.data)}else M({show:!0,color:T.a,message:e.message});v(!1)}).catch(function(e){M({show:!0,color:T.a,message:i("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),v(!1)})},[o,i]);var H=function(e,l){return c.a.createElement(n.Fragment,null,c.a.createElement(O.b,{to:"".concat(u.a.vote.addAnswer,"/").concat(t,"/").concat(a,"/").concat(o||1,"/").concat(s||1,"/").concat(m||1,"/").concat(e)},c.a.createElement(r.g,{tag:"a",size:"sm",color:"indigo",className:"mr-2",floating:!0},c.a.createElement(r.s,{icon:"edit"}))),c.a.createElement(r.g,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(t){return Z(e,"#"+l)}},c.a.createElement(r.s,{icon:"trash"})))},J=function(e){k(Object.assign({},I,{show:!I.show}))},X=function(e){p.push("".concat(u.a.vote.answers,"/").concat(t,"/").concat(a,"/").concat(e||1,"/").concat(s||1,"/").concat(m||1))},Z=function(e,t){k(Object.assign({},I,{show:!0,title:i("COMMON.BUTTON.DELETE"),message:i("COMMON.QUESTION.DELETE",{item:t}),deleteId:e}))};return c.a.createElement(n.Fragment,null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,i("VOTE.ANSWERS.ANSWERS")," - ",i("SITE_NAME"))),c.a.createElement(r.e,null,c.a.createElement(r.f,null,i("NAVBAR.VOTE.VOTE")),c.a.createElement(r.f,null,c.a.createElement(O.b,{to:"".concat(u.a.vote.packages,"/").concat(m||1)},i("NAVBAR.VOTE.PACKAGES"))),c.a.createElement(r.f,null,c.a.createElement(O.b,{to:"".concat(u.a.vote.questions,"/").concat(a,"/").concat(s||1,"/").concat(m||1)},i("NAVBAR.VOTE.QUESTIONS"))),c.a.createElement(r.f,{active:!0},i("VOTE.ANSWERS.ANSWERS"))),!!S&&c.a.createElement(b.a,null),!S&&c.a.createElement(r.N,null,c.a.createElement(r.j,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},i("VOTE.ANSWERS.ANSWERS")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},i("VOTE.QUESTION"),": "),W)),c.a.createElement(r.j,{md:12},c.a.createElement(N.a,{in:D.show,classNames:"fade-transition",timeout:T.F,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:D.color,dismiss:!0,onClosed:function(){return M({})}},D.message))),!!U&&c.a.createElement(r.j,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(R.a,{circle:!0,current:L,pageCount:U,onChange:X}))),c.a.createElement(r.j,{md:12,className:"text-left mt-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(O.b,{to:"".concat(u.a.vote.addAnswer,"/").concat(t,"/").concat(a,"/").concat(o||1,"/").concat(s||1,"/").concat(m)},c.a.createElement(r.g,{size:"sm",color:"primary"},i("VOTE.ADD_ANSWER.ADD_ANSWER"))),c.a.createElement(r.g,{size:"sm",color:"warning",onClick:function(e){p.goBack()}},i("COMMON.BUTTON.BACK")))),c.a.createElement(r.j,{md:12},c.a.createElement(r.W,{responsive:!0,striped:!0},c.a.createElement(r.Y,null,c.a.createElement("tr",{className:"text-left"},Y.map(function(e,t){return c.a.createElement("th",{key:t},e.label)}))),c.a.createElement(r.X,null,z.map(function(e,t){return c.a.createElement("tr",{key:t,className:"text-left"},c.a.createElement("td",null,e.number),c.a.createElement("td",null,e.answer),c.a.createElement("td",{className:"p-2 edit-col2"},e.button))})))),!!U&&c.a.createElement(r.j,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(R.a,{circle:!0,current:L,pageCount:U,onChange:X})))),c.a.createElement(r.w,{isOpen:!!I.show,toggle:J,centered:!0},c.a.createElement(r.z,{toggle:J},I.title),c.a.createElement(r.x,{className:"text-left"},I.message),c.a.createElement(r.y,null,c.a.createElement(r.g,{type:"button",color:"danger",onClick:function(e){h.a.deleteAnswer({id:I.deleteId,page:L}).then(function(e){if(e.result===T.B){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=H(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}B(e.pageCount),G(e.data)}else M({show:!0,color:T.a,message:e.message}),f.animateScroll.scrollToTop({duration:T.F});v(!1),J()}).catch(function(e){M({show:!0,color:T.a,message:i("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),f.animateScroll.scrollToTop({duration:T.F}),v(!1),J()})}},i("COMMON.BUTTON.DELETE")),c.a.createElement(r.g,{type:"button",color:"secondary",onClick:J},i("COMMON.BUTTON.CANCEL")))))}),_=(a(523),function(e){Object(C.a)(e);var t=Object(l.h)(),a=t.questionId,o=t.packageId,s=t.id,m=t.page,i=t.page2,p=t.page3,R=Object(d.b)().t,A=Object(l.g)(),j=Object(w.c)(function(e){return e}).auth,D=Object(n.useState)(!0),M=Object(E.a)(D,2),V=M[0],y=M[1],I=Object(n.useState)({}),k=Object(E.a)(I,2),_=k[0],x=k[1],U=Object(n.useState)({}),B=Object(E.a)(U,2),P=(B[0],B[1],Object(n.useState)({})),K=Object(E.a)(P,2),W=K[0],F=K[1],Q=Object(n.useState)(),q=Object(E.a)(Q,2),z=q[0],G=q[1],L=Object(n.useState)(""),Y=Object(E.a)(L,2),H=Y[0],J=Y[1],X=Object(n.useState)(""),Z=Object(E.a)(X,2),$=Z[0],ee=Z[1];Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:T.F}),G(s),!s&&y(!1),!s&&G(void 0),!s&&ee(""),a&&h.a.getQuestion({id:a}).then(function(e){e.result===T.B?J(e.data.question):x({show:!0,color:T.a,message:e.message})}).catch(function(e){x({show:!0,color:T.a,message:R("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),s&&h.a.getAnswer({id:s}).then(function(e){e.result===T.B?ee(e.data.answer):x({show:!0,color:T.a,message:e.message}),y(!1)}).catch(function(e){console.log(e),x({show:!0,color:T.a,message:R("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),y(!1)})},[s]);var te=function(){var e=Object(v.a)(S.a.mark(function e(t){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.a.saveAnswer({id:z,userId:j.user.id,questionId:a,answer:$});case 4:n=e.sent,!z&&G(n.data.insertId),x({show:!0,color:n.result,message:n.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),x({show:!0,color:T.a,message:R("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,R(z?"VOTE.ADD_ANSWER.MODIFY_ANSWER":"VOTE.ADD_ANSWER.ADD_ANSWER")," - ",R("SITE_NAME"))),c.a.createElement(r.e,null,c.a.createElement(r.f,null,R("NAVBAR.VOTE.VOTE")),c.a.createElement(r.f,null,c.a.createElement(O.b,{to:"".concat(u.a.vote.packages,"/").concat(p||1)},R("NAVBAR.VOTE.PACKAGES"))),c.a.createElement(r.f,null,c.a.createElement(O.b,{to:"".concat(u.a.vote.questions,"/").concat(o,"/").concat(i||1,"/").concat(p||1)},R("NAVBAR.VOTE.QUESTIONS"))),c.a.createElement(r.f,null,c.a.createElement(O.b,{to:"".concat(u.a.vote.answers,"/").concat(a,"/").concat(o,"/").concat(m||1,"/").concat(i||1,"/").concat(p||1)},R("VOTE.ANSWERS.ANSWERS"))),c.a.createElement(r.f,{active:!0},R(z?"VOTE.ADD_ANSWER.MODIFY_ANSWER":"VOTE.ADD_ANSWER.ADD_ANSWER"))),!!V&&c.a.createElement(b.a,null),!V&&c.a.createElement(r.h,null,c.a.createElement(r.i,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:te},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},c.a.createElement("strong",null,R(z?"VOTE.ADD_ANSWER.MODIFY_ANSWER":"VOTE.ADD_ANSWER.ADD_ANSWER"))),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},R("VOTE.QUESTION"),": "),H)),c.a.createElement(r.N,null,c.a.createElement(r.j,{md:12},c.a.createElement(r.u,{label:R("VOTE.ANSWERS.ANSWER"),outline:!0,autoFocus:!0,value:$,onChange:function(e){return ee(e.target.value)},onBlur:function(e){return F(Object.assign({},W,{answer:!0}))}},W.answer&&0===$.length&&c.a.createElement("div",{className:"invalid-field"},R("COMMON.VALIDATION.REQUIRED",{field:R("VOTE.ANSWERS.ANSWER")}))))),c.a.createElement(N.a,{in:_.show,classNames:"fade-transition",timeout:T.F,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:_.color,dismiss:!0,onClosed:function(){return x({})}},_.message)),c.a.createElement(n.Fragment,null,c.a.createElement(r.g,{type:"submit",color:"indigo",size:"sm",disabled:!$||!$.length},R(z?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),c.a.createElement(r.g,{type:"button",color:"primary",size:"sm",disabled:!!V,onClick:function(e){x({}),G(void 0),ee(""),F({}),A.push("".concat(u.a.vote.addAnswer,"/").concat(a,"/").concat(o,"/").concat(m||1,"/").concat(i||1,"/").concat(p||1))}},R("COMMON.BUTTON.NEW")),c.a.createElement(r.g,{flat:!0,size:"sm",onClick:function(e){A.goBack()}},R("COMMON.BUTTON.BACK")))))))}),x=a(71),U=(a(524),function(e){var t=e.data,a=Object(d.b)().t,l=Object(n.useState)(100),o=Object(E.a)(l,2),s=o[0],m=o[1],i=Object(n.useState)({}),u=Object(E.a)(i,2),O=u[0],f=u[1],g="ltr"===a("DIRECTION")?"/":"\\";return Object(n.useEffect)(function(e){var a={},n=!0,c=!1,l=void 0;try{for(var r,o=t.answers[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){var s=r.value;a=Object.assign({},a,Object(x.a)({},s.answer,s.count))}}catch(i){c=!0,l=i}finally{try{n||null==o.return||o.return()}finally{if(c)throw l}}m(t.answersCount),f(a)},[t,a]),c.a.createElement("div",{className:"text-left"},t.answers.map(function(e,t){return c.a.createElement(n.Fragment,{key:t},c.a.createElement("p",{className:"mb-1 white-text"},e.answer),c.a.createElement(r.M,{className:"mt-0 mb-3",color:"default",material:!0,value:(O[e.answer]||0)/s*100,animated:!0,height:"20px"},O[e.answer]," ",g," ",s))}))});a(525);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var P=function(){var e=Object(l.h)(),t=e.packageId,a=e.page,o=e.page2,s=Object(d.b)().t,m=Object(l.g)(),i=Object(n.useState)(!0),p=Object(E.a)(i,2),A=p[0],j=p[1],S=Object(n.useState)({}),v=Object(E.a)(S,2),C=v[0],w=v[1],D=Object(n.useState)(0),M=Object(E.a)(D,2),V=M[0],y=M[1],I=Object(n.useState)([]),k=Object(E.a)(I,2),_=k[0],P=k[1],K=Object(n.useState)({}),W=Object(E.a)(K,2),F=W[0],Q=W[1],q=Object(n.useState)(""),z=Object(E.a)(q,2),G=z[0],L=z[1],Y=a?parseInt(a):1;Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:T.F}),H()},[a,s]);var H=function(e){h.a.getPackage({id:t}).then(function(e){e.result===T.B?(Q(e.data),L(e.data.releasedDate)):w({show:!0,color:T.a,message:e.message})}).catch(function(e){w({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),h.a.result({packageId:t,page:a}).then(function(e){e.result===T.B?(y(e.pageCount),P(e.data),w(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},C,{show:!1}))):w({show:!0,color:T.a,message:e.message}),j(!1)}).catch(function(e){w({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),j(!1)})},J=function(e){m.push("".concat(u.a.vote.result,"/").concat(t,"/").concat(e,"/").concat(o))};return c.a.createElement(n.Fragment,null,c.a.createElement(g.Helmet,null,c.a.createElement("title",null,s("VOTE.RESULT.RESULT")," - ",s("SITE_NAME"))),c.a.createElement(r.e,null,c.a.createElement(r.f,null,s("NAVBAR.VOTE.VOTE")),c.a.createElement(r.f,null,c.a.createElement(O.b,{to:"".concat(u.a.vote.packages,"/").concat(o||1)},s("NAVBAR.VOTE.PACKAGES"))),c.a.createElement(r.f,{active:!0},s("VOTE.RESULT.RESULT"))),!!A&&c.a.createElement(b.a,null),!A&&c.a.createElement(r.N,null,c.a.createElement(r.j,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},s("VOTE.RESULT.RESULT")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("VOTE.PACKAGE"),": "),F.name)),c.a.createElement(r.j,{md:12},c.a.createElement(N.a,{in:C.show,classNames:"fade-transition",timeout:T.F,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:C.color,dismiss:!0,onClosed:function(){return w({})}},C.message))),c.a.createElement(r.j,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(R.a,{circle:!0,current:Y,pageCount:V,width:10,onChange:J}))),c.a.createElement(r.j,{md:12,className:"text-left my-3"},c.a.createElement("div",{className:"full-width"},F.endDate>=F.today&&c.a.createElement(r.g,{size:"sm",color:"primary",disabled:!0},s("COMMON.BUTTON.NOT_FINISHED")),F.endDate<F.today&&c.a.createElement(r.g,{size:"sm",color:G.length?"danger":"primary",onClick:function(e){h.a.publish({id:t,page:a,release:!G.length}).then(function(e){e.result===T.B?L(e.data.releasedDate):w({show:!0,color:T.a,message:e.message})}).catch(function(e){w({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})})}},G.length?s("COMMON.BUTTON.UNPUBLISH"):s("COMMON.BUTTON.PUBLISH")),c.a.createElement(r.g,{size:"sm",color:"warning",onClick:function(e){m.goBack()}},s("COMMON.BUTTON.BACK")))),c.a.createElement(r.j,{md:12},c.a.createElement("div",{className:"survey-card z-depth-1"},c.a.createElement(r.T,{vertical:!0,className:"text-left"},_.map(function(e,t){return c.a.createElement(r.S,{key:t,className:"completed"},c.a.createElement("a",null,c.a.createElement("span",{className:"circle"},e.index)),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"step-content lighten-4 white-text"},c.a.createElement("h6",{className:"mb-0"},e.question)),c.a.createElement("div",{className:"step-content mt-3 progress-group"},c.a.createElement(U,{data:e}))))})))),c.a.createElement(r.j,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(R.a,{circle:!0,current:Y,pageCount:V,width:10,onChange:J})))))};a(526),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(o.a,null),c.a.createElement(r.l,{className:"section"},c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"".concat(u.a.vote.result,"/:packageId/:page?/:page2?"),exact:!0,component:P}),c.a.createElement(l.b,{path:"".concat(u.a.vote.addAnswer,"/:questionId/:packageId/:page?/:page2?/:page3?/:id?"),exact:!0,component:_}),c.a.createElement(l.b,{path:"".concat(u.a.vote.answers,"/:questionId/:packageId/:page?/:page2?/:page3?"),exact:!0,component:k}),c.a.createElement(l.b,{path:"".concat(u.a.vote.addQuestion,"/:packageId/:page?/:page2?/:id?"),exact:!0,component:I}),c.a.createElement(l.b,{path:"".concat(u.a.vote.questions,"/:packageId/:page?/:page2?"),exact:!0,component:y}),c.a.createElement(l.b,{path:"".concat(u.a.vote.addPackage,"/:page?/:id?"),exact:!0,component:V}),c.a.createElement(l.b,{path:"".concat(u.a.vote.packages,"/:page?"),exact:!0,component:A}),c.a.createElement(l.b,{component:i.a}))),c.a.createElement(s.a,null),c.a.createElement(m.a,null))}}}]);