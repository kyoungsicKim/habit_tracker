(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(9),i=n.n(s),o=(n(15),n(6)),l=n(2),h=n(3),u=n(5),b=n(4),d=(n(16),function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return Object(a.jsxs)("li",{className:"habit",children:[Object(a.jsx)("span",{className:"habit__name",children:t}),Object(a.jsx)("span",{className:"habit__count",children:n}),Object(a.jsx)("button",{className:"habit__btn habit--increase",onClick:this.handleIncrement,children:Object(a.jsx)("i",{className:"fas fa-plus-square"})}),Object(a.jsx)("button",{className:"habit__btn habit--decrease",onClick:this.handleDecrement,children:Object(a.jsx)("i",{className:"fas fa-minus-square"})}),Object(a.jsx)("button",{className:"habit__btn habit--delete",onClick:this.handleDelete,children:Object(a.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(c.Component)),j=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).inputRef=r.a.createRef(),e.onSubmit=function(t){t.preventDefault();var n=e.inputRef.current.value;n&&e.props.onAdd(n),e.inputRef.current.value=""},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{className:"add__form",onSubmit:this.onSubmit,children:[Object(a.jsx)("input",{ref:this.inputRef,type:"text",className:"form__input",placeholder:"Please enter your habit! "}),Object(a.jsx)("button",{className:"form__btn",type:"submit",children:"ADD"})]})}}]),n}(c.Component),p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleAdd=function(t){e.props.onAdd(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{onAdd:this.handleAdd}),Object(a.jsx)("ul",{children:this.props.habits.map((function(t){return Object(a.jsx)(d,{habit:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete,onAdd:e.handleAdd},t.id)}))}),Object(a.jsx)("button",{type:"button",className:"reset__btn",onClick:this.props.onReset,children:"RESET"})]})}}]),n}(c.Component),f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("nav",{className:"navbar",children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("i",{className:"navbar__logo fas fa-leaf"}),Object(a.jsx)("span",{children:"Habit Tracker"}),Object(a.jsx)("span",{className:"navbar__count",children:this.props.totalCount})]})})}}]),n}(c.Component),m=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0},{id:4,name:"Basketball",count:0}]},e.handleIncrement=function(t){var n=Object(o.a)(e.state.habits),a=n.indexOf(t);n[a].count++,e.setState({habits:n})},e.handleDecrement=function(t){var n=Object(o.a)(e.state.habits),a=n.indexOf(t),c=n[a].count-1;n[a].count=c<=0?0:c,e.setState({habits:n})},e.handleDelete=function(t){var n=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:n})},e.handleReset=function(){var t=e.state.habits.map((function(e){return e.count=0,e}));e.setState({habits:t})},e.handleAdd=function(t){var n=[].concat(Object(o.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),Object(a.jsx)(p,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset})]})}}]),n}(c.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(17);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),O()}},[[21,1,2]]]);
//# sourceMappingURL=main.e6da6b63.chunk.js.map