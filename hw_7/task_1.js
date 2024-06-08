//n=1;
const isOdd = (n) => {
  //if (n % 2 !== 0) {
  console.log(`number ${n}  is odd`);
  //}
  //return n % 2 !== 0;
};

const isEven = (n) => {
  //  if (n % 2 === 0) {
  console.log(`number ${n}  is even`);
  //  }
  //  return n % 2 === 0;
};
//isOdd(n);
//isEven(n);

let printMsg = (num, odd, even) => {
  if (num % 2 !== 0) {
    odd(num);
  } else {
    even(num);
  }
};

printMsg(0, isOdd, isEven);
