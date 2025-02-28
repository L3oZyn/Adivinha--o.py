let av1 = 5.0;
let av2 = 6.0;
let recup1 = 7.0;
let recup2 = 3.0;

// Substitui as notas caso a recuperação seja maior
let nota1 = recup1 > av1 ? recup1 : av1;
let nota2 = recup2 > av2 ? recup2 : av2;

// Calcula a média simples
let media = (nota1 + nota2) / 2;

// Define se o aluno está aprovado ou reprovado
let status = media >= 6.0 ? "Aprovado" : "Reprovado";

// Exibe o resultado
console.log(`Média: ${media.toFixed(1)}`);
console.log(`Status: ${status}`);
