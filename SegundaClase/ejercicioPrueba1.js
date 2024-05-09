class bebe {
    constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    }
    llorar() {
    console.log(`El bebe ${this.nombre} de ${this.edad} meses esta llorando`);
    }
    Comer() {
        console.log(`El bebe ${this.nombre} de ${this.edad} meses esta comiendo`);
        }
    Dormir() {
        console.log(`El bebe ${this.nombre} de ${this.edad} meses esta durmiendo`);
            }
   }
   let bebe1= new bebe("Antonio",3);
   let bebe2= new bebe("Sonia",5);
   let bebe3= new bebe("Javier",8);

   bebe1.llorar();
   bebe1.Comer();
   bebe1.Dormir();

   bebe2.llorar();
   bebe2.Comer();
   bebe2.Dormir();

   bebe3.llorar();
   bebe3.Comer();
   bebe3.Dormir();