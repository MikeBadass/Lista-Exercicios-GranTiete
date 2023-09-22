function Fibonacci() {
    var n = Number(document.getElementById("number").value);

    var fibonacci = [];

    if (isNaN(n) || n <= 0) {
        alert("Por favor, digite um número válido e positivo.");
        return;
    }

    if (n >= 1) {
        fibonacci.push(0);
    }

    if (n >= 2) {
        fibonacci.push(1);
    }

    for (var i = 2; i < n; i++) {
        var proximo = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(proximo);
    }

    document.getElementById("textarea").innerHTML = fibonacci.join(", ");
}







