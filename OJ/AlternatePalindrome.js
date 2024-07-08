function runProgram(input) {
  input = input
    .trim()
    .split("\n")
    .slice(1)
    .map((line, i) => (i % 2 == 0 ? Number(line) : line.trim().split("")));

  let i = 0;
  while (i < input.length) {
    const n = input[i];
    let arr = input[i + 1];
    console.log(canPalindromeBeFormed(arr));
    i += 2;
  }

  function canPalindromeBeFormed(arr) {
    if (arr.length == 1) return "Yes";
    return arr.length % 2 == 0 ? evenLength(arr) : oddLength(arr);
  }

  function evenLength(arr) {
    let countObj = count(arr);
    return Object.values(countObj).filter((e) => e % 2 != 0).length == 0
      ? "Yes"
      : "No";
  }

  function oddLength(arr) {
    let countObj = count(arr);
    return Object.values(countObj).filter((e) => e % 2 != 0).length == 1
      ? "Yes"
      : "No";
  }

  function count(arr) {
    let countObj = {};
    for (let i = 0; i < arr.length; i++) {
      if (countObj[arr[i]]) {
        countObj[arr[i]] += 1;
      } else {
        countObj[arr[i]] = 1;
      }
    }
    return countObj;
  }
}
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
