(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(6),c=t.n(o),r=(t(12),t(3));t(13);function s(){var e=Object(l.useState)({color:"black",backgroundColor:"white"}),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)("Enable Dark Mode"),s=Object(r.a)(c,2),i=s[0],m=s[1];return n.a.createElement("div",{className:"container",style:t},n.a.createElement("h2",{className:"my-3"},"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample"},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{style:t,className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",style:t,className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{style:t,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),n.a.createElement("div",{style:t,id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{style:t,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",style:t},n.a.createElement("div",{className:"accordion-body"},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))),n.a.createElement("div",{className:"container"},n.a.createElement("button",{type:"button",className:"btn btn-primary my-3",onClick:function(){"black"===t.color?(o({color:"white",backgroundColor:"black",border:"1px solid white"}),m("Enable Light Mode")):(o({color:"black",backgroundColor:"white"}),m("Enable Dark Mode"))}},i)))}var i=t(4);function m(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(i.b,{className:"navbar-brand",to:"#"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.b,{className:"nav-link","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.b,{className:"nav-link",to:"/about"},e.aboutText))),n.a.createElement("form",{className:"d-flex"},n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable DarkMode"))))))}function d(e){var a=Object(l.useState)("Enter text here"),t=Object(r.a)(a,2),o=t[0],c=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h1",{className:"mt-5"}," ",e.heading," "),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{value:o,style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},onChange:function(e){c(e.target.value)},className:"form-control",id:"myBox",rows:"8"}),n.a.createElement("button",{className:"btn btn-primary mt-3 me-2",onClick:function(){var a=o.toUpperCase();c(a),e.showAlert("Converted to UpperCase","success")}},"Convert to Uppercase"),n.a.createElement("button",{className:"btn btn-primary mt-3 me-2",onClick:function(){var a=o.toLowerCase();c(a),e.showAlert("Converted to LowerCase","success")}},"Convert to Lowercase"),n.a.createElement("button",{className:"btn btn-primary mt-3 me-2",onClick:function(){c(""),e.showAlert("Text Cleared","success")}},"Clear Text"),n.a.createElement("button",{className:"btn btn-primary mt-3 me-2",onClick:function(){var a=document.getElementById("myBox");a.select(),navigator.clipboard.writeText(a.value),e.showAlert("Copied to Clipboard!","success")}},"Copy Text"),n.a.createElement("button",{className:"btn btn-primary mt-3 me-2",onClick:function(){var e=o.split(/[ ]+/);c(e.join(" "))}},"Remove Extra Space"))),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h2",null," Your Text Summary "),n.a.createElement("p",null,"Word Count : ",n.a.createElement("strong",null,o.split(" ").length)," words and ",n.a.createElement("strong",null,o.length)," characters"),n.a.createElement("p",null,"Reading Minutes : ",n.a.createElement("strong",null,.005*o.split(" ").length.toPrecision(2))," minutes"),n.a.createElement("h2",null," Preview "),n.a.createElement("p",null," ",o.length>0?o:"Enter Something in the textbox above to prevew it here!"," ")))}m.defaultProps={title:"Set Title Here",aboutText:"About TextUtils"};var u=function(e){return e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a[0].toUpperCase()+a.slice(1)}(e.alert.type))," : ",e.alert.msg)},h=t(1);var b=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(null),b=Object(r.a)(c,2),p=b[0],g=b[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement(m,{title:"TextUtils",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="grey",E("Dark mode has been enabled","success"),document.title="TetxUtils - Dark Mode"):(o("light"),document.body.style.backgroundColor="white",E("Light mode has been enabled","success"),document.title="TetxUtils - Light Mode")},aboutText:"About Us"}),n.a.createElement(u,{alert:p}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/",element:n.a.createElement(d,{showAlert:E,heading:"Enter the text to analyze below : ",mode:t})}),n.a.createElement(h.a,{exact:!0,path:"/about",element:n.a.createElement(s,null)})))))},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,o=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),o(e),c(e)})};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),p()},7:function(e,a,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.74b806c2.chunk.js.map