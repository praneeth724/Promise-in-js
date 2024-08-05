//Succcess State
const promise1 = Promise.reject('Error 1');
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Success');
});
const promise3 = Promise.reject('Error 2');

Promise.any([promise1, promise2, promise3]).then((value) => {
  console.log(value); // 'Success'
}).catch((error) => {
  console.error(error);
});

//Reject State
const promise1 = Promise.reject('Error 1');
const promise2 = Promise.reject('Error 2');
const promise3 = Promise.reject('Error 3');

Promise.any([promise1, promise2, promise3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error.errors); // ['Error 1', 'Error 2', 'Error 3']
  });
