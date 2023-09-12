
function Calcular() {

    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    let r = Math.pow((a + b), 2);
    let s = Math.pow((b + c), 2);

    let d = (r + s) / 2;

    document.getElementById("prestacaoAtraso").innerHTML = "Resultado: " + d;
}
