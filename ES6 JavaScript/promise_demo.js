//User defined promise using ES5 style 
var a=true;
var obj1 = new Promise(function(resolve,reject){
        if(a==true){
            resolve("promise resolved")
        }else {
            reject("promise rejectd")
        }
});

obj1.then(data=>document.write("Then called..."+data)).
catch(error=>document.write("catch called.."+error))
//User defined promise using ES6 style 

let obj2 = new Promise((resolve,reject)=> {
        reject("Promise rejected")
})

obj2.then(data=>document.write("Then called.")).
catch(error=>document.write("Catch called.. "))