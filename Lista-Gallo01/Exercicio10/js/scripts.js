
function Calcular() {

    let valorPrestacao = Number(document.getElementById("valorPrestacao").value);
    let taxaJuros = Number(document.getElementById("taxaJuros").value);
    let diasAtraso = Number(document.getElementById("diasAtraso").value);

    let prestacao = valorPrestacao + (valorPrestacao * (taxaJuros / 100) * diasAtraso)

    document.getElementById("prestacaoAtraso").innerHTML = "Valor da prestação em atraso: " + prestacao.toFixed(2);
}
