
let nome = prompt('Digite um nome:');
while (nome.length <= 3) {
    alert(`Nome precisa ter mais de 03 caracteres`);
    nome = prompt(`Digite o nome novamente`);
}
    
let idade = parseInt(prompt('Digite uma idade:'));
while (isNaN(idade) || idade < 0 || idade > 150) {
    alert(`Digite uma idade maior do que 0 e menor do que 150`);
    idade = prompt(`Digite a idade novamente`);
}

let salario = parseFloat(prompt('Digite um salário:'));
while ( isNaN(salario) || salario <= 0) {
    alert(`Digite um valor maior que 0`);
    salario = prompt(`Digite salario novamente`);
}

let sexo = prompt('Digite um sexo (f ou m):').toLowerCase();
while (sexo !== `f` && sexo !== `m`) {
    alert(`O sexo deve ser f ou m`);
    sexo = prompt(`Digite o sexo novamente`);
}

let estadoCivil = prompt('Digite um estado civil (s, c, v ou d):').toLowerCase();
while (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd' ) {
    alert(`O estado civil deve ser s,c,v ou d`);
    estadoCivil = prompt(`Digite o estado civil novamente`);
}

alert(`Nome: ${nome}\nIdade: ${idade}\nSalario: ${salario}\nSexo: ${sexo}\nEstadoCivil: ${estadoCivil}`);

