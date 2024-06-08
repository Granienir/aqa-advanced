const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
  console.log(key);
}

console.log(person.hasOwnProperty("name"));
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
