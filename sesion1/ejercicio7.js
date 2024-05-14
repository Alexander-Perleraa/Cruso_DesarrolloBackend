const readline=require('readline');
const rl=readline.createInterface
({input: process.stdin,
    output:process.stdout
})
rl.question("Ingrese una cadena:" , (cadena)=>{
    const invertida=cadena.split(''). reverse(). join(''); 
    console.log(`la palabra invertida seria la siguiente: ${invertida}`);
    rl.close();
});