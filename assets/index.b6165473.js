import{r as j,o as p,c as V,d as v,u as w,a as x,b as h,e as a,t as y,f,g as C,h as N,i as D,w as P,j as g,k as $,l as E,n as I,m as q,F as O,p as A,q as T,s as H,v as L,x as F,y as U,z,A as W,B as G,C as K,D as J,E as Q,G as X,H as Y,I as Z,V as ee}from"./vendor.516874b5.js";const te=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}};te();var S=(n,o)=>{const t=n.__vccOpts||n;for(const[s,e]of o)t[s]=e;return t};const se={};function ne(n,o){const t=j("router-view");return p(),V(t)}var oe=S(se,[["render",ne]]);const re={class:"flex justify-around w-full mb-3 select-none"},ae=v({props:{id:{type:Number,required:!0}},setup(n){const o=n,t=w(),s=x(()=>(o.id+1).toString()),e=x(()=>(o.id-1).toString());function r(){t.push(`/pokemon/${s.value}`)}function i(){t.push(`/pokemon/${e.value}`)}function d(){t.push("/")}return(c,l)=>(p(),h("div",re,[a("div",{class:"w-[100px] text-left cursor-pointer",onClick:i},"#"+y(f(e)),1),a("div",{class:"cursor-pointer",onClick:d},"Search"),a("div",{class:"w-[100px] text-right cursor-pointer",onClick:r},"#"+y(f(s)),1)]))}}),ce={class:"flex items-center justify-center w-screen h-screen"},ie={class:"flex flex-col items-center p-5 text-sm font-light bg-blue-300 rounded-sm shadow-lg w-fit h-fit"},le={class:"text-lg"},ue=v({setup(n){const o=C(),t=N({name:"",id:0}),{id:s,name:e}=D(t),r=x(()=>e.value.split("-").map(c=>c.charAt(0).toUpperCase()+c.slice(1)).join(" "));async function i(d){try{return await(await fetch("https://pokeapi.co/api/v2/pokemon/"+d)).json()}catch{return null}}return P(()=>o.params.name,async d=>{const c=await i(d);Object.assign(t,c)},{immediate:!0}),(d,c)=>{const l=j("router-view");return p(),h("div",ce,[a("div",ie,[g(ae,{id:f(s)},null,8,["id"]),a("div",le,y(f(r)),1),a("div",null,"#"+y(f(s)),1),g(l)])])}}}),pe={class:"text-gray-700"},de={class:"text-gray-700"},_e=v({props:{height:{type:Number,required:!0},weight:{type:Number,required:!0}},setup(n){return(o,t)=>(p(),h("div",null,[a("div",pe,"Height: "+y(n.height),1),a("div",de,"Weight: "+y(n.weight),1)]))}}),he={class:"flex items-center justify-around w-full my-3 select-none"},fe={class:"w-1/3"},me=v({props:{sprites:{type:Object,required:!0}},setup(n){const o=n,t=["front_default","back_default","front_shiny","back_shiny"];function s(){i.value++}function e(){i.value--}const r=x(()=>o.sprites?Object.entries(o.sprites).filter(l=>l[1]!==null&&typeof l[1]=="string"&&t.includes(l[0])).sort((l,u)=>{const _=t.indexOf(l[0]),m=t.indexOf(u[0]);return _===m?0:_<m?-1:1}).map(l=>l[1]):[]),i=$(0),d=x(()=>i.value<r.value.length-1),c=x(()=>i.value>0);return P(()=>o.sprites,async()=>{i.value=0}),(l,u)=>{const _=E("lazy");return p(),h("div",he,[a("div",{onClick:e,class:I(["cursor-pointer",f(c)?"visible":"invisible"])},"<",2),q(a("img",fe,null,512),[[_,f(r)[i.value]]]),a("div",{onClick:s,class:I(["cursor-pointer",f(d)?"visible":"invisible"])},">",2)])}}}),ve={class:"text-gray-700"},ye=v({props:{stats:{type:Array,required:!0}},setup(n){function o(t){if(t==="hp")return"Hp";if(t==="attack")return"Attack";if(t==="defense")return"Defense";if(t==="special-attack")return"Sp Atk";if(t==="special-defense")return"Sp Def";if(t==="speed")return"Speed"}return(t,s)=>(p(),h("div",null,[(p(!0),h(O,null,A(n.stats,(e,r)=>(p(),h("div",{key:r,class:"flex justify-between"},[a("span",ve,y(o(e.stat.name)),1),a("span",null,y(e.base_stat),1)]))),128))]))}});const ge=n=>(T("data-v-b42a644c"),n=n(),H(),n),xe={class:"flex items-center space-x-3"},ke=ge(()=>a("div",{class:"text-gray-700"},"Types:",-1)),be={class:"space-x-2"},we=v({props:{types:{type:Array,required:!0}},setup(n){return(o,t)=>(p(),h("div",xe,[ke,a("div",be,[(p(!0),h(O,null,A(n.types,(s,e)=>(p(),h("span",{class:I(["p-1 font-mono text-white rounded-sm",s.type.name]),key:e},y(s.type.name),3))),128))])]))}});var $e=S(we,[["__scopeId","data-v-b42a644c"]]);const Se={class:"w-[300px] relative"},je={class:"flex flex-col my-8 mx-auto space-y-4 w-[150px]"},Ce=v({setup(n){const o=C(),t=w(),s=N({sprites:{front_default:"",front_shiny:"",back_default:"",back_shiny:""},height:0,weight:0,types:[],stats:[]}),{sprites:e,height:r,weight:i,types:d,stats:c}=D(s);async function l(_){try{return await(await fetch("https://pokeapi.co/api/v2/pokemon/"+_)).json()}catch{return null}}function u(){t.push({name:"second"})}return P(()=>o.params.name,async _=>{const m=await l(_);Object.assign(s,m)},{immediate:!0}),(_,m)=>(p(),h("div",Se,[g(me,{sprites:f(e)},null,8,["sprites"]),a("div",je,[g(_e,{height:f(r),weight:f(i)},null,8,["height","weight"]),g($e,{types:f(d)},null,8,["types"]),g(ye,{stats:f(c)},null,8,["stats"])]),a("div",{class:"absolute inset-y-0 flex items-center cursor-pointer select-none -right-3 animate-debounce-x",onClick:u},">>")]))}});const M=n=>(T("data-v-73820638"),n=n(),H(),n),Ne={class:"relative max-h-full"},Pe={class:"flex flex-col mx-auto my-8 space-y-4"},Ie=M(()=>a("h1",{class:"text-center"},"Evolution Chain",-1)),Oe={key:0,class:"select-none max-h-[400px] overflow-auto"},Ae=["onClick"],Be=M(()=>a("br",null,null,-1)),De=["src"],qe={key:1,class:"text-center"},Te=v({setup(n){const o=w(),t=C(),s=N({}),e=x(()=>Object.keys(s).length>0);L(async()=>{const{name:u}=t.params;await i(u)});function r(u){return`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${u}.png`}async function i(u){try{const m=await(await fetch("https://pokeapi.co/api/v2/pokemon-species/"+u)).json(),B=await(await fetch(m.evolution_chain.url)).json(),R=d(B.chain);Object.assign(s,R)}catch{Object.assign(s,{})}}function d(u){return Object.assign({},{label:u.species.name,id:u.species.url.split("/")[6],isBaby:u.is_baby,expand:!1,children:u.evolves_to.map(m=>d(m))})}function c(u){o.push(`/pokemon/${u}`)}function l(){o.push({name:"first"})}return(u,_)=>{const m=j("blocks-tree");return p(),h("div",Ne,[a("div",Pe,[Ie,f(e)?(p(),h("div",Oe,[g(m,{data:f(s),horizontal:!0,collapsable:!1,props:{label:"label",expand:"expand",children:"children",id:"id"}},{node:F(({data:k})=>[a("div",{class:"cursor-pointer",onClick:B=>c(k.id)},[a("span",null,y(k.label),1),Be,a("img",{src:r(k.id)},null,8,De)],8,Ae)]),_:1},8,["data"])])):(p(),h("div",qe,"Not found!"))]),a("div",{class:"flex items-center w-5 cursor-pointer select-none -left-10 animate-debounce-x",onClick:l},"<<")])}}});var He=S(Te,[["__scopeId","data-v-73820638"]]);const Le=U({id:"main",state:()=>({pokeNames:[]}),getters:{findPokemonByName:n=>o=>{const t=z.exports.go(o,n.pokeNames),s=t.map(e=>z.exports.highlight(e,"<b>","</b>"));return{results:t,highlights:s}}},actions:{async getAllPokemon(){try{const t=(await(await fetch("https://pokeapi.co/api/v2/pokemon?limit=1181")).json()).results.map(s=>s.name);this.$state.pokeNames=t}catch{this.$state.pokeNames=[]}}}});const ze={class:"flex flex-col items-start w-full p-4 space-y-2 cursor-pointer highlight"},Me=["onClick","innerHTML"],Re=v({props:{highlight:{type:Array,required:!0},results:{type:Array,required:!0}},emits:["onSelect"],setup(n,{emit:o}){const t=n;function s(e){o("onSelect",t.results[e])}return(e,r)=>(p(),h("ul",ze,[(p(!0),h(O,null,A(n.highlight,(i,d)=>(p(),h("li",{onClick:c=>s(d),key:d,innerHTML:i},null,8,Me))),128))]))}});var Ve=S(Re,[["__scopeId","data-v-7312c737"]]);const Ee={class:"flex space-x-2 justify-start my-3 mx-auto items-center"},Fe=a("div",null,"Search:",-1),Ue=v({emits:["onSearch"],setup(n,{emit:o}){const t=$("");return W(()=>{o("onSearch",t.value)}),(s,e)=>(p(),h("div",Ee,[Fe,q(a("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>t.value=r),type:"text",class:"p-2 border-none rounded-sm focus:outline-none"},null,512),[[G,t.value]])]))}}),We={class:"flex items-center justify-center w-screen h-screen"},Ge={class:"flex flex-col text-sm bg-blue-300 font-light w-[400px] h-[500px] p-5 items-center space-y-3 rounded-sm shadow-lg"},Ke=v({setup(n){const o=Le(),t=w(),s=$([]),e=$([]),{pokeNames:r}=K(o),i=c=>{if(c&&c.length>0){const{results:l,highlights:u}=o.findPokemonByName(c);l.length>0?(s.value=l.slice(0,10).map(_=>_.target),e.value=u.slice(0,10).map(_=>_!=null?_:"")):(s.value=[],e.value=[])}else s.value=r.value,e.value=[]};function d(c){t.push(`/pokemon/${c}`)}return L(async()=>{await o.getAllPokemon()}),(c,l)=>(p(),h("div",We,[a("div",Ge,[g(Ue,{onOnSearch:i}),g(Ve,{highlight:e.value,results:s.value,onOnSelect:d},null,8,["highlight","results"])])]))}}),Je=[{path:"/",component:Ke},{path:"/pokemon/:name",name:"detail",component:ue,children:[{path:"",name:"first",component:Ce},{path:"evolution",name:"second",component:He}]}],Qe=J({history:Q(),routes:Je}),b=X(oe);b.use(Y());b.use(Z);b.use(ee,{treeName:"blocks-tree"});b.use(Qe);b.mount("#app");