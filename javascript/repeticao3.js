
let nota = parseFloat(prompt(`Digite uma nota válida`));
let notaValida = nota >= 0 && nota <= 10;

for(let i = 0; !notaValida ; i++) { 
    alert(`Nota Inválida`);
    nota = parseFloat(prompt(`Digite uma nota válida:`));
    notaValida = nota >= 0 && nota <= 10;
}

alert(`Programa encerrado com a nota ${nota}`);
