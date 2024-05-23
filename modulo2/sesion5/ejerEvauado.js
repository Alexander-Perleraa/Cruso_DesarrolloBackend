import inquirer from 'inquirer';

let correoAlmacenado = '';
let contrasenaAlmacenada = '';

const preguntaRegistro = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Dígame su nombre:',
    },
    {
        type: 'input',
        name: 'edad',
        message: 'Dígame su edad:',
        validate: (input) => {
            const edad = parseInt(input);
            if (isNaN(edad)) {
                return 'Por favor, ingrese un número válido';
            }
            if (edad < 0) {
                return 'Por favor, ingrese una edad válida';
            }
            return true;
        }
    },
];

const preguntaInicioSesion = [
    {
        type: 'input',
        name: 'correo',
        message: 'Ingrese su correo:',
        validate: (input) => {
            const validEmail = /\S+@\S+\.\S+/;
            if (validEmail.test(input)) {
                return true;
            }
            return 'Por favor, ingrese un correo electrónico válido';
        }
    },
    {
        type: 'password',
        name: 'contrasena',
        message: 'Ingrese su contraseña:',
        mask: '*',
    }
];

inquirer.prompt(preguntaRegistro).then((respuesta) => {
    if (parseInt(respuesta.edad) > 18) {
        inquirer.prompt([
            {
                type: 'input',
                name: 'correo',
                message: 'Ingrese su correo:',
                validate: (input) => {
                    const validEmail = /\S+@\S+\.\S+/;
                    if (validEmail.test(input)) {
                        return true;
                    }
                    return 'Por favor, ingrese un correo electrónico válido';
                }
            },
            {
                type: 'password',
                name: 'contrasena',
                message: 'Ingrese su contraseña:',
                mask: '*',
                validate: (input) => {
                    if (input) {
                        return true;
                    } else {
                        return 'Por favor, ingrese una contraseña';
                    }
                }
            }
        ]).then((respuestasAdicionales) => {
            correoAlmacenado = respuestasAdicionales.correo;
            contrasenaAlmacenada = respuestasAdicionales.contrasena;
            console.log('Registro completado.');

            iniciarSesion();
        });
    } else {
        console.log('No se requiere un correo electrónico ni contraseña');
    }
});

function iniciarSesion() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'iniciarSesion',
            message: '¿Desea iniciar sesión?',
            default: true
        }
    ]).then((respuesta) => {
        if (respuesta.iniciarSesion) {
            inquirer.prompt(preguntaInicioSesion).then((respuestasInicioSesion) => {
                if (
                    respuestasInicioSesion.correo === correoAlmacenado &&
                    respuestasInicioSesion.contrasena === contrasenaAlmacenada
                ) {
                    console.log('Inicio de sesión exitoso.');
                } else {
                    console.log('Correo electrónico o contraseña incorrectos.');
                    iniciarSesion();
                }
            });
        } else {
            console.log('Gracias por usar nuestro servicio.');
        }
    });
}