(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{2590:function(e,t,n){"use strict";var u=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(20)),l=u(n(22)),d=u(n(23)),o=u(n(24)),s=u(n(27)),i=u(n(25)),f=u(n(0)),c=u(n(360)),h=function(e){function t(e){var n;return(0,a.default)(this,t),(n=(0,d.default)(this,(0,o.default)(t).call(this,e))).handleButtonClick=n.handleButtonClick.bind((0,s.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,s.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,s.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,s.default)(n)),n.state={open:!1},n}return(0,i.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("div",null,"This menu has a nested submenu. When the Nested Menu item is clicked as submenu should replace the initial menu. There should be a header with a back button and a title of Nested Menu."),f.default.createElement(c.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},f.default.createElement(c.default.Item,{text:"Default 1",key:"1",className:"TestInitialMenuContent"}),f.default.createElement(c.default.Item,{text:"Nested Menu",key:"2",className:"TestNestedMenu",subMenuItems:[f.default.createElement(c.default.Item,{text:"Default 2.1",key:"2.1",className:"TestNestedMenuContent"})]}),f.default.createElement(c.default.Item,{text:"Default 3",key:"3"}),f.default.createElement(c.default.Item,{text:"Default 4",key:"4"}),f.default.createElement(c.default.Item,{text:"Default 5",key:"5"})),f.default.createElement("button",{type:"button",id:"sub-menu-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"))}}]),t}(f.default.Component);t.default=h}}]);
//# sourceMappingURL=471-cb05c3d53980a6a503bf.js.map