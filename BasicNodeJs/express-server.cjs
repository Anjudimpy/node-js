const express = require('express');

//create server

const server = express();

//handle default request

server.get('/', (req,res)=>{
    res.send('Welcome to Express Server')
});

server.listen(3100, ()=>{
    console.log("Server are listing on 3100")
})