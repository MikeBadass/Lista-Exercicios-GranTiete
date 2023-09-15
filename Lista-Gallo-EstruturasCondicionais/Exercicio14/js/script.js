
function PesoIdeal() {

   let sexo = document.querySelector('input[name="sexo"]:checked').value;
   let altura = Number(document.getElementById("altura").value);
   let idade = Number(document.getElementById("idade").value);

   var PesoIdeal;

   if(sexo == "m"){
      if(altura > 1,70 && idade <= 20){
         PesoIdeal = (72,7 * altura) - 58;
      }
      else if(altura > 1,70 && (idade > 21 || idade < 39)){
         PesoIdeal = (72,7 * altura) - 53;
      }
      else if(altura > 1,70 && idade >= 40){
         PesoIdeal = (72,7 * altura) - 45;
      }
      else if(altura <= 1,70 && idade <= 40){
         PesoIdeal = (72,7 * altura) - 50;
      }
      else if(altura <= 1,70 && idade > 40){
         PesoIdeal = (72,7 * altura) - 58;
      }
   }
   else if(sexo == "f"){
      if(altura > 1,50){
         PesoIdeal = (62,1 * altura) - 44,7;
      }
      else if(altura <= 150 && idade >= 35){
         PesoIdeal = (62,1 * altura) - 45;
      }
      else if(altura <= 1,50 && idade < 35){
         PesoIdeal = (62,1 * altura) - 49;
      }
   }

   document.getElementById("resultado").innerHTML = `Peso Ideal: ${PesoIdeal}`;
}

