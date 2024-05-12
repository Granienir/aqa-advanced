const avaregeGrade = 85;

switch (true) {
  case avaregeGrade < 0:
    console.log("Некорректна оцінка");
    break;
  case avaregeGrade < 60:
    console.log("Незадовільно");
    break;
  case avaregeGrade < 71:
    console.log("Задовільно");
    break;
  case avaregeGrade < 81:
    console.log("Добре");
    break;
  case avaregeGrade < 91:
    console.log("Дуже добре");
    break;
  case avaregeGrade < 101:
    console.log("Відмінно");
    break;
}

console.log(avaregeGrade);
