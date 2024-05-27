let numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
//numbersList.sort();

let newNum = Array.from(numbersList);
newNum.sort((a, b) => a - b);

console.log(numbersList);
console.log(newNum);
