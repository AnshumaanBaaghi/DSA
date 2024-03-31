let fs = require("fs");

let input = fs.readFileSync(0, "utf8");

// console.log(input)

const tokens = input.split("/");

// console.log("tokens",tokens)

const stack = [];

for (const token of tokens) {
  if (token === "" || token === ".") {
    continue;
  } else if (token === "..") {
    stack.pop();
  } else {
    stack.push(token);
  }
}

console.log("/" + stack.join("/"));
