function runProgram(input) {
  input = input.trim().split(/[\r+\n]+/);
  let [size, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split("");
  let obj = {
    length: 0,
  };
  let start = 0;
  let end = 0;
  let count = 0;
  while (start <= arr.length - k) {
    if (obj.length < k) {
      if (obj[arr[end]] === undefined || obj[arr[end]] === 0) {
        obj[arr[end]] = 1;
        obj.length += 1;
        end++;
      } else {
        obj[arr[start]] -= 1;
        if (obj[arr[start]] === 0) {
          obj.length -= 1;
        }
        start++;
      }
    } else if (obj.length === k) {
      count++;
      obj[arr[start]] -= 1;
      obj.length -= 1;
      start++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "") {
  runProgram(`4 2
abcc`);
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
