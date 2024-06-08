const users = [
  { name: "Bill", email: "bill@gmail.com", age: "20" },
  { name: "Djef", email: "djef@gmail.com", age: "25" },
  { name: "Lilly", email: "lilly@gmail.com", age: "21" },
];

//console.log(users[0]);

for (const { name, email, age } of users) {
  console.log(name);
  console.log(email);
  console.log(age);
}
