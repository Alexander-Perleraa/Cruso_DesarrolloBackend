class persona {
    constructor(peso, altura) {
    this.peso = peso;
    this.altura = altura;

    }
    Mostrar(){
        let persona =this.peso/(Math.pow(this.altura, 2));
        console.log(`El imc es: ${persona}.`);
    }
}
let persona1 =new persona(170,1.75);

persona1.Mostrar();