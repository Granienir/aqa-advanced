//function declaration

function calculateSq(width, height) {
  const squarOfRectangle = width * height;
  return squarOfRectangle;
}

console.log("area of a rectangle - " + calculateSq(5, 10));

//function expression

const calculateSq1 = function (width, height) {
  //const squarOfRectangle = width * height;
  return width * height;
};

console.log("area of a rectangle - " + calculateSq1(10, 12));

//arrow function

const calculateSq2 = (width, height) => width * height;

console.log("area of a rectangle - " + calculateSq2(17, 20));
