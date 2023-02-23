import{g as p,_ as d}from"./index.eac8b148.js";import{a as f,w as h,b as r,F as y,r as g,u as x,e as C,o as a,c as k}from"./entry.2a899709.js";const w={class:"flex flex-wrap"},v=f({__name:"index",async setup(q){let e,s;const n=p`
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
  `,{data:c}=([e,s]=h(()=>C(n)),e=await e,s(),e);return(B,A)=>{const o=d;return a(),r("div",w,[(a(!0),r(y,null,g(x(c).characters.results,({id:t,name:i,image:l,status:_,species:m,location:u})=>(a(),k(o,{key:t,id:t,name:i,image:l,status:_,species:m,location:u.name},null,8,["id","name","image","status","species","location"]))),128))])}}});export{v as default};
