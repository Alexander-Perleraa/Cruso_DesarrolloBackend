class Persona
{
    constructor(nombre,edad)
    {
        this.nombre=nombre,
        this.edad=edad
    }
    saludo()
    {
        console.log(`Hola mi nombres es ${this.nombre} y tengo ${this.edad}`)
    }
}
module.exports=Persona