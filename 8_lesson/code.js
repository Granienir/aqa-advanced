// const fruits = ["1", "2", "3"];
// const nums = new Array(1, 2, 3, 4, 5);

// console.log(fruits.length);
// console.log(nums);

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[0][1], matrix[1][2]);

// for (const num of nums) {
//   console.log(num);
// }

// Присвоєння за значенням (примітивні типи)
let x = 10;
let y = x; // Значення копіюється
x = 20;
console.log(x); // 20
console.log(y); // 10

// Присвоєння за посиланням (складні типи)
const arrA = [1, 2, 3];
const arrB = arrA; // Посилання на той самий масив
arrA.push(4);
console.log(arrA); // [1, 2, 3, 4]
console.log(arrB); // [1, 2, 3, 4]

const colors = ["червоний", "зелений", "синій"];
const spliceColor = colors.splice(2, 1, "жовтий", "оранжевий");
console.log(spliceColor);
console.log(colors); // ["червоний", "жовтий", "оранжевий", "зелений", "синій"]
