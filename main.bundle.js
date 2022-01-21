(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var o=t(81),i=t.n(o),r=t(645),a=t.n(r),d=t(667),s=t.n(d),l=new URL(t(313),t.b),c=new URL(t(107),t.b),p=a()(i());p.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap);"]);var u=s()(l),m=s()(c);p.push([e.id,'/* CSS Reset */\n\n* {\n  margin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tline-height: 1;\n\tfont-family: "Inter", -apple-system, sans-serif;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* Starts Here */\n\n#container {\n  background-color: red;\n  height: 100vh;\n  display: flex;\n}\n\n#sidebar {\n  width: 300px;\n  background-color: rgb(235, 235, 235);\n\n  overflow-y: auto;\n  border-right: 1px solid rgb(174, 174, 174);\n\n  display: flex;\n  flex-direction: column;\n}\n\n#todolist {\n  flex: 1;\n  background-color: rosybrown;\n}\n\n#header {\n  background-color: white;\n  border-bottom: 1px solid rgb(174, 174, 174);\n  height: 40px;\n  padding: 20px 12px 20px 20px;\n\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  position: sticky;\n  top: 0;\n}\n\n#title {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n#addButton {\n  color: black;\n  padding: 8px;\n  background-color: transparent;\n  line-height: 0;\n  cursor: pointer;\n  overflow: hidden;\n\n  border: none;\n  border-radius: 4px;\n  font-size: 28px;\n}\n\n#deadlines {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  /* height: 260px; */\n  padding: 20px 0px 20px 0px;\n  justify-content: center;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n#day,\n#week,\n#month {\n  /* flex: 1; */\n  padding: 20px;\n  background-color: white;\n  border-top: 1px solid rgb(174, 174, 174);\n\n  display: flex;\n  justify-content: space-between;\n}\n\n.filter:last-child {\n  border-bottom: 1px solid rgb(174, 174, 174);\n}\n\n.filter {\n  transition: filter 100ms;\n}\n\n.filter:hover {\n  filter: brightness(0.95);\n}\n\n.dot {\n  height: 12px;\n  width: 12px;\n  align-self: center;\n  border-radius: 50%;\n}\n\n.dot.orange {\n  background-color: orange;\n}\n\n.dot.red {\n  background-color: tomato;\n}\n\n.dot.green {\n  background-color: rgb(27, 172, 27);\n}\n\n#projects {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n\n  overflow-y: auto;\n}\n\n#projects::-webkit-scrollbar {\n  display: none;\n}\n\n.project {\n  background-color: white;\n  border-top: 1px solid rgb(174, 174, 174);\n  border-left: 1px solid rgb(174, 174, 174);\n  height: 60px;\n  width: 100%;\n  padding: 20px;\n  /* flex: 30%; */\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 4px;\n\n  transition: filter 100ms;\n}\n\n.project:hover {\n  filter: brightness(0.95);\n}\n\n.projectTitle {\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.numberOfTasks {\n  font-size: 14px;\n  color: rgb(182, 182, 182);\n}\n\n#todoList {\n  flex: 1;\n  display: flex;\n  background-color: white;\n  justify-content: center;\n}\n\n#listWrapper {\n  background-color: rgb(235, 235, 235);\n  height: 100%;\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n}\n\n#listHeader {\n  background-color: white;\n  /* border-bottom: 1px solid black; */\n  /* height: 80px; */\n  padding: 35px 20px 17px 30px;\n\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  \n  font-size: 28px;\n  font-weight: 600;\n}\n\n#list {\n  display: flex;\n  flex-direction: column;\n  /* padding: 12px; */\n  /* gap: 12px; */\n}\n\n.list-item {\n  background-color: white;\n  padding: 20px 20px 20px 20px;\n  margin: 12px 12px 0px 12px;\n  /* border: 1px solid blue; */\n\n  display: flex;\n  align-items: center;\n  gap: 16px;\n\n  transition: opacity 100ms ease-in-out, background-color 100ms ease-in-out;\n  border-radius: 5px;\n}\n\n.list-item:hover {\n  background-color: rgb(249, 249, 249);\n}\n\n.list-item.complete {\n  background-color: rgba(198, 255, 198, 0.954);\n  text-decoration: line-through;\n  text-decoration-thickness: 2px;\n  animation: strike 1s linear;\n}\n\n@keyframes strike {\n  from { text-decoration-color: transparent; }\n  to { text-decoration-color: auto; }\n}\n\n#details {\n  background-color: rgb(240, 240, 240);\n  transition: opacity 300ms ease-out, height 200ms ease-out;\n  opacity: 0;\n  height: 0;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  visibility: hidden;\n}\n\n#details.show {\n  opacity: 1;\n  /* min-height: 50px; */\n  /* padding: 10px; */\n  display: flex;\n  align-items: center;\n  height: 50px;\n\n  visibility: visible;\n  margin: 6px 12px 0px 12px;\n}\n\n#details input[type=date] {\n  flex: 1;\n  font-family: \'Inter\';\n  padding: 10px 5px 10px 20px;\n  font-size: 18px;\n  border: none;\n  border-radius: 5px;\n}\n\n\n#details.show input[type=text] {\n  flex: 1;\n  padding: 12px;\n  font-family: "Inter";\n  border-radius: 5px;\n  \n  border: none;\n  overflow: auto;\n  outline: none;\n  resize: none;\n\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none;\n  font-size: 18px;\n}\n\n/* https://stackoverflow.com/questions/68789475/how-can-i-style-checkbox-with-css */\n[type=checkbox] {\n  width: 20px;\n  height: 20px;\n  color: dodgerblue;\n  vertical-align: middle;\n  -webkit-appearance: none;\n  background: none;\n  border: 0;\n  outline: 0;\n  flex-grow: 0;\n  border-radius: 50%;\n  background-color: #FFFFFF;\n  transition: background 300ms;\n  cursor: pointer;\n}\n\n/* Pseudo element for check styling */\n[type=checkbox]::before {\n  content: "";\n  color: transparent;\n  display: block;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  border: 0;\n  background-color: transparent;\n  background-size: contain;\n  box-shadow: inset 0 0 0 1px #CCD3D8;\n}\n\n/* Checked */\n[type=checkbox]:checked {\n  background-color: currentcolor;\n}\n\n[type=checkbox]:checked::before {\n  box-shadow: none;\n  background-image: url('+u+');\n}\n\n\n/* Disabled */\n[type=checkbox]:disabled {\n  background-color: #CCD3D8;\n  opacity: 0.84;\n  cursor: not-allowed;\n}\n\n/* IE */\n[type=checkbox]::-ms-check {\n  content: "";\n  color: transparent;\n  display: block;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  border: 0;\n  background-color: transparent;\n  background-size: contain;\n  box-shadow: inset 0 0 0 1px #CCD3D8;\n}\n\n[type=checkbox]:checked::-ms-check {\n  box-shadow: none;\n  background-image: url('+m+");\n}\n\n#addTodoButton {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  font-size: 20px;\n  background-color: black;\n  color: white;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#addTodoButton:disabled,\n#addTodoButton[disabled] {\n  opacity: 0.4;\n  cursor: default;\n}\n\n/* modal */\n/* https://codeorum.com/tutorials/simple-modal-element-with-vanilla-js-and-animation-effects */\n\n.modal {\n  z-index: 9999;\n\n  width: 100%;\n  height: 100%;\n  position: fixed;\n\n  overflow-x: hidden;\n  overflow-y: auto;\n  background-color: rgba(0, 0, 0, 0.3);\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.3s ease-in-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal .m-container {\n  display: flex;\n  flex-direction: column;\n  width: 500px;\n  max-width: 100%;\n  min-height: 150px;\n  height: auto;\n  position: relative;\n  border-radius: 5px;\n  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1);\n  opacity: 0;\n  transition: all 0.3s ease-in-out;\n}\n\n.modal .m-container.slide-from-top {\n  top: -200px;\n}\n\n.modal .m-container .m-title {\n  box-sizing: border-box;\n  background-color: rgb(220, 220, 220);\n  margin: 0;\n  padding: 20px 20px;\n  border-radius: 5px 5px 0 0;\n  color: #f2f2f2;\n  font-weight: 500;\n  font-size: 18px;\n  flex-wrap: wrap;\n  color: rgb(69, 69, 69);\n}\n\n.modal .m-container .m-content {\n  box-sizing: border-box;\n  background-color: #fff;\n  min-height: 150px;\n  width: 100%;\n  height: auto;\n  margin: 0;\n  padding: 20px;\n  border-radius: 0 0 5px 5px;\n}\n\n.modal .m-container .m-content .m-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-top: 10px;\n  flex-wrap: wrap;\n  background-color: aquamarine;\n}\n\n.modal.active {\n  visibility: visible;\n  opacity: 1;\n}\n\n.modal.active .m-container {\n  opacity: 1;\n}\n\n.modal.active .m-container.slide-from-top {\n  top: 0px;\n}\n\n\n/* modal-form */\n\ninput {\n    width: 100%;\n}\n\nspan {\n    display: block;\n    /* overflow: hidden; */\n    padding-right:10px;\n}\nbutton {\n    float: right;\n}\n\n#form {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.form-item {\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n\n  font-size: 16px;\n}\n\ninput:focus {\n  outline: none;\n}\n\ninput[type=text],\ninput[type=date] {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n\n  border: 1px solid rgb(205, 205, 205);\n  border-radius: 4px;\n}\n\n#submitTodoBtn {\n  background-color: #007bff;\n  border: none;\n  border-radius: 0px;\n  border-radius: 6px;\n  -moz-border-radius: 6px;\n  color: white;\n  font-size: 18px;\n}\n\n.form-item input {\n  padding: 10px;\n}\n\ninput[type=submit] {\n  padding: 10px;\n  border-radius: 10px;\n}",""]);const f=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);o&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),n.push(c))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},a=[],d=0;d<e.length;d++){var s=e[d],l=o.base?s[0]+o.base:s[0],c=r[l]||0,p="".concat(l," ").concat(c);r[l]=c+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=i(m,o);o.byIndex=d,n.splice(d,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var d=t(r[a]);n[d].references--}for(var s=o(e,i),l=0;l<r.length;l++){var c=t(r[l]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},313:e=>{e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 viewBox=%270 0 24 24%27%3E %3Cpath d=%27M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z%27 fill=%27%23fff%27/%3E %3C/svg%3E"},107:e=>{e.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27%3E %3Cpath d=%27M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z%27 fill=%27%23fff%27/%3E %3C/svg%3E"}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),o=t(795),i=t.n(o),r=t(569),a=t.n(r),d=t(565),s=t.n(d),l=t(216),c=t.n(l),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=c(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h={events:{},sub:(e,n)=>{h.events[e]=h.events[e]||[],h.events[e].push(n),console.log(`someone subscribed to ${e}, which will run ${n.name}`)},pub:(e,n)=>{h.events[e]&&h.events[e].forEach((e=>{null!==n?e(n):e()}))}};class b{constructor(e,n=[]){this.title=e,this.todos=n}get identifier(){return this.identifier}addTodo(e){e.title,this.todos.push(e)}removeTodo(e){console.log(e)}}const g={initialize:function(){var e=Math.random().toString(36).slice(-6);const n={title:"example",todos:[{identifier:123,title:"Test 1",description:"This is a todo",date:"2015-03-25",parent:`${e}`,"this.complete":!1},{identifier:456,title:"Test 2",description:"This is a todo",date:"2015-03-26",parent:`${e}`,"this.complete":!1},{identifier:789,title:"Test 3",description:"This is a todo",date:"2015-03-27",parent:`${e}`,"this.complete":!1}]};localStorage.setItem(e,JSON.stringify(n))},all:()=>Object.keys(localStorage),getProject:e=>JSON.parse(localStorage.getItem(e)),todoCount:e=>g.getProject(e).todos.length,create:(e,n)=>{localStorage.setItem(e,n)},add:(e,n)=>{const t=JSON.parse(localStorage.getItem(e));t.todos.push(n),localStorage.setItem(e,JSON.stringify(t))},toggle:(e,n)=>{console.log(n);const t=JSON.parse(localStorage.getItem(e)),o=t.todos.find((function(e){return e.identifier===Number(n)}));o.complete=!o.complete,localStorage.setItem(e,JSON.stringify(t))}},x={filters:["day","week","month"],sortedTodos:{day:[],week:[],month:[]},render:e=>{const n=document.createElement("div");n.setAttribute("id","projects");const t=x.filters,o=document.createElement("div");o.setAttribute("id","deadlines"),t.forEach(((e,n)=>{const t=document.createElement("div");t.setAttribute("id",e),t.className="filter";const i=document.createElement("div");i.className="info";const r=document.createElement("div");r.className="projectTitle",r.textContent=e;const a=document.createElement("div");a.className="numberOfTasks",a.textContent="0 items",i.appendChild(r),i.appendChild(a),t.appendChild(i);const d=document.createElement("div");d.className="dot orange",t.appendChild(d),t.addEventListener("click",(function(e){h.pub("filterTodos",x.updatedFilterData(e.target.id))})),o.appendChild(t)})),n.appendChild(o),e.appendChild(n),x.sortAll(),x.refresh(),h.sub("projectAdded",x.create),h.sub("updateCount",x.updateTaskCount),h.sub("updateSorted",x.sortAll)},renderProject:(e,n)=>{const t=document.createElement("div");t.className="project",t.setAttribute("data-id",n);const o=document.createElement("div");o.className="projectTitle",o.textContent=e;const i=document.createElement("div");return i.className="numberOfTasks",i.textContent=`${g.todoCount(n)} items`,t.appendChild(o),t.appendChild(i),t.addEventListener("click",(function(e){h.pub("updateListView",n)})),t},create:e=>{var n=Math.random().toString(36).slice(-6);const t=new b(e,[]);g.create(n,JSON.stringify(t)),x.refresh(),console.log(`${e} was added`)},refresh:()=>{(e=>{const n=document.getElementsByClassName("project");for(;n.length>0;)n[0].parentNode.removeChild(n[0])})();const e=g.all();if(e.length>0){console.log("refresh");var n=document.getElementById("projects");e.forEach((e=>{const t=g.getProject(e).title,o=x.renderProject(t,e);n.appendChild(o)})),console.log(document.querySelector(".project:last-child"))}},updateTaskCount:e=>{document.querySelector(`[data-id="${e}"]`).querySelector(".numberOfTasks").textContent=`${g.todoCount(e)} items`},sortAll:()=>{const e=x.filters;x.sortedTodos={day:[],week:[],month:[]},e.forEach((e=>{x.sortItems(e),document.getElementById(e).querySelector(".numberOfTasks").textContent=`${x.sortedTodos[e].length} items`})),console.log("new:",x.sortedTodos)},sortItems:e=>{var n;switch(e){case"day":n=1;break;case"week":n=7;break;case"month":n=30}g.all().forEach(((t,o)=>{const i=g.getProject(t).todos.filter((e=>((e,n)=>{const t=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),o=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate());return Math.floor((o-t)/864e5)})(new Date,new Date(e.date))<n));x.sortedTodos[e]=x.sortedTodos[e].concat(i)}))},updatedFilterData:e=>(x.sortAll(),{title:e,todos:x.sortedTodos[e],isFilter:!0})};class v{constructor(e,n,t){this.identifier=(new Date).valueOf(),this.title=e,this.description=n,this.date=t,this.parent=null,this.complete=!1}static from(e){return Object.assign(new v,e)}}const y={selectedProject:null,render:e=>{const n=document.createElement("div");n.setAttribute("id","listWrapper"),n.innerHTML='<div id="listHeader">Select Project</div>\n    <ul id="list"></ul>';const t=document.createElement("button");t.setAttribute("id","addTodoButton"),t.setAttribute("disabled",""),t.textContent="+",t.addEventListener("click",(function(e){e.preventDefault(),h.pub("showModal",y.selectedProject)})),e.appendChild(n),e.appendChild(t),h.sub("updateListView",y.updateView),h.sub("submitTodo",y.addTodo),h.sub("filterTodos",y.listTodos),h.sub("updateFilterView",y.listTodos)},updateView:e=>{console.log("update view:",e);const n=g.getProject(e);y.selectedProject=e,y.listTodos({title:n.title,todos:n.todos,isFilter:!1}),document.getElementById("addTodoButton").removeAttribute("disabled")},listTodos:e=>{const n=document.getElementById("list");document.getElementById("listHeader").textContent=e.title,n.innerHTML="",1==e.isFilter&&(y.selectedProject=e.title,console.log("SELECTED:",y.selectedProject)),e.todos.forEach((e=>{const t=document.createElement("li");t.className="list-item",t.setAttribute("data-id",e.identifier),t.setAttribute("checked",e.complete),t.addEventListener("click",(function(n){n.target.classList.contains("custom-checkbox")||y.showDetail(e.identifier,e.parent)}));const o=document.createElement("input");e.complete&&(t.classList.add("complete"),o.setAttribute("checked","")),o.setAttribute("type","checkbox"),o.className="custom-checkbox",o.onclick=function(n){const t=n.target.closest("li").getAttribute("data-id");g.toggle(e.parent,t),["day","week","month"].includes(y.selectedProject)?y.listTodos(x.updatedFilterData(y.selectedProject)):y.updateView(e.parent)};const i=document.createElement("div");i.className="todoName",i.textContent=e.title,t.appendChild(o),t.appendChild(i),n.appendChild(t)}))},addTodo:e=>{e.complete=!1,e.parent=y.selectedProject;const n=v.from(e);g.add(y.selectedProject,n),y.updateView(y.selectedProject),h.pub("updateCount",y.selectedProject),h.pub("updateSorted",null)},showDetail:(e,n)=>{console.log(e,n);const t=g.getProject(n).todos.find((function(n){return n.identifier===Number(e)}));h.pub("showDetail",t)}},w={render:e=>{const n=document.createElement("div");n.className="modal",n.setAttribute("id","slide-top-modal"),n.innerHTML='<div class="m-container slide-from-top">\n      <h2 class="m-title">Add a Todo</h2>\n      <div class="m-content">\n        <form action="" id="form">\n\n          <div class="form-item">\n            <label for="title">Todo name</label>\n            <input type="text" name="title" id="name" required>\n          </div>\n\n          <div class="form-item">\n            <label for="description">Description</label>\n            <input type="text" name="description" id="description" required>\n          </div>\n\n          <div class="form-item">\n            <label for="date">Due Date</label>\n            <input type="date" name="date" id="datePicker" required>\n          </div>\n\n          <div class="form-item">\n            <input type="submit" value="Add Todo" id=\'submitTodoBtn\'>\n          </div>\n        </form>\n      </div>\n    </div>',n.addEventListener("click",(function(e){e.target.classList.contains("m-content")||w.dismiss()})),e.appendChild(n),h.sub("showModal",w.show)},listen:()=>{document.querySelector("#form").addEventListener("submit",(e=>{e.preventDefault();const n=Object.fromEntries(new FormData(e.target).entries());h.pub("submitTodo",n),document.getElementById("form").reset(),document.getElementById("slide-top-modal").classList.remove("active")}))},show:e=>{const n=g.getProject(e).title;var t=document.getElementById("slide-top-modal");t.classList.add("active"),t.querySelector(".m-title").textContent=`Add a todo: ${n}`},dismiss:()=>{document.getElementById("slide-top-modal").classList.remove("active")}},k=e=>{const n=document.getElementById("list"),t=document.querySelector(`[data-id="${e.identifier}"]`),o=document.createElement("li");o.setAttribute("id","details");const i=document.createElement("input");i.setAttribute("type","date"),i.value=e.date;const r=document.createElement("input");r.setAttribute("type","text"),r.value=e.description,r.addEventListener("input",(function(n){console.log("hello",e.identifier)})),o.appendChild(i),o.appendChild(r);var a=document.getElementById("details");null!==a&&(a.classList.remove("show"),setTimeout((function(){a.outerHTML="",console.log("detail !== null")}),100)),null==t.nextElementSibling?(n.appendChild(o),setTimeout((function(){o.classList.add("show")}),100)):"details"!==t.nextElementSibling.id&&(console.log("there wasnt details"),n.insertBefore(o,t.nextElementSibling),setTimeout((function(){o.classList.add("show")}),100))};!function(){const e=document.getElementById("container"),n=document.getElementById("sidebar"),t=document.getElementById("todoList");(e=>{const n=document.createElement("div");n.setAttribute("id","header");const t=document.createElement("div");t.setAttribute("id","title"),t.textContent="My Projects";const o=document.createElement("button");o.setAttribute("id","addButton"),o.textContent="+",o.addEventListener("click",(function(e){const n=prompt("Please enter the project name");null==n||""==n?console.log("prompt cancelled"):h.pub("projectAdded",n)})),n.appendChild(t),n.appendChild(o),e.appendChild(n)})(n),x.render(n),y.render(t),w.render(e),w.listen(),h.sub("showDetail",k),0==g.all().length&&(g.initialize(),x.refresh())}()})()})();