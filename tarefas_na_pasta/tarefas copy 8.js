//     // # 8. Jogo de Adivinhação com Dicas
//     const numero = Math.floor(Math.random() * 100) + 1;
// let tentativas = 7;

// while (tentativas > 0) {
//   const palpite = parseInt(prompt("Digite seu palpite: "), 10);
//   const diferenca = Math.abs(palpite - numero);

//   if (palpite === numero) {
//     console.log("Parabéns, você acertou!");
//     break;
//   } else if (palpite > numero) {
//     console.log("Muito alto");
//   } else {
//     console.log("Muito baixo");
//   }

//   if (diferenca <= 10) {
//     console.log("Quente");
//   } else if (diferenca > 20) {
//     console.log("Frio");
//   }

//   tentativas--;
//   console.log(`Tentativas restantes: ${tentativas}`);
// }

// if (tentativas === 0) {
//   console.log(`Você perdeu! O número era ${numero}.`);
// }

