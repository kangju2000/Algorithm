const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MinHeap {
  constructor() {
    this.heap = [];
  }

  add(x) {
    this.heap.push(x);
    this.bubbleUp();
  }

  bubbleUp() {
    let node = this.size() - 1;
    let parentNode = Math.floor((node - 1) / 2);

    while (this.heap[node] && this.heap[node] < this.heap[parentNode]) {
      this.swap(node, parentNode);
      node = parentNode;
      parentNode = Math.floor((node - 1) / 2);
    }
  }

  remove() {
    if (this.size() === 0) {
      return 0;
    }

    if (this.size() === 1) {
      return this.heap.pop();
    }

    const minNode = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return minNode;
  }

  bubbleDown() {
    let node = 0;
    let childNode1 = 1;
    let childNode2 = 2;

    while (
      (childNode1 < this.size() && this.heap[node] > this.heap[childNode1]) ||
      (childNode2 < this.size() && this.heap[node] > this.heap[childNode2])
    ) {
      let smallNode = childNode1;
      if (
        this.heap[childNode2] &&
        this.heap[childNode1] > this.heap[childNode2]
      ) {
        smallNode = childNode2;
      }

      this.swap(node, smallNode);
      node = smallNode;
      childNode1 = node * 2 + 1;
      childNode2 = node * 2 + 2;
    }
  }

  size() {
    return this.heap.length;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

const minHeap = new MinHeap();
const output = [];
let N;

rl.on("line", (line) => {
  if (!N) {
    N = parseInt(line);
  } else {
    const x = parseInt(line);
    if (x === 0) {
      output.push(minHeap.remove());
    } else {
      minHeap.add(x);
    }
  }
}).on("close", () => {
  console.log(output.join("\n"));
  process.exit();
});
