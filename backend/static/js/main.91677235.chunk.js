(this.webpackJsonpshop_ui=this.webpackJsonpshop_ui||[]).push([[0],{41:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n.n(r),s=n(32),i=n.n(s),o=(n(41),n(2)),u=n.n(o),l=n(3),j=n(5),d=(n(13),n(10)),p=n(4),b=n(33),h=n.n(b).a.create({baseURL:"http://127.0.0.1:8000",withCredentials:!0,headers:{"Content-Type":"application/json"}});h.interceptors.request.use((function(e){return"/auth/token/login"===e.url||"/auth/users/"===e.url||(e.headers.Authorization=localStorage.getItem("auth_token")?"Token "+localStorage.getItem("auth_token"):null),e})),h.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&c&&c(),Promise.reject(e)}));var x=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/token/login",{username:t,password:n}).then((function(e){var t;return(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.auth_token)?(localStorage.setItem("auth_token",e.data.auth_token),e):"error: auth_token not found"}),(function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(u.a.mark((function e(t,n,c,r,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.post("/auth/users/",{username:t,password:n,first_name:c,last_name:r,email:a}).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,c,r,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/api/logout").then((function(e){return localStorage.removeItem("auth_token"),c()})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/auth/users/me").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("/api/cart/current_customer_cart").then((function(e){return e.data})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.patch("api/cart/current_customer_cart/change_qty/".concat(t,"/").concat(n.id,"/")).then((function(e){200===e.status&&console.log(e.data)})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.put("api/cart/current_customer_cart/remove_from_cart/".concat(t.id,"/")).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("api/event/all_events").then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h.get("api/event/".concat(t)).then((function(e){return e})).catch((function(e){console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k={login:x,registration:O,logout:f,me:m,cartUser:v,changeQty:g,deleteProduct:N,events:y,event:w},C=n(0),_=function(e){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(C.jsxs)("div",{className:"container-fluid",children:[Object(C.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(d.b,{style:{textDecoration:"none"},to:"/",children:Object(C.jsx)("span",{className:"nav-link",children:"TicketShop"})})})}),Object(C.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(C.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:e.user?Object(C.jsx)(U,{user:e.user}):Object(C.jsx)(T,{})})})]})})})},S=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.logout();case 2:return t=e.sent,e.abrupt("return",console.log(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(d.b,{style:{textDecoration:"none"},to:"/login",children:Object(C.jsx)("span",{className:"nav-link",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(d.b,{style:{textDecoration:"none"},to:"/registration",children:Object(C.jsx)("span",{className:"nav-link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})]})},U=function(e){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)(d.b,{style:{textDecoration:"none"},to:"/profile",children:Object(C.jsx)("span",{className:"nav-link",children:e.user.username})})}),Object(C.jsx)("li",{className:"nav-item",children:Object(C.jsx)("button",{type:"button",class:"btn btn-light",onClick:S,children:"\u0412\u044b\u0445\u043e\u0434"})})]})},E=function(e){return Object(C.jsxs)("div",{children:[Object(C.jsx)(_,{user:e.user||null,notauthorized:e.notauthorized}),e.children]})},L=function(e){var t=Object(r.useState)(e.events),n=Object(j.a)(t,2),c=n[0];n[1];return Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row",children:Object(C.jsx)("div",{className:"col-lg-9",children:Object(C.jsx)("div",{className:"row",children:null===c||void 0===c?void 0:c.map((function(e){return Object(C.jsx)(P,{event:e,slug:e.slug,name:e.name,img:e.image},e.id)}))})})})})},P=function(e){var t=e.slug,n=e.name,c=e.img,r=e.event;return Object(C.jsx)("div",{className:"col-lg-4 col-md-6 mt-4",children:Object(C.jsxs)("div",{className:"card h-100",children:[Object(C.jsx)(d.b,{to:"event/".concat(t),children:Object(C.jsx)("img",{height:"400",className:"card-img-top",src:c,alt:"pic"})}),Object(C.jsx)("div",{className:"card-body text-center",children:Object(C.jsx)("h5",{className:"card-title",children:Object(C.jsx)(d.b,{style:{textDecoration:"none"},to:"event/".concat(t),children:Object(C.jsx)("span",{className:"nav-link",children:n})})})})]})},r.id)},I=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),o=i[0],d=i[1],p=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.login(c,o);case 2:(n=t.sent).data&&n.data.auth_token&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(C.jsx)("div",{className:"row",children:Object(C.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(C.jsx)("h3",{className:"text-center",children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(C.jsx)("hr",{}),Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("div",{className:"input-group-prepend",children:Object(C.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Login"})}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{type:"text",class:"form-control",onChange:function(e){var t=e.currentTarget.value;a(t)},placeholder:"Login",value:c})})]}),Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("div",{className:"input-group-prepend",children:Object(C.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{type:"password",class:"form-control",onChange:function(e){var t=e.currentTarget.value;d(t)},placeholder:"Password",value:o})})]}),Object(C.jsx)("button",{type:"button",class:"btn btn-primary",onClick:p,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},F=function(){return Object(C.jsx)("div",{children:"ResetPassword"})},q=n(36),D=n(23),z=function(e){var t;return Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)("div",{className:"row",children:Object(C.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(C.jsxs)("h3",{className:"text-center",children:["\u041f\u0440\u043e\u0444\u0438\u043b\u044c ",e.user.username]}),Object(C.jsx)("hr",{}),Object(C.jsxs)("div",{className:"col-sm",children:[Object(C.jsxs)("h5",{className:"text-center",children:["UserName: ",e.user.username]}),Object(C.jsxs)("h5",{className:"text-center",children:["First Name: ",e.user.first_name]}),Object(C.jsxs)("h5",{className:"text-center",children:["Last Name: ",e.user.last_name]}),Object(C.jsxs)("h5",{className:"text-center",children:["Email: ",e.user.email]})]}),Object(C.jsx)("hr",{})]})}),(null===(t=e.cart)||void 0===t?void 0:t.products[0])?Object(C.jsx)(Q,{cart:e.cart,getCart:e.getCart}):Object(C.jsx)(A,{})]})},A=function(){return Object(C.jsx)("div",{className:"row",children:Object(C.jsx)("div",{className:"col-md-6 offset-md-3",children:Object(C.jsx)("h3",{className:"text-center",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"})})})};function M(e){var t=Math.pow(10,2);return Math.round(parseFloat(e)*t+1e-7)/t}var Q=function(e){var t=Object(r.useState)(e.cart.products),n=Object(j.a)(t,2),c=n[0],a=n[1],s=function(e,t){var n=c.findIndex((function(e){return e.id===t}));if(n>=0){var r=c[n],s=Object(D.a)(Object(D.a)({},r),{},{qty:e}),i=Object(q.a)(c);i[n]=s,a(i)}},i=M(c.reduce((function(e,t){return e+t.qty*t.product.price}),0));return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"row",children:Object(C.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(C.jsx)("h3",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(C.jsxs)("div",{className:"col-mb-12",children:[Object(C.jsxs)("table",{className:"table",children:[Object(C.jsxs)("thead",{children:[Object(C.jsx)("th",{scope:"col",children:Object(C.jsx)("span",{style:{display:"flex",justifyContent:"flex-start"},children:"\u0422\u043e\u0432\u0430\u0440"})}),Object(C.jsx)("th",{scope:"col",children:Object(C.jsx)("span",{style:{display:"flex",justifyContent:"flex-start"},children:"\u0426\u0435\u043d\u0430"})}),Object(C.jsx)("th",{scope:"col",children:Object(C.jsx)("span",{style:{display:"flex",justifyContent:"center"},children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"})})]}),Object(C.jsx)("tbody",{children:c.map((function(t){return Object(C.jsx)(R,{count:t.qty,product:t,updateCount:s,getCart:e.getCart},t.id)}))})]}),Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"row",children:[Object(C.jsx)("div",{className:"col-sm",children:Object(C.jsxs)("h5",{style:{marginTop:"8px"},children:[Object(C.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e: "}),Object(C.jsx)("span",{children:i})]})}),Object(C.jsx)("div",{className:"col-sm",style:{display:"flex",justifyContent:"flex-end"},children:Object(C.jsx)("button",{type:"button",class:"btn btn-outline-success",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})})]})})]})]})})})},R=function(e){var t=e.product,n=e.count,c=e.updateCount,r=e.getCart,a=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.changeQty(n+1,t);case 2:c(n+1,t.id);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.changeQty(n-1,t);case 2:c(n-1,t.id);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.deleteProduct(t);case 2:204==e.sent.status?r():console.log("\u041e\u0448\u0438\u0431\u043a\u0430");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{scope:"row",children:t.product.title}),Object(C.jsx)("td",{scope:"row",children:M(t.product.price*t.qty)}),Object(C.jsx)("td",{scope:"row",children:Object(C.jsxs)("span",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(C.jsx)("button",{type:"button",class:"btn btn-outline-info",disabled:n<2,onClick:s,children:"-"}),Object(C.jsx)("span",{style:{margin:"3px"},class:"btn btn-outline-secondary",children:n}),Object(C.jsx)("button",{type:"button",class:"btn btn-outline-info",disabled:n>10,onClick:a,children:"+"}),Object(C.jsx)("button",{style:{marginLeft:"3px",marginRight:"12px"},type:"button",className:"btn btn-outline-danger",onClick:i,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})})]},t.id)},J=function(){return k.logout},B=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),o=i[0],d=i[1],p=Object(r.useState)(""),b=Object(j.a)(p,2),h=b[0],x=b[1],O=Object(r.useState)(""),f=Object(j.a)(O,2),m=f[0],v=f[1],g=Object(r.useState)(""),N=Object(j.a)(g,2),y=N[0],w=N[1],_=function(){var t=Object(l.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.registration(c,o,m,y,h);case 2:"Created"==t.sent.statusText&&e.getUser();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(C.jsx)("div",{className:"row",children:Object(C.jsxs)("div",{className:"col-md-6 offset-md-3",children:[Object(C.jsx)("h3",{className:"text-center",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(C.jsx)("hr",{}),Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("div",{className:"input-group-prepend",children:Object(C.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"User Name"})}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;a(t)},placeholder:"User Name",value:c})})]}),Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("div",{className:"input-group-prepend",children:Object(C.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Password"})}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{class:"form-control",type:"password",onChange:function(e){var t=e.currentTarget.value;d(t)},placeholder:"Password",value:o})})]}),Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("div",{className:"input-group-prepend",children:Object(C.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"First Name"})}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;v(t)},placeholder:"First Name",value:m})})]}),Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("div",{className:"input-group-prepend",children:Object(C.jsx)("span",{style:{width:"100px"},className:"input-group-text",children:"Last Name"})}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{class:"form-control",type:"text",onChange:function(e){var t=e.currentTarget.value;w(t)},placeholder:"Last Name",value:y})})]}),Object(C.jsxs)("div",{className:"input-group mb-3",children:[Object(C.jsx)("div",{className:"input-group-prepend",children:Object(C.jsx)("span",{style:{width:"100px"},className:" input-group-text",children:"Email"})}),Object(C.jsx)("div",{children:Object(C.jsx)("input",{class:"form-control",type:"email",onChange:function(e){var t=e.currentTarget.value;x(t)},placeholder:"Email",value:h})})]}),Object(C.jsx)("button",{type:"button",class:"btn btn-primary",onClick:_,children:"\u0412\u043e\u0439\u0442\u0438"})]})})},G=function(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(null),i=Object(j.a)(s,2),o=i[0],d=i[1],b=Object(p.g)().slug;return Object(r.useEffect)(Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,V(b);case 3:t=e.sent,d(t),a(!1);case 6:case"end":return e.stop()}}),e)}))),[b]),c?Object(C.jsx)("div",{children:"Loading..."}):o?Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row",children:Object(C.jsx)("div",{className:"col-lg-9",children:Object(C.jsxs)("div",{className:"row",children:["EVENT PAGE",Object(C.jsx)(H,{concert:o})]})})})}):Object(C.jsx)("div",{children:"Concert not found"})},V=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.event(t);case 2:if(200!=(n=e.sent).status){e.next=7;break}return e.abrupt("return",n.data[0]);case 7:console.log("\u041e\u0448\u0438\u0431\u043a\u0430");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t=e.concert;return Object(C.jsx)("div",{className:"container",children:Object(C.jsx)("div",{className:"row",children:Object(C.jsx)("div",{className:"col-lg-9",children:Object(C.jsx)("div",{className:"row",children:Object(C.jsx)("div",{children:t.name})})})})})},K="/login",W=function(){var e=Object(r.useState)(void 0),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(void 0),i=Object(j.a)(s,2),o=i[0],b=i[1],h=Object(r.useState)(void 0),x=Object(j.a)(h,2),O=x[0],f=x[1],m=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.me();case 2:(null===(t=e.sent)||void 0===t?void 0:t.id)?a(t):a(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.events();case 2:200===(t=e.sent).status?f(t.data):f(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.cartUser();case 2:(null===(t=e.sent)||void 0===t?void 0:t.id)?b(t):b(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("auth_token")&&(m(),g(),v());case 1:case"end":return e.stop()}}),e)}))),[]);var N=function(){a(null)};return c=N,void 0===n?Object(C.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:"Loading..."}):Object(C.jsx)(d.a,{children:Object(C.jsx)(E,{user:n,notauthorized:N,children:Object(C.jsxs)(p.d,{children:[Object(C.jsx)(p.b,{exact:!0,path:"/",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(C.jsx)(L,{events:O})}:function(){return Object(C.jsx)(p.a,{to:K})}}),Object(C.jsx)(p.b,{exact:!0,path:K,component:(null===n||void 0===n?void 0:n.id)?function(){return Object(C.jsx)(p.a,{to:"/"})}:function(){return Object(C.jsx)(I,{getUser:m})}}),Object(C.jsx)(p.b,{exact:!0,path:"/logout",component:(null===n||void 0===n?void 0:n.id)?J:function(){return Object(C.jsx)(p.a,{to:K})}}),Object(C.jsx)(p.b,{exact:!0,path:"/registration",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(C.jsx)(p.a,{to:"/"})}:function(){return Object(C.jsx)(B,{getUser:m})}}),Object(C.jsx)(p.b,{exact:!0,path:"/reset-password",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(C.jsx)(F,{})}:function(){return Object(C.jsx)(p.a,{to:K})}}),Object(C.jsx)(p.b,{exact:!0,path:"/profile",component:(null===n||void 0===n?void 0:n.id)?function(){return Object(C.jsx)(z,{getCart:g,user:n,cart:o})}:function(){return Object(C.jsx)(p.a,{to:K})}}),Object(C.jsx)(p.b,{path:"/event/:slug",children:Object(C.jsx)(G,{})}),Object(C.jsx)(p.b,{path:"*",component:X})]})})})},X=function(){return Object(C.jsx)("div",{children:"404"})};i.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(W,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.91677235.chunk.js.map