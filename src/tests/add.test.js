import add from "../add";

test('adds negative number to positive correctly', () => {
    expect(add(-2,2)).toBe(0)
});

test('adds positive number to negative correctly', () => {
    expect(add(-2,2)).toBe(0)
});

test('adds negative number to negative correctly', () => {
    expect(add(-2,-2)).toBe(-2)
});

test('adds positive number to positive correctly', () => {
    expect(add(2,2)).toBe(4)
});

test('adding non-number throws exception', () => {
    expect(() => add(2,"jotain")).toThrow()
})