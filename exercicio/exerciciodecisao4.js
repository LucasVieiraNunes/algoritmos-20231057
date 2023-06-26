let letra = prompt("Digite uma letra:");

letra = letra.toLowerCase();


if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
  alert("A letra digitada é uma vogal.");
} else if (letra >= "a" && letra <= "z") {
  alert("A letra digitada é uma consoante.");
} else {
  alert("Caractere inválido.");
}
