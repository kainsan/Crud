import{_ as m,j as r,u as b,o as u,c as d,b as e,k as p,v as h,t as g,l as w,d as f,w as k,m as x,F as y,n as I,s as S,e as V,R as N,p as E,f as F}from"./index-48992bb4.js";const a=o=>(E("data-v-70ac64cc"),o=o(),F(),o),L=a(()=>e("head",null,[e("meta",{charset:"UTF-8"}),e("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e("title",null,"Login form"),e("link",{rel:"stylesheet",href:"https://www.unpkg.com/boxicons@2.1.4/css/boxicons.min.css"})],-1)),P={class:"wrapper"},R=a(()=>e("h1",null,"Sign in Account",-1)),U={class:"input-box"},A=a(()=>e("i",{class:"bx bxs-user"},null,-1)),B={class:"input-box"},C=a(()=>e("i",{class:"bx bxs-lock-alt"},null,-1)),T={key:0},D=a(()=>e("div",{class:"remember-forgot"},[e("label",null,[e("input",{type:"checkbox"})]),e("a",{href:"#"},"Forgot Password ?")],-1)),M={class:"register-link"},W={class:"btn"},j={__name:"Login",setup(o){const l=r(""),n=r(""),_=b(),t=r(""),v=()=>{const c=I();S(c,l.value,n.value).then(s=>{console.log("Successful signed in"),console.log(c.currentUser),_.push("/product")}).catch(s=>{switch(console.log(s.code),s.code){case"auth/invalid-email":t.value="Invalid email";break;case"auth/user-not-found":t.value="No acc found";break;case"auth/wrong-password":t.value="Wrong pass";break;case"auth/invalid-email":t.value="Invalid email";break;default:t.value="Email or Pass was incorrect ";break}})};return(c,s)=>(u(),d(y,null,[L,e("body",null,[e("div",P,[R,e("div",U,[p(e("input",{type:"text",placeholder:"Email","onUpdate:modelValue":s[0]||(s[0]=i=>l.value=i)},null,512),[[h,l.value]]),A]),e("div",B,[p(e("input",{type:"password",placeholder:"Password","onUpdate:modelValue":s[1]||(s[1]=i=>n.value=i)},null,512),[[h,n.value]]),C]),t.value?(u(),d("p",T,g(t.value),1)):w("",!0),D,e("button",{class:"btn",onClick:v},"Submit"),e("div",M,[e("button",W,[f(x(N),{to:"/register"},{default:k(()=>[V("Register")]),_:1})])])])])],64))}},z=m(j,[["__scopeId","data-v-70ac64cc"]]);export{z as default};
