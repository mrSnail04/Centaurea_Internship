(this.webpackJsonpshop_ui=this.webpackJsonpshop_ui||[]).push([[0],{34:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n.n(c),s=n(26),o=n.n(s),i=(n(34),n(5)),u=n.n(i),l=n(8),j=n(10),b=(n(11),n(7)),h=n(2),p=n(0),d=function(e){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("a",{className:"navbar-brand",href:"#",children:"Ticket Shop"}),Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(p.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),e.userName?Object(p.jsx)(O,{userName:e.userName}):Object(p.jsx)(x,{})]})})]})})})},x=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(b.b,{style:{textDecoration:"none"},to:"/login",children:Object(p.jsx)("span",{className:"nav-link",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(b.b,{style:{textDecoration:"none"},to:"/registration",children:Object(p.jsx)("span",{className:"nav-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})]})},O=function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(b.b,{style:{textDecoration:"none"},to:"#",children:Object(p.jsx)("span",{className:"nav-link",children:e.userName})})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(b.b,{style:{textDecoration:"none"},to:"/logout",children:Object(p.jsx)("span",{className:"nav-link",children:"\u0412\u044b\u0445\u043e\u0434"})})})]})},m=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(d,{userName:e.userName}),e.children]})},f=function(e){return Object(p.jsx)("div",{children:"Home"})},v=n(29),g=n.n(v).a.create({baseURL:"http://127.0.0.1:8000",withCredentials:!0,headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("auth_token")?"Token "+localStorage.getItem("auth_token"):null}});g.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&a&&a(),Promise.reject(e)}));var N=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.post("/auth/token/login",{username:t,password:n}).then((function(e){return console.log(e),localStorage.setItem("auth_token",e.data.auth_token),console.log(localStorage.getItem("auth_token")),e})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.get("/api/logout").then((function(e){return console.log(e),a()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.get("/auth/users/me").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y={login:N,logout:k,me:w},S=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(j.a)(r,2),o=s[0],i=s[1],h=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.login(n,o);case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(p.jsx)("h3",{className:"text-center",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(p.jsx)("hr",{}),Object(p.jsx)("input",{type:"text",onChange:function(e){var t=e.currentTarget.value;a(t)},placeholder:"login",value:n}),Object(p.jsx)("input",{type:"password",onChange:function(e){var t=e.currentTarget.value;i(t)},placeholder:"password",value:o}),Object(p.jsx)("button",{onClick:h,children:Object(p.jsx)(b.b,{to:"/",children:"\u0412\u043e\u0439\u0442\u0438"})})]})})},C=function(){return Object(p.jsx)("div",{children:"Login"})},_=function(){return Object(p.jsx)("div",{children:"ResetPassword"})},T=function(){return y.logout},I=function(){return Object(p.jsx)("div",{children:"Registration"})},D="/",R="/login",A=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)(Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.me();case 2:(t=e.sent)&&(n=t.username,r(n));case 4:case"end":return e.stop()}}),e)}))),[]);return a=function(){r("")},Object(p.jsx)(b.a,{children:Object(p.jsx)(m,{userName:n,children:Object(p.jsxs)(h.d,{children:[Object(p.jsx)(h.b,{exact:!0,path:D,component:f}),Object(p.jsx)(h.b,{exact:!0,path:R,component:n?function(){return Object(p.jsx)(h.a,{to:D})}:S}),Object(p.jsx)(h.b,{exact:!0,path:"/logout",component:n?T:function(){return Object(p.jsx)(h.a,{to:R})}}),Object(p.jsx)(h.b,{exact:!0,path:"/registration",component:n?Object(p.jsx)(h.a,{to:D}):function(){return Object(p.jsx)(I,{})}}),Object(p.jsx)(h.b,{exact:!0,path:"/signup",component:n?Object(p.jsx)(h.a,{to:D}):function(){return Object(p.jsx)(C,{})}}),Object(p.jsx)(h.b,{exact:!0,path:"/reset-password",component:n?function(){return Object(p.jsx)(_,{})}:Object(p.jsx)(h.a,{to:R})}),Object(p.jsx)(h.b,{path:"*",component:E})]})})})},E=function(){return Object(p.jsx)("div",{children:"404"})};o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.ba0a4d58.chunk.js.map