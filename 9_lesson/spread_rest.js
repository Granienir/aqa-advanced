// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];

// console.log(newNumbers); // [1, 2, 3, 4, 5]

// const person = { name: "John", age: 30 };
// const newPerson = { ...person, gender: "male" };

// console.log(newPerson);
// // { name: "John", age: 30, gender: "male" }

// const person1 = { name: "John", age: 30 };
// const newPerson1 = { ...person1, gender: "female", name: "Alice" };

// console.log(newPerson1);
// // { name: 'Alice', age: 30, gender: 'male' }

/////////////////////////////////////////////////////

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

function add(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log(add(...newNumbers)); // 6
