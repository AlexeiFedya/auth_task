(this.webpackJsonpauth_task=this.webpackJsonpauth_task||[]).push([[0],{189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n(74),o=n.n(c),s=n(25),i=(n(86),n(2)),l=n(9),u=n.n(l),j=n(15),d=n(8);function p(){}var b=Object(r.createContext)({token:null,login:p,logout:p,isAuthenticated:!1}),h=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),o=Object(d.a)(c,2),s=o[0],i=o[1];return{loading:n,request:Object(r.useCallback)(function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r,c,o,s,l=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{},a(!0),e.prev=4,console.log("bodyyy",r),r&&(r=JSON.stringify(r),c["Content-Type"]="application/json"),e.next=9,fetch(t,{method:n,body:r,headers:c});case 9:return o=e.sent,e.next=12,o.json();case 12:if(s=e.sent,o.ok){e.next=15;break}throw new Error(s.message||"Something was wrong");case 15:return a(!1),e.abrupt("return",s);case 19:throw e.prev=19,e.t0=e.catch(4),a(!1),i(e.t0.message),e.t0;case 24:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:s,clearError:function(){return i(null)}}},m=(n(88),function(){return Object(a.jsx)("div",{className:"wrap-loader",children:Object(a.jsx)("div",{className:"lds-dual-ring"})})}),f=function(e){var t=e.profile;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:t.name}),Object(a.jsx)("p",{children:t.email})]})},O=(n(89),function(){var e=h(),t=e.loading,n=e.request,c=Object(r.useContext)(b).token,o=Object(r.useState)(null),s=Object(d.a)(o,2),i=s[0],l=s[1],p=Object(r.useCallback)(Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n("https://tager.dev.ozitag.com/api/tager/user/profile","GET",null,{Authorization:"Bearer ".concat(c)});case 3:t=e.sent,l(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[c,n]);return Object(r.useEffect)((function(){p()}),[p]),Object(a.jsx)("main",{className:"profile-page-wrap",children:Object(a.jsx)("div",{className:"profile-page",children:!t&&i?Object(a.jsx)(f,{profile:i}):Object(a.jsx)(m,{})})})}),x=n(80),g=n(37),v=(n(189),function(e){var t=e.popUpHandleClick,n=e.ifError;return Object(a.jsx)("div",{className:"popup".concat(n?" popupOpen":""),children:Object(a.jsxs)("div",{className:"popup_content",children:[Object(a.jsxs)("div",{className:"popup-header",children:[Object(a.jsx)("h2",{children:"Warning!"}),Object(a.jsx)("button",{className:"close",onClick:t,children:"\xd7"})]}),Object(a.jsx)("div",{className:"popup-body",children:Object(a.jsx)("p",{children:n})})]})})}),_=(n(190),n(191),n(192),function(){var e=Object(r.useContext)(b),t=h(),n=t.loading,c=t.request,o=t.error,s=t.clearError,i=g.a().shape({email:g.b().email().required(),password:g.b().required().min(4)});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{ifError:o,popUpHandleClick:function(){o&&s()}}),Object(a.jsx)("main",{className:"wrap-contactpage",children:Object(a.jsx)("div",{className:"wrap-form-contact",children:Object(a.jsx)(x.a,{initialValues:{email:"user@ozitag.com",password:"user"},validateOnBlur:!0,validationSchema:i,onSubmit:function(){var t=Object(j.a)(u.a.mark((function t(n){var a,r,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=n.email,r=n.password,t.next=4,c("https://tager.dev.ozitag.com/api/auth/user","POST",{email:a,password:r,clientId:1});case 4:o=t.sent,e.login(o.data.accessToken),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),children:function(e){var t=e.values,r=e.errors,c=e.handleChange,o=e.handleBlur,s=e.isValid,i=e.handleSubmit;return Object(a.jsxs)("form",{className:"form-contact",children:[Object(a.jsxs)("div",{className:"form-contact__group",children:[Object(a.jsx)("input",{type:"email",className:"form-contact__group__input".concat(r.email?" form-contact__group__input__error":""),name:"email",value:t.email,id:"email",placeholder:"Email",onChange:c,onBlur:o}),Object(a.jsx)("label",{htmlFor:"email",className:"form-contact__group__label",children:"Email"})]}),Object(a.jsxs)("div",{className:"form-contact__group",children:[Object(a.jsx)("input",{type:"password",className:"form-contact__group__input".concat(r.password?" form-contact__group__input__error":""),id:"password",placeholder:"Password",name:"password",value:t.password,onChange:c,onBlur:o}),Object(a.jsx)("label",{htmlFor:"name",className:"form-contact__group__label",children:"Password"})]}),Object(a.jsx)("button",{type:"submit",className:"form-contact__button",disabled:!s||n,onClick:i,children:"Sign In"})]})}})})})]})}),k=(n(196),function(e){var t=e.isAuthenticated,n=Object(r.useContext)(b),c=h(),o=c.loading,i=c.request,l=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("https://tager.dev.ozitag.com/api/tager/user/profile/logout","POST",null,{Authorization:"Bearer ".concat(n.token)});case 3:t=e.sent,n.logout(t.success),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return console.log("\u0442\u043e\u043a\u0435\u043d",n.token),Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("nav",{className:"header__nav",children:t?Object(a.jsx)("button",{className:"header__button",disabled:o,onClick:l,children:"Logout"}):Object(a.jsx)("div",{className:"header__button",children:Object(a.jsx)(s.b,{className:"nav-link nav-text",to:"/",children:"Login"})})})})});var w=function(){var e=function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1],c="accessToken",o=Object(r.useCallback)((function(e){a(e),localStorage.setItem(c,JSON.stringify({token:e}))}),[]),s=Object(r.useCallback)((function(e){e&&(a(null),localStorage.removeItem(c))}),[]);return console.log(n),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem(c));e&&e.token&&o(e.token)}),[o]),{login:o,logout:s,token:n}}(),t=e.login,n=e.logout,c=e.token,o=!!c,s=function(e){return e?Object(a.jsxs)(i.d,{children:[Object(a.jsx)(i.b,{path:"/profile",children:Object(a.jsx)(O,{})}),Object(a.jsx)(i.a,{to:"/profile"})]}):Object(a.jsxs)(i.d,{children:[Object(a.jsx)(i.b,{path:"/",exact:!0,children:Object(a.jsx)(_,{})}),Object(a.jsx)(i.a,{to:"/"})]})}(o);return Object(a.jsxs)(b.Provider,{value:{login:t,logout:n,token:c,isAuthenticated:o},children:[Object(a.jsx)(k,{isAuthenticated:o}),s]})};o.a.render(Object(a.jsx)(s.a,{basename:"/auth_task",children:Object(a.jsx)(w,{})}),document.getElementById("root"))},86:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){}},[[197,1,2]]]);
//# sourceMappingURL=main.40ce4304.chunk.js.map