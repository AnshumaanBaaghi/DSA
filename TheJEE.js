function runProgram(input) {
  input = input.split("\n");

  var stud1 = input[0].split(" ").map((el) => Number(el));
  var stud2 = input[1].split(" ").map((el) => Number(el));

  var total1 = stud1.reduce((a, c) => a + c, 0);
  var total2 = stud2.reduce((a, c) => a + c, 0);

  if (total1 > total2) {
    console.log("First");
  } else if (total2 > total1) {
    console.log("Second");
  } else {
    if (stud1[2] > stud2[2]) {
      console.log("First");
    } else if (stud2[2] > stud1[2]) {
      console.log("Second");
    } else {
      if (stud1[0] > stud2[0]) {
        console.log("First");
      } else if (stud2[0] > stud1[0]) {
        console.log("Second");
      }
    }
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
  runProgram(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
