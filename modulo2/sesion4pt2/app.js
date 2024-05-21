/*const fs = require(`fs`)
const path= require(`path`)
const readline=require(`readline`)


const documents = path.join(process.env.Home || process.env.USERPROFILE, `Documents`)
const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`Nombre de la carpeta a eliminar:`, (carpeta) => 
    {
        const carpetadel = path.join(documents,carpeta)
        fs.rmdir(carpetadel, { recursive: true}, (err) => 
            {
                if(err)
                    {
                        console.error(`Error en eliminar la carpeta`, err)
                    }else
                        {
                            console.log(`Carpeta eliminada`)
                        }
            })
    })*/









/*const fs = require(`fs`)
const path= require(`path`)
const readline=require(`readline`)

const documents = path.join(process.env.Home || process.env.USERPROFILE, `Documents`)
const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question(`Nombre de la carpeta a crear:`, (carpeta) => 
    {
        const nuevacarpeta = path.join(documents,carpeta)
        fs.mkdir(nuevacarpeta, { recursive: true}, (err) => 
            {
                if(err)
                    {
                        console.error(`Error en crear la carpeta`, err)
                    }else
                        {
                            console.log(`Carpeta creada`)
                        }
            })
    })*/





/*const fs = require(`fs`)
const ruta=`c:/users/Alex/Desktop/code.txt`

fs.readFile(ruta, `utf8`, (err,data)=> 
    {
        if(err)
            {
                console.log(`Error al leer archivo`, err)
            }else
            {
                console.log(`El archivo esta leido`, data)
            }
    })*/








/*const fs = require('fs');

const archivo = "archivo.txt";

const contenidoAgregado =  "\n Este es el contenido agregado";

fs.appendFile(archivo, contenidoAgregado, err =>
{
    if(err)
    {
        console.error("Error al agregar el contenido.",err);
    }
    else
    {
        console.log("Contenido agregado al archivo.");
    }
});/





/*const fs = require(`fs`)

const contenido= "este es el nuevo contenido"
fs.writeFile(`archivo.txt`, contenido, err =>
    {
        if(err)
            {
                console.log(`Error al escribir el archivo`)
            }else
            {
                console.log(`Elarchivo esta escrito`)
            }
    })*/




/*const fs = require(`fs`)

fs.readFile(`archivo.txt`, `utf8`, (err, data)=>
    {
        if(err)
            {
                console.error(`Error al leer el archivo`, err)
            }
        else
        {
           console.log(`El contenido del archivo:`, data) 
        }    
    })*/