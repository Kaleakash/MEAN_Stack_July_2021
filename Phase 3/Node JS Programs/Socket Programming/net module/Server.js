let net = require("net");
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let server = net.createServer();
server.on("connection",(socket)=> {
    console.log("Client send the request"); // This code execute if any client send the req with port number 9191
    socket.on("data",(msg)=> {      // this method event generat when client send data 
        console.log(msg.toString());       // to receive the data we can use msg variable. 
    })

    r1.on("line",(data)=> {
        socket.write(`From Server : ${data}`);
    })
});

server.listen(9191,()=>console.log("Sever running on port numbeer 9191"))