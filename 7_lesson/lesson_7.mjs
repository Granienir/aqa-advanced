import chalk from "chalk";

// function myFunc() {
//   console.log("func");
// }

// const var1 = myFunc;

// var1();

// function withCallBack(cb) {
//   console.log("before");
//   cb();
//   console.log("after");
// }

// withCallBack(myFunc);

function print(str) {
  console.log(str);
}

function colorPrintRed(str) {
  console.log(chalk.yellowBright(str));
}

function greet(name, cb) {
  cb(`Hello ${name}!`);
}

greet("Sam", colorPrintRed);

////////////////////////////////////////////////
