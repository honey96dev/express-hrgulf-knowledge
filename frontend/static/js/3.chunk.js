(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{372:function(e,t,a){},373:function(e,t,a){},374:function(e,t,a){},376:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(34),r=a(8),s=a(117),m=a(151),i=a(366),u=a.n(i),o=a(367),d=a(69),E=a(37),O=a(31),N=a(106),b=a(59),A=a(57),f=a(50),p=a(70),g=a(53),I=function(e){return new Promise(function(t,a){Object(A.a)(f.d,p.a.auth.signIn,e).then(function(e){e.result===g.r&&Object(A.c)({Authorization:"Bearer ".concat(e.data.token)}),t(e)},function(e){a(e)})})},T=function(e){return new Promise(function(t,a){Object(A.a)(f.d,p.a.auth.signUp,e).then(function(e){t(e)},function(e){a(e)})})},v=function(e){return{type:b.b,payload:e}},j=function(e){return{type:b.c,payload:e}},h=function(e){return{type:b.a,payload:e}},M=function(e){return{type:b.b,payload:e}},R=function(e){return{type:b.c,payload:e}},U=function(e){return{type:b.a,payload:e}},S=a(96),D=a(371),H=a.n(D),y=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},C=function(e){return e.length<=g.u&&/^[a-zA-Z_][0-9a-zA-Z_.-]+$/.test(String(e).toLowerCase())},L=function(e){var t=H.a.PhoneNumberUtil.getInstance();try{var a=t.parseAndKeepRawInput(e);return t.isValidNumber(a)}catch(n){return!1}},w=(a(372),a(375)),x=function(e){Object(N.c)(function(e){return e.auth});var t=Object(N.b)(),a=Object(E.b)().t,c=Object(n.useState)({}),s=Object(d.a)(c,2),m=s[0],i=s[1],b=Object(n.useState)(!1),A=Object(d.a)(b,2),f=A[0],p=A[1],T=Object(n.useState)({}),M=Object(d.a)(T,2),R=M[0],U=M[1],D=Object(n.useState)(g.v?g.f:""),H=Object(d.a)(D,2),C=H[0],L=H[1],x=Object(n.useState)(g.v?g.j:""),V=Object(d.a)(x,2),_=V[0],k=V[1];Object(n.useEffect)(function(){});var P=function(){var e=Object(o.a)(u.a.mark(function e(n){var l,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,t(v(l={email:C,password:_})),p(!0),e.next=7,I(l);case 7:c=e.sent,p(!1),c.result===g.r?t(j(c.data)):(t(h(c.message)),U({show:!0,color:g.a,message:c.message})),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(1),p(!1),t(h(g.t)),U({show:!0,color:g.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 17:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(r.d,null,l.a.createElement(r.e,{className:"mx-md-4 mx-sm-1"},l.a.createElement("form",{onSubmit:P},l.a.createElement("div",{className:"text-center"},l.a.createElement("h3",{className:"dark-grey-text mb-5"},l.a.createElement("strong",null,a("AUTH.SIGN_IN")))),l.a.createElement("div",{className:"grey-text"},l.a.createElement(r.p,{id:"email",name:"name",type:"email",label:a("AUTH.EMAIL"),background:!0,value:C,getValue:L,onBlur:function(){return i(Object.assign({},m,{email:!0}))}},m.email&&!y(C)&&l.a.createElement("div",{className:"invalid-field"},0===C.length?a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.EMAIL")}):y(C)?"":a("COMMON.VALIDATION.INVALID",{field:a("AUTH.EMAIL")}))),l.a.createElement(r.p,{id:"password",name:"password",label:a("AUTH.PASSWORD"),type:"password",background:!0,containerClass:"mb-0",value:_,getValue:k,onBlur:function(){return i(Object.assign({},m,{password:!0}))}},m.password&&_.length<g.p&&l.a.createElement("div",{className:"invalid-field"},0===_.length?a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.PASSWORD")}):a("COMMON.VALIDATION.MIN_LENGTH",{field:a("AUTH.PASSWORD"),length:g.p})))),l.a.createElement("p",{className:"font-small blue-text d-flex justify-content-end pb-3"},l.a.createElement("a",{className:"blue-text ml-1"},a("AUTH.FORGOT_PASSWORD"))),l.a.createElement(w.a,{in:R.show,classNames:"fade-transition",timeout:g.s,unmountOnExit:!0,appear:!0},l.a.createElement(r.b,{color:R.color,dismiss:!0,onClosed:function(){return U({})}},R.message)),l.a.createElement("div",{className:"text-center mb-3 mx-5"},l.a.createElement(r.c,{type:"submit",color:"indigo",rounded:!0,className:"full-width z-depth-1a",disabled:f||!y(C)||_.length<g.p},!f&&l.a.createElement(r.o,{icon:"sign-in-alt"}),!!f&&l.a.createElement("div",{className:"spinner-grow spinner-grow-sm",role:"status"}),a("AUTH.SIGN_IN"))))),l.a.createElement(r.r,{className:"mx-5 pt-3 mb-1"},l.a.createElement("p",{className:"font-small grey-text d-flex justify-content-end"},a("AUTH.NOT_REGISTERED"),l.a.createElement(O.b,{to:S.a.auth.signUp,className:"blue-text ml-1"},a("AUTH.SIGN_UP")))))},V=(a(373),function(e){Object(N.c)(function(e){return e.auth});var t=Object(N.b)(),a=Object(E.b)().t,c=Object(n.useState)({}),s=Object(d.a)(c,2),m=s[0],i=s[1],b=Object(n.useState)(!1),A=Object(d.a)(b,2),f=A[0],p=(A[1],Object(n.useState)({})),I=Object(d.a)(p,2),v=I[0],j=I[1],h=Object(n.useState)(g.v?g.f:""),D=Object(d.a)(h,2),H=D[0],x=D[1],V=Object(n.useState)(g.v?g.m:""),_=Object(d.a)(V,2),k=_[0],P=_[1],B=Object(n.useState)(g.v?g.g:""),G=Object(d.a)(B,2),Q=G[0],W=G[1],z=Object(n.useState)(g.v?g.i:""),F=Object(d.a)(z,2),Y=F[0],J=F[1],Z=Object(n.useState)(g.v?g.o:""),q=Object(d.a)(Z,2),K=q[0],$=q[1],X=Object(n.useState)(g.v?new Date:""),ee=Object(d.a)(X,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(g.v?g.h:""),le=Object(d.a)(ne,2),ce=le[0],re=le[1],se=Object(n.useState)(g.v?g.l:""),me=Object(d.a)(se,2),ie=me[0],ue=me[1],oe=Object(n.useState)(g.v?g.e:""),de=Object(d.a)(oe,2),Ee=de[0],Oe=de[1],Ne=Object(n.useState)(g.v?g.d:""),be=Object(d.a)(Ne,2),Ae=be[0],fe=be[1],pe=Object(n.useState)(g.v?g.k:""),ge=Object(d.a)(pe,2),Ie=ge[0],Te=ge[1],ve=Object(n.useState)(g.v?g.j:""),je=Object(d.a)(ve,2),he=je[0],Me=je[1],Re=Object(n.useState)(g.v?g.j:""),Ue=Object(d.a)(Re,2),Se=Ue[0],De=Ue[1],He=Object(n.useState)(),ye=Object(d.a)(He,2),Ce=ye[0],Le=ye[1];Object(n.useEffect)(function(){Le([{text:a("COMMON.GENDER.MALE"),value:g.o},{text:a("COMMON.GENDER.FEMALE"),value:g.n}]),$(g.o)},[e,a]);var we=function(){var e=Object(o.a)(u.a.mark(function e(n){var l,c,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,l=te.toISOString().substr(0,10),t(M(c={email:H,username:k,firstName:Q,lastName:Y,gender:K,birthday:l,jobTitle:ce,sector:ie,company:Ee,city:Ae,phone:Ie,password:he})),e.next=7,T(c);case 7:(r=e.sent).result===g.r?t(R(r.data)):t(U(r.message)),j({show:!0,color:r.result,message:r.message}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),t(U(g.t)),j({show:!0,color:g.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 16:case"end":return e.stop()}},e,null,[[1,12]])}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(r.d,null,l.a.createElement(r.e,{className:"mx-md-4 mx-sm-1"},l.a.createElement("form",{onSubmit:we},l.a.createElement("div",{className:"text-center"},l.a.createElement("h3",{className:"dark-grey-text mb-3 h1-responsive"},l.a.createElement("strong",null,a("AUTH.SIGN_UP")))),l.a.createElement("div",{className:"grey-text"},l.a.createElement(r.A,null,l.a.createElement(r.f,{md:6},l.a.createElement(r.p,{id:"email",name:"email",type:"email",label:a("AUTH.EMAIL"),background:!0,containerClass:"mb-0",value:H,getValue:x,onBlur:function(){return i(Object.assign({},m,{email:!0}))}},m.email&&!y(H)&&l.a.createElement("div",{className:"invalid-field"},0===H.length?a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.EMAIL")}):y(H)?"":a("COMMON.VALIDATION.INVALID",{field:a("AUTH.EMAIL")})))),l.a.createElement(r.f,{md:6},l.a.createElement(r.p,{id:"username",name:"username",type:"text",label:a("AUTH.USERNAME"),background:!0,containerClass:"mb-0",value:k,getValue:P,onBlur:function(){return i(Object.assign({},m,{username:!0}))}},m.username&&!C(k)&&l.a.createElement("div",{className:"invalid-field"},0===k.length?a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.USERNAME")}):k.length>g.u?a("COMMON.VALIDATION.MAX_LENGTH",{field:a("AUTH.USERNAME"),length:g.u}):C(k)?"":a("COMMON.VALIDATION.INVALID",{field:a("AUTH.USERNAME")}))))),l.a.createElement(r.A,null,l.a.createElement(r.f,{md:6},l.a.createElement(r.p,{id:"firstName",name:"firstName",type:"text",label:a("AUTH.FIRST_NAME"),background:!0,containerClass:"mt-3 mb-0",value:Q,getValue:W,onBlur:function(){return i(Object.assign({},m,{firstName:!0}))}},m.firstName&&0===Q.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.FIRST_NAME")})))),l.a.createElement(r.f,{md:6},l.a.createElement(r.p,{id:"lastName",name:"lastName",type:"text",label:a("AUTH.LAST_NAME"),background:!0,containerClass:"mt-3 mb-0",value:Y,getValue:J,onBlur:function(){return i(Object.assign({},m,{lastName:!0}))}},m.lastName&&0===Y.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.LAST_NAME")}))))),l.a.createElement(r.A,null,l.a.createElement(r.f,{md:6},l.a.createElement(r.B,{options:Ce,label:a("AUTH.GENDER"),className:"mt-3 mb-0",selected:K,getValue:function(e){return $(e)}}),0===K.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.GENDER")}))),l.a.createElement(r.f,{md:6},l.a.createElement(r.i,{format:g.c,className:"date-picker",value:te,getValue:function(e){return ae(e)}}))),l.a.createElement(r.A,null,l.a.createElement(r.f,{md:6},l.a.createElement(r.p,{id:"jobTitle",name:"jobTitle",type:"text",label:a("AUTH.JOB_TITLE"),background:!0,containerClass:"mt-3 mb-0",value:ce,getValue:re,onBlur:function(){return i(Object.assign({},m,{jobTitle:!0}))}},m.jobTitle&&0===ce.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.JOB_TITLE")})))),l.a.createElement(r.f,{md:6},l.a.createElement(r.p,{id:"sector",name:"sector",type:"text",label:a("AUTH.SECTOR"),background:!0,containerClass:"mt-3 mb-0",value:ie,getValue:ue,onBlur:function(){return i(Object.assign({},m,{sector:!0}))}},m.sector&&0===ie.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.SECTOR")}))))),l.a.createElement(r.A,null,l.a.createElement(r.f,{md:6},l.a.createElement(r.p,{id:"company",name:"company",type:"text",label:a("AUTH.COMPANY"),background:!0,containerClass:"mt-3 mb-0",value:Ee,getValue:Oe,onBlur:function(){return i(Object.assign({},m,{company:!0}))}},m.company&&0===Ee.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.COMPANY")})))),l.a.createElement(r.f,{md:6},l.a.createElement(r.p,{id:"city",name:"city",type:"text",label:a("AUTH.CITY"),background:!0,containerClass:"mt-3 mb-0",value:Ae,getValue:fe,onBlur:function(){return i(Object.assign({},m,{city:!0}))}},m.city&&0===Ae.length&&l.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.CITY")}))))),l.a.createElement(r.A,null,l.a.createElement(r.f,{md:12},l.a.createElement(r.q,{material:!0,type:"text",prepend:l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"input-group-text md-addon"},a("AUTH.PHONE")),l.a.createElement("span",{className:"input-group-text md-addon"},g.q)),containerClassName:"mt-3 mb-4 ltr-force",className:"mt-0 mb-0",value:Ie,getValue:Te,onBlur:function(){return i(Object.assign({},m,{phone:!0}))}},(0===Ie.length||!L(g.q+Ie))&&l.a.createElement("div",{className:"invalid-field"},Ie.length?a("COMMON.VALIDATION.INVALID",{field:a("AUTH.PHONE")}):a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.PHONE")}))))),l.a.createElement(r.A,null,l.a.createElement(r.f,{md:6},l.a.createElement(r.p,{id:"password",name:"password",label:a("AUTH.PASSWORD"),type:"password",background:!0,containerClass:"mt-3",value:he,getValue:Me,onBlur:function(){return i(Object.assign({},m,{password:!0}))}},m.password&&he.length<g.p&&l.a.createElement("div",{className:"invalid-field"},0===he.length?a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.PASSWORD")}):a("COMMON.VALIDATION.MIN_LENGTH",{field:a("AUTH.PASSWORD"),length:g.p})))),l.a.createElement(r.f,{md:6},l.a.createElement(r.p,{id:"password2",name:"password2",label:a("AUTH.PASSWORD2"),type:"password",background:!0,containerClass:"mt-3",value:Se,getValue:De,onBlur:function(){return i(Object.assign({},m,{password2:!0}))}},m.password2&&(Se.length<g.p||Se!==he)&&l.a.createElement("div",{className:"invalid-field"},0===Se.length?a("COMMON.VALIDATION.REQUIRED",{field:a("AUTH.PASSWORD2")}):Se.length<g.p?a("COMMON.VALIDATION.MIN_LENGTH",{field:a("AUTH.PASSWORD2"),length:g.p}):a("COMMON.VALIDATION.NOT_SAME",{field:a("AUTH.PASSWORD")})))))),l.a.createElement(w.a,{in:v.show,classNames:"fade-transition",timeout:g.s,unmountOnExit:!0,appear:!0},l.a.createElement(r.b,{color:v.color,dismiss:!0,onClosed:function(){return j({})}},v.message)),l.a.createElement("div",{className:"text-center mt-4 mb-3 mx-5"},l.a.createElement(r.c,{type:"submit",color:"indigo",rounded:!0,className:"full-width z-depth-1a",disabled:f||!y(H)||!k.length||k.length>g.u||!C(k)||!Q.length||!Y.length||!K.length||!ce.length||!ie.length||!Ee.length||!Ae.length||!Ie.length||!he.length||he.length<g.p||Se!==he||he.length<g.p},!f&&l.a.createElement(r.o,{icon:"user-plus"}),!!f&&l.a.createElement("div",{className:"spinner-grow spinner-grow-sm",role:"status"}),a("AUTH.SIGN_UP"))))),l.a.createElement(r.r,{className:"mx-5 pt-3 mb-1"},l.a.createElement("p",{className:"font-small grey-text d-flex justify-content-end"},a("AUTH.ALREADY_REGISTERED"),l.a.createElement(O.b,{to:S.a.auth.signIn,className:"blue-text ml-1"},a("AUTH.SIGN_IN")))))});a(374),t.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null),l.a.createElement(r.h,null,l.a.createElement(r.A,{className:"section mb-5"},l.a.createElement(r.f,{lg:"3",md:"0"}),l.a.createElement(r.f,{lg:"6"},l.a.createElement(c.c,null,l.a.createElement(c.a,{path:"/auth/sign-in",component:x}),l.a.createElement(c.a,{path:"/auth/sign-up",component:V}))),l.a.createElement(r.f,{lg:"3",md:"0"}))),l.a.createElement(m.a,null))}}}]);