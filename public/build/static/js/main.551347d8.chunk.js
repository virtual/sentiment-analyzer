(this.webpackJsonppublic=this.webpackJsonppublic||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},49:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var a=n(9),s=n.n(a),o=n(20),r=n.n(o),i=(n(26),n(0)),c=n(1),h=n(5),u=n(3),l=n(2),d=(n(27),n(28),n(7)),p=n(30),b=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(c.a)(n,[{key:"handleSubmit",value:function(t){var e=this,n="";if(""!==this.props.wordsInput)try{p({method:"post",url:"/post",data:{lyrics:this.props.wordsInput}}).then((function(t){console.log(t.data),n=t.data,e.props.updateSA(n)}),(function(t){console.log(t)}))}catch(a){console.error(a)}t.preventDefault()}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"wordsForm",children:[Object(d.jsxs)("h2",{children:["Sentiment: ",this.props.sentiment]}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit,action:"../../post",method:"post",children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("small",{children:"Words:"}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{rows:"10",type:"text",value:this.props.wordsInput,onChange:this.props.onWordsChange})]}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"submit",value:"Submit"})]})]})}}]),n}(a.Component),j=(n(49),(new(n(21).a)).toDestination()),m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).handleSVGClick=a.handleSVGClick.bind(Object(h.a)(a)),a.randomizeXPos=a.randomizeXPos.bind(Object(h.a)(a)),a.randomizeYPos=a.randomizeYPos.bind(Object(h.a)(a)),a.playNote=a.playNote.bind(Object(h.a)(a)),a}return Object(c.a)(n,[{key:"handleSVGClick",value:function(t){""!==this.props.wordsInput&&console.log("something about "+this.props.shape+" svgs"),t.preventDefault()}},{key:"randomizeXPos",value:function(){var t=window.innerHeight-20;return t=Math.random()*t}},{key:"randomizeYPos",value:function(){var t=window.innerWidth-20;return t=Math.random()*t}},{key:"playNote",value:function(){var t=["A","B","C","D","E","F","G"],e=Math.floor(Math.random()*t.length),n=Math.floor(4*Math.random())+2,a=t[e]+n;j.triggerAttackRelease(a,"8n")}},{key:"render",value:function(){var t="./"+this.props.shape+".svg",e=this.randomizeXPos(),n=this.randomizeYPos(),a=String(40*Math.random())+"px",s=String(.3*parseInt(this.props.counter))+"s";return Object(d.jsx)("div",{style:{top:e,left:n},className:"shape",onClick:this.playNote,children:Object(d.jsx)("img",{style:{height:a,width:a,animationDelay:s},onClick:this.handleSVGClick,src:t,alt:t})})}}]),n}(a.Component),v=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"shouldComponentUpdate",value:function(t,e){return t.wordsInput===t.shapeWords}},{key:"render",value:function(){var t=this,e=this.props.allowedShapes,n=[],a=0;return e.forEach((function(e){for(var s=(t.props.wordsInput.match(new RegExp(e,"g"))||[]).length,o=0;o<s;o++)n.push(Object(d.jsx)(m,{shape:e,counter:a},Math.random())),a++})),Object(d.jsx)("div",{className:"artCanvas",style:{backgroundColor:this.props.bgHue},children:n})}}]),n}(a.Component),O=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={wordsInput:"",sentiment:"0",bgHue:"hsl(161, 17%, 88%)",shapeWords:""},a.onWordsChange=a.onWordsChange.bind(Object(h.a)(a)),a.updateSA=a.updateSA.bind(Object(h.a)(a)),a.createHSLValue=a.createHSLValue.bind(Object(h.a)(a)),a}return Object(c.a)(n,[{key:"onWordsChange",value:function(t){this.setState({wordsInput:t.target.value})}},{key:"createHSLValue",value:function(t){var e=parseFloat(t),n=Math.abs(e/3),a=0!==e?Math.abs(1/Math.log(Math.abs(e/3))):.17;isFinite(a)||(a=1),console.log(e,n,a);var s=Math.abs(100*a).toFixed(1)+"%";return e>0?"hsl(212, ".concat(s,", 82%)"):e<0?"hsl(0, ".concat(s,", 90%)"):"hsl(161, ".concat(s,", 88%)")}},{key:"updateSA",value:function(t){var e=this.createHSLValue(t);this.setState({sentiment:t,bgHue:e,shapeWords:this.state.wordsInput})}},{key:"render",value:function(){var t=(100*this.state.sentiment).toFixed(1)+"%";return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(v,{allowedShapes:["star","circle"],bgHue:this.state.bgHue,wordsInput:this.state.wordsInput,shapeWords:this.state.shapeWords}),Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("h1",{children:"Sentiment Analyzer"})}),Object(d.jsx)("main",{children:Object(d.jsx)(b,{wordsInput:this.state.wordsInput,sentiment:t,onWordsChange:this.onWordsChange,updateSA:this.updateSA})})]})}}]),n}(a.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),o(t),r(t)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),f()}},[[59,1,2]]]);
//# sourceMappingURL=main.551347d8.chunk.js.map