import filter from "../filter";

test("filters items correctly when predicate is string", () => {
    const items = [
        {name: "item1", category: "category1"},
        {name: "item2", category: "category2"},
        {name: "item3", category: "category1"},
        {name: "item4", category: "category3"},
    ]

    const filteredItems = filter(items, ({category}) => category === "category1")
    expect(filteredItems.length).toBe(2)
})

test("filters items correctly when predicate is bool", () => {
    const items = [
        {name: "item1", inStock: true},
        {name: "item2", inStock: false},
        {name: "item3", inStock: true},
        {name: "item4", inStock: true},
    ]

    const filteredItems = filter(items, ({inStock}) => inStock)
    expect(filteredItems.length).toBe(3)
})

test("returns empty array when given empty array", () => {
    const items = []

    const filteredItems = filter(items, ({inStock}) => inStock)

    expect(filteredItems.length).toBe(0)
})

test("returns empty array when given null as array", () => {
    const items = null

    const filteredItems = filter(items, ({inStock}) => inStock)

    expect(filteredItems.length).toBe(0)
})