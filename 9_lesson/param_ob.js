// Приклад функції, яка приймає багато параметрів
function printUserInfo(name, age, gender, occupation) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Gender: ${gender}`);
  console.log(`Occupation: ${occupation}`);
}

// Використання функції з багатьма параметрами
printUserInfo("John", 30, "male", "developer");

// Приклад функції, яка приймає багато параметрів
function printUserInfoN(user) {
  const { name, age, gender, occupation } = user;
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Gender: ${gender}`);
  console.log(`Occupation: ${occupation}`);
}
const user = {
  name: "John",
  age: 30,
  gender: "male",
  occupation: "developer",
};

// Використання функції з багатьма параметрами
printUserInfoN(user);
