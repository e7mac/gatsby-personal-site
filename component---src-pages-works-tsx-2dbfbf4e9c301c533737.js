(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"84bF":function(e,t,n){"use strict";n("OGtf")("small",(function(e){return function(){return e(this,"small","","")}}))},Cqiw:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);function i(){var e=l(["\n    margin: 2rem auto 0;\n    padding: 0 2rem 6rem;\n  "]);return i=function(){return e},e}function a(){var e=l(["\n    width: 100%;\n    margin: 4rem auto 0;\n    padding: 0 3rem 6rem;\n  "]);return a=function(){return e},e}function c(){var e=l(["\n    width: 1.45rem;\n    margin: 8rem auto 3rem;\n    width: calc(100% - 11rem * 2);\n  "]);return c=function(){return e},e}function l(e,t){return t||(t=e.slice(0)),e.raw=t,e}var u=n("vOnD").e.div.withConfig({displayName:"Content__ContentContainer",componentId:"sc-1q50de9-0"})(["max-width:68rem;width:calc(100% - 9.25rem * 2);margin:11rem auto 5rem;position:absolute;height:100%;top:0;left:0;right:0;bottom:0;"," "," ",""],(function(e){return e.theme.media.lg(c())}),(function(e){return e.theme.media.md(a())}),(function(e){return e.theme.media.sm(i())}));t.a=function(e){var t=e.children;return o.a.createElement(u,null,t)}},Q3IO:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return b}));n("SMB2");var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),a=n("9u5D"),c=n("soUV"),l=n("T+OK"),u=n("Cqiw"),s=n("s1X6"),m=n("vOnD"),d=m.e.div.withConfig({displayName:"works__Header",componentId:"sc-1czge1l-0"})(["padding-left:1rem;"]),f=m.e.h1.withConfig({displayName:"works__Title",componentId:"sc-1czge1l-1"})(["font-size:",";font-weight:",";"],(function(e){return e.theme.fontSizes.xLarge}),(function(e){return e.theme.fontWeights.regular})),h=m.e.p.withConfig({displayName:"works__Description",componentId:"sc-1czge1l-2"})(["font-size:",";font-weight:",";padding:1rem 0 2rem 0;"],(function(e){return e.theme.fontSizes.mediumLarge}),(function(e){return e.theme.fontWeights.thin})),g=m.e.div.withConfig({displayName:"works__Section",componentId:"sc-1czge1l-3"})(["padding:1rem 0;"]),p=m.e.div.withConfig({displayName:"works__SectionHeader",componentId:"sc-1czge1l-4"})(["padding-left:1rem;display:flex;align-items:center;"]),v=m.e.h2.withConfig({displayName:"works__SectionTitle",componentId:"sc-1czge1l-5"})(["font-size:",";font-weight:",";"],(function(e){return e.theme.fontSizes.mediumLarge}),(function(e){return e.theme.fontWeights.regular})),w=Object(m.e)(i.Link).withConfig({displayName:"works__MoreLink",componentId:"sc-1czge1l-6"})(["color:",";background-color:",";font-size:",";font-weight:",";border-radius:5px;box-sizing:border-box;text-decoration:none;display:block;padding:0.4rem 0.6rem;border-bottom:0;white-space:nowrap;line-height:1;margin:0.2rem 0 0.2rem 1rem;transition:0.4s ease;&:hover{color:",";background-color:",";}"],(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.light+"40"}),(function(e){return e.theme.fontSizes.normal}),(function(e){return e.theme.fontWeights.bold}),(function(e){return e.theme.colors.darkest}),(function(e){return e.theme.colors.light})),y=m.e.div.withConfig({displayName:"works__SectionBody",componentId:"sc-1czge1l-7"})(["padding:0.2rem 0;"]),b="3232140691";t.default=function(e){var t=e.data,n=t.site.siteMetadata.title,r=t.allMarkdownRemark.edges;return o.a.createElement(c.a,{title:n},o.a.createElement(a.a,{title:"Blog",keywords:["blog","gatsby","typescript","javascript","portfolio","react"]}),o.a.createElement(l.a,{normalVelocity:1e-4,containerOpacity:.3,addEventListeners:!1}),o.a.createElement(u.a,null,o.a.createElement(d,null,o.a.createElement(f,null,"Works"),o.a.createElement(h,null,"Things I do and write about")),o.a.createElement(g,null,o.a.createElement(p,null,o.a.createElement(v,null,"Latest posts"),o.a.createElement(w,{to:"/blog"},"All posts")),o.a.createElement(y,null,o.a.createElement(s.a,{posts:r}))),o.a.createElement(g,null,o.a.createElement(p,null,o.a.createElement(v,null,"Latest projects"),o.a.createElement(w,{to:"/blog"},"All projects")),o.a.createElement(y,null,o.a.createElement(s.a,{posts:r})))))}},"T+OK":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=(n("a1Th"),n("Btvt"),function(e,t){return void 0===e&&(e=10),void 0===t&&(t=1),Math.floor(Math.random()*e)+t}),c=function(){for(var e=[],t=0;t<a();t++)e.push("\n      radial-gradient(\n        circle at "+a(100)+"% "+a(100)+"%,\n        #"+("00000"+(Math.random()*(1<<24)|0).toString(16)).slice(-6)+"0d,\n        transparent "+a(100,60)+"%\n      )\n  ");return e.join(",")};t.a=function(e){var t,n,a=e.containerOpacity,l=void 0===a?1:a,u="undefined"!=typeof window&&(window.innerWidth+window.innerHeight)/8,s=1,m=[],d=!1,f={x:null,y:null},h=!0,g=[],p=-1,v=e.normalVelocity,w=void 0===v?5e-4:v,y={x:0,y:0,tx:0,ty:0,z:w},b=e.addEventListeners,x=void 0===b||b,E=function(e,t){if(h){if("number"==typeof f.x&&"number"==typeof f.y){var n=e-f.x,r=t-f.y;y.tx=y.tx-n/8*s*(d?1:-1),y.ty=y.ty-r/8*s*(d?1:-1)}f={x:e,y:t}}},z=function(e){s=window.devicePixelRatio||1,t=window.innerWidth*s,n=window.innerHeight*s,e.width=t,e.height=n,m.forEach((function(e){e.x=Math.random()*t,e.y=Math.random()*n}))},I=function(e){console.log("accelerates"),f={x:null,y:null},h=!e,y.z=e?.1:w},L=o.a.useRef(null),k=o.a.useState(null),_=k[0],C=k[1];o.a.useEffect((function(){var e=function(e){d=!0,E(e.clientX,e.clientY)},r=function(e){d=!0,E(e.touches[0].clientX,e.touches[0].clientY),e.preventDefault()},o=function(){d=!1,f={x:null,y:null}},i=function(){d=!1,f={x:null,y:null}},a=function(){z(L.current)},c=function(e){I(e.deltaY<0)},l=function(e){!function(e){g=g.filter((function(t){return t.pointerId!==e.pointerId}))}(e),g.length<2&&(p=-1)};if(L.current){var h=L.current.getContext("2d");if(h){var v=L.current;x&&(v.addEventListener("pointerdown",(function(e){g.push(e)})),v.addEventListener("pointermove",(function(e){for(var t=0;t<g.length;t++)if(e.pointerId===g[t].pointerId){g[t]=e;break}if(2==g.length){var n=Math.abs(g[0].clientX-g[1].clientX);I(p>0&&n>p),p=n}})),v.addEventListener("pointerup",l),v.addEventListener("pointercancel",l),v.addEventListener("pointerout",l),v.addEventListener("pointerleave",l),window.addEventListener("wheel",c),window.addEventListener("resize",a),v.addEventListener("mousemove",e),v.addEventListener("touchmove",r),v.addEventListener("touchend",i),document.addEventListener("mouseleave",o)),C(h)}}if(_){var w=function(){y.tx*=.96,y.ty*=.96,y.x+=.8*(y.tx-y.x),y.y+=.8*(y.ty-y.y),m.forEach((function(e){e.x+=y.x*e.z+(e.x-t/2)*y.z*e.z,e.y+=y.y*e.z+(e.y-n/2)*y.z*e.z,e.z+=y.z,(e.x<-50||e.x>t+50||e.y<-50||e.y>n+50)&&function(e){var r="z",o=Math.abs(y.x),i=Math.abs(y.y);(o>1||i>1)&&(r="h"===(o>i?Math.random()<o/(o+i)?"h":"v":Math.random()<i/(o+i)?"v":"h")?y.x>0?"l":"r":y.y>0?"t":"b");e.z=.2+.8*Math.random(),"z"===r?(e.x=Math.random()*t,e.y=Math.random()*n,e.z=.1):"l"===r?(e.x=-50,e.y=n*Math.random()):"r"===r?(e.x=t+50,e.y=n*Math.random()):"t"===r?(e.x=t*Math.random(),e.y=-50):"b"===r&&(e.x=t*Math.random(),e.y=n+50)}(e)}))};!function(){for(var e=0;e<u;e++)m.push({x:0,y:0,z:.2+.8*Math.random()})}(),z(L.current),function e(){_.clearRect(0,0,t,n),w(),m.forEach((function(e){_.beginPath(),_.lineCap="round",_.lineWidth=3*e.z*s,_.strokeStyle="rgba(255,255,255,"+(.5+.5*Math.random())+")",_.beginPath(),_.moveTo(e.x,e.y);var t=2*y.x,n=2*y.y;Math.abs(t)<.1&&(t=.5),Math.abs(n)<.1&&(n=.5),_.lineTo(e.x+t,e.y+n),_.stroke()})),requestAnimationFrame(e)}()}return function(){if(m.length=0,L.current){var t=L.current;t.removeEventListener("mousemove",e),t.removeEventListener("touchmove",r),t.removeEventListener("touchend",i),window.removeEventListener("wheel",c),window.removeEventListener("resize",a),document.removeEventListener("mouseleave",o)}}}),[_]);var M=Object(r.useContext)(i.a);return o.a.createElement("canvas",{id:"canvas",ref:L,style:{backgroundColor:M.colors.black,backgroundImage:c(),opacity:l,position:"fixed",width:"100%",height:"100%"}})}},s1X6:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=(n("Vd3H"),n("84bF"),n("SMB2"),n("Wbzz"));function c(){var e=s(["\n    max-width: 100%;\n  "]);return c=function(){return e},e}function l(){var e=s(["\n    max-width: 100%;\n  "]);return l=function(){return e},e}function u(){var e=s(["\n     flex-direction:  column-reverse;\n  "]);return u=function(){return e},e}function s(e,t){return t||(t=e.slice(0)),e.raw=t,e}var m=i.e.article.withConfig({displayName:"PostsListItem__ItemContainer",componentId:"hqhtfb-0"})(["transition:0.2s ease;padding:1rem;border-radius:5px;display:flex;flex-wrap:wrap;justify-content:space-between;position:relative;"," &:hover{background-color:",";}"],(function(e){return e.theme.media.md(u())}),(function(e){return e.theme.colors.light+"40"})),d=i.e.div.withConfig({displayName:"PostsListItem__ItemHeader",componentId:"hqhtfb-1"})(["max-width:70%;",""],(function(e){return e.theme.media.md(l())})),f=i.e.h3.withConfig({displayName:"PostsListItem__ItemTitle",componentId:"hqhtfb-2"})(["color:",";font-size:",";font-weight:",";"],(function(e){return e.theme.colors.lightest}),(function(e){return e.theme.fontSizes.medium}),(function(e){return e.theme.fontWeights.bold})),h=i.e.div.withConfig({displayName:"PostsListItem__ItemTags",componentId:"hqhtfb-3"})(["padding:0.4rem 0;display:flex;flex-wrap:wrap;margin-left:-0.3rem;"]),g=Object(i.e)(a.Link).withConfig({displayName:"PostsListItem__Tag",componentId:"hqhtfb-4"})(["padding:0.4rem 0.6rem;color:",";background-color:",";font-weight:",";font-size:",";border-radius:3rem;margin:0.2rem;text-decoration:none;border-bottom:0;white-space:nowrap;line-height:1;transition:0.2s ease;&:hover{color:",";background-color:",";}"],(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.light+"40"}),(function(e){return e.theme.fontWeights.bold}),(function(e){return e.theme.fontSizes.small}),(function(e){return e.theme.colors.darkest}),(function(e){return e.theme.colors.light})),p=i.e.div.withConfig({displayName:"PostsListItem__ItemDate",componentId:"hqhtfb-5"})(["max-width:30%;padding-bottom:0.4rem;color:",";font-size:",";font-weight:",";",""],(function(e){return e.theme.colors.mediumLight}),(function(e){return e.theme.fontSizes.normal}),(function(e){return e.theme.fontWeights.regular}),(function(e){return e.theme.media.md(c())})),v=function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug,r=t.frontmatter.tags;return o.a.createElement(a.Link,{to:t.fields.slug},o.a.createElement(m,null,o.a.createElement(d,null,o.a.createElement(f,null,n),o.a.createElement(h,null,r&&r.sort().map((function(e){return o.a.createElement(g,{to:"/tags/"+e+"/",key:e},e)})))),o.a.createElement(p,null,t.frontmatter.date)))},w=i.e.section.withConfig({displayName:"PostsList__PostsListContainer",componentId:"sc-1fsbild-0"})(["margin:1.5rem auto 0;"]),y=function(e){var t=e.posts;return o.a.createElement(w,null,t.map((function(e){var t=e.node;return o.a.createElement(v,{key:t.fields.slug,node:t})})))}}}]);
//# sourceMappingURL=component---src-pages-works-tsx-2dbfbf4e9c301c533737.js.map