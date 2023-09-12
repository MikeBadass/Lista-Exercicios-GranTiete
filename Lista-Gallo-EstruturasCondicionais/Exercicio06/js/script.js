
function Comparar() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    if(a > b && a > c){
        document.getElementById('resultado').innerHTML = a + " é o maior valor digitado";
    }
    else if(b > a && b > c){
        document.getElementById('resultado').innerHTML = b + " é o maior valor digitado";
    }
    else if(c > a && c > b){
        document.getElementById('resultado').innerHTML = c + " é o maior valor digitado";
    }
    else{
        document.getElementById('resultado').innerHTML = "Os 3 valores são iguais";
    }
}

