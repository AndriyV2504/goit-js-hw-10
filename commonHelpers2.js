import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";document.querySelector("form").addEventListener("submit",function(e){e.preventDefault();const s=parseInt(e.target.delay.value),r=e.target.state.value;o(s,r).then(t=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,position:"topCenter"})}).catch(t=>{i.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topCenter"})})});function o(e,s){return new Promise((r,t)=>{setTimeout(()=>{s==="fulfilled"?r(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
