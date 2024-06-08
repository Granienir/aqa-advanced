console.log("Таблиця множення через for");
const numberF = 5;

for (i = 1; i <= 10; i++) {
  console.log(numberF + " " + "x" + " " + i + " " + "=" + " " + numberF * i);
}

console.log("Таблиця множення через while");

const numberW = 6;
let j = 1;
while (j <= 10) {
  console.log(numberW + " " + "x" + " " + j + " " + "=" + " " + numberW * j);
  j++;
}
