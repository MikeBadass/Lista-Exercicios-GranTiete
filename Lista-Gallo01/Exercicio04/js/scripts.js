function Depositar(){

    let deposito = Number(document.getElementById("deposito").value);
    let saldoAtual = 500;

    saldoAtual = saldoAtual + deposito;

    document.getElementById("saldo").innerHTML = "Saldo: " + saldoAtual;
}
