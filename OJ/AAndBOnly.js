function check(s){
    let st = [];
    for(let i=0;i<s.length;i++){
        if(s[i]=='?'){
            if(st[st.length-1]=='a' || s[i+1]=='a'){
                st.push('b');
            } else {
                st.push('a')
            }
        }else{
            st.push(s[i]);
        }
    }
    console.log(st.join(''));
}

function runProgram(input){
    check(input);
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