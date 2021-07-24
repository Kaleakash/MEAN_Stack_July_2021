var obj
function loadData() {
obj = setInterval("display()",1000)
}
var i=0;
function display(){
    if(i%2==0){
        //document.bgColor="RED";
        document.getElementById("obj").style.color="RED"
        document.getElementById("obj").style.fontSize="20px"
        document.getElementById("m1").src="https://media.gettyimages.com/photos/closeup-of-grapes-growing-in-vineyardmontpeyrouxfrance-picture-id1290114246?k=6&m=1290114246&s=612x612&w=0&h=EpF8AUk7BJfQdxxfO5Lo0m-crv9e1Y_8nR5IPfiMKLc="
    }else {
        document.getElementById("obj").style.color="GREEN"
        document.getElementById("obj").style.fontSize="40px"
        document.getElementById("m1").src="https://media.gettyimages.com/photos/tray-full-of-granny-smiths-picture-id109908841?k=6&m=109908841&s=612x612&w=0&h=ECFTEKnpHpn33mL8-8vGKah7BxceWAMDh-I2W5ItpGQ="
        //document.bgColor="GREEN";
    }
    i++;
}

function stop() {
    clearInterval(obj)
}