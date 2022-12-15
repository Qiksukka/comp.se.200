import toString from "../toString.js";

test('Nothing', () => {
    expect(toString('')).toStrictEqual('')
});

test('Null', () => {
    expect(toString(null)).toStrictEqual('')
});

test('String', () => {
    expect(toString('Kissa')).toBe('Kissa')
});

test('Longer strings', () => {
    expect(toString('Kissa koira {[(\\//')).toBe('Kissa koira {[(\\//')
});

test('Arrays', () => {
    expect(toString(['kissa', 'koira', 'hebo'])).toBe('kissa,koira,hebo')
});
