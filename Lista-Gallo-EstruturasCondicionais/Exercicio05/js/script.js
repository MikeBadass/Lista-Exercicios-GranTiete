
function IsMultiplo() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);

    if(a % b == 0 || b % a == 0){
        document.getElementById('resultado').innerHTML = "São múltiplos!"
    }
    else{
        document.getElementById('resultado').innerHTML = "Não são múltiplos!"
    }
}

