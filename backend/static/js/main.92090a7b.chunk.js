(this.webpackJsonpshop_ui=this.webpackJsonpshop_ui||[]).push([[0],{41:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n.n(r),s=n(33),i=n.n(s),o=(n(41),n(2)),u=n.n(o),l=n(3),j=n(5),d=(n(13),n(11)),p=n(4),b=n(34),h=n.n(b).a.create({baseURL:"http://127.0.0.1:8000",withCredentials:!0,headers:{"Content-Type":"application/json"}});h.interceptors.request.use((function(e){return"/auth/token/login"===e.url||"/auth/users/"===e.url||(e.headers.Authorization=localStorage.getItem("auth_token")?"Token "+localStorage.getItem("auth_token"):null),e})),h.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&c&&c(),Promise.reject(e)}));var x=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/token/login",{username:t,password:n}).then((function(e){var t;return(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.auth_token)?(localStorage.setItem("auth_token",e.data.auth_token),e):"error: auth_token not found"}),(function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(u.a.mark((function e(t,n,c,r,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/users/",{username:t,password:n,first_name:c,last_name:r,email:a}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c,r,a){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/api/logout").then((function(e){return localStorage.removeItem("auth_token"),c()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/auth/users/me").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/api/cart/current_customer_cart").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.patch("api/cart/current_customer_cart/change_qty/".concat(t,"/").concat(n.id,"/")).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.put("api/cart/current_customer_cart/remove_from_cart/".concat(t.id,"/")).then((function(e){return e.data})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N={login:x,registration:f,logout:O,me:m,cartUser:v,changeQty:g,deleteProduct:y},w=n(0),k=function(e){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(w.jsxs)("div",{className:"container-fluid",children:[Object(w.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(d.b,{style:{textDecoration:"none"},to:"/",children:Object(w.jsx)("span",{className:"nav-link",children:"TicketShop"})})})}),Object(w.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(w.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:e.user?Object(w.jsx)(S,{user:e.user}):Object(w.jsx)(_,{})})})]})})})},C=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.logout();case 2:return t=e.sent,e.abrupt("return",console.log(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(d.b,{style:{textDecoration:"none"},to:"/login",children:Object(w.jsx)("span",{className:"nav-link",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(d.b,{style:{textDecoration:"none"},to:"/registration",children:Object(w.jsx)("span",{className:"nav-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})]})},S=function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)(d.b,{style:{textDecoration:"none"},to:"/profile",children:Object(w.jsx)("span",{className:"nav-link",children:e.user.username})})}),Object(w.jsx)("li",{className:"nav-item",children:Object(w.jsx)("button",{type:"button",class:"btn btn-light",onClick:C,children:"\u0412\u044b\u0445\u043e\u0434"})})]})},T=function(e){return Object(w.jsxs)("div",{children:[Object(w.jsx)(k,{user:e.user||null,notauthorized:e.notauthorized}),e.children]})},U=function(e){return Object(w.jsx)("div",{children:"Home"})},I=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),o=i[0],d=i[1],p=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.login(c,o);case 2:(n=t.sent).data&&n.data.auth_token&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(w.jsx)("h3",{className:"text-center",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{className:"input-group mb-3",children:[Object(w.jsx)("div",{className:"input-group-prepend",children:Object(w.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Login"})}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"text",class:"form-control",onChange:function(e){var t=e.currentTarget.value;a(t)},placeholder:"Login",value:c})})]}),Object(w.jsxs)("div",{className:"input-group mb-3",children:[Object(w.jsx)("div",{className:"input-group-prepend",children:Object(w.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{type:"password",class:"form-control",onChange:function(e){var t=e.currentTarget.value;d(t)},placeholder:"Password",value:o})})]}),Object(w.jsx)("button",{type:"button",class:"btn btn-primary",onClick:p,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},P=function(){return Object(w.jsx)("div",{children:"ResetPassword"})},L=n(23),F=n(24),q=function(e){var t;return console.log(e.cart),Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(w.jsxs)("h3",{className:"text-center",children:["\u041f\u0440\u043e\u0444\u0438\u043b\u044c ",e.user.username]}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{className:"col-sm",children:[Object(w.jsxs)("h5",{className:"text-center",children:["UserName: ",e.user.username]}),Object(w.jsxs)("h5",{className:"text-center",children:["First Name: ",e.user.first_name]}),Object(w.jsxs)("h5",{className:"text-center",children:["Last Name: ",e.user.last_name]}),Object(w.jsxs)("h5",{className:"text-center",children:["Email: ",e.user.email]})]}),Object(w.jsx)("hr",{})]})}),(null===(t=e.cart)||void 0===t?void 0:t.product)?Object(w.jsx)(D,{cart:e.cart}):Object(w.jsx)(E,{})]})},E=function(){return Object(w.jsx)("div",{className:"row",children:Object(w.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(w.jsx)("h3",{className:"text-center",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})})})};function z(e){var t=Math.pow(10,2);return Math.round(parseFloat(e)*t+1e-7)/t}var D=function(e){var t=Object(r.useState)(e.cart.products),n=Object(j.a)(t,2),c=n[0],a=n[1],s=function(e,t){var n=c.findIndex((function(e){return e.id===t}));if(n>=0){var r=c[n],s=Object(F.a)(Object(F.a)({},r),{},{qty:e}),i=Object(L.a)(c);i[n]=s,a(i)}},i=function(e){var t=c.findIndex((function(t){return t.id===e}));if(t>=0){var n=Object(L.a)(c);n.splice(t,1),a(n)}},o=z(c.reduce((function(e,t){return e+t.qty*t.product.price}),0));return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(w.jsx)("h3",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(w.jsxs)("div",{className:"col-mb-12",children:[Object(w.jsxs)("table",{className:"table",children:[Object(w.jsxs)("thead",{children:[Object(w.jsx)("th",{scope:"col",children:Object(w.jsx)("span",{style:{display:"flex",justifyContent:"flex-start"},children:"\u0422\u043e\u0432\u0430\u0440"})}),Object(w.jsx)("th",{scope:"col",children:Object(w.jsx)("span",{style:{display:"flex",justifyContent:"flex-start"},children:"\u0426\u0435\u043d\u0430"})}),Object(w.jsx)("th",{scope:"col",children:Object(w.jsx)("span",{style:{display:"flex",justifyContent:"center"},children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"})})]}),Object(w.jsx)("tbody",{children:c.map((function(e){return Object(w.jsx)(M,{count:e.qty,product:e,updateCount:s,deleteProduct:i},e.id)}))})]}),Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-sm",children:Object(w.jsxs)("h5",{style:{marginTop:"8px"},children:[Object(w.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e: "}),Object(w.jsx)("span",{children:o})]})}),Object(w.jsx)("div",{className:"col-sm",style:{display:"flex",justifyContent:"flex-end"},children:Object(w.jsx)("button",{type:"button",class:"btn btn-outline-success",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})})]})})]})]})})})},M=function(e){var t=e.product,n=e.count,c=e.updateCount,r=e.deleteProduct,a=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.changeQty(n+1,t);case 2:c(n+1,t.id);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.changeQty(n-1,t);case 2:c(n-1,t.id);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(t.id);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{scope:"row",children:t.product.title}),Object(w.jsx)("td",{scope:"row",children:z(t.product.price*t.qty)}),Object(w.jsx)("td",{scope:"row",children:Object(w.jsxs)("span",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(w.jsx)("button",{type:"button",class:"btn btn-outline-info",disabled:n<2,onClick:s,children:"-"}),Object(w.jsx)("span",{style:{margin:"3px"},class:"btn btn-outline-secondary",children:n}),Object(w.jsx)("button",{type:"button",class:"btn btn-outline-info",disabled:n>10,onClick:a,children:"+"}),Object(w.jsx)("button",{style:{marginLeft:"3px",marginRight:"12px"},type:"button",className:"btn btn-outline-danger",onClick:i,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})})]},t.id)},Q=function(){return N.logout},R=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),o=i[0],d=i[1],p=Object(r.useState)(""),b=Object(j.a)(p,2),h=b[0],x=b[1],f=Object(r.useState)(""),O=Object(j.a)(f,2),m=O[0],v=O[1],g=Object(r.useState)(""),y=Object(j.a)(g,2),k=y[0],C=y[1],_=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.registration(c,o,m,k,h);case 2:"Created"==t.sent.statusText&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"row",children:Object(w.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(w.jsx)("h3",{className:"text-center",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{className:"input-group mb-3",children:[Object(w.jsx)("div",{className:"input-group-prepend",children:Object(w.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"User Name"})}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;a(t)},placeholder:"User Name",value:c})})]}),Object(w.jsxs)("div",{className:"input-group mb-3",children:[Object(w.jsx)("div",{className:"input-group-prepend",children:Object(w.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{class:"form-control",type:"password",onChange:function(e){var t=e.currentTarget.value;d(t)},placeholder:"Password",value:o})})]}),Object(w.jsxs)("div",{className:"input-group mb-3",children:[Object(w.jsx)("div",{className:"input-group-prepend",children:Object(w.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"First Name"})}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;v(t)},placeholder:"First Name",value:m})})]}),Object(w.jsxs)("div",{className:"input-group mb-3",children:[Object(w.jsx)("div",{className:"input-group-prepend",children:Object(w.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Last Name"})}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;C(t)},placeholder:"Last Name",value:k})})]}),Object(w.jsxs)("div",{className:"input-group mb-3",children:[Object(w.jsx)("div",{className:"input-group-prepend",children:Object(w.jsx)("span",{style:{width:"100px"},className:" input-group-text",children:"Email"})}),Object(w.jsx)("div",{children:Object(w.jsx)("input",{class:"form-control",type:"email",onChange:function(e){var t=e.currentTarget.value;x(t)},placeholder:"Email",value:h})})]}),Object(w.jsx)("button",{type:"button",class:"btn btn-primary",onClick:_,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},A="/login",J=function(){var e=Object(r.useState)(void 0),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(null),i=Object(j.a)(s,2),o=i[0],b=i[1],h=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.me();case 2:(null===(t=e.sent)||void 0===t?void 0:t.id)?a(t):a(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.cartUser();case 2:(null===(t=e.sent)||void 0===t?void 0:t.id)&&b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("auth_token")&&(h(),x());case 1:case"end":return e.stop()}}),e)}))),[]);var f=function(){a(null)};return c=f,void 0===n?Object(w.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:"Loading..."}):Object(w.jsx)(d.a,{children:Object(w.jsx)(T,{user:n,notauthorized:f,children:Object(w.jsxs)(p.d,{children:[Object(w.jsx)(p.b,{exact:!0,path:"/",component:U}),Object(w.jsx)(p.b,{exact:!0,path:A,component:(null===n||void 0===n?void 0:n.id)?function(){return Object(w.jsx)(p.a,{to:"/"})}:function(){return Object(w.jsx)(I,{getUser:h})}}),Object(w.jsx)(p.b,{exact:!0,path:"/logout",component:(null===n||void 0===n?void 0:n.id)?Q:function(){return Object(w.jsx)(p.a,{to:A})}}),Object(w.jsx)(p.b,{exact:!0,path:"/registration",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(w.jsx)(p.a,{to:"/"})}:function(){return Object(w.jsx)(R,{getUser:h})}}),Object(w.jsx)(p.b,{exact:!0,path:"/reset-password",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(w.jsx)(P,{})}:function(){return Object(w.jsx)(p.a,{to:A})}}),Object(w.jsx)(p.b,{exact:!0,path:"/profile",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(w.jsx)(q,{user:n,cart:o})}:function(){return Object(w.jsx)(p.a,{to:A})}}),Object(w.jsx)(p.b,{path:"*",component:B})]})})})},B=function(){return Object(w.jsx)("div",{children:"404"})};i.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.92090a7b.chunk.js.map