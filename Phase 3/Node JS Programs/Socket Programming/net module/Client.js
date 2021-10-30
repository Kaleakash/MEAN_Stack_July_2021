let net = require("net");
let readline = require("readline");
let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let client = net.createConnection(9191,"127.0.0.1",()=> {
    console.log("Client Send the reqeust to Server");       // it display in client side only 
    client.write("Hello Server, I am Client!")  // Client application send the data to server 
})
r1.on("line",(input)=> {
    client.write(`From Client : ${input}`);
})
client.on("data",(msg)=> {      // this method event generat when client send data 
    console.log(msg.toString());       // to receive the data we can use msg variable. 
})