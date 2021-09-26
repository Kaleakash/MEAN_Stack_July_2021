let http = require("http");
let urlInfo = require("url");
let loginPage = `
        <html>
                <head>

                </head>
                <body>
                        <h2>Login Page</h2>
                        <form action="checkLogin">
                        <label>UserName</label>
                        <input type="text" name="user"/><br/>
                        <label>Password</label>
                        <input type="password" name="pass"/><br/>
                        <input type="submit"/>
                        <input type="reset"/>
                        </form>
                </body>
        </html>
`
let indexPage =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Node JS http module</h2>
    <a href="login">Login Page</a>
    <a href="contactus">Contact Us</a>
    <a href="aboutus">About Us</a>
</body>
</html>
`

let server = http.createServer((req,res)=> {
          let urlRef =  urlInfo.parse(req.url,true);
          res.setHeader("content-type","text/html");    // response consider as html format.
          if(urlRef.pathname=="/aboutus"){
              res.write("<h2>Welcome to About us Page</h2>")
          }else if(urlRef.pathname=="/contactus"){
              res.write("<h2>Welcome to ContactUs Page</h2>")
          }else if(urlRef.pathname=="/login"){
              //res.write("<font color=red>Welcome to Login page</font>")
              res.write(loginPage);
          } else if(urlRef.pathname=="/checkLogin"){
                    let login = urlRef.query;
                    if(login.user=="Raj" && login.pass=="123"){
                            res.write("Successfully Login!")
                    }else {
                            res.write("Failure try once again!")
                    }
                    //res.write("Client submit form");
          }else {
              //res.write("Error! no Page found")
              res.write(indexPage);
          }
          res.end();        // end the connection 
});

server.listen(9090,()=>console.log("Server running on port number 9090"))
