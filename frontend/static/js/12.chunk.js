(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{455:function(e,t,a){"use strict";var n=a(42),c=a(0),l=a.n(c),r=a(4),i=a(13),o=a(464),m=a(29);t.a=function(e){var t=e.circle,a=e.current,u=e.pageCount,s=e.width,E=e.onChange,d=Object(m.b)().t,b=Object(c.useState)([]),f=Object(n.a)(b,2),O=f[0],p=f[1],g="ltr"===d("DIRECTION")?"left":"right",h="ltr"===d("DIRECTION")?"right":"left";return Object(c.useEffect)(function(e){!s&&(s=o.isMobile?i.A:i.z);var t=Math.ceil(s/2),n=a-t<1?1:a-t,c=a+t-1>u?u:a+t-1;c-n<s&&(1===n&&(c=u<s?u:s),c===u&&(n=u-s+1<1?1:u-s+1));for(var l=[],r=n;r<=c;r++)l.push(r);p(l)},[a,u,s]),l.a.createElement(c.Fragment,null,u>0&&l.a.createElement(r.L,{circle:t},l.a.createElement(r.J,{disabled:1===a,onClick:function(){return E(1)}},l.a.createElement(r.K,{className:"page-link"},l.a.createElement(r.y,{icon:"angle-double-".concat(g)}))),l.a.createElement(r.J,{disabled:1===a,onClick:function(){return E(a-1)}},l.a.createElement(r.K,{className:"page-link"},l.a.createElement(r.y,{icon:"angle-".concat(g)}))),O.map(function(e,t){return l.a.createElement(r.J,{key:e,active:e===a,onClick:function(){return a!==e&&E(e)}},l.a.createElement(r.K,{className:"page-link"},e))}),l.a.createElement(r.J,{disabled:a===u,onClick:function(){return E(a+1)}},l.a.createElement(r.K,{className:"page-link"},l.a.createElement(r.y,{icon:"angle-".concat(h)}))),l.a.createElement(r.J,{disabled:a===u,onClick:function(){return E(u)}},l.a.createElement(r.K,{className:"page-link"},l.a.createElement(r.y,{icon:"angle-double-".concat(h)})))))}},460:function(e,t,a){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}a.d(t,"a",function(){return n})},461:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(29),r=a(130);a(129);t.a=function(e){var t=e.message,a=Object(l.b)().t;return c.a.createElement("div",{className:"loading-page"},c.a.createElement(r.a,{heading:a("COMMON.ERROR.SORRY"),message:t||a("COMMON.ERROR.NO_DATA")}))}},518:function(e,t,a){},519:function(e,t,a){},520:function(e,t,a){},521:function(e,t,a){},522:function(e,t,a){},546:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(34),r=a(4),i=a(126),o=a(127),m=a(128),u=a(125),s=a(42),E=a(29),d=a(123),b=a(454),f=a(449),O=a(36),p=(a(518),function(e){var t=e.id,a=(e.date,e.time,e.author,e.url),l=e.title,i=e.isFile,o=(e.detailLabel,e.detailLink),m=(Object(E.b)().t,Object(n.useRef)());return c.a.createElement(n.Fragment,null,c.a.createElement(r.p,{md:4,lg:3,className:"mb-3"},c.a.createElement(r.h,{className:"card-container"},!!i&&c.a.createElement(r.ab,{hover:!0,className:"rounded-top mb-0",onMouseEnter:function(e){m.current.play()},onMouseLeave:function(e){m.current.pause()}},c.a.createElement("video",{ref:m,className:"video-fluid video-media",loop:!0},c.a.createElement("source",{src:a})),c.a.createElement(O.b,{to:"".concat(o,"/").concat(t)},c.a.createElement(r.B,{overlay:"white-slight"}))),!i&&c.a.createElement(r.ab,{hover:!0,className:"rounded-top mb-0 video-media2"},c.a.createElement("iframe",{className:"video-fluid video-media2",title:a,src:function(e){var t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?"//www.youtube.com/embed/".concat(t[2]):e}(a),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}),c.a.createElement("a",{href:a,target:"_blank"},c.a.createElement(r.B,{overlay:"white-slight"}))),c.a.createElement(r.i,{className:"video-item-body"},c.a.createElement(r.l,{className:"video-item-title"},!!i&&c.a.createElement(O.b,{to:"".concat(o,"/").concat(t)},c.a.createElement("strong",null,l)),!i&&c.a.createElement("a",{href:a,target:"_blank"},c.a.createElement("strong",null,l)))))))}),g=function(e){var t=e.items,a=e.detailLabel,l=e.detailLink;e.handleDelete,t.length;return c.a.createElement("div",{className:"row text-left mt-3"},t.map(function(e,t){return c.a.createElement(n.Fragment,{key:e.id},c.a.createElement(p,{id:e.id,date:e.date,time:e.time,author:"".concat(e.firstName," ").concat(e.lastName),url:e.url,title:e.title,isFile:e.isFile,description:e.description,detailLabel:a,detailLink:l}))}))},h=a(124),v=a(461),N=a(455),j=a(30),w=a(33),R=a(40),C=function(e){return new Promise(function(t,a){Object(j.a)(w.d,R.a.video.list,e).then(function(e){t(e)},function(e){a(e)})})},k=function(e){return new Promise(function(t,a){Object(j.a)(w.d,R.a.video.get,e).then(function(e){t(e)},function(e){a(e)})})},S=a(13),y=a(9),I=(a(519),function(){var e=Object(l.h)().page,t=Object(E.b)().t,a=Object(l.g)(),i=Object(n.useState)(!0),o=Object(s.a)(i,2),m=o[0],u=o[1],O=Object(n.useState)({}),p=Object(s.a)(O,2),j=p[0],w=p[1],R=Object(n.useState)(0),k=Object(s.a)(R,2),I=k[0],M=k[1],D=Object(n.useState)([]),T=Object(s.a)(D,2),L=T[0],V=T[1],F=e?parseInt(e):1;Object(n.useEffect)(function(a){d.animateScroll.scrollToTop({duration:S.V}),C({page:e}).then(function(e){e.result===S.S?(M(e.pageCount),V(e.data)):w({show:!0,color:S.a,message:e.message}),u(!1)}).catch(function(e){w({show:!0,color:S.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),u(!1)})},[e,t]);var _=function(e){a.push("".concat(y.a.video.all,"/").concat(e))};return c.a.createElement(n.Fragment,null,c.a.createElement(b.Helmet,null,c.a.createElement("title",null,t("VIDEO.VIDEO")," - ",t("SITE_NAME"))),c.a.createElement(r.e,null,c.a.createElement(r.f,{active:!0},t("VIDEO.VIDEO"))),!!m&&c.a.createElement(h.a,null),!m&&!L.length&&c.a.createElement(v.a,null),!m&&!!L.length&&c.a.createElement(r.P,null,c.a.createElement(r.p,{md:12},c.a.createElement(f.a,{in:j.show,classNames:"fade-transition",timeout:S.V,unmountOnExit:!0,appear:!0},c.a.createElement(r.b,{color:j.color,dismiss:!0,onClosed:function(){return w({})}},j.message))),c.a.createElement(r.p,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(N.a,{circle:!0,current:F,pageCount:I,width:10,onChange:_}))),c.a.createElement(r.p,{md:12},c.a.createElement(g,{items:L,detailLabel:t("COMMON.BUTTON.DETAILS"),detailLink:y.a.video.detail})),c.a.createElement(r.p,{md:12,className:"text-center"},c.a.createElement("div",{className:"mt-5"},c.a.createElement(N.a,{circle:!0,current:F,pageCount:I,width:10,onChange:_})))))}),M=a(460),D=a(37),T=(a(520),function(e){var t=e.data;Object(E.b)().t;return c.a.createElement(n.Fragment,null,c.a.createElement("h3",{className:"font-weight-bold my-3 p-0 text-center h3-response"},c.a.createElement("strong",null,t.title)),c.a.createElement("div",{className:"infor-section text-left"},c.a.createElement("p",{className:"mr-2"},c.a.createElement("span",{className:"mr-2"},c.a.createElement(r.y,{icon:"calendar-alt"})),t.date),c.a.createElement("p",{className:"mr-2"},t.time)),c.a.createElement("div",{className:"text-center"},c.a.createElement("video",{className:"post-detail-media view overlay rounded z-depth-1-half mb-4",autoPlay:!0,loop:!0},c.a.createElement("source",{src:t.url}))))}),L=(a(521),function(e){Object(M.a)(e);var t=Object(l.h)().id,a=Object(E.b)().t,i=(Object(l.g)(),Object(D.c)(function(e){return e}).auth),o=Object(n.useState)(!0),m=Object(s.a)(o,2),f=m[0],p=m[1],g=Object(n.useState)({}),v=Object(s.a)(g,2),N=(v[0],v[1]),j=Object(n.useState)(),w=Object(s.a)(j,2),R=w[0],C=w[1],I=Object(n.useState)([]),L=Object(s.a)(I,2);L[0],L[1];Object(n.useEffect)(function(e){d.animateScroll.scrollToTop({duration:S.V}),k({id:t,userId:i.user?i.user.id:void 0}).then(function(e){e.result===S.S?C(e.data):N({show:!0,color:S.a,message:e.message}),p(!1)}).catch(function(e){N({show:!0,color:S.a,message:a("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),p(!1)})},[t]);return c.a.createElement("div",null,c.a.createElement(b.Helmet,null,c.a.createElement("title",null,a("VIDEO.DETAIL.VIDEO_DETAIL")," - ",a("SITE_NAME"))),c.a.createElement(r.e,null,c.a.createElement(r.f,null,c.a.createElement(O.b,{to:y.a.video.all},a("VIDEO.VIDEO")))),!!f&&c.a.createElement(h.a,null),!f&&(!R||!R.id)&&c.a.createElement(u.a,null),!f&&!!R&&!!R.id&&c.a.createElement(n.Fragment,null,c.a.createElement(r.P,null,c.a.createElement(r.p,{md:9},c.a.createElement(T,{data:R})),c.a.createElement(r.p,{md:3}))))});a(522),t.default=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(i.a,null),c.a.createElement(r.r,{className:"section"},c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"".concat(y.a.video.detail,"/:id"),component:L}),c.a.createElement(l.b,{path:"".concat(y.a.video.all,"/:page?"),exact:!0,component:I}),c.a.createElement(l.b,{component:u.a}))),c.a.createElement(o.a,null),c.a.createElement(m.a,null))}}}]);