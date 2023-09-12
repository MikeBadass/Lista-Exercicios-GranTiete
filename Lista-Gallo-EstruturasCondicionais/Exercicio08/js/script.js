
function Ordenar() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);

    let maior, meio, menor;

    if (a > b && a > c) {
        maior = a;

        if (b > c) {
            meio = b
            menor = c
        }
        else {
            meio = c
            menor = b
        }
    }
    else if (a < b && a < c) {
        menor = a;

        if (b < c) {
            meio = b
            maior = c
        }
        else {
            meio = c
            maior = b
        }
    }
    else {
        meio = a;

        if (b < c) {
            menor = b
            maior = c
        }
        else {
            menor = c
            maior = b
        }
    }

    document.getElementById('resultado').innerHTML = `Ordem Crescente: ${menor}, ${meio}, ${maior}.`;
}

