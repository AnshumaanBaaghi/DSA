function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input.shift();
  let [arr1, arr2] = input.map((el) => el.split(" ").map(Number));

  let commonInteger = getCommonInteger(arr1, arr2, n);
  console.log(commonInteger);
}

function getCommonInteger(arr1, arr2, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i] == arr2[j]) {
        return arr1[i];
      }
    }
  }
}

if (process.env.USERNAME == "") {
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
    runProgram(read);
  });

  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
