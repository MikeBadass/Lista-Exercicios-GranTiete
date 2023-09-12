
function Calcular() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    var delta = (b * b) - 4 * a * c;


    if (delta < 0) {
        document.getElementById('resultado').innerHTML = "Valor de Delta: " + delta;
        document.getElementById('resultado2').innerHTML = "O valor de delta é negativo, impossivél continuar os calculos";
        document.getElementById('resultado3').innerHTML = "";
    }
    else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        document.getElementById('resultado').innerHTML = "Valor de Delta: " + delta;
        document.getElementById('resultado2').innerHTML = "X1: " + x1;
        document.getElementById('resultado3').innerHTML = "X2: " + x1;
    }
}

