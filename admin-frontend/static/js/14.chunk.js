(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{446:function(e,t,a){"use strict";var n=a(53),l=a(0),r=a.n(l),c=a(4),i=a(5),o=a(459),s=a(27);t.a=function(e){var t=e.circle,a=e.current,u=e.pageCount,m=e.width,E=e.onChange,d=Object(s.b)().t,f=Object(l.useState)([]),O=Object(n.a)(f,2),N=O[0],b=O[1],p="ltr"===d("DIRECTION")?"left":"right",g="ltr"===d("DIRECTION")?"right":"left";return Object(l.useEffect)(function(e){!m&&(m=o.isMobile?i.o:i.n);var t=Math.ceil(m/2),n=a-t<1?1:a-t,l=a+t-1>u?u:a+t-1;l-n<m&&(1===n&&(l=u<m?u:m),l===u&&(n=u-m+1<1?1:u-m+1));for(var r=[],c=n;c<=l;c++)r.push(c);b(r)},[a,u,m]),r.a.createElement(l.Fragment,null,u>0&&r.a.createElement(c.I,{circle:t},r.a.createElement(c.G,{disabled:1===a,onClick:function(){return E(1)}},r.a.createElement(c.H,{className:"page-link"},r.a.createElement(c.r,{icon:"angle-double-".concat(p)}))),r.a.createElement(c.G,{disabled:1===a,onClick:function(){return E(a-1)}},r.a.createElement(c.H,{className:"page-link"},r.a.createElement(c.r,{icon:"angle-".concat(p)}))),N.map(function(e,t){return r.a.createElement(c.G,{key:e,active:e===a,onClick:function(){return a!==e&&E(e)}},r.a.createElement(c.H,{className:"page-link"},e))}),r.a.createElement(c.G,{disabled:a===u,onClick:function(){return E(a+1)}},r.a.createElement(c.H,{className:"page-link"},r.a.createElement(c.r,{icon:"angle-".concat(g)}))),r.a.createElement(c.G,{disabled:a===u,onClick:function(){return E(u)}},r.a.createElement(c.H,{className:"page-link"},r.a.createElement(c.r,{icon:"angle-double-".concat(g)})))))}},451:function(e,t,a){"use strict";var n=a(458),l=a.n(n),r=a(5);t.a={isEmail:function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},isUsername:function(e){return e.length<=r.H&&/^[a-zA-Z_][0-9a-zA-Z_.-]+$/.test(String(e).toLowerCase())},isPhoneNumber:function(e){var t=l.a.PhoneNumberUtil.getInstance();try{var a=t.parseAndKeepRawInput(e);return t.isValidNumber(a)}catch(n){return!1}},isURL:function(e){return e.startsWith("http://")||e.startsWith("https://")}}},456:function(e,t,a){var n;!function(){"use strict";var l={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function r(e){return function(e,t){var a,n,c,i,o,s,u,m,E,d=1,f=e.length,O="";for(n=0;n<f;n++)if("string"===typeof e[n])O+=e[n];else if("object"===typeof e[n]){if((i=e[n]).keys)for(a=t[d],c=0;c<i.keys.length;c++){if(void 0==a)throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"',i.keys[c],i.keys[c-1]));a=a[i.keys[c]]}else a=i.param_no?t[i.param_no]:t[d++];if(l.not_type.test(i.type)&&l.not_primitive.test(i.type)&&a instanceof Function&&(a=a()),l.numeric_arg.test(i.type)&&"number"!==typeof a&&isNaN(a))throw new TypeError(r("[sprintf] expecting number but found %T",a));switch(l.number.test(i.type)&&(m=a>=0),i.type){case"b":a=parseInt(a,10).toString(2);break;case"c":a=String.fromCharCode(parseInt(a,10));break;case"d":case"i":a=parseInt(a,10);break;case"j":a=JSON.stringify(a,null,i.width?parseInt(i.width):0);break;case"e":a=i.precision?parseFloat(a).toExponential(i.precision):parseFloat(a).toExponential();break;case"f":a=i.precision?parseFloat(a).toFixed(i.precision):parseFloat(a);break;case"g":a=i.precision?String(Number(a.toPrecision(i.precision))):parseFloat(a);break;case"o":a=(parseInt(a,10)>>>0).toString(8);break;case"s":a=String(a),a=i.precision?a.substring(0,i.precision):a;break;case"t":a=String(!!a),a=i.precision?a.substring(0,i.precision):a;break;case"T":a=Object.prototype.toString.call(a).slice(8,-1).toLowerCase(),a=i.precision?a.substring(0,i.precision):a;break;case"u":a=parseInt(a,10)>>>0;break;case"v":a=a.valueOf(),a=i.precision?a.substring(0,i.precision):a;break;case"x":a=(parseInt(a,10)>>>0).toString(16);break;case"X":a=(parseInt(a,10)>>>0).toString(16).toUpperCase()}l.json.test(i.type)?O+=a:(!l.number.test(i.type)||m&&!i.sign?E="":(E=m?"+":"-",a=a.toString().replace(l.sign,"")),s=i.pad_char?"0"===i.pad_char?"0":i.pad_char.charAt(1):" ",u=i.width-(E+a).length,o=i.width&&u>0?s.repeat(u):"",O+=i.align?E+a+o:"0"===s?E+o+a:o+E+a)}return O}(function(e){if(i[e])return i[e];var t,a=e,n=[],r=0;for(;a;){if(null!==(t=l.text.exec(a)))n.push(t[0]);else if(null!==(t=l.modulo.exec(a)))n.push("%");else{if(null===(t=l.placeholder.exec(a)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){r|=1;var c=[],o=t[2],s=[];if(null===(s=l.key.exec(o)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(c.push(s[1]);""!==(o=o.substring(s[0].length));)if(null!==(s=l.key_access.exec(o)))c.push(s[1]);else{if(null===(s=l.index_access.exec(o)))throw new SyntaxError("[sprintf] failed to parse named argument key");c.push(s[1])}t[2]=c}else r|=2;if(3===r)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}a=a.substring(t[0].length)}return i[e]=n}(e),arguments)}function c(e,t){return r.apply(null,[e].concat(t||[]))}var i=Object.create(null);t.sprintf=r,t.vsprintf=c,"undefined"!==typeof window&&(window.sprintf=r,window.vsprintf=c,void 0===(n=function(){return{sprintf:r,vsprintf:c}}.call(t,a,t,e))||(e.exports=n))}()},460:function(e,t,a){"use strict";var n=a(39),l=a(42),r=a(51);t.a={list:function(e){return new Promise(function(t,a){Object(n.a)(l.d,r.a.users.list,e).then(function(e){t(e)},function(e){a(e)})})},allow:function(e){return new Promise(function(t,a){Object(n.a)(l.d,r.a.users.allow,e).then(function(e){t(e)},function(e){a(e)})})},delete:function(e){return new Promise(function(t,a){Object(n.a)(l.d,r.a.users.delete,e).then(function(e){t(e)},function(e){a(e)})})},get:function(e){return new Promise(function(t,a){Object(n.a)(l.d,r.a.users.get,e).then(function(e){t(e)},function(e){a(e)})})},save:function(e){return new Promise(function(t,a){Object(n.a)(l.d,r.a.users.save,e).then(function(e){t(e)},function(e){a(e)})})},count:function(e){return new Promise(function(t,a){Object(n.a)(l.d,r.a.users.count,e).then(function(e){t(e)},function(e){a(e)})})},countPerGender:function(e){return new Promise(function(t,a){Object(n.a)(l.d,r.a.users.countPerGender,e).then(function(e){t(e)},function(e){a(e)})})},singInHistory:function(e){return new Promise(function(t,a){Object(n.a)(l.d,r.a.users.singInHistory,e).then(function(e){t(e)},function(e){a(e)})})}}},524:function(e,t,a){},525:function(e,t,a){},526:function(e,t,a){},540:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),c=a(4),i=a(129),o=a(130),s=a(132),u=a(131),m=a(10),E=a(53),d=a(38),f=a(27),O=a(127),N=a(445),b=a(440),p=a(128),g=a(446),h=a(460),A=a(5);a(524);var T=function(){var e=Object(r.h)(),t=e.scope,a=e.page,i=Object(f.b)().t,o=Object(r.g)(),s=Object(n.useState)(!0),u=Object(E.a)(s,2),T=u[0],S=u[1],R=Object(n.useState)({}),M=Object(E.a)(R,2),C=M[0],v=M[1],j=Object(n.useState)({}),y=Object(E.a)(j,2),I=y[0],U=y[1],w=Object(n.useState)(""),D=Object(E.a)(w,2),x=D[0],k=D[1],_=Object(n.useState)(0),H=Object(E.a)(_,2),L=H[0],V=H[1],B=Object(n.useState)([]),P=Object(E.a)(B,2),F=P[0],G=P[1],Q=function(e,t){var a=Object(n.useState)(e),l=Object(E.a)(a,2),r=l[0],c=l[1];return Object(n.useEffect)(function(){var a=setTimeout(function(){c(e)},t);return function(){clearTimeout(a)}},[e]),r}(x,A.F),z=a?parseInt(a):1,W=[{label:"#",field:"id",sort:"asc"},{label:i("USERS.EMAIL"),field:"email",sort:"asc"},{label:i("USERS.USERNAME"),field:"username",sort:"asc"},{label:i("USERS.FIRST_NAME"),field:"firstName",sort:"asc"},{label:i("USERS.FATHER_NAME"),field:"lastName",sort:"asc"},{label:i("USERS.LAST_NAME"),field:"lastName",sort:"asc"},{label:i("USERS.GENDER"),field:"gender",sort:"asc"},{label:i("USERS.PHONE"),field:"phone",sort:"asc"},{label:"",field:"button",sort:"asc"}];Object(n.useEffect)(function(e){O.animateScroll.scrollToTop({duration:A.F})},[t,a,i]);var Y=function(e){S(!0),h.a.list({page:a,scope:t,search:x}).then(function(e){if(e.result===A.B){var t=!0,a=!1,n=void 0;try{for(var l,r=e.data[Symbol.iterator]();!(t=(l=r.next()).done);t=!0){var c=l.value;c.button=K({id:c.id,number:c.number,name:"".concat(c.firstName," ").concat(c.lastName),allowedDate:c.allowedDate})}}catch(i){a=!0,n=i}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}V(e.pageCount),G(e.data)}else v({show:!0,color:A.a,message:e.message});S(!1)}).catch(function(e){v({show:!0,color:A.a,message:i("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),S(!1)})};Object(n.useMemo)(function(e){o.push("".concat(m.a.users.list,"/").concat(t)),Y()},[Q]),Object(n.useMemo)(function(e){Y()},[t,a,i]);var K=function(e){var r=e.id,i=(e.number,e.name),o=e.allowedDate;return l.a.createElement(n.Fragment,null,l.a.createElement(d.b,{to:"".concat(m.a.users.edit,"/").concat(r,"/").concat(t,"/").concat(a||1)},l.a.createElement(c.f,{tag:"a",size:"sm",color:"indigo",floating:!0},l.a.createElement(c.r,{icon:"edit"}))),l.a.createElement(c.f,{tag:"a",size:"sm",color:o.length?"warning":"primary",className:"mx-2",floating:!0,onClick:function(e){return Z(r,i,o)}},l.a.createElement(c.r,{icon:o.length?"times":"check"})),l.a.createElement(c.f,{tag:"a",size:"sm",color:"danger",floating:!0,onClick:function(e){return $(r,i)}},l.a.createElement(c.r,{icon:"trash"})))},J=function(e){U(Object.assign({},I,{show:!I.show}))},X=function(e){o.push("".concat(m.a.users.list,"/").concat(t,"/").concat(e))},Z=function(e,t,a){var n=!a.length;U(Object.assign({},I,{show:!0,title:i(n?"COMMON.BUTTON.ALLOW":"COMMON.BUTTON.DENY"),message:i(n?"COMMON.QUESTION.ALLOW":"COMMON.QUESTION.DENY",{item:t}),itemId:e,allowItem:n?1:0,proc:"allow",yesButtonColor:n?"primary":"warning",yesButtonString:i(n?"COMMON.BUTTON.ALLOW":"COMMON.BUTTON.DENY")}))},$=function(e,t){U(Object.assign({},I,{show:!0,title:i("COMMON.BUTTON.DELETE"),message:i("COMMON.QUESTION.DELETE",{item:t}),itemId:e,proc:"delete",yesButtonColor:"danger",yesButtonString:i("COMMON.BUTTON.DELETE")}))};return l.a.createElement(n.Fragment,null,l.a.createElement(N.Helmet,null,l.a.createElement("title",null,i("NAVBAR.USERS.USERS")," - ",i("SITE_NAME"))),l.a.createElement(c.d,null,l.a.createElement(c.e,null,i("NAVBAR.USERS.USERS")),l.a.createElement(c.e,{active:!0},i("all"===t?"NAVBAR.USERS.LIST":"NAVBAR.USERS.NEW_LIST"))),!!T&&l.a.createElement(p.a,null),!T&&l.a.createElement(c.M,null,l.a.createElement(c.i,{md:12},l.a.createElement("h3",{className:"mt-4 font-weight-bold text-center"},i("all"===t?"NAVBAR.USERS.LIST":"NAVBAR.USERS.NEW_LIST"))),l.a.createElement(c.i,{md:12},l.a.createElement(b.a,{in:C.show,classNames:"fade-transition",timeout:A.F,unmountOnExit:!0,appear:!0},l.a.createElement(c.b,{color:C.color,dismiss:!0,onClosed:function(){return v({})}},C.message))),l.a.createElement(c.i,{md:12,className:"mt-5"},l.a.createElement(c.M,null,l.a.createElement(c.i,{md:6},l.a.createElement(c.t,{id:"search",name:"search",type:"text",label:i("COMMON.BUTTON.SEARCH"),outline:!0,value:x,getValue:k})),l.a.createElement(c.i,{md:6}))),l.a.createElement(n.Fragment,null,l.a.createElement(c.i,{md:12,className:"text-center"},l.a.createElement("div",null,l.a.createElement(g.a,{circle:!0,current:z,pageCount:L,onChange:X}))),l.a.createElement(c.i,{md:12},l.a.createElement(c.V,{responsive:!0,striped:!0},l.a.createElement(c.X,null,l.a.createElement("tr",{className:"text-left"},W.map(function(e,t){return l.a.createElement("th",{key:t},e.label)}))),l.a.createElement(c.W,null,F.map(function(e,t){return l.a.createElement("tr",{key:t,className:"text-left"},l.a.createElement("td",null,e.number),l.a.createElement("td",null,e.email," ",!e.allowedDate&&l.a.createElement(c.r,{className:"text-danger",icon:"exclamation-circle"})),l.a.createElement("td",null,e.username),l.a.createElement("td",null,e.firstName),l.a.createElement("td",null,e.fatherName),l.a.createElement("td",null,e.lastName),l.a.createElement("td",null,e.gender),l.a.createElement("td",null,"".concat(e.countryCode).concat(e.phone)),l.a.createElement("td",{className:"p-2 edit-col2"},e.button))}),!F.length&&l.a.createElement("tr",null,l.a.createElement("td",{className:"text-center",colSpan:"8"},i("COMMON.ERROR.NO_DATA")))))),l.a.createElement(c.i,{md:12,className:"text-center"},l.a.createElement("div",{className:"mt-5"},l.a.createElement(g.a,{circle:!0,current:z,pageCount:L,onChange:X}))))),l.a.createElement(c.v,{isOpen:!!I.show,toggle:J,centered:!0},l.a.createElement(c.y,{toggle:J},I.title),l.a.createElement(c.w,{className:"text-left"},I.message),l.a.createElement(c.x,null,l.a.createElement(c.f,{type:"button",color:I.yesButtonColor,onClick:"allow"===I.proc?function(e){h.a.allow({id:I.itemId,allow:I.allowItem,page:a,scope:t,search:x}).then(function(e){if(e.result===A.B){var t=!0,a=!1,n=void 0;try{for(var l,r=e.data[Symbol.iterator]();!(t=(l=r.next()).done);t=!0){var c=l.value;c.button=K({id:c.id,number:c.number,name:"".concat(c.firstName," ").concat(c.lastName),allowedDate:c.allowedDate})}}catch(i){a=!0,n=i}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}V(e.pageCount),G(e.data)}else v({show:!0,color:A.a,message:e.message}),O.animateScroll.scrollToTop({duration:A.F});S(!1),J()}).catch(function(e){v({show:!0,color:A.a,message:i("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),O.animateScroll.scrollToTop({duration:A.F}),S(!1),J()})}:function(e){h.a.delete({id:I.itemId,page:a,scope:t}).then(function(e){if(e.result===A.B){var t=!0,a=!1,n=void 0;try{for(var l,r=e.data[Symbol.iterator]();!(t=(l=r.next()).done);t=!0){var c=l.value;c.button=K({id:c.id,number:c.number,name:"".concat(c.firstName," ").concat(c.lastName),allowedDate:c.allowedDate})}}catch(i){a=!0,n=i}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}V(e.pageCount),G(e.data)}else v({show:!0,color:A.a,message:e.message}),O.animateScroll.scrollToTop({duration:A.F});S(!1),J()}).catch(function(e){v({show:!0,color:A.a,message:i("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),O.animateScroll.scrollToTop({duration:A.F}),S(!1),J()})}},I.yesButtonString),l.a.createElement(c.f,{type:"button",color:"secondary",onClick:J},i("COMMON.BUTTON.CANCEL")))))},S=a(133),R=a(456),M=a(451);a(525);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(S.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var j=function(){var e=Object(r.h)(),t=e.id,a=e.scope,i=e.page,o=Object(r.g)(),s=Object(f.b)().t,u=Object(n.useState)({}),O=Object(E.a)(u,2),g=O[0],T=O[1],S=Object(n.useState)(!1),C=Object(E.a)(S,2),j=C[0],y=C[1],I=Object(n.useState)({}),U=Object(E.a)(I,2),w=U[0],D=U[1],x=Object(n.useState)(),k=Object(E.a)(x,2),_=k[0],H=k[1],L=Object(n.useState)(""),V=Object(E.a)(L,2),B=V[0],P=V[1],F=Object(n.useState)(""),G=Object(E.a)(F,2),Q=G[0],z=G[1],W=Object(n.useState)(""),Y=Object(E.a)(W,2),K=Y[0],J=Y[1],X=Object(n.useState)(""),Z=Object(E.a)(X,2),$=Z[0],q=Z[1],ee=Object(n.useState)(""),te=Object(E.a)(ee,2),ae=te[0],ne=te[1],le=Object(n.useState)(),re=Object(E.a)(le,2),ce=re[0],ie=re[1],oe=Object(n.useState)(""),se=Object(E.a)(oe,2),ue=se[0],me=se[1],Ee=Object(n.useState)(""),de=Object(E.a)(Ee,2),fe=de[0],Oe=de[1],Ne=Object(n.useState)(""),be=Object(E.a)(Ne,2),pe=be[0],ge=be[1],he=Object(n.useState)(""),Ae=Object(E.a)(he,2),Te=Ae[0],Se=Ae[1],Re=Object(n.useState)(""),Me=Object(E.a)(Re,2),Ce=Me[0],ve=Me[1],je=Object(n.useState)(""),ye=Object(E.a)(je,2),Ie=ye[0],Ue=ye[1];Object(n.useEffect)(function(e){y(!0),h.a.get({id:t}).then(function(e){e.result===A.B?(H(e.data.email),P(e.data.username),z(e.data.firstName),q(e.data.lastName),J(e.data.fatherName),ne(e.data.gender),ie(new Date(e.data.birthday)),me(e.data.jobTitle),Oe(e.data.sector),ge(e.data.company),Se(e.data.city),ve(e.data.countryCode),Ue(e.data.phone),D(v({},w,{show:!1}))):D({show:!0,color:A.a,message:e.message}),y(!1)}).catch(function(e){D({show:!0,color:A.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),y(!1)})},[t,a,i]);return l.a.createElement(n.Fragment,null,l.a.createElement(N.Helmet,null,l.a.createElement("title",null,s("USERS.EDIT.EDIT")," - ",s("SITE_NAME"))),l.a.createElement(c.d,null,l.a.createElement(c.e,null,s("NAVBAR.USERS.USERS")),l.a.createElement(c.e,null,l.a.createElement(d.b,{to:"".concat(m.a.users.list,"/").concat(a)},s("all"===a?"NAVBAR.USERS.LIST":"NAVBAR.USERS.NEW_LIST"))),l.a.createElement(c.e,{active:!0},s("USERS.EDIT.EDIT"))),!!j&&l.a.createElement(p.a,null),!j&&l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=ce?Object(R.sprintf)("%04d-%02d-%02d",ce.getFullYear(),ce.getMonth()+1,ce.getDate()):"";y(!0),D(v({},w,{show:!1}));var n={id:t,email:_,username:B,firstName:Q,fatherName:K,lastName:$,gender:ae,birthday:a,jobTitle:ue,sector:fe,company:pe,city:Te,countryCode:Ce,phone:Ie};h.a.save(n).then(function(e){D({show:!0,color:e.result,message:e.message}),y(!1)}).catch(function(e){D({show:!0,color:A.a,message:s("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),y(!1)})}},l.a.createElement("div",{className:"grey-text"},l.a.createElement(c.M,null,l.a.createElement(c.i,{md:6},l.a.createElement(c.t,{id:"email",name:"email",type:"email",label:s("AUTH.EMAIL"),outline:!0,containerClass:"mb-0",value:_,getValue:H,onBlur:function(){return T(Object.assign({},g,{email:!0}))}},g.email&&!M.a.isEmail(_)&&l.a.createElement("div",{className:"text-left invalid-field"},0===_.length?s("COMMON.VALIDATION.REQUIRED",{field:s("AUTH.EMAIL")}):M.a.isEmail(_)?"":s("COMMON.VALIDATION.INVALID",{field:s("AUTH.EMAIL")})))),l.a.createElement(c.i,{md:6},l.a.createElement(c.t,{id:"username",name:"username",type:"text",label:s("AUTH.USERNAME"),outline:!0,containerClass:"mb-0",value:B,getValue:P,onBlur:function(){return T(Object.assign({},g,{username:!0}))}},g.username&&!M.a.isUsername(B)&&l.a.createElement("div",{className:"text-left invalid-field"},0===B.length?s("COMMON.VALIDATION.REQUIRED",{field:s("AUTH.USERNAME")}):B.length>A.H?s("COMMON.VALIDATION.MAX_LENGTH",{field:s("AUTH.USERNAME"),length:A.H}):M.a.isUsername(B)?"":s("COMMON.VALIDATION.INVALID",{field:s("AUTH.USERNAME")}))))),l.a.createElement(c.M,null,l.a.createElement(c.i,{md:6},l.a.createElement(c.t,{id:"firstName",name:"firstName",type:"text",label:s("AUTH.FIRST_NAME"),outline:!0,containerClass:"mt-3 mb-0",value:Q,getValue:z,onBlur:function(){return T(Object.assign({},g,{firstName:!0}))}},g.firstName&&0===Q.length&&l.a.createElement("div",{className:"text-left invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("AUTH.FIRST_NAME")})))),l.a.createElement(c.i,{md:6},l.a.createElement(c.t,{id:"fatherName",name:"fatherName",type:"text",label:s("AUTH.FATHER_NAME"),outline:!0,containerClass:"mt-3 mb-0",value:K,getValue:J,onBlur:function(){return T(Object.assign({},g,{fatherName:!0}))}},g.fatherName&&0===K.length&&l.a.createElement("div",{className:"text-left invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("AUTH.FATHER_NAME")})))),l.a.createElement(c.i,{md:6},l.a.createElement(c.t,{id:"lastName",name:"lastName",type:"text",label:s("AUTH.LAST_NAME"),outline:!0,containerClass:"mt-3 mb-0",value:$,getValue:q,onBlur:function(){return T(Object.assign({},g,{lastName:!0}))}},g.lastName&&0===$.length&&l.a.createElement("div",{className:"text-left invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("AUTH.LAST_NAME")}))))),l.a.createElement(c.M,null,l.a.createElement(c.i,{md:6},!!ae.length&&l.a.createElement(c.N,{label:s("AUTH.GENDER"),className:"mt-3 mb-0",selected:[ae],getValue:function(e){return ne(e[0])}},l.a.createElement(c.O,{selected:[ae]}),l.a.createElement(c.Q,null,l.a.createElement(c.P,{value:A.k,checked:ae===A.k},s("COMMON.GENDER.MALE")),l.a.createElement(c.P,{value:A.j,checked:ae===A.j},s("COMMON.GENDER.FEMALE")))),!!ae&&0===ae.length&&l.a.createElement("div",{className:"text-left invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("AUTH.GENDER")}))),l.a.createElement(c.i,{md:6},l.a.createElement(n.Fragment,null,l.a.createElement(c.l,{format:A.b,autoOk:!0,keyboard:!0,className:"date-picker",value:ce,getValue:function(e){return ie(e)}}),l.a.createElement("label",{className:"date-picker-label"},s("AUTH.BIRTHDAY"))))),l.a.createElement(c.M,null,l.a.createElement(c.i,{md:6},l.a.createElement(c.t,{id:"jobTitle",name:"jobTitle",type:"text",label:s("AUTH.JOB_TITLE"),outline:!0,containerClass:"mt-3 mb-0",value:ue,getValue:me,onBlur:function(){return T(Object.assign({},g,{jobTitle:!0}))}},g.jobTitle&&0===ue.length&&l.a.createElement("div",{className:"text-left invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("AUTH.JOB_TITLE")})))),l.a.createElement(c.i,{md:6},l.a.createElement(c.t,{id:"sector",name:"sector",type:"text",label:s("AUTH.SECTOR"),outline:!0,containerClass:"mt-3 mb-0",value:fe,getValue:Oe,onBlur:function(){return T(Object.assign({},g,{sector:!0}))}},g.sector&&0===fe.length&&l.a.createElement("div",{className:"text-left invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("AUTH.SECTOR")}))))),l.a.createElement(c.M,null,l.a.createElement(c.i,{md:6},l.a.createElement(c.t,{id:"company",name:"company",type:"text",label:s("AUTH.COMPANY"),outline:!0,containerClass:"mt-3 mb-0",value:pe,getValue:ge,onBlur:function(){return T(Object.assign({},g,{company:!0}))}},g.company&&0===pe.length&&l.a.createElement("div",{className:"text-left invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("AUTH.COMPANY")})))),l.a.createElement(c.i,{md:6},l.a.createElement(c.t,{id:"city",name:"city",type:"text",label:s("AUTH.CITY"),outline:!0,containerClass:"mt-3 mb-0",value:Te,getValue:Se,onBlur:function(){return T(Object.assign({},g,{city:!0}))}},g.city&&0===Te.length&&l.a.createElement("div",{className:"text-left invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("AUTH.CITY")}))))),l.a.createElement(c.M,null,l.a.createElement(c.i,{md:6},!!Ce.length&&l.a.createElement(c.N,{label:s("AUTH.COUNTRY_CODE"),className:"mt-3 mb-0",selected:[Ce],getValue:function(e){return ve(e[0])}},l.a.createElement(c.O,{selected:[Ce]}),l.a.createElement(c.Q,null,l.a.createElement(c.P,{value:A.r,checked:Ce===A.r},A.r," - ",s("COMMON.GCC_COUNTRIES.BAHRAIN")),l.a.createElement(c.P,{value:A.s,checked:Ce===A.s},A.s," - ",s("COMMON.GCC_COUNTRIES.KUWAIT")),l.a.createElement(c.P,{value:A.t,checked:Ce===A.t},A.t," - ",s("COMMON.GCC_COUNTRIES.OMAN")),l.a.createElement(c.P,{value:A.u,checked:Ce===A.u},A.u," - ",s("COMMON.GCC_COUNTRIES.QATAR")),l.a.createElement(c.P,{value:A.v,checked:Ce===A.v},A.v," - ",s("COMMON.GCC_COUNTRIES.SAUDI_ARABIA")),l.a.createElement(c.P,{value:A.w,checked:Ce===A.w},A.w," - ",s("COMMON.GCC_COUNTRIES.UAE")))),!!Ce&&0===Ce.length&&l.a.createElement("div",{className:"text-left invalid-field"},s("COMMON.VALIDATION.REQUIRED",{field:s("AUTH.COUNTRY_CODE")}))),l.a.createElement(c.i,{md:6},l.a.createElement(c.t,{id:"phone",name:"phone",type:"text",label:s("AUTH.PHONE"),outline:!0,containerClass:"mt-3 mb-0",value:Ie,getValue:Ue,onBlur:function(){return T(Object.assign({},g,{phone:!0}))}},(!!Ce.length||g.phone)&&(0===Ie.length||!M.a.isPhoneNumber("".concat(Ce).concat(Ie)))&&l.a.createElement("div",{className:"text-left invalid-field"},Ie.length?s("COMMON.VALIDATION.INVALID",{field:s("AUTH.PHONE")}):s("COMMON.VALIDATION.REQUIRED",{field:s("AUTH.PHONE")})))))),l.a.createElement(b.a,{in:w.show,classNames:"fade-transition",timeout:A.F,unmountOnExit:!0,appear:!0},l.a.createElement(c.b,{color:w.color,dismiss:!0,onClosed:function(){return D({})}},w.message)),l.a.createElement("div",{className:"mt-4 mb-3 text-left"},l.a.createElement(c.f,{type:"submit",size:"sm",color:"indigo",className:"z-depth-1a",disabled:j||!M.a.isEmail(_)||!B.length||B.length>A.H||!M.a.isUsername(B)||!Q.length||!K.length||!$.length||!ae.length||!ue.length||!fe.length||!pe.length||!Te.length||!Ce.length||!Ie.length||!M.a.isPhoneNumber("".concat(Ce).concat(Ie))},s("COMMON.BUTTON.SAVE")),l.a.createElement(c.f,{type:"button",size:"sm",color:"warning",className:"z-depth-1a",onClick:function(e){o.goBack()}},s("COMMON.BUTTON.BACK")))))};a(526),t.default=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(i.a,null),l.a.createElement(c.k,{className:"section"},l.a.createElement(r.d,null,l.a.createElement(r.b,{path:"".concat(m.a.users.list,"/:scope/:page?"),component:T}),l.a.createElement(r.b,{path:"".concat(m.a.users.edit,"/:id/:scope/:page?"),component:j}),l.a.createElement(r.b,{component:u.a}))),l.a.createElement(o.a,null),l.a.createElement(s.a,null))}}}]);