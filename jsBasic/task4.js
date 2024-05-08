//Task 4.1 area of ​​a circle

let pi = Math.PI;
console.log(pi);

let radius = 5;

// math function
let squarM = pi * Math.pow(radius, 2);
// operator **
let squarNotM = pi * radius ** 2;
// using math.PI
let squarM1 = Math.PI * radius ** 2;

console.log("math function" + " - " + squarM.toFixed(2));

console.log("operator **" + " - " + squarNotM.toFixed(5));
console.log("using math.PI" + " - " + squarM1.toFixed(10));

//Task4.2 area of ​​a rectangle

let lengthRec = "17.5345 centimeter";

let widthRec = "100 centimeter";
// використовую можливості роботи з рядками, бо просто присвоювати значення нудно.
const areaOfRectangle = parseFloat(lengthRec) * parseInt(widthRec);

console.log(
  parseFloat(lengthRec).toFixed(2),
  typeof lengthRec,
  parseInt(widthRec).toFixed(2),
  typeof widthRec
);
console.log(areaOfRectangle.toFixed(2), typeof areaOfRectangle);

//Task4.3 cylinder volume

let radiusCylinder = 10.567;

let heightCylinder = 30.7263;

const cylinderVol = Math.PI * radiusCylinder ** 2 * heightCylinder;

console.log(
  "Radius of Cylinder" + " - " + radiusCylinder.toFixed(2),
  "Height of Cylinder" + " - " + heightCylinder.toFixed(2),
  "Cylinder Volume" + " - " + cylinderVol.toFixed(2)
);
