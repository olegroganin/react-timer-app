(this["webpackJsonptimer-react-application"]=this["webpackJsonptimer-react-application"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(4),a=c.n(s),r=(c(9),c(2)),i=c(0);var j=function(){var e,t=Object(n.useState)(0),c=Object(r.a)(t,2),s=c[0],a=c[1],j=Object(n.useState)(0),b=Object(r.a)(j,2),l=b[0],o=b[1],u=Object(n.useState)(0),O=Object(r.a)(u,2),d=O[0],h=O[1],m=Object(n.useState)(!1),p=Object(r.a)(m,2),f=p[0],v=p[1];function x(){clearInterval(e)}return Object(n.useEffect)((function(){if(!0===f)return e=setInterval((function(){a(s+1),59===s&&(o(l+1),a(0)),59===l&&(h(d+1),o(0))}),1e3),function(){return clearInterval(e)}})),Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"timer",children:[Object(i.jsx)("h1",{children:"Timer"}),Object(i.jsxs)("h2",{children:[d<10?"0"+d:d," : ",l<10?"0"+l:l," : ",s<10?"0"+s:s]}),Object(i.jsxs)("div",{className:"timer-buttons",children:[Object(i.jsx)("button",{className:"btn",onClick:function(){v(!0),x&&a(s+1)},children:"Start"}),Object(i.jsx)("button",{className:"btn",onClick:x,children:"Stop"}),Object(i.jsx)("button",{className:"btn",onClick:function(){a(0),o(0),h(0),v(!1)},children:"Reset"})]})]})})})};var b=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(j,{})})};a.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.2656fd87.chunk.js.map