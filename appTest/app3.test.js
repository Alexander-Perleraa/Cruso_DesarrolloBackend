const valor = require(`./app3.js`)

test(`Evaluar numero positivo`, () =>
    {
        expect(valores(8)).toBe(`positivo`)
    })

test(`Evaluar numero negativo`, () =>
    {
        expect(valores(-4)).toBe(false)
    })