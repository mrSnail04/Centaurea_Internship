(this.webpackJsonpshop_ui=this.webpackJsonpshop_ui||[]).push([[0],{37:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c,r=n(1),s=n.n(r),a=n(29),i=n.n(a),o=(n(37),n(2)),l=n.n(o),u=n(4),j=n(9),d=(n(14),n(11)),p=n(3),b=n(30),h=n.n(b).a.create({baseURL:"http://127.0.0.1:8000",withCredentials:!0,headers:{"Content-Type":"application/json"}});h.interceptors.request.use((function(e){return"/auth/token/login"===e.url||"/auth/users/"===e.url||(e.headers.Authorization=localStorage.getItem("auth_token")?"Token "+localStorage.getItem("auth_token"):null),e})),h.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&c&&c(),Promise.reject(e)}));var x=function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/token/login",{username:t,password:n}).then((function(e){var t;return(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.auth_token)?(localStorage.setItem("auth_token",e.data.auth_token),e):"error: auth_token not found"}),(function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(l.a.mark((function e(t,n,c,r,s){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/users/",{username:t,password:n,first_name:c,last_name:r,email:s}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c,r,s){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/api/logout").then((function(e){return localStorage.removeItem("auth_token"),c()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/auth/users/me").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f={login:x,registration:m,logout:O,me:v},g=n(0),N=function(e){return Object(g.jsx)("div",{className:"App",children:Object(g.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(d.b,{style:{textDecoration:"none"},to:"/",children:Object(g.jsx)("span",{className:"nav-link",children:"TicketShop"})})})}),Object(g.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(g.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:e.user?Object(g.jsx)(k,{user:e.user}):Object(g.jsx)(y,{})})})]})})})},w=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.logout();case 2:return t=e.sent,e.abrupt("return",console.log(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(d.b,{style:{textDecoration:"none"},to:"/login",children:Object(g.jsx)("span",{className:"nav-link",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(d.b,{style:{textDecoration:"none"},to:"/registration",children:Object(g.jsx)("span",{className:"nav-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})]})},k=function(e){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(d.b,{style:{textDecoration:"none"},to:"/profile",children:Object(g.jsx)("span",{className:"nav-link",children:e.user.username})})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("button",{type:"button",class:"btn btn-light",onClick:w,children:"\u0412\u044b\u0445\u043e\u0434"})})]})},S=function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)(N,{user:e.user||null,notauthorized:e.notauthorized}),e.children]})},_=function(e){return Object(g.jsx)("div",{children:"Home"})},C=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),o=i[0],d=i[1],p=function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.login(c,o);case 2:(n=t.sent).data&&n.data.auth_token&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(g.jsx)("h3",{className:"text-center",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Login"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"text",class:"form-control",onChange:function(e){var t=e.currentTarget.value;s(t)},placeholder:"Login",value:c})})]}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"password",class:"form-control",onChange:function(e){var t=e.currentTarget.value;d(t)},placeholder:"Password",value:o})})]}),Object(g.jsx)("button",{type:"button",class:"btn btn-primary",onClick:p,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},T=function(){return Object(g.jsx)("div",{children:"ResetPassword"})},U=function(e){return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(g.jsxs)("h3",{className:"text-center",children:["\u041f\u0440\u043e\u0444\u0438\u043b\u044c ",e.user.username]}),Object(g.jsx)("hr",{}),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-sm",children:[Object(g.jsxs)("h5",{className:"text-center",children:["UserName: ",e.user.username]}),Object(g.jsxs)("h5",{className:"text-center",children:["First Name: ",e.user.first_name]}),Object(g.jsxs)("h5",{className:"text-center",children:["Last Name: ",e.user.last_name]}),Object(g.jsxs)("h5",{className:"text-center",children:["Email: ",e.user.email]})]}),Object(g.jsx)("div",{className:"col-md",children:Object(g.jsx)("div",{className:"col-mb-12",children:Object(g.jsxs)("table",{className:"table",children:[Object(g.jsxs)("thead",{children:[Object(g.jsx)("th",{scope:"col-sm-5",children:"\u041d\u043e\u043c\u0435\u0440"}),Object(g.jsx)("th",{scope:"col",children:"\u0421\u0442\u0430\u0442\u0443\u0441"}),Object(g.jsx)("th",{scope:"col",children:"\u0421\u0443\u043c\u043c\u0430"}),Object(g.jsx)("th",{scope:"col",children:"\u0422\u043e\u0432\u0430\u0440"}),Object(g.jsx)("th",{scope:"col",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"})]}),Object(g.jsx)("tbody",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"row",children:"ID"}),Object(g.jsx)("td",{scope:"row",children:"STATUS"}),Object(g.jsx)("td",{scope:"row",children:"\u0426\u0435\u043d\u0430 \u0440\u0443\u0431."}),Object(g.jsx)("td",{scope:"row",children:Object(g.jsx)("ul",{children:Object(g.jsx)("li",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0446\u0435\u0440\u0442\u0430"})})}),Object(g.jsx)("td",{scope:"row",children:Object(g.jsx)("div",{className:"input-group",children:Object(g.jsx)("input",{type:"number",className:"form-control",min:"0",max:"10",placeholder:"Qty","aria-label":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"})})})]})})]})})})]})})]})})},I=function(){return f.logout},L=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),o=i[0],d=i[1],p=Object(r.useState)(""),b=Object(j.a)(p,2),h=b[0],x=b[1],m=Object(r.useState)(""),O=Object(j.a)(m,2),v=O[0],N=O[1],w=Object(r.useState)(""),y=Object(j.a)(w,2),k=y[0],S=y[1],_=function(){var t=Object(u.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.registration(c,o,v,k,h);case 2:"Created"==t.sent.statusText&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(g.jsx)("h3",{className:"text-center",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"User Name"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;s(t)},placeholder:"User Name",value:c})})]}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{class:"form-control",type:"password",onChange:function(e){var t=e.currentTarget.value;d(t)},placeholder:"Password",value:o})})]}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"First Name"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;N(t)},placeholder:"First Name",value:v})})]}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Last Name"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;S(t)},placeholder:"Last Name",value:k})})]}),Object(g.jsxs)("div",{className:"input-group mb-3",children:[Object(g.jsx)("div",{className:"input-group-prepend",children:Object(g.jsx)("span",{style:{width:"100px"},className:" input-group-text",children:"Email"})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{class:"form-control",type:"email",onChange:function(e){var t=e.currentTarget.value;x(t)},placeholder:"Email",value:h})})]}),Object(g.jsx)("button",{type:"button",class:"btn btn-primary",onClick:_,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},P="/login",D=function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),n=t[0],s=t[1],a=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.me();case 2:(null===(t=e.sent)||void 0===t?void 0:t.id)&&s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)(Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("auth_token")&&a();case 1:case"end":return e.stop()}}),e)}))),[]);var i=function(){s(null)};return c=i,Object(g.jsx)(d.a,{children:Object(g.jsx)(S,{user:n,notauthorized:i,children:Object(g.jsxs)(p.d,{children:[Object(g.jsx)(p.b,{exact:!0,path:"/",component:_}),Object(g.jsx)(p.b,{exact:!0,path:P,component:(null===n||void 0===n?void 0:n.id)?function(){return Object(g.jsx)(p.a,{to:"/"})}:function(){return Object(g.jsx)(C,{getUser:a})}}),Object(g.jsx)(p.b,{exact:!0,path:"/logout",component:(null===n||void 0===n?void 0:n.id)?I:function(){return Object(g.jsx)(p.a,{to:P})}}),Object(g.jsx)(p.b,{exact:!0,path:"/registration",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(g.jsx)(p.a,{to:"/"})}:function(){return Object(g.jsx)(L,{getUser:a})}}),Object(g.jsx)(p.b,{exact:!0,path:"/reset-password",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(g.jsx)(T,{})}:function(){return Object(g.jsx)(p.a,{to:P})}}),Object(g.jsx)(p.b,{exact:!0,path:"/profile",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(g.jsx)(U,{user:n})}:function(){return Object(g.jsx)(p.a,{to:P})}}),Object(g.jsx)(p.b,{path:"*",component:E})]})})})},E=function(){return Object(g.jsx)("div",{children:"404"})};i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(D,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7898123f.chunk.js.map