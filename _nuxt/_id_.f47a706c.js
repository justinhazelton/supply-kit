import{a as q,y as m,b,o as d,e as p,h as o,t as r,u as e,F as w,k as C,z as k,A as z,B as Q,C as N,j as S,f as v,w as $,l as B,i as D,r as V,D as A}from"./entry.f5fc61da.js";import{g as W}from"./index.022540cf.js";const F={key:0,class:"quiz"},T={class:"quizInfo"},I={class:"question"},L={class:"score"},M={class:"options p-6 divide-y divide-slate-200"},R=["value","disabled"],Y=["disabled"],j={key:1},E=o("h2",null,"You have finished the quiz",-1),P=q({__name:"WeddingQuiz",props:{image:{type:String,required:!0},id:{type:String,required:!0}},setup(g){const a=g;a.id;const n=m([{question:"What colour is the sky? heheheh",answer:0,index:0,options:[a.id,"Purple","Dinosaur"],selected:null},{question:"What is in the garden?",answer:2,options:["Monkeys","TV","Tomatoes"],selected:null}]),_=m(!1),i=m(0),u=b(()=>{let s=0;return n.value.map(l=>{l.selected==l.answer&&s++}),s}),t=b(()=>{let s=n.value[i.value];return s.index=i.value,console.log(`Question ${s.index}`),s}),y=s=>{n.value[i.value].selected=s.target.value,s.target.value=null},f=()=>{i.value<n.value.length-1?i.value++:_.value=!0};return(s,l)=>_.value?(d(),p("section",j,[E,o("p",null,"Your score is "+r(e(u))+" / "+r(n.value.length),1)])):(d(),p("section",F,[o("div",T,[o("div",I,r(e(t).question),1),o("div",L,"Score "+r(e(u))+" / "+r(n.value.length),1)]),o("div",M,[(d(!0),p(w,null,C(e(t).options,(h,c)=>(d(),p("label",{class:k(["flex py-4 first:pt-0 last:pb-0 hover:bg-blue-700",`option ${e(t).selected==c?c==e(t).answer?"correct":"wrong":""} ${e(t).selected!=null&&c!=e(t).selected?"disabled":""}`]),key:c},[z(o("input",{type:"radio",name:"getCurrentQuestion.index",value:c,"onUpdate:modelValue":l[0]||(l[0]=x=>e(t).selected=x),disabled:e(t).selected,onChange:y},null,40,R),[[Q,e(t).selected]]),o("span",null,r(h),1)],2))),128))]),o("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:f,disabled:!e(t).selected},r(e(t).index==n.value.length-1?"Finish":e(t).selected==null?"Select an option":"Next question"),9,Y)]))}}),H=q({__name:"[id]",async setup(g){let a,n;const _=N(),i=W`
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
  `,{data:u,error:t}=([a,n]=S(()=>B(i,{id:_.params.id})),a=await a,n(),a);return(y,f)=>{const s=D,l=P,h=V("Quiz");return d(),p("div",null,[v(s,{to:"/",class:"ml-3"},{default:$(()=>[A("Back")]),_:1}),v(l,{id:e(u).character.id,image:e(u).character.image,location:e(u).character.location.name},null,8,["id","image","location"]),v(h)])}}});export{H as default};
