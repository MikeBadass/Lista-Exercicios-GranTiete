function Vogais() {
    var palavra = document.getElementById("palavra").value; 
    var palavraSeparada = palavra.split("");
    var vogais = 0;
    
    if (palavra === "" || palavra === null) {
        alert("Escreva algo primeiro para verificar se há vogais!");
        return;
    }

    for (let i = 0; i < palavraSeparada.length; i++) { 
        let letra = palavraSeparada[i].toUpperCase(); 
        if (letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
            vogais++;
        }
    }
    
    document.getElementById("textarea").innerHTML = `A palavra ${palavra} tem ${vogais} vogais!`;
}







