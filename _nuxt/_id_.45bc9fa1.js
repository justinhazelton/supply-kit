import{a as b,y as h,b as y,o as d,e as p,h as o,t as r,u as e,F as w,r as k,z as C,A as z,B as Q,C as N,k as S,f,w as $,l as B,j as D,D as V}from"./entry.73ca0e0d.js";import{g as A}from"./index.ab6c8e04.js";const W={key:0,class:"quiz"},F={class:"quizInfo"},T={class:"question"},I={class:"score"},L={class:"options p-6 divide-y divide-slate-200"},M=["name","value","disabled"],R=["disabled"],Y={key:1},j=o("h2",null,"You have finished the quiz",-1),E=b({__name:"WeddingQuiz",props:{image:{type:String,required:!0},id:{type:String,required:!0}},setup(m){const a=m;a.id;const n=h([{question:"What colour is the sky? heheheh",answer:0,options:[a.id,"Purple","Dinosaur"],selected:null},{question:"What is in the garden?",answer:2,options:["Monkeys","TV","Tomatoes"],selected:null}]),_=h(!1),l=h(1),u=y(()=>{let s=0;return n.value.map(i=>{i.selected==i.answer&&s++}),s}),t=y(()=>{let s=n.value[l.value];return s.index=l.value,console.log(`Question ${s.index}`),s}),v=s=>{n.value[l.value].selected=s.target.value,s.target.value=null},g=()=>{l.value<n.value.length-1?l.value++:_.value=!0};return(s,i)=>_.value?(d(),p("section",Y,[j,o("p",null,"Your score is "+r(e(u))+" / "+r(n.value.length),1)])):(d(),p("section",W,[o("div",F,[o("div",T,r(e(t).question),1),o("div",I,"Score "+r(e(u))+" / "+r(n.value.length),1)]),o("div",L,[(d(!0),p(w,null,k(e(t).options,(q,c)=>(d(),p("label",{class:C(["flex py-4 first:pt-0 last:pb-0 hover:bg-blue-700",`option ${e(t).selected==c?c==e(t).answer?"correct":"wrong":""} ${e(t).selected!=null&&c!=e(t).selected?"disabled":""}`]),key:c},[z(o("input",{type:"radio",name:e(t).index,value:c,"onUpdate:modelValue":i[0]||(i[0]=x=>e(t).selected=x),disabled:e(t).selected,onChange:v},null,40,M),[[Q,e(t).selected]]),o("span",null,r(q),1)],2))),128))]),o("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:g,disabled:!e(t).selected},r(e(t).index==n.value.length-1?"Finish":e(t).selected==null?"Select an option":"Next question"),9,R)]))}}),G=b({__name:"[id]",async setup(m){let a,n;const _=N(),l=A`
query getCharacter($id: ID!) {
  character(id: $id) {
      name
      image
      status
      id
      species
      location {
        name
      }
    }
}
  `,{data:u,error:t}=([a,n]=S(()=>B(l,{id:_.params.id})),a=await a,n(),a);return(v,g)=>{const s=D,i=E;return d(),p("div",null,[f(s,{to:"/",class:"ml-3"},{default:$(()=>[V("Back")]),_:1}),f(i,{id:e(u).character.id,image:e(u).character.image,location:e(u).character.location.name},null,8,["id","image","location"])])}}});export{G as default};
