import {getAllTypeRequest, getGoods} from "./api.js";
import {renderGoods, renderTypeCheckboxes} from "./renders.js";

document.addEventListener('DOMContentLoaded',async ()=>{
   const form=document.querySelector('form');
   renderTypeCheckboxes(await getAllTypeRequest());
   renderGoods(await getGoods());
   form.addEventListener('submit', (event)=>{
      event.preventDefault();
   });
   form.addEventListener('change', (event)=>{
      // console.log(event.target)
      const dataStructure={};
      for (let count=0;count<form.elements.length;count++){
         const element= form.elements[count];
      if(element.type==='checkbox'&&element.checked){
      dataStructure[element.name]=dataStructure[element.name] ? [...dataStructure[element.name]]:[element.value];
      }
         if(element.type==='number'&&element.value){
            dataStructure[element.name]=element.value;
         }
      }
   });
   // event target- ссылка на тот елемент, на котором сработало событие
})