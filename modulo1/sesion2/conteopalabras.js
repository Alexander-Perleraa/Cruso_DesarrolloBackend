function contarpalabras(array){
    let contadorpalabras={};
    array.forEach(cadena => {
        let palabras=cadena.split(/\s+/);
        palabras.forEach(palabras=>{
            if(contadorpalabras[palabras]){
                contadorpalabras[palabras]++;

            }else{
                contadorpalabras[palabras]=1
            }
        })
    });
    return contadorpalabras;

}
let palabrasarray=["Hola buenos dias", "Hola buenas tarde", "Hola buenas noches"];
let resultado = contarpalabras(palabrasarray);
console.log(resultado)