class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
  enqueue(value) {
    //create node
    let newNode = new Node(value);
    // if queue is empty point first and last to new node
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // if not empty then current last points to new node
      this.last.next = newNode;
      // new node is now this.last
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  printQueue() {
    let temp = this.first;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getFirst() {
    if (this.first === null) {
      console.log("First: null");
    } else {
      console.log("First: " + this.first.value);
    }
  }

  getLast() {
    if (this.last === null) {
      console.log("Last: null");
    } else {
      console.log("Last: " + this.last.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
}

function test() {
  let myQueue = new Queue(4);

  myQueue.getFirst();
  myQueue.getLast();
  myQueue.getLength();

  console.log("\nQueue:");
  myQueue.printQueue();
  myQueue.enqueue(5);
  myQueue.enqueue(6);
  console.log("\nQueue:");
  myQueue.printQueue();
  myQueue.dequeue();
  console.log("\nQueue:");
  myQueue.getFirst();
  myQueue.getLast();
  myQueue.getLength();
  myQueue.printQueue();
}

test();
