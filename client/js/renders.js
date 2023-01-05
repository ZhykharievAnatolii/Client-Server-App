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

export const renderGoods= (goods)=>{
    goods.forEach(({id, name, price})=>{
        const goodItem=document.querySelector('li');
        goodItem.classList.add('content__item')
        goodItem.innerHTML=`
            <h2>
                Title
            </h2>
            <p>43$
            </p>`
    })
}