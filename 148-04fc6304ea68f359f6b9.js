(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1088:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(18)),d=n(a(28)),u=n(a(20)),o=n(a(22)),r=n(a(23)),i=n(a(24)),s=n(a(25)),c=n(a(0)),f=n(a(2));a(1114),a(1115);var p={children:f.default.node.isRequired},m=function(e){function t(){return(0,u.default)(this,t),(0,r.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"componentWillUnmount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"render",value:function(){var e=this.props,t=e.children,a=(0,d.default)(e,["children"]);return c.default.createElement("div",(0,l.default)({"data-embedded-content-consumer-provider-test-template":!0},a),t)}}]),t}(c.default.Component);m.propTypes=p;var h=m;t.default=h},1089:function(e,t,a){e.exports={"content-wrapper":"EmbeddedContentConsumerCommon-module__content-wrapper___MHjKq"}},1114:function(e,t,a){},1115:function(e,t,a){},1515:function(e,t,a){"use strict";var n=a(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),d=n(a(4)),u=n(a(1088)),o=n(a(1089)),r=d.default.bind(o.default),i=function(){return l.default.createElement(u.default,null,l.default.createElement("div",{className:r("content-wrapper")},l.default.createElement("h1",null,"Embedded Application Lifecycle"),l.default.createElement("p",null,"The embedded container consumer will go through three lifecyle stages as it loads. These statuses are communicated via `data-status` attributes on the iframe wrapper and listeners can be add to listen for the lifecyle changes of the frame."),l.default.createElement("p",null,"In this example the consumer listens for each lifecyle stage and adds its status value below after a small delay (to help differentiate each lifecycle stages):"),l.default.createElement("ul",{id:"DataStatus-LifeCycleStatuses"})))};t.default=i}}]);
//# sourceMappingURL=148-04fc6304ea68f359f6b9.js.map