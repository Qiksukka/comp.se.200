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

    const categoriesAmount = countBy(items, product => product.category)
    expect(categoriesAmount.electronics).toBe(2)
    expect(categoriesAmount.shoes).toBe(1)
});

test("returns empty array when items is empty", () => {
    const items = []

    const categoriesAmount = countBy(items, product => product.category)
    expect(categoriesAmount.length).toBe(0)
});

test("returns empty array when object field does not exist", () => {
    const items = [
        {},
        {},
        {}
    ]

    const categoriesAmount = countBy(items, product => product.category)
    expect(categoriesAmount.length).toBe(0)
});