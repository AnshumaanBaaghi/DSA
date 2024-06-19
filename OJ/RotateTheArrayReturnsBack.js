function runProgram(input) {
  var inp = input.trim().split("\n");

  for (var i = 1; i < inp.length; i += 2) {
    var [n, k] = inp[i].trim().split(" ").map(Number);
    var arr = inp[i + 1].trim().split(" ").map(Number);
    k = k % n;
    main(arr, n, k);
  }
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
function main(arr, n, k) {
  reverseArr(0, n - 1, arr);
  reverseArr(0, k - 1, arr);
  reverseArr(k, n - 1, arr);
  console.log(arr.join(" "));
}

function reverseArr(s, e, arr) {
  let mid = (s + e) / 2;
  while (s < mid) {
    temp = arr[s];
    arr[s++] = arr[e];
    arr[e--] = temp;
  }
}
