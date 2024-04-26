function runProgram(input) {
  const vowels = "aiou";
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    let subStr = "";
    for (let j = i; j < input.length; j++) {
      subStr += input[j];
      let k = 0;
      while (k < vowels.length) {
        if (!subStr.includes(vowels[k])) break;
        k++;
      }
      if (k == vowels.length) count++;
    }
  }
  console.log(count);
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
