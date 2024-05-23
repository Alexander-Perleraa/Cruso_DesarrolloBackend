import inquirer from "inquirer";

inquirer.prompt
([
    {
        type: "checkbox",
        name: "Frutas",
        message: "Selecciona tu fruta favorita",
        choices: ["Manzana", "Banana", "Uvas", "Naranja"]
    }
])
.then(respuesta => 
{
    console.log(`Frutas seleccionadas: ${respuesta.Frutas.join(", ")}`);
    if(respuesta.Frutas.includes("Manzana") && respuesta.Frutas.includes("Banana"))
    {
        console.log("Licuado de fresco.");
    }else if(respuesta.Frutas.includes("Manzana") && respuesta.Frutas.includes("Naranja")){
        console.log("Licuado acido");
    }else if(respuesta.Frutas.includes("Banana") && respuesta.Frutas.includes("Naranja")){
        console.log("Licuado Jumex");
    }else{
        console.log("Licuado mixto");
    }
});