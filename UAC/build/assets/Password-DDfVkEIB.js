import{d as g,A as w,C as v,g as b,o as y,w as r,e as a,u as s,m as V,b as t,i as k,h as d,T as x,B as C,D as I}from"./app-Cj3TV9Si.js";import{_ as u,a as c,b as m}from"./Label.vue_vue_type_script_setup_true_lang-BdD3N9mF.js";import{_ as S}from"./AppLayout.vue_vue_type_script_setup_true_lang-BF9AqfV_.js";import{_ as $,a as P}from"./Layout.vue_vue_type_script_setup_true_lang-t0eP4G5U.js";import{_ as N}from"./AppLogoIcon.vue_vue_type_script_setup_true_lang-DoWppsDr.js";import"./useForwardExpose-BtauuGWB.js";import"./RovingFocusGroup-Di-atRew.js";const T={class:"space-y-6"},B={class:"grid gap-2"},E={class:"grid gap-2"},U={class:"grid gap-2"},M={class:"flex items-center gap-4"},h={class:"text-sm text-neutral-600"},G=g({__name:"Password",setup(D){const f=[{title:"Password settings",href:"/settings/password"}],l=w(null),i=w(null),e=v({current_password:"",password:"",password_confirmation:""}),_=()=>{e.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>e.reset(),onError:p=>{p.password&&(e.reset("password","password_confirmation"),l.value instanceof HTMLInputElement&&l.value.focus()),p.current_password&&(e.reset("current_password"),i.value instanceof HTMLInputElement&&i.value.focus())}})};return(p,o)=>(y(),b(S,{breadcrumbs:f},{default:r(()=>[a(s(V),{title:"Password settings"}),a($,null,{default:r(()=>[t("div",T,[a(P,{title:"Update password",description:"Ensure your account is using a long, random password to stay secure"}),t("form",{onSubmit:k(_,["prevent"]),class:"space-y-6"},[t("div",B,[a(s(u),{for:"current_password"},{default:r(()=>o[3]||(o[3]=[d("Current password")])),_:1}),a(s(c),{id:"current_password",ref_key:"currentPasswordInput",ref:i,modelValue:s(e).current_password,"onUpdate:modelValue":o[0]||(o[0]=n=>s(e).current_password=n),type:"password",class:"mt-1 block w-full",autocomplete:"current-password",placeholder:"Current password"},null,8,["modelValue"]),a(m,{message:s(e).errors.current_password},null,8,["message"])]),t("div",E,[a(s(u),{for:"password"},{default:r(()=>o[4]||(o[4]=[d("New password")])),_:1}),a(s(c),{id:"password",ref_key:"passwordInput",ref:l,modelValue:s(e).password,"onUpdate:modelValue":o[1]||(o[1]=n=>s(e).password=n),type:"password",class:"mt-1 block w-full",autocomplete:"new-password",placeholder:"New password"},null,8,["modelValue"]),a(m,{message:s(e).errors.password},null,8,["message"])]),t("div",U,[a(s(u),{for:"password_confirmation"},{default:r(()=>o[5]||(o[5]=[d("Confirm password")])),_:1}),a(s(c),{id:"password_confirmation",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=n=>s(e).password_confirmation=n),type:"password",class:"mt-1 block w-full",autocomplete:"new-password",placeholder:"Confirm password"},null,8,["modelValue"]),a(m,{message:s(e).errors.password_confirmation},null,8,["message"])]),t("div",M,[a(s(N),{disabled:s(e).processing},{default:r(()=>o[6]||(o[6]=[d("Save password")])),_:1},8,["disabled"]),a(x,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:r(()=>[C(t("p",h,"Saved.",512),[[I,s(e).recentlySuccessful]])]),_:1})])],32)])]),_:1})]),_:1}))}});export{G as default};
