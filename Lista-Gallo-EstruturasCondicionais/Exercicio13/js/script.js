
function Triangulo() {
   let a = Number(document.getElementById('a').value);
   let b = Number(document.getElementById('b').value);
   let c = Number(document.getElementById('c').value);

   if (a > b + c || b > a + c || c > a + b) {
      document.getElementById('resultado').innerHTML = "Tipo: os valores não compõem nenhum triângulo";
   }
   else {
      if (a == b && a == c && b == c) {
         document.getElementById('resultado').innerHTML = "Tipo: é um triângulo equilátero";
      }
      else if (a == b && a != c && b != c 
            || a == c && a != b && c != b
            || b == c && b != a && c != a) {
         document.getElementById('resultado').innerHTML = "Tipo: é um triângulo isóscele";
      }
      else if (a != b && a != c && b != c) {
         document.getElementById('resultado').innerHTML = "Tipo: é um triângulo escaleno";
      }
   }
}

