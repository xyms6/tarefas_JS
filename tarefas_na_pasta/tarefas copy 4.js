// // # 4. Analisador de Triângulos
// const lados = Array.from({ length: 3 }, (_, i) => 
//     parseFloat(prompt(`Digite o lado ${i + 1}: `))
//   );
  
//   if (lados.reduce((a, b) => a + b, 0) - Math.max(...lados) > Math.max(...lados)) {
//     let tipo;
//     if (lados[0] === lados[1] && lados[1] === lados[2]) {
//       tipo = "Equilátero";
//     } else if (lados[0] === lados[1] || lados[1] === lados[2] || lados[0] === lados[2]) {
//       tipo = "Isósceles";
//     } else {
//       tipo = "Escaleno";
//     }
//     console.log(`É um triângulo ${tipo}!`);
//   } else {
//     console.log("Não é um triângulo válido!");
//   }
  