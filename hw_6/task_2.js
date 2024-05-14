// // повертаю відразу запис
function isAdult(age) {
  if (age <= 0) {
    return;
  }

  if (age >= 18) {
    console.log(`A person aged ${age} is an Adult`);
  } else {
    console.log(`A Person aged ${age} is not an Adult`);
  }
}
// age = [18, 15, 25];
// age.forEach(isAdult);

// or

isAdult(18);
isAdult(15);
isAdult(25);

// // обчислюю та  повертаю  True or False в 1 функції, вивожу сповіщення в 2 функції.

// //let age1;

function isAdult1(age1) {
  //let isAdultF = undefined;
  if (age1 >= 18) {
    //isAdultF = true;
    //console.log(isAdultF);
    //return isAdultF;
    console.log("true");
    return true;
  } else {
    //isAdultF = false;
    //console.log(isAdultF);
    //return isAdultF;
    console.log("false");
    return false;
  }
}

// if (isAdult1(25)) {
//   console.log(`A person is an Adult`);
// } else {
//   console.log(`A Person is not an Adult`);
// }

// if (isAdult1(15)) {
//   console.log(`A person is an Adult`);
// } else {
//   console.log(`A Person is not an Adult`);
// }

function ifAdult(age1) {
  if (isAdult1(age1)) {
    console.log(`A person aged ${age1} is an Adult`);
  } else {
    console.log(`A Person aged ${age1} is not an Adult`);
  }
}

age1 = [17, 25, 15];
age1.forEach(ifAdult);
