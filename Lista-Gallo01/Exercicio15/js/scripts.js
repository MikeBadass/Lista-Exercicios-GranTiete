
function Calcular() {

    let altura = document.getElementById("altura").value;
    let raio = document.getElementById("raio").value;

    const P1 = 3.14;
    const precoLata = 40.00;
    const litrosPorLata = 5;
    const metrosPorLitro = 3;
    const demaos = 2;

    const areaBase = P1 * Math.pow(raio, 2);
    const areaLateral = 2 * P1 * raio * altura;

    const areaCilindro = areaBase + areaLateral;

    const qtdeLitros = (areaCilindro / metrosPorLitro) * demaos

    const qtdeLatas = qtdeLitros / litrosPorLata;

    const custo = qtdeLatas * precoLata;
     
 
    document.getElementById("custo").innerHTML = "Custo Total: R$ " + custo.toFixed(2);
    document.getElementById("quantidade").innerHTML = "Quantidade de latas: " + Math.round(qtdeLatas);

}