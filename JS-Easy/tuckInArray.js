function tuckIn(arr1, arr2) {
  arr1.splice(1, 0, ...arr2);
  return arr1;
  // [arr1[0], ...arr2, arr1[1]]
}

console.log(tuckIn([15, 150], [45, 75, 35]));
