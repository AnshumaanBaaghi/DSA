function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let [n, g] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  let low = 0,
    high = 10 ** 9,
    ans = 0;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (p(mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.log(ans);

  function p(mid) {
    let q = 0;
    for (let i = 0; i < arr.length; i++) {
      q += Math.floor(mid / arr[i]);
    }
    return q >= g ? true : false;
  }
}
if (process.env.USER === "manideep") {
  runProgram(`2 5
2 3`);
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
