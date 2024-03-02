function threeMaxThreeMin(N, arr) {
  //write code here
  let obj = {};
  let array = [];
  for (let i = 0; i < N; i++) {
    if (obj[arr[i]] == undefined) {
      array.push(arr[i]);
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  array = array.sort((a, b) => a - b);

  if (array.length < 3) {
    console.log("Not Possible");
    console.log("Not Possible");
  } else {
    console.log(array[0], array[1], array[2]);
    console.log(
      array[array.length - 3],
      array[array.length - 2],
      array[array.length - 1]
    );
  }
}
