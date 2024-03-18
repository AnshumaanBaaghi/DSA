function processData(input) {
  //Enter your code here
  input = input.split("\n");
  let [n, q] = input[0].split(" ").map(Number);
  let arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let low = 0;
  let high = n - 1;
  for (let i = 2; i < q + 2; i++) {
    let query = Number(input[i]);
    let result = binary(query, arr, low, high);
    if (result === true) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
  function binary(query, arr) {
    let low = 0;
    let high = n - 1;
    let mid;
    while (low <= high) {
      mid = low + Math.floor((high - low) / 2);
      if (arr[mid] === query) {
        return true;
      } else if (query < arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return false;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
