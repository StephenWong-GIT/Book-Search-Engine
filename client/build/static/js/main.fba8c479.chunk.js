(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,a,t){e.exports=t(130)},119:function(e,a,t){},130:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c=t(0),i=t.n(c),s=t(42),u=t.n(s),m=(t(118),t(119),t(139)),d=t(106),b=t(55),p=t(14),g=t(18),v=t(93),k=t(94),E=t(81),h=t.n(E),f=new(function(){function e(){Object(v.a)(this,e)}return Object(k.a)(e,[{key:"getProfile",value:function(){return h()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return h()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),w=t(144),O=t(136),j=t(143),S=t(141),y=t(146),I=t(24),x=t.n(I),C=t(34),B=t(52),F=t(44),L=t(142),T=t(134),_=t(135),N=t(140),$=t(49),q=t(35),P=Object(q.a)(n||(n=Object($.a)(["\n    mutation addUser($username: String!, $email: String!, $password: String!) {\n        addUser(username: $username, email: $email, password: $password) {\n        token\n            user {\n                _id\n                username\n                email\n                bookCount\n                savedBooks {\n                    bookId\n                    title\n                    description\n                    authors\n                    image\n                    link\n                }\n            }\n        }\n    }\n"]))),D=Object(q.a)(r||(r=Object($.a)(["\n    mutation login($email: String!, $password: String!) {\n        login(email: $email, password: $password) {\n        token\n            user {\n                _id\n                username\n                email\n                bookCount\n                savedBooks {\n                    bookId\n                    title\n                    description\n                    authors\n                    link\n                    image\n         }\n       }\n     }\n   }\n"]))),G=Object(q.a)(o||(o=Object($.a)(["\n    mutation saveBook($input: bookInput!) {\n        saveBook(input: $input) {\n            _id\n            username\n            email\n            savedBooks {\n                bookId\n                authors\n                image\n                description\n                title\n                link\n            }\n        }\n    }\n"]))),U=Object(q.a)(l||(l=Object($.a)(["\n    mutation removeBook($bookId: String!) {\n        removeBook(bookId: $bookId) {\n            _id\n            username\n            email\n            bookCount\n            savedBooks {\n                bookId\n                authors\n                image\n                description\n                title\n                link\n            }\n        }\n    }\n"])));var Y,J=function(){var e=Object(c.useState)({email:"",password:""}),a=Object(g.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)(!1),o=Object(g.a)(r,1)[0],l=Object(c.useState)(!1),s=Object(g.a)(l,2),u=s[0],m=s[1],d=function(e){var a=e.target,r=a.name,o=a.value;n(Object(F.a)(Object(F.a)({},t),{},Object(B.a)({},r,o)))},b=Object(N.a)(D),p=Object(g.a)(b,1)[0],v=function(){var e=Object(C.a)(x.a.mark((function e(a){var r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,p({variables:Object(F.a)({},t)});case 6:r=e.sent,o=r.data,f.login(o.login.token),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0),m(!0);case 15:n({username:"",email:"",password:""});case 16:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(L.a,{noValidate:!0,validated:o,onSubmit:v},i.a.createElement(T.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),i.a.createElement(L.a.Group,null,i.a.createElement(L.a.Label,{htmlFor:"email"},"Email"),i.a.createElement(L.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:d,value:t.email,required:!0}),i.a.createElement(L.a.Control.Feedback,{type:"invalid"},"Email is required!")),i.a.createElement(L.a.Group,null,i.a.createElement(L.a.Label,{htmlFor:"password"},"Password"),i.a.createElement(L.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:d,value:t.password,required:!0}),i.a.createElement(L.a.Control.Feedback,{type:"invalid"},"Password is required!")),i.a.createElement(_.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},V=function(){var e=Object(N.a)(P),a=Object(g.a)(e,2),t=a[0],n=a[1].error,r=Object(c.useState)({username:"",email:"",password:""}),o=Object(g.a)(r,2),l=o[0],s=o[1],u=Object(c.useState)(!1),m=Object(g.a)(u,1)[0],d=Object(c.useState)(!1),b=Object(g.a)(d,2),p=b[0],v=b[1],k=function(e){var a=e.target,t=a.name,n=a.value;s(Object(F.a)(Object(F.a)({},l),{},Object(B.a)({},t,n)))},E=function(){var e=Object(C.a)(x.a.mark((function e(a){var n,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,t({variables:Object(F.a)({},l)});case 4:n=e.sent,r=n.data,f.login(r.addUser.token),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0),v(!0);case 13:s({username:"",email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(L.a,{noValidate:!0,validated:m,onSubmit:E},i.a.createElement(T.a,{dismissible:!0,onClose:function(){return v(!1)},show:p,variant:"danger"},"Something went wrong with your signup!"),i.a.createElement(L.a.Group,null,i.a.createElement(L.a.Label,{htmlFor:"username"},"Username"),i.a.createElement(L.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:k,value:l.username,required:!0}),i.a.createElement(L.a.Control.Feedback,{type:"invalid"},"Username is required!")),i.a.createElement(L.a.Group,null,i.a.createElement(L.a.Label,{htmlFor:"email"},"Email"),i.a.createElement(L.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:k,value:l.email,required:!0}),i.a.createElement(L.a.Control.Feedback,{type:"invalid"},"Email is required!")),i.a.createElement(L.a.Group,null,i.a.createElement(L.a.Label,{htmlFor:"password"},"Password"),i.a.createElement(L.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:k,value:l.password,required:!0}),i.a.createElement(L.a.Control.Feedback,{type:"invalid"},"Password is required!")),i.a.createElement(_.a,{disabled:!(l.username&&l.email&&l.password),type:"submit",variant:"success"},"Submit"),n&&i.a.createElement("div",null,"Sign up failed")))},K=function(){var e=Object(c.useState)(!1),a=Object(g.a)(e,2),t=a[0],n=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a,{bg:"dark",variant:"dark",expand:"lg"},i.a.createElement(O.a,{fluid:!0},i.a.createElement(w.a.Brand,{as:b.b,to:"/"},"Google Books Search"),i.a.createElement(w.a.Toggle,{"aria-controls":"navbar"}),i.a.createElement(w.a.Collapse,{id:"navbar"},i.a.createElement(j.a,{className:"ml-auto"},i.a.createElement(j.a.Link,{as:b.b,to:"/"},"Search For Books"),f.loggedIn()?i.a.createElement(i.a.Fragment,null,i.a.createElement(j.a.Link,{as:b.b,to:"/saved"},"See Your Books"),i.a.createElement(j.a.Link,{onClick:f.logout},"Logout")):i.a.createElement(j.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),i.a.createElement(S.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},i.a.createElement(y.a.Container,{defaultActiveKey:"login"},i.a.createElement(S.a.Header,{closeButton:!0},i.a.createElement(S.a.Title,{id:"signup-modal"},i.a.createElement(j.a,{variant:"pills"},i.a.createElement(j.a.Item,null,i.a.createElement(j.a.Link,{eventKey:"login"},"Login")),i.a.createElement(j.a.Item,null,i.a.createElement(j.a.Link,{eventKey:"signup"},"Sign Up"))))),i.a.createElement(S.a.Body,null,i.a.createElement(y.a.Content,null,i.a.createElement(y.a.Pane,{eventKey:"login"},i.a.createElement(J,{handleModalClose:function(){return n(!1)}})),i.a.createElement(y.a.Pane,{eventKey:"signup"},i.a.createElement(V,{handleModalClose:function(){return n(!1)}})))))))},z=t(107),A=t(137),M=t(97),H=t(138),R=t(147),W=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},Q=function(){var e=Object(N.a)(G),a=Object(g.a)(e,2),t=a[0],n=a[1].error,r=Object(c.useState)([]),o=Object(g.a)(r,2),l=o[0],s=o[1],u=Object(c.useState)(""),m=Object(g.a)(u,2),d=m[0],b=m[1],p=Object(c.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),v=Object(g.a)(p,2),k=v[0],E=v[1];Object(c.useEffect)((function(){return function(){var e;(e=k).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var h=function(){var e=Object(C.a)(x.a.mark((function e(a){var t,n,r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),d){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(d));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("Something went wrong!");case 9:return e.next=11,t.json();case 11:n=e.sent,r=n.items,o=r.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),s(o),b(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),w=function(){var e=Object(C.a)(x.a.mark((function e(a){var r,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=l.find((function(e){return e.bookId===a})),f.loggedIn()?f.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,t({variables:{input:r}});case 7:if(o=e.sent,o.data,!n){e.next=11;break}throw new Error("Something went wrong!");case 11:E([].concat(Object(z.a)(k),[r.bookId])),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(A.a,{fluid:!0,className:"text-light bg-dark"},i.a.createElement(O.a,null,i.a.createElement("h1",null,"Search for Books!"),i.a.createElement(L.a,{onSubmit:h},i.a.createElement(L.a.Row,null,i.a.createElement(M.a,{xs:12,md:8},i.a.createElement(L.a.Control,{name:"searchInput",value:d,onChange:function(e){return b(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),i.a.createElement(M.a,{xs:12,md:4},i.a.createElement(_.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),i.a.createElement(O.a,null,i.a.createElement("h2",null,l.length?"Viewing ".concat(l.length," results:"):"Search for a book to begin"),i.a.createElement(H.a,null,l.map((function(e){return i.a.createElement(R.a,{key:e.bookId,border:"dark"},e.image?i.a.createElement(R.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,i.a.createElement(R.a.Body,null,i.a.createElement(R.a.Title,null,e.title),i.a.createElement("p",{className:"small"},"Authors: ",e.authors),i.a.createElement(R.a.Text,null,e.description),f.loggedIn()&&i.a.createElement(_.a,{disabled:null===k||void 0===k?void 0:k.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return w(e.bookId)}},(null===k||void 0===k?void 0:k.some((function(a){return a===e.bookId})))?"Book already saved!":"Save this Book!")))})))))},X=t(145),Z=Object(q.a)(Y||(Y=Object($.a)(["\n  {\n    me {\n      _id\n      username\n      email\n      bookCount\n      savedBooks {\n        bookId\n        authors\n        image\n        description\n        title\n        link\n      }\n    }\n  }\n"]))),ee=function(){var e=Object(N.a)(U),a=Object(g.a)(e,2),t=a[0],n=a[1].error,r=Object(X.a)(Z),o=r.loading,l=r.data,c=(null===l||void 0===l?void 0:l.me)||{},s=function(){var e=Object(C.a)(x.a.mark((function e(a){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f.loggedIn()?f.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,t({variables:{bookId:a}});case 6:if(r=e.sent,r.data,!n){e.next=10;break}throw new Error("Something went wrong!");case 10:W(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(a){return e.apply(this,arguments)}}();return o?i.a.createElement("h2",null,"LOADING..."):i.a.createElement(i.a.Fragment,null,i.a.createElement(A.a,{fluid:!0,className:"text-light bg-dark"},i.a.createElement(O.a,null,i.a.createElement("h1",null,"Viewing saved books!"))),i.a.createElement(O.a,null,i.a.createElement("h2",null,c.savedBooks.length?"Viewing ".concat(c.savedBooks.length," saved ").concat(1===c.savedBooks.length?"book":"books",":"):"You have no saved books!"),i.a.createElement(H.a,null,c.savedBooks.map((function(e){return i.a.createElement(R.a,{key:e.bookId,border:"dark"},e.image?i.a.createElement(R.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,i.a.createElement(R.a.Body,null,i.a.createElement(R.a.Title,null,e.title),i.a.createElement("p",{className:"small"},"Authors: ",e.authors),i.a.createElement(R.a.Text,null,e.description),i.a.createElement(_.a,{className:"btn-block btn-danger",onClick:function(){return s(e.bookId)}},"Delete this Book!")))})))))},ae=new d.a({request:function(e){var a=localStorage.getItem("id_token");e.setContext({headers:{authorization:a?"Bearer ".concat(a):""}})},uri:"/graphql"});var te=function(){return i.a.createElement(m.a,{client:ae},i.a.createElement(b.a,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(K,null),i.a.createElement(p.c,null,i.a.createElement(p.a,{exact:!0,path:"/",component:Q}),i.a.createElement(p.a,{exact:!0,path:"/saved",component:ee}),i.a.createElement(p.a,{render:function(){return i.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};u.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(te,null)),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.fba8c479.chunk.js.map