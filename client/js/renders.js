const typesSection=document.querySelector('.filters__section[data-type="filter-types"]')


export const renderTypeCheckboxes=(types)=>{

    types.forEach((type)=>{
        const label=document.createElement('label');

        label.innerHTML=` 
    <label>
        <input type="checkbox" value="lg" name="sizes">
            lg
    </label>`;
    })

}