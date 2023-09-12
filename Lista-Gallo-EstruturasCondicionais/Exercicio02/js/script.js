

function Calcular() {

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let media;

    media = ((nota1 *4) + (nota2 * 3) + (nota3 * 3)) / 3;

    if (media >= 7) {

        document.getElementById("media").innerHTML = "Média: " + media.toFixed(1);
        document.getElementById("situacao").innerHTML = "Situação: APROVADO";
    }
    else if (media >= 5) {

        document.getElementById("media").innerHTML = "Média: " + media.toFixed(1);
        document.getElementById("situacao").innerHTML = "Situação: RECUPERAÇÃO";
    }
    else {

        document.getElementById("media").innerHTML = "Média: " + media.toFixed(1);
        document.getElementById("situacao").innerHTML = "Situação: REPROVADO";
    }


}