function Somar() {
    let n = Number(document.getElementById("number").value);
    let textareaResultado = document.getElementById("textarea");

    if (isNaN(n) || n <= 0) {
        textareaResultado.value = "Por favor, digite um número inteiro positivo válido.";
        return;
    }

    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i * i;
    }

    textareaResultado.value = `A soma dos quadrados dos primeiros ${n} números é: ${soma}`;
}
