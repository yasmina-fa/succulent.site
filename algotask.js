function verify() {
    
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let x = parseInt(document.getElementById('x').value);
    
    let result;
    let check;

    
    if (x >= a && x <= b) {
        result = "Число X принадлежит промежутку";
        check = true;
    } 
    else {
        result = "Число X НЕ принадлежит промежутку";
        check = false;
    }
    
    
    document.getElementById("result").value = result;
}


const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);


const elementSend = document.getElementById("send");
elementSend.addEventListener('click', function() {
    verify(); 
    document.getElementById("UserEnter").submit(); 
});