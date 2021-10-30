// load the module 
let express = require("express");

let app = express();

let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})
// event called which help to receive the data from client application 
io.on("connection",(socket)=> {
    // This code is use to receive the data from server 
    socket.on("obj",(msg)=> {
        console.log(msg);
        // This code is uses to send the data to client 
        socket.emit("obj1","Welcome Client for Socket IO Application");
    })
})
http.listen(9090,()=>console.log("Server running on port number 9090"));