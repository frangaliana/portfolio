(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{33:function(e,n,t){"use strict";t.d(n,"c",function(){return O}),t.d(n,"a",function(){return x}),t.d(n,"b",function(){return g});t(32);var r=t(27),h=t.n(r),w=(t(45),t(0)),o=t.n(w),i=(t(108),t(109)),a=t.n(i),c=t(110),s=t.n(c);function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(t,!0).forEach(function(e){h()(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}var p,l,d={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},m=o.a.createContext();function j(){return l}function N(){return d}var P=function(){function e(){a()(this,e),this.usedNamespaces={}}return s()(e,[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach(function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function S(){return p}var g={type:"3rdParty",init:function(e){!function(e){d=f({},d,{},0<arguments.length&&void 0!==e?e:{})}(e.options.react),p=e}};function b(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var y={};function k(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&y[n[0]]||("string"==typeof n[0]&&(y[n[0]]=new Date),b.apply(void 0,n))}function C(n,e,t){n.loadNamespaces(e,function(){if(n.isInitialized)t();else{n.on("initialized",function e(){setTimeout(function(){n.off("initialized",e)},0),t()})}})}function E(e,r,n){var t=2<arguments.length&&void 0!==n?n:{};if(!r.languages||!r.languages.length)return k("i18n.languages were undefined or empty",r.languages),!0;var o=r.languages[0],i=!!r.options&&r.options.fallbackLng,a=r.languages[r.languages.length-1];if("cimode"===o.toLowerCase())return!0;function c(e,n){var t=r.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===t||2===t}return!(t.bindI18n&&-1<t.bindI18n.indexOf("languageChanging")&&r.services.backendConnector.backend&&r.isLanguageChangingTo&&!c(r.isLanguageChangingTo,e))&&(!!r.hasResourceBundle(o,e)||(!r.services.backendConnector.backend||!(!c(o,e)||i&&!c(a,e))))}var v=t(36),D=t.n(v);function I(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function O(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=Object(w.useContext)(m),o=j()&&r||{},i=o.defaultNS,a=t||o.i18n||S();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new P),!a){k("You will need pass in an i18next instance by using initReactI18next");var c=function(e){return Array.isArray(e)?e[e.length-1]:e},s=[c,{},!1];return s.t=c,s.i18n={},s.ready=!1,s}var u=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?I(t,!0).forEach(function(e){h()(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):I(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({},N(),{},a.options.react,{},n),f=u.useSuspense,p=e||i||a.options&&a.options.defaultNS;p="string"==typeof p?[p]:p||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(p);var l=(a.isInitialized||a.initializedStoreOnce)&&p.every(function(e){return E(e,a,u)});function d(){return{t:a.getFixedT(null,"fallback"===u.nsMode?p:p[0])}}var g=Object(w.useState)(d()),b=D()(g,2),y=b[0],v=b[1];Object(w.useEffect)(function(){var e=!0,n=u.bindI18n,t=u.bindI18nStore;function r(){e&&v(d())}return l||f||C(a,p,function(){e&&v(d())}),n&&a&&a.on(n,r),t&&a&&a.store.on(t,r),function(){e=!1,n&&a&&n.split(" ").forEach(function(e){return a.off(e,r)}),t&&a&&t.split(" ").forEach(function(e){return a.store.off(e,r)})}},[p.join()]);var O=[y.t,a,l];if(O.t=y.t,O.i18n=a,O.ready=l)return O;if(!l&&!f)return O;throw new Promise(function(e){C(a,p,function(){v(d()),e()})})}function x(e){var n=e.i18n,t=e.defaultNS,r=e.children;return l=!0,o.a.createElement(m.Provider,{value:{i18n:n,defaultNS:t}},r)}}}]);