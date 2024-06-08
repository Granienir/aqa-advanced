const person = {
  firstname: "John",
  lastname: "Doe",
  age: 30,
};

console.log(person);

person.age = 25;
console.log(person);

person.hobby = "art";
console.log(person);

delete person.hobby;
console.log(person);

const car = {
  model: "Porsche",
  color: "Blue",
  gearNumber: 1,
  switchgear: function (isUP) {
    isUP ? this.gearNumber++ : this.gearNumber--;
    console.log(this.gearNumber);
  },
  // motor: {
  //   isWorking: false,
  //   rpm: 1000,
  // },
};

car.switchgear(true);
car.switchgear(true);
car.switchgear(false);

console.log(car.motor?.rpm);
