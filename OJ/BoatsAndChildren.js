function processData(input) {
  input = input.split("\n");
  var [n, W] = input[0]
    .trim()
    .split(" ")
    .map((a) => parseInt(a));
  var arr = input[1]
    .trim()
    .split(" ")
    .map((a) => parseInt(a));
  var lo = 0;
  var hi = (2 * 10) ^ 5;
  var res = binarySearch(lo, hi);
  console.log(res);
  function binarySearch(lo, hi) {
    while (lo < hi) {
      var mid = lo + Math.floor((hi - lo) / 2);
      if (p(mid, arr, W)) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return lo;
  }
  function p(mid, arr, W) {
    var req = 0;
    var i = 0;
    while (i < n) {
      var count = 0;
      var totalWeight = 0;
      while (totalWeight + arr[i] <= W && count < 2 && i < n) {
        totalWeight += arr[i];
        count++;
        i++;
      }
      req++;
    }
    return req <= mid;
  }
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
