!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("base"),require("core"),require("ui")):"function"==typeof define&&define.amd?define(["base","core","ui"],r):"object"==typeof exports?exports["widget-p2p-tab"]=r(require("base"),require("core"),require("ui")):e["widget-p2p-tab"]=r(e.base,e.core,e.ui)}(this,function(e,r,n){return function(e){function r(t){if(n[t])return n[t].exports;var o=n[t]={exports:{},id:t,loaded:!1};return e[t].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var n={};return r.m=e,r.c=n,r.p="",r(0)}([function(e,r,n){var t;(function(e){t=function(require,e,r){"use strict";function t(){}r.name="widget-p2p-tab";var o=n(1),i=n(2),u=n(3),l=[i.name,u.name];r.exports=o.createModule(r.name,l).controller(n(4)).run(t)}.call(r,n,r,e),!(void 0!==t&&(e.exports=t))}).call(r,n(5)(e))},function(r,n,t){r.exports=e},function(e,n,t){e.exports=r},function(e,r,t){e.exports=n},function(e,r,n){var t;t=function(require,e,r){"use strict";e.P2PTabController=function(e,r,n,t){var o=t,i=function(){e.p2pService=n,e.p2pService.getUserEnrollmentDetails().then(function(r){e.userEnrolled=!0},function(r){404===r.status?e.userEnrolled=!1:e.p2pService.error=!0}),e.tabs=[{title:"Sign Up",pubsubMessage:"launchpad-retail.openP2PEnrollment",visible:function(){return!e.userEnrolled}},{title:"Overview",pubsubMessage:"launchpad-retail.openP2PTransactions",visible:function(){return e.userEnrolled}},{title:"Preferences",pubsubMessage:"launchpad-retail.openP2PPreferences",visible:function(){return e.userEnrolled}}],o.subscribe("launchpad-retail.p2pEnrollmentComplete",function(r){e.$apply(function(){e.userEnrolled=r.verified})})};e.loadP2PWidgetByBehavior=function(e,r){(r&&13===r.which||!r)&&o.publish(e)},i()},e.P2PTabController.$inject=["$scope","lpWidget","P2PService","lpCoreBus"]}.call(r,n,r,e),!(void 0!==t&&(e.exports=t))},function(e,r,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}])});