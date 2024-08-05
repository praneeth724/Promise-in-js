//Success State
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value); // 'two'
  });
  //Reject State
const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 500, 'Error from promise1');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Success from promise2');
  });
  
  Promise.race([promise1, promise2])
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error); // 'Error from promise1'
    });
  
