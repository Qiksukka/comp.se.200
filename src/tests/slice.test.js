import slice from "../slice.js"

test('Positive slice test', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, 2)).toStrictEqual([3, 4])
});

test('Array len=0', () => {
    var array = []
    expect(slice(array,2)).toStrictEqual([])
});

test('Null', () => {
    expect(slice('',5)).toStrictEqual([])
});

test('Negative splitting', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, -2)).toStrictEqual([3, 4])
});

test('Positive overflow', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, 20)).toStrictEqual([])
});

test('Negative overflow', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, -20)).toStrictEqual([1, 2, 3, 4])
});

test('End overflow', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, 2, 6)).toStrictEqual([3,4])
});

test('End neg overflow', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, 2, -6)).toStrictEqual([])
});

test('Splice 0', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, 0)).toStrictEqual([1, 2, 3, 4])
});

test('End 0', () => {
    var array = [1, 2, 3, 4]
    expect(slice(array, 0, 0)).toStrictEqual([])
});
