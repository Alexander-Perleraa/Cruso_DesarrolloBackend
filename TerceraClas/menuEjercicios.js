const readline = require('readline');

const rl = readline.createInterface
({
    input : process.stdin,
    output : process.stdout
});

function Iniciar()
{
    rl.question("Que ejercico desea probar?: ", (numEjer) =>
    {
        switch(parseInt(numEjer))
        {
            case 1:
                Ejercicio1();
                break;
            case 2:
                Ejercicio2();
                break;
            case 3:
                Ejercicio3();
                break;
            case 4:
                Ejercicio4();
                break;
            case 5:
                Ejercicio5();
                break;
            case 6:
                Ejercicio6();
                break;
            case 7:
                Ejercicio7();
                break;
        }
    });

}

function Ejercicio1()
{
    function EsMayor(numero)
    {
        if(numero > 0)
        {
            return "El numero es positivo";
        }
        else if(numero < 0)
        {
            return "El numero es negativo";
        }
        else
        {
            return "El numero es cero";
        }
    }

    rl.question("Ingrese un numero: ", (numero) => {
        console.log(EsMayor(numero));
        Iniciar();
    });
}

function Ejercicio2()
{
    function MayorDeTres(numero1, numero2, numero3)
    {
        if(numero1 > numero2 && numero1 > numero3)
        {
            return "El numero ${numero1} es mayor.";
        }
        else if(numero2 > numero1 && numero2 > numero3)
        {
            return "El numero ${numero2} es mayor.";
        }
        else if(numero3 > numero1 && numero3 > numero2)
        {
            return "El numero ${numero3} es mayor.";
        }
    }

    rl.question("Ingrese el primer numero: ", (numero1) => 
    {
        rl.question("Ingrese el segundo numero: ", (numero2) => 
        {
            rl.question("Ingrese el tercer numero: ", (numero3) => 
            {
                console.log(MayorDeTres(parseInt(numero1), parseInt(numero2), parseInt(numero3)));
                Iniciar();
            });
        });
    });

}
function Ejercicio3()
{
    function Factorial(numero)
    {
        let resultado = 1;
        for(let i = 1; i < numero; i++)
        {
            resultado *= i;
        }

        return resultado;
    }

    rl.question("Ingrese un numero: ", (numero) => 
    {
        console.log(Factorial(numero));
        Iniciar();
    });
}
function Ejercicio4()
{

}
function Ejercicio5()
{
    function DeterminarColor(color1, color2)
    {
        if(color1 == "azul" && color2 == "amarillo")
        {
            console.log("La combinacion da como resultado el color verde");
        }
        else if(color1 == "azul" && color2 == "rojo")
        {
            console.log("La combinacion da como resultado el color morado");
        }
        else if(color1 == "rojo" && color2 == "amarillo")
        {
            console.log("La combinacion da como resultado el color naranja");  
        }
        else
        {
            console.log("La combinacion no es valida"); 
        }
    }
    
    rl.question("Igrese el primer color: ", (color1) => 
    {
        rl.question("Igrese el segundo color: ", (color2) => 
        {
            DeterminarColor(color1.toLowerCase(), color2.toLowerCase());
            Iniciar();
        });
    });

}
function Ejercicio6()
{
    function DeterminarMes(numeroMes)
    {
        let nombreMes = "";
        switch(numeroMes)
        {
            case 1:
                nombreMes = "Enero";
                break;
            case 2:
                nombreMes = "Febrero";
                break;
            case 3:
                nombreMes = "Marzo";
                break;
            case 4:
                nombreMes = "Abril";
                break;
            case 5:
                nombreMes = "Mayo";
                break;
            case 6:
                nombreMes = "Junio";
                break;
            case 7:
                nombreMes = "Julio";
                break;
            case 8:
                nombreMes = "Agosto";
                break;
            case 9:
                nombreMes = "Septiembre";
                break;
            case 10:
                nombreMes = "Octubre";
                break;
            case 11:
                nombreMes = "Noviembre";
                break;
            case 12:
                nombreMes = "Diciembre";
                break;
            default:
                nombreMes = "El numero de mes no existe";
        }
    
        return nombreMes;
    }
    
    rl.question("Ingrese el numero de mes a conocer: ", (numeroMes) =>
    {
        console.log(DeterminarMes(parseInt(numeroMes)));
        Iniciar();
    });

}
function Ejercicio7()
{
    function DeterminarCategoria(categoria)
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
        return tipoVehiculo;
    }
    
    rl.question("Ingrese la categoria del vehiculo: ", (categoria) =>
    {
        console.log(DeterminarCategoria(categoria));
        Iniciar();
    });

}

Iniciar();