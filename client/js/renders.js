const typesSection=document.querySelector('.filters__section[data-type="filter-types"]');

const goodsList=document.querySelector('.content')

export const renderTypeCheckboxes=(types)=>{

    types.forEach((type)=>{
        const label=document.createElement('label');

        label.innerHTML=` 
    <label>
        <input type="checkbox" value="${type}" name="types">
            ${type}
    </label>`;
        typesSection.append(label)
    })

};

export const renderGoods= (goods, isClearBeforeRender=false)=>{
    if(isClearBeforeRender){
        goodsList.innerHTML='';
    }
    goods.forEach(({id, name, price})=>{
        const goodItem=document.createElement('li');
        goodItem.classList.add('content__item')
        goodItem.innerHTML=`
            <h2>
                ${name}
            </h2>
            <p>
            $${price}
            </p>`
    });
    goodsList.append(goodItem)
};
