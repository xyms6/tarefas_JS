// // # 5. Simulador de Caixa Eletrônico
// let saldo = 1000;
// const operacao = prompt("Digite a operação (saque, depósito, consulta): ").toLowerCase();

// if (operacao === "saque") {
//   const valor = parseFloat(prompt("Digite o valor do saque: "));
//   if (valor <= saldo) {
//     saldo -= valor;
//     console.log(`Saque realizado. Saldo atual: R$ ${saldo.toFixed(2)}`);
//   } else {
//     console.log("Saldo insuficiente.");
//   }
// } else if (operacao === "depósito") {
//   const valor = parseFloat(prompt("Digite o valor do depósito: "));
//   saldo += valor;
//   console.log(`Depósito realizado. Saldo atual: R$ ${saldo.toFixed(2)}`);
// } else if (operacao === "consulta") {
//   console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
// } else {
//   console.log("Operação inválida!");
// }
