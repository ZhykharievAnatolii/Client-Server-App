import {getAllTypeRequest} from "./api.js";
import {renderTypeCheckboxes} from "./renders.js";

document.addEventListener('DOMContentLoaded',async ()=>{
   renderTypeCheckboxes(await getAllTypeRequest());
})