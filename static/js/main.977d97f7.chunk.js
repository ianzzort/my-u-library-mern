(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,a){},61:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a(31),n=a.n(r),s=(a(38),a(8)),i=a(7),o=(a(39),a(40),a(61),a(2)),l=a.n(o),b=a(4),u=a(5),j=a(6),d=a(3),p=a.n(d),m=a(9),h=a(0),x=new m.a,O=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(i.f)(),s=Object(c.useState)({show:!1,msg:""}),o=Object(j.a)(s,2),d=o[0],m=o[1];function O(){return(O=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==a){e.next=9;break}return e.next=3,p.a.get("https://my-u-library-mern.herokuapp.com/api/users/auth/"+a);case 3:t=e.sent,(c=t.data)?(x.set("id",c._id,{path:"/"}),x.set("role",c.role,{path:"/"}),n.replace("/books")):(m({show:!0,msg:"User not exist"}),setTimeout((function(){m(Object(b.a)(Object(b.a)({},d),{},{show:!1}))}),2e3)),e.next=11;break;case 9:m({show:!0,msg:"Empty email"}),setTimeout((function(){m(Object(b.a)(Object(b.a)({},d),{},{show:!1}))}),2e3);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)(h.Fragment,{children:[1==d.show&&Object(h.jsx)("div",{class:"alert alert-danger",role:"alert",style:{position:"absolute",right:20,top:20},children:d.msg}),Object(h.jsxs)("div",{className:"container p-5",style:{maxWidth:500},children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(h.jsx)("input",{value:a,onChange:function(e){return r(e.target.value)},type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),Object(h.jsx)("div",{id:"emailHelp",className:"form-text",children:"Sign in with your email."})]}),Object(h.jsx)("button",{onClick:function(){!function(){O.apply(this,arguments)}()},type:"submit",className:"btn btn-primary",children:"Login"})]})]})},f=new m.a,v=function(){var e=f.get("id"),t=Object(c.useState)({}),a=Object(j.a)(t,2),r=a[0],n=a[1],i=Object(c.useState)([]),o=Object(j.a)(i,2),b=o[0],d=o[1],m=Object(c.useState)(null),x=Object(j.a)(m,2),O=x[0],v=x[1],y=Object(c.useState)({}),k=Object(j.a)(y,2),g=(k[0],k[1],Object(c.useState)("")),N=Object(j.a)(g,2),w=N[0],_=N[1];function S(){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(l.a.mark((function t(){var a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://my-u-library-mern.herokuapp.com/api/books");case 2:return a=t.sent,d(a.data),t.next=6,p.a.get("https://my-u-library-mern.herokuapp.com/api/users/".concat(e));case 6:c=t.sent,n(c.data);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){return(E=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://my-u-library-mern.herokuapp.com/api/books/search/".concat(t));case 2:a=e.sent,d(a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){v(f.get("role")),S()}),[]),Object(c.useEffect)((function(){""!=w?function(e){E.apply(this,arguments)}(w):S()}),[w]);var R=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("https://my-u-library-mern.herokuapp.com/api/books/".concat(t));case 2:S();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var t=Object(u.a)(l.a.mark((function t(a){var c,n,s,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a.title,n=a.author,s=a.year,i=a.genre,o=a.stock,t.next=3,p.a.post("https://my-u-library-mern.herokuapp.com/api/reservations/",{id_user:e,id_book:a._id,book:a.title,author:a.author,student:r.first_name+" "+r.last_name,status:1});case 3:return t.next=5,p.a.put("https://my-u-library-mern.herokuapp.com/api/books/".concat(a._id),{title:c,author:n,year:s,genre:i,stock:o-1});case 5:S();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[1==O&&Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"container-sm p-5",children:[Object(h.jsx)("h4",{children:"Books"}),Object(h.jsx)(s.b,{to:"/create-book",className:"btn btn-info mb-5",children:"Create Book"}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"#"}),Object(h.jsx)("th",{scope:"col",children:"Title"}),Object(h.jsx)("th",{scope:"col",children:"Author"}),Object(h.jsx)("th",{scope:"col",children:"Genre"}),Object(h.jsx)("th",{scope:"col",children:"Published Year"}),Object(h.jsx)("th",{scope:"col",children:"Stock"}),Object(h.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(h.jsx)("tbody",{children:b.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:t+1}),Object(h.jsx)("td",{children:e.title}),Object(h.jsx)("td",{children:e.author}),Object(h.jsx)("td",{children:e.genre}),Object(h.jsx)("td",{children:e.year}),Object(h.jsx)("td",{children:e.stock}),1==O&&Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{onClick:function(){return R(e._id)},className:"btn btn-danger mr-2",style:{marginRight:5},children:Object(h.jsx)("i",{className:"fas fa-trash"})}),Object(h.jsx)(s.b,{className:"btn btn-success",to:"/edit-book/"+e._id,children:Object(h.jsx)("i",{className:"fas fa-edit"})})]})]})}))})]})]})}),2==O&&Object(h.jsxs)("div",{className:"container p-5",style:{width:"70%",margin:"auto"},children:[Object(h.jsx)("h1",{className:"mb-4",children:"Books available"}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"input-group flex-nowrap",children:[Object(h.jsx)("span",{className:"input-group-text",id:"addon-wrapping",children:Object(h.jsx)("i",{className:"fas fa-search"})}),Object(h.jsx)("input",{type:"text",className:"form-control",onChange:function(e){return _(e.target.value)},placeholder:"Search books by title, author and genre","aria-label":"Username","aria-describedby":"addon-wrapping"})]})}),Object(h.jsx)("div",{className:"mb-5 justify-content-center p-5 row",children:b.map((function(e,t){return 0!=e.stock&&Object(h.jsx)("div",{className:"card",style:{width:"18rem",margin:10},children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("h5",{className:"card-title",children:[e.title," "]}),Object(h.jsxs)("small",{className:"card-text",children:[e.stock," in stock"]}),Object(h.jsxs)("p",{className:"card-text",children:["Author: ",e.author]}),Object(h.jsxs)("p",{className:"card-text",children:["Genre: ",e.genre]}),Object(h.jsx)("a",{onClick:function(){return H(e)},className:"btn btn-primary",children:"Reserve"})]})})}))})]})]})},y=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(null),s=Object(j.a)(n,2),o=s[0],d=s[1],m=Object(i.g)().id,x=Object(i.f)();Object(c.useEffect)(Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=8;break}return d(!0),e.next=4,p.a.get("https://my-u-library-mern.herokuapp.com/api/books/"+m);case 4:return t=e.sent,e.next=7,d(!0);case 7:r(t.data);case 8:case"end":return e.stop()}}),e)}))),[m]);var O=function(){o?function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return e.next=3,p.a.put("https://my-u-library-mern.herokuapp.com/api/books/".concat(m),a);case 3:x.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return e.next=3,p.a.post("https://my-u-library-mern.herokuapp.com/api/books",a);case 3:x.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()};return Object(h.jsxs)("div",{class:"container-sm p-5",children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"title",className:"form-label",children:"Title"}),Object(h.jsx)("input",{type:"text",value:a.title,onChange:function(e){return r(Object(b.a)(Object(b.a)({},a),{},{title:e.target.value}))},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"author",className:"form-label",children:"Author"}),Object(h.jsx)("input",{type:"text",value:a.author,onChange:function(e){return r(Object(b.a)(Object(b.a)({},a),{},{author:e.target.value}))},className:"form-control",id:"author","aria-describedby":"emailHelp"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"genre",className:"form-label",children:"Genre"}),Object(h.jsx)("input",{type:"text",value:a.genre,onChange:function(e){return r(Object(b.a)(Object(b.a)({},a),{},{genre:e.target.value}))},className:"form-control",id:"genre","aria-describedby":"emailHelp"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"year",className:"form-label",children:"Published Year"}),Object(h.jsx)("input",{type:"number",value:a.year,onChange:function(e){return r(Object(b.a)(Object(b.a)({},a),{},{year:e.target.value}))},className:"form-control",id:"year","aria-describedby":"emailHelp"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"stock",className:"form-label",children:"Stok"}),Object(h.jsx)("input",{type:"number",value:a.stock,onChange:function(e){return r(Object(b.a)(Object(b.a)({},a),{},{stock:e.target.value}))},className:"form-control",id:"stock","aria-describedby":"emailHelp"})]}),o&&Object(h.jsx)("button",{onClick:O,className:"btn btn-success",children:"Update"})||Object(h.jsx)("button",{onClick:O,className:"btn btn-primary",children:"Submit"}),Object(h.jsx)("hr",{})]})},k=(new m.a).get("role"),g=function(){var e=Object(i.f)();1!=k&&e.replace("/");var t=Object(c.useState)([]),a=Object(j.a)(t,2),r=a[0],n=a[1];function o(){return b.apply(this,arguments)}function b(){return(b=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://my-u-library-mern.herokuapp.com/api/users");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){o()}),[]);var d=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("https://my-u-library-mern.herokuapp.com/api/users/".concat(t));case 2:o();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{class:"container-sm p-5",children:[Object(h.jsx)("h4",{children:"Users"}),Object(h.jsx)("div",{className:"mb-5",children:Object(h.jsx)(s.b,{to:"/create-user",className:"btn btn-info",children:"Create User"})}),Object(h.jsxs)("table",{class:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"#"}),Object(h.jsx)("th",{scope:"col",children:"Name"}),Object(h.jsx)("th",{scope:"col",children:"Email"}),Object(h.jsx)("th",{scope:"col",children:"Role"}),Object(h.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(h.jsx)("tbody",{children:r.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"row",children:t+1}),Object(h.jsx)("td",{children:e.first_name+" "+e.last_name}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:1==e.role?"Librarian":"Student"}),Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{onClick:function(){return d(e._id)},className:"btn btn-danger mr-2",style:{marginRight:5},children:Object(h.jsx)("i",{className:"fas fa-trash"})}),Object(h.jsx)(s.b,{className:"btn btn-success",to:"/edit-user/"+e._id,children:Object(h.jsx)("i",{className:"fas fa-edit"})})]})]})}))})]})]})})},N=(new m.a).get("role"),w=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(null),s=Object(j.a)(n,2),o=s[0],d=s[1],m=Object(i.g)().id,x=Object(i.f)();"1"!=N&&x.replace("/"),Object(c.useEffect)(Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=8;break}return d(!0),e.next=4,p.a.get("https://my-u-library-mern.herokuapp.com/api/users/"+m);case 4:return t=e.sent,e.next=7,d(!0);case 7:r(t.data);case 8:case"end":return e.stop()}}),e)}))),[m]);var O=function(){o?function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return e.next=3,p.a.put("https://my-u-library-mern.herokuapp.com/api/users/".concat(m),a);case 3:x.push("/users");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}return e.next=3,p.a.post("https://my-u-library-mern.herokuapp.com/api/users",a);case 3:x.push("/users");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()};return Object(h.jsxs)("div",{class:"container-sm p-5",children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"first_name",className:"form-label",children:"First Name"}),Object(h.jsx)("input",{type:"text",value:a.first_name,onChange:function(e){return r(Object(b.a)(Object(b.a)({},a),{},{first_name:e.target.value}))},className:"form-control",id:"first_name","aria-describedby":"emailHelp"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"last_name",className:"form-label",children:"Last Name"}),Object(h.jsx)("input",{type:"text",value:a.last_name,onChange:function(e){return r(Object(b.a)(Object(b.a)({},a),{},{last_name:e.target.value}))},className:"form-control",id:"last_name","aria-describedby":"emailHelp"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"email",className:"form-label",children:"Email address"}),Object(h.jsx)("input",{type:"email",value:a.email,onChange:function(e){return r(Object(b.a)(Object(b.a)({},a),{},{email:e.target.value}))},className:"form-control",id:"email","aria-describedby":"emailHelp"})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"role",className:"form-label",children:"Role"}),Object(h.jsxs)("select",{value:a.role,onChange:function(e){return r(Object(b.a)(Object(b.a)({},a),{},{role:e.target.value}))},class:"form-select mb-3",id:"role","aria-label":"Default select example",children:[Object(h.jsx)("option",{children:"Select a role..."}),Object(h.jsx)("option",{value:"1",children:"Librarian"}),Object(h.jsx)("option",{value:"2",children:"Student"})]})]}),o&&Object(h.jsx)("button",{onClick:O,className:"btn btn-success",children:"Update"})||Object(h.jsx)("button",{onClick:O,className:"btn btn-primary",children:"Submit"}),Object(h.jsx)("hr",{})]})},_=new m.a,S=function(){var e=Object(i.f)(),t=_.get("role"),a=_.get("id"),r=Object(c.useState)({}),n=Object(j.a)(r,2),o=n[0],b=n[1];function d(){return(d=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://my-u-library-mern.herokuapp.com/api/users/".concat(a));case 2:t=e.sent,b(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),Object(h.jsx)("nav",{class:"navbar navbar-expand navbar-light bg-light",children:Object(h.jsxs)("div",{class:"container",children:[Object(h.jsxs)("div",{className:"d-flex",children:[Object(h.jsxs)(s.b,{className:"navbar-brand",to:"/",children:[Object(h.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/I/3112PVTrnDL.png",alt:"",width:"30",height:"",className:"d-inline-block align-text-top"}),"My U Library"]}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(h.jsxs)("ul",{className:"navbar-nav d-flex",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Books"})}),1==t&&Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{className:"nav-link",to:"/users",children:"Users"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(s.b,{className:"nav-link",to:"/reservations",children:"Reservations"})})]})})]}),Object(h.jsxs)("div",{class:"d-flex",children:[Object(h.jsx)("a",{className:"nav-link",children:o.first_name+" "+o.last_name}),Object(h.jsx)("div",{className:"navbar-nav d-flex",children:Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{style:{cursor:"pointer"},onClick:function(){_.remove("id"),_.remove("role"),e.replace("/login")},className:"nav-link",tabIndex:"-1",children:"Logout"})})})]})]})})},C=new m.a,E=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)({}),s=Object(j.a)(n,2),i=s[0],o=s[1];function b(){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(l.a.mark((function e(){var t,a,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=C.get("role"),a=C.get("id"),o({role:t,sessionid:a}),"1"!=t){e.next=10;break}return e.next=6,p.a.get("https://my-u-library-mern.herokuapp.com/api/reservations");case 6:c=e.sent,r(c.data),e.next=15;break;case 10:if("2"!=t){e.next=15;break}return e.next=13,p.a.get("https://my-u-library-mern.herokuapp.com/api/reservations/user/".concat(a));case 13:n=e.sent,r(n.data);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){b()}),[]);var m=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,c,r,n,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t._id,c=t.id_user,r=t.id_book,n=t.book,s=t.author,i=t.student,t.status,e.next=3,p.a.put("https://my-u-library-mern.herokuapp.com/api/reservations/".concat(a),{_id:a,id_user:c,id_book:r,book:n,author:s,student:i,status:0});case 3:b();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,c,r,n,s,i,o,u,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t._id,c=t.id_book,e.next=3,p.a.get("https://my-u-library-mern.herokuapp.com/api/books/".concat(c));case 3:return r=e.sent,n=r.data,s=n.title,i=n.author,o=n.year,u=n.genre,j=n.stock,e.next=7,p.a.delete("https://my-u-library-mern.herokuapp.com/api/reservations/".concat(a));case 7:return e.next=9,p.a.put("https://my-u-library-mern.herokuapp.com/api/books/".concat(c),{title:s,author:i,year:o,genre:u,stock:j+1});case 9:b();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"container justify-content-center p-5 row",style:{width:"70%",margin:"auto"},children:[Object(h.jsx)("h1",{className:"mb-4",children:"Reserved Books"}),a.map((function(e){return Object(h.jsx)("div",{className:"card",style:{width:"18rem",margin:10},children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:e.book}),Object(h.jsxs)("p",{className:"card-text",children:["Author: ",e.author]}),1==i.role&&Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{className:"card-text",children:["Reserved By: ",e.student]}),0==e.status&&Object(h.jsx)("a",{onClick:function(){return x(e)},className:"btn btn-warning",children:"Return to Stock"})]}),2==i.role&&1==e.status&&Object(h.jsx)("a",{onClick:function(){return m(e)},className:"btn btn-primary",children:"Return Book"}),2==i.role&&0==e.status&&Object(h.jsxs)("p",{className:"card-text text-success",children:["Returned ",Object(h.jsx)("i",{class:"far fa-check-circle"})]})]})})}))]})},R=new m.a,H=function(){var e=Object(i.f)();return R.get("id")||e.replace("/login"),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(S,{}),Object(h.jsx)(i.a,{path:"/",exact:!0,component:v}),Object(h.jsx)(i.a,{path:"/books",exact:!0,component:v}),Object(h.jsx)(i.a,{path:"/users",exact:!0,component:g}),Object(h.jsx)(i.a,{path:"/reservations",exact:!0,component:E}),Object(h.jsx)(i.a,{path:"/edit-book/:id",exact:!0,component:y}),Object(h.jsx)(i.a,{path:"/create-book",exact:!0,component:y}),Object(h.jsx)(i.a,{path:"/edit-user/:id",exact:!0,component:w}),Object(h.jsx)(i.a,{path:"/create-user",exact:!0,component:w})]})};var B=function(){return Object(h.jsx)("div",{className:"",children:Object(h.jsx)(s.a,{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/login",component:O}),Object(h.jsx)(i.a,{path:"/",component:H})]})})})};n.a.render(Object(h.jsx)(B,{}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.977d97f7.chunk.js.map