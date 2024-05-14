let productoA ={
    nombre:"camisa",
    precio: 25,
    cantidad:5
}
let productoB ={
    nombre:"jeans",
    precio: 40,
    cantidad:3
};
let costoTotalProductoA=productoA.precio*productoA.cantidad;
let costoTotalProductoB=productoB.precio*productoB.cantidad;
let costoTotal=costoTotalProductoA+costoTotalProductoB;
console.log(costoTotalProductoA);
console.log(costoTotalProductoB);
console.log("total $"+costoTotal);

