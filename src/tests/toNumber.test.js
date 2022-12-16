import toNumber from "../toNumber.js";

test('Nan to 0', () => {
    expect(toNumber(NaN)).toStrictEqual(NaN)
});

test('Number should be a number', () => {
    expect(toNumber("12")).toBe(12)
});

test('Random string to number', () => {
    expect(toNumber("Kissa")).toBe(NaN)
});

test('Decimal with dot', () => {
    expect(toNumber(4.20)).toBe(4.20)
});

test('Decimalstring with dot', () => {
    expect(toNumber("4.20")).toBe(4.20)
});

test('MaxNumber', () => {
    expect(toNumber(Number.MAX_VALUE)).toBe(Number.MAX_VALUE)
});

test('MinNumber', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
});

test('Hexy numbers', () => {
    expect(toNumber(0x3130)).toBe(12592)
});


test('Binary numbers', () => {
    expect(toNumber(0b11001101010101001)).toBe(105129)
});

test('Symbol as a number', () => {
    let id = Symbol("7");
    expect(toNumber(id)).toStrictEqual(NaN)
});

test('Object as a number', () => {
    let obj = "777";
    expect(toNumber(obj)).toStrictEqual(NaN)
});

test('String', () => {
    expect(toNumber('string')).toStrictEqual(NaN)
});
