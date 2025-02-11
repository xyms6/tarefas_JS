// // # 7. Calculadora de Juros Compostos Personalizada
// const capital = parseFloat(prompt("Capital inicial:"));
// const juros = parseFloat(prompt("Taxa de juros anual (%):")) / 100;
// const tempo = parseInt(prompt("Tempo (anos):"));
// const frequencia = prompt("Frequência (anual, mensal, diária):").toLowerCase();
// const freq_map = { "anual": 1, "mensal": 12, "diária": 365 };
// const n = freq_map[frequencia] || 1;
// const montante = capital * Math.pow(1 + juros / n, n * tempo);
// alert(`Montante final: R$ ${montante.toFixed(2)}, Lucro: R$ ${(montante - capital).toFixed(2)}`);
