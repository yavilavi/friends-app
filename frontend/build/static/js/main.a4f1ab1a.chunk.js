(this["webpackJsonpmy-friends"]=this["webpackJsonpmy-friends"]||[]).push([[0],{63:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(16),i=n.n(s),r=n(10),l=n(1),o=function(){return Object(l.jsx)("nav",{className:"navbar navbar-light bg-primary",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(r.b,{to:"/",className:"navbar-brand text-white",children:"Mis Amigos"}),Object(l.jsx)(r.b,{to:"/add",className:"btn btn-success",type:"submit",children:"Add friend"})]})})},d=n(18),j=n(12),b=n(19),u=n(9),m="FETCH_FRIENDS",h="SET_MESSAGE",p=function(e){return{type:h,payload:e}},O=Object(u.b)((function(e){return{message:e.message}}),null)((function(e){var t=e.message,n=t.type,a=t.text,c=t.display,s=t.title;return Object(l.jsxs)("div",{className:"alert alert-".concat(n," alert-dismissible fade show d-").concat(c),role:"alert",children:[Object(l.jsx)("strong",{children:s})," ",a,Object(l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})})),x=n(11),f=n.n(x),v=Object(u.b)(null,{setMessage:p})((function(e){var t=e.setMessage,n=c.a.useState({name:"",phone:"",email:""}),a=Object(b.a)(n,2),s=a[0],i=a[1];function r(e){i(Object(j.a)(Object(j.a)({},s),{},Object(d.a)({},e.target.name,e.target.value)))}return c.a.useEffect((function(){return t({type:"",display:"none",title:"",text:""}),function(){return t({name:"",phone:"",email:""})}}),[t]),Object(l.jsxs)("form",{className:"form-floating mt-5 ms-5 me-5",onSubmit:function(e){e.preventDefault(),function(e){f.a.post("/api/v1/friend/add",e).then((function(){return t({type:"success",display:"block",title:"\xa1Excelente!",text:"Se ha creado el usuario con \xe9xito"})})).catch((function(){return t({type:"danger",display:"block",title:"\xa1Ups Algo sali\xf3 mal!",text:"Lo siento hubo un problema al tratar de procesar la solicitud con el servidor"})}))}(s),i({name:"",phone:"",email:""})},children:[Object(l.jsx)(O,{}),Object(l.jsxs)("div",{className:"form-floating mb-3",children:[Object(l.jsx)("input",{value:s.name,name:"name",type:"text",className:"form-control",id:"name",placeholder:"Friend name",onChange:r}),Object(l.jsx)("label",{htmlFor:"name",children:"Friend name"})]}),Object(l.jsxs)("div",{className:"form-floating mb-3",children:[Object(l.jsx)("input",{value:s.phone,name:"phone",type:"text",className:"form-control",id:"phone",placeholder:"Friend phone",onChange:r}),Object(l.jsx)("label",{htmlFor:"phone",children:"phone"})]}),Object(l.jsxs)("div",{className:"form-floating mb-3",children:[Object(l.jsx)("input",{value:s.email,name:"email",type:"email",className:"form-control",id:"email",placeholder:"name@example.com",onChange:r}),Object(l.jsx)("label",{htmlFor:"email",children:"Email address"})]}),Object(l.jsx)("div",{className:"col-auto",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-success mb-3",children:"Save friend"})})]})})),g=Object(u.b)((function(e){return{amigos:e.friendList}}),{fetchFriends:function(e){return{type:m,payload:e}}})((function(e){var t=e.state,n=e.amigos,c=e.fetchFriends;Object(a.useEffect)((function(){f.a.get("/api/v1/friend/").then((function(e){return e.data.data})).then((function(e){return c(e)})).catch((function(){}))}),[c]);var s=n.filter((function(e){return e.status===t}));return Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-header",children:Object(l.jsx)("span",{children:t})}),Object(l.jsx)("ul",{className:"list-group list-group-flush",children:s.map((function(e){return Object(l.jsx)(r.b,{to:"/edit/".concat(e.id),children:Object(l.jsx)("li",{className:"list-group-item",children:e.name})},e.id)}))})]})})})),N=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row mt-5",children:[Object(l.jsx)(O,{}),["Active","Inactive","Blocked"].map((function(e,t){return Object(l.jsx)(g,{state:e},e)}))]})})},y=n(3),E=Object(u.b)(null,{setMessage:p})((function(e){var t=e.match,n=e.setMessage,c=Object(a.useState)({}),s=Object(b.a)(c,2),i=s[0],r=s[1],o=parseInt(t.params.id),d=Object(y.f)(),j=function(e){f.a.get("/api/v1/friend/get/".concat(e)).then((function(e){return r(e.data[0])})).catch((function(){}))};if(Object(a.useEffect)((function(){return j(o),n({name:"",phone:"",email:""}),function(){return n({name:"",phone:"",email:""})}}),[o]),!i.name)return Object(l.jsx)("div",{children:"No existe el amigo solicitado"});var u=function(e,t){var a="desactivado";"block"===t&&(a="bloqueado"),f.a.put("/api/v1/friend/".concat(t,"/").concat(e)).then((function(){return n({type:"info",display:"block",title:"\xa1Excelente! ",text:"El usuario se ha ".concat(a," con \xe9xito")})}))},m=function(e){var t=e.target.id;switch(t){case"deactivate":case"block":u(o,t),j(o);break;case"delete":!function(e,t){f.a.delete("/api/v1/friend/".concat(t,"/").concat(e)).then((function(){return n({type:"info",display:"block",title:"\xa1Excelente! ",text:"El usuario ha sido eliminado con \xe9xito"})}))}(o,t),d.push("/")}};return Object(l.jsx)("div",{className:"container mt-5",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"container mt-5",children:[Object(l.jsx)(O,{}),Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("div",{className:"card-header",children:[Object(l.jsx)("strong",{children:"Nombre del amigo: "}),i.name]}),Object(l.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("strong",{children:"Tel\xe9fono: "}),i.phone]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("strong",{children:"Email: "}),i.email]}),Object(l.jsxs)("li",{className:"list-group-item",children:[Object(l.jsx)("strong",{children:"Estado: "}),i.status]})]}),Object(l.jsx)("div",{className:"card-footer",children:Object(l.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic example",children:[Object(l.jsx)("button",{id:"deactivate",onClick:m,type:"button",className:"btn btn-warning",children:"Desactivar"}),Object(l.jsx)("button",{id:"block",onClick:m,type:"button",className:"btn btn-info",children:"Bloquear"}),Object(l.jsx)("button",{id:"delete",onClick:m,type:"button",className:"btn btn-danger",children:"Eliminar"})]})})]})]})})})})),k=function(){return Object(l.jsx)("div",{children:"404"})};var S=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(y.c,{children:[Object(l.jsx)(y.a,{exact:!0,path:"/",component:N}),Object(l.jsx)(y.a,{exact:!0,path:"/add",component:v}),Object(l.jsx)(y.a,{exact:!0,path:"/edit/:id",component:E}),Object(l.jsx)(y.a,{path:"/",component:k})]})]})},w=n(15),F={friendList:[],message:{type:"",display:"none",title:"",text:""},loading:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(j.a)(Object(j.a)({},e),{},{friendList:t.payload});case h:return Object(j.a)(Object(j.a)({},e),{},{message:t.payload});default:return e}},_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0,traceLimit:25})||w.b,M=Object(w.c)(C,_());i.a.render(Object(l.jsx)(u.a,{store:M,children:Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(S,{})})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.a4f1ab1a.chunk.js.map