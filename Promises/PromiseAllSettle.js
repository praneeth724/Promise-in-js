// const promise1 = Promise.resolve('Success');
// const promise2 = Promise.reject('Error');
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'Another success');
// });

// Promise.allSettled([promise1, promise2, promise3]).then((results) => {
//   results.forEach((result) => console.log(result));
//   /*
//     { status: 'fulfilled', value: 'Success' }
//     { status: 'rejected', reason: 'Error' }
//     { status: 'fulfilled', value: 'Another success' }
//   */
// });

const promise1 = Promise.resolve('Success');
const promise2 = Promise.reject('Error');

Promise.allSettled([promise1, promise2])
  .then((results) => {
    results.forEach((result) => console.log(result));
    /*
      { status: 'fulfilled', value: 'Success' }
      { status: 'rejected', reason: 'Error' }
    */
  });
