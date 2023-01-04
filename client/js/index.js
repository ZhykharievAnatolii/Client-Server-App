import {getAllTypeRequest} from "./api.js";

document.addEventListener('DOMContentLoaded',async ()=>{
   const types= await getAllTypeRequest()
})