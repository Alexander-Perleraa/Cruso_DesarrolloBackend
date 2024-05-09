let personas =[
    {nombre:"Sergio", edad: 33, ciudad:"San Salvador"},
    {nombre:"Marlene", edad: 50, ciudad:"Santa Tecla"},
    {nombre:"Martha", edad: 30, ciudad:"San Salvador"},
    {nombre:"Sonia", edad: 25, ciudad:"San Miguel"},
   
];
function filtrarPersonas(personaObjeto, ciudad){
    return personaObjeto.filter(persona=>persona.edad>30 && persona.ciudad ===ciudad)

}
let personasFiltradas=filtrarPersonas(personas,"Santa Tecla")
console.log(personasFiltradas);