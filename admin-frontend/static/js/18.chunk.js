(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{521:function(e,t,a){},522:function(e,t,a){},530:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),s=a(4),l=a(27),o=a(10),m=a(129),u=a(130),i=a(132),O=a(131),E=a(447),b=a.n(E),p=a(448),R=a(53),f=a(449),d=a(464),h=a(30),N=a(127),g=a(445),U=a(440),A=a(454),M=a(51),j=a(5),v=a(128),S=a(38),F=a(42),L=function(e){return new Promise(function(t,a){Object(S.a)(F.d,M.a.about.loadAboutUs,e).then(function(e){t(e)},function(e){a(e)})})},x=function(e){return new Promise(function(t,a){Object(S.a)(F.d,M.a.about.saveAboutUsBrochure,e).then(function(e){t(e)},function(e){a(e)})})},w=function(e){return new Promise(function(t,a){Object(S.a)(F.d,M.a.about.saveAboutUsVideo,e).then(function(e){t(e)},function(e){a(e)})})},I=(a(521),function(e){Object(f.a)(e);var t=Object(l.b)().t,a=(Object(c.g)(),Object(h.c)(function(e){return e}).auth,Object(n.useState)(!0)),o=Object(R.a)(a,2),m=o[0],u=o[1],i=Object(n.useState)({}),O=Object(R.a)(i,2),E=O[0],S=O[1],F=Object(n.useState)({}),I=Object(R.a)(F,2),_=(I[0],I[1],Object(n.useState)({})),C=Object(R.a)(_,2),D=(C[0],C[1],Object(n.useState)("")),B=Object(R.a)(D,2),T=B[0],V=B[1],P=Object(n.useState)(""),k=Object(R.a)(P,2),z=k[0],W=k[1],y=Object(n.useState)(null),H=Object(R.a)(y,2),K=H[0],G=H[1],J=Object(n.useState)(""),X=Object(R.a)(J,2),Z=X[0],q=X[1],Q=Object(n.useState)(""),Y=Object(R.a)(Q,2),$=Y[0],ee=Y[1],te=Object(n.useState)(null),ae=Object(R.a)(te,2),ne=ae[0],re=ae[1],ce=["mp4"," m4a"," m4v"," f4v"," f4a"," m4b"," m4r"," f4b"," mov"," 3gp"," 3gp2"," 3g2"," 3gpp"," 3gpp2"," webm"],se=["jpg","pdf"],le=Object(n.useRef)(null),oe=Object(n.useRef)(null);Object(n.useEffect)(function(e){N.animateScroll.scrollToTop({duration:j.D}),L().then(function(e){if(e.result===j.z){var t=e.data;t.brochure.length&&V(t.brochure.startsWith("http://")||t.brochure.startsWith("https://")?t.brochure:Object(A.sprintf)("%s%s",M.a.assetsBaseUrl,t.brochure)),t.video.length&&q(t.video.startsWith("http://")||t.video.startsWith("https://")?t.video:Object(A.sprintf)("%s%s",M.a.assetsBaseUrl,t.video)),W(t.originBrochure),ee(t.originVideo)}else S({show:!0,color:j.a,message:e.message});u(!1)}).catch(function(e){console.log(e),S({show:!0,color:j.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")}),u(!1)})},[]);var me=function(){var e=Object(p.a)(b.a.mark(function e(a){var n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,(n=new FormData).append("scope",j.x),n.append("brochure",K),n.append("originBrochure",le.current.state.fileName),e.next=8,x(n);case 8:r=e.sent,W(r.data.originBrochure),S({show:!0,color:r.result,message:r.message}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),S({show:!0,color:j.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(p.a)(b.a.mark(function e(a){var n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,(n=new FormData).append("scope",j.x),n.append("video",ne),n.append("originVideo",oe.current.state.fileName),e.next=8,w(n);case 8:r=e.sent,ee(r.data.originVideo),S({show:!0,color:r.result,message:r.message}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),S({show:!0,color:j.a,message:t("COMMON.ERROR.UNKNOWN_SERVER_ERROR")});case 16:case"end":return e.stop()}},e,null,[[1,13]])}));return function(t){return e.apply(this,arguments)}}();return console.log(le),r.a.createElement("div",null,r.a.createElement(g.Helmet,null,r.a.createElement("title",null,t("NAVBAR.ABOUT.US")," - ",t("SITE_NAME"))),r.a.createElement(s.d,null,r.a.createElement(s.e,null,t("NAVBAR.ABOUT.ABOUT")),r.a.createElement(s.e,{active:!0},t("NAVBAR.ABOUT.US"))),!!m&&r.a.createElement(v.a,null),!m&&r.a.createElement(s.g,null,r.a.createElement(s.h,{className:"mx-md-4 mx-sm-1 text-left"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"dark-grey-text mt-3 mb-0"},r.a.createElement("strong",null,t("NAVBAR.ABOUT.US")))),r.a.createElement(s.M,null,r.a.createElement(s.i,{md:6},r.a.createElement("h5",{className:"text-center mb-4"},t("ABOUT.US.BROCHURE")),!!z.length&&r.a.createElement("p",{className:"text-left mb-2"},t("ABOUT.US.ORIGIN_BROCHURE"),": ",r.a.createElement("span",null,z))),r.a.createElement(s.i,{md:6},r.a.createElement("h5",{className:"text-center mb-4"},t("ABOUT.US.VIDEO")),!!$.length&&r.a.createElement("p",{className:"text-left mb-2"},t("ABOUT.US.ORIGIN_VIDEO"),": ",r.a.createElement("span",null,$)))),r.a.createElement(s.M,null,r.a.createElement(s.i,{md:6},r.a.createElement("div",{className:"md-form mt-2"},r.a.createElement(d.a,{ref:le,defaultFileSrc:T,getValue:G,showRemove:!1,maxFileSize:j.h,allowedFileExtensions:se,messageDefault:t("COMMON.FILE_UPLOAD.DEFAULT"),messageReplace:t("COMMON.FILE_UPLOAD.REPLACE"),messageRemove:t("COMMON.FILE_UPLOAD.REMOVE"),messageError:t("COMMON.FILE_UPLOAD.ERROR"),errorFileSize:t("COMMON.FILE_UPLOAD.ERROR_FILESIZE",{max:j.h}),errorFileExtension:t("COMMON.FILE_UPLOAD.ERROR_FILEEXTENSION",{extensions:se.join(", ")})})),r.a.createElement(n.Fragment,null,r.a.createElement(s.f,{type:"submit",color:"indigo",size:"sm",disabled:!K,onClick:me},t("COMMON.BUTTON.SAVE")))),r.a.createElement(s.i,{md:6},r.a.createElement("div",{className:"md-form mt-2"},r.a.createElement(d.a,{ref:oe,defaultFileSrc:Z,getValue:re,showRemove:!1,maxFileSize:j.h,allowedFileExtensions:ce,messageDefault:t("COMMON.FILE_UPLOAD.DEFAULT"),messageReplace:t("COMMON.FILE_UPLOAD.REPLACE"),messageRemove:t("COMMON.FILE_UPLOAD.REMOVE"),messageError:t("COMMON.FILE_UPLOAD.ERROR"),errorFileSize:t("COMMON.FILE_UPLOAD.ERROR_FILESIZE",{max:j.h}),errorFileExtension:t("COMMON.FILE_UPLOAD.ERROR_FILEEXTENSION",{extensions:ce.join(", ")})})),r.a.createElement(n.Fragment,null,r.a.createElement(s.f,{type:"submit",color:"indigo",size:"sm",disabled:!ne,onClick:ue},t("COMMON.BUTTON.SAVE"))))),r.a.createElement(U.a,{in:E.show,classNames:"mt-4 fade-transition",timeout:j.D,unmountOnExit:!0,appear:!0},r.a.createElement(s.b,{color:E.color,dismiss:!0,onClosed:function(){return S({})}},E.message)))))});a(522),t.default=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(m.a,null),r.a.createElement(s.k,{className:"section"},r.a.createElement(c.d,null,r.a.createElement(c.b,{path:o.a.about.us,component:I}),r.a.createElement(c.b,{component:O.a}))),r.a.createElement(u.a,null),r.a.createElement(i.a,null))}}}]);