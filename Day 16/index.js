// array and object

const persons = ["Prasanna"];
console.log(persons);

persons.push("Ram");
console.log(persons);

const newArray = persons.concat("Sita");
console.log(newArray);

persons.pop();
console.log(persons);

const arr1 = ["one", "two", "three", "four"];
console.log(arr1.slice(1, 3));

const arr2 = [1, 2, 3, 4, 5, 6];
const mapArr2 = arr2.map((element, index) => {
  console.log(element, index);
  return element * 2;
});
console.log(mapArr2);

const arr3 = [
  {
    id: 1,
    name: "Prasanna",
    age: 23,
  },
  {
    id: 1,
    name: "Rahul",
    age: 45,
  },
];

const arr4 = arr3.map((element, index) => {
  console.log(element, index);
  return {
    id: element.id,
    name: element.name,
    status: element.age > 45 ? "Old" : "Young",
  };
});

console.log(arr4);

const arr5 = [];
arr3.forEach((element, index) => {
  arr5.push({
    id: element.id,
    name: element.name,
    status: element.age > 45 ? "Old" : "Young",
  });
});
console.log(arr5);

const arr6 = [];
for (let index = 0; index < arr3.length; index++) {
  const element = arr3[index];
  arr6.push({
    id: element.id,
    name: element.name,
    status: element.age > 45 ? "Old" : "Young",
  });
}
console.log(arr6);

const arr7 = [
  {
    id: 1,
    name: "Prasanna",
    age: 23,
  },
  {
    id: 1,
    name: "Rahul",
    age: 45,
  },
];

const filteredArray = arr7.filter((element, index) => {
  return element.age < 30;
});

console.log(filteredArray);

const arr8 = [1, 2, 3, 4, 5, 6, 7, 8];
const total = arr8.reduce((acc, value) => {
  console.log(acc, value);
  return (acc += value);
}, 0);
console.log(total);

const arr9 = [
  {
    price: 1,
  },
  {
    price: 2,
  },
  {
    price: 3,
  },
  {
    price: 4,
  },
  {
    price: 5,
  },
  {
    price: 6,
  },
  {
    price: 7,
  },
  {
    price: 8,
  },
];
const total2 = arr9.reduce((acc, value) => {
  console.log(acc, value.price);
  return (acc += value.price);
}, 0);
console.log(total2);

const carts = [
  {
    name: "book",
    price: 264,
    quantity: 2,
  },
  {
    name: "shoes",
    price: 502,
    quantity: 1,
  },
];

const total3 = carts.reduce((acc, element) => {
  return (acc += element.price * element.quantity);
}, 0);
console.log(total3);

let shippingCharge = 150;
const total4 = carts.reduce((acc, element) => {
  return (acc += element.price * element.quantity);
}, shippingCharge);
console.log(total4);

const findData = carts.find((element, index) => {
  return element.name === "book";
});
console.log(findData);
