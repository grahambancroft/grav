window.matchMedia||(window.matchMedia=function(){"use strict";var t=window.styleMedia||window.media;if(!t){var n,i=document.createElement("style"),e=document.getElementsByTagName("script")[0];i.type="text/css",i.id="matchmediajs-test",e.parentNode.insertBefore(i,e),n="getComputedStyle"in window&&window.getComputedStyle(i,null)||i.currentStyle,t={matchMedium:function(e){var t="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return i.styleSheet?i.styleSheet.cssText=t:i.textContent=t,"1px"===n.width}}}return function(e){return{matches:t.matchMedium(e||"all"),media:e||"all"}}}()),function(){if(window.matchMedia&&window.matchMedia("all").addListener)return;var c=window.matchMedia,a=c("only all").matches,d=!1,t=0,m=[],r=function(e){clearTimeout(t),t=setTimeout(function(){for(var e=0,t=m.length;e<t;e++){var n=m[e].mql,i=m[e].listeners||[],a=c(n.media).matches;if(a!==n.matches){n.matches=a;for(var d=0,r=i.length;d<r;d++)i[d].call(window,n)}}},30)};window.matchMedia=function(e){var t=c(e),i=[],n=0;return t.addListener=function(e){a&&(d||(d=!0,window.addEventListener("resize",r,!0)),0===n&&(n=m.push({mql:t,listeners:i})),i.push(e))},t.removeListener=function(e){for(var t=0,n=i.length;t<n;t++)i[t]===e&&i.splice(t,1)},t}}();