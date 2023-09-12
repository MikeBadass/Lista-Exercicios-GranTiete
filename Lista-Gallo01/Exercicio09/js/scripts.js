
function Converter(){

    let valorDolar = Number(document.getElementById("valorDolar").value);
    let cotacao = Number(document.getElementById("cotacao").value);
    let valorReais = valorDolar * cotacao;

    document.getElementById("valorReais").innerHTML = "Valor convertido em Reais (R$): " + valorReais.toFixed(2);
    
}
