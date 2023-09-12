
function Calcular(){

    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let resultado;

    let soma = document.getElementById('soma').checked
    let subtracao = document.getElementById('subtracao').checked
    let multiplicacao = document.getElementById('multiplicacao').checked
    let divisao = document.getElementById('divisao').checked

    if(soma){
        resultado = (numero1 + numero2);
    }
    else if(subtracao){
        resultado = (numero1 - numero2);
    }
    else if(multiplicacao){
        resultado = (numero1 * numero2);
    }
    else if(divisao){
        resultado = (numero1 / numero2);
    }
    else{
        return;
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;

    //console.log("Resultado: " + resultado);
}
