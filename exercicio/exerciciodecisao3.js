let letra = prompt("Digite uma letra (F ou M):");

letra = letra.toUpperCase();


if (letra === "F") {
  alert("F - Feminino");
} else if (letra === "M") {
  alert("M - Masculino");
} else {
  alert("Sexo Inválido");
}
