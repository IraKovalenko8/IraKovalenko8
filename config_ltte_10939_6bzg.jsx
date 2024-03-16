const getRandomSubset = (array, size) => array.slice(0, size);
apple

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

const reverseString = str => str.split("").reverse().join("");
const sum = (a, b) => a + b;

