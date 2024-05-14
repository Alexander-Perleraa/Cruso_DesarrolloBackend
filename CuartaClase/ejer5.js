function operacionAsincrona(callback)
{
    setTimeout(() =>
        {
            callback(`Operacion asincrona comppletada`)
        }, 8000)
}

operacionAsincrona((mensaje) =>
    {
        console.log(mensaje)
            
        
    })