import fastify from "fastify";
import fastifyCors from "@fastify/cors";
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

server.post('/good', {
    schema:{
        body:{
            type:'object',

        }
    }
} , async (request,reply)=>{
    const {name, type, size, price}=request.body
})


server.listen({
    port:3000,
    host:'0.0.0.0'
}).then(()=>{
    return client.connect();
}).catch(err=>console.log(err))