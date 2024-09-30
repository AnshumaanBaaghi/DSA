function runProgram(input) {
    input = input.split("\n");
    const n = Number(input[0]);
    const arr = input[1].split(" ").map(Number).reverse();
    const result = [];
    const stack = [];

    for (let i = 0; i < n; i++) {
        let isGreater = false;
        for (let j = stack.length - 1; j >= 0; j--) {
            if (stack[j] > arr[i]) {
                isGreater = true;
                break;
            } else {
                stack.pop();
            }
        }

        if (!isGreater) {
            result.push(arr[i]);
            stack.push(arr[i]);
        }
    }

    console.log(result.reverse().join(" "));
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