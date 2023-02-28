const person = {
  firstName: "Prasanna",
  lastName: "Acharya",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const information = {
  address: "Ktm",
  __proto__: person,
};

const info = {
  ...person,
  address: "Ktm",
};

console.log(person);
console.log(information);
console.log(information.firstName);
console.log(info);
console.log(`${info.firstName} is from ${info.address}`);

const calculate = {
  sum: function (a, b) {
    return a + b;
  },
};

const math = {
  __proto__: calculate,
};

console.log(math.sum(2, 5));

// OOP

class Parent {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return "Hello, " + this.name;
  }
}

const obj = new Parent("Prasanna", 23);
console.log(obj.name);
console.log(obj.greeting());

class Child extends Parent {
  constructor(name, age) {
    super(name, age);
  }
  ageReview() {
    return this.name + " is " + this.age + " years old.";
  }
}

const obj1 = new Child("Rahul", 25);

console.log(obj1.name);
console.log(obj1.greeting());
console.log(obj1.ageReview());

//
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.nationality = "Nepali";
Person.prototype.greet = function () {
  return `Hello, I am ${this.name}!`;
};

let John = new Person("John", 30);
console.log(John.greet());
console.log(`${John.name} is a ${John.nationality}.`);

// Another way using constructor
class Pers {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, I am ${this.name}!`;
  }
}

Pers.prototype.nationality = "Nepali";

let Ravi = new Pers("Ravi", 30);
console.log(Ravi.greet());
console.log(
  `${Ravi.name} is a ${Ravi.nationality} and he is ${Ravi.age} years old.`
);
