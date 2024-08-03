function OrderProcess(n, arr1, arr2) {
  let c = 0;
  while (arr1.length != 0 && arr2.length != 0) {
    if (arr1[0] == arr2[0]) {
      arr1.shift();
      arr2.shift();
      c++;
    } else {
      arr1.push(arr1.shift());
      c++;
    }
  }
  console.log(c);
}
function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr1 = input[1].trim().split(" ").map(Number);
  let arr2 = input[2].trim().split(" ").map(Number);
  OrderProcess(n, arr1, arr2);
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
