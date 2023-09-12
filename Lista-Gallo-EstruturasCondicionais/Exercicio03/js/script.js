
function ParOuImpar() {
    let numero = Number(document.getElementById('numero').value);

    if (numero % 2 === 0) {
        document.getElementById('resultado').innerHTML = "O número " + numero + " é par";
    }
    else {
        document.getElementById('resultado').innerHTML = "O número " + numero + " é ímpar";
    }
}

