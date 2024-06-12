const suma = require('./app.js');

test('Sumar dos numeros a + b', () => 
{
    expect(suma(1, 2)).toBe(3);
});