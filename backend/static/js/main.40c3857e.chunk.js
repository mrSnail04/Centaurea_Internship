(this.webpackJsonpshop_ui=this.webpackJsonpshop_ui||[]).push([[0],{37:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r,c=n(1),s=n.n(c),a=n(29),i=n.n(a),o=(n(37),n(2)),u=n.n(o),l=n(4),j=n(9),d=(n(14),n(11)),p=n(3),b=n(30),h=n.n(b).a.create({baseURL:"http://127.0.0.1:8000",withCredentials:!0,headers:{"Content-Type":"application/json"}});h.interceptors.request.use((function(e){return"/auth/token/login"===e.url||"/auth/users/"===e.url||(e.headers.Authorization=localStorage.getItem("auth_token")?"Token "+localStorage.getItem("auth_token"):null),e})),h.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&r&&r(),Promise.reject(e)}));var x=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/token/login",{username:t,password:n}).then((function(e){var t;return(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.auth_token)?(localStorage.setItem("auth_token",e.data.auth_token),e):"error: auth_token not found"}),(function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(u.a.mark((function e(t,n,r,c,s){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/users/",{username:t,password:n,first_name:r,last_name:c,email:s}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,c,s){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/api/logout").then((function(e){return localStorage.removeItem("auth_token"),r()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/auth/users/me").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/api/cart/current_customer_cart").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g={login:x,registration:O,logout:m,me:v,cartuser:f},N=n(0),w=function(e){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(N.jsxs)("div",{className:"container-fluid",children:[Object(N.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(d.b,{style:{textDecoration:"none"},to:"/",children:Object(N.jsx)("span",{className:"nav-link",children:"TicketShop"})})})}),Object(N.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(N.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:e.user?Object(N.jsx)(_,{user:e.user}):Object(N.jsx)(k,{})})})]})})})},y=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.logout();case 2:return t=e.sent,e.abrupt("return",console.log(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(d.b,{style:{textDecoration:"none"},to:"/login",children:Object(N.jsx)("span",{className:"nav-link",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})}),Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(d.b,{style:{textDecoration:"none"},to:"/registration",children:Object(N.jsx)("span",{className:"nav-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})]})},_=function(e){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(d.b,{style:{textDecoration:"none"},to:"/profile",children:Object(N.jsx)("span",{className:"nav-link",children:e.user.username})})}),Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)("button",{type:"button",class:"btn btn-light",onClick:y,children:"\u0412\u044b\u0445\u043e\u0434"})})]})},S=function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)(w,{user:e.user||null,notauthorized:e.notauthorized}),e.children]})},C=function(e){return Object(N.jsx)("div",{children:"Home"})},T=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),o=i[0],d=i[1],p=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.login(r,o);case 2:(n=t.sent).data&&n.data.auth_token&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(N.jsx)("h3",{className:"text-center",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Login"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{type:"text",class:"form-control",onChange:function(e){var t=e.currentTarget.value;s(t)},placeholder:"Login",value:r})})]}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{type:"password",class:"form-control",onChange:function(e){var t=e.currentTarget.value;d(t)},placeholder:"Password",value:o})})]}),Object(N.jsx)("button",{type:"button",class:"btn btn-primary",onClick:p,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},U=function(){return Object(N.jsx)("div",{children:"ResetPassword"})},F=function(e){return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(N.jsxs)("h3",{className:"text-center",children:["\u041f\u0440\u043e\u0444\u0438\u043b\u044c ",e.user.username]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:"col-sm",children:[Object(N.jsxs)("h5",{className:"text-center",children:["UserName: ",e.user.username]}),Object(N.jsxs)("h5",{className:"text-center",children:["First Name: ",e.user.first_name]}),Object(N.jsxs)("h5",{className:"text-center",children:["Last Name: ",e.user.last_name]}),Object(N.jsxs)("h5",{className:"text-center",children:["Email: ",e.user.email]})]}),Object(N.jsx)("hr",{})]})}),e.cart.final_price?Object(N.jsx)(L,{user:e.cart}):Object(N.jsx)(I,{})]})},I=function(){return Object(N.jsx)("div",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})},L=function(e){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(N.jsx)("div",{className:"col-mb-12",children:Object(N.jsxs)("table",{className:"table",children:[Object(N.jsxs)("thead",{children:[Object(N.jsx)("th",{scope:"col",children:"\u041d\u043e\u043c\u0435\u0440"}),Object(N.jsx)("th",{scope:"col",children:"\u0421\u0443\u043c\u043c\u0430"}),Object(N.jsx)("th",{scope:"col",children:"\u0422\u043e\u0432\u0430\u0440"}),Object(N.jsx)("th",{scope:"col",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"})]}),Object(N.jsx)("tbody",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{scope:"row",children:e.id}),Object(N.jsx)("td",{scope:"row",children:e.final_price}),Object(N.jsx)("td",{scope:"row",children:Object(N.jsx)("ul",{children:Object(N.jsx)("li",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0446\u0435\u0440\u0442\u0430 "})})}),Object(N.jsx)("td",{scope:"row",children:Object(N.jsx)("div",{className:"input-group",children:Object(N.jsx)("input",{type:"number",className:"form-control",min:"0",max:"10",placeholder:"Qty","aria-label":"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"})})})]})})]})})})})})},P=function(){return g.logout},E=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),o=i[0],d=i[1],p=Object(c.useState)(""),b=Object(j.a)(p,2),h=b[0],x=b[1],O=Object(c.useState)(""),m=Object(j.a)(O,2),v=m[0],f=m[1],w=Object(c.useState)(""),y=Object(j.a)(w,2),k=y[0],_=y[1],S=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.registration(r,o,v,k,h);case 2:"Created"==t.sent.statusText&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(N.jsx)("h3",{className:"text-center",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"User Name"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;s(t)},placeholder:"User Name",value:r})})]}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{class:"form-control",type:"password",onChange:function(e){var t=e.currentTarget.value;d(t)},placeholder:"Password",value:o})})]}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"First Name"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;f(t)},placeholder:"First Name",value:v})})]}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Last Name"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;_(t)},placeholder:"Last Name",value:k})})]}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:" input-group-text",children:"Email"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{class:"form-control",type:"email",onChange:function(e){var t=e.currentTarget.value;x(t)},placeholder:"Email",value:h})})]}),Object(N.jsx)("button",{type:"button",class:"btn btn-primary",onClick:S,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},z="/login",D=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),i=Object(j.a)(a,2),o=i[0],b=i[1],h=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.me();case 2:(null===(t=e.sent)||void 0===t?void 0:t.id)&&s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.cartuser();case 2:(null===(t=e.sent)||void 0===t?void 0:t.id)&&b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("auth_token")&&(h(),x());case 1:case"end":return e.stop()}}),e)}))),[]);var O=function(){s(null)};return r=O,Object(N.jsx)(d.a,{children:Object(N.jsx)(S,{user:n,notauthorized:O,children:Object(N.jsxs)(p.d,{children:[Object(N.jsx)(p.b,{exact:!0,path:"/",component:C}),Object(N.jsx)(p.b,{exact:!0,path:z,component:(null===n||void 0===n?void 0:n.id)?function(){return Object(N.jsx)(p.a,{to:"/"})}:function(){return Object(N.jsx)(T,{getUser:h})}}),Object(N.jsx)(p.b,{exact:!0,path:"/logout",component:(null===n||void 0===n?void 0:n.id)?P:function(){return Object(N.jsx)(p.a,{to:z})}}),Object(N.jsx)(p.b,{exact:!0,path:"/registration",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(N.jsx)(p.a,{to:"/"})}:function(){return Object(N.jsx)(E,{getUser:h})}}),Object(N.jsx)(p.b,{exact:!0,path:"/reset-password",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(N.jsx)(U,{})}:function(){return Object(N.jsx)(p.a,{to:z})}}),Object(N.jsx)(p.b,{exact:!0,path:"/profile",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(N.jsx)(F,{user:n,cart:o})}:function(){return Object(N.jsx)(p.a,{to:z})}}),Object(N.jsx)(p.b,{path:"*",component:A})]})})})},A=function(){return Object(N.jsx)("div",{children:"404"})};i.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(D,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.40c3857e.chunk.js.map