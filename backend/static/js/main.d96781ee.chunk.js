(this.webpackJsonpshop_ui=this.webpackJsonpshop_ui||[]).push([[0],{41:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n.n(r),s=n(32),i=n.n(s),o=(n(41),n(2)),u=n.n(o),l=n(3),j=n(5),d=(n(13),n(11)),p=n(4),b=n(33),h=n.n(b).a.create({baseURL:"http://127.0.0.1:8000",withCredentials:!0,headers:{"Content-Type":"application/json"}});h.interceptors.request.use((function(e){return"/auth/token/login"===e.url||"/auth/users/"===e.url||(e.headers.Authorization=localStorage.getItem("auth_token")?"Token "+localStorage.getItem("auth_token"):null),e})),h.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&c&&c(),Promise.reject(e)}));var x=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/token/login",{username:t,password:n}).then((function(e){var t;return(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.auth_token)?(localStorage.setItem("auth_token",e.data.auth_token),e):"error: auth_token not found"}),(function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(u.a.mark((function e(t,n,c,r,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/users/",{username:t,password:n,first_name:c,last_name:r,email:a}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c,r,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/api/logout").then((function(e){return localStorage.removeItem("auth_token"),c()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/auth/users/me").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/api/cart/current_customer_cart").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.patch("api/cart/current_customer_cart/change_qty/".concat(t,"/").concat(n.id,"/")).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.put("api/cart/current_customer_cart/remove_from_cart/".concat(t.id,"/")).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("api/event").then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w={login:x,registration:O,logout:f,me:m,cartUser:v,changeQty:g,deleteProduct:N,event:y},k=n(0),C=function(e){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(k.jsxs)("div",{className:"container-fluid",children:[Object(k.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(d.b,{style:{textDecoration:"none"},to:"/",children:Object(k.jsx)("span",{className:"nav-link",children:"TicketShop"})})})}),Object(k.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(k.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:e.user?Object(k.jsx)(T,{user:e.user}):Object(k.jsx)(S,{})})})]})})})},_=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.logout();case 2:return t=e.sent,e.abrupt("return",console.log(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(d.b,{style:{textDecoration:"none"},to:"/login",children:Object(k.jsx)("span",{className:"nav-link",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(d.b,{style:{textDecoration:"none"},to:"/registration",children:Object(k.jsx)("span",{className:"nav-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})]})},T=function(e){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)(d.b,{style:{textDecoration:"none"},to:"/profile",children:Object(k.jsx)("span",{className:"nav-link",children:e.user.username})})}),Object(k.jsx)("li",{className:"nav-item",children:Object(k.jsx)("button",{type:"button",class:"btn btn-light",onClick:_,children:"\u0412\u044b\u0445\u043e\u0434"})})]})},U=function(e){return Object(k.jsxs)("div",{children:[Object(k.jsx)(C,{user:e.user||null,notauthorized:e.notauthorized}),e.children]})},I=function(e){return Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"col-lg-9",children:Object(k.jsxs)("div",{className:"row",children:[console.log(e.events),e.events.map((function(e){return Object(k.jsx)(L,{name:e.name,img:e.image},e.id)}))]})})})})},L=function(e){var t=e.key,n=e.name;e.img;return Object(k.jsx)("div",{className:"col-lg-4 col-md-6 mb-4",children:Object(k.jsxs)("div",{className:"card h-100",children:[Object(k.jsx)("a",{href:"#",children:Object(k.jsx)("img",{className:"card-img-top",src:"#",alt:""})}),Object(k.jsx)("div",{className:"card-body text-center",children:Object(k.jsx)("h4",{className:"card-title",children:Object(k.jsx)("a",{href:"#",children:n})})})]})},t)},P=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),o=i[0],d=i[1],p=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.login(c,o);case 2:(n=t.sent).data&&n.data.auth_token&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(k.jsx)("h3",{className:"text-center",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{className:"input-group mb-3",children:[Object(k.jsx)("div",{className:"input-group-prepend",children:Object(k.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Login"})}),Object(k.jsx)("div",{children:Object(k.jsx)("input",{type:"text",class:"form-control",onChange:function(e){var t=e.currentTarget.value;a(t)},placeholder:"Login",value:c})})]}),Object(k.jsxs)("div",{className:"input-group mb-3",children:[Object(k.jsx)("div",{className:"input-group-prepend",children:Object(k.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(k.jsx)("div",{children:Object(k.jsx)("input",{type:"password",class:"form-control",onChange:function(e){var t=e.currentTarget.value;d(t)},placeholder:"Password",value:o})})]}),Object(k.jsx)("button",{type:"button",class:"btn btn-primary",onClick:p,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},F=function(){return Object(k.jsx)("div",{children:"ResetPassword"})},q=n(36),E=n(23),z=function(e){var t;return Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(k.jsxs)("h3",{className:"text-center",children:["\u041f\u0440\u043e\u0444\u0438\u043b\u044c ",e.user.username]}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{className:"col-sm",children:[Object(k.jsxs)("h5",{className:"text-center",children:["UserName: ",e.user.username]}),Object(k.jsxs)("h5",{className:"text-center",children:["First Name: ",e.user.first_name]}),Object(k.jsxs)("h5",{className:"text-center",children:["Last Name: ",e.user.last_name]}),Object(k.jsxs)("h5",{className:"text-center",children:["Email: ",e.user.email]})]}),Object(k.jsx)("hr",{})]})}),(null===(t=e.cart)||void 0===t?void 0:t.products[0])?Object(k.jsx)(Q,{cart:e.cart,getCart:e.getCart}):Object(k.jsx)(D,{})]})},D=function(){return Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(k.jsx)("h3",{className:"text-center",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})})})};function M(e){var t=Math.pow(10,2);return Math.round(parseFloat(e)*t+1e-7)/t}var Q=function(e){var t=Object(r.useState)(e.cart.products),n=Object(j.a)(t,2),c=n[0],a=n[1],s=function(e,t){var n=c.findIndex((function(e){return e.id===t}));if(n>=0){var r=c[n],s=Object(E.a)(Object(E.a)({},r),{},{qty:e}),i=Object(q.a)(c);i[n]=s,a(i)}},i=M(c.reduce((function(e,t){return e+t.qty*t.product.price}),0));return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(k.jsx)("h3",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(k.jsxs)("div",{className:"col-mb-12",children:[Object(k.jsxs)("table",{className:"table",children:[Object(k.jsxs)("thead",{children:[Object(k.jsx)("th",{scope:"col",children:Object(k.jsx)("span",{style:{display:"flex",justifyContent:"flex-start"},children:"\u0422\u043e\u0432\u0430\u0440"})}),Object(k.jsx)("th",{scope:"col",children:Object(k.jsx)("span",{style:{display:"flex",justifyContent:"flex-start"},children:"\u0426\u0435\u043d\u0430"})}),Object(k.jsx)("th",{scope:"col",children:Object(k.jsx)("span",{style:{display:"flex",justifyContent:"center"},children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"})})]}),Object(k.jsx)("tbody",{children:c.map((function(t){return Object(k.jsx)(R,{count:t.qty,product:t,updateCount:s,getCart:e.getCart},t.id)}))})]}),Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-sm",children:Object(k.jsxs)("h5",{style:{marginTop:"8px"},children:[Object(k.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e: "}),Object(k.jsx)("span",{children:i})]})}),Object(k.jsx)("div",{className:"col-sm",style:{display:"flex",justifyContent:"flex-end"},children:Object(k.jsx)("button",{type:"button",class:"btn btn-outline-success",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})})]})})]})]})})})},R=function(e){var t=e.product,n=e.count,c=e.updateCount,r=e.getCart,a=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.changeQty(n+1,t);case 2:c(n+1,t.id);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.changeQty(n-1,t);case 2:c(n-1,t.id);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.deleteProduct(t);case 2:204==e.sent.status?r():console.log("\u041e\u0448\u0438\u0431\u043a\u0430");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{scope:"row",children:t.product.title}),Object(k.jsx)("td",{scope:"row",children:M(t.product.price*t.qty)}),Object(k.jsx)("td",{scope:"row",children:Object(k.jsxs)("span",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(k.jsx)("button",{type:"button",class:"btn btn-outline-info",disabled:n<2,onClick:s,children:"-"}),Object(k.jsx)("span",{style:{margin:"3px"},class:"btn btn-outline-secondary",children:n}),Object(k.jsx)("button",{type:"button",class:"btn btn-outline-info",disabled:n>10,onClick:a,children:"+"}),Object(k.jsx)("button",{style:{marginLeft:"3px",marginRight:"12px"},type:"button",className:"btn btn-outline-danger",onClick:i,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})})]},t.id)},A=function(){return w.logout},J=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),o=i[0],d=i[1],p=Object(r.useState)(""),b=Object(j.a)(p,2),h=b[0],x=b[1],O=Object(r.useState)(""),f=Object(j.a)(O,2),m=f[0],v=f[1],g=Object(r.useState)(""),N=Object(j.a)(g,2),y=N[0],C=N[1],_=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.registration(c,o,m,y,h);case 2:"Created"==t.sent.statusText&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(k.jsx)("h3",{className:"text-center",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(k.jsx)("hr",{}),Object(k.jsxs)("div",{className:"input-group mb-3",children:[Object(k.jsx)("div",{className:"input-group-prepend",children:Object(k.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"User Name"})}),Object(k.jsx)("div",{children:Object(k.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;a(t)},placeholder:"User Name",value:c})})]}),Object(k.jsxs)("div",{className:"input-group mb-3",children:[Object(k.jsx)("div",{className:"input-group-prepend",children:Object(k.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(k.jsx)("div",{children:Object(k.jsx)("input",{class:"form-control",type:"password",onChange:function(e){var t=e.currentTarget.value;d(t)},placeholder:"Password",value:o})})]}),Object(k.jsxs)("div",{className:"input-group mb-3",children:[Object(k.jsx)("div",{className:"input-group-prepend",children:Object(k.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"First Name"})}),Object(k.jsx)("div",{children:Object(k.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;v(t)},placeholder:"First Name",value:m})})]}),Object(k.jsxs)("div",{className:"input-group mb-3",children:[Object(k.jsx)("div",{className:"input-group-prepend",children:Object(k.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Last Name"})}),Object(k.jsx)("div",{children:Object(k.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;C(t)},placeholder:"Last Name",value:y})})]}),Object(k.jsxs)("div",{className:"input-group mb-3",children:[Object(k.jsx)("div",{className:"input-group-prepend",children:Object(k.jsx)("span",{style:{width:"100px"},className:" input-group-text",children:"Email"})}),Object(k.jsx)("div",{children:Object(k.jsx)("input",{class:"form-control",type:"email",onChange:function(e){var t=e.currentTarget.value;x(t)},placeholder:"Email",value:h})})]}),Object(k.jsx)("button",{type:"button",class:"btn btn-primary",onClick:_,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},B="/login",G=function(){var e=Object(r.useState)(void 0),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(void 0),i=Object(j.a)(s,2),o=i[0],b=i[1],h=Object(r.useState)(void 0),x=Object(j.a)(h,2),O=x[0],f=x[1],m=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.me();case 2:(null===(t=e.sent)||void 0===t?void 0:t.id)?a(t):a(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.event();case 2:200===(t=e.sent).status?(console.log(t),f(t.data)):f(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.cartUser();case 2:(null===(t=e.sent)||void 0===t?void 0:t.id)?b(t):b(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("auth_token")&&(m(),g(),v());case 1:case"end":return e.stop()}}),e)}))),[]);var N=function(){a(null)};return c=N,void 0===n?Object(k.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:"Loading..."}):Object(k.jsx)(d.a,{children:Object(k.jsx)(U,{user:n,notauthorized:N,children:Object(k.jsxs)(p.d,{children:[Object(k.jsx)(p.b,{exact:!0,path:"/",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(k.jsx)(I,{events:O})}:function(){return Object(k.jsx)(p.a,{to:B})}}),Object(k.jsx)(p.b,{exact:!0,path:B,component:(null===n||void 0===n?void 0:n.id)?function(){return Object(k.jsx)(p.a,{to:"/"})}:function(){return Object(k.jsx)(P,{getUser:m})}}),Object(k.jsx)(p.b,{exact:!0,path:"/logout",component:(null===n||void 0===n?void 0:n.id)?A:function(){return Object(k.jsx)(p.a,{to:B})}}),Object(k.jsx)(p.b,{exact:!0,path:"/registration",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(k.jsx)(p.a,{to:"/"})}:function(){return Object(k.jsx)(J,{getUser:m})}}),Object(k.jsx)(p.b,{exact:!0,path:"/reset-password",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(k.jsx)(F,{})}:function(){return Object(k.jsx)(p.a,{to:B})}}),Object(k.jsx)(p.b,{exact:!0,path:"/profile",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(k.jsx)(z,{getCart:g,user:n,cart:o})}:function(){return Object(k.jsx)(p.a,{to:B})}}),Object(k.jsx)(p.b,{path:"*",component:H})]})})})},H=function(){return Object(k.jsx)("div",{children:"404"})};i.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(G,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.d96781ee.chunk.js.map