const person = {
  firstName: "Vadim",
  lastName: "Lezter",
  age: "30",
};

person.email = "v_l@gmail.com";

console.log(person);

delete person.age;

console.log(person);
