import{a as _,b as q,r as C,o as n,e as c,f as m,w,u as p,h as s,t as r,i as k,j as N,F as v,k as B,l as b,c as D}from"./entry.f620863f.js";import{g as L}from"./index.db1d73c7.js";const $={class:"flex m-3 bg-gray-300 rounded-xl"},A={class:"m-3"},F={class:"text-xl mb-3"},I=_({__name:"CharacterCard",props:{name:{type:String,required:!0},image:{type:String,required:!0},status:{type:String,required:!0},id:{type:String,required:!0},species:{type:String,required:!0},location:{type:String,required:!0}},setup(e){const t=e,a=q(()=>t.status==="Dead"?{grayscale:!0}:{});return(o,i)=>{const u=C("NuxtImg"),l=k;return n(),c("div",$,[m(l,{to:`/weddings/${e.id}`},{default:w(()=>[m(u,{src:e.image,width:"200",height:"200",class:"rounded-xl",modifiers:p(a)},null,8,["src","modifiers"]),s("div",A,[s("h3",F,r(e.name),1),s("p",null,"Status: "+r(e.status),1),s("p",null,"Species: "+r(e.species),1),s("p",null,"Location: "+r(e.location),1)])]),_:1},8,["to"])])}}}),V={class:"flex flex-wrap"},Q=_({__name:"index",async setup(e){let t,a;const o=L`
  query getCharacters {
    characters {
      results {
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
  }
  `,{data:i}=([t,a]=N(()=>b(o)),t=await t,a(),t);return(u,l)=>{const g=I;return n(),c("div",V,[(n(!0),c(v,null,B(p(i).characters.results,({id:d,name:h,image:x,status:y,species:f,location:S})=>(n(),D(g,{key:d,id:d,name:h,image:x,status:y,species:f,location:S.name},null,8,["id","name","image","status","species","location"]))),128))])}}});export{Q as default};
