export default function analyzeArray(array) {
    const average = array.reduce( (a, b) => a + b ) / array.length;
    const min = getMin(array);
    const max = getMax(array);
    const length = array.length;

    const object = {
        average: average,
        min: min,
        max: max,
        length: length,
    };

    return object;
}

function getMin(array) {
    array.sort((a, b) => a - b);
    return array[0];
}

function getMax(array) {
    array.sort((a, b) => b - a);
    return array[0];
}