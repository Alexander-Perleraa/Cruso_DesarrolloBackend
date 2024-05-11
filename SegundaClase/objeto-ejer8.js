function validarObjeto(objeto){
    const propiedades=['nombre' , 'direccion' , 'telefono'];
    for (let propiedad of propiedades){
        if(objeto.hasOwnProperty(propiedad)){
         let mjs= "Objeto Aprobado"}
         return mjs   
    }

}
let cliente={nombre:"william" , direccion:"San Miguel" , telefono:78222727}
console.log(validarObjeto(cliente))