

function Comparar() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let maiorNumero;

    if (num1 > num2) {
        maiorNumero = num1;
        console.log(maiorNumero);
        document.getElementById("resultado").innerHTML = "Maior Número: " + maiorNumero;
    }
    else if (num1 < num2) {
        maiorNumero = num2;
        console.log(maiorNumero);
        document.getElementById("resultado").innerHTML = "Maior Número: " + maiorNumero;
    }
    else {
        console.log("numeros iguais");
        document.getElementById("resultado").innerHTML = "Maior Número: Os  números são iguais";
    }


}