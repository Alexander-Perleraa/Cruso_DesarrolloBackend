const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) =>
    {
    if((req.method === "POST" || req.method === "PUT") && (
                !req.body.nombre || 
                !req.body.edad ||
                !req.body.genero ||
                !req.body.departamento
        )
    ){
        return res.status(400).send("debe de cargar toda la información para almacenar");}
            next();
    });

app.use((req, res, next) =>{
    if(req.method === "POST" && typeof req.body.edad !== "number"){
        return res.status(400).send("El campo de edad debe ser numerico");
    }next();
});

let Datos = 
[
    {
        id: 1,
        nombre: "Douglas",
        edad: 23,
        genero: "Masculino",
        departamento: "Santa Ana"
    }
];

app.get('/', (req, res) => res.json(Datos).status(200));

app.get('/:id', (req, res) => {
    const id  = parseInt(req.params.id);
    const item = Datos.find(item => item.id === id);
if(item){
        res.json(item).status(200);
    }else{
        res.status(404).send("No se encontro lo solicitado");
    }
});

app.post('/', (req, res) =>{
    const { nombre, edad, genero, departamento } = req.body;
    const newItem = {
        id: Datos.length + 1,
        nombre: nombre,
        edad: edad,
        genero: genero,
        departamento: departamento
    };
    Datos.push(newItem);
    res.json(newItem).status(201);
});

app.put('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const { nombre, edad, genero, departamento } = req.body;
    const itemIndex = Datos.findIndex(item => item.id === id);
    if(itemIndex !== -1){
        Datos[itemIndex] = {
            id: id,
            nombre: nombre,
            edad: edad,
            genero: genero,
            departamento: departamento
        };
        res.status(204).end();
    }else{
        res.status(404).send("No se encontro lo solicitado.");
    }

});

app.delete('/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const itemIndex = Datos.findIndex(item => item.id === id);
 if(itemIndex !== -1){
        Datos.splice(itemIndex, 1);
        res.status(204).end();
    }else{
        res.status(404).send("No se encontro lo solicitados");}
});
app.listen(PORT, () => console.log(`el serviddor se esta escuchando en el puerto: ${PORT}!`));