function loadData(){
let obj = document.getElementById("data");
fetch("https://jsonplaceholder.typicode.com/todos").
then(res=>res.json()).
then(result=>{
    let info = result.map(e=>e.id+""+e.title+"<br/>");
    obj.innerHTML=info;
}).
catch(error=>console.log("Error "+error));
}
// fetch("http://numbersapi.com/4").
// then(res=>res.text()).
// then(result=>console.log(result)).
// catch(error=>console.log("Error "+error));