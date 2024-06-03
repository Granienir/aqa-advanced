const car1 = {
  brand: "Toyota",
  model: "Rav4",
  year: 2015,
};

const car2 = {
  brand: "Toyota",
  model: "Yaris",
  owner: "ILHN LLC",
};

const car3 = { ...car1, ...car2 };

console.log(car3);
