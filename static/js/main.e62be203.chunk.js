(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{27:function(e,t,c){},29:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(22),i=c.n(a),r=(c(27),c(28),c(7)),l=c(2),o=(c(29),c(0));var j=function(){return Object(o.jsx)("nav",{class:"navbar",role:"navigation","aria-label":"main navigation",children:Object(o.jsxs)("div",{class:"navbar-menu",children:[Object(o.jsx)("div",{class:"navbar-brand",children:Object(o.jsx)("a",{class:"navbar-item",href:"https://www.youtube.com/watch?v=msSc7Mv0QHY",children:Object(o.jsx)("img",{src:"/bull1.png"})})}),Object(o.jsxs)("div",{class:"navbar-end",children:[Object(o.jsx)("a",{class:"navbar-item",children:Object(o.jsx)(r.b,{to:"/",children:"Home"})}),Object(o.jsx)("div",{class:"navbar-item",children:Object(o.jsx)("div",{class:"buttons",children:Object(o.jsx)("a",{class:"button is-primary",children:Object(o.jsx)("strong",{children:Object(o.jsx)(r.b,{to:"/new",children:"New Todo"})})})})})]})]})})},u=c(6),d=c.n(u),b=c(8),h=c(3),p=c(12),O=c.n(p),x="https://jsonplaceholder.typicode.com/todos";function f(){return v.apply(this,arguments)}function v(){return(v=Object(b.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get(x);case 3:return t=e.sent,(c=t.data).forEach((function(e){e.isDone=e.completed,delete e.completed})),e.abrupt("return",c.slice(0,50));case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function g(){return(g=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.a.post(x,{userId:11,title:t.title,completed:t.isDone});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(b.a)(d.a.mark((function e(t,c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.a.put("".concat(x,"/").concat(c),{userId:t.userId,id:c,title:t.title,completed:t.isDone});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(h.a)(a,2),r=i[0],l=i[1],j=Object(n.useState)(0),u=Object(h.a)(j,2),p=u[0],O=u[1],x=Object(n.useState)(""),v=Object(h.a)(x,2),g=v[0],k=v[1];Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,l(!0),s(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var w=function(e,t,c){console.log(e,t,c),e.isDone=t,function(e,t){m.apply(this,arguments)}(e,c)};return Object(o.jsx)(o.Fragment,{children:r&&Object(o.jsx)("div",{class:"columns is-centered",children:Object(o.jsx)("div",{class:"column is-two-thirds",children:Object(o.jsxs)("nav",{class:"panel",children:[Object(o.jsx)("p",{class:"panel-heading",children:"To do"}),Object(o.jsx)("div",{class:"panel-block",children:Object(o.jsxs)("p",{class:"control has-icons-left",children:[Object(o.jsx)("input",{onChange:function(e){return k(e.target.value)},value:g,class:"input",type:"text",placeholder:"Search"}),Object(o.jsx)("span",{class:"icon is-left",children:Object(o.jsx)("i",{class:"fas fa-search","aria-hidden":"true"})})]})}),Object(o.jsxs)("p",{class:"panel-tabs",children:[Object(o.jsx)("a",{onClick:function(){return O(0)},class:0===p?"is-active":"",children:"All"}),Object(o.jsx)("a",{onClick:function(){return O(1)},class:1===p?"is-active":"",children:"Not Done"}),Object(o.jsx)("a",{onClick:function(){return O(2)},class:2===p?"is-active":"",children:"Done"})]}),Object(o.jsx)("div",{class:"panel-block",children:Object(o.jsx)("button",{onClick:function(){return O(0),void k("")},class:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})}),c.reduce((function(e,t,c){return(0===p||1===p&&!1===t.isDone||2===p&&!0===t.isDone)&&(0===g.length||t.title.search(g)>-1)&&e.push(Object(o.jsxs)("label",{class:"panel-block",children:[Object(o.jsx)("input",{onClick:function(e){return w(t,e.target.checked,c)},type:"checkbox",defaultChecked:t.isDone}),t.title]},c)),e}),[])]})})})})},w=k;var y=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(h.a)(a,2),j=i[0],u=i[1],d=Object(l.f)();function b(e){if(e.preventDefault(),function(){var e=!0;return!c||c.length<1?(u("Todo must not be empty."),e=!1):u(!1),e}()){var t={title:c,isDone:!1};console.log("newTodo",t),function(e){g.apply(this,arguments)}(t),s(""),console.log("navigating"),d("/")}}return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{class:"columns is-centered",children:Object(o.jsx)("div",{class:"column is-one-third",children:Object(o.jsxs)("form",{class:"box",children:[Object(o.jsx)("div",{class:"field",children:Object(o.jsxs)("div",{class:"field",children:[Object(o.jsx)("label",{class:"label",children:"Title"}),Object(o.jsx)("div",{class:"control",children:Object(o.jsx)("input",{onChange:function(e){s(e.target.value)},class:"input ".concat(j&&"is-danger"),type:"text",placeholder:"Enter your todo here"})}),j&&Object(o.jsx)("p",{class:"help is-danger",children:j})]})}),Object(o.jsxs)("div",{class:"field is-grouped",children:[Object(o.jsx)("div",{class:"control",children:Object(o.jsx)("button",{onClick:function(e){b(e)},class:"button is-link",children:"Submit"})}),Object(o.jsx)("div",{class:"control",children:Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)("button",{class:"button is-link is-light",children:"Cancel"})})})]})]})})})})},C=y;var D=function(){return Object(o.jsxs)(r.a,{children:[Object(o.jsx)(j,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/",element:Object(o.jsx)(w,{})}),Object(o.jsx)(l.a,{path:"/new",element:Object(o.jsx)(C,{})})]})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(D,{})}),document.getElementById("root")),S()}},[[50,1,2]]]);
//# sourceMappingURL=main.e62be203.chunk.js.map