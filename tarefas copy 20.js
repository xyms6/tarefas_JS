// #20 . Sistema de Cálculo de Impostos
function calcularImposto(tipoProduto, valorProduto) {
    let aliquota;
    
    switch (tipoProduto.toUpperCase()) {
        case 'A':
            aliquota = 0.10; 
            break;
        case 'B':
            aliquota = 0.15; 
        case 'C':
            aliquota = 0.20; 
            break;
        default:
            return "Tipo de produto inválido!";
    }

    const imposto = valorProduto * aliquota;
    return `O imposto sobre o produto ${tipoProduto} é R$${imposto.toFixed(2)}`;
}


console.log(calcularImposto('A', 100)); 
console.log(calcularImposto('B', 200)); 
console.log(calcularImposto('C', 300)); 
