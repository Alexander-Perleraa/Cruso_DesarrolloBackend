const readline = require('readline');

const rl = readline.createInterface
({
    input: process.stdin,
    output: process.stdout
})
rl.question("ingrese una cadena",(cadena)=>{
const inicio=2;
const longitud=5;
const subcadena=cadena.substring(inicio, inicio + longitud);
console.log(`La Subcadena es: ${subcadena}`)
})