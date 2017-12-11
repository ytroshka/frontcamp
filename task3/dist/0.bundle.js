webpackJsonp([0],{331:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();t(332);var o=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}return r(n,[{key:"renderArticles",value:function(n){var e=this,t=document.getElementById("articles");t.innerHTML="",n.forEach(function(n){var r=document.createElement("article");r.innerHTML=e.createArticle(n),t.appendChild(r)})}},{key:"createArticle",value:function(n){console.log(n);var e=n.author,t=n.description,r=n.publishedAt,o=n.title,i=n.urlToImage,a=n.url;return'\n                <a class="image-wrapper" href="'+(a||"")+'" target="_blank">\n                    <img src="'+(i||"images/placeholder.png")+'" alt="'+(o||"")+'"/>\n                </a>\n                <a href="'+(a||"")+'" target="_blank">\n                    <h2>'+(o||"")+'</h2>\n                </a>\n                <span class="date">'+(r&&new Date(r).toLocaleDateString()||"")+"</span>\n                <p>"+(t||"")+'</p>\n                <span class="author">'+(e||"")+"</span>\n            "}}]),n}();e.default=o},332:function(n,e,t){var r=t(333);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0;t(335)(r,o);r.locals&&(n.exports=r.locals)},333:function(n,e,t){(n.exports=t(334)(void 0)).push([n.i,"#articles {\n  font-size: 0;\n  column-count: 2;\n  column-gap: 10px; }\n\n#articles > * {\n  font-size: 1rem; }\n\narticle {\n  display: inline-block;\n  width: 100%;\n  vertical-align: top;\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px solid #e5e5e5; }\n\n.image-wrapper {\n  text-align: center; }\n\nimg {\n  max-width: 100%;\n  font-size: 12px; }\n\na {\n  display: block;\n  text-decoration: none;\n  color: indianred; }\n\na:hover,\na:focus {\n  text-decoration: underline; }\n\nh2 {\n  margin: 10px 0;\n  text-transform: uppercase;\n  font-size: 20px; }\n\nspan {\n  font-size: 12px;\n  color: #777; }\n\n.author {\n  display: block;\n  text-align: right; }\n\n@media only screen and (max-width: 768px) {\n  #articles {\n    column-count: 1; }\n  img {\n    max-height: 300px; } }\n",""])},334:function(n,e,t){"use strict";function r(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(r),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=r(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},335:function(n,e,t){function r(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=f[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],e))}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(u(r.parts[i],e));f[r.id]={id:r.id,refs:1,parts:a}}}}function o(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function i(n,e){var t=d(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=m[m.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),m.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=d(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,o)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=m.indexOf(n);e>=0&&m.splice(e,1)}function s(n){var e=document.createElement("style");return n.attrs.type="text/css",c(e,n.attrs),i(n,e),e}function c(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function u(n,e){var t,r,o,u;if(e.transform&&n.css){if(!(u=e.transform(n.css)))return function(){};n.css=u}if(e.singleton){var f=v++;t=h||(h=s(e)),r=l.bind(null,t,f,!1),o=l.bind(null,t,f,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",c(e,n.attrs),i(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=b(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){a(t),t.href&&URL.revokeObjectURL(t.href)}):(t=s(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){a(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}function l(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}var f={},p=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),d=function(n){var e={};return function(n){if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),h=null,v=0,m=[],b=t(336);n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=p()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=o(n,e);return r(t,e),function(n){for(var i=[],a=0;a<t.length;a++){var s=t[a];(c=f[s.id]).refs--,i.push(c)}if(n){r(o(n,e),e)}for(a=0;a<i.length;a++){var c;if(0===(c=i[a]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete f[c.id]}}}};var g=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},336:function(n,e,t){"use strict";n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}});