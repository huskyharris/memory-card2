(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{10:function(e,c,a){},11:function(e,c,a){"use strict";a.r(c);var t=a(0),i=a(1),n=a.n(i),s=a(4),r=a.n(s),o=a(2),d=(a(10),a.p+"static/media/gold_logo.365c5546.png"),p=function(){return Object(t.jsxs)("div",{className:"top-container",children:[Object(t.jsx)("img",{className:"logo",src:d,alt:"One Piece logo"}),Object(t.jsx)("h1",{className:"title-text",children:"Memory Card Game"}),Object(t.jsx)("p",{className:"directions",children:"Gain points for picking cards, but do not pick any card twice"})]})},l=function(e){var c,a=e.currentScore,i=e.bestScore,n=e.resultsText;return c=""===n?null:Object(t.jsx)("p",{className:"feedback",children:n}),Object(t.jsxs)("div",{className:"scoreboard",children:[Object(t.jsxs)("div",{className:"score-line",children:[Object(t.jsx)("p",{className:"score-text",children:"Current Score:"}),Object(t.jsx)("p",{className:"score-text score",children:a})]}),Object(t.jsxs)("div",{className:"score-line",children:[Object(t.jsx)("p",{className:"score-text",children:"Best Score:"}),Object(t.jsx)("p",{className:"score-text score",children:i})]}),Object(t.jsxs)("div",{className:"score-line",children:[Object(t.jsx)("p",{className:"score-text",children:"Max Score:"}),Object(t.jsx)("p",{className:"score-text score",children:"16"})]}),c]})},m=[{id:0,name:"Monkey D. Luffy",pic:{luffy:a.p+"static/media/luffy.b6cbbfff.png"}},{id:1,name:"Portgas D. Ace",pic:{ace:a.p+"static/media/ace.d18401da.png"}},{id:2,name:"Marshall D. Teach",pic:{blackbeard:a.p+"static/media/blackbeard.2e5e7d37.png"}},{id:3,name:"Boa Hancock",pic:{boaHancock:a.p+"static/media/boa_hancock.b76a3430.png"}},{id:4,name:"Brook",pic:{brook:a.p+"static/media/brook.55edd7f0.png"}},{id:5,name:"Buggy the Star Clown",pic:{buggy:a.p+"static/media/buggy.0c404810.png"}},{id:6,name:"Tony Tony Chopper",pic:{chopper:a.p+"static/media/chopper.bdb6e36c.png"}},{id:7,name:"Franky",pic:{franky:a.p+"static/media/franky.a888862d.png"}},{id:8,name:"Marco the Phoenix",pic:{marco:a.p+"static/media/marco.98c7abd7.png"}},{id:9,name:"Nami",pic:{nami:a.p+"static/media/nami.70fce79c.png"}},{id:10,name:"Nico Robin",pic:{robin:a.p+"static/media/nico_robin.46a78ef3.png"}},{id:11,name:"Sanji",pic:{sanji:a.p+"static/media/sanji.a8292cd1.png"}},{id:12,name:"Shanks",pic:{shanks:a.p+"static/media/shanks.2152b763.png"}},{id:13,name:"Usopp",pic:{usopp:a.p+"static/media/usopp.74a0ed36.png"}},{id:14,name:"Edward Newgate",pic:{whitebeard:a.p+"static/media/whitebeard.ef493d12.png"}},{id:15,name:"Roronoa Zoro",pic:{zoro:a.p+"static/media/zoro.7016473c.png"}}],b=function(e){var c=e.id,a=e.name,i=e.pic,n=e.select;return Object(t.jsxs)("div",{className:"card",id:c,onClick:n,children:[Object(t.jsx)("img",{src:i,alt:a,className:"card-pic"}),Object(t.jsx)("p",{className:"char-name-text",children:a})]})},j=function(e){var c=e.selectedCards,a=e.clickCard,n=e.currentScore,s=e.bestScore,r=Object(i.useState)([]),d=Object(o.a)(r,2),p=d[0],l=d[1],j=function e(){for(var a,t=[],i=0;i<3;i++)a=Math.floor(16*Math.random()),t.includes(a)?t=e():t.push(a);return t.every((function(e){return c.includes(e)}))&&(t=e()),t},u=function(){var e=j(),c=[m[e[0]],m[e[1]],m[e[2]]];l(c)};return Object(i.useEffect)((function(){u()}),[]),Object(i.useEffect)((function(){n<16&&u()}),[n,s]),Object(t.jsx)("div",{className:"cards-container",children:p.map((function(e){return Object(t.jsx)(b,{id:e.id,name:e.name,pic:Object.values(e.pic),select:a},e.id)}))})};var u=function(){var e=Object(i.useState)(0),c=Object(o.a)(e,2),a=c[0],n=c[1],s=Object(i.useState)(0),r=Object(o.a)(s,2),d=r[0],m=r[1],b=Object(i.useState)(""),u=Object(o.a)(b,2),f=u[0],h=u[1],O=Object(i.useState)([]),x=Object(o.a)(O,2),g=x[0],k=x[1],N=function(){a>d&&m(a),n(0),k([])};return Object(i.useEffect)((function(){16===a&&(N(),h("Congratulations, you won!"))}),[a]),Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(p,{}),Object(t.jsx)(l,{currentScore:a,bestScore:d,resultsText:f}),Object(t.jsx)(j,{selectedCards:g,clickCard:function(e){var c=e.target.closest(".card");if(c){var t=parseInt(c.id,10);(function(e){return!g.includes(e)})(t)?(k(g.concat(t)),n(a+1),h("")):(N(),h("Sorry, you already picked that card"))}},currentScore:a,bestScore:d})]})};r.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(u,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.4afcf945.chunk.js.map