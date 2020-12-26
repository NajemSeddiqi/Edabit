function numberSquares(n) {
  let squares = 0;
  while (n > 0) {
    squares += n * n;
    n--;
  }
  return squares;
}
// ** === to the power
console.log(4 ** 2);
