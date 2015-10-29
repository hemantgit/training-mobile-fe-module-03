!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i(require("base"),require("core"),require("ui")):"function"==typeof define&&define.amd?define(["base","core","ui"],i):"object"==typeof exports?exports["widget-notifications"]=i(require("base"),require("core"),require("ui")):t["widget-notifications"]=i(t.base,t.core,t.ui)}(this,function(t,i,o){return function(t){function i(n){if(o[n])return o[n].exports;var e=o[n]={exports:{},id:n,loaded:!1};return t[n].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}var o={};return i.m=t,i.c=o,i.p="",i(0)}([function(t,i,o){var n;(function(t){n=function(require,t,i){"use strict";function n(t){}i.name="widget-notifications";var e=o(2),c=o(3),r=o(4),a=[c.name,r.name];n.$inject=["lpWidget"],i.exports=e.createModule(i.name,a).constant(o(5)).controller(o(6)).factory(o(7)).directive(o(8)).run(n)}.call(i,o,i,t),!(void 0!==n&&(t.exports=n))}).call(i,o(1)(t))},function(t,i){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(i,o){i.exports=t},function(t,o){t.exports=i},function(t,i){t.exports=o},function(t,i,o){var n;n=function(require,t,i){"use strict";t.widgetPrefs={NOTIFICATIONS_ENDPOINT:"notificationsEndpoint",CLOSE_NOTIFICATION_ENDPOINT:"closeNotificationEndpoint",POLL_INTERVAL:"pollInterval",ALLOW_PUBSUB:"allowPubsub"}}.call(i,o,i,t),!(void 0!==n&&(t.exports=n))},function(t,i,o){var n;n=function(require,t,i){"use strict";var n=function(t){t.$$phase||t.$apply()},e=o(2).queue;t.NotificationsController=function(t,i,o,c,r,a,s,l,f,u){function d(i){if(i.notification){var o=i.notification;o.container&&o.container.type&&(g.template="templates/type-"+o.container.type+".html"),("object"==typeof o.data||o.data)&&window.angular.extend(o,o.data),o.className=g.getAlertClass(o),o.message=u.escape(o.message),b.addNotification(i.notification),g.closeAllButton=!b.notifications.some(function(t){return!t.closable}),n(t)}}var p=f,g=this;this.template="templates/type-panel.html",this.closeAllButton=!1,this.locale="en-US",this.offsetTopCorrection={},this.offsetMarginCorrection={},this.fixedBar=u.parseBoolean(o.getPreference("fixedBar"));var h=o.getPreference(a.NOTIFICATIONS_ENDPOINT),N=o.getPreference(a.CLOSE_NOTIFICATION_ENDPOINT),v=u.parseBoolean(o.getPreference(a.ALLOW_PUBSUB)),m=parseInt(o.getPreference(a.POLL_INTERVAL),10);r.configureNotifications({ignore:[h]});var b=s.getInstance({notificationsEndpoint:h,closeNotificationEndpoint:N,onNotificationAdded:function(t){o.model.fireEvent("notification-added",!0,!0,{notification:t})}});this.model=b,"null"!==c.userId&&(b.loadNotifications(),!isNaN(m)&&m>999&&h&&b.startPolling(m)),v&&(e.onPush(function(i,o){var c="launchpad-widget-notification-retry_",r=c+i.contextId,a=b.getNotificationById(r);a?(a.data.message=a.data.message.concat(i.messages),n(t)):d({notification:{id:r,level:i.notification&&i.notification.level||"severe",data:{message:[].concat(i.messages)},container:{template:"templates/retry.html"},retry:{action:function(){e.retry(o).then(function(){g.closeNotification({id:r})})},cancel:function(){e.cancel(o).then(function(){g.closeNotification({id:r})})}}}})}),p.subscribe("launchpad.add-notification",d),p.subscribe("launchpad.remove-notification",function(i){i.notification&&i.notification.id&&(b.removeNotification(i.notification.id),n(t))}),p.subscribe("launchpad-retail.offsetTopCorrection",function(i){i.offsetTopCorrection>=0&&(g.offsetTopCorrection={top:i.offsetTopCorrection},g.offsetMarginCorrection=g.fixedBar?{}:{top:i.offsetTopCorrection},n(t))})),this.getAlertClass=b.getAlertClass,this.isDesignMode=function(){return c.designMode},this.closeNotification=function(i){b.closeNotification(i).then(function(){b.notifications.length>0&&t.$broadcast("lp.notifications.focus")})},this.closeAllNotifications=function(){b.notifications.forEach(function(t){b.closeNotification(t)})}},t.NotificationsController.$inject=["$scope","$rootElement","lpWidget","lpPortal","lpCoreHttpInterceptor","widgetPrefs","NotificationsModel","i18nUtils","lpCoreBus","lpCoreUtils"]}.call(i,o,i,t),!(void 0!==n&&(t.exports=n))},function(t,i,o){var n;n=function(require,t,i){"use strict";t.NotificationsModel=function(t,i,o){var n=function(t){t=t||{},this.notifications=[],this.notificationsEndpoint=t.notificationsEndpoint,this.closeNotificationEndpoint=t.closeNotificationEndpoint,this.updateReceivedEndpoint=t.updateReceivedEndpoint,this.polling=!1,this.onNotificationAdded=t.onNotificationAdded,this.loading=!1};return n.prototype.startPolling=function(t){var o=this;if(!this.polling){this.polling=!0;var n=function(){var e=o.loadNotifications();e.success(function(){o.pollingTimeout=i(function(){n()},t)})};this.pollingTimeout=i(function(){n()},t)}},n.prototype.stopPolling=function(){this.pollingTimeout&&(i.cancel(this.pollingTimeout),this.polling=!1)},n.prototype.loadNotifications=function(){var t=this,i=o.getInstance({endpoint:this.notificationsEndpoint,cacheTimeout:0});this.loading=!0;var n=i.read();return n.success(function(i){i.messages&&i.messages.forEach(function(i){i.className=t.getAlertClass(i),t.addNotification(i)})}),n.error(function(i){i.errors&&(t.errorCode=i.errors[0])}),n["finally"](function(){t.loading=!1}),n},n.prototype.getAlertClass=function(t){var i=t.level.toLowerCase(),o=["info","severe","warning","success"].indexOf(i)>-1;return i="severe"===i?"danger":i,"alert-"+(o?i:"info")},n.prototype.addNotification=function(t){if("string"==typeof t.id||"number"==typeof t.id){for(var i=!1,o=0;o<this.notifications.length&&!i;o++)t.id&&this.notifications[o].id===t.id&&(this.notifications[o]=t,i=!0);i||(this.notifications.push(t),"function"==typeof this.onNotificationAdded&&this.onNotificationAdded.call(null,t))}},n.prototype.removeNotification=function(t){var i=this.notifications.filter(function(i){return i.id===t});i.length&&this.notifications.splice(this.notifications.indexOf(i[0]),1)},n.prototype.closeNotification=function(t){var n=this,e=function(){n.removeNotification(t.id);var i=o.getInstance({endpoint:n.closeNotificationEndpoint,urlVars:{id:t.id}});i.update({contentType:"application/json"})},c=function(){return i(function(){n.loading?c():e()},100)};return c()},n.prototype.getNotificationById=function(t){return this.notifications.filter(function(i){return i.id===t})[0]||null},{getInstance:function(t){return new n(t)}}},t.NotificationsModel.$inject=["$rootScope","$timeout","httpService"]}.call(i,o,i,t),!(void 0!==n&&(t.exports=n))},function(t,i,o){var n;n=function(require,t,i){"use strict";t.lpAllowPubsubClick=function(t,i){return{restrict:"A",scope:{numberAllowed:"@lpAllowPubsubClick",invokerClassName:"@"},link:function(o,n,e){var c=t;o.numberAllowed=parseInt(o.numberAllowed,10)||0,o.invokerClassName=o.invokerClassName||"pubsub-invoker",o.numberAllowed>0&&o.invokerClassName&&(o.invokers=n[0].querySelectorAll("."+o.invokerClassName),i.forEach(o.invokers,function(t,i){i<o.numberAllowed&&t.addEventListener("click",function(t){var i,o;i=t.target.getAttribute("data-pubsub-name"),o=t.target.getAttribute("data-pubsub-arguments"),i&&c.publish(i,o)})}))}}},t.lpAllowPubsubClick.$inject=["lpCoreBus","lpCoreUtils"]}.call(i,o,i,t),!(void 0!==n&&(t.exports=n))}])});