function calcularAreaDoCirculo(raio) {
    let area = Math.PI * Math.pow(raio, 2);
    return area;
  }
  
  // Solicitar ao usuário o raio do círculo
  let raio = parseFloat(prompt("Digite o raio do círculo:"));
  
  // Chamar a função para calcular a área do círculo
  let areaDoCirculo = calcularAreaDoCirculo(raio);
  
  // Exibir o resultado da área do círculo
  console.log(raio + areaDoCirculo.toFixed(2))

  alert(areaDoCirculo)