(this.webpackJsonpshop_ui=this.webpackJsonpshop_ui||[]).push([[0],{34:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r,a=n(1),c=n.n(a),s=n(26),o=n.n(s),i=(n(34),n(3)),u=n.n(i),l=n(7),j=n(10),b=(n(11),n(8)),h=n(2),p=n(27),d=n.n(p).a.create({baseURL:"http://127.0.0.1:8000",withCredentials:!0,headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("auth_token")?"Token "+localStorage.getItem("auth_token"):null}});d.interceptors.request.use((function(e){return e.headers.Authorization=localStorage.getItem("auth_token")?"Token "+localStorage.getItem("auth_token"):null,e})),d.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&r&&r(),Promise.reject(e)}));var x=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.post("/auth/token/login",{username:t,password:n}).then((function(e){return localStorage.setItem("auth_token",e.data.auth_token),e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.get("/api/logout").then((function(e){return console.log(e),localStorage.removeItem("auth_token"),r()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.get("/auth/users/me").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m={login:x,logout:f,me:O},v=n(0),g=function(e){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(v.jsxs)("div",{className:"container-fluid",children:[Object(v.jsx)("a",{className:"navbar-brand",href:"#",children:"Ticket Shop"}),Object(v.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}),Object(v.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(v.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"})}),e.userName?Object(v.jsx)(w,{userName:e.userName}):Object(v.jsx)(N,{})]})})]})})})},k=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.logout();case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(b.b,{style:{textDecoration:"none"},to:"/login",children:Object(v.jsx)("span",{className:"nav-link",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(b.b,{style:{textDecoration:"none"},to:"/registration",children:Object(v.jsx)("span",{className:"nav-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})]})},w=function(e){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)(b.b,{style:{textDecoration:"none"},to:"#",children:Object(v.jsx)("span",{className:"nav-link",children:e.userName})})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)("button",{onClick:k,children:"\u0412\u044b\u0445\u043e\u0434"})})]})},y=function(e){return Object(v.jsxs)("div",{children:[Object(v.jsx)(g,{userName:e.userName,notauthorized:e.notauthorized}),e.children]})},S=function(e){return Object(v.jsx)("div",{children:"Home"})},_=function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),o=Object(j.a)(s,2),i=o[0],b=o[1],h=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.login(r,i);case 2:n=t.sent,console.log(n),n.data&&n.data.auth_token&&e.getUser();case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"row",children:Object(v.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(v.jsx)("h3",{className:"text-center",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(v.jsx)("hr",{}),Object(v.jsx)("input",{type:"text",onChange:function(e){var t=e.currentTarget.value;c(t)},placeholder:"login",value:r}),Object(v.jsx)("input",{type:"password",onChange:function(e){var t=e.currentTarget.value;b(t)},placeholder:"password",value:i}),Object(v.jsx)("button",{onClick:h,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},C=function(){return Object(v.jsx)("div",{children:"Login"})},I=function(){return Object(v.jsx)("div",{children:"ResetPassword"})},T=function(){return m.logout},z=function(){return Object(v.jsx)("div",{children:"Registration"})},A="/",D="/login",R=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.me();case 2:(t=e.sent)&&(n=t.username,c(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s();case 1:case"end":return e.stop()}}),e)}))),[]);var o=function(){c("")};return r=o,Object(v.jsx)(b.a,{children:Object(v.jsx)(y,{userName:n,notauthorized:o,children:Object(v.jsxs)(h.d,{children:[Object(v.jsx)(h.b,{exact:!0,path:A,component:S}),Object(v.jsx)(h.b,{exact:!0,path:D,component:n?function(){return Object(v.jsx)(h.a,{to:A})}:function(){return Object(v.jsx)(_,{getUser:s})}}),Object(v.jsx)(h.b,{exact:!0,path:"/logout",component:n?T:function(){return Object(v.jsx)(h.a,{to:D})}}),Object(v.jsx)(h.b,{exact:!0,path:"/registration",component:n?Object(v.jsx)(h.a,{to:A}):function(){return Object(v.jsx)(z,{})}}),Object(v.jsx)(h.b,{exact:!0,path:"/signup",component:n?Object(v.jsx)(h.a,{to:A}):function(){return Object(v.jsx)(C,{})}}),Object(v.jsx)(h.b,{exact:!0,path:"/reset-password",component:n?function(){return Object(v.jsx)(I,{})}:Object(v.jsx)(h.a,{to:D})}),Object(v.jsx)(h.b,{path:"*",component:U})]})})})},U=function(){return Object(v.jsx)("div",{children:"404"})};o.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(R,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.e895a5dc.chunk.js.map