(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{451:function(e,t,a){"use strict";var n=a(458),l=a.n(n),c=a(5);t.a={isEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},isUsername:function(e){return e.length<=c.H&&/^[a-zA-Z_][0-9a-zA-Z_.-]+$/.test(String(e).toLowerCase())},isPhoneNumber:function(e){var t=l.a.PhoneNumberUtil.getInstance();try{var a=t.parseAndKeepRawInput(e);return t.isValidNumber(a)}catch(n){return!1}},isURL:function(e){return e.startsWith("http://")||e.startsWith("https://")}}},531:function(e,t,a){},532:function(e,t,a){},543:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(33),s=a(4),r=a(129),m=a(130),i=a(132),u=a(131),o=a(10),E=a(53),A=a(445),M=a(27),d=a(440),g=a(533),S=a(5),b=(a(451),a(39)),N=a(42),f=a(51),h=function(e){return new Promise(function(t,a){Object(b.a)(N.d,f.a.massEmail.send,e).then(function(e){t(e)},function(e){a(e)})})},I=(a(531),a(31)),O=function(){var e=Object(M.b)().t,t=Object(I.c)(function(e){return e}).auth,a=Object(n.useState)(!1),c=Object(E.a)(a,2),r=c[0],m=c[1],i=Object(n.useState)({}),u=Object(E.a)(i,2),o=u[0],b=u[1],N={name:"".concat(t.user.role),subject:"",message:""};Object(n.useEffect)(function(e){},[e]);return l.a.createElement(n.Fragment,null,l.a.createElement(A.Helmet,null,l.a.createElement("title",null,e("NAVBAR.MASS_EMAIL.MASS_EMAIL")," - ",e("SITE_NAME"))),l.a.createElement(s.d,null,l.a.createElement(s.e,null,e("NAVBAR.MASS_EMAIL.MASS_EMAIL")),l.a.createElement(s.e,{active:!0},e("NAVBAR.MASS_EMAIL.MAIN"))),l.a.createElement(s.M,{className:"mt-5"},l.a.createElement(s.i,{lg:3,md:0}),l.a.createElement(s.i,{lg:6,md:12},l.a.createElement(g.a,{initialValues:N,validate:function(e){var t=e.name,a=e.subject,n=e.message,l={};return t.length||(l.name=S.g),a.length||(l.subject=S.g),n.length||(l.message=S.g),l},onSubmit:function(t,a){return function(t,a){var n=t.name,l=t.subject,c=t.message,s=a.setSubmitting;m(!0),s(!0),h({name:n,subject:l,message:c}).then(function(e){e.result,S.B,b({show:!0,color:e.result,message:e.message}),m(!1),s(!1)}).catch(function(t){b({show:!0,color:S.a,message:e("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),m(!1),s(!1)})}(t,a)}},function(t){var a=t.values,n=t.touched,c=t.errors,m=t.handleChange,i=t.handleBlur,u=t.handleSubmit,E=t.isSubmitting;return l.a.createElement("form",{onSubmit:u},l.a.createElement("div",{className:"grey-text"},l.a.createElement(s.M,null,l.a.createElement(s.i,{md:12},l.a.createElement(s.t,{id:"name",name:"name",type:"text",label:e("MASS_EMAIL.MAIN.NAME"),outline:!0,value:a.name,onChange:m,onBlur:i},n.name&&c.name===S.g&&l.a.createElement("div",{className:"invalid-field"},e("COMMON.VALIDATION.REQUIRED",{field:e("MASS_EMAIL.MAIN.NAME")}))))),l.a.createElement(s.M,null,l.a.createElement(s.i,{md:12},l.a.createElement(s.t,{id:"subject",name:"subject",type:"text",label:e("MASS_EMAIL.MAIN.SUBJECT"),outline:!0,value:a.subject,onChange:m,onBlur:i},n.subject&&c.subject===S.g&&l.a.createElement("div",{className:"invalid-field"},e("COMMON.VALIDATION.REQUIRED",{field:e("MASS_EMAIL.MAIN.SUBJECT")}))))),l.a.createElement(s.M,null,l.a.createElement(s.i,{md:12},l.a.createElement(s.t,{id:"message",name:"message",type:"textarea",rows:S.D,label:e("MASS_EMAIL.MAIN.MESSAGE"),outline:!0,value:a.message,onChange:m,onBlur:i},n.message&&c.message===S.g&&l.a.createElement("div",{className:"invalid-field"},e("COMMON.VALIDATION.REQUIRED",{field:e("MASS_EMAIL.MAIN.MESSAGE")})))))),l.a.createElement(d.a,{in:o.show,classNames:"fade-transition",timeout:S.F,unmountOnExit:!0,appear:!0},l.a.createElement(s.b,{color:o.color,dismiss:!0,onClosed:function(){return b({})}},o.message)),l.a.createElement("div",{className:"text-left mb-3"},l.a.createElement(s.f,{type:"submit",color:"indigo",rounded:!0,className:"z-depth-1a",disabled:r||E||!!c&&!!Object.keys(c).length},e("COMMON.BUTTON.SEND"))))})),l.a.createElement(s.i,{lg:3,md:12})))};a(532),t.default=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(r.a,null),l.a.createElement(s.k,{className:"section"},l.a.createElement(c.d,null,l.a.createElement(c.b,{path:"".concat(o.a.massEmail.main),exact:!0,component:O}),l.a.createElement(c.b,{component:u.a}))),l.a.createElement(m.a,null),l.a.createElement(i.a,null))}}}]);