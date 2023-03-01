const a = new Promise((resolve, reject) => {
  const b = 2;
  if (b == 2) {
    resolve({
      message: "success",
    });
  } else {
    reject({
      message: "fail",
    });
  }
});

a.then((successCase) => {
  console.log(successCase);
}).catch((failedCase) => {
  console.log(failedCase);
});
