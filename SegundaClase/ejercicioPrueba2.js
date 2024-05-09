
class horaactual{
fecha= new Date();
constructor(){
this.hora=this.fecha.getHours();
this.minuto=this.fecha.getMinutes();
this.segundo=this.fecha.getSeconds();
}
Mostrar(){
    console.log(`La hora actual es: ${this.hora}:${this.minuto}:${this.segundo}`);
}
}
let actualidad= new horaactual();
actualidad.Mostrar();