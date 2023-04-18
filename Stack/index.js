class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
class Stack {
  // WRITE STACK CONSTRUCTOR HERE //
  //                              //
  //                              //
  //                              //
  //                              //
  //////////////////////////////////
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return undefined;
    let temp = this.top;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.top = this.top.next;
      temp.next = null;
    }
    this.length--;

    return temp;
  }

  printStack() {
    let temp = this.top;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getTop() {
    if (this.top === null) {
      console.log("Top: null");
    } else {
      console.log("Top: " + this.top.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }
}

function test() {
  let myStack = new Stack(4);

  myStack.getTop();
  myStack.getLength();

  console.log("\nStack:");
  myStack.printStack();

  myStack.push(5);
  myStack.push(6);
  console.log("\nStack:");
  myStack.printStack();
  myStack.pop();
  console.log("\nStack:");
  myStack.printStack();
}

test();
