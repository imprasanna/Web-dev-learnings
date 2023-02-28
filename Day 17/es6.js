// 1. Object destructuring
const information = {
  name: "Prasanna",
  address: "Bkt",
};

// const { name, address } = information || {};

const { name, address } = information;
console.log(name, address);

// 2. Array destructuring
const persons = ["Prasanna", "Arjun", "Ram"];

const [name1, name2, name3] = persons;
console.log(name1, name2, name3);

const [, , third] = persons;
console.log(third);

// 3. String literal
const firstName = "Prasanna";
const lastName = "Acharya";
const fullName = firstName + " " + lastName;
const greeting1 = "Welcome " + fullName + ", have a great day!";
const greeting2 = `Welcome ${fullName}, have a great day!`;

console.log(greeting1);
console.log(greeting2);

// 4. Spread operator
// Ex. 1
const person = {
  name: "Prasanna",
  age: 20,
};

const info = {
  ...person,
  address: "Ktm",
  age: 30,
};

console.log(info);

// Ex. 2
const person1 = {
  name: "Prasanna",
  age: 20,
};

const info1 = {
  address: "Ktm",
};

const data = {
  ...person1,
  ...info1,
};

console.log(data);

// Ex. 3 (for array)
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const array3 = [...array1, ...array2];
console.log(array3);

// 5. Default parameter
function shippingCharge(location = "Ktm") {
  if (location == "Ktm") {
    return 150;
  } else {
    return 250;
  }
}

console.log(shippingCharge());
console.log(shippingCharge("Brt"));

// 6. Arrow function
// Ex. 1
let shippingCharge = () => {
  if (location == "Ktm") {
    return 150;
  } else {
    return 250;
  }
};

// Ex. 2
let shippingCharge = (location = "Ktm") => {
  if (location == "Ktm") {
    return 150;
  } else {
    return 250;
  }
};

// Ex. 3 (Anonymous function)
() => {
  if (location == "Ktm") {
    return 150;
  } else {
    return 250;
  }
};
