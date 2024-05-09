const readline=require('readline');
const rl=readline.createInterface
({
    input: process.stdin,
    output: process.stdout
});
rl.question("ingrese una palabra",(palabra)=>{
    const frase=palabra.split('').reverse().join('');
    if(palabra==frase){
        console.log(`la palabra ${palabra} es palindromo`);
    }
    else{
        console.log("la palabra ingresa no es un poalindromo");
    }
rl.close();
});
