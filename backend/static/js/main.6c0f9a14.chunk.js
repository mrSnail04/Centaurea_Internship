(this.webpackJsonpshop_ui=this.webpackJsonpshop_ui||[]).push([[0],{34:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n.n(c),s=n(26),o=n.n(s),i=(n(34),n(3)),u=n.n(i),l=n(7),j=n(10),b=(n(11),n(8)),p=n(2),h=n(0),d=function(e){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"#",children:"Ticket Shop"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),e.userName?Object(h.jsx)(O,{userName:e.userName}):Object(h.jsx)(x,{})]})})]})})})},x=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{style:{textDecoration:"none"},to:"/login",children:Object(h.jsx)("span",{className:"nav-link",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{style:{textDecoration:"none"},to:"/registration",children:Object(h.jsx)("span",{className:"nav-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})]})},O=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{style:{textDecoration:"none"},to:"#",children:Object(h.jsx)("span",{className:"nav-link",children:e.userName})})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(b.b,{style:{textDecoration:"none"},to:"/logout",children:Object(h.jsx)("span",{className:"nav-link",children:"\u0412\u044b\u0445\u043e\u0434"})})})]})},f=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)(d,{userName:e.userName}),e.children]})},m=function(e){return Object(h.jsx)("div",{children:"Home"})},v=n(29),g=n.n(v).a.create({baseURL:"http://127.0.0.1:8000",withCredentials:!0,headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("auth_token")?"Token "+localStorage.getItem("auth_token"):null}});g.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&a&&a(),Promise.reject(e)}));var N=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.post("/auth/token/login",{username:t,password:n}).then((function(e){return localStorage.setItem("auth_token",e.data.auth_token),e})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.get("/api/logout").then((function(e){return console.log(e),a()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.get("/auth/users/me").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y={login:N,logout:k,me:w},S=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(j.a)(s,2),i=o[0],b=o[1],p=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.login(a,i);case 2:n=t.sent,console.log(n),e.getUser(),n.code;case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(h.jsx)("h3",{className:"text-center",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(h.jsx)("hr",{}),Object(h.jsx)("input",{type:"text",onChange:function(e){var t=e.currentTarget.value;r(t)},placeholder:"login",value:a}),Object(h.jsx)("input",{type:"password",onChange:function(e){var t=e.currentTarget.value;b(t)},placeholder:"password",value:i}),Object(h.jsx)("button",{onClick:p,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},C=function(){return Object(h.jsx)("div",{children:"Login"})},T=function(){return Object(h.jsx)("div",{children:"ResetPassword"})},_=function(){return y.logout},D=function(){return Object(h.jsx)("div",{children:"Registration"})},I="/",R="/login",U=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],s=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.me();case 2:(t=e.sent)&&(n=t.username,r(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s();case 1:case"end":return e.stop()}}),e)}))),[]);return a=function(){r("")},Object(h.jsx)(b.a,{children:Object(h.jsx)(f,{userName:n,children:Object(h.jsxs)(p.d,{children:[Object(h.jsx)(p.b,{exact:!0,path:I,component:m}),Object(h.jsx)(p.b,{exact:!0,path:R,component:n?function(){return Object(h.jsx)(p.a,{to:I})}:function(){return Object(h.jsx)(S,{getUser:s})}}),Object(h.jsx)(p.b,{exact:!0,path:"/logout",component:n?_:function(){return Object(h.jsx)(p.a,{to:R})}}),Object(h.jsx)(p.b,{exact:!0,path:"/registration",component:n?Object(h.jsx)(p.a,{to:I}):function(){return Object(h.jsx)(D,{})}}),Object(h.jsx)(p.b,{exact:!0,path:"/signup",component:n?Object(h.jsx)(p.a,{to:I}):function(){return Object(h.jsx)(C,{})}}),Object(h.jsx)(p.b,{exact:!0,path:"/reset-password",component:n?function(){return Object(h.jsx)(T,{})}:Object(h.jsx)(p.a,{to:R})}),Object(h.jsx)(p.b,{path:"*",component:A})]})})})},A=function(){return Object(h.jsx)("div",{children:"404"})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.6c0f9a14.chunk.js.map