function exercicio2() {
    const compras = [];
    let menorValor = 99999999;
    let maiorValor = -99999999;
    let indiceMenor = 0;
    let indiceMaior = 0;

    // Simulando entrada do usuário com valores de exemplo
    const valoresExemplo = [150.50, 89.30, 45.20, 300.00, 12.99, 78.45, 200.10, 5.99, 500.00, 25.30];
    
    for (let i = 0; i < 10; i++) {
        // Em um ambiente real, você usaria prompt() ou input do usuário
        compras[i] = valoresExemplo[i];
        alert(`Digite o valor da compra ${i + 1}: ${compras[i]}`);

        if (compras[i] < menorValor) {
            menorValor = compras[i];
            indiceMenor = i;
        }
        if (compras[i] > maiorValor) {
            maiorValor = compras[i];
            indiceMaior = i;
        }
    }
    
    alert(`Compra de menor valor: R$ ${menorValor} (Compra ${indiceMenor + 1})`);
    alert(`Compra de maior valor: R$ ${maiorValor} (Compra ${indiceMaior + 1})`);
}
exercicio2()