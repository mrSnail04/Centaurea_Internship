(this.webpackJsonpshop_ui=this.webpackJsonpshop_ui||[]).push([[0],{34:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(26),s=n.n(r),i=(n(34),n(6)),o=n.n(i),l=n(7),u=n(10),j=(n(15),n(8)),b=n(2),d=n(1),p=function(e){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"Ticket Shop"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),e.userName?Object(d.jsx)(x,{userName:e.userName}):Object(d.jsx)(h,{})]})})]})})})},h=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{to:"/react/login",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"#",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})},x=function(e){return Object(d.jsx)("div",{children:e.userName})},O=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{userName:e.userName}),e.children]})},v=function(e){return Object(d.jsx)("div",{children:"HOME"})},m=n(29),f=n.n(m).a.create({baseURL:"http://127.0.0.1:8000",withCredentials:!0,headers:{"Content-Type":"application/json"}}),g=function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.post("/auth/token/login",{username:t,password:n}).then((function(e){return console.log("login:",e),e})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{name:"Maksim"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w={login:g,me:N},k=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(u.a)(r,2),i=s[0],j=s[1],b=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.login(n,i);case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(d.jsx)("h3",{className:"text-center",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(d.jsx)("hr",{}),Object(d.jsx)("input",{type:"text",onChange:function(e){var t=e.currentTarget.value;c(t)},placeholder:"login",value:n}),Object(d.jsx)("input",{type:"password",onChange:function(e){var t=e.currentTarget.value;j(t)},placeholder:"password",value:i}),Object(d.jsx)("button",{onClick:b,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},y=function(){return Object(d.jsx)("div",{children:"Login"})},C=function(){return Object(d.jsx)("div",{children:"ResetPassword"})},S="/react/",T=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.me();case 2:(null===(t=e.sent)||void 0===t?void 0:t.name)&&c(t.name);case 4:case"end":return e.stop()}}),e)}))),[]),Object(d.jsx)(j.a,{children:Object(d.jsx)(O,{userName:n,children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{exact:!0,path:S,component:v}),Object(d.jsx)(b.b,{exact:!0,path:"/react/login",children:n?Object(d.jsx)(b.a,{to:S}):function(){return Object(d.jsx)(k,{})}}),Object(d.jsx)(b.b,{exact:!0,path:"/signup",component:y}),Object(d.jsx)(b.b,{exact:!0,path:"/reset_password",component:C})]})})})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.27b8f050.chunk.js.map