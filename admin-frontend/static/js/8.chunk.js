(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{410:function(e,t,a){"use strict";var n=a(66),c=a(0),l=a.n(c),r=a(4),o=a(9),s=a(426),m=a(25);t.a=function(e){var t=e.circle,a=e.current,u=e.pageCount,i=e.width,E=e.onChange,O=Object(m.b)().t,d=Object(c.useState)([]),f=Object(n.a)(d,2),N=f[0],g=f[1],b="ltr"===O("DIRECTION")?"left":"right",h="ltr"===O("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!i&&(i=s.isMobile?o.k:o.j);var t=Math.ceil(i/2),n=a-t<1?1:a-t,c=a+t-1>u?u:a+t-1;c-n<i&&(1===n&&(c=u<i?u:i),c===u&&(n=u-i+1<1?1:u-i+1));for(var l=[],r=n;r<=c;r++)l.push(r);g(l)},[a,u,i]),l.a.createElement(c.Fragment,null,u>0&&l.a.createElement(r.H,{circle:t},l.a.createElement(r.F,{disabled:1===a,onClick:function(){return E(1)}},l.a.createElement(r.G,{className:"page-link"},l.a.createElement(r.q,{icon:"angle-double-".concat(b)}))),l.a.createElement(r.F,{disabled:1===a,onClick:function(){return E(a-1)}},l.a.createElement(r.G,{className:"page-link"},l.a.createElement(r.q,{icon:"angle-".concat(b)}))),N.map(function(e,t){return l.a.createElement(r.F,{key:e,active:e===a,onClick:function(){return a!==e&&E(e)}},l.a.createElement(r.G,{className:"page-link"},e))}),l.a.createElement(r.F,{disabled:a===u,onClick:function(){return E(a+1)}},l.a.createElement(r.G,{className:"page-link"},l.a.createElement(r.q,{icon:"angle-".concat(h)}))),l.a.createElement(r.F,{disabled:a===u,onClick:function(){return E(u)}},l.a.createElement(r.G,{className:"page-link"},l.a.createElement(r.q,{icon:"angle-double-".concat(h)})))))}},411:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(25),r=a(124);a(123);t.a=function(e){var t=Object(l.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(r.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},419:function(e,t,a){"use strict";var n=a(34),c=a(39),l=a(48);t.a={packages:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.packages,e).then(function(e){t(e)},function(e){a(e)})})},savePackage:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.savePackage,e).then(function(e){t(e)},function(e){a(e)})})},deletePackage:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.deletePackage,e).then(function(e){t(e)},function(e){a(e)})})},getPackage:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.getPackage,e).then(function(e){t(e)},function(e){a(e)})})},questions:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.questions,e).then(function(e){t(e)},function(e){a(e)})})},saveQuestion:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.saveQuestion,e).then(function(e){t(e)},function(e){a(e)})})},deleteQuestion:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.deleteQuestion,e).then(function(e){t(e)},function(e){a(e)})})},getQuestion:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.getQuestion,e).then(function(e){t(e)},function(e){a(e)})})},answers:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.answers,e).then(function(e){t(e)},function(e){a(e)})})},saveAnswer:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.saveAnswer,e).then(function(e){t(e)},function(e){a(e)})})},deleteAnswer:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.deleteAnswer,e).then(function(e){t(e)},function(e){a(e)})})},getAnswer:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.getAnswer,e).then(function(e){t(e)},function(e){a(e)})})},result:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.result,e).then(function(e){t(e)},function(e){a(e)})})},publish:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.publish,e).then(function(e){t(e)},function(e){a(e)})})},count:function(e){return new Promise(function(t,a){Object(n.a)(c.d,l.a.vote.count,e).then(function(e){t(e)},function(e){a(e)})})}}},462:function(e,t,a){},592:function(e,t,a){},593:function(e,t,a){},594:function(e,t,a){},595:function(e,t,a){},596:function(e,t,a){},597:function(e,t,a){},598:function(e,t,a){},602:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(37),r=a(4),o=a(121),s=a(119),m=a(122),u=a(120),i=a(10),E=a(66),O=a(32),d=a(25),f=a(117),N=a(409),g=a(404),b=a(118),h=a(411),p=a(410),R=a(419),T=a(9),A=(a(592),function(){var e=Object(l.h)().page,t=Object(d.b)().t,a=Object(l.g)(),o=Object(n.useState)(!0),s=Object(E.a)(o,2),m=s[0],u=s[1],A=Object(n.useState)({}),S=Object(E.a)(A,2),v=S[0],j=S[1],w=Object(n.useState)({}),C=Object(E.a)(w,2),D=C[0],M=C[1],V=Object(n.useState)(0),I=Object(E.a)(V,2),k=I[0],y=I[1],_=Object(n.useState)([]),x=Object(E.a)(_,2),U=x[0],P=x[1],B=e?parseInt(e):1,K=[{label:"#",field:"id",sort:"asc"},{label:t("VOTE.PACKAGE"),field:"question",sort:"asc"},{label:t("VOTE.START_DATE"),field:"startDate",sort:"asc"},{label:t("VOTE.END_DATE"),field:"endDate",sort:"asc"},{label:t("VOTE.RELEASED_DATE"),field:"endDate",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(n.useEffect)(function(a){f.animateScroll.scrollToTop({duration:T.t}),R.a.packages({page:e}).then(function(e){if(e.result===T.p){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=W(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}y(e.pageCount),P(e.data)}else j({show:!0,color:T.a,message:e.message});u(!1)}).catch(function(e){j({show:!0,color:T.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),u(!1)})},[e,t]);var W=function(t,a){return c.a.createElement(n.Fragment,null,c.a.createElement(O.b,{to:"".concat(i.a.vote.addPackage,"/").concat(t,"/").concat(e||1)},c.a.createElement(r.e,{tag:"a",size:"sm",color:"indigo",floating:!0},c.a.createElement(r.q,{icon:"edit"}))),c.a.createElement(O.b,{to:"".concat(i.a.vote.questions,"/").concat(t,"/1/").concat(e||1)},c.a.createElement(r.e,{tag:"a",size:"sm",color:"primary",className:"mx-2",floating:!0},c.a.createElement(r.q,{icon:"list"}))),c.a.createElement(O.b,{to:"".concat(i.a.vote.result,"/").concat(t,"/1/").concat(e||1)},c.a.createElement(r.e,{tag:"a",size:"sm",color:"indigo",className:"mr-2",floating:!0},c.a.createElement(r.q,{icon:"eye"}))),c.a.createElement(r.e,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(e){return F(t,"#"+a)}},c.a.createElement(r.q,{icon:"trash"})))},q=function(e){M(Object.assign({},D,{show:!D.show}))},Q=function(e){a.push("".concat(i.a.vote.packages,"/").concat(e))},F=function(e,a){M(Object.assign({},D,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:a}),deleteId:e}))};return c.a.createElement(n.Fragment,null,c.a.createElement(N.Helmet,null,c.a.createElement("title",null,t("NAVBAR.VOTE.PACKAGES")," - ",t("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,t("NAVBAR.VOTE.VOTE")),c.a.createElement(r.d,{active:!0},t("NAVBAR.VOTE.PACKAGES"))),!!m&&c.a.createElement(b.a,null),!m&&!U.length&&c.a.createElement(h.a,null),!m&&!!U.length&&c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},t("NAVBAR.VOTE.PACKAGES"))),c.a.createElement(r.h,{md:12},c.a.createElement(g.a,{in:v.show,classNames:"fade-transition",timeout:T.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:v.color,dismiss:!0,onClosed:function(){return j({})}},v.message))),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(p.a,{circle:!0,current:B,pageCount:k,onChange:Q}))),c.a.createElement(r.h,{md:12,className:"text-left mt-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(O.b,{to:i.a.vote.addPackage},c.a.createElement(r.e,{size:"sm",color:"primary"},t("NAVBAR.VOTE.ADD_PACKAGE"))))),c.a.createElement(r.h,{md:12},c.a.createElement(r.U,{responsive:!0,striped:!0},c.a.createElement(r.W,null,c.a.createElement("tr",{className:"text-left"},K.map(function(e,t){return c.a.createElement("th",{key:t},e.label)}))),c.a.createElement(r.V,null,U.map(function(e,t){return c.a.createElement("tr",{key:t,className:"text-left"},c.a.createElement("td",null,e.number),c.a.createElement("td",null,e.name),c.a.createElement("td",{className:"date-col"},e.startDate),c.a.createElement("td",{className:"date-col"},e.endDate),c.a.createElement("td",{className:"date-col2"},e.releasedDate),c.a.createElement("td",{className:"p-2 edit-col2"},e.button))})))),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(p.a,{circle:!0,current:B,pageCount:k,onChange:Q})))),c.a.createElement(r.u,{isOpen:!!D.show,toggle:q,centered:!0},c.a.createElement(r.x,{toggle:q},D.title),c.a.createElement(r.v,{className:"text-left"},D.message),c.a.createElement(r.w,null,c.a.createElement(r.e,{type:"button",color:"danger",onClick:function(a){R.a.deletePackage({id:D.deleteId,page:e}).then(function(e){if(e.result===T.p){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=W(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}y(e.pageCount),P(e.data)}else j({show:!0,color:T.a,message:e.message}),f.animateScroll.scrollToTop({duration:T.t});u(!1),q()}).catch(function(e){j({show:!0,color:T.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),f.animateScroll.scrollToTop({duration:T.t}),u(!1),q()})}},t("COMMON.BUTTON.DELETE")),c.a.createElement(r.e,{type:"button",color:"secondary",onClick:q},t("COMMON.BUTTON.CANCEL")))))}),S=a(412),v=a.n(S),j=a(413),w=a(414),C=a(33),D=a(461),M=a.n(D),V=(a(462),function(e){Object(w.a)(e);var t=Object(l.h)(),a=t.id,o=t.page,s=Object(d.b)().t,m=Object(l.g)(),u=Object(C.c)(function(e){return e}).auth,h=Object(n.useState)(!0),p=Object(E.a)(h,2),A=p[0],S=p[1],D=Object(n.useState)({}),V=Object(E.a)(D,2),I=V[0],k=V[1],y=Object(n.useState)({}),_=Object(E.a)(y,2),x=(_[0],_[1],Object(n.useState)({})),U=Object(E.a)(x,2),P=U[0],B=U[1],K=Object(n.useState)(),W=Object(E.a)(K,2),q=W[0],Q=W[1],F=Object(n.useState)(""),L=Object(E.a)(F,2),G=L[0],z=L[1],Y=Object(n.useState)(),H=Object(E.a)(Y,2),J=H[0],X=H[1],Z=Object(n.useState)(),$=Object(E.a)(Z,2),ee=$[0],te=$[1];Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:T.t}),Q(a),!a&&S(!1),!a&&Q(void 0),!a&&z(""),!a&&X(new Date),!a&&te(new Date),a&&R.a.getPackage({id:a}).then(function(e){e.result===T.p?(z(e.data.name),X(e.data.startDate),te(e.data.endDate)):k({show:!0,color:T.a,message:e.message}),S(!1)}).catch(function(e){console.log(e),k({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),S(!1)})},[a]);var ae=function(){var e=Object(j.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,R.a.savePackage({id:q,userId:u.user.id,name:G,startDate:M()(J,"yyyy-mm-dd"),endDate:M()(ee,"yyyy-mm-dd")});case 4:a=e.sent,!q&&Q(a.data.insertId),k({show:!0,color:a.result,message:a.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),k({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(N.Helmet,null,c.a.createElement("title",null,s(q?"VOTE.ADD_PACKAGE.MODIFY_PACKAGE":"VOTE.ADD_PACKAGE.ADD_PACKAGE")," - ",s("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,s("NAVBAR.VOTE.VOTE")),c.a.createElement(r.d,null,c.a.createElement(O.b,{to:"".concat(i.a.vote.packages,"/").concat(o||1)},s("NAVBAR.VOTE.PACKAGES"))),c.a.createElement(r.d,{active:!0},s(q?"VOTE.ADD_PACKAGE.MODIFY_PACKAGE":"VOTE.ADD_PACKAGE.ADD_PACKAGE"))),!!A&&c.a.createElement(b.a,null),c.a.createElement(r.f,null,c.a.createElement(r.g,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:ae},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},c.a.createElement("strong",null,s(q?"VOTE.ADD_PACKAGE.MODIFY_PACKAGE":"VOTE.ADD_PACKAGE.ADD_PACKAGE")))),c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement(r.r,{label:s("VOTE.PACKAGE"),outline:!0,autoFocus:!0,value:G,onChange:function(e){return z(e.target.value)},onBlur:function(e){return B(Object.assign({},P,{name:!0}))}},P.name&&0===G.length&&c.a.createElement("div",{className:"invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("VOTE.PACKAGE")}))))),c.a.createElement(r.L,null,c.a.createElement(r.h,{md:6},c.a.createElement(r.k,{format:T.b,autoOk:!0,className:"date-picker",value:J,getValue:function(e){return X(e)}}),c.a.createElement("label",{className:"date-picker-label"},s("VOTE.START_DATE"))),c.a.createElement(r.h,{md:6},c.a.createElement(r.k,{format:T.b,autoOk:!0,className:"date-picker",value:ee,getValue:function(e){return te(e)}}),c.a.createElement("label",{className:"date-picker-label"},s("VOTE.END_DATE")))),c.a.createElement(g.a,{in:I.show,classNames:"fade-transition",timeout:T.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:I.color,dismiss:!0,onClosed:function(){return k({})}},I.message)),c.a.createElement(n.Fragment,null,c.a.createElement(r.e,{type:"submit",color:"indigo",size:"sm",disabled:!G||!G.length},s(q?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),c.a.createElement(r.e,{flat:!0,size:"sm",onClick:function(e){m.goBack()}},s("COMMON.BUTTON.BACK")))))))}),I=(a(593),function(){var e=Object(l.h)(),t=e.packageId,a=e.page,o=e.page2,s=(e.page3,Object(d.b)().t),m=Object(l.g)(),u=Object(n.useState)(!0),h=Object(E.a)(u,2),A=h[0],S=h[1],v=Object(n.useState)({}),j=Object(E.a)(v,2),w=j[0],C=j[1],D=Object(n.useState)({}),M=Object(E.a)(D,2),V=M[0],I=M[1],k=Object(n.useState)(0),y=Object(E.a)(k,2),_=y[0],x=y[1],U=Object(n.useState)([]),P=Object(E.a)(U,2),B=P[0],K=P[1],W=Object(n.useState)(""),q=Object(E.a)(W,2),Q=q[0],F=q[1],L=a?parseInt(a):1,G=[{label:"#",field:"id",sort:"asc"},{label:s("VOTE.QUESTION"),field:"question",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:T.t}),R.a.getPackage({id:t}).then(function(e){e.result===T.p?F(e.data.name):C({show:!0,color:T.a,message:e.message})}).catch(function(e){C({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),R.a.questions({packageId:t,page:a}).then(function(e){if(e.result===T.p){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.question=r.question.length>T.q?r.question.substring(0,T.q)+"...":r.question,r.button=z(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}x(e.pageCount),K(e.data)}else C({show:!0,color:T.a,message:e.message});S(!1)}).catch(function(e){C({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),S(!1)})},[a,s]);var z=function(e,l){return c.a.createElement(n.Fragment,null,c.a.createElement(O.b,{to:"".concat(i.a.vote.addQuestion,"/").concat(t,"/").concat(e)},c.a.createElement(r.e,{tag:"a",size:"sm",color:"indigo",floating:!0},c.a.createElement(r.q,{icon:"edit"}))),c.a.createElement(O.b,{to:"".concat(i.a.vote.answers,"/").concat(e,"/").concat(t,"/1/").concat(a||1,"/").concat(o||1)},c.a.createElement(r.e,{tag:"a",size:"sm",color:"primary",className:"mx-2",floating:!0},c.a.createElement(r.q,{icon:"comments"}))),c.a.createElement(r.e,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(t){return J(e,"#"+l)}},c.a.createElement(r.q,{icon:"trash"})))},Y=function(e){I(Object.assign({},V,{show:!V.show}))},H=function(e){m.push("".concat(i.a.vote.questions,"/").concat(t,"/").concat(e,"/").concat(o||1))},J=function(e,t){I(Object.assign({},V,{show:!0,title:s("COMMON.BUTTON.DELETE"),message:s("COMMON.QUESTION.DELETE",{item:t}),deleteId:e}))};return c.a.createElement(n.Fragment,null,c.a.createElement(N.Helmet,null,c.a.createElement("title",null,s("NAVBAR.VOTE.QUESTIONS")," - ",s("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,s("NAVBAR.VOTE.VOTE")),c.a.createElement(r.d,null,c.a.createElement(O.b,{to:"".concat(i.a.vote.packages,"/").concat(o||1)},s("NAVBAR.VOTE.PACKAGES"))),c.a.createElement(r.d,{active:!0},s("VOTE.QUESTIONS.QUESTIONS"))),!!A&&c.a.createElement(b.a,null),!A&&c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},s("NAVBAR.VOTE.QUESTIONS")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("VOTE.PACKAGE"),": "),Q)),c.a.createElement(r.h,{md:12},c.a.createElement(g.a,{in:w.show,classNames:"fade-transition",timeout:T.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:w.color,dismiss:!0,onClosed:function(){return C({})}},w.message))),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(p.a,{circle:!0,current:L,pageCount:_,onChange:H}))),c.a.createElement(r.h,{md:12,className:"text-left mt-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(O.b,{to:"".concat(i.a.vote.addQuestion,"/").concat(t)},c.a.createElement(r.e,{size:"sm",color:"primary"},s("NAVBAR.VOTE.ADD_QUESTION"))),c.a.createElement(r.e,{size:"sm",color:"warning",onClick:function(e){m.goBack()}},s("COMMON.BUTTON.BACK")))),c.a.createElement(r.h,{md:12},c.a.createElement(r.U,{responsive:!0,striped:!0},c.a.createElement(r.W,null,c.a.createElement("tr",{className:"text-left"},G.map(function(e,t){return c.a.createElement("th",{key:t},e.label)}))),c.a.createElement(r.V,null,!B.length&&c.a.createElement("tr",null,c.a.createElement("td",{colSpan:5,className:"text-center"},s("COMMON.ERROR.NO_DATA"))),!!B.length&&B.map(function(e,t){return c.a.createElement("tr",{key:t,className:"text-left"},c.a.createElement("td",null,e.number),c.a.createElement("td",null,e.question),c.a.createElement("td",{className:"p-2 edit-col"},e.button))})))),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(p.a,{circle:!0,current:L,pageCount:_,onChange:H})))),c.a.createElement(r.u,{isOpen:!!V.show,toggle:Y,centered:!0},c.a.createElement(r.x,{toggle:Y},V.title),c.a.createElement(r.v,{className:"text-left"},V.message),c.a.createElement(r.w,null,c.a.createElement(r.e,{type:"button",color:"danger",onClick:function(e){R.a.deleteQuestion({id:V.deleteId,packageId:t,page:a}).then(function(e){if(e.result===T.p){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.question=r.question.length>T.q?r.question.substring(0,T.q)+"...":r.question,r.button=z(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}x(e.pageCount),K(e.data)}else C({show:!0,color:T.a,message:e.message}),f.animateScroll.scrollToTop({duration:T.t});S(!1),Y()}).catch(function(e){C({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),f.animateScroll.scrollToTop({duration:T.t}),S(!1),Y()})}},s("COMMON.BUTTON.DELETE")),c.a.createElement(r.e,{type:"button",color:"secondary",onClick:Y},s("COMMON.BUTTON.CANCEL")))))}),k=function(e){Object(w.a)(e);var t=Object(l.h)(),a=t.packageId,o=t.id,s=Object(d.b)().t,m=Object(l.g)(),u=Object(C.c)(function(e){return e}).auth,i=Object(n.useState)(!0),O=Object(E.a)(i,2),h=O[0],p=O[1],A=Object(n.useState)({}),S=Object(E.a)(A,2),D=S[0],M=S[1],V=Object(n.useState)({}),I=Object(E.a)(V,2),k=I[0],y=I[1],_=Object(n.useState)(),x=Object(E.a)(_,2),U=x[0],P=x[1],B=Object(n.useState)(""),K=Object(E.a)(B,2),W=K[0],q=K[1],Q=Object(n.useState)(""),F=Object(E.a)(Q,2),L=F[0],G=F[1];Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:T.t}),P(o),!o&&p(!1),!o&&P(void 0),!o&&G(""),a&&R.a.getPackage({id:a}).then(function(e){e.result===T.p?q(e.data.name):M({show:!0,color:T.a,message:e.message})}).catch(function(e){M({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),o&&R.a.getQuestion({id:o}).then(function(e){e.result===T.p?G(e.data.question):M({show:!0,color:T.a,message:e.message}),p(!1)}).catch(function(e){console.log(e),M({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),p(!1)})},[o]);var z=function(){var e=Object(j.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,R.a.saveQuestion({id:U,userId:u.user.id,packageId:a,question:L});case 4:n=e.sent,!U&&P(n.data.insertId),M({show:!0,color:n.result,message:n.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),M({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(N.Helmet,null,c.a.createElement("title",null,s(U?"VOTE.ADD_QUESTION.MODIFY_QUESTION":"VOTE.ADD_QUESTION.ADD_QUESTION")," - ",s("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,s("NAVBAR.VOTE.VOTE")),c.a.createElement(r.d,null,s("NAVBAR.VOTE.PACKAGES")),c.a.createElement(r.d,null,s("NAVBAR.VOTE.QUESTIONS")),c.a.createElement(r.d,{active:!0},s(U?"VOTE.ADD_QUESTION.MODIFY_QUESTION":"VOTE.ADD_QUESTION.ADD_QUESTION"))),!!h&&c.a.createElement(b.a,null),c.a.createElement(r.f,null,c.a.createElement(r.g,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:z},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},c.a.createElement("strong",null,s(U?"VOTE.ADD_QUESTION.MODIFY_QUESTION":"VOTE.ADD_QUESTION.ADD_QUESTION"))),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("VOTE.PACKAGE"),": "),W)),c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement(r.r,{label:s("VOTE.QUESTION"),type:"textarea",rows:T.r,maxLength:T.f,outline:!0,autoFocus:!0,value:L,onChange:function(e){return G(e.target.value)},onBlur:function(e){return y(Object.assign({},k,{question:!0}))}},k.question&&0===L.length&&c.a.createElement("div",{className:"invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("VOTE.QUESTION")}))))),c.a.createElement(g.a,{in:D.show,classNames:"fade-transition",timeout:T.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:D.color,dismiss:!0,onClosed:function(){return M({})}},D.message)),c.a.createElement(n.Fragment,null,c.a.createElement(r.e,{type:"submit",color:"indigo",size:"sm",disabled:!L||!L.length},s(U?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),c.a.createElement(r.e,{flat:!0,size:"sm",onClick:function(e){m.goBack()}},s("COMMON.BUTTON.BACK")))))))},y=(a(594),function(){var e=Object(l.h)(),t=e.questionId,a=e.packageId,o=e.page,s=e.page2,m=e.page3,u=Object(d.b)().t,h=Object(l.g)(),A=Object(n.useState)(!0),S=Object(E.a)(A,2),v=S[0],j=S[1],w=Object(n.useState)({}),C=Object(E.a)(w,2),D=C[0],M=C[1],V=Object(n.useState)({}),I=Object(E.a)(V,2),k=I[0],y=I[1],_=Object(n.useState)(0),x=Object(E.a)(_,2),U=x[0],P=x[1],B=Object(n.useState)(""),K=Object(E.a)(B,2),W=K[0],q=K[1],Q=Object(n.useState)([]),F=Object(E.a)(Q,2),L=F[0],G=F[1],z=o?parseInt(o):1,Y=[{label:"#",field:"id",sort:"asc"},{label:u("VOTE.ANSWERS.ANSWER"),field:"answer",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:T.t}),R.a.getQuestion({id:t}).then(function(e){e.result===T.p?q(e.data.question):M({show:!0,color:T.a,message:e.message})}).catch(function(e){M({show:!0,color:T.a,message:u("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),R.a.answers({questionId:t,page:z}).then(function(e){if(e.result===T.p){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=H(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}P(e.pageCount),G(e.data)}else M({show:!0,color:T.a,message:e.message});j(!1)}).catch(function(e){M({show:!0,color:T.a,message:u("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),j(!1)})},[o,u]);var H=function(e,a){return c.a.createElement(n.Fragment,null,c.a.createElement(O.b,{to:"".concat(i.a.vote.addAnswer,"/").concat(t,"/").concat(e)},c.a.createElement(r.e,{tag:"a",size:"sm",color:"indigo",className:"mx-2",floating:!0},c.a.createElement(r.q,{icon:"edit"}))),c.a.createElement(r.e,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(t){return Z(e,"#"+a)}},c.a.createElement(r.q,{icon:"trash"})))},J=function(e){y(Object.assign({},k,{show:!k.show}))},X=function(e){h.push("".concat(i.a.vote.answers,"/").concat(t,"/").concat(e,"/").concat(s||1,"/").concat(m||1))},Z=function(e,t){y(Object.assign({},k,{show:!0,title:u("COMMON.BUTTON.DELETE"),message:u("COMMON.QUESTION.DELETE",{item:t}),deleteId:e}))};return c.a.createElement(n.Fragment,null,c.a.createElement(N.Helmet,null,c.a.createElement("title",null,u("VOTE.ANSWERS.ANSWERS")," - ",u("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,u("NAVBAR.VOTE.VOTE")),c.a.createElement(r.d,null,c.a.createElement(O.b,{to:"".concat(i.a.vote.packages,"/").concat(m||1)},u("NAVBAR.VOTE.PACKAGES"))),c.a.createElement(r.d,null,c.a.createElement(O.b,{to:"".concat(i.a.vote.questions,"/").concat(a,"/").concat(s||1,"/").concat(m||1)},u("NAVBAR.VOTE.QUESTIONS"))),c.a.createElement(r.d,{active:!0},u("VOTE.ANSWERS.ANSWERS"))),!!v&&c.a.createElement(b.a,null),!v&&c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},u("VOTE.ANSWERS.ANSWERS")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},u("VOTE.QUESTION"),": "),W)),c.a.createElement(r.h,{md:12},c.a.createElement(g.a,{in:D.show,classNames:"fade-transition",timeout:T.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:D.color,dismiss:!0,onClosed:function(){return M({})}},D.message))),!!U&&c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(p.a,{circle:!0,current:z,pageCount:U,onChange:X}))),c.a.createElement(r.h,{md:12,className:"text-left mt-3"},c.a.createElement("div",{className:"full-width"},c.a.createElement(O.b,{to:"".concat(i.a.vote.addAnswer,"/").concat(t)},c.a.createElement(r.e,{size:"sm",color:"primary"},u("VOTE.ADD_ANSWER.ADD_ANSWER"))),c.a.createElement(r.e,{size:"sm",color:"warning",onClick:function(e){h.goBack()}},u("COMMON.BUTTON.BACK")))),c.a.createElement(r.h,{md:12},c.a.createElement(r.U,{responsive:!0,striped:!0},c.a.createElement(r.W,null,c.a.createElement("tr",{className:"text-left"},Y.map(function(e,t){return c.a.createElement("th",{key:t},e.label)}))),c.a.createElement(r.V,null,L.map(function(e,t){return c.a.createElement("tr",{key:t,className:"text-left"},c.a.createElement("td",null,e.number),c.a.createElement("td",null,e.answer),c.a.createElement("td",{className:"p-2 edit-col"},e.button))})))),!!U&&c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(p.a,{circle:!0,current:z,pageCount:U,onChange:X})))),c.a.createElement(r.u,{isOpen:!!k.show,toggle:J,centered:!0},c.a.createElement(r.x,{toggle:J},k.title),c.a.createElement(r.v,{className:"text-left"},k.message),c.a.createElement(r.w,null,c.a.createElement(r.e,{type:"button",color:"danger",onClick:function(e){R.a.deleteAnswer({id:k.deleteId,page:z}).then(function(e){if(e.result===T.p){var t=!0,a=!1,n=void 0;try{for(var c,l=e.data[Symbol.iterator]();!(t=(c=l.next()).done);t=!0){var r=c.value;r.button=H(r.id,r.number)}}catch(o){a=!0,n=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}P(e.pageCount),G(e.data)}else M({show:!0,color:T.a,message:e.message}),f.animateScroll.scrollToTop({duration:T.t});j(!1),J()}).catch(function(e){M({show:!0,color:T.a,message:u("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),f.animateScroll.scrollToTop({duration:T.t}),j(!1),J()})}},u("COMMON.BUTTON.DELETE")),c.a.createElement(r.e,{type:"button",color:"secondary",onClick:J},u("COMMON.BUTTON.CANCEL")))))}),_=(a(595),function(e){Object(w.a)(e);var t=Object(l.h)(),a=t.questionId,o=t.id,s=Object(d.b)().t,m=Object(l.g)(),u=Object(C.c)(function(e){return e}).auth,h=Object(n.useState)(!0),p=Object(E.a)(h,2),A=p[0],S=p[1],D=Object(n.useState)({}),M=Object(E.a)(D,2),V=M[0],I=M[1],k=Object(n.useState)({}),y=Object(E.a)(k,2),_=(y[0],y[1],Object(n.useState)({})),x=Object(E.a)(_,2),U=x[0],P=x[1],B=Object(n.useState)(),K=Object(E.a)(B,2),W=K[0],q=K[1],Q=Object(n.useState)(""),F=Object(E.a)(Q,2),L=F[0],G=F[1],z=Object(n.useState)(""),Y=Object(E.a)(z,2),H=Y[0],J=Y[1];Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:T.t}),q(o),!o&&S(!1),!o&&q(void 0),!o&&J(""),a&&R.a.getQuestion({id:a}).then(function(e){e.result===T.p?G(e.data.question):I({show:!0,color:T.a,message:e.message})}).catch(function(e){I({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),o&&R.a.getAnswer({id:o}).then(function(e){e.result===T.p?J(e.data.answer):I({show:!0,color:T.a,message:e.message}),S(!1)}).catch(function(e){console.log(e),I({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),S(!1)})},[o]);var X=function(){var e=Object(j.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,R.a.saveAnswer({id:W,userId:u.user.id,questionId:a,answer:H});case 4:n=e.sent,!W&&q(n.data.insertId),I({show:!0,color:n.result,message:n.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),I({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(N.Helmet,null,c.a.createElement("title",null,s(W?"VOTE.ADD_ANSWER.MODIFY_ANSWER":"VOTE.ADD_ANSWER.ADD_ANSWER")," - ",s("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,s("NAVBAR.VOTE.VOTE")),c.a.createElement(r.d,null,c.a.createElement(O.b,{to:i.a.vote.questions},s("NAVBAR.VOTE.QUESTIONS"))),c.a.createElement(r.d,null,s("VOTE.ANSWERS.ANSWERS")),c.a.createElement(r.d,{active:!0},s(W?"VOTE.ADD_ANSWER.MODIFY_ANSWER":"VOTE.ADD_ANSWER.ADD_ANSWER"))),!!A&&c.a.createElement(b.a,null),c.a.createElement(r.f,null,c.a.createElement(r.g,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:X},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},c.a.createElement("strong",null,s(W?"VOTE.ADD_ANSWER.MODIFY_ANSWER":"VOTE.ADD_ANSWER.ADD_ANSWER"))),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("VOTE.QUESTION"),": "),L)),c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement(r.r,{label:s("VOTE.ANSWERS.ANSWER"),outline:!0,autoFocus:!0,value:H,onChange:function(e){return J(e.target.value)},onBlur:function(e){return P(Object.assign({},U,{answer:!0}))}},U.answer&&0===H.length&&c.a.createElement("div",{className:"invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("VOTE.ANSWERS.ANSWER")}))))),c.a.createElement(g.a,{in:V.show,classNames:"fade-transition",timeout:T.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:V.color,dismiss:!0,onClosed:function(){return I({})}},V.message)),c.a.createElement(n.Fragment,null,c.a.createElement(r.e,{type:"submit",color:"indigo",size:"sm",disabled:!H||!H.length},s(W?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),c.a.createElement(r.e,{flat:!0,size:"sm",onClick:function(e){m.goBack()}},s("COMMON.BUTTON.BACK")))))))}),x=a(125),U=(a(596),a(597),function(e){var t=e.data,a=Object(d.b)().t,l=Object(n.useState)(100),o=Object(E.a)(l,2),s=o[0],m=o[1],u=Object(n.useState)({}),i=Object(E.a)(u,2),O=i[0],f=i[1],N="ltr"===a("DIRECTION")?"/":"\\";return Object(n.useEffect)(function(e){var a={},n=!0,c=!1,l=void 0;try{for(var r,o=t.answers[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){var s=r.value;a=Object.assign({},a,Object(x.a)({},s.answer,s.count))}}catch(u){c=!0,l=u}finally{try{n||null==o.return||o.return()}finally{if(c)throw l}}m(t.answersCount),f(a)},[t,a]),c.a.createElement("div",{className:"text-left"},t.answers.map(function(e,t){return c.a.createElement(n.Fragment,{key:t},c.a.createElement("p",{className:"mb-1"},e.answer),c.a.createElement(r.K,{className:"mt-0 mb-3",material:!0,value:(O[e.answer]||0)/s*100,animated:!0,height:"20px"},O[e.answer]," ",N," ",s))}))});function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var B=function(){var e=Object(l.h)(),t=e.packageId,a=e.page,o=e.page2,s=Object(d.b)().t,m=Object(l.g)(),u=(Object(C.c)(function(e){return e}).auth,Object(n.useState)(!0)),h=Object(E.a)(u,2),A=h[0],S=h[1],v=Object(n.useState)({}),j=Object(E.a)(v,2),w=j[0],D=j[1],M=Object(n.useState)(0),V=Object(E.a)(M,2),I=V[0],k=V[1],y=Object(n.useState)([]),_=Object(E.a)(y,2),B=_[0],K=_[1],W=Object(n.useState)({}),q=Object(E.a)(W,2),Q=q[0],F=q[1],L=Object(n.useState)(""),G=Object(E.a)(L,2),z=G[0],Y=G[1],H=a?parseInt(a):1;Object(n.useEffect)(function(e){f.animateScroll.scrollToTop({duration:T.t}),J()},[a,s]);var J=function(e){R.a.getPackage({id:t}).then(function(e){e.result===T.p?(F(e.data),Y(e.data.releasedDate)):D({show:!0,color:T.a,message:e.message})}).catch(function(e){D({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})}),R.a.result({packageId:t,page:a}).then(function(e){e.result===T.p?(k(e.pageCount),K(e.data),D(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},w,{show:!1}))):D({show:!0,color:T.a,message:e.message}),S(!1)}).catch(function(e){D({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),S(!1)})},X=function(e){m.push("".concat(i.a.vote.result,"/").concat(t,"/").concat(e,"/").concat(o))};return c.a.createElement(n.Fragment,null,c.a.createElement(N.Helmet,null,c.a.createElement("title",null,s("VOTE.RESULT.RESULT")," - ",s("SITE_NAME"))),c.a.createElement(r.c,null,c.a.createElement(r.d,null,s("NAVBAR.VOTE.VOTE")),c.a.createElement(r.d,null,c.a.createElement(O.b,{to:"".concat(i.a.vote.packages,"/").concat(o||1)},s("NAVBAR.VOTE.PACKAGES"))),c.a.createElement(r.d,{active:!0},s("VOTE.RESULT.RESULT"))),!!A&&c.a.createElement(b.a,null),!A&&c.a.createElement(r.L,null,c.a.createElement(r.h,{md:12},c.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},s("VOTE.RESULT.RESULT")),c.a.createElement("p",{className:"text-left"},c.a.createElement("span",{className:"font-weight-bold"},s("VOTE.PACKAGE"),": "),Q.name)),c.a.createElement(r.h,{md:12},c.a.createElement(g.a,{in:w.show,classNames:"fade-transition",timeout:T.t,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:w.color,dismiss:!0,onClosed:function(){return D({})}},w.message))),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(p.a,{circle:!0,current:H,pageCount:I,width:10,onChange:X}))),c.a.createElement(r.h,{md:12,className:"text-left my-3"},c.a.createElement("div",{className:"full-width"},Q.endDate>=Q.today&&c.a.createElement(r.e,{size:"sm",color:"primary",disabled:!0},s("COMMON.BUTTON.NOT_FINISHED")),Q.endDate<Q.today&&c.a.createElement(r.e,{size:"sm",color:z.length?"danger":"primary",onClick:function(e){R.a.publish({id:t,page:a,release:!z.length}).then(function(e){e.result===T.p?Y(e.data.releasedDate):D({show:!0,color:T.a,message:e.message})}).catch(function(e){D({show:!0,color:T.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})})}},z.length?s("COMMON.BUTTON.UNPUBLISH"):s("COMMON.BUTTON.PUBLISH")),c.a.createElement(r.e,{size:"sm",color:"warning",onClick:function(e){m.goBack()}},s("COMMON.BUTTON.BACK")))),c.a.createElement(r.h,{md:12},c.a.createElement(r.R,{vertical:!0,className:"text-left"},B.map(function(e,t){return c.a.createElement(r.Q,{key:t,className:"completed"},c.a.createElement("a",null,c.a.createElement("span",{className:"circle"},e.index)),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"step-content grey lighten-4"},c.a.createElement("h6",{className:"mb-0"},e.question)),c.a.createElement("div",{className:"step-content mt-3 progress-group"},c.a.createElement(U,{data:e}))))}))),c.a.createElement(r.h,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(p.a,{circle:!0,current:H,pageCount:I,width:10,onChange:X})))))};a(598),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(o.a,null),c.a.createElement(r.j,{className:"section"},c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"".concat(i.a.vote.result,"/:packageId/:page?/:page2?"),exact:!0,component:B}),c.a.createElement(l.b,{path:"".concat(i.a.vote.addAnswer,"/:questionId/:id?"),exact:!0,component:_}),c.a.createElement(l.b,{path:"".concat(i.a.vote.answers,"/:questionId/:packageId/:page?/:page2?/:page3?"),exact:!0,component:y}),c.a.createElement(l.b,{path:"".concat(i.a.vote.addQuestion,"/:packageId/:id?"),exact:!0,component:k}),c.a.createElement(l.b,{path:"".concat(i.a.vote.questions,"/:packageId/:page?/:page2?"),exact:!0,component:I}),c.a.createElement(l.b,{path:"".concat(i.a.vote.addPackage,"/:id?/:page?"),exact:!0,component:V}),c.a.createElement(l.b,{path:"".concat(i.a.vote.packages,"/:page?"),exact:!0,component:A}),c.a.createElement(l.b,{path:u.a}))),c.a.createElement(s.a,null),c.a.createElement(m.a,null))}}}]);