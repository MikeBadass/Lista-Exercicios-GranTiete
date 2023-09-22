function Fatorial() {
    var n = Number(document.getElementById("number").value);
    var temp = "";
    var factorial = 1; 
    
    for (let i = n; i > 0; i--) {
        factorial = i * factorial;
        if (i === 1) {
            temp += `${i}`;
        } else {
            temp += `${i} x `;
        }
    }

    document.getElementById("textarea").value = temp + " = " + factorial;
}






