const readline = require('readline');

const rl = readline.createInterface
({  
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese el numero de mes:" , (nMes)=>
    {
        let nombreMEs
        switch(parseInt(nMes)){
            case 1:
                nombreMEs="Enero";
                break;

                case 2:
                nombreMEs="Febrero";
                break;

                case 3:
                nombreMEs="Marzo";
                break;

                case 4:
                nombreMEs="Abril";
                break;

                case 5:
                nombreMEs="Mayo";
                break;

                case 6:
                nombreMEs="Junio";
                break;

                case 7:
                    nombreMEs="Julio";
                    break;
    
                    case 8:
                    nombreMEs="Agosto";
                    break;
    
                    case 9:
                    nombreMEs="Septiembre";
                    break;
    
                    case 10:
                    nombreMEs="Octubre";
                    break;
    
                    case 11:
                    nombreMEs="Noviembre";
                    break;
    
                    case 12:
                    nombreMEs="Diciembre";
                    break;
                    default:
                    nombreMEs="Numero de mes no existe"
                    break;
        }
        console.log(nombreMEs)
    })