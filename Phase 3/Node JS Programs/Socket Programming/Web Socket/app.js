// load the express module 
let express = require("express");
// create the reference of express module 
let app = express();
// we have to load the express-ws module 
// create the reference of express-ws with the help of express reference module 
let ws = require("express-ws")(app);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

app.ws("/",(socket,req)=> {
    // Event generate to recevive the message from Client Application 
    socket.on("message",(msg)=> {
        let dd = new Date();
        console.log(msg);
        // msg can be Q? base upon the Common Q
        // Server application response for us. 
        // send the data to web socket client application
        socket.send("From WS-Sever : Welcome Web Socket application!"+dd);
    })
})

app.listen(9090,()=>console.log("Server running on port number 9090"))