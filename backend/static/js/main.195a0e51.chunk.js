(this.webpackJsonpshop_ui=this.webpackJsonpshop_ui||[]).push([[0],{41:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c,r=n(1),s=n.n(r),a=n(32),i=n.n(a),o=(n(41),n(2)),u=n.n(o),l=n(4),j=n(5),d=(n(13),n(11)),p=n(3),b=n(33),h=n.n(b).a.create({baseURL:"http://127.0.0.1:8000",withCredentials:!0,headers:{"Content-Type":"application/json"}});h.interceptors.request.use((function(e){return"/auth/token/login"===e.url||"/auth/users/"===e.url||(e.headers.Authorization=localStorage.getItem("auth_token")?"Token "+localStorage.getItem("auth_token"):null),e})),h.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&c&&c(),Promise.reject(e)}));var x=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/token/login",{username:t,password:n}).then((function(e){var t;return(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.auth_token)?(localStorage.setItem("auth_token",e.data.auth_token),e):"error: auth_token not found"}),(function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(u.a.mark((function e(t,n,c,r,s){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/users/",{username:t,password:n,first_name:c,last_name:r,email:s}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c,r,s){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/api/logout").then((function(e){return localStorage.removeItem("auth_token"),c()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/auth/users/me").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/api/cart/current_customer_cart").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.patch("api/cart/current_customer_cart/change_qty/".concat(t,"/").concat(n.id,"/")).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y={login:x,registration:O,logout:m,me:f,cartUser:v,changeQty:g},N=n(0),w=function(e){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(N.jsxs)("div",{className:"container-fluid",children:[Object(N.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(d.b,{style:{textDecoration:"none"},to:"/",children:Object(N.jsx)("span",{className:"nav-link",children:"TicketShop"})})})}),Object(N.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(N.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:e.user?Object(N.jsx)(_,{user:e.user}):Object(N.jsx)(C,{})})})]})})})},k=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.logout();case 2:return t=e.sent,e.abrupt("return",console.log(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(d.b,{style:{textDecoration:"none"},to:"/login",children:Object(N.jsx)("span",{className:"nav-link",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})}),Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(d.b,{style:{textDecoration:"none"},to:"/registration",children:Object(N.jsx)("span",{className:"nav-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})]})},_=function(e){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)(d.b,{style:{textDecoration:"none"},to:"/profile",children:Object(N.jsx)("span",{className:"nav-link",children:e.user.username})})}),Object(N.jsx)("li",{className:"nav-item",children:Object(N.jsx)("button",{type:"button",class:"btn btn-light",onClick:k,children:"\u0412\u044b\u0445\u043e\u0434"})})]})},S=function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)(w,{user:e.user||null,notauthorized:e.notauthorized}),e.children]})},T=function(e){return Object(N.jsx)("div",{children:"Home"})},U=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),o=i[0],d=i[1],p=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.login(c,o);case 2:(n=t.sent).data&&n.data.auth_token&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(N.jsx)("h3",{className:"text-center",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Login"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{type:"text",class:"form-control",onChange:function(e){var t=e.currentTarget.value;s(t)},placeholder:"Login",value:c})})]}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{type:"password",class:"form-control",onChange:function(e){var t=e.currentTarget.value;d(t)},placeholder:"Password",value:o})})]}),Object(N.jsx)("button",{type:"button",class:"btn btn-primary",onClick:p,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},I=function(){return Object(N.jsx)("div",{children:"ResetPassword"})},L=n(36),F=n(23),q=function(e){var t;return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(N.jsxs)("h3",{className:"text-center",children:["\u041f\u0440\u043e\u0444\u0438\u043b\u044c ",e.user.username]}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:"col-sm",children:[Object(N.jsxs)("h5",{className:"text-center",children:["UserName: ",e.user.username]}),Object(N.jsxs)("h5",{className:"text-center",children:["First Name: ",e.user.first_name]}),Object(N.jsxs)("h5",{className:"text-center",children:["Last Name: ",e.user.last_name]}),Object(N.jsxs)("h5",{className:"text-center",children:["Email: ",e.user.email]})]}),Object(N.jsx)("hr",{})]})}),(null===(t=e.cart)||void 0===t?void 0:t.id)?Object(N.jsx)(z,{cart:e.cart}):Object(N.jsx)(P,{})]})},P=function(){return Object(N.jsx)("div",{className:"row",children:Object(N.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(N.jsx)("h3",{className:"text-center",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})})})};function E(e){var t=Math.pow(10,2);return Math.round(parseFloat(e)*t+1e-7)/t}var z=function(e){var t=Object(r.useState)(e.cart.products),n=Object(j.a)(t,2),c=n[0],s=n[1],a=function(e,t){var n=c.findIndex((function(e){return e.id===t}));if(n>=0){var r=c[n],a=Object(F.a)(Object(F.a)({},r),{},{qty:e}),i=Object(L.a)(c);i[n]=a,s(i)}},i=E(c.reduce((function(e,t){return e+t.qty*t.product.price}),0));return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(N.jsx)("h3",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(N.jsxs)("div",{className:"col-mb-12",children:[Object(N.jsxs)("table",{className:"table",children:[Object(N.jsxs)("thead",{children:[Object(N.jsx)("th",{scope:"col",children:Object(N.jsx)("span",{style:{display:"flex",justifyContent:"flex-start"},children:"\u0422\u043e\u0432\u0430\u0440"})}),Object(N.jsx)("th",{scope:"col",children:Object(N.jsx)("span",{style:{display:"flex",justifyContent:"flex-start"},children:"\u0426\u0435\u043d\u0430"})}),Object(N.jsx)("th",{scope:"col",children:Object(N.jsx)("span",{style:{display:"flex",justifyContent:"center"},children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"})})]}),Object(N.jsx)("tbody",{children:c.map((function(e){return Object(N.jsx)(D,{count:e.qty,product:e,updateCount:a},e.id)}))})]}),Object(N.jsx)("div",{className:"container",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-md-7",children:Object(N.jsxs)("h5",{children:[Object(N.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e: "}),Object(N.jsx)("span",{children:i})]})}),Object(N.jsx)("div",{className:"col-sm",style:{display:"flex",justifyContent:"flex-end"},children:Object(N.jsx)("button",{type:"button",class:"btn btn-primary",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})})]})})]})]})})})},D=function(e){var t=e.product,n=e.count,c=e.updateCount,r=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.changeQty(n+1,t);case 2:c(n+1,t.id);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.changeQty(n-1,t);case 2:c(n-1,t.id);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{scope:"row",children:t.product.title}),Object(N.jsx)("td",{scope:"row",children:E(t.product.price*t.qty)}),Object(N.jsx)("td",{scope:"row",children:Object(N.jsxs)("span",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(N.jsx)("button",{type:"button",class:"btn btn-outline-info",disabled:n<2,onClick:s,children:"-"}),Object(N.jsx)("span",{style:{margin:"3px"},class:"btn btn-outline-secondary",children:n}),Object(N.jsx)("button",{type:"button",class:"btn btn-outline-info",disabled:n>10,onClick:r,children:"+"}),Object(N.jsx)("button",{style:{marginLeft:"3px",marginRight:"10px"},type:"button",className:"btn btn-outline-info",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})})]},t.id)},M=function(){return y.logout},Q=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),o=i[0],d=i[1],p=Object(r.useState)(""),b=Object(j.a)(p,2),h=b[0],x=b[1],O=Object(r.useState)(""),m=Object(j.a)(O,2),f=m[0],v=m[1],g=Object(r.useState)(""),w=Object(j.a)(g,2),k=w[0],C=w[1],_=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.registration(c,o,f,k,h);case 2:"Created"==t.sent.statusText&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(N.jsx)("div",{className:"row",children:Object(N.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(N.jsx)("h3",{className:"text-center",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(N.jsx)("hr",{}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"User Name"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;s(t)},placeholder:"User Name",value:c})})]}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{class:"form-control",type:"password",onChange:function(e){var t=e.currentTarget.value;d(t)},placeholder:"Password",value:o})})]}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"First Name"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;v(t)},placeholder:"First Name",value:f})})]}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Last Name"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;C(t)},placeholder:"Last Name",value:k})})]}),Object(N.jsxs)("div",{className:"input-group mb-3",children:[Object(N.jsx)("div",{className:"input-group-prepend",children:Object(N.jsx)("span",{style:{width:"100px"},className:" input-group-text",children:"Email"})}),Object(N.jsx)("div",{children:Object(N.jsx)("input",{class:"form-control",type:"email",onChange:function(e){var t=e.currentTarget.value;x(t)},placeholder:"Email",value:h})})]}),Object(N.jsx)("button",{type:"button",class:"btn btn-primary",onClick:_,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},R="/login",A=function(){var e=Object(r.useState)(void 0),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(null),i=Object(j.a)(a,2),o=i[0],b=i[1],h=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.me();case 2:(null===(t=e.sent)||void 0===t?void 0:t.id)?s(t):s(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.cartUser();case 2:(null===(t=e.sent)||void 0===t?void 0:t.id)&&b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("auth_token")&&(h(),x());case 1:case"end":return e.stop()}}),e)}))),[]);var O=function(){s(null)};return c=O,void 0===n?Object(N.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:"Loading..."}):Object(N.jsx)(d.a,{children:Object(N.jsx)(S,{user:n,notauthorized:O,children:Object(N.jsxs)(p.d,{children:[Object(N.jsx)(p.b,{exact:!0,path:"/",component:T}),Object(N.jsx)(p.b,{exact:!0,path:R,component:(null===n||void 0===n?void 0:n.id)?function(){return Object(N.jsx)(p.a,{to:"/"})}:function(){return Object(N.jsx)(U,{getUser:h})}}),Object(N.jsx)(p.b,{exact:!0,path:"/logout",component:(null===n||void 0===n?void 0:n.id)?M:function(){return Object(N.jsx)(p.a,{to:R})}}),Object(N.jsx)(p.b,{exact:!0,path:"/registration",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(N.jsx)(p.a,{to:"/"})}:function(){return Object(N.jsx)(Q,{getUser:h})}}),Object(N.jsx)(p.b,{exact:!0,path:"/reset-password",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(N.jsx)(I,{})}:function(){return Object(N.jsx)(p.a,{to:R})}}),Object(N.jsx)(p.b,{exact:!0,path:"/profile",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(N.jsx)(q,{user:n,cart:o})}:function(){return Object(N.jsx)(p.a,{to:R})}}),Object(N.jsx)(p.b,{path:"*",component:J})]})})})},J=function(){return Object(N.jsx)("div",{children:"404"})};i.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(A,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.195a0e51.chunk.js.map