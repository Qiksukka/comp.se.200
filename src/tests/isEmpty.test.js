import isEmpty from "../isEmpty";

test("null is empty", () => {
    expect(isEmpty(null)).toBe(true)
})

test("boolean is empty", () => {
    expect(isEmpty(true)).toBe(true)
    expect(isEmpty(false)).toBe(true)
})

test("number is empty", () => {
    expect(isEmpty(1)).toBe(true)
    expect(isEmpty(-100)).toBe(true)
    expect(isEmpty(0)).toBe(true)
})

test("no parameters returns true", () => {
    expect(isEmpty()).toBe(true)
})

test("populated array is not empty", () => {
    expect(isEmpty([1,2,3, "asd", {}])).toBe(false)
})

test("empty array is empty", () => {
    expect(isEmpty([])).toBe(true)
})

test("populated object is not empty", () => {
    expect(isEmpty({jotain: "jotain"})).toBe(false)
})

test("empty object is empty", () => {
    expect(isEmpty({})).toBe(true)
})

test("function that returns nothing is empty", () => {
    expect(isEmpty(() => {})).toBe(true)
})