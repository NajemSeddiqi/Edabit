let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello world!');
  }, 1000);
});

promise.then(
  () => console.log('Hello world!'),
  (err) => console.error(err)
);
