function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  arr.sort((a, b) => a - b);
  let q = +input[2].trim();
  let line = 3;
  for (let i = 0; i < q; i++) {
    let [a, b] = input[line++].trim().split(" ").map(Number);
    if (a === 0) {
      console.log(query1(arr, n, b));
    } else {
      console.log(query2(arr, n, b));
    }
  }
}

function query1(arr, n, x) {
  let low = 0;
  let high = n - 1;
  let count = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < x) {
      count = mid + 1;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return arr.length - count;
}

function query2(arr, n, x) {
  let low = 0;
  let high = n - 1;
  let count = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= x) {
      count = mid + 1;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return arr.length - count;
}
if (process.env.USER === "ghostdevice") {
  runProgram(`11
    1 2 3 4 5 6 7 8 9 10 11
    3
    0 5
    1 3
    0 3`);
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
