const whichIsLarger = (f, g) => (f() > g() ? 'f' : f() < g() ? 'g' : 'neither');

console.log(
  whichIsLarger(
    () => 505050,
    () => 5050
  )
);
