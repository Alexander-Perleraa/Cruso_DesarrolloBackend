let listaCompras ={
    "Manzanas":5,
    "Platanos":3,
    "Elotes":2,
    "Pan":1

}
function generarListaCompras(listaCompras){
    let listalegible= "Lista de compras:\n"

    for (let elemento in listaCompras){
        listalegible+= `${elemento} : ${listaCompras[elemento]} unidades \n`
        
    }
    return listalegible

}
let listalegible =generarListaCompras(listaCompras)
console.log(listalegible);