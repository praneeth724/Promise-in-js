const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("The operation was successful!");
  } else {
    reject("The operation failed.");
  }
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
