(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,e,n){"use strict";n.d(e,"a",function(){return s});var i=n("A36C"),r=n("iWo5"),o=n("qULd");const s=(t,e)=>{let n,s;const a=(t,i,r)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(t,i);o&&e(o)?o!==n&&(l(),c(o,r)):l()},c=(t,e)=>{n=t,s||(s=n);const r=n;Object(i.f)(()=>r.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(i.f)(()=>e.classList.remove("ion-activated")),t&&s!==n&&n.click(),n=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,o.a),onMove:t=>a(t.currentX,t.currentY,o.b),onEnd:()=>{l(!0),Object(o.e)(),s=void 0}})}},"74mu":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return a});const i=(t,e)=>null!==e.closest(t),r=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,i)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,i)}return!1}},HGan:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),s=n("fXoL");let a=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[i.b,r.a,o.B]]}),t})()},PNSq:function(t,e,n){"use strict";n.r(e),n.d(e,"AgregarPageModule",function(){return m});var i=n("ofXK"),r=n("3Pt+"),o=n("TEn/"),s=n("tyNb");class a{constructor(t){this.desc=t,this.completado=!1}}var c=n("fXoL"),l=n("Z16M");function u(t,e){1&t&&(c.Kb(0,"ion-list-header",1),c.Kb(1,"ion-label"),c.fc(2,"Tareas por hacer"),c.Jb(),c.Jb())}function d(t,e){if(1&t){const t=c.Lb();c.Kb(0,"ion-item-sliding",8),c.Kb(1,"ion-item",1),c.Kb(2,"ion-checkbox",9),c.Sb("ngModelChange",function(t){return e.$implicit.completado=t})("ionChange",function(){c.bc(t);const n=e.$implicit;return c.Ub().cambioCheck(n)}),c.Jb(),c.Kb(3,"ion-label"),c.fc(4),c.Jb(),c.Jb(),c.Kb(5,"ion-item-options",10),c.Kb(6,"ion-item-option",11),c.Sb("click",function(){c.bc(t);const n=e.index;return c.Ub().borrar(n)}),c.Ib(7,"ion-icon",12),c.Jb(),c.Jb(),c.Jb()}if(2&t){const t=e.$implicit;c.xb(2),c.Zb("ngModel",t.completado),c.xb(2),c.gc(t.desc)}}const b=[{path:"",component:(()=>{class t{constructor(t,e){this.deseosService=t,this.route=e,this.nombreItem="";const n=this.route.snapshot.paramMap.get("listaId");this.lista=this.deseosService.obtenerLista(n)}ngOnInit(){}agregarItem(){if(0===this.nombreItem.length)return;const t=new a(this.nombreItem);this.lista.items.push(t),this.nombreItem="",this.deseosService.guardarStorage()}cambioCheck(t){0===this.lista.items.filter(t=>!t.completado).length?(this.lista.terminadaEn=new Date,this.lista.terminada=!0):(this.lista.terminadaEn=null,this.lista.terminada=!1),this.deseosService.guardarStorage(),console.log(this.deseosService)}borrar(t){this.lista.items.splice(t,1),this.deseosService.guardarStorage()}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(l.a),c.Hb(s.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-agregar"]],decls:15,vars:4,consts:[[1,"ion-no-border"],["color","dark"],["slot","start"],["color","tertiary","defaultHref","/"],["position","floating"],["type","text",3,"ngModel","ngModelChange","keyup.enter"],["color","dark",4,"ngIf"],["class","animated fadeInDown",4,"ngFor","ngForOf"],[1,"animated","fadeInDown"],["slot","start","color","tertiary",3,"ngModel","ngModelChange","ionChange"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","close"]],template:function(t,e){1&t&&(c.Kb(0,"ion-header",0),c.Kb(1,"ion-toolbar",1),c.Kb(2,"ion-buttons",2),c.Ib(3,"ion-back-button",3),c.Jb(),c.Kb(4,"ion-title"),c.fc(5),c.Jb(),c.Jb(),c.Jb(),c.Kb(6,"ion-content",1),c.Kb(7,"ion-list",1),c.Kb(8,"ion-item",1),c.Kb(9,"ion-label",4),c.fc(10,"Nuevo item"),c.Jb(),c.Kb(11,"ion-input",5),c.Sb("ngModelChange",function(t){return e.nombreItem=t})("keyup.enter",function(){return e.agregarItem()}),c.Jb(),c.Jb(),c.Jb(),c.Kb(12,"ion-list"),c.ec(13,u,3,0,"ion-list-header",6),c.ec(14,d,8,2,"ion-item-sliding",7),c.Jb(),c.Jb()),2&t&&(c.xb(5),c.gc(e.lista.titulo),c.xb(6),c.Zb("ngModel",e.nombreItem),c.xb(2),c.Zb("ngIf",e.lista.items.length>0),c.xb(1),c.Zb("ngForOf",e.lista.items))},directives:[o.k,o.A,o.f,o.d,o.e,o.z,o.h,o.s,o.n,o.r,o.m,o.D,r.d,r.e,i.i,i.h,o.t,o.q,o.g,o.b,o.p,o.o,o.l],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[s.i.forChild(b)],s.i]}),t})(),m=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[i.b,r.a,o.B,f]]}),t})()},VnTo:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var i=n("mrSG"),r=n("TEn/"),o=n("fXoL"),s=n("Z16M"),a=n("tyNb"),c=n("ofXK");let l=(()=>{class t{transform(t,e=!0){return t.filter(t=>t.terminada===e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Gb({name:"filtroCompletado",type:t,pure:!1}),t})();function u(t,e){if(1&t){const t=o.Lb();o.Kb(0,"ion-item-sliding"),o.Kb(1,"ion-item",2),o.Sb("click",function(){o.bc(t);const n=e.$implicit;return o.Ub().listaSeleccionada(n)}),o.Kb(2,"ion-label"),o.fc(3),o.Jb(),o.Kb(4,"ion-note",3),o.fc(5),o.Jb(),o.Jb(),o.Kb(6,"ion-item-options",4),o.Kb(7,"ion-item-option",5),o.Sb("click",function(){o.bc(t);const n=e.$implicit;return o.Ub().editarLista(n)}),o.Ib(8,"ion-icon",6),o.Jb(),o.Jb(),o.Kb(9,"ion-item-options",7),o.Kb(10,"ion-item-option",8),o.Sb("click",function(){o.bc(t);const n=e.$implicit;return o.Ub().borrarLista(n)}),o.Ib(11,"ion-icon",9),o.Jb(),o.Jb(),o.Jb()}if(2&t){const t=e.$implicit;o.xb(3),o.gc(t.titulo),o.xb(2),o.hc("",t.items.length," items")}}let d=(()=>{class t{constructor(t,e,n){this.deseosService=t,this.router=e,this.alertCtrl=n,this.terminada=!0}ngOnInit(){}listaSeleccionada(t){this.router.navigateByUrl(this.terminada?"/tabs/tab2/agregar/"+t.id:"/tabs/tab1/agregar/"+t.id)}borrarLista(t){this.deseosService.borrarLista(t)}editarLista(t){return Object(i.a)(this,void 0,void 0,function*(){(yield this.alertCtrl.create({cssClass:"my-custom-class",header:"Editar lista",inputs:[{name:"titulo",type:"text",value:t.titulo,placeholder:"Nombre de la lista"}],buttons:[{text:"Cancelar",role:"cancel",handler:()=>{this.lista.closeSlidingItems()}},{text:"Actualizar",handler:e=>{0!==e.titulo.length&&(t.titulo=e.titulo,this.deseosService.guardarStorage(),this.lista.closeSlidingItems())}}]})).present()})}}return t.\u0275fac=function(e){return new(e||t)(o.Hb(s.a),o.Hb(a.g),o.Hb(r.a))},t.\u0275cmp=o.Bb({type:t,selectors:[["app-listas"]],viewQuery:function(t,e){if(1&t&&o.ic(r.s,!0),2&t){let t;o.ac(t=o.Tb())&&(e.lista=t.first)}},inputs:{terminada:"terminada"},decls:3,vars:4,consts:[["color","dark"],[4,"ngFor","ngForOf"],["detail","","color","dark",3,"click"],["slot","end","color","tertiary"],["side","start"],["color","primary",3,"click"],["name","create-outline","slot","icon-only"],["side","end"],["color","danger",3,"click"],["name","close","slot","icon-only"]],template:function(t,e){1&t&&(o.Kb(0,"ion-list",0),o.ec(1,u,12,2,"ion-item-sliding",1),o.Vb(2,"filtroCompletado"),o.Jb()),2&t&&(o.xb(1),o.Zb("ngForOf",o.Wb(2,1,e.deseosService.listas,e.terminada)))},directives:[r.s,c.h,r.q,r.n,r.r,r.u,r.p,r.o,r.l],pipes:[l],styles:[""]}),t})()},Z16M:function(t,e,n){"use strict";n.d(e,"a",function(){return o});class i{constructor(t){this.titulo=t,this.creadaEn=new Date,this.terminada=!1,this.items=[],this.id=(new Date).getTime()}}var r=n("fXoL");let o=(()=>{class t{constructor(){this.listas=[],this.cargarStorage()}crearLista(t){const e=new i(t);return this.listas.push(e),this.guardarStorage(),e.id}borrarLista(t){this.listas=this.listas.filter(e=>e.id!==t.id),this.guardarStorage()}obtenerLista(t){return t=Number(t),this.listas.find(e=>e.id===t)}editarLista(t){}guardarStorage(){localStorage.setItem("data",JSON.stringify(this.listas))}cargarStorage(){this.listas=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},ZaV5:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});const i=async(t,e,n,i,r)=>{if(t)return t.attachViewToDom(e,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>o.classList.add(t)),r&&Object.assign(o,r),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},h3R7:function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=t*e/n-t+"ms",r=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=t*i-t+"ms",o=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},j1ZV:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=n("ofXK"),r=n("TEn/"),o=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=o.Fb({type:t}),t.\u0275inj=o.Eb({factory:function(e){return new(e||t)}}),t})(),a=(()=>{class t{}return t.\u0275mod=o.Fb({type:t}),t.\u0275inj=o.Eb({factory:function(e){return new(e||t)},imports:[[i.b,r.B,s]]}),t})()},mrSG:function(t,e,n){"use strict";function i(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{c(i.next(t))}catch(e){o(e)}}function a(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(s,a)}c((i=i.apply(t,e||[])).next())})}n.d(e,"a",function(){return i})},qULd:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return c}),n.d(e,"e",function(){return a});const i={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{i.selection()},o=()=>{i.selectionStart()},s=()=>{i.selectionChanged()},a=()=>{i.selectionEnd()},c=t=>{i.impact(t)}}}]);