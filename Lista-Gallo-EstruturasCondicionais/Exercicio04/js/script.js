
function Bissexto() {
    let ano = Number(document.getElementById('ano').value);

    if ((ano % 4 === 0) || (ano % 400 == 0)) {
        document.getElementById('resultado').innerHTML = "O ano " + ano + " é bissexto";
    }
    else {
        document.getElementById('resultado').innerHTML = "O ano " + ano + " não é bissexto";
    }
}

