function multiplicarPromise(a,b)
{
    return new Promise((resolve,reject) => {
        const resultado= a*b

        if(isNaN(resultado))
            {
                reject(`ERROR, NO HAYA RGUMENTOS VALIDOS`)
            }
            else{
                resolve(resultado)
            }
    })
}

multiplicarPromise(2,3)
.then((resultado) => 
    {
        console.log(resultado)
    })
.catch((error) =>
    {
        console.error(error)
    })