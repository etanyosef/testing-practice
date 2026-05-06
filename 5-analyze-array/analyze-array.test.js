import analyzeArray from "./analyze-array";

const object = {
   average: 4,
   min: 1,
   max: 8,
   length: 6
}

test('Analyze array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(object);
});