(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{118:function(e,t,n){"use strict";var a=n(47),r=n(0),o=n.n(r),c=n(28),l=n(8),i=n(22),s=n(27),u=n(80),m=n.n(u),E=n(58),f=n(14),d=n(121),O=n(125);t.a=function(e){var t=e.thresholdY,n=Object(i.b)().t,u=Object(c.g)(),N=Object(s.c)(function(e){return e}).auth,p=Object(s.b)(),A=Object(r.useState)(!1),R=Object(a.a)(A,2),h=R[0],g=R[1],T=m()({throttle:100}).y>(t||200),I=u.location.pathname;return o.a.createElement(l.y,{color:T?"mdb-color":"white",light:!T,dark:T,expand:"md",scrolling:!0,fixed:"top"},o.a.createElement(l.z,{href:"/"},o.a.createElement("strong",null,n("SITE_NAME"))),o.a.createElement(l.B,{onClick:function(e){g(!h)}}),o.a.createElement(l.i,{isOpen:h,navbar:!0,className:"text-left"},o.a.createElement(l.A,{left:!0},o.a.createElement(l.w,{active:I===f.a.root},o.a.createElement(l.x,{to:f.a.root},n("NAVBAR.HOME"))),o.a.createElement(l.w,{active:I.startsWith(f.a.posts.root)},o.a.createElement(l.l,{onMouseEnter:function(e){console.log(e)},onMouseLeave:function(e){console.log(e)}},o.a.createElement(l.o,{nav:!0,caret:!0},o.a.createElement("span",{className:"mr-2"},n("NAVBAR.POSTS.POSTS"))),o.a.createElement(l.n,{className:"text-left"},o.a.createElement(l.m,{onClick:function(){return u.push(f.a.posts.add)}},n("NAVBAR.POSTS.ADD")),o.a.createElement(l.m,{onClick:function(){return u.push(f.a.posts.all)}},n("NAVBAR.POSTS.ALL"))))),o.a.createElement(l.w,{active:I.startsWith(f.a.news.root)},o.a.createElement(l.x,{to:f.a.news.root},n("NAVBAR.NEWS"))),o.a.createElement(l.w,{active:I.startsWith(f.a.video.root)},o.a.createElement(l.x,{to:f.a.video.root},n("NAVBAR.VIDEO"))),o.a.createElement(l.w,{active:I.startsWith(f.a.vote.root)},o.a.createElement(l.x,{to:f.a.vote.root},n("NAVBAR.VOTE")))),o.a.createElement(l.A,{right:!0},o.a.createElement(l.w,null,o.a.createElement(l.l,null,o.a.createElement(l.o,{nav:!0,caret:!0},o.a.createElement("span",{className:"mr-2"},n("COMMON.LANGUAGE.LANGUAGE"))),o.a.createElement(l.n,{className:"text-left"},o.a.createElement(l.m,{onClick:function(){return Object(E.a)("ar")}},n("COMMON.LANGUAGE.ARABIC")),o.a.createElement(l.m,{onClick:function(){return Object(E.a)("en")}},n("COMMON.LANGUAGE.ENGLISH"))))),o.a.createElement(l.w,null,o.a.createElement(l.l,null,o.a.createElement(l.o,{nav:!0,caret:!0},o.a.createElement(l.q,{icon:"user",className:"d-inline-inline"})),o.a.createElement(l.n,{className:"text-left"},!N.signedIn&&o.a.createElement(r.Fragment,null,o.a.createElement(l.m,{onClick:function(){return u.push(f.a.auth.signIn)}},n("AUTH.SIGN_IN")),o.a.createElement(l.m,{onClick:function(){return u.push(f.a.auth.signUp)}},n("AUTH.SIGN_UP"))),N.signedIn&&o.a.createElement(r.Fragment,null,o.a.createElement(l.m,{onClick:function(){return u.push(f.a.profile.main)}},n("AUTH.MY_ACCOUNT")),o.a.createElement(l.m,{onClick:function(){return u.push(f.a.profile.myPosts.root)}},n("PROFILE.MY_POSTS.MY_POSTS")),o.a.createElement(l.m,{onClick:function(e){O.a.signOut(),p(d.a.signOut())}},n("AUTH.SIGN_OUT")))))))))}},119:function(e,t,n){"use strict";var a=n(8),r=n(0),o=n.n(r),c=n(22);t.a=function(e){var t="rtl"===(0,Object(c.b)().t)("DIRECTION")?"text-align-right-lg":"";return o.a.createElement(a.p,{color:"unique-color-dark",className:"font-small pt-4 mt-4"},o.a.createElement(a.j,{className:"text-center text-md-left"},o.a.createElement(a.H,{className:"text-center text-md-left mt-3 pb-3"},o.a.createElement(a.h,{md:"3",lg:"3",xl:"3",className:"mx-auto mt-3 ".concat(t)},o.a.createElement("h6",{className:"text-uppercase mb-4 font-weight-bold"},"Company name"),o.a.createElement("p",null,"Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),o.a.createElement("hr",{className:"w-100 clearfix d-md-none"}),o.a.createElement(a.h,{md:"2",lg:"2",xl:"2",className:"mx-auto mt-3 ".concat(t)},o.a.createElement("h6",{className:"text-uppercase mb-4 font-weight-bold"},"Products"),o.a.createElement("p",null,o.a.createElement("a",null,"MDBootstrap")),o.a.createElement("p",null,o.a.createElement("a",null,"MDWordPress")),o.a.createElement("p",null,o.a.createElement("a",null,"BrandFlow")),o.a.createElement("p",null,o.a.createElement("a",null,"Bootstrap Angular"))),o.a.createElement("hr",{className:"w-100 clearfix d-md-none"}),o.a.createElement(a.h,{md:"3",lg:"2",xl:"2",className:"mx-auto mt-3 ".concat(t)},o.a.createElement("h6",{className:"text-uppercase mb-4 font-weight-bold"},"Useful links"),o.a.createElement("p",null,o.a.createElement("a",null,"Your Account")),o.a.createElement("p",null,o.a.createElement("a",null,"Become an Affiliate")),o.a.createElement("p",null,o.a.createElement("a",null,"Shipping Rates")),o.a.createElement("p",null,o.a.createElement("a",null,"Help"))),o.a.createElement("hr",{className:"w-100 clearfix d-md-none"}),o.a.createElement(a.h,{md:"4",lg:"3",xl:"3",className:"mx-auto mt-3 ".concat(t)},o.a.createElement("h6",{className:"text-uppercase mb-4 font-weight-bold"},"Contact"),o.a.createElement("p",null,o.a.createElement("i",{className:"fa fa-home mr-3"})," New York, NY 10012, US"),o.a.createElement("p",null,o.a.createElement("i",{className:"fa fa-envelope mr-3"})," info@gmail.com"),o.a.createElement("p",null,o.a.createElement("i",{className:"fa fa-phone mr-3"})," + 01 234 567 88"),o.a.createElement("p",null,o.a.createElement("i",{className:"fa fa-print mr-3"})," + 01 234 567 89"))),o.a.createElement("hr",null),o.a.createElement(a.H,{className:"d-flex align-items-center"},o.a.createElement(a.h,{md:"8",lg:"8"},o.a.createElement("p",{className:"text-center text-md-left grey-text"},"\xa9 ",(new Date).getFullYear()," Copyright:"," ",o.a.createElement("a",{href:"https://www.MDBootstrap.com"}," MDBootstrap.com "))),o.a.createElement(a.h,{md:"4",lg:"4"},o.a.createElement("div",{className:"text-center text-md-right"},o.a.createElement("ul",{className:"list-unstyled list-inline"},o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{className:"btn-floating btn-sm rgba-white-slight mx-1"},o.a.createElement("i",{className:"fab fa-facebook-f"}))),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{className:"btn-floating btn-sm rgba-white-slight mx-1"},o.a.createElement("i",{className:"fab fa-twitter"}))),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{className:"btn-floating btn-sm rgba-white-slight mx-1"},o.a.createElement("i",{className:"fab fa-google-plus"}))),o.a.createElement("li",{className:"list-inline-item"},o.a.createElement("a",{className:"btn-floating btn-sm rgba-white-slight mx-1"},o.a.createElement("i",{className:"fab fa-linkedin-in"})))))))))}},120:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(22),c=(n(392),function(){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"match-parent"},r.a.createElement("div",{className:"spinner-grow big center-in-parent loader-indicator",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))});n(172),t.a=function(e){Object(o.b)().t;return r.a.createElement("div",{className:"loading-page"},r.a.createElement(c,null))}},121:function(e,t,n){"use strict";var a=n(23);t.a={requestSignIn:function(e){return{type:a.c,payload:e}},successSignIn:function(e){return{type:a.d,payload:e}},failureSignIn:function(e){return{type:a.b,payload:e}},requestSignUp:function(e){return{type:a.g,payload:e}},successSignUp:function(e){return{type:a.h,payload:e}},failureSignUp:function(e){return{type:a.f,payload:e}},signOut:function(e){return{type:a.e}},setRedirectUrl:function(e){return{type:a.a,payload:e}}}},122:function(e,t,n){"use strict";var a=n(57),r=n(0),o=n.n(r),c=n(80),l=n.n(c),i=n(117),s=n(398),u=n(37);t.a=function(e){var t=e.thresholdY,n=e.duration,r=e.transitionTime,c=Object(a.a)(e,["thresholdY","duration","transitionTime"]),m=l()({throttle:100}).y>(t||200);return o.a.createElement(s.a,Object.assign({in:m,classNames:"fade-transition",timeout:r||u.v,appear:!0},c),o.a.createElement("div",null,!!m&&o.a.createElement("div",{className:"fixed-action-btn smooth-scroll back-to-top-container"},o.a.createElement("a",{id:"back-to-top",className:"btn-floating btn-large mdb-color",onClick:function(e){i.animateScroll.scrollToTop({duration:n||u.v})}},o.a.createElement("i",{className:"fa fa-arrow-up"})))))}},124:function(e,t,n){"use strict";var a=n(57),r=n(0),o=n.n(r),c=n(28),l=n(27),i=n(14);t.a=function(e){var t=e.component,n=Object(a.a)(e,["component"]),r=(Object(l.b)(),Object(l.c)(function(e){return e}).auth),s=Object(c.g)(),u=s.location.pathname;return r.signedIn||u===i.a.auth.signIn?o.a.createElement(c.b,Object.assign({component:t},n)):o.a.createElement(c.a,{to:"".concat(i.a.auth.signIn,"?redirect=").concat(s.location.pathname)})}},125:function(e,t,n){"use strict";var a=n(36),r=n(39),o=n(48),c=n(37);t.a={signIn:function(e){return new Promise(function(t,n){Object(a.a)(r.d,o.a.auth.signIn,e).then(function(e){e.result===c.s&&Object(a.c)({Authorization:"Bearer ".concat(e.data.token)}),t(e)},function(e){n(e)})})},signUp:function(e){return new Promise(function(t,n){Object(a.a)(r.d,o.a.auth.signUp,e).then(function(e){t(e)},function(e){n(e)})})},signOut:function(e){Object(a.c)({Authorization:null})}}},126:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(22),c=(n(390),function(e){var t=e.heading,n=e.message;Object(o.b)().t;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"match-parent"},r.a.createElement("div",{className:"top-p50 error-indicator",role:"status"},r.a.createElement("h1",{className:"text-center"},t),r.a.createElement("h4",{className:"text-center"},n))))});n(172),t.a=function(e){var t=Object(o.b)().t;return r.a.createElement("div",{className:"loading-page"},r.a.createElement(c,{heading:404,message:t("COMMON.ERROR.ERROR_404")}))}},14:function(e,t,n){"use strict";t.a={root:"/",admin:"/admin",auth:{root:"/auth",signIn:"/auth/sign-in",signUp:"/auth/sign-up"},profile:{root:"/profile",main:"/profile/main",myPosts:{root:"/profile/my-posts",detail:"/profile/my-posts/detail"}},posts:{root:"/posts",all:"/posts",add:"/posts/add",detail:"/posts/detail",comment:"/posts/comment"},news:{root:"/news"},video:{root:"/video"},vote:{root:"/vote"}}},172:function(e,t,n){},193:function(e,t,n){e.exports=n(397)},23:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"g",function(){return c}),n.d(t,"h",function(){return l}),n.d(t,"f",function(){return i}),n.d(t,"e",function(){return s}),n.d(t,"a",function(){return u});var a="AUTH_SIGN_IN_REQUEST_SIGNAL",r="AUTH_SIGN_IN_SUCCESS_SIGNAL",o="AUTH_SIGN_IN_FAILURE_SIGNAL",c="AUTH_SIGN_OUT_REQUEST_SIGNAL",l="AUTH_SIGN_OUT_SUCCESS_SIGNAL",i="AUTH_SIGN_OUT_FAILURE_SIGNAL",s="AUTH_SIGN_OUT_SIGNAL",u="AUTH_REDIRECT_URL_SIGNAL"},36:function(e,t,n){"use strict";n.d(t,"b",function(){return m}),n.d(t,"c",function(){return E});var a=n(47),r=n(42),o=n.n(r),c=n(39),l=n(48),i=o.a.CancelToken,s=function(e){var t=encodeURIComponent;return"?"+Object.keys(e).map(function(n){return t(n)+"="+t(e[n])}).join("&")},u=function(e){return e},m=function(e){o.a.defaults.baseURL=l.a.baseUrl},E=function(e){Object.entries(e).forEach(function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];o.a.defaults.headers.common[n]=r})};t.a=function(e,t,n,a){switch(e){case c.b:return new Promise(function(e,r){var c=s(n);o.a.get(t+c,{cancelToken:new i(function(e){e}),headers:a}).then(function(t){e(t.data)}).catch(function(e){r(e)})});case c.d:return new Promise(function(e,r){var c=u(n);o.a.post(t,c,{cancelToken:new i(function(e){e}),headers:a}).then(function(t){e(t.data)}).catch(function(e){r(e)})});case c.e:return new Promise(function(e,r){var c=u(n);o.a.put(t,c,{cancelToken:new i(function(e){e}),headers:a}).then(function(t){e(t.data)}).catch(function(e){r(e)})});case c.c:return new Promise(function(e,r){var c=u(n);o.a.patch(t,c,{cancelToken:new i(function(e){e}),headers:a}).then(function(t){e(t.data)}).catch(function(e){r(e)})});case c.a:return new Promise(function(e,r){var c=s(n);o.a.delete(t+c,{cancelToken:new i(function(e){e}),headers:a}).then(function(t){e(t.data)}).catch(function(e){r(e)})})}}},37:function(e,t,n){"use strict";n.d(t,"y",function(){return a}),n.d(t,"s",function(){return r}),n.d(t,"p",function(){return o}),n.d(t,"o",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"w",function(){return i}),n.d(t,"r",function(){return s}),n.d(t,"x",function(){return u}),n.d(t,"q",function(){return m}),n.d(t,"m",function(){return E}),n.d(t,"t",function(){return f}),n.d(t,"u",function(){return d}),n.d(t,"a",function(){return O}),n.d(t,"v",function(){return N}),n.d(t,"n",function(){return p}),n.d(t,"e",function(){return A}),n.d(t,"l",function(){return R}),n.d(t,"f",function(){return h}),n.d(t,"h",function(){return g}),n.d(t,"g",function(){return T}),n.d(t,"k",function(){return I}),n.d(t,"d",function(){return S}),n.d(t,"c",function(){return b}),n.d(t,"j",function(){return _}),n.d(t,"i",function(){return M});var a=!1,r="success",o="M",c="F",l="YYYY-M-D",i="unknownServerError",s="+966",u=20,m=6,E=400,f=10,d=18,O="danger",N=500,p="5M",A="honey96dev@gmail.com",R="honey96dev",h="Zhenlong",g="Jin",T="IT",I="Web",S="Wangzi",b="Hunchun",_="571623415",M="123456"},39:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"e",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return l});var a="GET",r="POST",o="PUT",c="PATCH",l="DELETE"},390:function(e,t,n){},391:function(e,t,n){},392:function(e,t,n){},395:function(e,t,n){},396:function(e,t,n){},397:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),l=n(27),i=n(174),s=n(35),u=n(116),m=n(175),E=n.n(m),f=n(176),d=n(78),O=n(23);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var A={signedIn:!1,user:null,token:null,redirectUrl:null},R=Object(s.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case O.c:return p({},e,{signedIn:!1,user:null,token:null});case O.d:return p({},e,{signedIn:!0,user:a.user,token:a.token});case O.b:return p({},e,{signedIn:!1,user:null,token:null});case O.e:return p({},e,{signedIn:!1,user:null,token:null,redirectUrl:""});case O.a:return p({},e,{redirectUrl:a});default:return e}}}),h=n(37),g={key:"knowledge",storage:E.a},T=Object(u.a)(g,R),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var b=n(58),_=n(22),M=n(32),D=n(28),v=n(14),L=n(124),w=n(57),C=function(e){var t=e.component,n=Object(w.a)(e,["component"]);return Object(l.c)(function(e){return e}).auth.signedIn?r.a.createElement(D.a,{to:v.a.root}):r.a.createElement(D.b,Object.assign({component:t},n))},P=n(8),U=n(118),y=n(119),G=n(122),x=n(126),j=(n(391),function(){Object(_.b)().t;return r.a.createElement(a.Fragment,null,r.a.createElement(U.a,null),r.a.createElement(P.j,{className:"section"},r.a.createElement(x.a,null)),r.a.createElement(y.a,null),r.a.createElement(G.a,null))}),k=r.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,441))}),H=r.a.lazy(function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,438))}),W=r.a.lazy(function(){return Promise.all([n.e(0),n.e(2),n.e(9),n.e(7)]).then(n.bind(null,439))}),F=r.a.lazy(function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(6)]).then(n.bind(null,440))}),B=function(){return r.a.createElement(D.d,null,r.a.createElement(C,{path:v.a.auth.root,component:k}),r.a.createElement(D.b,{path:v.a.posts.root,component:W}),r.a.createElement(L.a,{path:v.a.profile.root,component:F}),r.a.createElement(D.b,{path:"/",exact:!0,component:H}),r.a.createElement(D.b,{path:v.a.admin,exact:!0,render:function(){return window.location.href="".concat(v.a.admin,"/")}}),r.a.createElement(D.b,{component:j}))},Y=n(48),V=n(36);Object(V.b)(Y.a.baseUrl),Object(V.c)({lang:b.b.language});var J=n(120),z=(n(393),n(394),n(395),n(396),function(){var e=Object(s.createStore)(T,h.y&&Object(f.composeWithDevTools)());return{store:e,persistor:Object(u.b)(e)}}()),X=z.store,Q=z.persistor;c.a.render(r.a.createElement(a.Suspense,{fallback:r.a.createElement(J.a,null)},r.a.createElement(l.a,{store:X},r.a.createElement(i.a,{loading:null,persistor:Q},r.a.createElement(function(){var e=Object(_.b)().t,t=Object(l.c)(function(e){return e}).auth;Object(V.c)({Authorization:"Bearer ".concat(t.token)});var n=e("DIRECTION");return r.a.createElement(M.a,null,r.a.createElement("div",{dir:n,className:"rtl"===n?"rtl-content":""},r.a.createElement(B,null)))},null)))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");I?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):S(e)})}}()},48:function(e,t,n){"use strict";var a=n(37);t.a={baseUrl:a.y?"http://localhost:8080/api/":"/api/",assetsBaseUrl:a.y?"http://localhost:8080/assets/":"/assets/",auth:{signIn:"auth/sign-in",signUp:"auth/sign-up"},profile:{save:"profile/save",changePassword:"profile/change-password"},posts:{list:"posts/list",save:"posts/save",delete:"posts/delete",get:"posts/get",commentList:"posts/comment-list",writeComment:"posts/write-comment"}}},58:function(e,t,n){"use strict";var a=n(81),r=n(177),o=n(22),c=n(36);n.d(t,"a",function(){return l});a.a.use(r.a).use(o.a).init({fallbackLng:["en"],debug:!0,whitelist:["en","ar"],resources:{en:{translation:{NAME:"English",CODE:"en",DIRECTION:"ltr",SITE_NAME:"SITE_NAME",COMMON:{BUTTON:{HOME:"Home",YES:"Yes",NO:"No",OK:"OK",SEND:"Send",BACK:"Back",SAVE:"Save",DELETE:"Delete",CLEAR:"Clear",SEARCH:"Search",SUBSCRIBE:"Subscribe",JOIN:"Join",JOIN_US:"Join Us",DETAILS:"Details",CHANGE:"Change",ADD:"Add",CANCEL:"Cancel",FIRST:"First",LAST:"Last",READ_MORE:"Read more",MODIFY:"Modify"},VALIDATION:{REQUIRED:"{{field}} is required",INVALID:"{{field}} is invalid",MIN_LENGTH:"{{field}} minimum length is {{length}}",MAX_LENGTH:"{{field}} maximum length is {{length}}",NOT_SAME:"Make sure same to {{field}}"},QUESTION:{DELETE_CONFIRM:"Do you want to delete '{{item}}'?"},ERROR:{UNKNOWN_SERVER_ERROR:"Unknown server error",NO_DATA:"There is no data",ERROR_404:"Ops, Page not found"},GENDER:{MALE:"Male",FEMALE:"Female"},LANGUAGE:{LANGUAGE:"Language",ENGLISH:"English",ARABIC:"\u0639\u0631\u0628\u0649"},FILE_UPLOAD:{DEFAULT:"Drag and drop a file here or click",REPLACE:"Drag and drop or click to replace",REMOVE:"Remove",ERROR:"Oops, something wrong happened",ERROR_FILESIZE:"The file size is too big ({{max}} max)",ERROR_FILEEXTENSION:"The file is not allowed ({{extensions}} only)",ERROR_IMAGEFORMAT:"The image format is not allowed ({{format}} only)",ERROR_MAXHEIGHT:"The image height is too big ({{max}}px max)",ERROR_MINHEIGHT:"The image height is too small ({{min}}px min)",ERROR_MAXWIDTH:"The image width is too big ({{max}}px max)",ERROR_MINWIDTH:"The image width is too small ({{min}}px min)"}},NAVBAR:{HOME:"Home",POSTS:{POSTS:"Posts",ADD:"Add post",ALL:"All posts"},NEWS:"News",VIDEO:"Video",VOTE:"Vote"},AUTH:{EMAIL:"Email",USERNAME:"Username",FIRST_NAME:"First Name",LAST_NAME:"Last Name",GENDER:"Gender",BIRTHDAY:"Birthday",JOB_TITLE:"Job Title",SECTOR:"Sector",COMPANY:"Company",COUNTRY:"Country",CITY:"City",PHONE:"Phone Number",PASSWORD:"Password",PASSWORD2:"Confirm Password",SIGN_IN:"Sign in",SIGN_UP:"Sign up",SIGN_OUT:"Sign out",MY_ACCOUNT:"My account",FORGOT_PASSWORD:"Forgot password?",ALREADY_REGISTERED:"Already registered?",NOT_REGISTERED:"Not registered?"},PROFILE:{PROFILE:"Profile",MY_POSTS:{MY_POSTS:"My Posts",DETAIL:"Detail"},MAIN:{PERSONAL_INFO:"Personal Info",SOCIAL_MEDIA:"Social Media",PASSWORD:"Password"},PASSWORD:{CURRENT_PASSWORD:"Current Password",NEW_PASSWORD:"New Password"}},POSTS:{TITLE:"Title",TEXT:"Text",DESCRIPTION:"Description",MEDIA:"Image",ADD:{},DETAIL:{POST_DETAIL:"Post Detail",WRITE_COMMENT:'Write a <span className="primary-color">{{comment}}</span>',WRITE:"Write a",COMMENT:"Comment",REQUIRE_SIGN_IN:"To add your comment, you must register or",ALREADY_WROTE_COMMENT:"You have already written a comment on this post",COMMENTS:"Comments",NO_COMMENT:"There is no comment yet"}}}},ar:{translation:{NAME:"\u0639\u0631\u0628\u0649",CODE:"ar",DIRECTION:"rtl",SITE_NAME:"SITE_NAME",COMMON:{BUTTON:{HOME:"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",YES:"\u0646\u0639\u0645 \u0641\u0639\u0644\u0627",NO:"\u0644\u0627",OK:"\u062d\u0633\u0646\u0627",SEND:"\u0625\u0631\u0633\u0627\u0644",BACK:"\u0627\u0644\u0649 \u0627\u0644\u062e\u0644\u0641",SAVE:"\u062d\u0641\u0638",DELETE:"\u062d\u0630\u0641",CLEAR:"\u0648\u0627\u0636\u062d",SEARCH:"\u0628\u062d\u062b",SUBSCRIBE:"\u0627\u0644\u0625\u0634\u062a\u0631\u0627\u0643",JOIN:"\u0627\u0646\u0636\u0645",JOIN_US:"\u0627\u0646\u0636\u0645 \u0627\u0644\u064a\u0646\u0627",DETAILS:"\u062a\u0641\u0627\u0635\u064a\u0644",CHANGE:"\u064a\u062a\u063a\u064a\u0631\u0648\u0646",ADD:"\u0625\u0636\u0627\u0641\u0629",CANCEL:"\u0625\u0644\u063a\u0627\u0621",FIRST:"\u0623\u0648\u0644",LAST:"\u0627\u0644\u0627\u062e\u064a\u0631",READ_MORE:"\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0632\u064a\u062f",MODIFY:"\u062a\u0639\u062f\u064a\u0644"},VALIDATION:{REQUIRED:"{{field}} \u0645\u0637\u0644\u0648\u0628",INVALID:"{{field}} \u063a\u064a\u0631 \u0635\u0627\u0644\u062d",MIN_LENGTH:"\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649 \u0644\u0637\u0648\u0644 {{field}} \u0647\u0648 {{length}}",MAX_LENGTH:"\u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0637\u0648\u0644 {{field}} \u0647\u0648 {{length}}",NOT_SAME:"\u062a\u0623\u0643\u062f \u0645\u0646 \u0646\u0641\u0633\u0647 \u0625\u0644\u0649 {{field}}"},QUESTION:{DELETE_CONFIRM:"\u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641 '{{item}}'\u061f"},ERROR:{UNKNOWN_SERVER_ERROR:"\u062e\u0637\u0623 \u063a\u064a\u0631 \u0645\u0639\u0631\u0648\u0641 \u0641\u064a \u0627\u0644\u062e\u0627\u062f\u0645",NO_DATA:"\u0644\u064a\u0633 \u0647\u0646\u0627\u0644\u0643 \u0645\u0639\u0644\u0648\u0645\u0627\u062a",ERROR_404:"\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0627\u0644\u0635\u0641\u062d\u0629"},GENDER:{MALE:"\u0627\u0644\u0630\u0643\u0631",FEMALE:"\u0623\u0646\u062b\u0649"},LANGUAGE:{LANGUAGE:"\u0644\u063a\u0629",ENGLISH:"English",ARABIC:"\u0639\u0631\u0628\u0649"},FILE_UPLOAD:{DEFAULT:"\u0633\u062d\u0628 \u0648\u0625\u0633\u0642\u0627\u0637 \u0645\u0644\u0641 \u0647\u0646\u0627 \u0623\u0648 \u0627\u0646\u0642\u0631 \u0641\u0648\u0642",REPLACE:"\u0633\u062d\u0628 \u0648\u0625\u0633\u0642\u0627\u0637 \u0623\u0648 \u0627\u0646\u0642\u0631 \u0644\u0627\u0633\u062a\u0628\u062f\u0627\u0644",REMOVE:"\u0625\u0632\u0627\u0644\u0629",ERROR:"\u0639\u0641\u0648\u064b\u0627 \u060c \u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",ERROR_FILESIZE:"\u062d\u062c\u0645 \u0627\u0644\u0645\u0644\u0641 \u0643\u0628\u064a\u0631 \u062c\u062f\u064b\u0627 ({{max}} \u0628\u062d\u062f \u0623\u0642\u0635\u0649)",ERROR_FILEEXTENSION:"\u0627\u0644\u0645\u0644\u0641 \u063a\u064a\u0631 \u0645\u0633\u0645\u0648\u062d \u0628\u0647 ({{extensions}} \u0641\u0642\u0637)",ERROR_IMAGEFORMAT:"\u062a\u0646\u0633\u064a\u0642 \u0627\u0644\u0635\u0648\u0631\u0629 \u063a\u064a\u0631 \u0645\u0633\u0645\u0648\u062d \u0628\u0647 ({{format}} \u0641\u0642\u0637)",ERROR_MAXHEIGHT:"\u0627\u0631\u062a\u0641\u0627\u0639 \u0627\u0644\u0635\u0648\u0631\u0629 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645 ({{max}} \u0628\u0643\u0633\u0644 \u0643\u062d\u062f \u0623\u0642\u0635\u0649)",ERROR_MINHEIGHT:"\u0627\u0631\u062a\u0641\u0627\u0639 \u0627\u0644\u0635\u0648\u0631\u0629 \u0635\u063a\u064a\u0631 \u062c\u062f\u064b\u0627 ({{min}} \u0628\u0643\u0633\u0644)",ERROR_MAXWIDTH:"\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631\u0629 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645 ({{max}} \u0628\u0643\u0633\u0644 \u0643\u062d\u062f \u0623\u0642\u0635\u0649)",ERROR_MINWIDTH:"\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631\u0629 \u0635\u063a\u064a\u0631 \u062c\u062f\u064b\u0627 ({{min}} \u0628\u0643\u0633\u0644)"}},NAVBAR:{HOME:"\u0627\u0644\u0628\u062f\u0627\u064a\u0629",POSTS:{POSTS:"\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0627\u062a",ADD:"\u0627\u0636\u0641 \u0645\u0634\u0627\u0631\u0643\u0629",ALL:"\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0627\u062a"},NEWS:"\u0627\u0644\u0623\u062e\u0628\u0627\u0631",VIDEO:"\u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a",VOTE:"\u0627\u0644\u0641\u064a\u062f\u064a\u0648\u0647\u0627\u062a"},AUTH:{EMAIL:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",USERNAME:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",FIRST_NAME:"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644",LAST_NAME:"\u0627\u0633\u0645 \u0627\u0644\u0639\u0627\u0626\u0644\u0629",GENDER:"\u062c\u0646\u0633",BIRTHDAY:"\u0639\u064a\u062f \u0627\u0644\u0645\u064a\u0644\u0627\u062f",JOB_TITLE:"\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064a\u0641\u064a",SECTOR:"\u0642\u0637\u0627\u0639",COMPANY:"\u0627\u0644\u0645\u0646\u0634\u0623\u0629",COUNTRY:"\u0627\u0644\u0628\u0644\u062f",CITY:"\u0627\u0644\u0645\u062f\u064a\u0646\u0629",PHONE:"\u0627\u0644\u0647\u0627\u062a\u0641 \u0627\u0644\u0646\u0642\u0627\u0644",PASSWORD:"\u0643\u0644\u0645\u0647 \u0627\u0644\u0633\u0631",PASSWORD2:"\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",SIGN_IN:"\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",SIGN_UP:"\u0633\u062c\u0644",SIGN_OUT:"\u062e\u0631\u0648\u062c",MY_ACCOUNT:"\u0627\u0644\u062d\u0633\u0627\u0628",FORGOT_PASSWORD:"\u0647\u0644 \u0646\u0633\u064a\u062a \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631\u061f",ALREADY_REGISTERED:"\u0645\u0633\u062c\u0644 \u0628\u0627\u0644\u0641\u0639\u0644\u061f",NOT_REGISTERED:"\u063a\u064a\u0631 \u0645\u0633\u062c\u0644\u061f"},PROFILE:{PROFILE:"\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a",MY_POSTS:{MY_POSTS:"\u0645\u0634\u0627\u0631\u0643\u0627\u062a\u064a",DETAIL:"\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644"},MAIN:{PERSONAL_INFO:"\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0634\u062e\u0635\u064a\u0629",SOCIAL_MEDIA:"\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a",PASSWORD:"\u0643\u0644\u0645\u0647 \u0627\u0644\u0633\u0631"},PASSWORD:{CURRENT_PASSWORD:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062d\u0627\u0644\u064a",NEW_PASSWORD:"\u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u062c\u062f\u064a\u062f\u0629"}},POSTS:{TITLE:"\u0639\u0646\u0648\u0627\u0646",TEXT:"\u0646\u0635",DESCRIPTION:"\u0648\u0635\u0641",MEDIA:"\u0635\u0648\u0631\u0629",ADD:{},DETAIL:{POST_DETAIL:"\u0646\u0634\u0631 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644",WRITE_COMMENT:'\u0627\u0643\u062a\u0628 <span className="primary-color"></span>{{comment}}',WRITE:"\u0643\u062a\u0627\u0628\u0629",COMMENT:"\u062a\u0639\u0644\u064a\u0642",REQUIRE_SIGN_IN:"\u0644\u0625\u0636\u0627\u0641\u0629 \u062a\u0639\u0644\u064a\u0642\u0643 \u060c \u064a\u062c\u0628 \u0639\u0644\u064a\u0643 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0623\u0648",ALREADY_WROTE_COMMENT:"\u0644\u0642\u062f \u0643\u062a\u0628\u062a \u0628\u0627\u0644\u0641\u0639\u0644 \u062a\u0639\u0644\u064a\u0642\u064b\u0627 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0646\u0634\u0648\u0631",COMMENTS:"\u062a\u0639\u0644\u064a\u0642\u0627\u062a",NO_COMMENT:"\u0644\u0627 \u064a\u0648\u062c\u062f \u0623\u064a \u062a\u0639\u0644\u064a\u0642 \u062d\u062a\u0649 \u0627\u0644\u0627\u0646"}}}}},interpolation:{escapeValue:!1}});var l=function(e){var t=e;a.a.changeLanguage(t),Object(c.c)({lang:t})};t.b=a.a}},[[193,4,5]]]);