const readline =require('readline')
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function evaluar(numero){
        if(numero >= 1){
            return console.log(numero  + " El numero es positivo")
        }else if(numero <= -1){
            return console.log(numero  + " El numero es negativo")
        }else{
            return console.log("El numero es 0")
        }
}
rl.question("Ingrese un numero:" , (numero) =>
    {
        const num=evaluar(numero)
    })