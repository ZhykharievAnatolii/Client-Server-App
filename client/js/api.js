const HOST='http://localhost:3000';

async function request (url,method='GET',body=null){
    const response= await fetch(`${HOST}${url}`,{
        method,
        body,
    });
    const data= await response.json();
    return data;
};

export const getAllTypeRequest= async ()=>{
    return await request('/types');
};

export const getGoods= async ()=>{
    return await request('/goods');
}