(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(33)},19:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(7),l=n.n(i),s=n(1),c=n(2),r=n(4),d=n(3),p=n(5),u=(n(19),function(e){return a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"header_title"},e.title),a.a.createElement("h2",{className:"header_subtitle"},e.subtitle)))}),m=function(e){return a.a.createElement("div",null,a.a.createElement("button",{className:"big-button",onClick:e.handlePick,disabled:!e.hasOptions},"What should I do?"))},h=function(e){return a.a.createElement("div",{className:"single-option"},a.a.createElement("p",{className:"option-font"},e.count,". ",e.optionList),a.a.createElement("button",{className:"button-remove",onClick:function(t){e.deleteSingleOption(e.optionList)}},"remove"))},f=function(e){return a.a.createElement("div",null,a.a.createElement("div",{className:"header-options"},a.a.createElement("h3",{className:"options-title"},"Your options"),a.a.createElement("button",{className:"button-remove-all",onClick:e.deleteOptions},"Remove All")),0===e.options.length&&a.a.createElement("p",{className:"option-message"},"Please add an option to get started"),e.options.map(function(t,n){return a.a.createElement(h,{key:t,optionList:t,count:n+1,deleteSingleOption:e.deleteSingleOption})}))},O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(r.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={error:void 0},n.addingOption=function(e){e.preventDefault();var t=e.target.elements.option.value.trim(),o=n.props.addingOption(t);n.setState(function(){return{error:o}}),o||(e.target.elements.option.value="")},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,this.state.error&&a.a.createElement("p",{className:"add-option-error"},this.state.error),a.a.createElement("form",{className:"add-option",onSubmit:this.addingOption},a.a.createElement("input",{className:"add-option-input",type:"text",name:"option"}),a.a.createElement("button",{className:"button"},"AddOption")))}}]),t}(o.Component),v=n(12),g=n.n(v),E=(n(30),function(e){return a.a.createElement(g.a,{isOpen:!!e.selectedOptions,onRequestClose:e.clearSelectedOption,contentLabel:"Selected option",closeTimeoutMS:200,className:"modal"},a.a.createElement("h3",{className:"modal-title"},"Selected Option"),e.selectedOptions&&a.a.createElement("p",{className:"modal-boday"},e.selectedOptions),a.a.createElement("button",{className:"button",onClick:e.clearSelectedOption},"okay"))}),b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(r.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={options:[],selectedOptions:void 0},n.deleteOptions=function(){n.setState(function(){return{options:[]}})},n.clearSelectedOption=function(){n.setState(function(){return{selectedOptions:void 0}})},n.deleteSingleOption=function(e){n.setState(function(t){return{options:t.options.filter(function(t){return e!==t})}})},n.handlePick=function(){var e=Math.floor(Math.random()*n.state.options.length),t=n.state.options[e];n.setState(function(){return{selectedOptions:t}})},n.addingOption=function(e){return e?n.state.options.indexOf(e)>-1?"This option already exists":void n.setState(function(t){return{options:t.options.concat(e)}}):"Enter a valid value to add item"},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("options"),t=JSON.parse(e);t&&this.setState(function(){return{options:t}})}catch(n){}}},{key:"componentDidUpdate",value:function(e,t){if(t.options.length!==this.state.options.length){var n=JSON.stringify(this.state.options);localStorage.setItem("options",n)}}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(u,{title:"To-Do List",subtitle:"Set your daily to-do list and get it done"}),a.a.createElement("div",{className:"container"},a.a.createElement(m,{handlePick:this.handlePick,hasOptions:this.state.options.length>0}),a.a.createElement("div",{className:"options-container"},a.a.createElement(f,{options:this.state.options,deleteOptions:this.deleteOptions,deleteSingleOption:this.deleteSingleOption}),a.a.createElement(O,{addingOption:this.addingOption}))),a.a.createElement(E,{selectedOptions:this.state.selectedOptions,clearSelectedOption:this.clearSelectedOption}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(31),n(32);l.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.3df6b30c.chunk.js.map