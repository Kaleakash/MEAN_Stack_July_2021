function add(a,b){
    var sum = a+b;
    return sum;
}
function sub(a,b){
    var sub1 = a-b;
    return sub1;
}

function numberOfArgumentLength() {
    var leng = numberOfArgumentLength.arguments.length;
    return leng;   
}

function sumOfNumber() {
    var leng = sumOfNumber.arguments.length;
    var sum  = 0;
    for(i=0;i<leng;i++){
        sum = sum +sumOfNumber.arguments[i];
    }
    return sum;
}

function bonus(id,name,salary,desg){
    switch(desg){
        case "Manager" :salary = salary + 5000;
                        break;
        case "Developer": salary = salary +3000;
                        break;
        case "Tester" :salary = salary +1500;
                        break;
        default :    salary = salary +500;
                        break;
    }
    return salary;   
}