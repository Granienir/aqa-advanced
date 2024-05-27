const numbers = new Array(2, -5, 0, 7, -3, 0, 10, -8, -11);

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

console.log(numbers);

// for (const num of numbers) {
//   if (num < 0) {
//     negativeCount++;
//   }
//   if (num > 0) {
//     positiveCount++;
//   }
//   if (num === 0) {
//     zeroCount++;
//   }
// }

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    negativeCount++;
  }
  if (numbers[i] > 0) {
    positiveCount++;
  }
  if (numbers[i] === 0) {
    zeroCount++;
  }
}

const posVal = numbers.filter((numbers) => numbers > 0);
const negVal = numbers.filter((numbers) => numbers < 0);
const zeroVal = numbers.filter((numbers) => numbers === 0);

console.log(`Кількість позитивних чисел: ${positiveCount}`, posVal);
console.log(`Кількість негативних чисел: ${negativeCount}`, negVal);
console.log(`Кількість нульових чисел: ${zeroCount}`, zeroVal);
console.log(numbers);
