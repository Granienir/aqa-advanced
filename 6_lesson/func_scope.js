// const user = "Sam";

// function printUser(user) {
//   user = "John";
//   console.log(user);
// }

// console.log(user);
// printUser(user);
// console.log(user);

function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведення операції введіть суму більшу за нуль");
  } else if (amount > balance) {
    console.log("Недостатньо коштів на рахунку");
  } else {
    console.log("Операція зняття коштів проведена успішно");
  }
}

withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
withdraw(500, 300); // "Недостатньо коштів на рахунку"
withdraw(100, 300); // "Операція зняття коштів проведена успішно"
