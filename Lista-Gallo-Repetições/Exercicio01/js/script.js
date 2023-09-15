
function Tabuada() {
    var n = Number(document.getElementById("number").value);
    var tabuada = "";

    for (let i = 0; i <= 10; i++) {
        tabuada += n + " x " + i + " = " + n * i + "\n";
    }

    document.getElementById("textarea").value = tabuada;
}