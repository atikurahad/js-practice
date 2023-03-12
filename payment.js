function discountClosure(paymentType) {
  let discount = 0;
  switch (paymentType) {
    case "bkash":
      discount = 10;
      break;
    case "visa":
      discount = 15;
      break;
    default:
      discount = 0;
  }

  return function (actualPrice) {
    let amount = (discount / 100) * actualPrice;
    return `your discount is BDT ${discount}% which is ${amount.toFixed(2)} and you need to pay  ${actualPrice - amount}`;
  };
}
const bkashPayment = discountClosure('bkash');
const visaPayment = discountClosure("visa");
//console.log(bkashPayment(2499))
console.log(visaPayment(2499));
