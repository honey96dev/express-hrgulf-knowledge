(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{415:function(e,t,a){"use strict";var n=a(47),c=a(0),r=a.n(c),i=a(5),l=a(31),s=a(423),o=a(24);t.a=function(e){var t=e.circle,a=e.current,m=e.pageCount,u=e.width,d=e.onChange,E=Object(o.b)().t,f=Object(c.useState)([]),p=Object(n.a)(f,2),b=p[0],h=p[1],g="ltr"===E("DIRECTION")?"left":"right",N="ltr"===E("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!u&&(u=s.isMobile?l.w:l.v);var t=Math.ceil(u/2),n=a-t<1?1:a-t,c=a+t-1>m?m:a+t-1;c-n<u&&(1===n&&(c=m<u?m:u),c===m&&(n=m-u+1<1?1:m-u+1));for(var r=[],i=n;i<=c;i++)r.push(i);h(r)},[a,m,u]),r.a.createElement(c.Fragment,null,m>0&&r.a.createElement(i.G,{circle:t},r.a.createElement(i.E,{disabled:1===a,onClick:function(){return d(1)}},r.a.createElement(i.F,{className:"page-link"},r.a.createElement(i.t,{icon:"angle-double-".concat(g)}))),r.a.createElement(i.E,{disabled:1===a,onClick:function(){return d(a-1)}},r.a.createElement(i.F,{className:"page-link"},r.a.createElement(i.t,{icon:"angle-".concat(g)}))),b.map(function(e,t){return r.a.createElement(i.E,{key:e,active:e===a,onClick:function(){return a!==e&&d(e)}},r.a.createElement(i.F,{className:"page-link"},e))}),r.a.createElement(i.E,{disabled:a===m,onClick:function(){return d(a+1)}},r.a.createElement(i.F,{className:"page-link"},r.a.createElement(i.t,{icon:"angle-".concat(N)}))),r.a.createElement(i.E,{disabled:a===m,onClick:function(){return d(m)}},r.a.createElement(i.F,{className:"page-link"},r.a.createElement(i.t,{icon:"angle-double-".concat(N)})))))}},416:function(e,t,a){"use strict";var n=a(34),c=a(39),r=a(48);a(31);t.a={list:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.list,e).then(function(e){t(e)},function(e){a(e)})})},latest:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.latest,e).then(function(e){t(e)},function(e){a(e)})})},save:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.save,e).then(function(e){t(e)},function(e){a(e)})})},get:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.get,e).then(function(e){t(e)},function(e){a(e)})})},post2Topics:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.post2Topics,e).then(function(e){t(e)},function(e){a(e)})})},commentList:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.commentList,e).then(function(e){t(e)},function(e){a(e)})})},writeComment:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.writeComment,e).then(function(e){t(e)},function(e){a(e)})})},topics:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.posts.topics,e).then(function(e){t(e)},function(e){a(e)})})}}},417:function(e,t,a){var n;!function(){"use strict";var c={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function r(e){return function(e,t){var a,n,i,l,s,o,m,u,d,E=1,f=e.length,p="";for(n=0;n<f;n++)if("string"===typeof e[n])p+=e[n];else if("object"===typeof e[n]){if((l=e[n]).keys)for(a=t[E],i=0;i<l.keys.length;i++){if(void 0==a)throw new Error(r('[sprintf] Cannot access property "%s" of undefined value "%s"',l.keys[i],l.keys[i-1]));a=a[l.keys[i]]}else a=l.param_no?t[l.param_no]:t[E++];if(c.not_type.test(l.type)&&c.not_primitive.test(l.type)&&a instanceof Function&&(a=a()),c.numeric_arg.test(l.type)&&"number"!==typeof a&&isNaN(a))throw new TypeError(r("[sprintf] expecting number but found %T",a));switch(c.number.test(l.type)&&(u=a>=0),l.type){case"b":a=parseInt(a,10).toString(2);break;case"c":a=String.fromCharCode(parseInt(a,10));break;case"d":case"i":a=parseInt(a,10);break;case"j":a=JSON.stringify(a,null,l.width?parseInt(l.width):0);break;case"e":a=l.precision?parseFloat(a).toExponential(l.precision):parseFloat(a).toExponential();break;case"f":a=l.precision?parseFloat(a).toFixed(l.precision):parseFloat(a);break;case"g":a=l.precision?String(Number(a.toPrecision(l.precision))):parseFloat(a);break;case"o":a=(parseInt(a,10)>>>0).toString(8);break;case"s":a=String(a),a=l.precision?a.substring(0,l.precision):a;break;case"t":a=String(!!a),a=l.precision?a.substring(0,l.precision):a;break;case"T":a=Object.prototype.toString.call(a).slice(8,-1).toLowerCase(),a=l.precision?a.substring(0,l.precision):a;break;case"u":a=parseInt(a,10)>>>0;break;case"v":a=a.valueOf(),a=l.precision?a.substring(0,l.precision):a;break;case"x":a=(parseInt(a,10)>>>0).toString(16);break;case"X":a=(parseInt(a,10)>>>0).toString(16).toUpperCase()}c.json.test(l.type)?p+=a:(!c.number.test(l.type)||u&&!l.sign?d="":(d=u?"+":"-",a=a.toString().replace(c.sign,"")),o=l.pad_char?"0"===l.pad_char?"0":l.pad_char.charAt(1):" ",m=l.width-(d+a).length,s=l.width&&m>0?o.repeat(m):"",p+=l.align?d+a+s:"0"===o?d+s+a:s+d+a)}return p}(function(e){if(l[e])return l[e];var t,a=e,n=[],r=0;for(;a;){if(null!==(t=c.text.exec(a)))n.push(t[0]);else if(null!==(t=c.modulo.exec(a)))n.push("%");else{if(null===(t=c.placeholder.exec(a)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){r|=1;var i=[],s=t[2],o=[];if(null===(o=c.key.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(i.push(o[1]);""!==(s=s.substring(o[0].length));)if(null!==(o=c.key_access.exec(s)))i.push(o[1]);else{if(null===(o=c.index_access.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");i.push(o[1])}t[2]=i}else r|=2;if(3===r)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");n.push({placeholder:t[0],param_no:t[1],keys:t[2],sign:t[3],pad_char:t[4],align:t[5],width:t[6],precision:t[7],type:t[8]})}a=a.substring(t[0].length)}return l[e]=n}(e),arguments)}function i(e,t){return r.apply(null,[e].concat(t||[]))}var l=Object.create(null);t.sprintf=r,t.vsprintf=i,"undefined"!==typeof window&&(window.sprintf=r,window.vsprintf=i,void 0===(n=function(){return{sprintf:r,vsprintf:i}}.call(t,a,t,e))||(e.exports=n))}()},418:function(e,t,a){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}a.d(t,"a",function(){return n})},419:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(24),i=a(124);a(123);t.a=function(e){var t=Object(r.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(i.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},424:function(e,t,a){"use strict";var n=a(34),c=a(39),r=a(48);t.a={list:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.news.list,e).then(function(e){t(e)},function(e){a(e)})})},latest:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.news.list,e).then(function(e){t(e)},function(e){a(e)})})},get:function(e){return new Promise(function(t,a){Object(n.a)(c.d,r.a.news.get,e).then(function(e){t(e)},function(e){a(e)})})}}},430:function(e,t,a){},431:function(e,t,a){},433:function(e,t,a){"use strict";var n=a(47),c=a(0),r=a.n(c),i=a(24),l=a(31),s=a(416),o=a(5),m=a(32),u=(a(430),function(e){var t=e.id,a=e.date,n=e.time,c=e.author,l=e.comments,s=(e.media,e.title),u=(e.description,e.detailLabel,e.detailLink);Object(i.b)().t;return r.a.createElement(o.K,null,r.a.createElement(o.k,{md:12},r.a.createElement("h5",{className:"mb-3 p-0"},r.a.createElement(m.b,{to:"".concat(u,"/").concat(t)},r.a.createElement("strong",null,s))),r.a.createElement("div",{className:"infor-section"},r.a.createElement("p",{className:"mb-0 mr-2"},r.a.createElement("span",{className:"mr-2"},r.a.createElement(o.t,{icon:"calendar-alt"})),a),r.a.createElement("p",{className:"mb-0 mr-2"},n)),r.a.createElement("div",{className:"infor-section"},r.a.createElement("p",{className:"mb-0"},r.a.createElement("span",{className:"mr-2"},r.a.createElement(o.t,{icon:"user"})),c)),r.a.createElement("div",{className:"infor-section"},r.a.createElement("p",{className:"mb-0"},r.a.createElement("span",{className:"mr-2"},r.a.createElement(o.t,{icon:"comments"})),l))))});a(417),a(48),t.a=function(e){var t=e.detailLabel,a=e.detailLink,o=Object(i.b)().t,m=Object(c.useState)([]),d=Object(n.a)(m,2),E=d[0],f=d[1],p=(o("DIRECTION"),E.length-1);return Object(c.useEffect)(function(e){s.a.latest({limit:3}).then(function(e){e.result===l.B&&f(e.data)}).catch(function(e){})},[t,a,o]),r.a.createElement("div",{className:"text-left"},r.a.createElement("h5",{className:"mb-3 p-0"},o("POSTS.LATEST_POSTS")),E.map(function(e,n){return r.a.createElement(c.Fragment,{key:e.id},r.a.createElement(u,{id:e.id,date:e.date,time:e.time,author:"".concat(e.firstName," ").concat(e.lastName),comments:e.comments,media:e.media,title:e.title,description:e.description,detailLabel:t,detailLink:a}),n<p&&r.a.createElement("hr",{className:"my-2"}))}))}},434:function(e,t,a){"use strict";var n=a(47),c=a(0),r=a.n(c),i=a(5),l=a(32),s=a(24),o=a(31),m=(a(431),function(e){var t=e.id,a=e.date,n=e.time,c=(e.author,e.comments,e.media,e.title),s=(e.description,e.detailLabel,e.detailLink);return r.a.createElement(i.K,null,r.a.createElement(i.k,{md:12},r.a.createElement("h5",{className:"mb-3 p-0"},r.a.createElement(l.b,{to:"".concat(s,"/").concat(t)},r.a.createElement("strong",null,c))),r.a.createElement("div",{className:"infor-section"},r.a.createElement("p",{className:"mb-0 mr-2"},r.a.createElement("span",{className:"mr-2"},r.a.createElement(i.t,{icon:"calendar-alt"})),a),r.a.createElement("p",{className:"mb-0 mr-2"},n))))}),u=a(424);t.a=function(e){var t=e.detailLabel,a=e.detailLink,i=Object(s.b)().t,l=Object(c.useState)([]),d=Object(n.a)(l,2),E=d[0],f=d[1],p=(i("DIRECTION"),E.length-1);return Object(c.useEffect)(function(e){u.a.latest({limit:3}).then(function(e){e.result===o.B&&f(e.data)}).catch(function(e){})},[t,a,i]),r.a.createElement("div",{className:"text-left"},r.a.createElement("h5",{className:"mb-3 p-0"},i("NEWS.LATEST_NEWS")),E.map(function(e,n){return r.a.createElement(c.Fragment,{key:e.id},r.a.createElement(m,{id:e.id,date:e.date,time:e.time,author:"".concat(e.firstName," ").concat(e.lastName),title:e.title,description:e.description,detailLabel:t,detailLink:a}),n<p&&r.a.createElement("hr",{className:"my-2"}))}))}},461:function(e,t,a){},462:function(e,t,a){},463:function(e,t,a){},464:function(e,t,a){},465:function(e,t,a){},489:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),i=a(5),l=a(120),s=a(121),o=a(122),m=a(119),u=a(47),d=a(24),E=a(117),f=a(414),p=a(409),b=a(417),h=a(32),g=a(31),N=(a(461),function(e){var t=e.id,a=e.date,n=e.time,r=(e.author,e.comments,e.media),l=e.title,s=e.description,o=e.detailLabel,m=e.detailLink,u=(Object(d.b)().t,s.length>g.r?s.substr(0,g.r)+" ...":s);return c.a.createElement(i.K,null,c.a.createElement(i.k,{md:"5",lg:"5",xl:"4"},c.a.createElement(i.U,{hover:!0,className:"rounded z-depth-1-half mb-lg-0 mb-4"},c.a.createElement("img",{className:"img-fluid post-media",src:r,alt:""}),c.a.createElement(h.b,{to:"".concat(m,"/").concat(t)},c.a.createElement(i.w,{overlay:"white-slight"})))),c.a.createElement(i.k,{md:"7",lg:"7",xl:"8"},c.a.createElement("h3",{className:"font-weight-bold mb-3 p-0"},c.a.createElement(h.b,{to:"".concat(m,"/").concat(t)},c.a.createElement("strong",null,l))),c.a.createElement("div",{className:"infor-section"},c.a.createElement("p",{className:"mr-2"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(i.t,{icon:"calendar-alt"})),a),c.a.createElement("p",{className:"mr-2"},n)),c.a.createElement("p",{className:"dark-grey-text"},u),c.a.createElement(h.b,{to:"".concat(m,"/").concat(t)},c.a.createElement(i.e,{size:"sm",color:"indigo",flat:!0},o))))}),O=function(e){var t=e.items,a=e.detailLabel,r=e.detailLink,i=t.length-1;return c.a.createElement("div",{className:"text-left mt-3"},t.map(function(e,t){return c.a.createElement(n.Fragment,{key:e.id},c.a.createElement(N,{id:e.id,date:e.date,time:e.time,author:"".concat(e.firstName," ").concat(e.lastName),title:e.title,description:e.description,media:e.media,detailLabel:a,detailLink:r}),t<i&&c.a.createElement("hr",{className:"my-5"}))}))},v=a(118),w=a(419),k=a(415),j=a(424),S=a(9),y=a(48),x=(a(462),function(){var e=Object(r.h)().page,t=Object(d.b)().t,a=Object(r.g)(),l=Object(n.useState)(!0),s=Object(u.a)(l,2),o=s[0],m=s[1],h=Object(n.useState)({}),N=Object(u.a)(h,2),x=N[0],T=N[1],_=Object(n.useState)(0),C=Object(u.a)(_,2),L=C[0],R=C[1],I=Object(n.useState)([]),M=Object(u.a)(I,2),F=M[0],W=M[1],A=e?parseInt(e):1;Object(n.useEffect)(function(a){E.animateScroll.scrollToTop({duration:g.E}),j.a.list({page:e}).then(function(e){if(e.result===g.B){R(e.pageCount);var t=!0,a=!1,n=void 0;try{for(var c,r=e.data[Symbol.iterator]();!(t=(c=r.next()).done);t=!0){var i=c.value;i.media=i.media.startsWith("http://")||i.media.startsWith("https://")?i.media:Object(b.sprintf)("%s%s",y.a.assetsBaseUrl,i.media)}}catch(l){a=!0,n=l}finally{try{t||null==r.return||r.return()}finally{if(a)throw n}}W(e.data)}else T({show:!0,color:g.a,message:e.message});m(!1)}).catch(function(e){T({show:!0,color:g.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),m(!1)})},[e,t]);var P=function(e){a.push("".concat(S.a.news.all,"/").concat(e))};return c.a.createElement(n.Fragment,null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,t("NEWS.NEWS")," - ",t("SITE_NAME"))),c.a.createElement(i.c,null,c.a.createElement(i.d,{active:!0},t("NEWS.NEWS"))),!!o&&c.a.createElement(v.a,null),!o&&!F.length&&c.a.createElement(w.a,null),!o&&!!F.length&&c.a.createElement(i.K,null,c.a.createElement(i.k,{md:12},c.a.createElement(p.a,{in:x.show,classNames:"fade-transition",timeout:g.E,unmountOnExit:!0,appear:!0},c.a.createElement(i.b,{color:x.color,dismiss:!0,onClosed:function(){return T({})}},x.message))),c.a.createElement(i.k,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(k.a,{circle:!0,current:A,pageCount:L,width:10,onChange:P}))),c.a.createElement(i.k,{md:12},c.a.createElement(O,{items:F,detailLabel:t("COMMON.BUTTON.READ_MORE"),detailLink:S.a.news.detail})),c.a.createElement(i.k,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(k.a,{circle:!0,current:A,pageCount:L,width:10,onChange:P})))))}),T=a(418),_=a(33),C=(a(463),function(e){var t=e.data;Object(d.b)().t;return c.a.createElement(n.Fragment,null,c.a.createElement("h3",{className:"font-weight-bold my-3 p-0 text-center"},c.a.createElement("strong",null,t.title)),c.a.createElement("div",{className:"infor-section text-left"},c.a.createElement("p",{className:"mr-2"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(i.t,{icon:"calendar-alt"})),t.date),c.a.createElement("p",{className:"mr-2"},t.time)),c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:t.media,className:"post-detail-media view overlay rounded z-depth-1-half mb-4"})),c.a.createElement("div",null,c.a.createElement("div",{className:"text-left"},t.description)),c.a.createElement("div",{className:"mt-4 text-left"},c.a.createElement("a",{href:t.url,target:"_blank"},t.url)))}),L=a(433),R=a(434),I=(a(464),function(e){Object(T.a)(e);var t=Object(r.h)().id,a=Object(d.b)().t,l=Object(r.g)(),s=Object(_.c)(function(e){return e}).auth,o=Object(n.useState)(!0),p=Object(u.a)(o,2),N=p[0],O=p[1],w=Object(n.useState)({}),k=Object(u.a)(w,2),x=(k[0],k[1]),I=Object(n.useState)(),M=Object(u.a)(I,2),F=M[0],W=M[1],A=Object(n.useState)([]),P=Object(u.a)(A,2);P[0],P[1];Object(n.useEffect)(function(e){E.animateScroll.scrollToTop({duration:g.E}),j.a.get({id:t,userId:s.user?s.user.id:void 0}).then(function(e){e.result===g.B?(e.data.media=e.data.media.startsWith("http://")||e.data.media.startsWith("https://")?e.data.media:Object(b.sprintf)("%s%s",y.a.assetsBaseUrl,e.data.media),W(e.data)):x({show:!0,color:g.a,message:e.message}),O(!1)}).catch(function(e){console.log(e),x({show:!0,color:g.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),O(!1)})},[t]);return c.a.createElement("div",null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,a("NEWS.DETAIL.NEWS_DETAIL")," - ",a("SITE_NAME"))),c.a.createElement(i.c,null,c.a.createElement(i.d,null,c.a.createElement(h.b,{to:S.a.news.all},a("NEWS.NEWS"))),c.a.createElement(i.d,{active:!0},a("NEWS.DETAIL.NEWS_DETAIL"))),!!N&&c.a.createElement(v.a,null),!N&&(!F||!F.id)&&c.a.createElement(m.a,null),!N&&!!F&&!!F.id&&c.a.createElement(n.Fragment,null,c.a.createElement(i.K,null,c.a.createElement(i.k,{md:12},c.a.createElement("div",{className:"full-width text-left"},c.a.createElement(i.e,{size:"sm",color:"warning",onClick:function(e){l.goBack()}},a("COMMON.BUTTON.BACK"))))),c.a.createElement(i.K,null,c.a.createElement(i.k,{md:8},c.a.createElement(C,{data:F})),c.a.createElement(i.k,{md:4},c.a.createElement("div",{className:"mt-10"},c.a.createElement(L.a,{detailLink:S.a.posts.detail,detailLabel:a("COMMON.BUTTON.DETAILS")})),c.a.createElement("div",{className:"mt-10"},c.a.createElement(R.a,{detailLink:S.a.news.detail,detailLabel:a("COMMON.BUTTON.DETAILS")}))))))});a(465),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(l.a,null),c.a.createElement(i.m,{className:"section"},c.a.createElement(r.d,null,c.a.createElement(r.b,{path:"".concat(S.a.news.detail,"/:id"),component:I}),c.a.createElement(r.b,{path:"".concat(S.a.news.all,"/:page?"),exact:!0,component:x}),c.a.createElement(r.b,{component:m.a}))),c.a.createElement(s.a,null),c.a.createElement(o.a,null))}}}]);