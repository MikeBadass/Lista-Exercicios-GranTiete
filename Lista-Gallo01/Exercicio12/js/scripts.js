
function Converter() {

    let f = Number(document.getElementById("f").value);
    let c = (f - 32) * 5 / 9;

    document.getElementById("c").innerHTML = "Temperatura em Celsius (C°): " + c.toFixed(2) + "°";
}
