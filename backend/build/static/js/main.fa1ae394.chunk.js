(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{71:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(21),s=a.n(r),o=a(6),i=a(4),l=a(7),u=a(5),p=a.n(u),j=a(13),b=a(17),d=a.n(b),h=a(14),m=a.n(h),f="REGISTER_SUCCESS",O="REGISTER_FAIL",x="LOGIN_SUCCESS",v="LOGIN_FAIL",g="LOGOUT_SUCCESS",y="LOGOUT_FAIL",N="AUTHENTICATED_SUCCESS",_="AUTHENTICATED_FAIL",S="DELETE_USER_SUCCESS",A="DELETE_USER_FAIL",w="LOAD_USER_PROFILE_SUCCESS",C="LOAD_USER_PROFILE_FAIL",k="UPDATE_USER_PROFILE_SUCCESS",E="UPDATE_USER_PROFILE_FAIL",T=function(){return function(){var e=Object(j.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,m.a.get("".concat("http://localhost:8000","/profile/user"),a);case 4:(n=e.sent).data.error?t({type:C}):t({type:w,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:C});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},U=a(0),L=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(){var e=Object(j.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":d.a.get("csrftoken")}},n=JSON.stringify({withCredentials:!0}),e.prev=2,e.next=5,m.a.post("".concat("http://localhost:8000","/accounts/logout"),n,a);case 5:e.sent.data.success?t({type:g}):t({type:y}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:y});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.isAuthenticated,a=e.logout,c=Object(U.jsxs)(n.Fragment,{children:[Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)(o.c,{className:"nav-link",to:"/dashboard",children:"Dashboard"})}),Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)("a",{className:"nav-link",onClick:a,href:"#!",children:"Logout"})})]}),r=Object(U.jsxs)(n.Fragment,{children:[Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)(o.c,{className:"nav-link",to:"/login",children:"Login"})}),Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)(o.c,{className:"nav-link",to:"/register",children:"Register"})})]});return Object(U.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(U.jsxs)("div",{className:"container-fluid",children:[Object(U.jsx)(o.b,{className:"navbar-brand",exact:!0,to:"/",children:"Session Auth"}),Object(U.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(U.jsx)("span",{className:"navbar-toggler-icon"})}),Object(U.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(U.jsxs)("ul",{className:"navbar-nav",children:[Object(U.jsx)("li",{className:"nav-item",children:Object(U.jsx)(o.c,{className:"nav-link",exact:!0,to:"/",children:"Home"})}),t?c:r]})})]})})})),R=Object(l.b)(null,{checkAuthenticated:function(){return function(){var e=Object(j.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Accept:"application/json","Content-Type":"application/json"}},e.prev=1,e.next=4,m.a.get("".concat("http://localhost:8000","/accounts/authenticated"),a);case 4:(n=e.sent).data.error||"error"===n.data.isAuthenticated?t({type:_,payload:!1}):"success"===n.data.isAuthenticated?t({type:N,payload:!0}):t({type:_,payload:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:_,payload:!1});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},load_user:T})((function(e){var t=e.children,a=e.checkAuthenticated,c=e.load_user;return Object(n.useEffect)((function(){a(),c()}),[]),Object(U.jsxs)(n.Fragment,{children:[Object(U.jsx)(L,{}),t]})})),F=function(){return Object(U.jsx)("div",{className:"container",children:Object(U.jsxs)("div",{className:"mt-5 p-5 bg-light",children:[Object(U.jsx)("h1",{className:"display-4",children:"Welcome to Session Auth"}),Object(U.jsx)("p",{className:"lead",children:"This is a wonderful application with session authentication in React and Django."}),Object(U.jsx)("hr",{className:"my-4"}),Object(U.jsx)("p",{children:"Click the button below to log in."}),Object(U.jsx)(o.b,{className:"btn btn-primary btn-lg",to:"/login",children:"Login"})]})})},I=a(16),D=a(3),P=a(15),J=function(){var e=Object(n.useState)(""),t=Object(P.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(j.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat("http://localhost:8000","/accounts/csrf_cookie"));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()(),c(function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),n=0;n<a.length;n++){var c=a[n].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken"))}),[]),Object(U.jsx)("input",{type:"hidden",name:"csrfmiddlewaretoken",value:a})},G=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{register:function(e,t,a){return function(){var n=Object(j.a)(p.a.mark((function n(c){var r,s;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":d.a.get("csrftoken")}},s=JSON.stringify({username:e,password:t,re_password:a}),n.prev=2,n.next=5,m.a.post("".concat("http://localhost:8000","/accounts/register"),s,r);case 5:n.sent.data.error?c({type:O}):c({type:f}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),c({type:O});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.register,a=e.isAuthenticated,c=Object(n.useState)({username:"",password:"",re_password:""}),r=Object(P.a)(c,2),s=r[0],l=r[1],u=Object(n.useState)(!1),p=Object(P.a)(u,2),j=p[0],b=p[1],d=s.username,h=s.password,m=s.re_password,f=function(e){return l(Object(D.a)(Object(D.a)({},s),{},Object(I.a)({},e.target.name,e.target.value)))};return a?Object(U.jsx)(i.a,{to:"/dashboard"}):j?Object(U.jsx)(i.a,{to:"/login"}):Object(U.jsxs)("div",{className:"container mt-5",children:[Object(U.jsx)("h1",{children:"Register for an Account"}),Object(U.jsx)("p",{children:"Create an account with our Session Auth application"}),Object(U.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),h===m&&(t(d,h,m),b(!0))}(e)},children:[Object(U.jsx)(J,{}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{className:"form-label",children:"Username: "}),Object(U.jsx)("input",{className:"form-control",type:"text",placeholder:"Username*",name:"username",onChange:function(e){return f(e)},value:d,required:!0})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{className:"form-label mt-3",children:"Password: "}),Object(U.jsx)("input",{className:"form-control",type:"password",placeholder:"Password*",name:"password",onChange:function(e){return f(e)},value:h,minLength:"6",required:!0})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{className:"form-label mt-3",children:"Confirm Password: "}),Object(U.jsx)("input",{className:"form-control",type:"password",placeholder:"Confirm Password*",name:"re_password",onChange:function(e){return f(e)},value:m,minLength:"6",required:!0})]}),Object(U.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Register"})]}),Object(U.jsxs)("p",{className:"mt-3",children:["Already have an Account? ",Object(U.jsx)(o.b,{to:"/login",children:"Sign In"})]})]})})),q=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(j.a)(p.a.mark((function a(n){var c,r;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":d.a.get("csrftoken")}},r=JSON.stringify({username:e,password:t}),a.prev=2,a.next=5,m.a.post("".concat("http://localhost:8000","/accounts/login"),r,c);case 5:a.sent.data.success?(n({type:x}),n(T())):n({type:v}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),n({type:v});case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,c=Object(n.useState)({username:"",password:""}),r=Object(P.a)(c,2),s=r[0],l=r[1],u=s.username,p=s.password,j=function(e){return l(Object(D.a)(Object(D.a)({},s),{},Object(I.a)({},e.target.name,e.target.value)))};return a?Object(U.jsx)(i.a,{to:"/dashboard"}):Object(U.jsxs)("div",{className:"container mt-5",children:[Object(U.jsx)("h1",{children:"Sign In"}),Object(U.jsx)("p",{children:"Sign into your Session Auth account"}),Object(U.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(u,p)}(e)},children:[Object(U.jsx)(J,{}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{className:"form-label",children:"Username: "}),Object(U.jsx)("input",{className:"form-control",type:"text",placeholder:"Username*",name:"username",onChange:function(e){return j(e)},value:u,required:!0})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{className:"form-label mt-3",children:"Password: "}),Object(U.jsx)("input",{className:"form-control",type:"password",placeholder:"Password*",name:"password",onChange:function(e){return j(e)},value:p,minLength:"6",required:!0})]}),Object(U.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Login"})]}),Object(U.jsxs)("p",{className:"mt-3",children:["Don't have an Account? ",Object(U.jsx)(o.b,{to:"/register",children:"Sign Up"})]})]})})),X=Object(l.b)((function(e){return{first_name_global:e.profile.first_name,last_name_global:e.profile.last_name,phone_global:e.profile.phone,city_global:e.profile.city}}),{delete_account:function(){return function(){var e=Object(j.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":d.a.get("csrftoken")}},n=JSON.stringify({withCredentials:!0}),e.prev=2,e.next=5,m.a.delete("".concat("http://localhost:8000","/accounts/delete"),a,n);case 5:e.sent.data.success?t({type:S}):t({type:A}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:A});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},update_profile:function(e,t,a,n){return function(){var c=Object(j.a)(p.a.mark((function c(r){var s,o,i;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s={headers:{Accept:"application/json","Content-Type":"application/json","X-CSRFToken":d.a.get("csrftoken")}},o=JSON.stringify({withCredentials:!0,first_name:e,last_name:t,phone:a,city:n}),c.prev=2,c.next=5,m.a.put("".concat("http://localhost:8000","/profile/update"),o,s);case 5:(i=c.sent).data.profile&&i.data.username?r({type:k,payload:i.data}):r({type:E}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),r({type:E});case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.delete_account,a=e.update_profile,c=e.first_name_global,r=e.last_name_global,s=e.phone_global,o=e.city_global,i=Object(n.useState)({first_name:"",last_name:"",phone:"",city:""}),l=Object(P.a)(i,2),u=l[0],p=l[1],j=u.first_name,b=u.last_name,d=u.phone,h=u.city;Object(n.useEffect)((function(){p({first_name:c,last_name:r,phone:s,city:o})}),[c]);var m=function(e){return p(Object(D.a)(Object(D.a)({},u),{},Object(I.a)({},e.target.name,e.target.value)))};return Object(U.jsxs)("div",{className:"container",children:[Object(U.jsx)("h1",{className:"mt-3",children:"Welcome to your User Dashboard"}),Object(U.jsx)("p",{className:"mt-3 mb-3",children:"Update your user profile below:"}),Object(U.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),a(j,b,d,h)}(e)},children:[Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{className:"form-label",htmlFor:"first_name",children:"First Name"}),Object(U.jsx)("input",{className:"form-control",type:"text",name:"first_name",placeholder:"".concat(c),onChange:function(e){return m(e)},value:j})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{className:"form-label mt-3",htmlFor:"last_name",children:"Last Name"}),Object(U.jsx)("input",{className:"form-control",type:"text",name:"last_name",placeholder:"".concat(r),onChange:function(e){return m(e)},value:b})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{className:"form-label mt-3",htmlFor:"phone",children:"Phone"}),Object(U.jsx)("input",{className:"form-control",type:"text",name:"phone",placeholder:"".concat(s),onChange:function(e){return m(e)},value:d})]}),Object(U.jsxs)("div",{className:"form-group",children:[Object(U.jsx)("label",{className:"form-label mt-3",htmlFor:"city",children:"City"}),Object(U.jsx)("input",{className:"form-control",type:"text",name:"city",placeholder:"".concat(o),onChange:function(e){return m(e)},value:h})]}),Object(U.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Update Profile"})]}),Object(U.jsx)("p",{className:"mt-5",children:"Click the button below to delete your user account:"}),Object(U.jsx)("a",{className:"btn btn-danger",href:"#!",onClick:t,children:"Delete Account"})]})})),H=a(37),W=Object(l.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{})((function(e){var t=e.component,a=e.isAuthenticated,n=Object(H.a)(e,["component","isAuthenticated"]);return Object(U.jsx)(i.b,Object(D.a)(Object(D.a)({},n),{},{render:function(e){return a?Object(U.jsx)(t,Object(D.a)({},e)):Object(U.jsx)(i.a,{to:"/login"})}}))})),M=a(19),B=a(35),z=a(36),K={isAuthenticated:null},Q={username:"",first_name:"",last_name:"",phone:"",city:""},V=Object(M.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case N:case _:return Object(D.a)(Object(D.a)({},e),{},{isAuthenticated:n});case f:return Object(D.a)(Object(D.a)({},e),{},{isAuthenticated:!1});case x:return Object(D.a)(Object(D.a)({},e),{},{isAuthenticated:!0});case g:case S:return Object(D.a)(Object(D.a)({},e),{},{isAuthenticated:!1});case O:case v:case y:case A:default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case w:case k:return Object(D.a)(Object(D.a)({},e),{},{username:n.username,first_name:n.profile.first_name,last_name:n.profile.last_name,phone:n.profile.phone,city:n.profile.city});case C:return Object(D.a)(Object(D.a)({},e),{},{username:"",first_name:"",last_name:"",phone:"",city:""});case E:return Object(D.a)({},e);default:return e}}}),Y=[z.a],Z=Object(M.createStore)(V,{},Object(B.composeWithDevTools)(M.applyMiddleware.apply(void 0,Y))),$=function(){return Object(U.jsx)(l.a,{store:Z,children:Object(U.jsx)(o.a,{children:Object(U.jsxs)(R,{children:[Object(U.jsx)(i.b,{exact:!0,path:"/",component:F}),Object(U.jsx)(i.b,{exact:!0,path:"/register",component:G}),Object(U.jsx)(i.b,{exact:!0,path:"/login",component:q}),Object(U.jsx)(W,{exact:!0,path:"/dashboard",component:X})]})})})};s.a.render(Object(U.jsx)(c.a.StrictMode,{children:Object(U.jsx)($,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.fa1ae394.chunk.js.map