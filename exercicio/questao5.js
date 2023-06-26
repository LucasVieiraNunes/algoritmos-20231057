function converterMetrosParaCentimetros(metros) {

let centimetros = metros * 100;

return centimetros;

} 
    
let metros = parseFloat(prompt(`Digite o numero de metros`));

let centimetros = converterMetrosParaCentimetros(metros);


console.log(metros + centimetros);

alert(centimetros)

