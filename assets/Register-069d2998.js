import{_ as v,i as r,u as b,o as u,c as d,b as e,j as p,v as _,t as w,k as x,F as k,n as f,m as h,G as y,q as I,p as S,f as A}from"./index-683a7df7.js";const n=o=>(S("data-v-605b461e"),o=o(),A(),o),C=n(()=>e("head",null,[e("meta",{charset:"UTF-8"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("title",null,"Login form"),e("link",{rel:"stylesheet",href:"https://www.unpkg.com/boxicons@2.1.4/css/boxicons.min.css"})],-1)),G={class:"wrapper"},P=n(()=>e("h1",null,"Create an Account",-1)),R={class:"input-box"},U=n(()=>e("i",{class:"bx bxs-user"},null,-1)),V={class:"input-box"},W=n(()=>e("i",{class:"bx bxs-lock-alt"},null,-1)),B={key:0},E={__name:"Register",setup(o){const l=r(""),a=r(""),i=b(),g=()=>{f(h(),l.value,a.value).then(t=>{console.log("Successful"),i.push("/product")}).catch(t=>{console.log(t.code)})},m=()=>{const t=new y;I(h(),t).then(s=>{console.log(s.user),i.push("/product")}).catch(s=>{console.log(s.code)})};return(t,s)=>(u(),d(k,null,[C,e("body",null,[e("div",G,[P,e("div",R,[p(e("input",{type:"text",placeholder:"Email","onUpdate:modelValue":s[0]||(s[0]=c=>l.value=c)},null,512),[[_,l.value]]),U]),e("div",V,[p(e("input",{type:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=c=>a.value=c)},null,512),[[_,a.value]]),W]),t.errMsg?(u(),d("p",B,w(t.errMsg),1)):x("",!0),e("button",{class:"btn",onClick:g},"Submit"),e("div",{class:"register-link"},[e("button",{class:"btn",onClick:m},"Sign In With Google")])])])],64))}},M=v(E,[["__scopeId","data-v-605b461e"]]);export{M as default};
