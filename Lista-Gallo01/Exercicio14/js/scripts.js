
function Inverter() {

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    const temp = a;
    const novoA = b;
    const novoB = temp;

    document.getElementById("resultadoA").innerHTML = "A: " + novoA;
    document.getElementById("resultadoB").innerHTML = "B: " + novoB;

}