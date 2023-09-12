
function CalcularSalario(){

    let nome = document.getElementById("nome").value;
    let salarioFixo = Number(document.getElementById("salarioFixo").value);
    let totalVendas = Number(document.getElementById("totalVendas").value);
    const percentagemComissao = 0.15;
    
    let valorComissao = totalVendas * percentagemComissao;
    let salarioFinal = valorComissao + salarioFixo;

    document.getElementById("nomeVendedor").innerHTML = "Vendedor: " + nome;
    document.getElementById("salario").innerHTML = "Salário Fixo: R$ " + salarioFixo.toFixed(2);
    document.getElementById("salarioFinal").innerHTML = "Salário Final: R$ " + salarioFinal.toFixed(2);
}
