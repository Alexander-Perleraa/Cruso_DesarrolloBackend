const {esNumeroPar, factorial, maxArray, esPalindromo, sumaArray, revertirCadena, filtrarPares, contarPalabras, celsiusAFahrenheit } = require('./app.js');

test('debería devolver true para números pares', () => {
  expect(esNumeroPar(2)).toBe(true);
  expect(esNumeroPar(4)).toBe(true);
});

test('debería devolver false para números impares', () => {
  expect(esNumeroPar(1)).toBe(false);
  expect(esNumeroPar(7)).toBe(false);
});





test('debería devolver 1 para 0', () => {
  expect(factorial(0)).toBe(1);
});

test('debería devolver el factorial de un número positivo', () => {
  expect(factorial(5)).toBe(120); 
});




test('debería devolver el número más alto en un array de números ', () => {
    expect(maxArray([10, 20, 30, 40, 50])).toBe(50);
  });



  test('debería devolver true para cadenas palíndromas', () => {
    expect(esPalindromo('ana')).toBe(true);
    });

    test('debería devolver false para cadenas no palíndromas', () => {
        expect(esPalindromo('JavaScript')).toBe(false);
      });


      test('debería devolver la suma de los elementos en un array ', () => {
        expect(sumaArray([1, 2, 3, 4, 5])).toBe(15);
    });


    test('debería revertir cadenas no vacías', () => {
        expect(revertirCadena('hello')).toBe('olleh');
    });


    test('debería filtrar los números pares en un array de números positivos', () => {
        expect(filtrarPares([1, 2, 3, 4, 5])).toEqual([2, 4]);
    });

    test('debería contar las palabras en una cadena simple', () => {
        expect(contarPalabras('Hola mundo')).toBe(2);
    });

    test('debería convertir correctamente temperaturas de Celsius a Fahrenheit', () => {
        expect(celsiusAFahrenheit(0)).toBe(32); 
    });