import yargs from "yargs"
import {hideBin} from "yargs/helpers"
import { agregarNotas,eliminarNotas,listarNotas,leerNotas,editarNotas } from "./utiles/notas.js";
import readline from "readline"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  function showMenu() {
    console.log("\nSeleccione una opción:");
    console.log("\n1. Agregar una nota");
    console.log("2. Eliminar una nota");
    console.log("3. Listar las notas");
    console.log("4. Leer una nota");
    console.log("5. Editar una nota");
    console.log("6. Salir");
  
    rl.question("> ", (option) => {
      switch (option) {
        case "1":
          rl.question("Ingrese el título de la nota: ", (title) => {
            rl.question("Ingrese el cuerpo de la nota: ", (body) => {
              agregarNotas(title, body);
              console.log("Nota añadida exitosamente");
              showMenu();
            });
          });
          break;
        case "2":
          rl.question("Ingrese el título de la nota a eliminar: ", (title) => {
            eliminarNotas(title);
            console.log("Nota eliminada exitosamente");
            showMenu();
          });
          break;
        case "3":
          listarNotas();
          showMenu();
          break;
        case "4":
          rl.question("Ingrese el título de la nota a leer: ", (title) => {
            leerNotas(title);
            showMenu();
          });
          break;
        case "5":
          rl.question("Ingrese el título de la nota a editar: ", (title) => {
            rl.question("Ingrese el nuevo cuerpo de la nota: ", (body) => {
              editarNotas(title, body);
              console.log("Nota editada exitosamente");
              showMenu();
            });
          });
          break;
        case "6":
          rl.close();
          break;
        default:
          console.log("Opción inválida");
          showMenu();
          break;
      }
    });
  }
  
  
  showMenu();

yargs(hideBin(process.argv))
.command({
    command: "agregar",
    describe: "agregar nueva nota",
    builder : 
    {
        title: 
        {
            describe: `Titulo de la nota`,
            demandOption: true,
            type: `string`,
        },
        body:{
            describe: `Cuerpo de la nota`,
            demandOption: true,
            type: `string`,
        },
    },
    handler(argv)
    {
        agregarNotas(argv.title, argv.body)

    },
})

.command({
    command:`eliminar`,
    describe: `Eliminar ua nota`,
    builder :
    {
        title: 
        {
            describe: `titulo de la nota`,
            demandOption: true,
            type: `string`,
        },
        
    }, handler(argv)
        {
            eliminarNotas(argv.title)
        }
})
.command({
    command:`ver`,
    describe: `lista de notas`,
    handler () {
        listarNotas();
    }
})

.command({
    command:`leer`,
    describe: `leer una nota`,
    builder : {
        title: {
            describe:`titulo de la nota`,
            demandOption: true,
            typ: `string`

        }
    }, handler (argv){
        leerNotas(argv.title);
    }
})
.command({
    command: 'editar',
    describe: 'Modificar una nota',
    builder: {
        title: {
            describe: 'Nota a modificar',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Nuevo contenido de la nota',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        editarNotas(argv.title, argv.body);
    },
})
.parse();