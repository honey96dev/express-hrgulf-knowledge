(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{455:function(e,t,a){"use strict";var n=a(42),c=a(0),r=a.n(c),l=a(4),i=a(13),o=a(464),s=a(29);t.a=function(e){var t=e.circle,a=e.current,m=e.pageCount,u=e.width,d=e.onChange,E=Object(s.b)().t,f=Object(c.useState)([]),O=Object(n.a)(f,2),b=O[0],p=O[1],h="ltr"===E("DIRECTION")?"left":"right",g="ltr"===E("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!u&&(u=o.isMobile?i.A:i.z);var t=Math.ceil(u/2),n=a-t<1?1:a-t,c=a+t-1>m?m:a+t-1;c-n<u&&(1===n&&(c=m<u?m:u),c===m&&(n=m-u+1<1?1:m-u+1));for(var r=[],l=n;l<=c;l++)r.push(l);p(r)},[a,m,u]),r.a.createElement(c.Fragment,null,m>0&&r.a.createElement(l.L,{circle:t},r.a.createElement(l.J,{disabled:1===a,onClick:function(){return d(1)}},r.a.createElement(l.K,{className:"page-link"},r.a.createElement(l.y,{icon:"angle-double-".concat(h)}))),r.a.createElement(l.J,{disabled:1===a,onClick:function(){return d(a-1)}},r.a.createElement(l.K,{className:"page-link"},r.a.createElement(l.y,{icon:"angle-".concat(h)}))),b.map(function(e,t){return r.a.createElement(l.J,{key:e,active:e===a,onClick:function(){return a!==e&&d(e)}},r.a.createElement(l.K,{className:"page-link"},e))}),r.a.createElement(l.J,{disabled:a===m,onClick:function(){return d(a+1)}},r.a.createElement(l.K,{className:"page-link"},r.a.createElement(l.y,{icon:"angle-".concat(g)}))),r.a.createElement(l.J,{disabled:a===m,onClick:function(){return d(m)}},r.a.createElement(l.K,{className:"page-link"},r.a.createElement(l.y,{icon:"angle-double-".concat(g)})))))}},456:function(e,t,a){"use strict";var n=a(30),c=a(33),r=a(40);a(13);t.a={list:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.list,e).then(function(e){t(e)},function(e){a(e)})})},latest:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.latest,e).then(function(e){t(e)},function(e){a(e)})})},save:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.save,e).then(function(e){t(e)},function(e){a(e)})})},get:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.get,e).then(function(e){t(e)},function(e){a(e)})})},post2Topics:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.post2Topics,e).then(function(e){t(e)},function(e){a(e)})})},commentList:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.commentList,e).then(function(e){t(e)},function(e){a(e)})})},writeComment:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.writeComment,e).then(function(e){t(e)},function(e){a(e)})})},topics:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.topics,e).then(function(e){t(e)},function(e){a(e)})})},magazines:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.magazines,e).then(function(e){t(e)},function(e){a(e)})})},getMagazine:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.getMagazine,e).then(function(e){t(e)},function(e){a(e)})})}}},460:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(29),l=a(130);a(129);t.a=function(e){var t=e.message,a=Object(r.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(l.a,{heading:a("COMMON.ERROR.SORRY"),message:t||a("COMMON.ERROR.NO_DATA")}))}},465:function(e,t,a){"use strict";var n=a(30),c=a(33),r=a(40);t.a={list:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.news.list,e).then(function(e){t(e)},function(e){a(e)})})},latest:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.news.latest,e).then(function(e){t(e)},function(e){a(e)})})},get:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.news.get,e).then(function(e){t(e)},function(e){a(e)})})}}},467:function(e,t,a){"use strict";var n=a(54),c=a(42),r=a(0),l=a.n(r),i=a(4),o=a(29);a(473);t.a=function(e){var t=e.topics,a=e.initChecked,s=e.onUpdate,m=Object(o.b)().t,u=Object(r.useState)({}),d=Object(c.a)(u,2),E=d[0],f=d[1];Object(r.useEffect)(function(e){if(a instanceof Array){var t={},c=!0,r=!1,l=void 0;try{for(var i,o=a[Symbol.iterator]();!(c=(i=o.next()).done);c=!0){var s=i.value;t=Object.assign({},t,Object(n.a)({},s,!0))}}catch(m){r=!0,l=m}finally{try{c||null==o.return||o.return()}finally{if(r)throw l}}f(t)}},[a]);return l.a.createElement(r.Fragment,null,l.a.createElement("h4",null,m("POSTS.TOPICS")),t.map(function(e,t){return l.a.createElement("div",{key:t,className:"my-2"},l.a.createElement(i.A,{onClick:function(t){return function(e){f(e);var t=[];Object.keys(e).map(function(a){e[a]&&t.push(a)}),s&&s(t)}(Object.assign({},E,Object(n.a)({},e.id,!E[e.id])))},checked:E[e.id]||!1,label:e.topic,type:"checkbox",filled:!0,id:"checkbox".concat(e.id)}))}))}},468:function(e,t,a){"use strict";var n=a(42),c=a(0),r=a.n(c),l=a(4),i=a(36),o=a(29),s=a(13),m=(a(475),function(e){var t=e.id,a=e.date,n=e.time,c=(e.author,e.comments,e.media,e.title),o=(e.description,e.detailLabel,e.detailLink);return r.a.createElement(l.P,null,r.a.createElement(l.p,{md:12},r.a.createElement("h5",{className:"mb-3 p-0"},r.a.createElement(i.b,{to:"".concat(o,"/").concat(t)},r.a.createElement("strong",null,c))),r.a.createElement("div",{className:"infor-section"},r.a.createElement("p",{className:"mb-0 mr-2"},r.a.createElement("span",{className:"mr-2"},r.a.createElement(l.y,{icon:"calendar-alt"})),a),r.a.createElement("p",{className:"mb-0 mr-2"},n))))}),u=a(465);t.a=function(e){var t=e.detailLabel,a=e.detailLink,l=Object(o.b)().t,i=Object(c.useState)([]),d=Object(n.a)(i,2),E=d[0],f=d[1],O=(l("DIRECTION"),E.length-1);return Object(c.useEffect)(function(e){u.a.latest({limit:3}).then(function(e){e.result===s.S&&f(e.data)}).catch(function(e){})},[t,a,l]),r.a.createElement("div",{className:"text-left"},r.a.createElement("h5",{className:"mb-3 p-0"},l("NEWS.LATEST_NEWS")),E.map(function(e,n){return r.a.createElement(c.Fragment,{key:e.id},r.a.createElement(m,{id:e.id,date:e.date,time:e.time,author:"".concat(e.firstName," ").concat(e.lastName),title:e.title,description:e.description,detailLabel:t,detailLink:a}),n<O&&r.a.createElement("hr",{className:"my-2"}))}))}},472:function(e,t,a){},473:function(e,t,a){},474:function(e,t,a){},475:function(e,t,a){},476:function(e,t,a){},477:function(e,t,a){"use strict";var n=a(30),c=a(33),r=a(40);t.a={downloadFile:function(e){var t=e.url,a=e.filename,l=e.params;return t.startsWith("http")||(t="".concat(r.a.origin).concat(t)),new Promise(function(e,r){Object(n.a)(c.b,t,l,{Accept:"application/pdf"},{responseType:"blob"}).then(function(t){console.log(t,window.URL);var n=window.URL.createObjectURL(t),c=document.createElement("a");c.setAttribute("href",n),c.setAttribute("download",a),c.style.display="none",document.body.appendChild(c),c.click(),document.body.removeChild(c),e(t)},function(e){r(e)})})}}},478:function(e,t,a){"use strict";var n=a(42),c=a(0),r=a.n(c),l=a(29),i=a(13),o=a(456),s=a(4),m=a(36),u=(a(474),function(e){var t=e.id,a=e.date,n=e.time,c=e.author,i=e.comments,o=(e.media,e.title),u=(e.description,e.detailLabel,e.detailLink);Object(l.b)().t;return r.a.createElement(s.P,null,r.a.createElement(s.p,{md:12},r.a.createElement("h5",{className:"mb-3 p-0"},r.a.createElement(m.b,{to:"".concat(u,"/").concat(t)},r.a.createElement("strong",null,o))),r.a.createElement("div",{className:"infor-section"},r.a.createElement("p",{className:"mb-0 mr-2"},r.a.createElement("span",{className:"mr-2"},r.a.createElement(s.y,{icon:"calendar-alt"})),a),r.a.createElement("p",{className:"mb-0 mr-2"},n)),r.a.createElement("div",{className:"infor-section"},r.a.createElement("p",{className:"mb-0"},r.a.createElement("span",{className:"mr-2"},r.a.createElement(s.y,{icon:"user"})),c)),r.a.createElement("div",{className:"infor-section"},r.a.createElement("p",{className:"mb-0"},r.a.createElement("span",{className:"mr-2"},r.a.createElement(s.y,{icon:"comments"})),i))))});a(457),a(40),t.a=function(e){var t=e.detailLabel,a=e.detailLink,s=Object(l.b)().t,m=Object(c.useState)([]),d=Object(n.a)(m,2),E=d[0],f=d[1],O=(s("DIRECTION"),E.length-1);return Object(c.useEffect)(function(e){o.a.latest({limit:3}).then(function(e){e.result===i.S&&f(e.data)}).catch(function(e){})},[t,a,s]),r.a.createElement("div",{className:"text-left"},r.a.createElement("h5",{className:"mb-3 p-0"},s("POSTS.LATEST_POSTS")),E.map(function(e,n){return r.a.createElement(c.Fragment,{key:e.id},r.a.createElement(u,{id:e.id,date:e.date,time:e.time,author:"".concat(e.firstName," ").concat(e.lastName),comments:e.comments,media:e.media,title:e.title,description:e.description,detailLabel:t,detailLink:a}),n<O&&r.a.createElement("hr",{className:"my-2"}))}))}},479:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(29),l=a(4),i=a(36),o=a(13),s=a(71),m=(a(472),function(e){var t=e.id,a=e.date,n=e.time,m=e.author,u=e.comments,d=e.media,E=e.title,f=e.description,O=e.detailLabel,b=e.detailLink,p=Object(r.b)().t,h=f.length>o.t?f.substr(0,o.t)+" ...":f;return c.a.createElement(l.P,null,c.a.createElement(l.p,{md:"5",lg:"5",xl:"4"},c.a.createElement(l.ab,{hover:!0,className:"rounded z-depth-1-half mb-lg-0 mb-4"},!!d.length&&c.a.createElement("img",{className:"img-fluid post-media",src:d,alt:""}),!d.length&&c.a.createElement("img",{className:"img-fluid post-media",src:s.a.postListitem,alt:""}),c.a.createElement(i.b,{to:"".concat(b,"/").concat(t)},c.a.createElement(l.B,{overlay:"white-slight"})))),c.a.createElement(l.p,{md:"7",lg:"7",xl:"8"},c.a.createElement("h3",{className:"font-weight-bold mb-3 p-0"},c.a.createElement(i.b,{to:"".concat(b,"/").concat(t)},c.a.createElement("strong",null,E))),c.a.createElement("div",{className:"infor-section"},c.a.createElement("p",{className:"mr-2"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(l.y,{icon:"calendar-alt"})),a),c.a.createElement("p",{className:"mr-2"},n),c.a.createElement("p",null,"ltr"===p("DIRECTION")?"/":"\\"),c.a.createElement("p",{className:"mx-2"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(l.y,{icon:"user"})),m),c.a.createElement("p",null,"ltr"===p("DIRECTION")?"/":"\\"),c.a.createElement("p",{className:"mx-2"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(l.y,{icon:"comments"})),u)),c.a.createElement("p",{className:"dark-grey-text"},h),c.a.createElement(i.b,{to:"".concat(b,"/").concat(t)},c.a.createElement(l.g,{size:"sm",color:"indigo",flat:!0},O))))});t.a=function(e){var t=e.items,a=e.detailLabel,l=e.detailLink,i=((0,Object(r.b)().t)("DIRECTION"),t.length-1);return c.a.createElement("div",{className:"text-left mt-3"},t.map(function(e,t){return c.a.createElement(n.Fragment,{key:e.id},c.a.createElement(m,{id:e.id,date:e.date,time:e.time,author:"".concat(e.firstName," ").concat(e.lastName),comments:e.comments,media:e.media,title:e.title,description:e.description,detailLabel:a,detailLink:l}),t<i&&c.a.createElement("hr",{className:"my-5"}))}))}},507:function(e,t,a){},508:function(e,t,a){},509:function(e,t,a){},510:function(e,t,a){},511:function(e,t,a){},512:function(e,t,a){},513:function(e,t,a){},514:function(e,t,a){},515:function(e,t,a){},516:function(e,t,a){},517:function(e,t,a){},547:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(34),l=a(4),i=a(126),o=a(127),s=a(128),m=a(125),u=a(131),d=a(462),E=a.n(d),f=a(463),O=a(42),b=a(459),p=a(471),h=a(36),g=a(29);function N(e){return(N="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){v(e,t,a[t])})}return e}function j(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,c=!1,r=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(o){c=!0,r=o}finally{try{n||null==i.return||i.return()}finally{if(c)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function T(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function R(e){return"symbol"===typeof e?e:String(e)}function A(){}function I(e){switch(N(e)){case"function":case"symbol":case"undefined":return"";default:return""+e}}function w(e){return"function"===typeof e}var C=function(e){return Object.prototype.toString.call(e)};var L={onChange:function(e){return e},onBlur:A,validate:null,validateOnBlur:void 0,touchOnChange:!1};var M=function(e,t){return["__ufs",e,t].filter(Boolean).join("__")};function P(){var e=Object(n.useRef)(new Map),t=function(t){return e.current.has(t)},a=function(t){return e.current.get(t)},c=function(t,a){return e.current.set(t,a)};return{getOrSet:function(e,n){return t(e)?a(e):c(e,n)&&a(e)},set:c,has:t,get:a}}function x(e,t){return w(t)?t(e):S({},e,t)}var D="checkbox",k="radio",F="raw",V="select",_="selectMultiple",B="textarea",U="label",z=[D,"color","date","email","month","number","password",k,"range",F,"search",V,_,"tel","text",B,"time","url","week"],W=0,K=1,G={onBlur:A,onChange:A,onClear:A,onReset:A,onTouched:A,withIds:!1};function Z(e,t){var a=S({},G,t),c=function(e){var t=e.initialState,a=Object(n.useRef)(),c=P(),r=y(Object(n.useReducer)(x,t||{}),2),l=r[0],i=r[1],o=y(Object(n.useReducer)(x,{}),2),s=o[0],m=o[1],u=y(Object(n.useReducer)(x,{}),2),d=u[0],E=u[1],f=y(Object(n.useReducer)(x,{}),2),O=f[0],b=f[1];function p(e,t,a,n,c){i(v({},e,t)),m(v({},e,n)),E(v({},e,a)),b(v({},e,c))}return a.current={values:l,touched:s,validity:d,errors:O},{get current(){return a.current},setValues:i,setTouched:m,setValidity:E,setError:b,setField:p,initialValues:c,resetField:function(e){p(e,c.has(e)?c.get(e):t[e])},clearField:function(e){p(e)},forEach:function(e){Object.keys(a.current.values).forEach(e)}}}({initialState:e}),r=function(e){var t=Object(n.useCallback)(function(t,a){var n;n=e?w(e)?e:M:A;var c=I(a);return c?n(t,c):n(t)},[e]);return{getIdProp:Object(n.useCallback)(function(e,a,n){var c=t(a,n);return void 0===c?{}:v({},e,c)},[t])}}(a.withIds).getIdProp,l=P(),i=l.set,o=l.has,s=P();P();var m=function(e){return function(){for(var t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];var m=function(e){var t,a,n;if("string"===typeof e[0]||"number"===typeof e[0]){var c=y(e,2);t=c[0],a=c[1]}else{var r=y(e,1)[0];t=r.name,a=r.value,n=j(r,["name","value"])}return S({name:t,ownValue:a},L,n)}(n),u=m.name,d=m.ownValue,E=j(m,["name","ownValue"]),f=!!I(d),O=e===D,b=e===k,p=e===_,h=e===F,g=void 0!==c.current.values[u],N="".concat(e,".").concat(u,".").concat(I(d));function A(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h?c.current.values[u]:e.target.value,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.current.values,l=!0;if(w(E.validate)){var i=E.validate(n,r,e);!0!==i&&null!=i&&(l=!1,t=!1!==i?i:"")}else h||(l=e.target.validity.valid,t=e.target.validationMessage);c.setValidity(v({},u,l)),c.setError(function(e){return null==e||(Array.isArray(e)||"string"===typeof e?!e.length:"[object Map]"===C(e)||"[object Set]"===C(e)?!e.size:"[object Object]"===C(e)&&!Object.keys(e).length)}(t)?(a=u,function(e){return e[a],j(e,[a].map(R))}):v({},u,t))}function M(e){c.current.touched[u]||(c.setTouched(v({},u,!0)),a.onTouched(e))}var P=S({name:u,get type(){if(e!==V&&e!==_&&e!==B)return e},get multiple(){if(e===_)return!0},get checked(){var e=c.current.values;return b?e[u]===I(d):O?f?!!g&&e[u].includes(I(d)):e[u]||!1:void 0},get value(){return g?c.initialValues.has(u)||c.initialValues.set(u,c.current.values[u]):function(){var e="";O&&(e=!!f&&[]),p&&(e=[]),c.setValues(v({},u,e))}(),null==c.current.touched[u]&&c.setTouched(v({},u,!1)),O||b?I(d):g?c.current.values[u]:""},onChange:s.getOrSet(K+N,function(e){var t;i(u,!0),h?void 0===(t=E.onChange(e))&&(t=c.current.values[u]):(t=O?function(e){var t=e.target,a=t.value,n=t.checked;if(!f)return n;var r=new Set(c.current.values[u]);return n?r.add(a):r.delete(a),Array.from(r)}(e):p?function(e){return Array.from(e.target.options).reduce(function(e,t){return t.selected?T(e).concat([t.value]):e},[])}(e):e.target.value,E.onChange(e)),E.touchOnChange&&M(e);var n=v({},u,t),r=S({},c.current.values,n);a.onChange(e,c.current.values,r),(a.validateOnBlur?!1!==E.validateOnBlur:E.validateOnBlur)||A(e,t,r),c.setValues(n)}),onBlur:s.getOrSet(W+N,function(e){M(e),E.onBlur(e),a.onBlur(e),c.current.touched[u]&&!o(u)||(A(e),i(u,!1))})},r("id",u,d));return h?{onChange:P.onChange,onBlur:P.onBlur,value:P.value}:P}},u=Object(n.useRef)({clearField:c.clearField,resetField:c.resetField,setField:function(e,t){c.setField(e,t,!0,!0)},setFieldError:function(e,t){c.setValidity(v({},e,!1)),c.setError(v({},e,t))},clear:function(){c.forEach(c.clearField),a.onClear()},reset:function(){c.forEach(c.resetField),a.onReset()}});for(var d in c.current)u.current[d]=c.current[d];var E=v({},U,function(e,t){return r("htmlFor",e,t)});return z.forEach(function(e){E[e]=m(e)}),[u.current,E]}var J=a(37),H=a(449),Q=a(454),Y=a(9),X=a(13),q=a(456),$=a(467),ee=(a(507),function(e){Object(b.a)(e);var t=Object(g.b)().t,a=Object(J.c)(function(e){return e}).auth,i=Object(r.g)(),o=Object(n.useState)({}),s=Object(O.a)(o,2),m=s[0],u=s[1],d=Object(n.useState)([]),N=Object(O.a)(d,2),v=N[0],S=N[1],j=Object(n.useState)(void 0),y=Object(O.a)(j,2),T=y[0],R=y[1],A=Z(),I=Object(O.a)(A,2),w=I[0],C=I[1],L=C.text,M=C.textarea,P=Object(n.useState)(null),x=Object(O.a)(P,2),D=x[0],k=x[1],F=Object(n.useState)([]),V=Object(O.a)(F,2),_=V[0],B=V[1],U=w.values,z=U.title,W=U.description,K=w.touched,G=["jpg","jpeg","png"];Object(n.useEffect)(function(e){q.a.topics().then(function(e){e.result===X.S?S(e.data):S([])}).catch(function(e){S([])})},[t]);var ee=function(){var e=Object(f.a)(E.a.mark(function e(n){var c,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,(c=new FormData).append("userId",a.user.id),T&&c.append("id",T),c.append("title",z),c.append("description",W),c.append("file",D),c.append("topicIds",_),e.next=11,q.a.save(c);case 11:r=e.sent,!T&&R(r.data.insertId),u({show:!0,color:r.result,message:r.message}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),u({show:!0,color:X.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 19:case"end":return e.stop()}},e,null,[[1,16]])}));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(n.Fragment,null,c.a.createElement(Q.Helmet,null,c.a.createElement("title",null,t("NAVBAR.POSTS.ADD")," - ",t("SITE_NAME"))),c.a.createElement(l.e,null,c.a.createElement(l.f,null,c.a.createElement(h.b,{to:Y.a.posts.all},t("NAVBAR.POSTS.POSTS"))),c.a.createElement(l.f,{active:!0},t("NAVBAR.POSTS.ADD"))),c.a.createElement(l.h,null,c.a.createElement(l.i,{className:"mx-md-4 mx-sm-1 text-left"},c.a.createElement("form",{onSubmit:ee},c.a.createElement("div",{className:"text-center"},c.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0 h3-response"},c.a.createElement("strong",null,t("NAVBAR.POSTS.ADD")))),c.a.createElement(l.P,null,c.a.createElement(l.p,{md:8},c.a.createElement(l.A,Object.assign({label:t("POSTS.TITLE"),outline:!0},L("title")),K.title&&0===z.length&&c.a.createElement("div",{className:"invalid-field"},t("COMMON.VALIDATION.REQUIRED",{field:t("POSTS.TITLE")}))),c.a.createElement(l.A,Object.assign({label:t("POSTS.DESCRIPTION"),outline:!0},M("description"),{type:"textarea",rows:X.U}),K.description&&0===W.length&&c.a.createElement("div",{className:"invalid-field"},t("COMMON.VALIDATION.REQUIRED",{field:t("POSTS.DESCRIPTION")})))),c.a.createElement(l.p,{md:4},c.a.createElement("div",{className:"md-form"},c.a.createElement(p.a,{getValue:k,showRemove:!1,maxFileSize:X.u,allowedFileExtensions:G,messageDefault:t("COMMON.FILE_UPLOAD.DEFAULT"),messageReplace:t("COMMON.FILE_UPLOAD.REPLACE"),messageRemove:t("COMMON.FILE_UPLOAD.REMOVE"),messageError:t("COMMON.FILE_UPLOAD.ERROR"),errorFileSize:t("COMMON.FILE_UPLOAD.ERROR_FILESIZE",{max:X.u}),errorFileExtension:t("COMMON.FILE_UPLOAD.ERROR_FILEEXTENSION",{extensions:G.join(", ")})})),c.a.createElement("div",{className:"md-form"},c.a.createElement($.a,{topics:v,onUpdate:function(e){B(e)}})))),c.a.createElement(H.a,{in:m.show,classNames:"fade-transition",timeout:X.V,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:m.color,dismiss:!0,onClosed:function(){return u({})}},m.message)),c.a.createElement(n.Fragment,null,c.a.createElement(l.g,{type:"submit",color:"indigo",size:"sm",disabled:!z||!z.length||!W||!W.length},t("COMMON.BUTTON.ADD")),c.a.createElement(l.g,{flat:!0,size:"sm",onClick:function(e){i.goBack()}},t("COMMON.BUTTON.BACK")))))))}),te=a(457),ae=a(123),ne=a(479),ce=a(124),re=a(460),le=a(455),ie=a(40),oe=(a(508),function(e){Object(b.a)(e);var t=Object(r.h)().page,a=Object(g.b)().t,i=Object(r.g)(),o=Object(n.useState)(!0),s=Object(O.a)(o,2),m=s[0],u=s[1],d=Object(n.useState)({}),E=Object(O.a)(d,2),f=E[0],p=E[1],N=Object(n.useState)([]),v=Object(O.a)(N,2),S=v[0],j=v[1],y=Object(n.useState)([]),T=Object(O.a)(y,2),R=T[0],A=T[1],I=Object(n.useState)(0),w=Object(O.a)(I,2),C=w[0],L=w[1],M=Object(n.useState)([]),P=Object(O.a)(M,2),x=P[0],D=P[1],k=t?parseInt(t):1,F=function(e){i.push("".concat(Y.a.posts.all,"/").concat(e))};Object(n.useEffect)(function(e){ae.animateScroll.scrollToTop({duration:X.V}),p({}),q.a.topics().then(function(e){e.result===X.S?j(e.data):j([])}).catch(function(e){j([])}),V()},[t,a,R]);var V=function(e){q.a.list({page:t,topics:R}).then(function(e){if(e.result===X.S){L(e.pageCount);var t=!0,a=!1,n=void 0;try{for(var c,r=e.data[Symbol.iterator]();!(t=(c=r.next()).done);t=!0){var l=c.value;l.media.length&&(l.media=l.media.startsWith("http://")||l.media.startsWith("https://")?l.media:Object(te.sprintf)("%s%s",ie.a.assetsBaseUrl,l.media))}}catch(i){a=!0,n=i}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}D(e.data)}else p({show:!0,color:X.a,message:e.message});u(!1)}).catch(function(e){p({show:!0,color:X.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),u(!1)})};return c.a.createElement(n.Fragment,null,c.a.createElement(Q.Helmet,null,c.a.createElement("title",null,a("NAVBAR.POSTS.ALL")," - ",a("SITE_NAME"))),c.a.createElement(l.e,null,c.a.createElement(l.f,null,c.a.createElement(h.b,{to:Y.a.posts.all},a("NAVBAR.POSTS.POSTS"))),c.a.createElement(l.f,{active:!0},a("NAVBAR.POSTS.ALL"))),!!m&&c.a.createElement(ce.a,null),c.a.createElement(l.P,null,c.a.createElement(l.p,{md:12},c.a.createElement(H.a,{in:f.show,classNames:"fade-transition",timeout:X.V,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:f.color,dismiss:!0,onClosed:function(){return p({})}},f.message))),c.a.createElement(l.p,{md:9,className:"order-1 order-md-0"},!m&&!x.length&&c.a.createElement(re.a,null),!m&&!!x.length&&c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"mt-5 text-center"},c.a.createElement(le.a,{circle:!0,current:k,pageCount:C,onChange:F})),c.a.createElement("div",{className:"full-width text-left"},c.a.createElement(h.b,{to:Y.a.posts.add},c.a.createElement(l.g,{size:"sm",color:"primary",rounded:!0},a("NAVBAR.POSTS.ADD")))),c.a.createElement(ne.a,{items:x,detailLabel:a("COMMON.BUTTON.READ_MORE"),detailLink:Y.a.posts.detail}),c.a.createElement("div",{className:"mt-5 text-center"},c.a.createElement(le.a,{circle:!0,current:k,pageCount:C,onChange:F})))),c.a.createElement(l.p,{md:3,className:"order-0 order-md-1"},c.a.createElement("div",{className:"topic-list text-left"},c.a.createElement($.a,{topics:S,onUpdate:function(e){A(e)}})))))}),se=a(478),me=a(468),ue=(a(509),function(e){var t=e.data,a=e.comments,r=(e.topics,Object(g.b)().t);return c.a.createElement(n.Fragment,null,c.a.createElement("h3",{className:"font-weight-bold my-3 p-0 text-center h3-response"},c.a.createElement("strong",null,t.title)),c.a.createElement("div",{className:"infor-section text-left"},c.a.createElement("p",{className:"mr-2"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(l.y,{icon:"calendar-alt"})),t.date),c.a.createElement("p",{className:"mr-2"},t.time),c.a.createElement("p",null,"ltr"===r("DIRECTION")?"/":"\\"),c.a.createElement("p",{className:"mx-2"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(l.y,{icon:"user"})),"".concat(t.firstName," ").concat(t.lastName)),c.a.createElement("p",null,"ltr"===r("DIRECTION")?"/":"\\"),c.a.createElement("p",{className:"mx-2"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(l.y,{icon:"comments"})),a)),c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:t.media,className:"post-detail-media view overlay rounded z-depth-1-half mb-4"})),c.a.createElement("div",null,c.a.createElement("div",{className:"text-left"},t.description)))}),de=(a(510),function(e){var t=e.commentId,a=Object(g.b)().t,i=Object(r.g)(),o=Object(J.c)(function(e){return e}).auth,s=Object(n.useState)({}),m=Object(O.a)(s,2),u=m[0],d=m[1],E=Object(n.useState)(!1),f=Object(O.a)(E,2),b=f[0],p=f[1],N=Z(),v=Object(O.a)(N,2),S=v[0],j=v[1].textarea,y=i.location.pathname,T=S.values.comment,R=S.touched;return c.a.createElement(n.Fragment,null,c.a.createElement("h4",{className:"font-weight-bold mt-5 mb-3 p-0 text-left"},c.a.createElement("strong",null,a("POSTS.DETAIL.WRITE")," ",c.a.createElement("span",{className:"blue-text"},a("POSTS.DETAIL.COMMENT")))),!!o.signedIn&&c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),q.a.writeComment({commentId:t,userId:o.user.id,comment:T}).then(function(e){p(e.result===X.S),d({show:!0,color:e.result,message:e.message})}).catch(function(e){d({show:!0,color:X.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")})})},className:"text-left"},c.a.createElement(l.A,Object.assign({label:a("POSTS.DESCRIPTION"),outline:!0},j("comment"),{type:"textarea",containerClass:"mb-2",rows:X.T}),R.comment&&0===T.length&&c.a.createElement("div",{className:"invalid-field"},a("COMMON.VALIDATION.REQUIRED",{field:a("POSTS.DETAIL.COMMENT")}))),c.a.createElement(H.a,{in:u.show,classNames:"fade-transition",timeout:X.V,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:u.color,dismiss:!0,onClosed:function(){return d({})}},u.message)),c.a.createElement(n.Fragment,null,c.a.createElement(l.g,{type:"submit",color:"indigo",size:"sm",disabled:!!b||!T||!T.length},a("COMMON.BUTTON.SEND")))),!o.signedIn&&c.a.createElement(n.Fragment,null,c.a.createElement(l.b,{color:"warning"},a("POSTS.DETAIL.REQUIRE_SIGN_IN")," ",c.a.createElement(h.b,{to:"".concat(Y.a.auth.signIn,"?redirect=").concat(y),className:"blue-text"},a("AUTH.SIGN_IN")))))}),Ee=(a(511),function(e){var t=e.data,a=Object(g.b)().t;return c.a.createElement(n.Fragment,null,c.a.createElement(l.b,{className:"mt-5 mb-3",color:"primary"},t.length?a("POSTS.DETAIL.COMMENTS"):a("POSTS.DETAIL.NO_COMMENT")),t.map(function(e,n){return c.a.createElement("div",{key:n,className:"my-3 ml-5"},c.a.createElement("div",{className:"infor-section text-left"},c.a.createElement("p",{className:"mr-2 mb-0"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(l.y,{icon:"calendar-alt"})),e.date),c.a.createElement("p",{className:"mr-2 mb-0"},e.time),c.a.createElement("p",null,"ltr"===a("DIRECTION")?"/":"\\"),c.a.createElement("p",{className:"mx-2 mb-0"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(l.y,{icon:"user"})),"".concat(e.firstName," ").concat(e.lastName))),c.a.createElement("div",{className:"text-left"},e.comment),n<t.length-1&&c.a.createElement("hr",null))}))}),fe=(a(512),function(e){var t=e.topics,a=Object(g.b)().t;return c.a.createElement(n.Fragment,null,c.a.createElement("hr",null),c.a.createElement("h4",null,a("POSTS.RELATED_TOPICS")),t.map(function(e,t){return c.a.createElement("div",{key:t,className:"my-2"},c.a.createElement("h6",null,e.topic))}))}),Oe=(a(513),function(e){Object(b.a)(e);var t=Object(r.h)().id,a=Object(g.b)().t,i=(Object(r.g)(),Object(J.c)(function(e){return e}).auth),o=Object(n.useState)(!0),s=Object(O.a)(o,2),u=s[0],d=s[1],E=Object(n.useState)({}),f=Object(O.a)(E,2),p=(f[0],f[1]),N=Object(n.useState)([]),v=Object(O.a)(N,2),S=v[0],j=v[1],y=Object(n.useState)([]),T=Object(O.a)(y,2),R=T[0],A=T[1],I=Object(n.useState)([]),w=Object(O.a)(I,2),C=w[0],L=w[1];Object(n.useEffect)(function(e){ae.animateScroll.scrollToTop({duration:X.V}),q.a.get({id:t,userId:i.user?i.user.id:void 0}).then(function(e){e.result===X.S?(e.data.media.length&&(e.data.media=e.data.media.startsWith("http://")||e.data.media.startsWith("https://")?e.data.media:Object(te.sprintf)("%s%s",ie.a.assetsBaseUrl,e.data.media)),j(e.data)):(j([]),p({show:!0,color:X.a,message:e.message})),d(!1)}).catch(function(e){j([]),p({show:!0,color:X.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),d(!1)}),q.a.commentList({postId:t}).then(function(e){e.result===X.S?A(e.data):A([])}).catch(function(e){A([])}),q.a.post2Topics({postId:t}).then(function(e){e.result===X.S?L(e.data):L([])}).catch(function(e){L([])})},[t]);return c.a.createElement("div",null,c.a.createElement(Q.Helmet,null,c.a.createElement("title",null,a("POSTS.DETAIL.POST_DETAIL")," - ",a("SITE_NAME"))),c.a.createElement(l.e,null,c.a.createElement(l.f,null,c.a.createElement(h.b,{to:Y.a.posts.all},a("NAVBAR.POSTS.POSTS"))),c.a.createElement(l.f,{active:!0},a("POSTS.DETAIL.POST_DETAIL"))),!!u&&c.a.createElement(ce.a,null),!u&&(!S||!S.id)&&c.a.createElement(m.a,null),!u&&!!S&&!!S.id&&c.a.createElement(n.Fragment,null,c.a.createElement(l.P,null,c.a.createElement(l.p,{md:9},c.a.createElement(ue,{data:S,comments:R.length,topics:C}),S.userId!==(i.user?i.user.id:-1)&&!S.commentId&&c.a.createElement(de,{commentId:S.id}),!!S.commentId&&c.a.createElement(l.b,{className:"mt-5 mb-3",color:"warning"},a("POSTS.DETAIL.ALREADY_WROTE_COMMENT")),c.a.createElement(Ee,{data:R})),c.a.createElement(l.p,{md:3},c.a.createElement("div",{className:"mt-10"},c.a.createElement(se.a,{detailLink:Y.a.posts.detail,detailLabel:a("COMMON.BUTTON.DETAILS")})),c.a.createElement("div",{className:"text-left mt-10"},c.a.createElement(fe,{topics:C}))))))}),be=(a(476),function(e){var t=e.id,a=e.date,r=e.time,i=(e.author,e.comments,e.media,e.title),o=e.description,s=e.detailLabel,m=e.detailLink,u=(Object(g.b)().t,o.length>X.t?o.substr(0,X.t)+" ...":o);return c.a.createElement(n.Fragment,null,c.a.createElement("h3",{className:"font-weight-bold mb-3 p-0"},c.a.createElement(h.b,{to:"".concat(m,"/").concat(t)},c.a.createElement("strong",null,i))),c.a.createElement("div",{className:"infor-section"},c.a.createElement("p",{className:"mr-2"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(l.y,{icon:"calendar-alt"})),a),c.a.createElement("p",{className:"mr-2"},r)),c.a.createElement("p",{className:"dark-grey-text"},u),c.a.createElement(h.b,{to:"".concat(m,"/").concat(t)},c.a.createElement(l.g,{size:"sm",color:"indigo",flat:!0},s)))}),pe=function(e){var t=e.items,a=e.detailLabel,r=e.detailLink,l=t.length-1;return c.a.createElement("div",{className:"text-left mt-3"},t.map(function(e,t){return c.a.createElement(n.Fragment,{key:e.id},c.a.createElement(be,{id:e.id,date:e.date,time:e.time,author:"".concat(e.firstName," ").concat(e.lastName),title:e.title,description:e.description,media:e.media,detailLabel:a,detailLink:r}),t<l&&c.a.createElement("hr",{className:"my-5"}))}))},he=(a(514),function(){var e=Object(r.h)().page,t=Object(g.b)().t,a=Object(r.g)(),i=Object(n.useState)(!0),o=Object(O.a)(i,2),s=o[0],m=o[1],u=Object(n.useState)({}),d=Object(O.a)(u,2),E=d[0],f=d[1],b=Object(n.useState)(0),p=Object(O.a)(b,2),h=p[0],N=p[1],v=Object(n.useState)([]),S=Object(O.a)(v,2),j=S[0],y=S[1],T=e?parseInt(e):1;Object(n.useEffect)(function(a){ae.animateScroll.scrollToTop({duration:X.V}),q.a.magazines({page:e}).then(function(e){if(e.result===X.S){N(e.pageCount);var t=!0,a=!1,n=void 0;try{for(var c,r=e.data[Symbol.iterator]();!(t=(c=r.next()).done);t=!0){var l=c.value;l.media.length&&(l.media=l.media.startsWith("http://")||l.media.startsWith("https://")?l.media:Object(te.sprintf)("%s%s",ie.a.assetsBaseUrl,l.media))}}catch(i){a=!0,n=i}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}y(e.data)}else f({show:!0,color:X.a,message:e.message});m(!1)}).catch(function(e){f({show:!0,color:X.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),m(!1)})},[e,t]);var R=function(e){a.push("".concat(Y.a.posts.magazines,"/").concat(e))};return c.a.createElement(n.Fragment,null,c.a.createElement(Q.Helmet,null,c.a.createElement("title",null,t("NAVBAR.POSTS.MAGAZINES")," - ",t("SITE_NAME"))),c.a.createElement(l.e,null,c.a.createElement(l.f,{active:!0},t("NAVBAR.POSTS.POSTS")),c.a.createElement(l.f,{active:!0},t("NAVBAR.POSTS.MAGAZINES"))),!!s&&c.a.createElement(ce.a,null),!s&&!j.length&&c.a.createElement(re.a,null),!s&&!!j.length&&c.a.createElement(l.P,null,c.a.createElement(l.p,{md:12},c.a.createElement(H.a,{in:E.show,classNames:"fade-transition",timeout:X.V,unmountOnExit:!0,appear:!0},c.a.createElement(l.b,{color:E.color,dismiss:!0,onClosed:function(){return f({})}},E.message))),c.a.createElement(l.p,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(le.a,{circle:!0,current:T,pageCount:h,width:10,onChange:R}))),c.a.createElement(l.p,{md:12},c.a.createElement(pe,{items:j,detailLabel:t("COMMON.BUTTON.READ_MORE"),detailLink:Y.a.posts.magazineDetail})),c.a.createElement(l.p,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(le.a,{circle:!0,current:T,pageCount:h,width:10,onChange:R})))))}),ge=a(477),Ne=(a(515),function(e){var t=e.data,a=Object(g.b)().t;return c.a.createElement(n.Fragment,null,c.a.createElement("h3",{className:"font-weight-bold my-3 p-0 text-center h3-response"},c.a.createElement("strong",null,t.title)),c.a.createElement("div",{className:"infor-section text-left"},c.a.createElement("p",{className:"mr-2"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(l.y,{icon:"calendar-alt"})),t.date),c.a.createElement("p",{className:"mr-2"},t.time)),c.a.createElement("div",{className:"text-center"},c.a.createElement(l.g,{tag:"a",color:"primary",rounded:!0,onClick:function(e){return function(e){var t=e.url,a=e.filename;ge.a.downloadFile({url:t,filename:a})}({url:t.media,filename:t.title})}},c.a.createElement(l.y,{icon:"file-pdf"})," ",a("COMMON.BUTTON.DOWNLOAD"))),c.a.createElement("div",null,c.a.createElement("div",{className:"text-left"},t.description)))}),ve=(a(516),function(e){Object(b.a)(e);var t=Object(r.h)().id,a=Object(g.b)().t,i=(Object(r.g)(),Object(J.c)(function(e){return e}).auth),o=Object(n.useState)(!0),s=Object(O.a)(o,2),u=s[0],d=s[1],E=Object(n.useState)({}),f=Object(O.a)(E,2),p=(f[0],f[1]),N=Object(n.useState)(),v=Object(O.a)(N,2),S=v[0],j=v[1],y=Object(n.useState)([]),T=Object(O.a)(y,2);T[0],T[1];Object(n.useEffect)(function(e){ae.animateScroll.scrollToTop({duration:X.V}),q.a.getMagazine({id:t,userId:i.user?i.user.id:void 0}).then(function(e){e.result===X.S?(e.data.media.length&&(e.data.media=Object(te.sprintf)("%s%s",ie.a.assetsBaseUrl,e.data.media)),j(e.data),console.log(e.data)):p({show:!0,color:X.a,message:e.message}),d(!1)}).catch(function(e){p({show:!0,color:X.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),d(!1)})},[t]);return c.a.createElement("div",null,c.a.createElement(Q.Helmet,null,c.a.createElement("title",null,a("POSTS.MAGAZINES.MAGAZINE_DETAIL")," - ",a("SITE_NAME"))),c.a.createElement(l.e,null,c.a.createElement(l.f,null,a("NAVBAR.POSTS.POSTS")),c.a.createElement(l.f,null,c.a.createElement(h.b,{to:Y.a.posts.magazines},a("NAVBAR.POSTS.MAGAZINES"))),c.a.createElement(l.f,{active:!0},a("POSTS.MAGAZINES.MAGAZINE_DETAIL"))),!!u&&c.a.createElement(ce.a,null),!u&&(!S||!S.id)&&c.a.createElement(m.a,null),!u&&!!S&&!!S.id&&c.a.createElement(n.Fragment,null,c.a.createElement(l.P,null,c.a.createElement(l.p,{md:8},c.a.createElement(Ne,{data:S})),c.a.createElement(l.p,{md:4},c.a.createElement("div",{className:"mt-10"},c.a.createElement(me.a,{detailLink:Y.a.news.detail,detailLabel:a("COMMON.BUTTON.DETAILS")}))))))});a(517),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(i.a,null),c.a.createElement(l.r,{className:"section"},c.a.createElement(r.d,null,c.a.createElement(u.a,{path:Y.a.posts.add,component:ee}),c.a.createElement(r.b,{path:"".concat(Y.a.posts.magazines,"/:page?"),exact:!0,component:he}),c.a.createElement(r.b,{path:"".concat(Y.a.posts.magazineDetail,"/:id"),component:ve}),c.a.createElement(r.b,{path:"".concat(Y.a.posts.all,"/:page?"),exact:!0,component:oe}),c.a.createElement(r.b,{path:"".concat(Y.a.posts.detail,"/:id"),component:Oe}),c.a.createElement(r.b,{component:m.a}))),c.a.createElement(o.a,null),c.a.createElement(s.a,null))}}}]);