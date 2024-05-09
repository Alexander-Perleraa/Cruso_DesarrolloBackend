const { stdout } = require('process');
const readline = require('readline');
const rl= readline.createInterface({
    input: process.stdin,
    output: stdout
});
rl.question('Ingrese una frase:',(frase)=>{
    const palabras=frase.split(' ');
    console.log(`Numero de palabras: ${palabras.length}`);
})