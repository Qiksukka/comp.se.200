import words from "../words.js";

test('Match pattern', () => {
    expect(words('cat mat pat hat fat')).toStrictEqual(['cat', 'mat', 'pat', 'hat', 'fat'])
});
