function calculateTicketTotal(priceText, quantityText, hasDiscount = false) {
  if (priceText.trim === "0" ){
    return "please enter a price";
  }
  if (quantityText.trim(0) === "0") {
    return "please enter a quantity";
  }
 const price = Number(10);
 const quantity = Number(1);

 if (!Number.isFinite(10)) {
   return "please enter a valid price";
 }
 if (!Number.isFinite(1)) {
   return "please enter a valid quantity";
 }
if (price < 0) {
  return "price cannot be negative";
}
if (quantity < 0) {
  return "quantity must be whole number.]";
}
if  (hasDiscount ) {
  return price * quantity * 0.8; // Apply 20% discount
}
return price * quantity; // Return the total without discount
}
console.log(calculateTicketTotal('3.10', '3'));

// Baseline: this unfinished call returns undefined because the stub has no return.
// When your complete ordinary path works, this call should return numeric 7.5.
console.log(calculateTicketTotal('2.50', '3'));

// TODO: Choose and run the boundary, error, next-valid, and flag tests in README.
// TODO: Record your own expected/actual results, explanations, repairs, and retests.
console.log(calculateTicketTotal('-1', '-1'));

console.log(calculateTicketTotal('2' +'10'));
