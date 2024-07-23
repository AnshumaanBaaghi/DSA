function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function remainingMinions(n, s) {
  const st = [];
  for (let i = 0; i < n; i++) {
    if (!st.length) {
      st.push(s[i]);
    } else {
      if (st[st.length - 1] === s[i]) {
        st.pop();
      } else {
        st.push(s[i]);
      }
    }
  }
  if (!st.length) {
    return "-1";
  } else {
    let str = st.reverse().join("");
    return reverseString(str);
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const n = parseInt(line);
  rl.on("line", (line) => {
    const s = line;
    console.log(remainingMinions(n, s));
    rl.close();
  });
});
