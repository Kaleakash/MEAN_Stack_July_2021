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

// let num = [10,20,30,40,50];
// // 1st way 
// num.forEach(display);      // callback function as a parameter 

// function display(n,i){
//     document.write("<br> Value is "+n+" Index position "+i)
// }

// // 2nd way Es5 style  
// num.forEach(function display(n,i){
//     document.write("<br> Value is "+n+"Index position "+i)
// });

// //3rd way Es6 style 
// num.forEach((n,i)=>document.write("<br/> Value is "+n+" Index position "+i));

// let num = [100,200,300,400,500];
// let result1 = num.find(v=>v==10);       // no element return undefined 
// document.write("<br> Result1 is "+result1)  
// let result2 = num.find(v=>v==200);          // return the value. 
// document.write("<br> Result1 is "+result2)

// let result3 = num.findIndex(v=>v==10);      // no element return -1
// document.write("<br> Result1 is "+result3)
// let result4 = num.findIndex(v=>v==300);        // return index position 
// document.write("<br> Result1 is "+result4)


// let num = [100,200,300,400,500];

// num.forEach(v=>document.write("<br/> Value is "+v));
// num.forEach(v=>document.write("<br/> Value is "+(v+10)));
// num.map(v=>v+10).forEach(v=>document.write("<br/> Value is "+v));
// document.write("<br/>")
// document.write(num);
// document.write("<br/>")
// num = num.map(v=>v+1);
// document.write(num)
