const readline=require('readline');
const rl=readline.createInterface
({
    input: process.stdin,
    output: process.stdout
})

    rl.question("ingrese una plabra:" , (palabra)=>{
        const vocal=palabra.match(/[aeiou]/gi);
        const conteo=vocal ? vocal.length: 0;
console.log(`la palabra ingresada tiene las siguiente vocales:  ${conteo}`);
rl.close();
    }
)
