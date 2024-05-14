function checkOrder(available, ordered) {
  if (available < 0 || ordered < 0) {
    console.log("erroneous data");
    return;
  }

  if (available === 0) {
    console.log("Product is out of stock");
    return;
  }
  if (ordered === 0) {
    console.log("Your order is empty");
    return;
  }
  if (ordered > available) {
    console.log("Your order is too large, we don't have enough goods.");
    return;
  }
  console.log("Your order is accepted");
}

checkOrder(10, 11);
checkOrder(-1, 11);
checkOrder(11, -11);
checkOrder(0, 11);
checkOrder(11, 0);
checkOrder(10, 10);
checkOrder(10, 9);
