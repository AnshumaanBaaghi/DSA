function runProgram(input) {
  var input = input.trim().split(/[\r\n]+/);
  //console.log(input);
  var mat = input.map((a) => a.split(" ").map(Number));
  //console.log(mat);
  var pos = 0;
  var mat_1 = [];
  var mat_2 = [];
  var n1 = Number(mat[pos][0]);
  for (var j = pos + 1; j <= n1; j++) {
    mat_1.push(mat[j]);
  }
  //console.log(mat_1);
  pos = n1 + 1;
  //console.log(pos)
  var n2 = Number(mat[pos][0]);
  //console.log(n2)
  for (var k = pos + 1; k < mat.length; k++) {
    mat_2.push(mat[k]);
  }
  // console.log(mat_2)
  function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        sum = sum + arr[i][j];
      }
    }
    return sum;
  }
  if (arraySum(mat_1) > arraySum(mat_2)) {
    console.log(arraySum(mat_1));
  } else {
    console.log(arraySum(mat_2));
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
