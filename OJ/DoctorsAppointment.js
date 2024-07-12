class Queue {
  constructor(size) {
    this.Q = new Array(size);
    this.max_size = size;
    this.front = 0;
    this.rear = 0;
  }

  get_front() {
    if (this.front == this.rear) {
      return "-1";
    }
    return this.Q[this.front];
  }

  len() {
    return this.rear - this.front;
  }
  enqueue(x) {
    if (this.rear == this.max_size) {
      console.log("overflow");
      return;
    }
    this.Q[this.rear] = x;
    this.rear++;
  }

  dequeue() {
    if (this.front == this.rear) {
      return -1;
    }
    var x = this.Q[this.front];
    this.front++;
    if (this.front == this.rear) {
      this.front = 0;
      this.rear = 0;
    }
    return x;
  }
}
function runProgram(input1) {
  // Write code here
  var input = input1.toString().split("\n");
  var n = parseInt(input[0]),
    arr1 = input[1].toString().split(" "),
    arr2 = input[2].toString().split(" ");
  var q1 = new Queue(),
    q2 = new Queue();
  for (var i = 0; i < arr1.length; i++) q1.enqueue(parseInt(arr1[i]));
  for (var i = 0; i < arr2.length; i++) q2.enqueue(parseInt(arr2[i]));
  var ans = 0;
  while (q2.get_front() != -1) {
    var curr = q2.get_front();
    q2.dequeue();
    var q3 = new Queue();
    while (1) {
      var top = q1.get_front();
      q1.dequeue();
      if (top == curr) {
        ans++;
        while (q1.get_front() != -1) {
          var after = q1.get_front();
          q1.dequeue();
          q3.enqueue(after);
        }
        break;
      } else {
        q3.enqueue(top);
        ans++;
      }
    }
    q1 = q3;
  }
  console.log(ans - 1);
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
