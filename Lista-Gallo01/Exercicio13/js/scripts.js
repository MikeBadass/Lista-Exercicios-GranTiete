
function Calcular() {

    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);

    const delta = b * b - 4 * a * c;

    if (a === 0) {
        document.getElementById("resultado").innerHTML = "Não é uma equação do segundo grau.";
    }

    if (delta < 0) {
        const parteReal = -b / (2 * a);
        const parteImaginaria = Math.sqrt(-delta) / (2 * a);
        document.getElementById("resultado").innerHTML = `A equação possui raízes complexas: ${parteReal} + ${parteImaginaria}i e ${parteReal} - ${parteImaginaria}i`;
        return;
    } else if (delta === 0) {
        const raiz = -b / (2 * a);
        document.getElementById("resultado").innerHTML = `A equação possui uma raiz real: ${raiz}`;
    } else {
        const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("resultado").innerHTML = `A equação possui duas raízes reais: ${raiz1} e ${raiz2}`;
    }
}