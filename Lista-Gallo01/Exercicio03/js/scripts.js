function Calcular(){

    let numero1 = Number(document.getElementById("numero1").value);
    let resultado;

    resultado = Math.pow(numero1, 2)

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

    //console.log("Resultado: " + resultado);
}

