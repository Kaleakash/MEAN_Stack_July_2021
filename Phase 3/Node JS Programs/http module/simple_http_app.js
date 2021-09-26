let http = require("http");
let server = http.createServer(function(req,res){

        res.end("Welcome to Simple Http Client Application");
});

server.listen(9090,()=>console.log("Server running on port number 9090"));

