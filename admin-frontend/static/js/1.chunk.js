(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{424:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s,r=n(0),o=(s=r)&&"object"===typeof s&&"default"in s?s.default:s,t=new(n(453)),a=t.getBrowser(),l=(t.getCPU(),t.getDevice()),d=t.getEngine(),u=t.getOS(),c=t.getUA(),w=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i};function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,i){for(var n=0;n<i.length;n++){var s=i[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function p(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function f(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,s)}return n}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,i){return(h=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y="mobile",E="tablet",k="smarttv",x="console",N="wearable",O=void 0,S="Chrome",C="Firefox",T="Opera",V="Yandex",A="Safari",F="Internet Explorer",M="Edge",P="Chromium",j="IE",_="Mobile Safari",L="iOS",B="Android",z="Windows Phone",W={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},R=function(e,i,n,s,r){return{isBrowser:e,browserMajorVersion:w(i.major),browserFullVersion:w(i.version),browserName:w(i.name),engineName:w(n.name),engineVersion:w(n.version),osName:w(s.name),osVersion:w(s.version),userAgent:w(r)}},D=function(e,i,n,s){return function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?f(n,!0).forEach(function(i){p(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}({},e,{vendor:w(i.vendor),model:w(i.model),os:w(n.name),osVersion:w(n.version),ua:w(s)})},I=function(e,i,n,s){return{isSmartTV:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(s)}},U=function(e,i,n,s){return{isConsole:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(s)}},q=function(e,i,n,s){return{isWearable:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(s)}},G=function(e){switch(e){case y:return{isMobile:!0};case E:return{isTablet:!0};case k:return{isSmartTV:!0};case x:return{isConsole:!0};case N:return{isWearable:!0};case O:return{isBrowser:!0};default:return W}}(l.type);var H=l.type===k,X=l.type===x,Q=l.type===N,Y=a.name===_,$=a.name===P,K=function(){switch(l.type){case y:case E:return!0;default:return!1}}(),Z=l.type===y,J=l.type===E,ee=l.type===O,ie=u.name===B,ne=u.name===z,se=u.name===L,re=a.name===S,oe=a.name===C,te=a.name===A||a.name===_,ae=a.name===T,le=a.name===F||a.name===j,de=w(u.version),ue=w(u.name),ce=w(a.version),we=w(a.major),me=w(a.name),be=w(l.vendor),pe=w(l.model),fe=w(d.name),ve=w(d.version),he=w(c),ge=a.name===M,ye=a.name===V,Ee=w(l.type,"");i.AndroidView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return ie?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.BrowserView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return ee?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.ConsoleView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return X?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.CustomView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return e.condition?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.IEView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return le?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.IOSView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return se?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return Z?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.MobileView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return K?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.SmartTVView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return H?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.TabletView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return J?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.WearableView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return Q?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return ne?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.browserName=me,i.browserVersion=we,i.deviceDetect=function(){var e=G.isBrowser,i=G.isMobile,n=G.isTablet,s=G.isSmartTV,r=G.isConsole,o=G.isWearable;return e?R(e,a,d,u,c):s?I(s,d,u,c):r?U(r,d,u,c):i?D(G,l,u,c):n?D(G,l,u,c):o?q(o,d,u,c):void 0},i.deviceType=Ee,i.engineName=fe,i.engineVersion=ve,i.fullBrowserVersion=ce,i.getUA=he,i.isAndroid=ie,i.isBrowser=ee,i.isChrome=re,i.isChromium=$,i.isConsole=X,i.isEdge=ge,i.isFirefox=oe,i.isIE=le,i.isIOS=se,i.isMobile=K,i.isMobileOnly=Z,i.isMobileSafari=Y,i.isOpera=ae,i.isSafari=te,i.isSmartTV=H,i.isTablet=J,i.isWearable=Q,i.isWinPhone=ne,i.isYandex=ye,i.mobileModel=pe,i.mobileVendor=be,i.osName=ue,i.osVersion=de,i.withOrientationChange=function(e){return function(i){function n(e){var i,s,r;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),s=this,(i=!(r=v(n).call(this,e))||"object"!==typeof r&&"function"!==typeof r?g(s):r).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(g(i)),i.onOrientationChange=i.onOrientationChange.bind(g(i)),i.onPageLoad=i.onPageLoad.bind(g(i)),i.state={isLandscape:!1,isPortrait:!1},i}var s,r,t;return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&h(e,i)}(n,o.Component),s=n,(r=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"===typeof window?"undefined":m(window))&&K&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return o.createElement(e,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait})}}])&&b(s.prototype,r),t&&b(s,t),n}()}},453:function(e,i,n){var s;!function(r,o){"use strict";var t="model",a="name",l="type",d="vendor",u="version",c="mobile",w="tablet",m={extend:function(e,i){var n={};for(var s in e)i[s]&&i[s].length%2===0?n[s]=i[s].concat(e[s]):n[s]=e[s];return n},has:function(e,i){return"string"===typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"===typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},b={rgx:function(e,i){for(var n,s,r,o,t,a,l=0;l<i.length&&!t;){var d=i[l],u=i[l+1];for(n=s=0;n<d.length&&!t;)if(t=d[n++].exec(e))for(r=0;r<u.length;r++)a=t[++s],"object"===typeof(o=u[r])&&o.length>0?2==o.length?"function"==typeof o[1]?this[o[0]]=o[1].call(this,a):this[o[0]]=o[1]:3==o.length?"function"!==typeof o[1]||o[1].exec&&o[1].test?this[o[0]]=a?a.replace(o[1],o[2]):void 0:this[o[0]]=a?o[1].call(this,a,o[2]):void 0:4==o.length&&(this[o[0]]=a?o[3].call(this,a.replace(o[1],o[2])):void 0):this[o]=a||void 0;l+=2}},str:function(e,i){for(var n in i)if("object"===typeof i[n]&&i[n].length>0){for(var s=0;s<i[n].length;s++)if(m.has(i[n][s],e))return"?"===n?void 0:n}else if(m.has(i[n],e))return"?"===n?void 0:n;return e}},p={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},f={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,u],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],u],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],u],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[a,u],[/(konqueror)\/([\w\.]+)/i],[[a,"Konqueror"],u],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],u],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],u],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],u],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],u],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],u],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],u],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],u],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],u],[/(windowswechat qbcore)\/([\w\.]+)/i],[[a,"WeChat(Win) Desktop"],u],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],u],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],u],[/(qqbrowserlite)\/([\w\.]+)/i],[a,u],[/(QQ)\/([\d\.]+)/i],[a,u],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,u],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[a,u],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,u],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[u,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[u,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,u],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[u,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],u],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],u],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[u,[a,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[a,"Sailfish Browser"],u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,u],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],u],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],u],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],u],[/fxios\/([\w\.-]+)/i],[u,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[u,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[u,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[u,b.str,p.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,u],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],u],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",m.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",m.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",m.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[t,d,[l,w]],[/applecoremedia\/[\w\.]+ \((ipad)/],[t,[d,"Apple"],[l,w]],[/(apple\s{0,1}tv)/i],[[t,"Apple TV"],[d,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[d,t,[l,w]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[t,[d,"Amazon"],[l,w]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[t,b.str,p.device.amazon.model],[d,"Amazon"],[l,c]],[/android.+aft([bms])\sbuild/i],[t,[d,"Amazon"],[l,"smarttv"]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[t,d,[l,c]],[/\((ip[honed|\s\w*]+);/i],[t,[d,"Apple"],[l,c]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[d,t,[l,c]],[/\(bb10;\s(\w+)/i],[t,[d,"BlackBerry"],[l,c]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[t,[d,"Asus"],[l,w]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[d,"Sony"],[t,"Xperia Tablet"],[l,w]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[t,[d,"Sony"],[l,c]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[d,t,[l,"console"]],[/android.+;\s(shield)\sbuild/i],[t,[d,"Nvidia"],[l,"console"]],[/(playstation\s[34portablevi]+)/i],[t,[d,"Sony"],[l,"console"]],[/(sprint\s(\w+))/i],[[d,b.str,p.device.sprint.vendor],[t,b.str,p.device.sprint.model],[l,c]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[d,[t,/_/g," "],[l,c]],[/(nexus\s9)/i],[t,[d,"HTC"],[l,w]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[t,[d,"Huawei"],[l,c]],[/(microsoft);\s(lumia[\s\w]+)/i],[d,t,[l,c]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[t,[d,"Microsoft"],[l,"console"]],[/(kin\.[onetw]{3})/i],[[t,/\./g," "],[d,"Microsoft"],[l,c]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[t,[d,"Motorola"],[l,c]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[t,[d,"Motorola"],[l,w]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[d,m.trim],[t,m.trim],[l,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[t,/^/,"SmartTV"],[d,"Samsung"],[l,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[t,[d,"Sharp"],[l,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[d,"Samsung"],t,[l,w]],[/smart-tv.+(samsung)/i],[d,[l,"smarttv"],t],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[d,"Samsung"],t,[l,c]],[/sie-(\w*)/i],[t,[d,"Siemens"],[l,c]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[d,"Nokia"],t,[l,c]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[t,[d,"Acer"],[l,w]],[/android.+([vl]k\-?\d{3})\s+build/i],[t,[d,"LG"],[l,w]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[d,"LG"],t,[l,w]],[/(lg) netcast\.tv/i],[d,t,[l,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[t,[d,"LG"],[l,c]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[d,t,[l,w]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[t,[d,"Lenovo"],[l,w]],[/(lenovo)[_\s-]?([\w-]+)/i],[d,t,[l,c]],[/linux;.+((jolla));/i],[d,t,[l,c]],[/((pebble))app\/[\d\.]+\s/i],[d,t,[l,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[d,t,[l,c]],[/crkey/i],[[t,"Chromecast"],[d,"Google"]],[/android.+;\s(glass)\s\d/i],[t,[d,"Google"],[l,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[t,[d,"Google"],[l,w]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[t,[d,"Google"],[l,c]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[t,/_/g," "],[d,"Xiaomi"],[l,c]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[t,/_/g," "],[d,"Xiaomi"],[l,w]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[t,[d,"Meizu"],[l,c]],[/(mz)-([\w-]{2,})/i],[[d,"Meizu"],t,[l,c]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[t,[d,"OnePlus"],[l,c]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[t,[d,"RCA"],[l,w]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[t,[d,"Dell"],[l,w]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[t,[d,"Verizon"],[l,w]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[d,"Barnes & Noble"],t,[l,w]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[t,[d,"NuVision"],[l,w]],[/android.+;\s(k88)\sbuild/i],[t,[d,"ZTE"],[l,w]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[t,[d,"Swiss"],[l,c]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[t,[d,"Swiss"],[l,w]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[t,[d,"Zeki"],[l,w]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[d,"Dragon Touch"],t,[l,w]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[t,[d,"Insignia"],[l,w]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[t,[d,"NextBook"],[l,w]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[d,"Voice"],t,[l,c]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[d,"LvTel"],t,[l,c]],[/android.+;\s(PH-1)\s/i],[t,[d,"Essential"],[l,c]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[t,[d,"Envizen"],[l,w]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[d,t,[l,w]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[t,[d,"MachSpeed"],[l,w]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[d,t,[l,w]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[t,[d,"Rotor"],[l,w]],[/android.+(KS(.+))\s+build/i],[t,[d,"Amazon"],[l,w]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[d,t,[l,w]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[l,m.lowerize],d,t],[/[\s\/\(](smart-?tv)[;\)]/i],[[l,"smarttv"]],[/(android[\w\.\s\-]{0,9});.+build/i],[t,[d,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[u,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)/i],[[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,u],[/rv\:([\w\.]{1,9}).+(gecko)/i],[u,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[u,b.str,p.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[u,b.str,p.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],u],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[a,u],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],u],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],u],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,u],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],u],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],u],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,u],[/(haiku)\s(\w+)/i],[a,u],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[u,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[u,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,u]]},v=function e(i,n){if("object"===typeof i&&(n=i,i=void 0),!(this instanceof e))return new e(i,n).getResult();var s=i||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=n?m.extend(f,n):f;return this.getBrowser=function(){var e={name:void 0,version:void 0};return b.rgx.call(e,s,o.browser),e.major=m.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return b.rgx.call(e,s,o.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return b.rgx.call(e,s,o.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return b.rgx.call(e,s,o.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return b.rgx.call(e,s,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(e){return s=e,this},this};v.VERSION="0.7.20",v.BROWSER={NAME:a,MAJOR:"major",VERSION:u},v.CPU={ARCHITECTURE:"architecture"},v.DEVICE={MODEL:t,VENDOR:d,TYPE:l,CONSOLE:"console",MOBILE:c,SMARTTV:"smarttv",TABLET:w,WEARABLE:"wearable",EMBEDDED:"embedded"},v.ENGINE={NAME:a,VERSION:u},v.OS={NAME:a,VERSION:u},"undefined"!==typeof i?("undefined"!==typeof e&&e.exports&&(i=e.exports=v),i.UAParser=v):void 0===(s=function(){return v}.call(i,n,i,e))||(e.exports=s);var h=r&&(r.jQuery||r.Zepto);if("undefined"!==typeof h&&!h.ua){var g=new v;h.ua=g.getResult(),h.ua.get=function(){return g.getUA()},h.ua.set=function(e){g.setUA(e);var i=g.getResult();for(var n in i)h.ua[n]=i[n]}}}("object"===typeof window?window:this)}}]);