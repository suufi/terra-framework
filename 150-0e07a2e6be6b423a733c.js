(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{1019:function(e,l,t){"use strict";var n=t(5);Object.defineProperty(l,"__esModule",{value:!0}),l.SlidePanelPositions=l.default=void 0;var a=n(t(18)),i=n(t(28)),u=n(t(20)),o=n(t(22)),d=n(t(23)),r=n(t(24)),m=n(t(27)),s=n(t(25)),c=n(t(0)),p=n(t(2)),f=n(t(4)),_=n(t(1030)),E=f.default.bind(_.default),v={START:"start",END:"end"};l.SlidePanelPositions=v;var I={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool},h={panelBehavior:"overlay",panelPosition:v.END,panelSize:"small"},P=function(e){function l(e){var t;return(0,u.default)(this,l),(t=(0,d.default)(this,(0,r.default)(l).call(this,e))).setPanelNode=t.setPanelNode.bind((0,m.default)(t)),t.mainNode=c.default.createRef(),t}return(0,s.default)(l,e),(0,o.default)(l,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,l=e.panelAriaLabel,t=e.mainAriaLabel,n=e.mainContent,u=e.panelContent,o=e.panelBehavior,d=e.panelPosition,r=e.panelSize,m=e.isFullscreen,s=e.isOpen,p=e.fill,f=(0,i.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),_=E(["slide-panel",{"is-open":s},{"is-fullscreen":m},{fill:p},f.className]),I=c.default.createElement("div",{className:E(["panel"]),tabIndex:"-1","aria-label":l,"aria-hidden":s?"false":"true",ref:this.setPanelNode},u),h=c.default.createElement("div",{className:E("main"),tabIndex:"-1","aria-label":t,ref:this.mainNode},n),P=d===v.START?c.default.createElement(c.default.Fragment,null,I,h):c.default.createElement(c.default.Fragment,null,h,I);return c.default.createElement("div",(0,a.default)({},f,{className:_,"data-slide-panel-panel-behavior":o,"data-slide-panel-panel-position":d,"data-slide-panel-panel-size":r}),P)}}]),l}(c.default.Component);P.propTypes=I,P.defaultProps=h;var b=P;l.default=b},1030:function(e,l,t){e.exports={"slide-panel":"SlidePanel-module__slide-panel___16_Ez",main:"SlidePanel-module__main___Qtxtf",panel:"SlidePanel-module__panel___2NV-G","is-open":"SlidePanel-module__is-open___IAbgR","is-fullscreen":"SlidePanel-module__is-fullscreen___29Ymh",fill:"SlidePanel-module__fill___11BRG"}},1035:function(e,l,t){"use strict";var n=t(5);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(0)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Main Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};l.default=i},1036:function(e,l,t){"use strict";var n=t(5);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(0)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Panel Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};l.default=i},1108:function(e,l,t){e.exports={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___1FDjp","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___9DcFW","main-content":"SlidePanelDocCommon-test-module__main-content___25hpF","panel-content":"SlidePanelDocCommon-test-module__panel-content___3OmYU","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___1Zi-9",button:"SlidePanelDocCommon-test-module__button___3r3Sh"}},1532:function(e,l,t){"use strict";var n=t(15),a=t(5);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=a(t(0)),u=a(t(4)),o=n(t(1019)),d=a(t(1035)),r=a(t(1036)),m=a(t(1108)),s=u.default.bind(m.default),c=function(){return i.default.createElement("div",{className:s("content-wrapper")},i.default.createElement(o.default,{mainContent:i.default.createElement(d.default,null),panelContent:i.default.createElement(r.default,null),panelBehavior:"squish",panelPosition:o.SlidePanelPositions.END,panelSize:"small",isOpen:!0}))};l.default=c}}]);
//# sourceMappingURL=150-0e07a2e6be6b423a733c.js.map