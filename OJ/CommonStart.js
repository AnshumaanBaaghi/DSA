function runProgram(input) {
  //Write Code Here
  input = input.trim().split("\n");
  const test = +input[0];
  for (let i = 1; i <= test; i++) {
    const [str1, str2, str3] = input[i]
      .trim()
      .split(" ")
      .map((el) => el.trim());
    let str = "";
    let j = 0;
    let n1 = str1.length;
    let n2 = str2.length;
    let n3 = str3.length;
    while (
      str1[j] === str2[j] &&
      str2[j] === str3[j] &&
      j < n1 &&
      j < n2 &&
      j < n3
    ) {
      str += str1[j];
      j++;
    }
    str === "" ? console.log("None") : console.log(str);
  }
}
if (process.env.USERNAME === ``) {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding(`ascii`);
  let read = ``;
  process.stdin.on(`data`, function (input) {
    read += input;
  });
  process.stdin.on(`end`, function () {
    read = read.replace(/\n$/, ``);
    read = read.replace(/\n$/, ``);
    runProgram(read);
  });
  process.on(`SIGINT`, function () {
    read = read.replace(/\n$/, ``);
    runProgram(read);
    process.exit(0);
  });
}
