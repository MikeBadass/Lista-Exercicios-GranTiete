

function Soma() {
    let soma = 0
    let temp = ""
    let n = Number(document.getElementById('number').value);

    for (let i = 1; i <= n; i++) {
        if(i % 2 == 0){
            soma += i;
            if (i === n) {
                temp += `${i}`;
            } else {
                temp += `${i} + `;
            }
        }  
    }

    document.getElementById("textarea").innerHTML = temp + " = " + soma;
}