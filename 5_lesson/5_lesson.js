// if (condition) {
//   instruction;
// }

// ////////////////////////////////////

// if (condition) {
//   instructionA;
// } else {
//   instructionB;
// }

// /////////////////////////////////

// if (condition) {
// 	instructionA
// } else if {
// 	instructionB
// } else {
// 	instructionN
// }

// //////////////////////////////////

let x = 10;
let y = 5;

if (x > 5) {
  console.log("x більше за 5");

  if (y > 2) {
    console.log("y більше за 2");
  } else {
    console.log("y менше або рівне 2");
  }
} else {
  console.log("x менше або рівне 5");
}

// ///////////////////////////////////////

// if (умова1 && умова2 && умова3) {
//   // ... код
// } else if (умова1 && умова2) {
//   // ... код
// } else if (умова1) {
//   // ... код
// } else {
//   // ... код
// }

// //////////////////////////////////////

// const age = 20;
// let accessAllowed;

// if (age > 18) {
//   accessAllowed = 'allow';
// } else {
//   accessAllowed = 'don\'t allow';
// }

// ////////////////////////////////////

// switch (expression) {
// 	case value1:
// 		// The code to be executed if the expression is equal to value1
// 		break;
// 	case value2:
// 		// The code that will be executed if the expression equals value2
// 		break;
// 	default:
// 		// Code that will be executed if none of the values match
// }

// ////////////////////////////////////

// let type;

// switch (fruitName) {
// 	case 'apple':
// 	case 'pear':
// 	case 'kiwi':
// 		type = 'Fruit';
// 		break;
// 	case 'tomato':
// 	case 'cucumber':
// 		type = 'Vegetable';
// 		break;
// 	default:
// 		type = 'Unknown';
// }
// //////////////////////////////

// const age1 = 17

// switch (true) {
//   case age1 > 18:
//     console.log('Особа повнолітня');
//     break;
//   case age1 > 14:
//     console.log('Особа неповнолітня');
//     break;
//   default:
//    console.log('Особа малолітня');
// }

// //////////////////////////////

// const age = 17;

// if (age > 18) {
//   console.log('Особа повнолітня');
// } else if (age > 14) {
//   console.log('Особа неповнолітня');
// } else {
//   console.log('Особа малолітня');
// }

// ////////////////////////////////

// for (let i = 0; i < 3; i++) {
//   console.log(i)
// }

// ///////////////////////////////

// let i = 0; // Ми вже маємо оголошену змінну і присвоєне значення

// // Немає необхідності в "початку"
// for (; i < 3; i++) {
//   console.log(i); // 0, 1, 2
// }

// // Ми також можемо видалити частину "крок"
// // Це робить цикл ідентичним до while (i < 3)
// let i = 0;

// for (; i < 3;) {
//   console.log(i++);
// }

// ///////////////////////////////

// let count = 0;
// while (count < 3) {
//     console.log(count); // Виведе числа 0, 1, 2
//     count++;
// }

// ///////////////////////////////

// let num = 5;

// // Цикл do while
// do {
//     console.log(num); // Виведе число 5
// } while (num < 5);

// // Цикл while
// while (num < 5){
// 	console.log(num); // не виведе нічого
// }

// //////////////////////////////////

// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//       continue; // пропустити ітерацію якщо значення 2
//   }
//   console.log(i); // Виведе числа 0, 1, 3, 4
// }

// for (let i = 0; i < 5; i++) {
//   if (i % 2 === 0) {
//       continue; // пропустити ітерацію якщо остача від ділення на 2 дорівнює 0, тобто якщо число є парним або дорівнює 0
//   }
//   console.log(i); // Виведе числа 1, 3
// }

// //////////////////////////////////////////

// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//       break; // Завершити цикл при значенні 3
//   }
//   console.log(i); // Виведе числа 0, 1, 2
// }

// /////////////////////////////////////////

// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		console.log(i, j);
// 	}
// }

// let output = "";

// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     output += " " + i * j;
//     if (i * j < 10) {
//       output += " ";
//       //console.log(output);
//     }
//     //console.log(output);
//   }
//   console.log(output);
//   output = "";
// }
// //console.log(output);

// //

// function divideNumbers(a, b) {
//   if (b === 0) {
//     throw new Error("Ділення на нуль недопустиме!");
//   }
//   return a / b;
// }

// try {
//   const result = divideNumbers(10, 0);
//   console.log(result); // Цей рядок не буде виконано через throw вище
// } catch (error) {
//   console.error("Сталася помилка:", error.message);
// }

// //

// try {
//   // Код, який може викинути помилку
//   let result = 10 / undefined; // Спроба ділити на undefined
//   console.log(result); // Цей рядок не буде виконано через помилку вище
// } catch (error) {
//   // Обробка помилки
//   console.error("Сталася помилка:", error.message);
// } finally {
//   console.log("Це повідомлення виводитиметься завжди");
// }

// //
