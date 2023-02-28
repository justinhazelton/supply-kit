import{a as _,b as q,o as r,e as c,f as m,w as C,u as p,h as s,t as n,i as w,j as k,k as B,F as N,r as $,l as b,c as v}from"./entry.1f611a9d.js";import{g as D}from"./index.19b79e17.js";const L={class:"flex m-3 bg-gray-300 rounded-xl"},A={class:"m-3"},F={class:"text-xl mb-3"},V=_({__name:"CharacterCard",props:{name:{type:String,required:!0},image:{type:String,required:!0},status:{type:String,required:!0},id:{type:String,required:!0},species:{type:String,required:!0},location:{type:String,required:!0}},setup(e){const t=e,a=q(()=>t.status==="Dead"?{grayscale:!0}:{});return(o,i)=>{const u=w,l=k;return r(),c("div",L,[m(l,{to:`/weddings/${e.id}`},{default:C(()=>[m(u,{src:e.image,width:"200",height:"200",class:"rounded-xl",modifiers:p(a)},null,8,["src","modifiers"]),s("div",A,[s("h3",F,n(e.name),1),s("p",null,"Status: "+n(e.status),1),s("p",null,"Species: "+n(e.species),1),s("p",null,"Location: "+n(e.location),1)])]),_:1},8,["to"])])}}}),j={class:"flex flex-wrap"},Q=_({__name:"index",async setup(e){let t,a;const o=D`
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
  `,{data:i}=([t,a]=B(()=>b(o)),t=await t,a(),t);return(u,l)=>{const g=V;return r(),c("div",j,[(r(!0),c(N,null,$(p(i).characters.results,({id:d,name:h,image:x,status:y,species:f,location:S})=>(r(),v(g,{key:d,id:d,name:h,image:x,status:y,species:f,location:S.name},null,8,["id","name","image","status","species","location"]))),128))])}}});export{Q as default};
