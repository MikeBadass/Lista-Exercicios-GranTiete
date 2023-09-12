
function CalcularSaldo() {
    let saldoMedio = Number(document.getElementById('saldo').value);
    let porcentagem;
    let valorCredito;

    if(saldoMedio <= 200){
        porcentagem = 0;
    }
    else if(saldoMedio <= 400){
        porcentagem = 0.20;
    }
    else if(saldoMedio <= 600){
        porcentagem = 0.30;
    }
    else if(saldoMedio > 600){
        porcentagem = 0.40;
    }

    valorCredito = saldoMedio * porcentagem;

    document.getElementById('resultado').innerHTML = "Saldo Médio: " + saldoMedio;
    document.getElementById('resultado2').innerHTML = "Valor do Crédito: " + valorCredito;
}

