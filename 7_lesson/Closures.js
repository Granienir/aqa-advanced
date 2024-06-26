function outer() {
  let outerVar = 10;

  function inner() {
    console.log(outerVar);
  }

  return inner;
}

let closureFn = outer();
closureFn(); // Виведе 10

function counter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

let increment = counter();
console.log(increment()); // Виведе 1
console.log(increment()); // Виведе 2
