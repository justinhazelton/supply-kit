import{a as b,y as h,b as y,o as d,e as p,h as a,t as r,u as e,F as x,r as k,z as C,A as z,B as N,C as Q,k as S,f,w as B,l as D,j as V,D as $}from"./entry.f2018f88.js";import{g as A}from"./index.d84e033b.js";const W={key:0,class:"quiz"},F={class:"quizInfo"},T={class:"question"},I={class:"score"},L={class:"options p-6 divide-y divide-slate-200"},M=["name","value","disabled"],R=["disabled"],Y={key:1},j=a("h2",null,"You have finished the quiz",-1),E=b({__name:"WeddingQuiz",props:{image:{type:String,required:!0},id:{type:String,required:!0}},setup(m){const o=m;o.id;const n=h([{question:"What colour is the sky?",answer:0,options:[o.id,"Purple","Dinosaur"],selected:null},{question:"What is in the garden?",answer:2,options:["Monkeys","TV","Tomatoes"],selected:null}]),_=h(!1),l=h(0),u=y(()=>{let s=0;return n.value.map(i=>{i.selected==i.answer&&s++}),s}),t=y(()=>{let s=n.value[l.value];return s.index=l.value,s}),v=s=>{n.value[l.value].selected=s.target.value,s.target.value=null},g=()=>{l.value<n.value.length-1?l.value++:_.value=!0};return(s,i)=>_.value?(d(),p("section",Y,[j,a("p",null,"Your score is "+r(e(u))+" / "+r(n.value.length),1)])):(d(),p("section",W,[a("div",F,[a("div",T,r(e(t).question),1),a("div",I,"Score "+r(e(u))+" / "+r(n.value.length),1)]),a("div",L,[(d(!0),p(x,null,k(e(t).options,(q,c)=>(d(),p("label",{class:C(["flex py-4 first:pt-0 last:pb-0 hover:bg-blue-700",`option ${e(t).selected==c?c==e(t).answer?"correct":"wrong":""} ${e(t).selected!=null&&c!=e(t).selected?"disabled":""}`]),key:c},[z(a("input",{type:"radio",name:e(t).index,value:c,"onUpdate:modelValue":i[0]||(i[0]=w=>e(t).selected=w),disabled:e(t).selected,onChange:v},null,40,M),[[N,e(t).selected]]),a("span",null,r(q),1)],2))),128))]),a("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:g,disabled:!e(t).selected},r(e(t).index==n.value.length-1?"Finish":e(t).selected==null?"Select an option":"Next question"),9,R)]))}}),G=b({__name:"[id]",async setup(m){let o,n;const _=Q(),l=A`
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
  `,{data:u,error:t}=([o,n]=S(()=>D(l,{id:_.params.id})),o=await o,n(),o);return(v,g)=>{const s=V,i=E;return d(),p("div",null,[f(s,{to:"/",class:"ml-3"},{default:B(()=>[$("Back")]),_:1}),f(i,{id:e(u).character.id,image:e(u).character.image,location:e(u).character.location.name},null,8,["id","image","location"])])}}});export{G as default};
