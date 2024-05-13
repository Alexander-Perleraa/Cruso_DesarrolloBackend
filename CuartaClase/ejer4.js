const { resolve } = require("path");

function retrasarPromesa(ms)
{
    return new Promise((resolve) =>
        {
            setTimeout(() => 
                {
                    resolve(`la promesa se ha resuelto en ${ms} milisegundos`)
                }, ms)
        })
}
retrasarPromesa(2000)
.then((mensaje) => 
    {
        console.log(mensaje);
    })