// // # 3. Validação de Senha Complexa
// const senha = prompt("Digite sua senha:");

// const criterios = {
//   "Comprimento mínimo": senha.length >= 8,
//   "Letra maiúscula": /[A-Z]/.test(senha),
//   "Letra minúscula": /[a-z]/.test(senha),
//   "Número": /\d/.test(senha),
//   "Caractere especial": /[!@#$%^&*]/.test(senha)
// };

// for (const [crit, valido] of Object.entries(criterios)) {
//   if (!valido) {
//     console.log(`Falta: ${crit}`);
//   }
// }

// if (Object.values(criterios).every(Boolean)) {
//   console.log("Senha válida!");
// }
