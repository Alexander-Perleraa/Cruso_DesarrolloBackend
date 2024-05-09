const readline=require('readline');
const rl = readline.createInterface
({  
    input: process.stdin,
    output: process.stdout
});
rl.question("Ingrese la palabra",(palabra)=>
{
    console.log("La plabra tiene:"+palabra.length+"letras");
    rl.close();
});
