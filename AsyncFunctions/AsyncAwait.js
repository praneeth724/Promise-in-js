const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolve Successfully");
  }, 10000);
});

// function getData() {
//   p.then((res) => {
//     console.log(res);
//   });
//   console.log("Kavindu Praneeth");
// }
// getData();

async function HandlePromise() {
  const val = await p;
  console.log(val);
  console.log("Kavindu Praneeth");
}

HandlePromise();
