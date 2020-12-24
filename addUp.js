function addUp(num) {
  let n = 0;
  for (let i = 1; i <= num; i++) {
    n += i;
  }
  return n;

  //   (num * (num + 1))/2 linear solution
}

console.log(addUp(600));
