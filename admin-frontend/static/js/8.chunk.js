(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{446:function(e,t,n){"use strict";var a=n(53),r=n(0),c=n.n(r),o=n(4),l=n(5),i=n(460),s=n(27);t.a=function(e){var t=e.circle,n=e.current,u=e.pageCount,m=e.width,E=e.onChange,f=Object(s.b)().t,d=Object(r.useState)([]),O=Object(a.a)(d,2),h=O[0],b=O[1],p="ltr"===f("DIRECTION")?"left":"right",g="ltr"===f("DIRECTION")?"right":"left";return Object(r.useEffect)(function(e){!m&&(m=i.isMobile?l.o:l.n);var t=Math.ceil(m/2),a=n-t<1?1:n-t,r=n+t-1>u?u:n+t-1;r-a<m&&(1===a&&(r=u<m?u:m),r===u&&(a=u-m+1<1?1:u-m+1));for(var c=[],o=a;o<=r;o++)c.push(o);b(c)},[n,u,m]),c.a.createElement(r.Fragment,null,u>0&&c.a.createElement(o.I,{circle:t},c.a.createElement(o.G,{disabled:1===n,onClick:function(){return E(1)}},c.a.createElement(o.H,{className:"page-link"},c.a.createElement(o.r,{icon:"angle-double-".concat(p)}))),c.a.createElement(o.G,{disabled:1===n,onClick:function(){return E(n-1)}},c.a.createElement(o.H,{className:"page-link"},c.a.createElement(o.r,{icon:"angle-".concat(p)}))),h.map(function(e,t){return c.a.createElement(o.G,{key:e,active:e===n,onClick:function(){return n!==e&&E(e)}},c.a.createElement(o.H,{className:"page-link"},e))}),c.a.createElement(o.G,{disabled:n===u,onClick:function(){return E(n+1)}},c.a.createElement(o.H,{className:"page-link"},c.a.createElement(o.r,{icon:"angle-".concat(g)}))),c.a.createElement(o.G,{disabled:n===u,onClick:function(){return E(u)}},c.a.createElement(o.H,{className:"page-link"},c.a.createElement(o.r,{icon:"angle-double-".concat(g)})))))}},447:function(e,t,n){e.exports=n(450)},448:function(e,t,n){"use strict";function a(e,t,n,a,r,c,o){try{var l=e[c](o),i=l.value}catch(s){return void n(s)}l.done?t(i):Promise.resolve(i).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise(function(r,c){var o=e.apply(t,n);function l(e){a(o,r,c,l,i,"next",e)}function i(e){a(o,r,c,l,i,"throw",e)}l(void 0)})}}n.d(t,"a",function(){return r})},449:function(e,t,n){"use strict";function a(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,"a",function(){return a})},450:function(e,t,n){var a=function(e){"use strict";var t,n=Object.prototype,a=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},c=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function i(e,t,n,a){var r=t&&t.prototype instanceof O?t:O,c=Object.create(r.prototype),o=new D(a||[]);return c._invoke=function(e,t,n){var a=u;return function(r,c){if(a===E)throw new Error("Generator is already running");if(a===f){if("throw"===r)throw c;return T()}for(n.method=r,n.arg=c;;){var o=n.delegate;if(o){var l=j(o,n);if(l){if(l===d)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===u)throw a=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=E;var i=s(e,t,n);if("normal"===i.type){if(a=n.done?f:m,i.arg===d)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(a=f,n.method="throw",n.arg=i.arg)}}}(e,n,o),c}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(a){return{type:"throw",arg:a}}}e.wrap=i;var u="suspendedStart",m="suspendedYield",E="executing",f="completed",d={};function O(){}function h(){}function b(){}var p={};p[c]=function(){return this};var g=Object.getPrototypeOf,v=g&&g(g(C([])));v&&v!==n&&a.call(v,c)&&(p=v);var N=b.prototype=O.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function I(e){var t;this._invoke=function(n,r){function c(){return new Promise(function(t,c){!function t(n,r,c,o){var l=s(e[n],e,r);if("throw"!==l.type){var i=l.arg,u=i.value;return u&&"object"===typeof u&&a.call(u,"__await")?Promise.resolve(u.__await).then(function(e){t("next",e,c,o)},function(e){t("throw",e,c,o)}):Promise.resolve(u).then(function(e){i.value=e,c(i)},function(e){return t("throw",e,c,o)})}o(l.arg)}(n,r,t,c)})}return t=t?t.then(c,c):c()}}function j(e,n){var a=e.iterator[n.method];if(a===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=s(a,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,d;var c=r.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,d):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function C(e){if(e){var n=e[c];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function n(){for(;++r<e.length;)if(a.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:T}}function T(){return{value:t,done:!0}}return h.prototype=N.constructor=b,b.constructor=h,b[l]=h.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(N),e},e.awrap=function(e){return{__await:e}},y(I.prototype),I.prototype[o]=function(){return this},e.AsyncIterator=I,e.async=function(t,n,a,r){var c=new I(i(t,n,a,r));return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},y(N),N[l]="Generator",N[c]=function(){return this},N.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=C,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(w),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(a,r){return l.type="throw",l.arg=e,n.next=a,r&&(n.method="next",n.arg=t),!!r}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],l=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var c=r;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=t&&t<=c.finallyLoc&&(c=null);var o=c?c.completion:{};return o.type=e,o.arg=t,c?(this.method="next",this.next=c.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;w(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,a){return this.delegate={iterator:C(e),resultName:n,nextLoc:a},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=a}catch(r){Function("r","regeneratorRuntime = r")(a)}},451:function(e,t,n){"use strict";var a=n(459),r=n.n(a),c=n(5);t.a={isEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},isUsername:function(e){return e.length<=c.H&&/^[a-zA-Z_][0-9a-zA-Z_.-]+$/.test(String(e).toLowerCase())},isPhoneNumber:function(e){var t=r.a.PhoneNumberUtil.getInstance();try{var n=t.parseAndKeepRawInput(e);return t.isValidNumber(n)}catch(a){return!1}},isURL:function(e){return e.startsWith("http://")||e.startsWith("https://")}}},452:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(27),o=n(135);n(134);t.a=function(e){var t=Object(c.b)().t;return r.a.createElement("div",{className:"loading-page"},r.a.createElement(o.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},456:function(e,t,n){"use strict";var a=n(39),r=n(42),c=n(51);t.a={list:function(e){return new Promise(function(t,n){Object(a.a)(r.d,c.a.video.list,e).then(function(e){t(e)},function(e){n(e)})})},save:function(e){return new Promise(function(t,n){Object(a.a)(r.d,c.a.video.save,e).then(function(e){t(e)},function(e){n(e)})})},delete:function(e){return new Promise(function(t,n){Object(a.a)(r.d,c.a.video.delete,e).then(function(e){t(e)},function(e){n(e)})})},get:function(e){return new Promise(function(t,n){Object(a.a)(r.d,c.a.video.get,e).then(function(e){t(e)},function(e){n(e)})})},count:function(e){return new Promise(function(t,n){Object(a.a)(r.d,c.a.video.count,e).then(function(e){t(e)},function(e){n(e)})})},sections:function(e){return new Promise(function(t,n){Object(a.a)(r.d,c.a.video.sections,e).then(function(e){t(e)},function(e){n(e)})})},saveSection:function(e){return new Promise(function(t,n){Object(a.a)(r.d,c.a.video.saveSection,e).then(function(e){t(e)},function(e){n(e)})})},deleteSection:function(e){return new Promise(function(t,n){Object(a.a)(r.d,c.a.video.deleteSection,e).then(function(e){t(e)},function(e){n(e)})})},getSection:function(e){return new Promise(function(t,n){Object(a.a)(r.d,c.a.video.getSection,e).then(function(e){t(e)},function(e){n(e)})})}}},506:function(e,t,n){},507:function(e,t,n){},508:function(e,t,n){},509:function(e,t,n){},510:function(e,t,n){},511:function(e,t,n){},512:function(e,t,n){},540:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(33),o=n(4),l=n(129),i=n(130),s=n(132),u=n(131),m=n(10),E=n(53),f=n(38),d=n(27),O=n(127),h=n(445),b=n(440),p=n(5),g=(n(506),function(e){var t=e.id,n=e.date,c=e.time,l=(e.author,e.url),i=e.title,s=e.isFile,u=e.detailLabel,m=e.detailLink,E=e.handleDelete,O=Object(d.b)().t,h=Object(a.useRef)();return r.a.createElement(o.M,null,r.a.createElement(o.i,{lg:"5",xl:"4"},!!s&&r.a.createElement(o.Z,{hover:!0,className:"rounded z-depth-1-half mb-lg-0 mb-4",onMouseEnter:function(e){h.current.play()},onMouseLeave:function(e){h.current.pause()}},r.a.createElement("video",{ref:h,className:"video-fluid post-media",loop:!0},r.a.createElement("source",{src:l})),r.a.createElement(f.b,{to:"".concat(m,"/").concat(t)},r.a.createElement(o.u,{overlay:"white-slight"}))),!s&&r.a.createElement(o.Z,{hover:!0,className:"rounded z-depth-1-half mb-lg-0 mb-4"},r.a.createElement("iframe",{className:"video-fluid post-media2",src:function(e){var t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?"//www.youtube.com/embed/".concat(t[2]):e}(l),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}),r.a.createElement(f.b,{to:"".concat(m,"/").concat(t)},r.a.createElement(o.u,{overlay:"white-slight"})))),r.a.createElement(o.i,{lg:"7",xl:"8"},r.a.createElement("h3",{className:"font-weight-bold mb-3 p-0"},r.a.createElement(f.b,{to:"".concat(m,"/").concat(t)},r.a.createElement("strong",null,i))),r.a.createElement("div",{className:"infor-section"},r.a.createElement("p",{className:"mr-2"},r.a.createElement("span",{className:"mr-2"},r.a.createElement(o.r,{icon:"calendar-alt"})),n),r.a.createElement("p",{className:"mr-2"},c)),r.a.createElement("div",null,r.a.createElement(f.b,{to:"".concat(m,"/").concat(t)},r.a.createElement(o.f,{size:"sm",rounded:!0,color:"indigo"},u)),r.a.createElement(o.f,{size:"sm",rounded:!0,color:"danger",onClick:function(e){return!!E&&E(t,i)}},O("COMMON.BUTTON.DELETE")))))}),v=function(e){var t=e.items,n=e.detailLabel,c=e.detailLink,o=e.handleDelete,l=t.length-1;return r.a.createElement("div",{className:"text-left mt-3"},t.map(function(e,t){return r.a.createElement(a.Fragment,{key:e.id},r.a.createElement(g,{id:e.id,date:e.date,time:e.time,author:"".concat(e.firstName," ").concat(e.lastName),url:e.url,title:e.title,isFile:e.isFile,description:e.description,detailLabel:n,detailLink:c,handleDelete:o}),t<l&&r.a.createElement("hr",{className:"my-5"}))}))},N=n(128),y=n(452),I=n(446),j=n(456),S=(n(507),n(133)),w=(n(508),function(e){var t=e.sections,n=e.initChecked,c=e.onUpdate,l=Object(d.b)().t,i=Object(a.useState)({}),s=Object(E.a)(i,2),u=s[0],m=s[1];Object(a.useEffect)(function(e){if(n instanceof Array){var t={},a=!0,r=!1,c=void 0;try{for(var o,l=n[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var i=o.value;t=Object.assign({},t,Object(S.a)({},i,!0))}}catch(s){r=!0,c=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}m(t)}},[n]);return r.a.createElement(a.Fragment,null,r.a.createElement("h4",null,l("NAVBAR.VIDEO.SECTIONS")),t.map(function(e,t){return r.a.createElement("div",{key:t,className:"my-2"},r.a.createElement(o.t,{onClick:function(t){return function(e){m(e);var t=[];Object.keys(e).map(function(n){e[n]&&t.push(n)}),c&&c(t)}(Object.assign({},u,Object(S.a)({},e.id,!u[e.id])))},checked:u[e.id]||!1,label:e.section,type:"checkbox",filled:!0,id:"checkbox".concat(e.id)}))}))}),D=function(){var e=Object(c.h)().page,t=Object(d.b)().t,n=Object(c.g)(),l=Object(a.useState)(!0),i=Object(E.a)(l,2),s=i[0],u=i[1],g=Object(a.useState)({}),S=Object(E.a)(g,2),D=S[0],C=S[1],T=Object(a.useState)({}),R=Object(E.a)(T,2),M=R[0],x=R[1],V=Object(a.useState)([]),A=Object(E.a)(V,2),L=A[0],k=A[1],_=Object(a.useState)([]),F=Object(E.a)(_,2),B=F[0],U=F[1],P=Object(a.useState)(0),z=Object(E.a)(P,2),G=z[0],W=z[1],K=Object(a.useState)([]),H=Object(E.a)(K,2),Y=H[0],Z=H[1],Q=e?parseInt(e):1;Object(a.useEffect)(function(n){O.animateScroll.scrollToTop({duration:p.F}),j.a.list({page:e,sections:B}).then(function(e){e.result===p.B?(W(e.pageCount),Z(e.data)):C({show:!0,color:p.a,message:e.message}),u(!1)}).catch(function(e){C({show:!0,color:p.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),u(!1)}),j.a.sections({}).then(function(e){e.result===p.B?k(e.data):k([])}).catch(function(e){k([])})},[e,t,B]);var J=function(e){x(Object.assign({},M,{show:!M.show}))},$=function(e){n.push("".concat(m.a.posts.all,"/").concat(e))};return r.a.createElement(a.Fragment,null,r.a.createElement(h.Helmet,null,r.a.createElement("title",null,t("NAVBAR.VIDEO.VIDEO")," - ",t("SITE_NAME"))),r.a.createElement(o.d,null,r.a.createElement(o.e,{active:!0},t("NAVBAR.VIDEO.VIDEO"))),!!s&&r.a.createElement(N.a,null),r.a.createElement(o.M,null,r.a.createElement(o.i,{md:12},r.a.createElement(b.a,{in:D.show,classNames:"fade-transition",timeout:p.F,unmountOnExit:!0,appear:!0},r.a.createElement(o.b,{color:D.color,dismiss:!0,onClosed:function(){return C({})}},D.message))),r.a.createElement(o.i,{md:9,className:"order-1 order-md-0"},!s&&!Y.length&&r.a.createElement(y.a,null),!s&&!!Y.length&&r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement(I.a,{circle:!0,current:Q,pageCount:G,onChange:$})),r.a.createElement("div",{className:"full-width text-left"},r.a.createElement(f.b,{to:m.a.video.add},r.a.createElement(o.f,{size:"sm",color:"primary"},t("NAVBAR.VIDEO.ADD")))),r.a.createElement(v,{items:Y,detailLabel:t("COMMON.BUTTON.MODIFY"),detailLink:m.a.video.add,handleDelete:function(e,n){x(Object.assign({},M,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:n}),deleteId:e}))}}),r.a.createElement("div",{className:"mt-5 text-center"},r.a.createElement(I.a,{circle:!0,current:Q,pageCount:G,onChange:$})))),r.a.createElement(o.i,{md:3,className:"order-0 order-md-1"},r.a.createElement("div",{className:"section-list text-left"},r.a.createElement(w,{sections:L,onUpdate:U})))),r.a.createElement(o.v,{isOpen:!!M.show,toggle:J,centered:!0},r.a.createElement(o.y,{toggle:J},M.title),r.a.createElement(o.w,{className:"text-left"},M.message),r.a.createElement(o.x,null,r.a.createElement(o.f,{type:"button",color:"danger",onClick:function(n){j.a.delete({id:M.deleteId,page:e}).then(function(e){e.result===p.B?(W(e.pageCount),Z(e.data)):(C({show:!0,color:p.a,message:e.message}),O.animateScroll.scrollToTop({duration:p.F})),u(!1),J()}).catch(function(e){C({show:!0,color:p.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),O.animateScroll.scrollToTop({duration:p.F}),u(!1),J()})}},t("COMMON.BUTTON.DELETE")),r.a.createElement(o.f,{type:"button",color:"secondary",onClick:J},t("COMMON.BUTTON.CANCEL")))))},C=n(447),T=n.n(C),R=n(448),M=n(449),x=n(31),V=n(451),A=(n(509),function(e){Object(M.a)(e);var t=Object(c.h)().id,n=Object(d.b)().t,l=Object(c.g)(),i=Object(x.c)(function(e){return e}).auth,s=Object(a.useState)(!0),u=Object(E.a)(s,2),g=u[0],v=u[1],y=Object(a.useState)({}),I=Object(E.a)(y,2),S=I[0],D=I[1],C=Object(a.useState)({}),A=Object(E.a)(C,2),L=(A[0],A[1],Object(a.useState)({})),k=Object(E.a)(L,2),_=k[0],F=k[1],B=Object(a.useState)([]),U=Object(E.a)(B,2),P=U[0],z=U[1],G=Object(a.useState)(),W=Object(E.a)(G,2),K=W[0],H=W[1],Y=Object(a.useState)(""),Z=Object(E.a)(Y,2),Q=Z[0],J=Z[1],$=Object(a.useState)(""),q=Object(E.a)($,2),X=q[0],ee=q[1],te=Object(a.useState)(!1),ne=Object(E.a)(te,2),ae=ne[0],re=ne[1],ce=Object(a.useState)([]),oe=Object(E.a)(ce,2),le=oe[0],ie=oe[1];Object(a.useEffect)(function(e){O.animateScroll.scrollToTop({duration:p.F}),H(t),!t&&v(!1),!t&&H(void 0),!t&&J(""),!t&&ee(""),!t&&re(!1),!t&&ie([]),t&&j.a.get({id:t}).then(function(e){e.result===p.B?(J(e.data.title),ee(e.data.url),re(e.data.isFile),ie(e.data.sectionIds.split(","))):D({show:!0,color:p.a,message:e.message}),v(!1)}).catch(function(e){D({show:!0,color:p.a,message:n("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),v(!1)}),j.a.sections({}).then(function(e){e.result===p.B?z(e.data):z([])}).catch(function(e){z([])})},[t]);var se=function(){var e=Object(R.a)(T.a.mark(function e(t){var a;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.a.save({id:K,userId:i.user.id,title:Q,url:X,isFile:ae,sectionIds:le.join(",")});case 4:a=e.sent,!K&&H(a.data.insertId),D({show:!0,color:a.result,message:a.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),D({show:!0,color:p.a,message:n("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(h.Helmet,null,r.a.createElement("title",null,n(K?"VIDEO.ADD.MODIFY_VIDEO":"VIDEO.ADD.ADD_VIDEO")," - ",n("SITE_NAME"))),r.a.createElement(o.d,null,r.a.createElement(o.e,null,r.a.createElement(f.b,{to:m.a.video.all},n("NAVBAR.VIDEO.VIDEO"))),r.a.createElement(o.e,{active:!0},n(K?"VIDEO.ADD.MODIFY_VIDEO":"VIDEO.ADD.ADD_VIDEO"))),!!g&&r.a.createElement(N.a,null),!g&&r.a.createElement(o.g,null,r.a.createElement(o.h,{className:"mx-md-4 mx-sm-1 text-left"},r.a.createElement("form",{onSubmit:se},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},r.a.createElement("strong",null,n(K?"VIDEO.ADD.MODIFY_VIDEO":"VIDEO.ADD.ADD_VIDEO")))),r.a.createElement(o.M,null,r.a.createElement(o.i,{md:8},r.a.createElement(o.t,{label:n("VIDEO.TITLE"),outline:!0,autoFocus:!0,value:Q,onChange:function(e){return J(e.target.value)},onBlur:function(e){return F(Object.assign({},_,{title:!0}))}},_.title&&0===Q.length&&r.a.createElement("div",{className:"invalid-field"},n("COMMON.VALIDATION.REQUIRED",{field:n("VIDEO.TITLE")}))),r.a.createElement(o.t,{label:n("VIDEO.URL"),outline:!0,value:X,onChange:function(e){return ee(e.target.value)},onBlur:function(e){return F(Object.assign({},_,{url:!0}))}},_.url&&!V.a.isURL(X)&&r.a.createElement("div",{className:"invalid-field"},X.length?n("COMMON.VALIDATION.INVALID",{field:n("VIDEO.URL")}):n("COMMON.VALIDATION.REQUIRED",{field:n("VIDEO.URL")}))),r.a.createElement("div",{className:"my-4"},r.a.createElement(o.t,{label:n("VIDEO.IS_FILE"),type:"checkbox",filled:!0,id:"isFile",checked:ae,onClick:function(e){return re(!ae)}}))),r.a.createElement(o.i,{md:4},r.a.createElement("div",{className:"md-form"},r.a.createElement(w,{sections:P,initChecked:le,onUpdate:function(e){ie(e)}})))),r.a.createElement(b.a,{in:S.show,classNames:"fade-transition",timeout:p.F,unmountOnExit:!0,appear:!0},r.a.createElement(o.b,{color:S.color,dismiss:!0,onClosed:function(){return D({})}},S.message)),r.a.createElement(a.Fragment,null,r.a.createElement(o.f,{type:"submit",color:"indigo",size:"sm",disabled:!Q||!Q.length||!X||!V.a.isURL(X)},n(K?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),r.a.createElement(o.f,{type:"button",color:"primary",size:"sm",disabled:!!g,onClick:function(e){D({}),H(void 0),J(""),ee(""),re(!1),ie([]),F({}),l.push(m.a.video.add)}},n("COMMON.BUTTON.NEW")),r.a.createElement(o.f,{flat:!0,size:"sm",onClick:function(e){l.goBack()}},n("COMMON.BUTTON.BACK")))))))}),L=(n(510),function(){var e=Object(c.h)().page,t=Object(d.b)().t,n=Object(c.g)(),l=Object(a.useState)(!0),i=Object(E.a)(l,2),s=i[0],u=i[1],g=Object(a.useState)({}),v=Object(E.a)(g,2),y=v[0],S=v[1],w=Object(a.useState)({}),D=Object(E.a)(w,2),C=D[0],T=D[1],R=Object(a.useState)(0),M=Object(E.a)(R,2),x=M[0],V=M[1],A=Object(a.useState)([]),L=Object(E.a)(A,2),k=L[0],_=L[1],F=e?parseInt(e):1,B=[{label:"#",field:"id",sort:"asc"},{label:t("VIDEO.SECTIONS.SECTION"),field:"section",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(a.useEffect)(function(n){O.animateScroll.scrollToTop({duration:p.F}),j.a.sections({page:e}).then(function(e){if(e.result===p.B){var t=!0,n=!1,a=void 0;try{for(var r,c=e.data[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var o=r.value;o.button=U(o.id,o.number)}}catch(l){n=!0,a=l}finally{try{t||null==c.return||c.return()}finally{if(n)throw a}}V(e.pageCount),_(e.data)}else S({show:!0,color:p.a,message:e.message});u(!1)}).catch(function(e){S({show:!0,color:p.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),u(!1)})},[e,t]);var U=function(e,t){return r.a.createElement(a.Fragment,null,r.a.createElement(f.b,{to:"".concat(m.a.video.addSection,"/").concat(e)},r.a.createElement(o.f,{tag:"a",size:"sm",color:"indigo",className:"mr-2",floating:!0},r.a.createElement(o.r,{icon:"edit"}))),r.a.createElement(o.f,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(n){return G(e,"#"+t)}},r.a.createElement(o.r,{icon:"trash"})))},P=function(e){T(Object.assign({},C,{show:!C.show}))},z=function(e){n.push("".concat(m.a.video.sections,"/").concat(e))},G=function(e,n){T(Object.assign({},C,{show:!0,title:t("COMMON.BUTTON.DELETE"),message:t("COMMON.QUESTION.DELETE",{item:n}),deleteId:e}))};return r.a.createElement(a.Fragment,null,r.a.createElement(h.Helmet,null,r.a.createElement("title",null,t("NAVBAR.VIDEO.SECTIONS")," - ",t("SITE_NAME"))),r.a.createElement(o.d,null,r.a.createElement(o.e,null,t("NAVBAR.VIDEO.VIDEO")),r.a.createElement(o.e,{active:!0},t("NAVBAR.VIDEO.SECTIONS"))),!!s&&r.a.createElement(N.a,null),!s&&r.a.createElement(o.M,null,r.a.createElement(o.i,{md:12},r.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},t("NAVBAR.VIDEO.SECTIONS"))),r.a.createElement(o.i,{md:12},r.a.createElement(b.a,{in:y.show,classNames:"fade-transition",timeout:p.F,unmountOnExit:!0,appear:!0},r.a.createElement(o.b,{color:y.color,dismiss:!0,onClosed:function(){return S({})}},y.message))),!!x&&r.a.createElement(o.i,{md:12,className:"text-center"},r.a.createElement("div",{className:"mt-5"},r.a.createElement(I.a,{circle:!0,current:F,pageCount:x,onChange:z}))),r.a.createElement(o.i,{md:12,className:"text-left mt-3"},r.a.createElement("div",{className:"full-width"},r.a.createElement(f.b,{to:"".concat(m.a.video.addSection)},r.a.createElement(o.f,{size:"sm",color:"primary"},t("VIDEO.SECTIONS.ADD_SECTION"))))),r.a.createElement(o.i,{md:12},r.a.createElement(o.V,{responsive:!0,striped:!0},r.a.createElement(o.X,null,r.a.createElement("tr",{className:"text-left"},B.map(function(e,t){return r.a.createElement("th",{key:t},e.label)}))),r.a.createElement(o.W,null,k.map(function(e,t){return r.a.createElement("tr",{key:t,className:"text-left"},r.a.createElement("td",null,e.number),r.a.createElement("td",null,e.section),r.a.createElement("td",{className:"p-2 edit-col"},e.button))})))),!!x&&r.a.createElement(o.i,{md:12,className:"text-center"},r.a.createElement("div",{className:"mt-5"},r.a.createElement(I.a,{circle:!0,current:F,pageCount:x,onChange:z})))),r.a.createElement(o.v,{isOpen:!!C.show,toggle:P,centered:!0},r.a.createElement(o.y,{toggle:P},C.title),r.a.createElement(o.w,{className:"text-left"},C.message),r.a.createElement(o.x,null,r.a.createElement(o.f,{type:"button",color:"danger",onClick:function(e){j.a.deleteSection({id:C.deleteId,page:F}).then(function(e){if(e.result===p.B){var t=!0,n=!1,a=void 0;try{for(var r,c=e.data[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var o=r.value;o.button=U(o.id,o.number)}}catch(l){n=!0,a=l}finally{try{t||null==c.return||c.return()}finally{if(n)throw a}}V(e.pageCount),_(e.data)}else S({show:!0,color:p.a,message:e.message}),O.animateScroll.scrollToTop({duration:p.F});u(!1),P()}).catch(function(e){S({show:!0,color:p.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),O.animateScroll.scrollToTop({duration:p.F}),u(!1),P()})}},t("COMMON.BUTTON.DELETE")),r.a.createElement(o.f,{type:"button",color:"secondary",onClick:P},t("COMMON.BUTTON.CANCEL")))))}),k=(n(511),function(e){Object(M.a)(e);var t=Object(c.h)(),n=(t.questionId,t.id),l=Object(d.b)().t,i=Object(c.g)(),s=(Object(x.c)(function(e){return e}).auth,Object(a.useState)(!0)),u=Object(E.a)(s,2),g=u[0],v=u[1],y=Object(a.useState)({}),I=Object(E.a)(y,2),S=I[0],w=I[1],D=Object(a.useState)({}),C=Object(E.a)(D,2),V=(C[0],C[1],Object(a.useState)({})),A=Object(E.a)(V,2),L=A[0],k=A[1],_=Object(a.useState)(),F=Object(E.a)(_,2),B=F[0],U=F[1],P=Object(a.useState)(""),z=Object(E.a)(P,2),G=z[0],W=z[1];Object(a.useEffect)(function(e){O.animateScroll.scrollToTop({duration:p.F}),U(n),!n&&v(!1),!n&&U(void 0),!n&&W(""),n&&j.a.getSection({id:n}).then(function(e){e.result===p.B?W(e.data.section):w({show:!0,color:p.a,message:e.message}),v(!1)}).catch(function(e){console.log(e),w({show:!0,color:p.a,message:l("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),v(!1)})},[n]);var K=function(){var e=Object(R.a)(T.a.mark(function e(t){var n;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j.a.saveSection({id:B,section:G});case 4:n=e.sent,!B&&U(n.data.insertId),w({show:!0,color:n.result,message:n.message}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),w({show:!0,color:p.a,message:l("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(h.Helmet,null,r.a.createElement("title",null,l(B?"VIDEO.SECTIONS.EDIT_SECTION":"VIDEO.SECTIONS.ADD_SECTION")," - ",l("SITE_NAME"))),r.a.createElement(o.d,null,r.a.createElement(o.e,null,l("NAVBAR.VIDEO.VIDEO")),r.a.createElement(o.e,null,r.a.createElement(f.b,{to:m.a.video.sections},l("NAVBAR.VIDEO.SECTIONS"))),r.a.createElement(o.e,{active:!0},l(B?"VIDEO.SECTIONS.EDIT_SECTION":"VIDEO.SECTIONS.ADD_SECTION"))),!!g&&r.a.createElement(N.a,null),!g&&r.a.createElement(o.g,null,r.a.createElement(o.h,{className:"mx-md-4 mx-sm-1 text-left"},r.a.createElement("form",{onSubmit:K},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},r.a.createElement("strong",null,l(B?"VIDEO.SECTIONS.EDIT_SECTION":"VIDEO.SECTIONS.ADD_SECTION")))),r.a.createElement(o.M,null,r.a.createElement(o.i,{md:12},r.a.createElement(o.t,{label:l("VIDEO.SECTIONS.SECTION"),outline:!0,autoFocus:!0,value:G,onChange:function(e){return W(e.target.value)},onBlur:function(e){return k(Object.assign({},L,{section:!0}))}},L.section&&0===G.length&&r.a.createElement("div",{className:"invalid-field"},l("COMMON.VALIDATION.REQUIRED",{field:l("VIDEO.SECTIONS.SECTION")}))))),r.a.createElement(b.a,{in:S.show,classNames:"fade-transition",timeout:p.F,unmountOnExit:!0,appear:!0},r.a.createElement(o.b,{color:S.color,dismiss:!0,onClosed:function(){return w({})}},S.message)),r.a.createElement(a.Fragment,null,r.a.createElement(o.f,{type:"submit",color:"indigo",size:"sm",disabled:!G||!G.length},l(B?"COMMON.BUTTON.MODIFY":"COMMON.BUTTON.ADD")),r.a.createElement(o.f,{type:"button",color:"primary",size:"sm",disabled:!!g,onClick:function(e){w({}),U(void 0),W(""),k({}),i.push(m.a.video.addSection)}},l("COMMON.BUTTON.NEW")),r.a.createElement(o.f,{flat:!0,size:"sm",onClick:function(e){i.goBack()}},l("COMMON.BUTTON.BACK")))))))});n(512),t.default=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(o.k,{className:"section"},r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"".concat(m.a.video.addSection,"/:id?"),component:k}),r.a.createElement(c.b,{path:m.a.video.sections,component:L}),r.a.createElement(c.b,{path:"".concat(m.a.video.add,"/:id?"),component:A}),r.a.createElement(c.b,{path:m.a.video.all,exact:!0,component:D}),r.a.createElement(c.b,{path:"".concat(m.a.video.all,"/:page"),exact:!0,component:D}),r.a.createElement(c.b,{component:u.a}))),r.a.createElement(i.a,null),r.a.createElement(s.a,null))}}}]);