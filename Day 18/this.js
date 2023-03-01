const data = {
  name: "Prasanna",
  numbers: [1, 2, 3, 4, 5, 6],
  getName: function () {
    return this.name;
  },
  getFullName: () => {
    return this.name;
  }, // this is undefined in arrow function inside object
  getNumber: function () {
    this.numbers.forEach((el) => {
      console.log(this.name, el);
    });
    for (let i = 0; i < numbers.length; i++) {
      console.log(this);
    }
  },
};

console.log(data.getName());
console.log(data.getFullName());

// Arrow function does not contain this keyword

function hello1() {
  this;
} // this points to window object

const hello2 = () => {
  this;
}; // this is undefined in arrow function

console.log(hello1());
console.log(hello2());

function Hello1(name, address) {
  this.name = name;
  this.address = address;

  return `${this.name} is from ${this.address}`;
}

const obj = new Hello1("Prasanna", "Bkt");

console.log(obj.name);

// behaviour of 'this' inside
// normal function
// function inside object
// arrow function inside object
// constructor function
