import ceil from "../ceil";

test("Rounds to whole number when only first parameter given", () => {
    expect(ceil(2.04)).toBe(3)
});

test("Rounds to correct decimal when positive decimal is given", () => {
    expect(ceil(4.4452, 3)).toBe(4.446)
})

test("Rounds to correct decimal when positive decimal is given", () => {
    expect(ceil(1452.4452, -2)).toBe(1500)
})

test('adding non-number throws exception', () => {
    expect(() => ceil(50.50,"jotain")).toThrow()
})