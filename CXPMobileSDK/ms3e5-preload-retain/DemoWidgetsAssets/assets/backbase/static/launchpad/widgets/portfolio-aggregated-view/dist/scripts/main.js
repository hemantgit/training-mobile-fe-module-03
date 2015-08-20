!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("base"),require("core"),require("module-wealth"),require("d3")):"function"==typeof define&&define.amd?define(["base","core","module-wealth","d3"],e):"object"==typeof exports?exports["widget-portfolio-aggregated-view"]=e(require("base"),require("core"),require("module-wealth"),require("d3")):t["widget-portfolio-aggregated-view"]=e(t.base,t.core,t["module-wealth"],t.d3)}(this,function(t,e,i,r){return function(t){function e(r){if(i[r])return i[r].exports;var n=i[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){var r;(function(t){r=function(require,t,e){"use strict";function r(t,e){e.setConfig({portfolioEndPoint:t.getPreference("dataSrc")})}e.name="portfolio-aggregated-view";var n=i(1),o=i(2),s=i(3),a=[o.name,s.name];r.$inject=["lpWidget","lpWealth"],e.exports=n.createModule(e.name,a).controller(i(4)).directive(i(5)).run(r)}.call(e,i,e,t),!(void 0!==r&&(t.exports=r))}).call(e,i(6)(t))},function(e,i,r){e.exports=t},function(t,i,r){t.exports=e},function(t,e,r){t.exports=i},function(t,e,i){var r;r=function(require,t,e){"use strict";var i=[{id:"assetAllocations",name:"Assets Allocation",type:"treemap"},{id:"geographicalAllocations",name:"Geographical Allocation",type:"treemap"},{id:"combinedAllocations",name:"Combined Assets and Geographical",type:"treemap"},{id:"equitySectors",name:"Equity Sectors",type:"treemap"},{id:"bonds",name:"Bonds Details",type:"barchart"}];t.AggregatedCtrl=function(t,e){function r(t){n.loading=!1;var e=i.filter(function(e){return!("equitySectors"===e.id&&!t.panels.showEquitiesPanel||"bonds"===e.id&&!t.panels.showBondsPanel)});n.views=e,n.current=e[0],n.data=t}var n=this;n.set=function(t){n.current=t},e.subscribe("launchpad-retail.portfolioSelected",function(e){n.loading=!0,t.getData(e.id).then(r)})},t.AggregatedCtrl.$inject=["aggregatedModel","lpCoreBus"]}.call(e,i,e,t),!(void 0!==r&&(t.exports=r))},function(t,e,i){var r;r=function(require,t,e){"use strict";var r=i(1).ng,n=i(7),o=i(8);t.lpWealthAggregatedView=function(t,e,i){function s(s,a,c){function l(){var t=a.parent(),e=t.parent().width(),i=t.height();0>=e||0>=i||p.resize(e,i)}var u=("treemap"===c.type?n:o)(e,i),p=new u(a[0]);l(),r.element(t).on("resize",e.debounce(l,250)),s.$watch("data",function(t){t&&p.update(t[c.key])})}return{restrict:"EA",require:"?ngModel",priority:Number.MAX_VALUE,link:s,scope:{data:"=lpWealthAggregatedView"}}},t.lpWealthAggregatedView.$inject=["$window","utils","d3tip"]}.call(e,i,e,t),!(void 0!==r&&(t.exports=r))},function(t,e,i){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e,i){var r;r=function(require,t,e){"use strict";function r(t){function e(t){var e=this.__data__,i=r.offset();return{left:i.left+e.x+e.dx/2-t[0].offsetWidth/2+"px",top:i.top+e.y+e.dy/2-t[0].offsetHeight+"px"}}function i(t){return t.name+"<br/>"+t.size+"%"}this.treemap=a.layout.treemap().sort(l).value(n.property("size")),this.el=a.select(t).append("div").attr("class","treemap");var r=s.element(this.el[0]),c=function(t){return Math.max(0,t.dy)+"px"};this.style={left:function(t){return t.x+"px"},top:function(t){return t.y+"px"},width:function(t){return Math.max(0,t.dx)+"px"},height:c,"line-height":c},this.html=n.compose(function(t){return"<span>"+t+"</span>"},i),this.tip=o().attr("class","d3-tip").html(i).pos(e),this.el.call(this.tip)}var n,o,s=i(1).ng,a=i(9),c=function(t,e){var i=-1;return function(){return++i>e-1&&(i=0),t+i}}("node cat-",8),l=function(t,e){return t.size-e.size};r.prototype={constructor:r,parse:function(t){return{children:t.map(this.convert)}},convert:function(t){return{name:t.assetTypeName&&t.zoneName?t.assetTypeName+"<br/>"+t.zoneName:t.assetTypeName||t.zoneName||t.equitySectorName,size:t.percentage}},update:function(t){this.nodes=this.el.datum(this.parse(t)).selectAll(".node").data(this.treemap.nodes).enter().append("div").attr("class",c).on("mouseover",this.tip.show).on("mouseout",this.tip.hide),this.render()},render:function(){this.nodes&&this.el.selectAll(".node").data(this.treemap.nodes).style(this.style).html(this.html)},resize:function(t,e){this.treemap.size([t,e]),this.el.style("height",e+"px"),this.render()}},e.exports=function(t,e){return n=t,o=e,r}}.call(e,i,e,t),!(void 0!==r&&(t.exports=r))},function(t,e,i){var r;r=function(require,t,e){"use strict";function r(t){this.$=s.element(t).html('<div class="ytm"/>'),this.x=a.scale.ordinal(),this.y=a.scale.linear(),this.svg=a.select(t).append("svg"),this.xAxis=a.svg.axis().scale(this.x).orient("bottom").tickSize(0).tickFormat(a.time.format("%Y")),this.svg.append("g").attr("class","bars"),this.svg.append("g").attr("class","x axis")}var n,o,s=i(1).ng,a=i(9);r.prototype={constructor:r,parse:function(t){var e=a.time.format("%Y").parse;return t.forEach(function(t){t.date=e(t.year)}),t},update:function(t){var e=n.property("date"),i=n.property("amount");this.$.find(".ytm").html("<h2>"+t.averageYieldToMaturity.toFixed(2)+"%</h2>Avg. YTM"),t=this.parse(t.datapoints),this.x.domain(t.map(e)),this.y.domain([0,a.max(t,i)]);var r=n.compose(function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},i),s=o().attr("class","d3-tip").offset([-7,0]).html(r);this.svg.call(s),this.svg.select(".bars").selectAll("rect").data(t).enter().append("rect").on("mouseover",s.show).on("mouseout",s.hide);var c=this.y;this.attrs={width:this.x.rangeBand,x:n.compose(this.x,e),y:n.compose(this.y,i),height:function(t){return c(0)-c(i(t))}},this.render()},render:function(){this.svg.select(".bars").selectAll("rect").attr(this.attrs),this.svg.select(".x.axis").call(this.xAxis)},resize:function(t,e){t-=this.$.find(".ytm").width(),this.x.rangeBands([0,t],.1),this.y.range([e,0]),this.svg.attr({width:t,height:e}),this.svg.select(".x.axis").attr("transform","translate(0,"+(e-30)+")"),this.render()}},e.exports=function(t,e){return n=t,o=e,r}}.call(e,i,e,t),!(void 0!==r&&(t.exports=r))},function(t,e,i){t.exports=r}])});