//let num = [10,20,30,40,50];
// document.write("<br/> All elements are "+num);
// document.write("<br/> All elements are "+num.join("-"));
// document.write("<br/> Get element using index position "+num[0])
// document.write("<br/> Get element using index position "+num[1]);
// document.write("<br/>using normal for loop<br/>");
// let len = num.length
// for(let i=1;i<len;i=i+2){
//     document.write("<br/> Value is "+num[i]);
// }

// document.write("<br> for in loop<br/>")
// for(let i in num){          // index position 
//     document.write("<br> Index position "+i+" value is "+num[i])
// }

// document.write("<br/> for of loop<br/>")
// for(let n of num){          // directly get value 
//     document.write("<br> Value "+n);
// }

let num = [10,20,30,40,50];
// 1st way 
num.forEach(display);      // callback function as a parameter 

function display(n,i){
    document.write("<br> Value is "+n+" Index position "+i)
}

// 2nd way Es5 style  
num.forEach(function display(n,i){
    document.write("<br> Value is "+n+"Index position "+i)
});

//3rd way Es6 style 
num.forEach((n,i)=>document.write("<br/> Value is "+n+" Index position "+i));





