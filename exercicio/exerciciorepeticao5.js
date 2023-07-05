
let populacaoA = parseInt(prompt(`Digite a populacao A `));
let populacaoB = parseInt(prompt(`Digite a populacao B `));
let taxaCrescimentoA = parseFloat(prompt(`Digite a taxa de crescimento da população A`));
let taxaCrescimentoB = parseFloat(prompt(`Digite a taxa de crescimento da população A`));
let anos = 0;

while (populacaoA < populacaoB) {
  populacaoA += populacaoA * taxaCrescimentoA / 100;
  populacaoB += populacaoB * taxaCrescimentoB / 100;
  anos++;
}

alert(`A quantidade de anos necessário para a PopulaçãoA ultrapassar a PopulaçãoB é: ${anos}`)

