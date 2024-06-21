class NodeList {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

const ReverseInPair = (head) => {
  if (!head) return head;

  let newHead = head.next;
  let prevNode = null;
  let currentNode = head;

  while (currentNode && currentNode.next) {
    let Node1 = currentNode;
    let Node2 = currentNode.next;

    Node1.next = Node2.next;
    Node2.next = Node1;

    if (prevNode) {
      prevNode.next = Node2;
    }

    prevNode = Node1;
    currentNode = Node1.next;
  }

  return newHead;
};

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    let head;
    let current;
    for (let el of arr) {
      if (!head) {
        head = new NodeList(el);
        current = head;
      } else {
        current.next = new NodeList(el);
        current = current.next;
      }
    }
    console.log(ReverseInPair(head));
  }
}
if (process.env.USERNAME === "divya") {
  runProgram(`2
4
1 2 3 4
3
1 2 3`);
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
