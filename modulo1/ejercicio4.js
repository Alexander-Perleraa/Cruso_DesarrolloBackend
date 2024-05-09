const readline = require('readline');
const rl = readline.createInterface
({
    input: process.stdin,
    output: process.stdout
})
rl.question("Ingrese una frase:", (frase)=>{
    rl.question('Ingrese palabra que desea cambiar:', (cambiar)=>{
        rl.question('Ingrese la plabra nueva:',(nueva)=>{
            const palabra = frase.replace(cambiar,nueva);
            console.log(palabra); 
            rl.close
        });
     
    })
   
    
   
});