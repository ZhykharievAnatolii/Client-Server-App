import fastify from "fastify";
import fastifyCors from "@fastify/cors";


const server=fastify({
    logger:true,

});
server.listen({
    port:3000,
    host:'0.0.0.0'
})