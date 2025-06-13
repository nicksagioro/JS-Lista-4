function exercicio7() {
    let lista = [];
    let precos = [];
    let total = 0;
    
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
    
    function removerItem(indice) {
        if (total === 0) {
            alert("A lista está vazia. Nada para remover.");
            return;
        }
        
        if (indice > 0 && indice <= total) {
            const indiceReal = indice - 1;
            
            for (let i = indiceReal; i < total - 1; i++) {
                lista[i] = lista[i + 1];
                precos[i] = precos[i + 1];
            }
            total--;
            alert("Item removido com sucesso.");
        } else {
            alert("Número inválido.");
        }
    }
    
    // Exemplo de uso
    alert("=== LISTA COM PREÇOS ===");
    inserirItem("Banana", 5.50);
    inserirItem("Maçã", 8.90);
    inserirItem("Laranja", 4.20);
    verLista();
}

exercicio7()