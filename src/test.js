function Calcu(){

    let a = document.getElementsByClassName("first");
    let b = document.getElementsByClassName("second");
    let s = document.getElementsByClassName("symbol");
    let r = document.getElementsByClassName("result");

    for (let i = 0; i < a.length; i++) {
        let aa = parseFloat(a[i].value);
        let bb = parseFloat(b[i].value); 
        let ss = s[i].innerHTML;
        let rr = r[i].value;

        switch(ss){
            case '+':
                r[i].value = rr = aa+bb;
                Check(rr , i);
                break;
            case '−':
                r[i].value = rr = aa-bb;
                Check(rr , i);
                break;
            case '×':
                r[i].value = rr = aa*bb;
                Check(rr , i);
                break;
            case '÷':
                r[i].value = rr = aa/bb;
                Check(rr , i);
                break;
            }
        }
    }

function Check(rr , i){
    if(rr > 100){
        document.getElementsByClassName('check')[i].innerHTML = 'OK';
        document.getElementsByClassName('check')[i].style.backgroundColor = '';
    }else{
        document.getElementsByClassName('check')[i].innerHTML = 'NG';
        document.getElementsByClassName('check')[i].style.backgroundColor = 'red';
    }
}

function Select(){
    let dispEl = document.querySelector('#display');
    if ('計算' === document.querySelector('#target').value) {
      dispEl.classList.remove('viewnone');
    } else {
      dispEl.classList.add('viewnone');
    }
}
