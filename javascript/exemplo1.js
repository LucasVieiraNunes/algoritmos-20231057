let nota = parseFloat(prompt(`Informe sua nota`));

let entradaInvalida = (isNaN(nota) || nota < 0 || nota > 10);
let aprovado = nota >= 7;
let reprovado = nota < 3;


if (entradaInvalida) {
    alert(`Entrada inválida \n Digite novamente`);
}
else if(aprovado) {
    alert(`Parabéns! Você está aprovado`);
} else if(reprovado) {
    alert(`Infeliz! Você está reprovado`);
} else {
    alert(`Quase lá! Você está em recuperação`);
    let notaRecuperacao = parseFloat(prompt(`Informe a nota da recuperação`));
    let mediaRecuperacao = (nota + notaRecuperacao) / 2;
    aprovado = mediaRecuperacao >= 5;
    if (aprovado) {
        alert(`Parabéns! Você está aprovado`);
    } else {
        alert(`Infeliz! Você está reprovado!!`)
    }
}











