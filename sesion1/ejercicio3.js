const readline=require('readline');
const rl = readline.createInterface
({  
    input: process.stdin,
    output: process.stdout
});
rl.question("Ingrese la palabra:",(palabra)=>
{
    console.log("La palabra "+palabra+ "en mayusculas es>">+palabra.toUppercase());
    rl.close();
})