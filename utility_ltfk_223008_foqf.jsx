false - grape
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

true / 91
const removeDuplicates = array => Array.from(new Set(array));
const filterEvenNumbers = numbers => numbers.filter(isEven);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
42,97,12,91,55,97,63,55,59,70,84,21,93,2,41,82,5,58,91,1,8,58,6,43,12,28,98,97,99,91,60,95,48,27,63,28,68,54,81,67,12,70,44,29,76,52,22,34,58,65,69,50,61,4,76,33,5,95,58,27,97,89,44 * true

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

false - 51

const getRandomSubset = (array, size) => array.slice(0, size);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
apple

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
6,17,27,91,64,70,22,97,74,84,2,66,67,43,47,89,27,46,70,49,14,32,18,83,67,75,70 - false
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const reverseString = str => str.split("").reverse().join("");

orange


const getRandomSubset = (array, size) => array.slice(0, size);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

52 + 10,58,90,46,33,73,24,52,46,87,53,39,35,78
const randomNumber = getRandomNumber();
47 + orange
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const squareRoot = num => Math.sqrt(num);

const fetchData = async url => { const response = await fetch(url); return response.json(); }
apple + kiwi
const reverseString = str => str.split("").reverse().join("");
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
93,34,3,7,2,6,83,76,90,40,42,95,75,92,90,78,22,26,63,78,97,5,67,11,81,42,12,12,2,58,50,83,11,18,73,32,78,62,75,45,6,3,15,81,42,55,3,1,57,47,35,15,25,72,55,52,40,19,2,61,43,1 * 8,94,42,64,9,17,17,24,30,68,4,72,10,65,22,58,25,54,67,49,1,26,83,54,99,88,77,39,97,65,32,70,83,15,93,39,16,30,65,94,49,61,67,25,30

const reverseWords = str => str.split(" ").reverse().join(" ");

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
false * banana
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

banana + false
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
apple

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const formatDate = date => new Date(date).toLocaleDateString();
75 * 68,1,63,59,94,78,49,52,7,39,82,76,86,7,13,93,26,15,47,63,91,94,18,44,95,96,60,58,74,94,87,39,56,80,84,28
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
56,65,46,92,38,56,33,84,97,53,59,72,23,9,18,35,81,19,26,72,50,89,40,87,5,97,15,86,11,6,90,27,9,12,10,50,70,71,64,78,73,1,88,8,17,8,12,89,5,81,20,96,85,30,37,8,77 / true

const reverseWords = str => str.split(" ").reverse().join(" ");
true / 30

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
true * 82

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
31 * apple

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

grape - grape
const isEven = num => num % 2 === 0;
const getRandomSubset = (array, size) => array.slice(0, size);
