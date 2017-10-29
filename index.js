// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = "not bob";
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
  return bestCustomer;
}

const leastFavoriteCustomer = "initial value";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "change value"
  return leastFavoriteCustomer
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "customer one";
  let favoriteCustomer = "customer two";
}
