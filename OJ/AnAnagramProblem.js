function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  let array = [];
  for (let i = 0; i < tc; i++) {
    let str = input[line++];
    array.push(str);
  }
  abc(array);
}

function abc(arr) {
  // console.log(arr[0])
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    let b = arr[i].split("").sort().join("");

    // console.log(a,b)
    if (obj[b] === undefined) {
      obj[b] = [a];
    } else {
      obj[b].push(a);
    }

    // if(obj[arr[i]]===undefined){
    //     obj[arr[i]]=1
    //     // console.log(obj)
    // }else{
    //     obj[arr[i]]++
    // }
  }
  // console.log(obj)
  let a = [];

  for (let key in obj) {
    a.push(obj[key][0]);
  }
  console.log(a.length);
  console.log(a.sort().join("\n"));
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
