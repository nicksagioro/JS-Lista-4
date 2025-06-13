function exercicio4() {
    const lista = [3, 5, 6, 7, 8, 10, 22, 55, 110];
    let pares = 0;

    for (let i = 0; i < 9; i++) {
        if (lista[i] % 2 === 0) {
            pares++;
        }
    }
    
    alert(`Quantidade de números pares: ${pares}`);
}

exercicio4()