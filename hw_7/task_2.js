const number = (num) => {
  //Додав умову щоб не допустити оверфлоу в випадку, якщо у фукцію передадуть не число
  if (isNaN(num)) {
    return;
  }
  if (num === 0) {
    console.log("Start"); //Розважаюсь;
    return;
  } else {
    console.log(`${num} second left before the start`);
    num--;
    setTimeout(number, 1000, num); // Розважаюсь;
  }
};

number("bbbb");
number(10);
