// The value of this depends on where it is being used:
// 1. Alone, it refers to global object, i.e. window
// 2. In regular or normal function, it refers again to the global object
// 3. In a method, it refers to the owner object

// 1.
console.log(this);

// 2.
function helloo() {
  console.log(this);
}
helloo();

helloo1 = () => {
  console.log("Will this work?" + this);
};
helloo1(); //This will not work for the arrow function

// 3.
const person = {
  name: "Prasanna",
  age: 23,
  address: "Bkt",
  details: function () {
    console.log(this);
    console.log(this.age + " aged " + this.name + " is from " + this.address);
  },
};

const data = {
  name: "Prasanna",
  // numbers: [1, 2, 3, 4, 5, 6],
  getName: function () {
    return this.name;
  },
  getFullName: () => {
    return this.name;
  }, // this is undefined in arrow function inside object
  // getNumber: function () {
  //   this.numbers.forEach(function (el) {
  //     console.log(el);
  //   }, this);
  // for (let i = 0; i < numbers.length; i++) {
  //   console.log(this);
  // }
  // },
};

console.log(data.getNumber());
console.log(data.getName());
console.log("For other than regular function: " + data.getFullName());

// Arrow function does not contain 'this' keyword

function hello1() {
  return this;
} // this points to window object

const hello2 = () => {
  return this;
}; // this is undefined in arrow function

console.log(hello1());
console.log(hello2());

function Hello1(name, address) {
  this.name = name;
  this.address = address;

  this.details = function () {
    return `${this.name} is from ${this.address}`;
  };
}

const obj = new Hello1("Prasanna", "Bkt");

console.log(obj.details());

// behaviour of 'this' inside
// normal function
// function inside object
// arrow function inside object
// constructor function
