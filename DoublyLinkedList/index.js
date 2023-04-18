// WRITE NODE CLASS HERE //
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
//                       //
//                       //
//                       //
//                       //
///////////////////////////

// WRITE DLL CONSTRUCTOR HERE //
class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  //                            //
  //                            //
  //                            //
  //                            //
  ////////////////////////////////
  //

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    // set variable to tail
    let temp = this.tail;
    // if there is only one item remove it
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // set tail to prev item in list
      this.tail = this.tail.prev;
      // new tail points to null
      this.tail.next = null;
      // prev tail points to null
      temp.prev = null;
    }
    // reduce list length
    this.length--;
    // return deleted node
    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    //if item is in the first half of list start from head
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    let newNode = new Node(value);
    let before = this.get(index - 1);
    let after = before.next;

    newNode.next = after;
    newNode.prev = before;
    before.next = newNode;
    after.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return false;

    let temp = this.get(index);
    let before = temp.prev;
    let after = temp.next;

    before.next = after;
    after.prev = before;
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }
}

function test() {
  let myDLL = new DoublyLinkedList(7);

  console.log("\nDoubly Linked List:");
  myDLL.push(8);
  myDLL.push(10);
  myDLL.push(11);
  myDLL.getHead();
  myDLL.getTail();
  myDLL.getLength();

  myDLL.printList();
  // myDLL.insert(2, 9);
  myDLL.remove(2);
  console.log("\nDoubly Linked List:");
  myDLL.getLength();
  myDLL.printList();
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    Head: 7
    Tail: 7
    Length: 1

    Doubly Linked List:
    7

*/
