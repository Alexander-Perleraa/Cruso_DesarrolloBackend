const numeroPositivo = require('./app2.js');

test('Sumar dos numeros a + b', () => 
{
    expect(numeroPositivo(5)).toBe(true);
});