(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(15),s=n.n(a),i=(n(22),n(6)),o=n.n(i),u=n(3),l=n(16),h=n(4),y=n(17),f=n.n(y),p=n(1),d=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=(t[0],t[1]),c=function(){var e=Object(l.a)(o.a.mark((function e(){var t,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://opentdb.com/api.php?amount=10&category=19&difficulty=easy");case 2:t=e.sent,r=t.data,c=r.results.map((function(e){var t=e.incorrect_answers.length,n=Math.random()*(t-0)+0;return e.incorrect_answers.splice(n,0,e.correct_answer),Object(u.a)(Object(u.a)({},e),{},{answers:e.incorrect_answers})})),n(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){c()}),[]),Object(p.jsx)("div",{children:"Quiz Categories"})},w=[{category:"Science: Mathematics",type:"multiple",difficulty:"easy",question:"What is the area of the circle? ".concat("\\(A = \\pi r^2\\)"," <br> <h1>What is the symbol of pi? ").concat("\\(\\pi\\)"," </h1>  theta = ").concat("\\(\\theta\\)"," <br> <h2> ").concat("\\(  \\frac{x+y}{x-y}  \\)"," <h2/>"),correct_answer:"40",incorrect_answers:["60","15","90"]},{category:"Science: Mathematics",type:"multiple",difficulty:"easy",question:"What&#039;s the square root of 49?",correct_answer:"7",incorrect_answers:["4","12","9"]},{category:"Science: Mathematics",type:"boolean",difficulty:"easy",question:"A universal set, or a set that contains all sets, exists.",correct_answer:"False",incorrect_answers:["True"]},{category:"Science: Mathematics",type:"multiple",difficulty:"easy",question:"What is the symbol for Displacement?",correct_answer:"&Delta;r",incorrect_answers:["dr","Dp","r"]},{category:"Science: Mathematics",type:"multiple",difficulty:"easy",question:"How many sides does a heptagon have?",correct_answer:"7",incorrect_answers:["8","6","5"]},{category:"Science: Mathematics",type:"boolean",difficulty:"easy",question:"The sum of any two odd integers is odd.",correct_answer:"False",incorrect_answers:["True"]},{category:"Science: Mathematics",type:"multiple",difficulty:"easy",question:"What is the correct order of operations for solving equations?",correct_answer:"Parentheses, Exponents, Multiplication, Division, Addition, Subtraction",incorrect_answers:["Addition, Multiplication, Division, Subtraction, Addition, Parentheses","Parentheses, Exponents, Addition, Substraction, Multiplication, Division","The order in which the operations are written."]},{category:"Science: Mathematics",type:"boolean",difficulty:"easy",question:"An isosceles triangle has two sides of equal length as opposed to three.",correct_answer:"True",incorrect_answers:["False"]},{category:"Science: Mathematics",type:"boolean",difficulty:"easy",question:"An equilateral triangle always has every angle measuring 60&deg;.",correct_answer:"True",incorrect_answers:["False"]},{category:"Science: Mathematics",type:"multiple",difficulty:"easy",question:"How many sides does a trapezium have?",correct_answer:"4",incorrect_answers:["3","5","6"]}],m=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){!function(){var e=w.map((function(e){var t=e.incorrect_answers.length,n=Math.random()*(t-0)+0;return e.incorrect_answers.splice(n,0,e.correct_answer),Object(u.a)(Object(u.a)({},e),{},{answers:e.incorrect_answers})}));c(e)}()}),[]),console.log({categories:n}),Object(p.jsx)("div",{dangerouslySetInnerHTML:{__html:w[0].question}})},b=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(d,{}),Object(p.jsx)(m,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),g()}},[[43,1,2]]]);
//# sourceMappingURL=main.a576be75.chunk.js.map