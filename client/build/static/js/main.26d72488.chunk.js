(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){},105:function(e,t){},141:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(53),s=n.n(o),l=(n(65),n(66),n(67),n(16)),u=n(6),i=n(7),m=(n(10),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(""),s=Object(i.a)(o,2),u=s[0],m=s[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Username",className:"joinInput",type:"text",onChange:function(e){return a(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room name",className:"joinInput",type:"text",onChange:function(e){return m(e.target.value)}})),r.a.createElement(l.b,{onClick:function(e){return n&&u?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(u)},r.a.createElement("button",{className:"button",type:"submit"},"sign in"))))}),f=n(59),E=n(56),d=n.n(E),g=n(57),p=n.n(g),v=function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnderContainer"},r.a.createElement("h1",null,t)),r.a.createElement("div",{className:"rightInnderContainer"},r.a.createElement("a",{href:"/"},"close")))},h=function(e){var t=e.message,n=e.setMessage,a=e.sendMessage;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Enter message",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return a(e)}},"send"))},b=function(e){var t=e.message,n=t.user,a=t.text;e.name;return r.a.createElement("div",{className:"messageContainer"},r.a.createElement("h5",null,n),r.a.createElement("p",null,a))},j=n(58),O=n.n(j),N=function(e){var t=e.messageLog,n=e.name;return r.a.createElement(O.a,null,t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(b,{message:e,name:n}))})))},C=function(e){var t=e.location,n=Object(c.useState)(""),o=Object(i.a)(n,2),s=o[0],l=o[1],u=Object(c.useState)(""),m=Object(i.a)(u,2),E=m[0],g=m[1],b=Object(c.useState)(""),j=Object(i.a)(b,2),O=j[0],C=j[1],y=Object(c.useState)([]),k=Object(i.a)(y,2),w=k[0],x=k[1];Object(c.useEffect)((function(){var e=d.a.parse(t.search),n=e.name,c=e.room;return a=p()("localhost:5000"),l(n),g(c),a.emit("join",{name:n,room:c},(function(){})),function(){a.emit("disconnect"),a.off()}}),["localhost:5000",t.search]),Object(c.useEffect)((function(){a.on("message",(function(e){x([].concat(Object(f.a)(w),[e]))}))}),[w]);return console.log(O,w),r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(v,{room:E}),r.a.createElement(N,{messageLog:w,name:s}),r.a.createElement(h,{message:O,setMessage:C,sendMessage:function(e){e.preventDefault(),O&&a.emit("sendMessage",O,(function(){return C("")}))}})))},y=function(){return r.a.createElement(l.a,null,r.a.createElement(u.a,{path:"/",exact:!0,component:m}),r.a.createElement(u.a,{path:"/chat",component:C}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,n){e.exports=n(141)},65:function(e,t,n){},66:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},67:function(e,t,n){}},[[60,1,2]]]);
//# sourceMappingURL=main.26d72488.chunk.js.map