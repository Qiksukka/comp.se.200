import slice from "../slice.js"

test('Positive slice test', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, 2)).toStrictEqual([3, 4])
});
