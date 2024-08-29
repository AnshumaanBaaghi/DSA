function runProgram(input) {
  // Write code here
  input = input.split("\n");

  let [n, k] = input[0].split(" ").map(Number);

  let arr = input[1].split(" ").map(Number);

  occ(n, k, arr);
}

function occ(n, k, arr) {
  let f = firstOcc(n, k, arr);
  let l = lastOcc(n, k, arr);

  console.log(l - f + 1);
}

function lastOcc(n, k, arr) {
  let start = 0;

  let end = n - 1;

  let res = 0;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] == k) {
      res = mid;

      start = mid + 1;
    } else if (arr[mid] > k) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return res;
}

function firstOcc(n, k, arr) {
  let start = 0;

  let end = n - 1;

  let res = 0;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] == k) {
      res = mid;

      end = mid - 1;
    } else if (arr[mid] > k) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return res;
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
