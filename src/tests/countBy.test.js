import countBy from "../countBy";

test("calculates amount of items correctly, when constraint is a bool", () => {
    const users = [
        { user: 'barney', active: true },
        { user: 'betty', active: true },
        { user: 'fred', active: false }
      ]
    
      const result = countBy(users, value => value.active);
      expect(result.true).toBe(2)
      expect(result.false).toBe(1)
})

test("calculates amount of items correctly, when constraint is a string", () => {
    const items = [
        {name: "toaster", category: "electronics"},
        {name: "boots", category: "shoes"},
        {name: "TV", category: "electronics"}
    ]

    const result = countBy(items, product => product.category)
    expect(result.electronics).toBe(2)
    expect(result.shoes).toBe(1)
});

test("returns empty object when items is empty", () => {
    const items = []

    const result = countBy(items, product => product.category)
    expect(JSON.stringify(result)).toBe('{}');
});

test("returns empty object when object field does not exist", () => {
    const items = [
        {},
        {},
        {}
    ]

    const result = countBy(items, product => product.category)
    expect(JSON.stringify(result)).toBe('{}');
});