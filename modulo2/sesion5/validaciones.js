import inquirer from "inquirer";

const pregunta = 
[
    {
        type:`input`,
        name:`correo`,
        message:`Introduce el correo:`,
        validate:function(value){
            const validacion = value.match( 
                /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        )
        if (validacion)
            {
                return true
            }
            return `Porfavor introuzca correo valido`
    }
    }
]

inquirer.prompt(pregunta)
    .then((respuesta) => 
        {
            console.log(`Correo ingreasado: ${respuesta.correo}`)

        })
    .catch((err) =>
        {
            console.error(`Error al ingresar al correo`, err)
        })    