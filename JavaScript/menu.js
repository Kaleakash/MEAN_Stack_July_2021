
function addData() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value; 
    //alert("Event fired");
    //This code is use to create the p tag
    var myPTag = document.createElement("p");
    //This code is use to create the content for any tags 
    //var myPTagContent = document.createTextNode("Welcome to JavaScript");
    var myPTagContent = document.createTextNode("Name is "+name+", Age is "+age);
    // Adding the attribute for p tag
    myPTag.setAttribute("style","color:white;font-size:24px;");
    if(age>30){
    myPTag.setAttribute("class","myClass");
    } else {
        myPTag.setAttribute("class","myClass1");    
    }

    var deleteNode = document.createElement("a");
    var deleteNodeContent = document.createTextNode("X");
    deleteNode.setAttribute("href","#");
    deleteNode.setAttribute("onClick","deleteData()");
    deleteNode.appendChild(deleteNodeContent);
    //Add the cotent to p tag;
    myPTag.appendChild(myPTagContent);
    myPTag.appendChild(deleteNode);

    // <a href="#" onClick="deleteData()">X</a>

    document.getElementById("main").appendChild(myPTag);
}

function deleteData(myPTag) {
    console.log("delete fun called..");
    console.log(myPTag)
}

/*
<p style="color:red;font-size:24px" class="myClass">Name is Raj, Age is 21</p>

*/