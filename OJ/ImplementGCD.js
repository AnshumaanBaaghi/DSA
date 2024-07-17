function runProgram(input) {
  input = input.trim().split("\n");
  for (let k = 1; k < input.length; k++) {
    let arr = input[k].trim().split(" ").map(Number);
    let a = Math.max(arr[0], arr[1]);
    let b = Math.min(arr[0], arr[1]);
    console.log(gcd(a, b));
  }
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    let mod = a % b;
    return gcd(b, mod);
  }
}

if (process.env.USERNAME === "") {
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
