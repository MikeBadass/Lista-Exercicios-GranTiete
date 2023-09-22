
function Somar() {
    var n = Number(document.getElementById("number").value);
    var temp = "";
    var soma = 0;


    for (let i = n; i > 0; i--) {
        soma += i;
        if (i === 1) {
            temp += `${i}`;
        } else {
            temp += `${i} + `;
        }
    }

    document.getElementById("textarea").value = temp + " = " + soma;
}