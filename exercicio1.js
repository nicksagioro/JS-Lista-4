function exercicio1(){

let vendasDoDia = [11.40, 22.00, 75.50, 127.88, 12.00, 1.00];
let fechamento = 0;

for (let i = 0; i < vendasDoDia.length; i++) {
  fechamento += vendasDoDia[i];
}

alert("Fechamento do dia: R$" + fechamento.toFixed(2));
}

exercicio1()