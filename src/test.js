
function Calcu(a,b,c){

    for (let i = 0; i < 4; i++) {
        a = parseFloat(document.getElementsByClassName("first")[i].value);
        b = parseFloat(document.getElementsByClassName("second")[i].value); 
        c = document.getElementsByClassName("symbol")[i].innerHTML;
    
        if(c === '+'){
            document.getElementsByClassName("result")[i].value = a+b;
        }
        if(c === '−'){
            document.getElementsByClassName("result")[i].value = a-b;
        }
        if(c === '×'){
            document.getElementsByClassName("result")[i].value = a*b;
        }
        if(c === '÷'){
            document.getElementsByClassName("result")[i].value = a/b;
        }
    }
}