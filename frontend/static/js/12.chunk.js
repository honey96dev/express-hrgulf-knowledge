(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{424:function(e,t,a){"use strict";var n=a(48),c=a(0),l=a.n(c),r=a(4),i=a(21),o=a(432),m=a(26);t.a=function(e){var t=e.circle,a=e.current,u=e.pageCount,s=e.width,E=e.onChange,d=Object(m.b)().t,f=Object(c.useState)([]),b=Object(n.a)(f,2),O=b[0],g=b[1],p="ltr"===d("DIRECTION")?"left":"right",h="ltr"===d("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!s&&(s=o.isMobile?i.w:i.v);var t=Math.ceil(s/2),n=a-t<1?1:a-t,c=a+t-1>u?u:a+t-1;c-n<s&&(1===n&&(c=u<s?u:s),c===u&&(n=u-s+1<1?1:u-s+1));for(var l=[],r=n;r<=c;r++)l.push(r);g(l)},[a,u,s]),l.a.createElement(c.Fragment,null,u>0&&l.a.createElement(r.J,{circle:t},l.a.createElement(r.H,{disabled:1===a,onClick:function(){return E(1)}},l.a.createElement(r.I,{className:"page-link"},l.a.createElement(r.w,{icon:"angle-double-".concat(p)}))),l.a.createElement(r.H,{disabled:1===a,onClick:function(){return E(a-1)}},l.a.createElement(r.I,{className:"page-link"},l.a.createElement(r.w,{icon:"angle-".concat(p)}))),O.map(function(e,t){return l.a.createElement(r.H,{key:e,active:e===a,onClick:function(){return a!==e&&E(e)}},l.a.createElement(r.I,{className:"page-link"},e))}),l.a.createElement(r.H,{disabled:a===u,onClick:function(){return E(a+1)}},l.a.createElement(r.I,{className:"page-link"},l.a.createElement(r.w,{icon:"angle-".concat(h)}))),l.a.createElement(r.H,{disabled:a===u,onClick:function(){return E(u)}},l.a.createElement(r.I,{className:"page-link"},l.a.createElement(r.w,{icon:"angle-double-".concat(h)})))))}},427:function(e,t,a){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}a.d(t,"a",function(){return n})},428:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(26),r=a(127);a(126);t.a=function(e){var t=Object(l.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(r.a,{heading:t("COMMON.ERROR.SORRY"),message:t("COMMON.ERROR.NO_DATA")}))}},479:function(e,t,a){},480:function(e,t,a){},481:function(e,t,a){},482:function(e,t,a){},483:function(e,t,a){},500:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(30),r=a(4),i=a(123),o=a(124),m=a(125),u=a(122),s=a(48),E=a(26),d=a(120),f=a(423),b=a(418),O=a(34),g=(a(479),function(e){var t=e.id,a=(e.date,e.time,e.author,e.url),l=e.title,i=e.isFile,o=(e.detailLabel,e.detailLink),m=(Object(E.b)().t,Object(n.useRef)());return c.a.createElement(n.Fragment,null,c.a.createElement(r.n,{md:4,lg:3,className:"mb-3"},c.a.createElement(r.g,{className:"card-container"},!!i&&c.a.createElement(r.Y,{hover:!0,className:"rounded-top mb-0",onMouseEnter:function(e){m.current.play()},onMouseLeave:function(e){m.current.pause()}},c.a.createElement("video",{ref:m,className:"video-fluid video-media",loop:!0},c.a.createElement("source",{src:a})),c.a.createElement(O.b,{to:"".concat(o,"/").concat(t)},c.a.createElement(r.z,{overlay:"white-slight"}))),!i&&c.a.createElement(r.Y,{hover:!0,className:"rounded-top mb-0 video-media2"},c.a.createElement("iframe",{className:"video-fluid video-media2",title:a,src:a,frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}),c.a.createElement("a",{href:a,target:"_blank"},c.a.createElement(r.z,{overlay:"white-slight"}))),c.a.createElement(r.h,{className:"video-item-body"},c.a.createElement(r.j,{className:"video-item-title"},!!i&&c.a.createElement(O.b,{to:"".concat(o,"/").concat(t)},c.a.createElement("strong",null,l)),!i&&c.a.createElement("a",{href:a,target:"_blank"},c.a.createElement("strong",null,l)))))))}),p=function(e){var t=e.items,a=e.detailLabel,l=e.detailLink;e.handleDelete,t.length;return c.a.createElement("div",{className:"row text-left mt-3"},t.map(function(e,t){return c.a.createElement(n.Fragment,{key:e.id},c.a.createElement(g,{id:e.id,date:e.date,time:e.time,author:"".concat(e.firstName," ").concat(e.lastName),url:e.url,title:e.title,isFile:e.isFile,description:e.description,detailLabel:a,detailLink:l}))}))},h=a(121),N=a(428),v=a(424),j=a(36),w=a(40),R=a(49),I=function(e){return new Promise(function(t,a){Object(j.a)(w.d,R.a.video.list,e).then(function(e){t(e)},function(e){a(e)})})},C=function(e){return new Promise(function(t,a){Object(j.a)(w.d,R.a.video.get,e).then(function(e){t(e)},function(e){a(e)})})},k=a(21),S=a(9),M=(a(480),function(){var e=Object(l.h)().page,t=Object(E.b)().t,a=Object(l.g)(),i=Object(n.useState)(!0),o=Object(s.a)(i,2),m=o[0],u=o[1],O=Object(n.useState)({}),g=Object(s.a)(O,2),j=g[0],w=g[1],R=Object(n.useState)(0),C=Object(s.a)(R,2),M=C[0],D=C[1],T=Object(n.useState)([]),y=Object(s.a)(T,2),L=y[0],F=y[1],V=e?parseInt(e):1;Object(n.useEffect)(function(a){d.animateScroll.scrollToTop({duration:k.J}),I({page:e}).then(function(e){e.result===k.G?(D(e.pageCount),F(e.data)):w({show:!0,color:k.a,message:e.message}),u(!1)}).catch(function(e){w({show:!0,color:k.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),u(!1)})},[e,t]);var _=function(e){a.push("".concat(S.a.video.all,"/").concat(e))};return c.a.createElement(n.Fragment,null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,t("VIDEO.VIDEO")," - ",t("SITE_NAME"))),c.a.createElement(r.d,null,c.a.createElement(r.e,{active:!0},t("VIDEO.VIDEO"))),!!m&&c.a.createElement(h.a,null),!m&&!L.length&&c.a.createElement(N.a,null),!m&&!!L.length&&c.a.createElement(r.N,null,c.a.createElement(r.n,{md:12},c.a.createElement(b.a,{in:j.show,classNames:"fade-transition",timeout:k.J,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:j.color,dismiss:!0,onClosed:function(){return w({})}},j.message))),c.a.createElement(r.n,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(v.a,{circle:!0,current:V,pageCount:M,width:10,onChange:_}))),c.a.createElement(r.n,{md:12},c.a.createElement(p,{items:L,detailLabel:t("COMMON.BUTTON.DETAILS"),detailLink:S.a.video.detail})),c.a.createElement(r.n,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(v.a,{circle:!0,current:V,pageCount:M,width:10,onChange:_})))))}),D=a(427),T=a(35),y=(a(481),function(e){var t=e.data;Object(E.b)().t;return c.a.createElement(n.Fragment,null,c.a.createElement("h3",{className:"font-weight-bold my-3 p-0 text-center"},c.a.createElement("strong",null,t.title)),c.a.createElement("div",{className:"infor-section text-left"},c.a.createElement("p",{className:"mr-2"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(r.w,{icon:"calendar-alt"})),t.date),c.a.createElement("p",{className:"mr-2"},t.time)),c.a.createElement("div",{className:"text-center"},c.a.createElement("video",{className:"post-detail-media view overlay rounded z-depth-1-half mb-4",autoPlay:!0,loop:!0},c.a.createElement("source",{src:t.url}))))}),L=(a(482),function(e){Object(D.a)(e);var t=Object(l.h)().id,a=Object(E.b)().t,i=(Object(l.g)(),Object(T.c)(function(e){return e}).auth),o=Object(n.useState)(!0),m=Object(s.a)(o,2),b=m[0],g=m[1],p=Object(n.useState)({}),N=Object(s.a)(p,2),v=(N[0],N[1]),j=Object(n.useState)(),w=Object(s.a)(j,2),R=w[0],I=w[1],M=Object(n.useState)([]),L=Object(s.a)(M,2);L[0],L[1];Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:k.J}),C({id:t,userId:i.user?i.user.id:void 0}).then(function(e){e.result===k.G?I(e.data):v({show:!0,color:k.a,message:e.message}),g(!1)}).catch(function(e){console.log(e),v({show:!0,color:k.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),g(!1)})},[t]);return c.a.createElement("div",null,c.a.createElement(f.Helmet,null,c.a.createElement("title",null,a("VIDEO.DETAIL.VIDEO_DETAIL")," - ",a("SITE_NAME"))),c.a.createElement(r.d,null,c.a.createElement(r.e,null,c.a.createElement(O.b,{to:S.a.video.all},a("VIDEO.VIDEO")))),!!b&&c.a.createElement(h.a,null),!b&&(!R||!R.id)&&c.a.createElement(u.a,null),!b&&!!R&&!!R.id&&c.a.createElement(n.Fragment,null,c.a.createElement(r.N,null,c.a.createElement(r.n,{md:9},c.a.createElement(y,{data:R})),c.a.createElement(r.n,{md:3}))))});a(483),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(i.a,null),c.a.createElement(r.p,{className:"section"},c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"".concat(S.a.video.detail,"/:id"),component:L}),c.a.createElement(l.b,{path:"".concat(S.a.video.all,"/:page?"),exact:!0,component:M}),c.a.createElement(l.b,{component:u.a}))),c.a.createElement(o.a,null),c.a.createElement(m.a,null))}}}]);