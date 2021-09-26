let url  = require("url");
let urlInfo = "http://localhost:9090/info?name=Raj&age=21";
let urlRef = url.parse(urlInfo,true);
//let urlRef = url.URL(urlInfo);
//console.log(urlInfo)
//console.log(urlRef);
console.log("Protocol "+urlRef.protocol)
console.log("Host "+urlRef.host);
console.log("Host Name "+urlRef.hostname)
console.log("Port Number "+urlRef.port)
console.log("port number "+urlRef.pathname)
console.log(urlRef.query)
let emp = urlRef.query;
console.log("name is "+emp.name)
console.log("age is "+emp.age);

