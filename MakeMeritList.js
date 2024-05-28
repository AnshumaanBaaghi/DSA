function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  let narr = [];
  for (let i = 0; i < tc; i++) {
    let arr = input[line++].trim().split(" ");
    narr.push(arr);
  }
  logic(narr);
}

function logic(narr) {
  alphasort(narr);
  lessweight(narr);
  maxheight(narr);
  maxIQ(narr);

  for (let i = 0; i < 8; i++) {
    console.log(narr[i][0]);
  }

  function alphasort(marr) {
    for (let i = 0; i < marr.length - 1; i++) {
      for (let j = 0; j < marr.length - 1 - i; j++) {
        if (marr[j][0] > marr[j + 1][0]) {
          swap(marr, j, j + 1);
        }
      }
    }
  }

  function lessweight(marr) {
    for (let i = 0; i < marr.length - 1; i++) {
      for (let j = 0; j < marr.length - 1 - i; j++) {
        if (marr[j][2] > marr[j + 1][2]) {
          swap(marr, j, j + 1);
        }
      }
    }
  }

  function maxheight(marr) {
    for (let i = 0; i < marr.length - 1; i++) {
      for (let j = 0; j < marr.length - 1 - i; j++) {
        if (marr[j][1] < marr[j + 1][1]) {
          swap(marr, j, j + 1);
        }
      }
    }
  }

  function maxIQ(marr) {
    for (let i = 0; i < marr.length - 1; i++) {
      for (let j = 0; j < marr.length - 1 - i; j++) {
        if (marr[j][3] < marr[j + 1][3]) {
          swap(marr, j, j + 1);
        }
      }
    }
  }

  function swap(arr, i, j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
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
