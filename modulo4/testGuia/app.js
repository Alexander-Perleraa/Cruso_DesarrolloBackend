module.exports=
{
    esNumeroPar,
    factorial,
    maxArray,
    esPalindromo,
    sumaArray,
    revertirCadena,
    filtrarPares,
    contarPalabras,
    celsiusAFahrenheit
}

function esNumeroPar(numero) {
    return numero % 2 === 0;
   }
  



   function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
   }
 


   function maxArray(arr) {
    return Math.max(...arr);
   }
 
   function esPalindromo(str) {
    const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
   }
   
   
   function sumaArray(arr) { return arr.reduce((acc, num) => acc + num, 0); }

   function revertirCadena(str) { return str.split('').reverse().join(''); }

   function filtrarPares(arr) {
    return arr.filter(num => num % 2 === 0);
   }
   

   function contarPalabras(str) { return str.split(' ').length; }

   function celsiusAFahrenheit(celsius) { return (celsius * 9/5) + 32; }


