function exercicio8() {
    let lista = [];
    let precos = [];
    let total = 0;
    
    function ordenarPorPreco() {
        for (let i = 0; i < total - 1; i++) {
            for (let j = i + 1; j < total; j++) {
                if (precos[i] > precos[j]) {
                    const tempReal = precos[i];
                    precos[i] = precos[j];
                    precos[j] = tempReal;
                    
                    const tempStr = lista[i];
                    lista[i] = lista[j];
                    lista[j] = tempStr;
                }
            }
        }
    }
    
    function inserirItem(nomeItem, preco) {
        if (total < 100) {
            lista[total] = nomeItem;
            precos[total] = preco;
            total++;
            alert("Item adicionado com sucesso!");
        } else {
            alert("Lista cheia! Não é possível adicionar mais itens.");
        }
    }
    
    function verLista() {
        if (total === 0) {
            alert("A lista está vazia.");
        } else {
            let listaTexto = "------ LISTA DE COMPRAS ------\n";
            for (let i = 0; i < total; i++) {
                listaTexto += `${i + 1} - ${lista[i]} | R$ ${precos[i].toFixed(2)}\n`;
            }
            listaTexto += "------------------------------";
            alert(listaTexto);
        }
    }
    
    function verListaOrdenada() {
        if (total === 0) {
            alert("A lista está vazia.");
        } else {
            const listaCopia = [...lista];
            const precosCopia = [...precos];
            
            
            for (let i = 0; i < total - 1; i++) {
                for (let j = i + 1; j < total; j++) {
                    if (precosCopia[i] > precosCopia[j]) {
                        const tempReal = precosCopia[i];
                        precosCopia[i] = precosCopia[j];
                        precosCopia[j] = tempReal;
                        
                        const tempStr = listaCopia[i];
                        listaCopia[i] = listaCopia[j];
                        listaCopia[j] = tempStr;
                    }
                }
            }
            
            let listaTexto = "------ LISTA ORDENADA POR PREÇO ------\n";
            for (let i = 0; i < total; i++) {
                listaTexto += `${i + 1} - ${listaCopia[i]} | R$ ${precosCopia[i].toFixed(2)}\n`;
            }
            listaTexto += "-------------------------------------";
            alert(listaTexto);
        }
    }
    
    // Exemplo de uso
    alert("=== LISTA COM ORDENAÇÃO ===");
    inserirItem("Chocolate", 12.50);
    inserirItem("Biscoito", 3.20);
    inserirItem("Refrigerante", 8.90);
    inserirItem("Salgadinho", 5.45);
    
    alert("Lista original:");
    verLista();
    
    alert("Lista ordenada por preço:");
    verListaOrdenada();
}

exercicio8 ()