(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"2+bC":function(e,i,t){"use strict";t.d(i,"a",(function(){return n})),t.d(i,"b",(function(){return o})),t.d(i,"c",(function(){return r}));var n=function(e){return"/par-famille/".concat(e.slug)},o=function(e){return"/par-fournisseur/".concat(e.slug)},r=function(e){return"/ref/".concat(e.id,"/").concat(e.slug)}},"8OQS":function(e,i){e.exports=function(e,i){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],i.indexOf(t)>=0||(o[t]=e[t]);return o}},Aiso:function(e,i,t){e.exports=t("dQHF")},QOt6:function(e,i,t){"use strict";t.d(i,"a",(function(){return f}));var n=t("nKUr"),o=t("LvDl"),r=t.n(o),a=t("Aiso"),c=t.n(a),s=t("YFqc"),d=t.n(s),u=t("2+bC"),l=(t("inqI"),t("kkiU"),t("wnhp"),function(e,i){return r.a.transform(e,(function(e,t){e[t[i]]=t}),{})});function f(e){var i=e.categories,t=e.products,o=e.showCategories,a=e.showVendors,s=e.vendors,f=l(i,"code"),g=l(s,"code");return Object(n.jsx)("ul",{className:"grid grid-cols-1 p-2 gap-2 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4",children:t.map((function(e,i){var t=f[e.categoryCode],s=g[e.vendorCode],l=Object(u.c)(e),h=r.a.get(e,"images[0]"),p=i<=1;return Object(n.jsxs)("li",{className:"bg-white relative rounded-lg p-2 h-cmgi-1/1-w md:h-cmgi-1/2-w lg:h-cmgi-1/3-w xl:h-cmgi-1/4-w 2xl:h-cmgi-1/4-2xl-w",children:[Object(n.jsx)("div",{className:"h-full relative w-full",children:h&&Object(n.jsx)(d.a,{href:l,prefetch:!1,children:Object(n.jsx)("a",{children:Object(n.jsx)(c.a,{className:"object-contain",src:h.href,sizes:"(min-width: 1536px) 22.5rem, (min-width: 1280px) 25vw, (min-width: 1024px) 33.333333vw, (min-width: 768px) 50vw, 100vw",alt:"".concat(t.name," \xab&nbsp;").concat(e.name,"&nbsp;\xbb"),layout:"fill",quality:75,priority:p})})})}),Object(n.jsxs)("div",{className:"absolute bg-labaleinebleue-white bg-opacity-75 bottom-0 left-0 p-2 right-0 rounded-lg",children:[Object(n.jsx)(d.a,{href:l,prefetch:!1,children:Object(n.jsx)("a",{className:"font-bold text-labaleinebleue-blue text-lg active:underline hover:underline",children:e.name})}),o&&Object(n.jsx)("div",{className:"text-gray-600 text-xs",children:t.name}),a&&Object(n.jsx)("div",{className:"text-gray-600 text-xs",children:s.name})]})]},"product:{productId}")}))})}f.defaultProps={showCategories:!0,showVendors:!0}},UWYU:function(e,i,t){"use strict";i.__esModule=!0,i.imageConfigDefault=i.VALID_LOADERS=void 0;i.VALID_LOADERS=["default","imgix","cloudinary","akamai"];i.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},YuTi:function(e,i){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},dEHY:function(e,i,t){"use strict";i.__esModule=!0,i.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,i,t){"use strict";var n=t("J4zp"),o=t("RIqP"),r=t("TqRt");i.__esModule=!0,i.default=function(e){var i=e.src,t=e.sizes,r=e.unoptimized,c=void 0!==r&&r,u=e.priority,f=void 0!==u&&u,g=e.loading,p=e.className,m=e.quality,b=e.width,y=e.height,j=e.objectFit,A=e.objectPosition,q=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition"]),z=t?"responsive":"intrinsic",O=!1;"unsized"in q?(O=Boolean(q.unsized),delete q.unsized):"layout"in q&&(q.layout&&(z=q.layout),delete q.layout);0;var R=!f&&("lazy"===g||"undefined"===typeof g);i&&i.startsWith("data:")&&(c=!0,R=!1);var k,S,_,N=(0,l.useIntersection)({rootMargin:"200px",disabled:!R}),E=n(N,2),I=E[0],C=E[1],D=!R||C,L=v(b),P=v(y),U=v(m),V={visibility:D?"visible":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:j,objectPosition:A};if("undefined"!==typeof L&&"undefined"!==typeof P&&"fill"!==z){var W=P/L,B=isNaN(W)?"100%":"".concat(100*W,"%");"responsive"===z?(k={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},S={display:"block",boxSizing:"border-box",paddingTop:B}):"intrinsic"===z?(k={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},S={boxSizing:"border-box",display:"block",maxWidth:"100%"},_='<svg width="'.concat(L,'" height="').concat(P,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===z&&(k={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:L,height:P})}else"undefined"===typeof L&&"undefined"===typeof P&&"fill"===z&&(k={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var F={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"};D&&(F=function(e){var i=e.src,t=e.unoptimized,n=e.layout,r=e.width,a=e.quality,c=e.sizes;if(t)return{src:i};var s=function(e,i){if("number"!==typeof e||"fill"===i||"responsive"===i)return{widths:h,kind:"w"};return{widths:o(new Set([e,2*e,3*e].map((function(e){return w.find((function(i){return i>=e}))||w[w.length-1]})))),kind:"x"}}(r,n),d=s.widths,u=s.kind,l=d.length-1,f=d.map((function(e,t){return"".concat(x({src:i,quality:a,width:e})," ").concat("w"===u?e:t+1).concat(u)})).join(", ");c||"w"!==u||(c=d.map((function(e,i){return i===l?"".concat(e,"px"):"(max-width: ".concat(e,"px) ").concat(e,"px")})).join(", "));return{src:i=x({src:i,quality:a,width:d[l]}),sizes:c,srcSet:f}}({src:i,unoptimized:c,layout:z,width:L,quality:U,sizes:t}));O&&(k=void 0,S=void 0,V=void 0);return s.default.createElement("div",{style:k},S?s.default.createElement("div",{style:S},_?s.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(_))}):null):null,s.default.createElement("img",Object.assign({},q,F,{decoding:"async",className:p,ref:I,style:V})))};var a=r(t("8OQS")),c=r(t("pVnL")),s=r(t("q1tI")),d=t("dEHY"),u=t("UWYU"),l=t("vNVm");var f=new Map([["imgix",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality,r=["auto=format","fit=max","w="+n],a="";o&&r.push("q="+o);r.length&&(a="?"+r.join("&"));return"".concat(i).concat(y(t)).concat(a)}],["cloudinary",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality,r=["f_auto","c_limit","w_"+n],a="";o&&r.push("q_"+o);r.length&&(a=r.join(",")+"/");return"".concat(i).concat(a).concat(y(t))}],["akamai",function(e){var i=e.root,t=e.src,n=e.width;return"".concat(i).concat(y(t),"?imwidth=").concat(n)}],["default",function(e){var i=e.root,t=e.src,n=e.width,o=e.quality;0;return"".concat(i,"?url=").concat(encodeURIComponent(t),"&w=").concat(n,"&q=").concat(o||75)}]]),g={deviceSizes:[640,768,1024,1280,1536],imageSizes:[16,32,48,64,96,128,256,384],path:"https://res.cloudinary.com/labaleinebleue/image/upload/",loader:"cloudinary"}||u.imageConfigDefault,h=g.deviceSizes,p=g.imageSizes,m=g.loader,b=g.path,w=(g.domains,[].concat(o(h),o(p)));function x(e){var i=f.get(m);if(i)return i((0,c.default)({root:b},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(m))}function v(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function y(e){return"/"===e[0]?e.slice(1):e}h.sort((function(e,i){return e-i})),w.sort((function(e,i){return e-i}))},inqI:function(e,i,t){"use strict";var n=t("17x9"),o=t.n(n),r={code:o.a.string.isRequired,name:o.a.string.isRequired,slug:o.a.string.isRequired};o.a.exact(r)},kkiU:function(e,i,t){"use strict";var n=t("17x9"),o=t.n(n),r={href:o.a.string.isRequired,width:o.a.number.isRequired,height:o.a.number.isRequired},a=o.a.exact(r),c={code:o.a.string.isRequired,id:o.a.string.isRequired,shortName:o.a.string.isRequired,name:o.a.string.isRequired,slug:o.a.string.isRequired,categoryCode:o.a.string.isRequired,vendorCode:o.a.string.isRequired,images:o.a.arrayOf(a)};o.a.exact(c)},pVnL:function(e,i){function t(){return e.exports=t=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},t.apply(this,arguments)}e.exports=t},wnhp:function(e,i,t){"use strict";var n=t("17x9"),o=t.n(n),r={code:o.a.string.isRequired,name:o.a.string.isRequired,slug:o.a.string.isRequired};o.a.exact(r)},yLpj:function(e,i){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}e.exports=t}}]);