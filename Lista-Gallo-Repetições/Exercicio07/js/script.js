let numeros = [];

function Media() {
    let n = Number(document.getElementById('number').value);

    if (!isNaN(n)) {
        if (n !== -1) {
            numeros.push(n);
            document.getElementById('number').value = '';
        } else {
            numeros.pop;
            let soma = numeros.reduce((acc, curr) => acc + curr, 0);
            let media = soma / numeros.length;
            document.getElementById('textarea').value = `Média: ${media.toFixed(1)}`;
        }
    }
}