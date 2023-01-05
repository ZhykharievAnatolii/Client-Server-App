import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyMultipart from "@fastify/multipart";
import pg from "pg";

const {Client}=pg;
const server=fastify({
    logger:true,

});
const client=new Client({
    user:"myuser",
    password:"mypass",
    database:"sales",
    port:5432,
    host:"localhost",
});
server.register(fastifyCors);
server.register(fastifyMultipart,{
    addToBody:true,
});


server.post('/good', {
    schema:{
        body:{
            type:'object',
            properties:{
            price:{
                type:'number',
                minimum:0
            },
                name:{
                type:'string',
                    minLength:4,
                    maxLength:30
                },
                size:{
                enum:['sm','lg','md']
                },
                type:{
                type:'string',
                    minLength: 4,
                    maxLength: 40
                }
            },
            required:['price','size','type','name']
        }
    }
} , async (request,reply)=>{
    const {name, type, size, price}=request.body

    await client.query('INSERT INTO goods(name, size, type, price) VALUES ($1, $2, $3, $4)'[name, size, type, price]);
    reply.status(200).send({info:"success"})

}
);
server.get('/goods',{
    schema:{
        query:{
            type:'object'
        }
    }
}, async (request,reply)=>{
    const {query:{priceFrom, priceTo, types, sizes}}= request();
    const {rows:goods}= await client.query('SELECT * FROM goods' );
    // Object.entries(query).reduce();
    const result= goods.filter((good)=>{
        if(priceFrom){
            return good.price>+priceFrom
        }
        return true;
    }).filter((good)=>{
        if(priceTo){
            return good.price<+priceTo;
        }
        return true;
    })
        .filter((good)=>{
            if(sizes){
                return sizes.split(',').includes(good.size)
            }
            return true;
        }) .filter((good)=>{
            if(types){
                return types.split(',').includes(good.type)
            }
            return true;
        })
    reply.send(result);
})
server.get('/types', async (request, reply)=>{
    const{rows}= await client.query('SELECT type FROM goods');
    reply.send(rows.map(({type})=> type
    ))
})

server.listen({
    port:3000,
    host:'0.0.0.0'
}).then(()=>{
    return client.connect();
}).catch(err=>console.log(err))