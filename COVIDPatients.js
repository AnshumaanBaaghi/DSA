function runProgram(input) {
  input = input.trim().split("\n");
  var t = Number(input[0]);

  function operate(nums, index) {
    let count = 0;
    //  console.log(nums.length)
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === "1") {
        let add = 2;
        if (i > 0) {
          for (k = i - 1; k >= i - 5; k--) {
            if (nums[k] === "1") {
              add = 1;
              break;
            }
          }
        }
        if (i != nums.length - 1) {
          let flag = true;
          for (j = i + 1; j <= i + 5; j++) {
            if (nums[j] === "1") {
              flag = false;
            }
          }
          if (!flag) {
            count = count + add;
          }
        }
      }
    }
    console.log(`Area ${index}: ${count}`);
  }

  for (let i = 1; i <= t; i++) {
    operate(input[i], i);
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
  read = read.replace(/\n$/, "");
  runProgram(read);
});
