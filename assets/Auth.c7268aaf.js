import{i as u,u as i,r as f,j as h}from"./index.add99fa0.js";const z=u("Auth",()=>{const n=i(),e=f(),t=h(()=>({id:"0zzz0z00zz0zzzz00zz0zzzz",cellphone:"09123456789",name:"John Due",profile:"http://localhost:3000/src/assets/icons/avatar.webp",iat:1742008342,exp:Math.floor(Date.now()/1e3)+10}));function r(o){e.value=o,sessionStorage.setItem("access-token",o.accessToken),sessionStorage.setItem("refresh-token",o.refreshToken)}function c(){e.value={accessToken:sessionStorage.getItem("access-token"),refreshToken:sessionStorage.getItem("refresh-token")}}function a(){!!sessionStorage.getItem("access-token")&&!!sessionStorage.getItem("refresh-token")?(c(),t.exp*1e3<Date.now()&&s()):s()}async function s(){e.value=null,sessionStorage.removeItem("access-token"),sessionStorage.removeItem("refresh-token"),n.push("/restaurant-demo/login")}return{token:e,user:t,setToken:r,checkAuth:a,logout:s}});export{z as u};
