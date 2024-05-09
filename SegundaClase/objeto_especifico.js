let personas =[
    {nombre:"Sergio", edad: 33, ciudad:"San Salvador"},
    {nombre:"Marlene", edad: 50, ciudad:"Santa Tecla"},
    {nombre:"Martha", edad: 30, ciudad:"San Salvador"},
    {nombre:"Sonia", edad: 25, ciudad:"San Miguel"},
   
];
function buscarPorNombre(arraypersona, nombre){
return arraypersona.find(objeto=>objeto.nombre ===nombre)
}
let personaBuscada=buscarPorNombre(personas, "Marlene");
console.log(personaBuscada)