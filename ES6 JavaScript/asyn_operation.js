document.write("<br/>1st Statement")

// setTimeout(()=>{
//     document.getElementById("obj").innerHTML="2nd Statement";
// },1000);
var i=0;
setInterval(()=> {
    document.getElementById("obj").innerHTML="2nd Statement "+i;
    console.log("value of i is "+i)
    i++;
},1000);
document.write("<br/>3rd Statement")

