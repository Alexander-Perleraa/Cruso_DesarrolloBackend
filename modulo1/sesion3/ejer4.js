const readline =require('readline')
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Ingrese un numero", (num)=>{
    if(parseFloat(num)% 2 === 0){
        console.log("El numero es par")
    }else{
        console.log("El numero no es par")
    }
})