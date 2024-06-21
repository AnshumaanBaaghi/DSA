class Heap {
  constructor(compare) {
    this.data = [];
    this.compare = compare;
  }

  push(val) {
    this.data.push(val);
    this._heapifyUp();
  }

  pop() {
    if (this.data.length === 1) return this.data.pop();
    const top = this.data[0];
    this.data[0] = this.data.pop();
    this._heapifyDown(0);
    return top;
  }

  top() {
    return this.data[0];
  }

  size() {
    return this.data.length;
  }

  _heapifyUp() {
    let index = this.data.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(this.data[index], this.data[parentIndex]) > 0) {
        [this.data[index], this.data[parentIndex]] = [
          this.data[parentIndex],
          this.data[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  _heapifyDown(index) {
    let leftChildIndex, rightChildIndex, largestIndex;

    while (index < this.data.length) {
      leftChildIndex = 2 * index + 1;
      rightChildIndex = 2 * index + 2;
      largestIndex = index;

      if (
        leftChildIndex < this.data.length &&
        this.compare(this.data[leftChildIndex], this.data[largestIndex]) > 0
      ) {
        largestIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.data.length &&
        this.compare(this.data[rightChildIndex], this.data[largestIndex]) > 0
      ) {
        largestIndex = rightChildIndex;
      }

      if (largestIndex !== index) {
        [this.data[index], this.data[largestIndex]] = [
          this.data[largestIndex],
          this.data[index],
        ];
        index = largestIndex;
      } else {
        break;
      }
    }
  }
}

function findMedian(arr) {
  const maxHeap = new Heap((a, b) => a - b);
  const minHeap = new Heap((a, b) => b - a);
  let median;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (i === 0) {
      median = num;
      maxHeap.push(num);
    } else {
      if (maxHeap.size() > minHeap.size()) {
        if (num < median) {
          minHeap.push(maxHeap.pop());
          maxHeap.push(num);
        } else {
          minHeap.push(num);
        }
        median = (maxHeap.top() + minHeap.top()) / 2;
      } else if (maxHeap.size() === minHeap.size()) {
        if (num < median) {
          maxHeap.push(num);
          median = maxHeap.top();
        } else {
          minHeap.push(num);
          median = minHeap.top();
        }
      } else {
        if (num > median) {
          maxHeap.push(minHeap.pop());
          minHeap.push(num);
        } else {
          maxHeap.push(num);
        }
        median = (maxHeap.top() + minHeap.top()) / 2;
      }
    }
    console.log(Math.floor(median));
  }
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let N = +input[0].trim();

  const arr = new Array(N);
  let line = 1;
  for (let i = 0; i < N; i++) {
    arr[i] = +input[line++].trim();
  }

  findMedian(arr);
}
if (process.env.USERNAME === "divya") {
  runProgram(`4
5
15
1 
3`);
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
