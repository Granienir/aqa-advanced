// function sum(a, b) {
//   const result = a + b;
//   // console.log(result);
//   return result;
// }

// // var a = 10;
// // var b = 11;

// // const func = sum;

// // sum(3, 5);
// // func(4, 3);

// const summaryValue = sum(10, 234);
// console.log(summaryValue);

// const greet = function () {
//   console.log("Howdy!");
// };

// greet();

// const getSum = (a, b) => {
//   return a + b;
// };

// const getSum1 = (a, b) => a + b;

// console.log(getSum(5, 67));
// console.log(getSum1(55, 67));

// const printAllParametrs = (a, b = 34, c = 30) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// };

// printAllParametrs();

// const printAllParametrsRest = (...params) => {
//   console.log(params);
// };

// printAllParametrsRest("asd", 123, true, "sdgfh");

function funcArguments() {
  console.log(arguments);
}

funcArguments(2, 3);
