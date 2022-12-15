import keys from "../keys.js"

test('Positive keys test', () => {
    expect(keys('kissa')).toStrictEqual(['0', '1', '2', '3', '4'])
});
