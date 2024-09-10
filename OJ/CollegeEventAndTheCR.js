let adjacencyList = {};
let visited = {};
let count = 0;
function runProgram(input) {
  input = input.trim().split("\n");
  let i = 1;
  while (i < input.length) {
    let nodes = Number(input[i].trim());
    let noOfEdges = Number(input[i + 1].trim());
    let edges = [];
    for (let j = i + 2; j < i + 2 + noOfEdges; j++) {
      edges.push(input[j].trim().split(" ").map(Number));
    }
    for (let i = 0; i < nodes; i++) {
      adjacencyList[i] = [];
      visited[i] = false;
    }
    edges.forEach((edge) => addEdge(edge[0], edge[1]));
    i = i + 2 + noOfEdges;
    for (key in visited) {
      if (!visited[key]) {
        count++;
        dfs(key);
      }
    }
    console.log(count);
    adjacencyList = {};
    visited = {};
    count = 0;
  }
}

function addEdge(v1, v2) {
  adjacencyList[v1].push(v2);
  adjacencyList[v2].push(v1);
}

function dfs(startVertex) {
  function traverse(vertex) {
    if (!vertex) {
      return;
    }
    visited[vertex] = true;
    adjacencyList[vertex].forEach((neighbour) => {
      if (!visited[neighbour]) {
        return traverse(neighbour);
      }
    });
  }
  traverse(startVertex);
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