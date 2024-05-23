import inquirer from "inquirer"


const pregunta =
[
    {
        type: `input`,
        name: `nombre`,
        message: `Digame su nombre`
    },
    {
        type: `confirm`,
        name: `confirmacion`,
        message: `Seguro que es su nombre`
    },
    {
        type: `list`,
        name: `color`,
        message: `Cual es su color favorito`,
        choices: [`Verde`, `Amarillo`, `Rojo`, `Azul`, `Morado`, `Negro`]
    },
    {
        type: `checkbox`,
        name: `intereses`,
        message: `Cual es su opcion de interes`,
        choices: [`Programacion`, `Diseno`, `Base de datos`,]
    },
    {
        type: `password`,
        name: `contraseña`,
        message: `Ingrese su contraseña`,
        mask: `*`
    },
]

inquirer.prompt(pregunta).then((respuesta) => 
    {
        
        if(respuesta.confirmacion)
            {
                console.log(`Confirmacion exitosa`)
                console.log(`Hola ${respuesta.nombre}`)
                console.log(`Tu color favorito es ${respuesta.color}`)
                console.log(`Tus intereses son ${respuesta.intereses.join(`, `)}`)
                console.log(`Tu contrasena es: ${respuesta.contraseña}`)
            }else
            {
                console.log(`No se confirmo el nombre`)
            }
    })













/*import inquirer from "inquirer"


const pregunta =
[
    {
        type: `input`,
        name: `nombre`,
        message: `Digame su nombre`
    },
    {
        type: `confirm`,
        name: `confirmacion`,
        message: `Seguro que es su nombre`
    },
    {
        type: `list`,
        name: `color`,
        message: `Cual es su color favorito`,
        choices: [`Verde`, `Amarillo`, `Rojo`, `Azul`, `Morado`, `Negro`]
    },
]

inquirer.prompt(pregunta).then((respuesta) => 
    {
        
        if(respuesta.confirmacion)
            {
                console.log(`Confirmacion exitosa`)
                console.log(`Hola ${respuesta.nombre}`)
                console.log(`Tu color favorito es ${respuesta.color}`)
            }else
            {
                console.log(`No se confirmo el nombre`)
            }
    })*/











/*import inquirer from "inquirer"

const pregunta =
[
    {
        type: `input`,
        name: `nombre`,
        messae: `Digame su nombre`
    },
    {
        type: `confirm`,
        name: `confirmacion`,
        messae: `Seguro que es su nombre`
    },
]

inquirer.prompt(pregunta).then((respuesta) => 
    {
        console.log(`Hola ${respuesta.nombre}`)
        if(respuesta.confirmacion)
            {
                console.log(`Confirmacion exitosa`)
            }else
            {
                console.log(`No se confirmo el nombre`)
            }
    })*/