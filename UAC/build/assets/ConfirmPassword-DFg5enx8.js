import{d as p,C as c,g as i,o as d,w as t,e as a,b as r,u as s,m as f,i as u,h as n,j as _}from"./app-Cj3TV9Si.js";import{_ as w,a as C,b}from"./Label.vue_vue_type_script_setup_true_lang-BdD3N9mF.js";import{_ as g}from"./AppLogoIcon.vue_vue_type_script_setup_true_lang-DoWppsDr.js";import{L as V,_ as h}from"./AuthLayout.vue_vue_type_script_setup_true_lang-C8FRY_lc.js";import"./useForwardExpose-BtauuGWB.js";const x={class:"space-y-6"},y={class:"grid gap-2"},$={class:"flex items-center"},T=p({__name:"ConfirmPassword",setup(k){const e=c({password:""}),m=()=>{e.post(route("password.confirm"),{onFinish:()=>{e.reset()}})};return(v,o)=>(d(),i(h,{title:"Confirm your password",description:"This is a secure area of the application. Please confirm your password before continuing."},{default:t(()=>[a(s(f),{title:"Confirm password"}),r("form",{onSubmit:u(m,["prevent"])},[r("div",x,[r("div",y,[a(s(w),{htmlFor:"password"},{default:t(()=>o[1]||(o[1]=[n("Password")])),_:1}),a(s(C),{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[0]||(o[0]=l=>s(e).password=l),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(b,{message:s(e).errors.password},null,8,["message"])]),r("div",$,[a(s(g),{class:"w-full",disabled:s(e).processing},{default:t(()=>[s(e).processing?(d(),i(s(V),{key:0,class:"h-4 w-4 animate-spin"})):_("",!0),o[2]||(o[2]=n(" Confirm Password "))]),_:1},8,["disabled"])])])],32)]),_:1}))}});export{T as default};
