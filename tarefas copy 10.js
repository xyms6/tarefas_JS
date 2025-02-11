// // # 10. Sistema de Avaliação de Códigos
// const codigo = prompt("Digite seu código:");
// const criterios = {
//     "Declaração de variável": codigo.includes("="),
//     "Estrutura condicional (if)": codigo.includes("if"),
//     "Loop (for/while)": ["for", "while"].some(loop => codigo.includes(loop)),
//     "Função": codigo.includes("function")
// };
// const atendidos = Object.values(criterios).filter(Boolean).length;
// const avaliacao = atendidos === 4 ? "Bom" : atendidos >= 2 ? "Regular" : "Ruim";
// alert(`Avaliação: ${avaliacao}`);
