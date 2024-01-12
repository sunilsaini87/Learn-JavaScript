const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("hello");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("ok");
});


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("helloqqqq");
    resolve();
  }, 1000);
}).then(function () {
  console.log("aaaa");
});
