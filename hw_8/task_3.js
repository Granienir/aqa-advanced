const numbers = [10, 20, 30, 40, 50];
const startingPoint = 0;
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  startingPoint
);
console.log(sum);
