(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(3),o=n.n(a),i=(n(8),n(9),n(0)),r=function(){return Object(i.jsxs)("form",{className:"form",children:[Object(i.jsx)("input",{className:"form__input",placeholder:"Co jest do zrobienia?",required:!0}),Object(i.jsx)("button",{className:"form__button",children:"Dodaj zadanie"})]})},d=(n(11),function(e){var t=e.tasks,n=e.hideDoneTasks;return Object(i.jsx)("ul",{className:"tasks",children:t.map((function(e){return Object(i.jsxs)("li",{className:"tasks__item ".concat(e.done&&n?" tasks__item--hidden":""),children:[Object(i.jsx)("button",{className:"tasks__button tasks__button--toggleDone",children:e.done?"\u2714":""}),Object(i.jsx)("span",{className:"tasks_content".concat(e.done?" tasks__content--done":""),children:e.content}),Object(i.jsx)("button",{className:"tasks__button tasks__button--remove",children:"\ud83d\uddd1"})]},e.id)}))})}),j=(n(12),function(e){var t=e.tasks,n=e.hideDoneTasks;return Object(i.jsx)("div",{className:"buttons",children:t.length>0&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("button",{className:"buttons__button",children:[n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(i.jsx)("button",{className:"buttons__button",disabled:t.every((function(e){return e.done})),children:"Uko\u0144cz wszystkie"})]})})}),l=(n(13),function(e){var t=e.title,n=e.body,s=e.extraHeaderContent;return Object(i.jsxs)("section",{className:"section",children:[Object(i.jsxs)("header",{className:"section__header",children:[Object(i.jsx)("h2",{className:"section__heading",children:t}),s]}),Object(i.jsx)("div",{className:"section__body",children:n})]})}),b=function(e){var t=e.title;return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:t})})},u=(n(14),function(e){var t=e.children;return Object(i.jsx)("main",{className:"container",children:t})}),h=[{id:1,content:"przej\u015b\u0107 na Reacta",done:!1},{id:2,content:"zje\u015b\u0107 obiad",done:!0}];var x=function(){return Object(i.jsxs)(u,{children:[Object(i.jsx)(b,{title:"Lista zada\u0144"}),Object(i.jsx)(l,{title:"Dodaj nowe zadanie",body:Object(i.jsx)(r,{})}),Object(i.jsx)(l,{title:"Lista zada\u0144",body:Object(i.jsx)(d,{tasks:h,hideDoneTasks:false}),extraHeaderContent:Object(i.jsx)(j,{tasks:h,hideDoneTasks:false})})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),a(e),o(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),_()}],[[15,1,2]]]);
//# sourceMappingURL=main.79446fe6.chunk.js.map