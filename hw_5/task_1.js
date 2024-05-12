const avaregeGrade = 85;

// додав умову що нижце 0 бути не може.
if (avaregeGrade < 0) {
  console.log("Некорректна оцінка");
} else if (avaregeGrade < 60) {
  console.log("Незадовільно");
} else if (avaregeGrade < 71) {
  console.log("Задовільно");
} else if (avaregeGrade < 81) {
  console.log("Добре");
} else if (avaregeGrade < 91) {
  console.log("Дуже добре");
} else if (avaregeGrade < 101) {
  console.log("Відмінно");
}

console.log(avaregeGrade);
