const findLargestNumber = numbers => Math.max(...numbers);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
let result = performOperation(getRandomNumber(), getRandomNumber());
const randomNumber = getRandomNumber();
banana

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

true - orange
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const multiply = (a, b) => a * b;

82 / true
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
3,30,75,72,58,46,64,37,37,47,55,10,45,83,19,9,70,79,6,94,78,32,44,76,32,2,93,81,32,13,41,42,47,10,33,29,49,80,62,56,97,23,23,88,89,17,0,95,72,53,89,71,5,4,67,80,26,18,5,44,50,68,92,90,90,86,5,91,19,87,40,42 / 65,42,70,38,92,40,69,32,50,85,36,36,23,78,15,92,60,47,17,8,25,21,93,73,60,34,54,55,8,54,38,68,26,70,78,34,50,16,62,54,68,46
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

true / apple
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
orange

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const reverseWords = str => str.split(" ").reverse().join(" ");
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
