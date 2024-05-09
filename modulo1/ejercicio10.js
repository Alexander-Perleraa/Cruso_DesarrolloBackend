const readline=require('readline');
const rl=readline.createInterface
({
    input: process.stdin,
    output: process.stdout
})
rl.question("ingrese una frase:",(frase)=>{
    const palabra=frase.split(' ');
    const fraseCapitalizada = palabra.map(palabras => palabras.charAt(0).toUpperCase() + palabras.slice(1)).join(' ')
    console.log(`Frase capitalizada: ${fraseCapitalizada} `)
    rl.close();
})