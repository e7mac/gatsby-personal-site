(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{QeBL:function(e,n,t){"use strict";t.r(n),t.d(n,"pageQuery",(function(){return d}));var r=t("q1tI"),i=t.n(r),o=t("Rr7f"),a=t("9u5D"),c=t("soUV"),u=t("T+OK"),d="3159585216";n.default=function(e){var n=e.data.site.siteMetadata.title;return i.a.createElement(c.a,{title:n,transparentNavigation:!0},i.a.createElement(u.a,null),i.a.createElement(a.a,{title:"Home",keywords:["blog","gatsby","typescript","javascript","portfolio","react"]}),i.a.createElement("section",null,i.a.createElement(o.a,{fixed:!0})))}},Rr7f:function(e,n,t){"use strict";var r=t("AcpX"),i=t("q1tI"),o=t.n(i),a=t("vOnD"),c=t("v5mr"),u=t("hfLc");function d(){var e=Object(r.a)(["\n        text-align: left;\n        left: 0;\n        right: auto;\n      "]);return d=function(){return e},e}function l(){var e=Object(r.a)(["\n    font-size: 1.35rem;\n  "]);return l=function(){return e},e}function s(){var e=Object(r.a)(["\n    max-width: 100%;\n    font-size: 1.5rem;\n  "]);return s=function(){return e},e}function f(){var e=Object(r.a)(["\n    max-width: 32rem;\n  "]);return f=function(){return e},e}var m=a.e.div.withConfig({displayName:"Intro__TitleWrapper",componentId:"sc-1aexaod-0"})(["pointer-events:none;font-size:",";max-width:36rem;line-height:1.3em;"," "," "," ",""],(function(e){return e.theme.fontSizes.large}),(function(e){return e.theme.media.max.md(f())}),(function(e){return e.theme.media.max.sm(s())}),(function(e){return e.theme.media.max.xs(l())}),(function(e){return e.fixed?Object(a.d)(["",";position:absolute;top:0;right:0;text-align:right;",""],Object(c.h)("padding"),(function(e){return e.theme.media.max.md(d())})):Object(a.d)(["text-align:left;"])})),h=a.e.h1.withConfig({displayName:"Intro__Title",componentId:"sc-1aexaod-1"})(["-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0px;font-family:inherit;font-size:inherit;span{color:",";text-decoration:line-through;}"],(function(e){return e.theme.colors.secondary}));n.a=function(e){var n=u.a.intro.title;return o.a.createElement(m,e,o.a.createElement(h,null,n))}},"T+OK":function(e,n,t){"use strict";var r=t("q1tI"),i=t.n(r),o=t("vOnD"),a=t("fsBL"),c=function(){for(var e=[],n=0;n<Object(a.b)();n++)e.push("\n      radial-gradient(\n        circle at "+Object(a.b)(100)+"% "+Object(a.b)(100)+"%,\n        #"+("00000"+(Math.random()*(1<<24)|0).toString(16)).slice(-6)+"0d,\n        transparent "+Object(a.b)(100,60)+"%\n      )\n  ");return e.join(",")};n.a=function(e){var n,t,a=e.containerOpacity,u=void 0===a?1:a,d="undefined"!=typeof window&&(window.innerWidth+window.innerHeight)/8,l=1,s=[],f=!1,m={x:null,y:null},h=!0,v=[],x=-1,y=e.normalVelocity,p=void 0===y?5e-4:y,b={x:0,y:0,tx:0,ty:0,z:p},w=e.addEventListeners,g=void 0===w||w,E=function(e,n){if(h){if("number"==typeof m.x&&"number"==typeof m.y){var t=e-m.x,r=n-m.y;b.tx=b.tx-t/8*l*(f?1:-1),b.ty=b.ty-r/8*l*(f?1:-1)}m={x:e,y:n}}},z=function(e){l=window.devicePixelRatio||1,n=window.innerWidth*l,t=window.innerHeight*l,e.width=n,e.height=t,s.forEach((function(e){e.x=Math.random()*n,e.y=Math.random()*t}))},L=function(e){m={x:null,y:null},h=!e,b.z=e?.05:p},M=i.a.useRef(null),O=i.a.useState(null),j=O[0],k=O[1];i.a.useEffect((function(){var e=function(e){f=!0,E(e.clientX,e.clientY)},r=function(e){f=!0,E(e.touches[0].clientX,e.touches[0].clientY),e.preventDefault()},i=function(){f=!1,m={x:null,y:null}},o=function(){f=!1,m={x:null,y:null}},a=function(){z(M.current)},c=function(e){L(e.deltaY<0)},u=function(e){!function(e){v=v.filter((function(n){return n.pointerId!==e.pointerId}))}(e),v.length<2&&(x=-1)};if(M.current){var h=M.current.getContext("2d");if(h){var y=M.current;g&&(y.addEventListener("pointerdown",(function(e){v.push(e)})),y.addEventListener("pointermove",(function(e){for(var n=0;n<v.length;n++)if(e.pointerId===v[n].pointerId){v[n]=e;break}if(2==v.length){var t=Math.abs(v[0].clientX-v[1].clientX);L(x>0&&t>x),x=t}})),y.addEventListener("pointerup",u),y.addEventListener("pointercancel",u),y.addEventListener("pointerout",u),y.addEventListener("pointerleave",u),window.addEventListener("wheel",c),window.addEventListener("resize",a),y.addEventListener("mousemove",e),y.addEventListener("touchmove",r),y.addEventListener("touchend",o),document.addEventListener("mouseleave",i)),k(h)}}if(j){var p=function(){b.tx*=.96,b.ty*=.96,b.x+=.8*(b.tx-b.x),b.y+=.8*(b.ty-b.y),s.forEach((function(e){e.x+=b.x*e.z+(e.x-n/2)*b.z*e.z,e.y+=b.y*e.z+(e.y-t/2)*b.z*e.z,e.z+=b.z,(e.x<-50||e.x>n+50||e.y<-50||e.y>t+50)&&function(e){var r="z",i=Math.abs(b.x),o=Math.abs(b.y);(i>1||o>1)&&(r="h"===(i>o?Math.random()<i/(i+o)?"h":"v":Math.random()<o/(i+o)?"v":"h")?b.x>0?"l":"r":b.y>0?"t":"b");e.z=.2+.8*Math.random(),"z"===r?(e.x=Math.random()*n,e.y=Math.random()*t,e.z=.1):"l"===r?(e.x=-50,e.y=t*Math.random()):"r"===r?(e.x=n+50,e.y=t*Math.random()):"t"===r?(e.x=n*Math.random(),e.y=-50):"b"===r&&(e.x=n*Math.random(),e.y=t+50)}(e)}))};!function(){for(var e=0;e<d;e++)s.push({x:0,y:0,z:.2+.8*Math.random()})}(),z(M.current),function e(){j.clearRect(0,0,n,t),p(),s.forEach((function(e){j.beginPath(),j.lineCap="round",j.lineWidth=3*e.z*l,j.strokeStyle="rgba(255,255,255,"+(.5+.5*Math.random())+")",j.beginPath(),j.moveTo(e.x,e.y);var n=2*b.x,t=2*b.y;Math.abs(n)<.1&&(n=.5),Math.abs(t)<.1&&(t=.5),j.lineTo(e.x+n,e.y+t),j.stroke()})),requestAnimationFrame(e)}()}return function(){if(s.length=0,M.current){var n=M.current;n.removeEventListener("mousemove",e),n.removeEventListener("touchmove",r),n.removeEventListener("touchend",o),window.removeEventListener("wheel",c),window.removeEventListener("resize",a),document.removeEventListener("mouseleave",i)}}}));var I=Object(r.useContext)(o.a);return i.a.createElement("canvas",{id:"canvas",ref:M,style:{backgroundColor:I.colors.black,backgroundImage:c(),opacity:u,position:"fixed",width:"100%",height:"100%"}})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-05c6b8d98b8d2efd7011.js.map