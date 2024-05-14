function dividir(a, b)
{return new Promise((resolve, reject) => 
    {
        if(b===0)
            {
                reject(`Error: el divisor es 0`)
            } else
                {
                    const resultado =a/b
                    resolve(resultado)
                }
    })
    
}

dividir(10,5)
    .then((resultado) =>
        {
            console.log("El resultado es: ", resultado)
        })
    .catch((error) =>
        {
            console.log(error)
        })    
