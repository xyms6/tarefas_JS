// # 1 Calculadora 

let peso = parseFloat(prompt("Digite seu peso (kg): "));
let altura = parseFloat(prompt("Digite sua altura (m): "));
let idade = parseInt(prompt("Digite sua idade: "));

if (isNaN(peso) || isNaN(altura) || isNaN(idade)) {
  console.log("Por favor, insira valores válidos.");
} else {
  let imc = peso / (altura ** 2);

  if (idade > 65) {
    imc -= 1;
  }

  let classificacao;
  if (idade < 18) {
    if (imc < 18.5) {
      imc = 18.5;
    }
    classificacao = "Menor de 18 anos";
  } else {
    if (imc < 18.5) {
      classificacao = "Abaixo do Peso";
    } else if (imc < 24.9) {
      classificacao = "Normal";
    } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
      classificacao = "Obesidade I";
    } else if (imc < 39.9) {
      classificacao = "Obesidade II";
    } else {
      classificacao = "Obesidade III";
    }
  }

  console.log(`IMC: ${imc.toFixed(2)}, Classificação: ${classificacao}`);
}

