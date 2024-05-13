function multiplicar(a,b,callback)
{
    const resultado = a*b
    callback(resultado)
}

multiplicar(6,2, (resultado) => 
{
    console.log(`Resultado:` , resultado)
})