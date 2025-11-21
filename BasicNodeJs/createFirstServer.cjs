//1.Import http server

const http= require('http');

//2. create server

const server =  http.createServer((req,res) =>{
    //here come to request
    res.end("Welcom to NodeJs");
});

//3.Spacify a port to listen to client's request

server.listen(3100, ()=>{
    console.log("Server are listing on port 3100...")
});