import {getAllTypeRequest, getGoods} from "./api.js";
import {renderGoods, renderTypeCheckboxes} from "./renders.js";

document.addEventListener('DOMContentLoaded',async ()=>{
   renderTypeCheckboxes(await getAllTypeRequest());
   renderGoods(await getGoods());
})