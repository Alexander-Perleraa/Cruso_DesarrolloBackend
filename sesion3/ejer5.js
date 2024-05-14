const readline = require('readline');

const rl = readline.createInterface
({  
    input: process.stdin,
    output: process.stdout
})

//rojo,amarillo,azul

rl.question("Ingrese el primer color:", (color1)=>
    {
       rl.question("Ingrese el primer color:", (color1)=>{
        if (color1==="azul" && color2==="amarillo")
            {
                console.log("La mezcla genera color verde")
            }else if (color1==="azul" && color2==="rojo")
                {
                    console.log("la mezcla genera color morado")
                }else if(color1==="rojo" && color2==="amarillo")
                    {
                        console.log("la mezcla genera color naranja")
                    }else
                    {
                        console.log("LA combinacion no se encuentra disponible")
                    }

       })
    })  