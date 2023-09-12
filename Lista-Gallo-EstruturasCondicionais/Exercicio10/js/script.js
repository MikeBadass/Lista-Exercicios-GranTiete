
function Classificar() {
    let idade = Number(document.getElementById('idade').value);
    let categoria = "";

    if(idade < 5){
        categoria = "Insira uma idade maior que 5 anos.";
    }
    else if(idade >= 5 && idade <= 7){
        categoria = "Infantil A";
    } 
    else if(idade >= 8 && idade <= 10){
        categoria = "Infantil B";
    } 
    else if(idade >= 11 && idade <= 13){
        categoria = "Juvenil A";
    } 
    else if(idade >= 14 && idade <= 17){
        categoria = "Juvenil B";
    } 
    else if(idade >= 18){
        categoria = "Adulto";
    } 

    document.getElementById('resultado').innerHTML = "Categoria: " + categoria;    
}

