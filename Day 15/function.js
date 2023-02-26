function sum(value1, value2) {
  return value1 + value2;
}

function multiply(value1, value2) {
  return value1 * value2;
}

console.log(sum(1, 2));
console.log(multiply(2, 3));

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(fullName("Prasanna", "Acharya"));

const address = "Kathmandu";

function getUserAddress(value) {
  const country = "Nepal";
  return value + ", " + country;
}

console.log(getUserAddress(address));
// console.log(country);
