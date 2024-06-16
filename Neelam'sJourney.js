function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  input = input.map((a) => a.trim().split(" ").map(Number));
  let no_school = input[0][0];
  let school_array = input[1];
  let i = 1,
    k = 0,
    value = school_array[0],
    total_fare = 0;
  while (i < no_school) {
    if (value > school_array[i]) {
      total_fare += (i - k) * school_array[k];
      //console.log(total_fare)
      k = i;
      value = school_array[i];
      //console.log(k,value,i)
      i++;
      //console.log(total_fare)
    } else i++;
  }
  //console.log(no_school,k,value)
  total_fare += (no_school - k) * value;
  console.log(total_fare);
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
