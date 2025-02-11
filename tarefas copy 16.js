// #16. Menu de Opções:

function exibirMenu() {
    console.log("Menu de Opções:");
    console.log("1. Cadastrar");
    console.log("2. Editar");
    console.log("3. Excluir");
    console.log("4. Listar");
    console.log("0. Sair");
}


function cadastrar() {
    console.log("Cadastrando...");
}


function editar() {
    console.log("Editando...");
}


function excluir() {
    console.log("Excluindo...");
}


function listar() {
    console.log("Listando...");
}


function main() {
    let escolha;
    
    do {
        exibirMenu();
        escolha = prompt('Escolha uma opção: ');
        
        switch (escolha) {
            case '1':
                cadastrar();
                break;
            case '2':
                editar();
                break;
            case '3':
                excluir();
                break;
            case '4':
                listar();
                break;
            case '0':
                alert('Saindo...');
                break;
            default:
                alert('Opção inválida!');
        }
        
        
        if (escolha !== '0') continue; 
                
        
        process.exit(0); // Caso esteja rodando em Node.js
        
            
        
            
    
} while(escolha !== "0"); 

}
main();

