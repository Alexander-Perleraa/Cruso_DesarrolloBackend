const readline = require('readline');

const rl = readline.createInterface
({  
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese la categoria:" , (categoria)=>
    {
        let tipoVehiculo = "";
        switch(categoria)
        {
            case "Moto":
                tipoVehiculo = "Motocicleta";
                break;
            case "Auto":
                tipoVehiculo = "Automovil";
                break;
            case "Camion":
                tipoVehiculo = "Super camion";
                break;
            case "Bicicleta":
                tipoVehiculo = "Super bicicleta";
                break;
        }
        console.log(tipoVehiculo);
    })            