const readline = require('readline');

const rl = readline.createInterface
({  
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese la categoria:" , (categoria)=>
    {
        let tipoVehiculo
        switch(categoria){
            case moto:
                tipoVehiculo="Motocicleta";
                break;
            case Auto:
                tipoVehiculo="Autmovil";
                break;
            case Camion:
                tipoVehiculo="Super camion";
                break;  
                case Bicicleta:
                    tipoVehiculo="Super bicicleta";
                    break; 
                    default:
                    tipoVehiculo="La categoria no existe"
                    break;
        }
        console.log(tipoVehiculo)
    })            