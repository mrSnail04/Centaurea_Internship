(this.webpackJsonpshop_ui=this.webpackJsonpshop_ui||[]).push([[0],{37:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r,a=n(1),c=n.n(a),s=n(29),i=n.n(s),o=(n(37),n(2)),u=n.n(o),l=n(4),j=n(9),p=(n(14),n(11)),d=n(3),b=n(30),h=n.n(b).a.create({baseURL:"http://127.0.0.1:8000",withCredentials:!0,headers:{"Content-Type":"application/json"}});h.interceptors.request.use((function(e){return"/auth/token/login"===e.url||"/auth/users/"===e.url||(e.headers.Authorization=localStorage.getItem("auth_token")?"Token "+localStorage.getItem("auth_token"):null),e})),h.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&r&&r(),Promise.reject(e)}));var x=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/token/login",{username:t,password:n}).then((function(e){var t;return(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.auth_token)?(localStorage.setItem("auth_token",e.data.auth_token),e):"error: auth_token not found"}),(function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(u.a.mark((function e(t,n,r,a,c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/users/",{username:t,password:n,first_name:r,last_name:a,email:c}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,a,c){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/api/logout").then((function(e){return localStorage.removeItem("auth_token"),r()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/auth/users/me").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f={login:x,registration:m,logout:O,me:v},g=n(0),N=function(e){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(p.b,{style:{textDecoration:"none"},to:"/",children:Object(g.jsx)("span",{className:"nav-link",children:"TicketShop"})})})}),Object(g.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(g.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:e.userName?Object(g.jsx)(y,{userName:e.userName}):Object(g.jsx)(k,{})})})]})})})},w=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.logout();case 2:return t=e.sent,e.abrupt("return",console.log(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(p.b,{style:{textDecoration:"none"},to:"/login",children:Object(g.jsx)("span",{className:"nav-link",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(p.b,{style:{textDecoration:"none"},to:"/registration",children:Object(g.jsx)("span",{className:"nav-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})]})},y=function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(p.b,{style:{textDecoration:"none"},to:"#",children:Object(g.jsx)("span",{className:"nav-link",children:e.userName})})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("button",{type:"button",class:"btn btn-light",onClick:w,children:"\u0412\u044b\u0445\u043e\u0434"})})]})},S=function(e){var t;return Object(g.jsxs)("div",{children:[Object(g.jsx)(N,{userName:(null===(t=e.user)||void 0===t?void 0:t.name)||"",notauthorized:e.notauthorized}),e.children]})},C=function(e){return Object(g.jsx)("div",{children:"Home"})},_=function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),i=Object(j.a)(s,2),o=i[0],p=i[1],d=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.login(r,o);case 2:(n=t.sent).data&&n.data.auth_token&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(g.jsx)("h3",{className:"text-center",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Login"})}),Object(g.jsx)("input",{type:"text",onChange:function(e){var t=e.currentTarget.value;c(t)},placeholder:"Login",value:r})]}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(g.jsx)("input",{type:"password",onChange:function(e){var t=e.currentTarget.value;p(t)},placeholder:"Password",value:o})]}),Object(g.jsx)("button",{onClick:d,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},T=function(){return Object(g.jsx)("div",{children:"ResetPassword"})},U=function(){return f.logout},I=function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),i=Object(j.a)(s,2),o=i[0],p=i[1],d=Object(a.useState)(""),b=Object(j.a)(d,2),h=b[0],x=b[1],m=Object(a.useState)(""),O=Object(j.a)(m,2),v=O[0],N=O[1],w=Object(a.useState)(""),k=Object(j.a)(w,2),y=k[0],S=k[1],C=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.registration(r,o,v,y,h);case 2:"Created"==t.sent.statusText&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(g.jsx)("h3",{className:"text-center",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"User Name"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;c(t)},placeholder:"User Name",value:r})})]}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{class:"form-control",type:"password",onChange:function(e){var t=e.currentTarget.value;p(t)},placeholder:"Password",value:o})})]}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"First Name"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;N(t)},placeholder:"First Name",value:v})})]}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Last Name"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;S(t)},placeholder:"Last Name",value:y})})]}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:" input-group-text",children:"Email"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{class:"form-control",type:"email",onChange:function(e){var t=e.currentTarget.value;x(t)},placeholder:"Email",value:h})})]}),Object(g.jsx)("button",{type:"button",class:"btn btn-primary",onClick:C,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},P="/login",L=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],c=t[1],s=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.me();case 2:(null===(t=e.sent)||void 0===t?void 0:t.id)&&c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("auth_token")&&s();case 1:case"end":return e.stop()}}),e)}))),[]);var i=function(){c(null)};return r=i,Object(g.jsx)(p.a,{children:Object(g.jsx)(S,{user:n,notauthorized:i,children:Object(g.jsxs)(d.d,{children:[Object(g.jsx)(d.b,{exact:!0,path:"/",component:C}),Object(g.jsx)(d.b,{exact:!0,path:P,component:(null===n||void 0===n?void 0:n.id)?function(){return Object(g.jsx)(d.a,{to:"/"})}:function(){return Object(g.jsx)(_,{getUser:s})}}),Object(g.jsx)(d.b,{exact:!0,path:"/logout",component:(null===n||void 0===n?void 0:n.id)?U:function(){return Object(g.jsx)(d.a,{to:P})}}),Object(g.jsx)(d.b,{exact:!0,path:"/registration",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(g.jsx)(d.a,{to:"/"})}:function(){return Object(g.jsx)(I,{getUser:s})}}),Object(g.jsx)(d.b,{exact:!0,path:"/reset-password",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(g.jsx)(T,{})}:function(){return Object(g.jsx)(d.a,{to:P})}}),Object(g.jsx)(d.b,{path:"*",component:z})]})})})},z=function(){return Object(g.jsx)("div",{children:"404"})};i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.35215881.chunk.js.map