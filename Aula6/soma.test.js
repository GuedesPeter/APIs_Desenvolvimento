const soma = require('./soma')

test("soma de 5 e 5 deve ser 10", () => {
    expect(soma(5,5)).toBe(10);
})

test("soma de -1 e -2 deve ser -3", () => {
    expect(soma(-1,-2)).toBe(-3);
})
test("soma de algum valor com zero deve ser undefined", () => {
    expect(soma(0,1)).toBe(undefined);
})