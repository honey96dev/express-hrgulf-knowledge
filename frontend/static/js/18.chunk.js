(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{508:function(e,a,t){"use strict";var c=t(0),n=c.useState,l=c.useCallback,r=c.useLayoutEffect;function s(e){return e?{width:e.offsetWidth,height:e.offsetHeight}:{width:0,height:0}}e.exports=function(e){var a=n(s(e?e.current:{})),t=a[0],c=a[1],m=l(function(){e.current&&c(s(e.current))},[e]);return r(function(){if(e.current){if(m(),"function"===typeof ResizeObserver){var a=new ResizeObserver(function(){m()});return a.observe(e.current),function(){a.disconnect(e.current),a=null}}return window.addEventListener("resize",m),function(){window.removeEventListener("resize",m)}}},[e.current]),t}},509:function(e,a,t){},551:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),l=(t(10),t(454)),r=t(29),s=t(4),m=t(36),i=t(508),o=t.n(i),E=t(126),u=t(127),N=t(128),d=t(9),f=t(71);t(509);a.default=function(){var e=Object(r.b)().t,a=Object(c.useRef)(null),t=Object(c.useRef)(null),i=document.getElementById("nav-bar"),b=document.getElementById("nav-container"),h=o()(a),g=o()(t),p=i?i.offsetHeight:0,w=b?b.offsetTop:0;return n.a.createElement(c.Fragment,null,n.a.createElement(l.Helmet,null,n.a.createElement("title",null,e("NAVBAR.HOME")," - ",e("SITE_NAME"))),n.a.createElement(E.a,null),n.a.createElement(s.r,{className:"section front-section no-max-width my-0"},n.a.createElement("img",{src:f.a.frontTopLeft,ref:a,className:"banner-img-left",style:{top:w-h.height,height:w-p}}),n.a.createElement("img",{src:f.a.frontTopRight,ref:t,className:"banner-img-right",style:{top:w-g.height,height:w-p}}),n.a.createElement(s.P,{className:"banner"},n.a.createElement(s.p,{md:12},n.a.createElement("h2",{className:"welcome-message text-center font-weight-bold text-stroke-white-2"},e("FRONT.WELCOME_MESSAGE")))),n.a.createElement(s.P,{className:"row-only-in-sm inner-container",id:"nav-container"},n.a.createElement(s.p,{className:"mb-5"},n.a.createElement(m.b,{to:d.a.posts.all},n.a.createElement(s.h,{className:"section-card"},n.a.createElement(s.j,{className:"img-fluid card-image mx-auto",src:f.a.post,waves:!0}),n.a.createElement(s.i,null,n.a.createElement("p",{className:"h5 text-center text-black-50"},e("NAVBAR.POSTS.POSTS")))))),n.a.createElement(s.p,{className:"mb-5"},n.a.createElement(m.b,{to:d.a.news.all},n.a.createElement(s.h,{className:"section-card"},n.a.createElement(s.j,{className:"img-fluid card-image mx-auto",src:f.a.news,waves:!0}),n.a.createElement(s.i,null,n.a.createElement("p",{className:"h5 text-center text-black-50"},e("NAVBAR.NEWS")))))),n.a.createElement(s.p,{className:"mb-5"},n.a.createElement(m.b,{to:d.a.video.all},n.a.createElement(s.h,{className:"section-card"},n.a.createElement(s.j,{className:"img-fluid card-image mx-auto",src:f.a.video,waves:!0}),n.a.createElement(s.i,null,n.a.createElement("p",{className:"h5 text-center text-black-50"},e("NAVBAR.VIDEO")))))),n.a.createElement(s.p,{className:"mb-5"},n.a.createElement(m.b,{to:d.a.questionnaire.result},n.a.createElement(s.h,{className:"section-card"},n.a.createElement(s.j,{className:"img-fluid card-image mx-auto",src:f.a.questionnaire,waves:!0}),n.a.createElement(s.i,null,n.a.createElement("p",{className:"h5 text-center text-black-50"},e("NAVBAR.QUESTIONNAIRE.QUESTIONNAIRE")))))),n.a.createElement(s.p,{className:"mb-5"},n.a.createElement(m.b,{to:d.a.vote.result},n.a.createElement(s.h,{className:"section-card"},n.a.createElement(s.j,{className:"img-fluid card-image mx-auto",src:f.a.vote,waves:!0}),n.a.createElement(s.i,null,n.a.createElement("p",{className:"h5 text-center text-black-50"},e("NAVBAR.VOTE.VOTE")))))),n.a.createElement(s.p,{className:"mb-5"},n.a.createElement(m.b,{to:d.a.contact.us},n.a.createElement(s.h,{className:"section-card"},n.a.createElement(s.j,{className:"img-fluid card-image mx-auto",src:f.a.contactUs,waves:!0}),n.a.createElement(s.i,null,n.a.createElement("p",{className:"h5 text-center text-black-50"},e("NAVBAR.CONTACT.US")))))),n.a.createElement(s.p,{className:"mb-5"},n.a.createElement(m.b,{to:d.a.contact.consultants},n.a.createElement(s.h,{className:"section-card"},n.a.createElement(s.j,{className:"img-fluid card-image mx-auto",src:f.a.consultants,waves:!0}),n.a.createElement(s.i,null,n.a.createElement("p",{className:"h5 text-center text-black-50"},e("NAVBAR.CONTACT.CONSULTANTS")))))),n.a.createElement(s.p,{className:"mb-5"},n.a.createElement(m.b,{to:d.a.about.portal},n.a.createElement(s.h,{className:"section-card"},n.a.createElement(s.j,{className:"img-fluid card-image mx-auto",src:f.a.about,waves:!0}),n.a.createElement(s.i,null,n.a.createElement("p",{className:"h5 text-center text-black-50"},e("ABOUT.PORTAL.ABOUT_THE_KNOWLEDGE_PORTAL")))))))),n.a.createElement("div",{className:"bottom-spec"}),n.a.createElement(u.a,null),n.a.createElement(N.a,null))}}}]);