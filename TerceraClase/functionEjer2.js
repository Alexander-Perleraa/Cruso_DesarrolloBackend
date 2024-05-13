const readline =require('readline')
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function comparar(numero1 , numero2 , numero3){
            if(numero1>numero2 && numero1 > numero3){
                return console.log("El numero 1 es el mayor de los 3")
            }else if(numero2>numero1 && numero2 > numero3){
                return console.log("El numero 2 es el mayor de los 3")
            }else(numero3>numero1 && numero3 > numero2)
            return console.log("El numero 3 es el mayor de los 3")
}


rl.question("Ingrese el primer numero:" , (numero1)=>
{
    rl.question("Ingrese el segundo numero" , (numero2) => 
    {
        rl.question("Ingrese el tercer numero" , (numero3) => 
        {
            console.log("hola");
        })
    })
})

