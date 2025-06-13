function exercicio5() {
    const lista = [];
    let total = 0;
    
   
    function mostrarMenu() {
        alert("\n1 - Inserir item\n2 - Ver lista\n3 - Sair");
    }
    
    function inserirItem(nomeItem) {
        if (total < 100) {
            lista[total] = nomeItem;
            total++;
            alert("Item adicionado com sucesso!");
        } else {
            alert("Lista cheia!");
        }
    }
    
    function verLista() {
        if (total === 0) {
            alert("A lista está vazia.");
        } else {
            let listaTexto = "\nItens na lista:\n";
            for (let i = 0; i < total; i++) {
                listaTexto += `${i + 1} - ${lista[i]}\n`;
            }
            alert(listaTexto);
        }
    }
    
    
    alert("=== LISTA DE COMPRAS ===");
    inserirItem("Arroz");
    inserirItem("Feijão");
    inserirItem("Açúcar");
    verLista();
}

exercicio5()