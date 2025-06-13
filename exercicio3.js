function exercicio3() {
    let vendasDoDia = [11.40, 22.00, 75.50, 127.88, 12.00, 1.00];
    let totalVendas = vendasDoDia.reduce((sum, venda) => sum + venda, 0);
    let  ticketMedio = totalVendas / vendasDoDia.length;
    
    alert (`O ticket médio é R$ + ${ticketMedio.toFixed(2)}`);
}
exercicio3()