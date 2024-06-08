// // ООП підхід
// class Calculator {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   calculateSum() {
//     return this.a + this.b;
//   }
// }

// const calculator = new Calculator(5, 3);
// const result = calculator.calculateSum();
// console.log(result); // 8
//////////////////////////////////////////////////////////
// class Counter {
//   #count = 0; // Приватна властивість

//   // Приватний метод
//   #increment() {
//     this.#count++;
//   }
//   increment1() {
//     this.#count++;
//   }

//   getCount() {
//     return this.#count;
//   }
// }

// const counter = new Counter();
// console.log(counter.getCount()); // 0

// counter.increment1();

// console.log(counter.getCount());

// // counter.#count = 5; // Помилка! Приватна властивість не доступна ззовні
// // counter.#increment(); // Помилка! Приватний метод не доступний ззовні
//////////////////////////////////////////////////////////////////////////////
// class Circle {
//   constructor(radius) {
//     this._radius = radius;
//   }

//   get radius() {
//     return this._radius;
//   }

//   get area() {
//     return Math.PI * this._radius ** 2;
//   }
// }

// const circle = new Circle(5);
// console.log(circle.radius); // 5
// console.log(circle.area); // 78.53981633974483
/////////////////////////////////////////////////////
// class Temperature {
//   constructor(celsius) {
//     this._celsius = celsius;
//   }

//   get celsius() {
//     return this._celsius;
//   }

//   set celsius(value) {
//     if (value < -273.15) {
//       console.log("Temperature below absolute zero is not possible.");
//       return;
//     }
//     this._celsius = value;
//   }

//   get fahrenheit() {
//     return (this._celsius * 9) / 5 + 32;
//   }
// }

// const temp = new Temperature(25);
// console.log(temp.celsius); // 25
// console.log(temp.fahrenheit); // 77

// temp.celsius = -300; // Temperature below absolute zero is not possible.
// temp.celsius = 32;
// console.log(temp.celsius); // 32
// console.log(temp.fahrenheit); // 89.6

////////////////////////////////////////////////////////

// class Animal {
//   makeSound() {
//     console.log("Some generic sound");
//   }
// }

// class Dog extends Animal {
//   makeSound() {
//     console.log("Woof woof!");
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log("Meow!");
//   }
// }

// function animalSound(animal) {
//   animal.makeSound();
// }

// const dog = new Dog();
// const cat = new Cat();

// animalSound(dog); // Woof woof!
// animalSound(cat); // Meow!

///////////////////////////////////////////////////////
