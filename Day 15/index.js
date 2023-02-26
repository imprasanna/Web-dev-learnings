const key = 2;

switch (key) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid choice!");
    break;
}

// Ternary operator
const a = 5;
a === 5 ? "Yes" : "No";
console.log(a === 5 ? "Yes" : "No");

// loop
// for
// while
// do while
// for in
// for of
// forEach

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}

// array
const arrayValue = ["Prasanna", 1, true, "Arjun"];
const array2 = [];

console.log(arrayValue[3]);

console.log(arrayValue.length, array2.length);

for (let i = 0; i < arrayValue.length; i++) {
  console.log(arrayValue[i]);
}

//forEach loop
arrayValue.forEach((element, i) => {
  console.log(element, i);
});

//while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// do while loop
do {
  console.log(i);
  i++;
} while (i < 10);

// object
const person = {
  name: "Prasanna",
  address: "Bkt",
  getDetails: function () {
    return this.name + " is from " + this.address;
  },
};

person.age = 23;

console.log(
  person["address"],
  person.name,
  person.address,
  person.getDetails()
);

// Closure
function fullName() {
  const hello = "Prasanna";
  function name() {
    console.log(hello);
  }
}
