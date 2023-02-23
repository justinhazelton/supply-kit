import{a as q,y as m,f as b,o as d,b as _,j as o,t as r,u as e,F as x,r as C,z as k,A as z,B as N,C as Q,w as S,h as g,i as $,e as B,l as D,D as V}from"./entry.2a899709.js";import{g as A,_ as W}from"./index.eac8b148.js";const F={key:0,class:"quiz"},T={class:"quizInfo"},I={class:"question"},L={class:"score"},M={class:"options p-6 divide-y divide-slate-200"},R=["name","value","disabled"],Y=["disabled"],j={key:1},E=o("h2",null,"You have finished the quiz",-1),P=q({__name:"WeddingQuiz",props:{image:{type:String,required:!0},id:{type:String,required:!0}},setup(v){const i=v;i.id;const n=m([{question:"What colour is the sky?",answer:0,options:[i.id,"Purple","Dinosaur"],selected:null},{question:"What is in the garden?",answer:2,options:["Monkeys","TV","Tomatoes"],selected:null}]),p=m(!1),l=m(0),s=b(()=>{let a=0;return n.value.map(c=>{c.selected==c.answer&&a++}),a}),t=b(()=>{let a=n.value[l.value];return a.index=l.value,a}),f=a=>{n.value[l.value].selected=a.target.value,a.target.value=null},y=()=>{l.value<n.value.length-1?l.value++:p.value=!0};return(a,c)=>p.value?(d(),_("section",j,[E,o("p",null,"Your score is "+r(e(s))+" / "+r(n.value.length),1)])):(d(),_("section",F,[o("div",T,[o("div",I,r(e(t).question),1),o("div",L,"Score "+r(e(s))+" / "+r(n.value.length),1)]),o("div",M,[(d(!0),_(x,null,C(e(t).options,(h,u)=>(d(),_("label",{class:k(["flex py-4 first:pt-0 last:pb-0 hover:bg-blue-700",`option ${e(t).selected==u?u==e(t).answer?"correct":"wrong":""} ${e(t).selected!=null&&u!=e(t).selected?"disabled":""}`]),key:u},[z(o("input",{type:"radio",name:e(t).index,value:u,"onUpdate:modelValue":c[0]||(c[0]=w=>e(t).selected=w),disabled:e(t).selected,onChange:f},null,40,R),[[N,e(t).selected]]),o("span",null,r(h),1)],2))),128))]),o("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:y,disabled:!e(t).selected},r(e(t).index==n.value.length-1?"Finish":e(t).selected==null?"Select an option":"Next question"),9,Y)]))}}),H=q({__name:"[id]",async setup(v){let i,n;const p=Q(),l=A`
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
  `,{data:s,error:t}=([i,n]=S(()=>B(l,{id:p.params.id})),i=await i,n(),i);return(f,y)=>{const a=D,c=W,h=P;return d(),_("div",null,[g(a,{to:"/",class:"ml-3"},{default:$(()=>[V("Back")]),_:1}),g(c,{id:e(s).character.id,name:e(s).character.name,image:e(s).character.image,status:e(s).character.status,species:e(s).character.species,location:e(s).character.location.name},null,8,["id","name","image","status","species","location"]),g(h,{id:e(s).character.id,image:e(s).character.image,location:e(s).character.location.name},null,8,["id","image","location"])])}}});export{H as default};
