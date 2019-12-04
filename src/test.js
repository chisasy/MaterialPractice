
function Calcu(a,b,c){

    for (let i = 0; i < 4; i++) {
        a = parseFloat(document.getElementsByClassName("first")[i].value);
        b = parseFloat(document.getElementsByClassName("second")[i].value); 
        c = document.getElementsByClassName("symbol")[i].innerHTML;
    
        if(c === '+'){
            const check = document.getElementsByClassName("result")[i].value = a+b;
            if(check > 100){
                document.getElementsByClassName("check")[i].innerHTML = 'OK';
            }else{
                document.getElementsByClassName("check")[i].innerHTML = 'NG';
                document.getElementsByClassName("check")[i].style.backgroundColor = "red";
            }
        }
        if(c === '−'){
            const check = document.getElementsByClassName("result")[i].value = a-b;
            if(check > 100){
                document.getElementsByClassName("check")[i].innerHTML = 'OK';
            }else{
                document.getElementsByClassName("check")[i].innerHTML = 'NG';
                document.getElementsByClassName("check")[i].style.backgroundColor = "red";
            }
        }
        if(c === '×'){
            const check = document.getElementsByClassName("result")[i].value = a*b;
            if(check > 100){
                document.getElementsByClassName("check")[i].innerHTML = 'OK';
            }else{
                document.getElementsByClassName("check")[i].innerHTML = 'NG';
                document.getElementsByClassName("check")[i].style.backgroundColor = "red";
            }
        }
        if(c === '÷'){
            const check = document.getElementsByClassName("result")[i].value = a/b;
            if(check > 100){
                document.getElementsByClassName("check")[i].innerHTML = 'OK';
            }else{
                document.getElementsByClassName("check")[i].innerHTML = 'NG';
                document.getElementsByClassName("check")[i].style.backgroundColor = "red";
            }
        }
    }
}