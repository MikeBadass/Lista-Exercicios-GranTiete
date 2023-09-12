
function CalcularPreco(){

    let custoFabrica = Number(document.getElementById("custoFabrica").value);
    const percentagemRevendedor = 0.25;
    const percentagemImpostos = 0.45;
    
    let valorRevendedor = custoFabrica * percentagemRevendedor;
    let valorImposto = custoFabrica * percentagemImpostos;
    let precoFinal = custoFabrica + valorRevendedor + valorImposto;

    document.getElementById("resultado").innerHTML = "Preço final: R$ " + precoFinal.toFixed(2);
}
