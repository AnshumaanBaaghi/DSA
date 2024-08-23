function runProgram(input) {
  input = input.trim().split("\n");
  let [size, days] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  let low = Math.max(...arr);
  let high = arr.reduce((ac, el) => ac + el, 0);
  //   console.log(high)
  let ans = -1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (possible(mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.log(ans);

  function possible(hrs) {
    let cDay = 0;
    let i = 0;
    while (i < size) {
      let time = 0;
      while (time + arr[i] <= hrs) {
        time += arr[i];
        i++;
      }
      cDay++;
    }
    return cDay <= days ? true : false;
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
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
