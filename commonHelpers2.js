import"./assets/modulepreload-polyfill-ec808ebb.js";const e=document.querySelector(".feedback-form"),t="feedback-form-state",o=JSON.parse(localStorage.getItem(t));o&&(e.elements.email.value=o.email||"",e.elements.message.value=o.message||"");e.addEventListener("input",()=>{const a={email:e.elements.email.value,message:e.elements.message.value};localStorage.setItem(t,JSON.stringify(a))});e.addEventListener("submit",a=>{a.preventDefault(),console.log("Data submitted:",JSON.parse(localStorage.getItem(t))),e.reset(),localStorage.removeItem(t)});
//# sourceMappingURL=commonHelpers2.js.map
