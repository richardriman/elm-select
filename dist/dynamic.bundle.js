!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@icelab/defo")):"function"==typeof define&&define.amd?define(["@icelab/defo"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).defo)}(this,function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const c=()=>{};let l;const r={characterData:!0,subtree:!0};t(e).default({prefix:"es",views:{dynamicSelectInput:function(e,t){var n,i,d,o,u,f,a=document.getElementById(t.sizerId);return a&&(n=e,i=t,t=(e=a).getBoundingClientRect().width,l=new MutationObserver((d=e,o=n,u=t,f=i,()=>{var e=d.getBoundingClientRect().width-u;const t=e<f.defaultInputWidth?f.defaultInputWidth:e+f.defaultInputWidth;o.style.width=`${t.toString()}px`})),l.observe(a,r)),{destroy:c,update:c}}}})});