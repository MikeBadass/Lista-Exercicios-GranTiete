
function Pedido() {
   let codigo = Number(document.getElementById('codigo').value);
   let quantidade = Number(document.getElementById('quantidade').value);
   let preco;
   let tipoLanche = "";

   if(codigo === 100){
    tipoLanche = "Cachorro Quente";
    preco = 1.20;
   }
   else if (codigo === 101){
    tipoLanche = "Bauru Simples";
    preco = 1.30;
   }
   else if (codigo === 102){
    tipoLanche = "Bauru com ovo";
    preco = 1.50;
   }
   else if (codigo === 103){
    tipoLanche = "Hambúrguer";
    preco = 1.20;
   }
   else if (codigo === 104){
    tipoLanche = "Cheeseburguer";
    preco = 1.30;
   }
   else if (codigo === 105){
    tipoLanche = "Refrigerante";
    preco = 1;
   }

   let valorPedido = preco * quantidade;
   document.getElementById('resultado').innerHTML = `Pedido: ${quantidade}x ${tipoLanche}`;
   document.getElementById('resultado2').innerHTML = `Valor do Pedido: R$ ${valorPedido.toFixed(2)}`;

}

