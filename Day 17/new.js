const information = {
  name: "Prasanna",
  address: "Bkt",
};

Object.keys(information).map((key) => {
  console.log(key, information[key]);
});

Object.entries(information).map((val) => {
  console.log(val[0], val[1]);
});

// for..in and for..of
for (let key in information) {
  console.log(key, information[key]);
}

arr = [1, 2, 3, 4, 5];
for (let val of arr) {
  console.log(val);
}
