function rotateLeft(d, arr) {
  // Write your code here
  const arr2 = [];

  for (let i = d; i < arr.length; i++) {
    arr2.push(arr[i]);
  }
  for (let i = 0; i < d; i++) {
    arr2.push(arr[i]);
  }

  console.log(arr2);
}
rotateLeft(4, [1, 2, 3, 4, 5]);
