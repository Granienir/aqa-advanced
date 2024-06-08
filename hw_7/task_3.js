function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Дільник не може дорівнювати 0!");
    //console.log("Виникла помилка");
  }
  if (isNaN(numerator) || isNaN(denominator)) {
    throw new Error("Ділене або Дільник не є числом!");
    //console.log("Виникла помилка");
  }

  return numerator / denominator;
}
// const result = divide(10, 2);
// console.log(result);

try {
  const result = divide(20, 0);
  console.log(`Результат ділення = ${result}`);
} catch (error) {
  console.error("Сталася помилка:", error.message);
} finally {
  console.log("Робота завершена");
}
/////// 2
try {
  const result = divide("sdfsd", 10);
  console.log(`Результат ділення = ${result}`);
} catch (error) {
  console.error("Сталася помилка:", error.message);
} finally {
  console.log("Робота завершена");
}
////// 3
try {
  const result = divide(20, "sdfsd");
  console.log(`Результат ділення = ${result}`);
} catch (error) {
  console.error("Сталася помилка:", error.message);
} finally {
  console.log("Робота завершена");
}
////// 4
try {
  const result = divide(20, 10);
  console.log(`Результат ділення = ${result}`);
} catch (error) {
  console.error("Сталася помилка:", error.message);
} finally {
  console.log("Робота завершена");
}
