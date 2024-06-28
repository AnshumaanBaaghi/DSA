const ImplementStackUsingQueue = () => {
  class Queue {
    constructor() {
      this.queue = [];
    }
    push(value) {
      this.queue.push(value);
    }
    pop() {
      this.queue.shift();
    }
    front() {
      return this.queue[0];
    }
    isEmpty() {
      return this.queue.length === 0;
    }
  }

  class Stack {
    constructor() {
      this.Q1 = new Queue();
      this.Q2 = new Queue();
    }
    push(value) {
      //write your code here..
      while (!this.Q1.isEmpty()) {
        const val = this.Q1.front();
        this.Q1.pop();
        this.Q2.push(val);
      }
      this.Q1.push(value);
      while (!this.Q2.isEmpty()) {
        const val = this.Q2.front();
        this.Q2.pop();
        this.Q1.push(val);
      }
    }
    pop() {
      return this.Q1.pop();
    }
    top() {
      return this.Q1.front();
    }
    isEmpty() {
      return this.Q1.isEmpty();
    }
  }
  function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let queries = +input[0].trim();
    const stack = new Stack();
    let line = 1;
    for (let i = 0; i < queries; i++) {
      let [q, x] = input[line++].trim().split(" ").map(Number);
      if (q === 0) {
        stack.push(x);
      } else if (q === 1) {
        console.log(stack.top());
      } else {
        console.log(stack.top());
        stack.pop();
      }
    }
  }
  runProgram(`6
0 1
0 2
0 3
1 
2
1`);
};
ImplementStackUsingQueue();
