class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;

    while (true) {
      // cannot have duplicates
      if (newNode.value === temp.value) return undefined;
      // compare new node to temp
      if (newNode.value < temp.value) {
        // if node is empty => insert
        if (!temp.left) {
          temp.left = newNode;
          return this;
        }
        //if not empty move to next node
        temp = temp.left;
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        }
        // new node is greater than temp => go right
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValueNode(currentNode) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}

function test() {
  let myTree = new BST();

  myTree.insert(47);
  myTree.insert(21);
  myTree.insert(76);
  myTree.insert(18);
  myTree.insert(27);
  myTree.insert(52);
  myTree.insert(82);

  // console.log(myTree.contains(27));
  // console.log(myTree.contains(17));
  console.log(myTree.minValueNode(myTree.root));
  console.log(myTree.minValueNode(myTree.root.right));
}

test();
