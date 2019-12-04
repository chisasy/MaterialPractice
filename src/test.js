
function Addition(a,b){
    a = parseFloat(document.getElementsByClassName("first")[0].value);
    b = parseFloat(document.getElementsByClassName("second")[0].value);        
    document.getElementsByClassName("result")[0].value = a+b;
}

function Subtraction(a,b){
    a = parseFloat(document.getElementsByClassName("first")[1].value);
    b = parseFloat(document.getElementsByClassName("second")[1].value);        
    document.getElementsByClassName("result")[1].value = a-b;
}

function Multiplication(a,b){
    a = parseFloat(document.getElementsByClassName("first")[2].value);
    b = parseFloat(document.getElementsByClassName("second")[2].value);        
    document.getElementsByClassName("result")[2].value = a*b;
}

function Division(a,b){
    a = parseFloat(document.getElementsByClassName("first")[3].value);
    b = parseFloat(document.getElementsByClassName("second")[3].value);        
    document.getElementsByClassName("result")[3].value = a/b;
}