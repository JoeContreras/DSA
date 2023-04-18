// CREATE NODE CLASS HERE //
//                        //
//                        //
//                        //
//                        //
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

////////////////////////////

class LinkedList {
  // CREATE LL CONSTRUCTOR HERE //
  //                            //
  //                            //
  //                            //
  //                            //
  constructor(value) {
    let newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  ////////////////////////////////
  //push
  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let temp = this.head;

    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
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
    let temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return false;

    let before = this.get(index - 1);
    let temp = this.get(index);

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  reverse() {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            let next = temp.next;
            let prev = null;

            for (let index = 0; index < this.length; index++) {
              // assign next to right of current node (advance 1 position from current)
              next = temp.next;
              // assign current node's pointer (temp.next) to previous node
              temp.next = prev;
              // assign previous node to current node (advance 1 position)
              prev = temp;
              // assign current node to next node (advance 1 position)
              temp = next;
            }
            return this; {
                        let temp = this.head;
                        this.head = this.tail;
                        this.tail = temp;
                        let next = temp.next;
                        let prev = null;

                        for (let index = 0; index < this.length; index++) {
                          // assign next to right of current node (advance 1 position from current)
                          next = temp.next;
                          // assign current node's pointer (temp.next) to previous node
                          temp.next = prev;
                          // assign previous node to current node (advance 1 position)
                          prev = temp;
                          // assign current node to next node (advance 1 position)
                          temp = next;
                        }
                        return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
                            let temp = this.head;
                            this.head = this.tail;
                            this.tail = temp;
                            let next = temp.next;
                            let prev = null;

                            for (let index = 0; index < this.length; index++) {
                              // assign next to right of current node (advance 1 position from current)
                              next = temp.next;
                              // assign current node's pointer (temp.next) to previous node
                              temp.next = prev;
                              // assign previous node to current node (advance 1 position)
                              prev = temp;
                              // assign current node to next node (advance 1 position)
                              temp = next;
                            }
                            return this; {
                        let temp = this.head;
                        this.head = this.tail;
                        this.tail = temp;
                        let next = temp.next;
                        let prev = null;

                        for (let index = 0; index < this.length; index++) {
                          // assign next to right of current node (advance 1 position from current)
                          next = temp.next;
                          // assign current node's pointer (temp.next) to previous node
                          temp.next = prev;
                          // assign previous node to current node (advance 1 position)
                          prev = temp;
                          // assign current node to next node (advance 1 position)
                          temp = next;
                        }
                        return this; {
                        let temp = this.head;
                        this.head = this.tail;
                        this.tail = temp;
                        let next = temp.next;
                        let prev = null;

                        for (let index = 0; index < this.length; index++) {
                          // assign next to right of current node (advance 1 position from current)
                          next = temp.next;
                          // assign current node's pointer (temp.next) to previous node
                          temp.next = prev;
                          // assign previous node to current node (advance 1 position)
                          prev = temp;
                          // assign current node to next node (advance 1 position)
                          temp = next;
                        }
                        return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                        let temp = this.head;
                        this.head = this.tail;
                        this.tail = temp;
                        let next = temp.next;
                        let prev = null;

                        for (let index = 0; index < this.length; index++) {
                          // assign next to right of current node (advance 1 position from current)
                          next = temp.next;
                          // assign current node's pointer (temp.next) to previous node
                          temp.next = prev;
                          // assign previous node to current node (advance 1 position)
                          prev = temp;
                          // assign current node to next node (advance 1 position)
                          temp = next;
                        }
                        return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            let next = temp.next;
            let prev = null;

            for (let index = 0; index < this.length; index++) {
              // assign next to right of current node (advance 1 position from current)
              next = temp.next;
              // assign current node's pointer (temp.next) to previous node
              temp.next = prev;
              // assign previous node to current node (advance 1 position)
              prev = temp;
              // assign current node to next node (advance 1 position)
              temp = next;
            }
            return this; {
                        let temp = this.head;
                        this.head = this.tail;
                        this.tail = temp;
                        let next = temp.next;
                        let prev = null;

                        for (let index = 0; index < this.length; index++) {
                          // assign next to right of current node (advance 1 position from current)
                          next = temp.next;
                          // assign current node's pointer (temp.next) to previous node
                          temp.next = prev;
                          // assign previous node to current node (advance 1 position)
                          prev = temp;
                          // assign current node to next node (advance 1 position)
                          temp = next;
                        }
                        return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            let next = temp.next;
            let prev = null;

            for (let index = 0; index < this.length; index++) {
              // assign next to right of current node (advance 1 position from current)
              next = temp.next;
              // assign current node's pointer (temp.next) to previous node
              temp.next = prev;
              // assign previous node to current node (advance 1 position)
              prev = temp;
              // assign current node to next node (advance 1 position)
              temp = next;
            }
            return this; {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;

        for (let index = 0; index < this.length; index++) {
          // assign next to right of current node (advance 1 position from current)
          next = temp.next;
          // assign current node's pointer (temp.next) to previous node
          temp.next = prev;
          // assign previous node to current node (advance 1 position)
          prev = temp;
          // assign current node to next node (advance 1 position)
          temp = next;
        }
        return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            let next = temp.next;
            let prev = null;

            for (let index = 0; index < this.length; index++) {
              // assign next to right of current node (advance 1 position from current)
              next = temp.next;
              // assign current node's pointer (temp.next) to previous node
              temp.next = prev;
              // assign previous node to current node (advance 1 position)
              prev = temp;
              // assign current node to next node (advance 1 position)
              temp = next;
            }
            return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            let next = temp.next;
            let prev = null;

            for (let index = 0; index < this.length; index++) {
              // assign next to right of current node (advance 1 position from current)
              next = temp.next;
              // assign current node's pointer (temp.next) to previous node
              temp.next = prev;
              // assign previous node to current node (advance 1 position)
              prev = temp;
              // assign current node to next node (advance 1 position)
              temp = next;
            }
            return this; {
                        let temp = this.head;
                        this.head = this.tail;
                        this.tail = temp;
                        let next = temp.next;
                        let prev = null;

                        for (let index = 0; index < this.length; index++) {
                          // assign next to right of current node (advance 1 position from current)
                          next = temp.next;
                          // assign current node's pointer (temp.next) to previous node
                          temp.next = prev;
                          // assign previous node to current node (advance 1 position)
                          prev = temp;
                          // assign current node to next node (advance 1 position)
                          temp = next;
                        }
                        return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            let next = temp.next;
            let prev = null;

            for (let index = 0; index < this.length; index++) {
              // assign next to right of current node (advance 1 position from current)
              next = temp.next;
              // assign current node's pointer (temp.next) to previous node
              temp.next = prev;
              // assign previous node to current node (advance 1 position)
              prev = temp;
              // assign current node to next node (advance 1 position)
              temp = next;
            }
            return this; {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;

        for (let index = 0; index < this.length; index++) {
          // assign next to right of current node (advance 1 position from current)
          next = temp.next;
          // assign current node's pointer (temp.next) to previous node
          temp.next = prev;
          // assign previous node to current node (advance 1 position)
          prev = temp;
          // assign current node to next node (advance 1 position)
          temp = next;
        }
        return this; {
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    let next = temp.next;
                    let prev = null;

                    for (let index = 0; index < this.length; index++) {
                      // assign next to right of current node (advance 1 position from current)
                      next = temp.next;
                      // assign current node's pointer (temp.next) to previous node
                      temp.next = prev;
                      // assign previous node to current node (advance 1 position)
                      prev = temp;
                      // assign current node to next node (advance 1 position)
                      temp = next;
                    }
                    return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            let next = temp.next;
            let prev = null;

            for (let index = 0; index < this.length; index++) {
              // assign next to right of current node (advance 1 position from current)
              next = temp.next;
              // assign current node's pointer (temp.next) to previous node
              temp.next = prev;
              // assign previous node to current node (advance 1 position)
              prev = temp;
              // assign current node to next node (advance 1 position)
              temp = next;
            }
            return this; {
                let temp = this.head;
                this.head = this.tail;
                this.tail = temp;
                let next = temp.next;
                let prev = null;

                for (let index = 0; index < this.length; index++) {
                  // assign next to right of current node (advance 1 position from current)
                  next = temp.next;
                  // assign current node's pointer (temp.next) to previous node
                  temp.next = prev;
                  // assign previous node to current node (advance 1 position)
                  prev = temp;
                  // assign current node to next node (advance 1 position)
                  temp = next;
                }
                return this; {
            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            let next = temp.next;
            let prev = null;

            for (let index = 0; index < this.length; index++) {
              // assign next to right of current node (advance 1 position from current)
              next = temp.next;
              // assign current node's pointer (temp.next) to previous node
              temp.next = prev;
              // assign previous node to current node (advance 1 position)
              prev = temp;
              // assign current node to next node (advance 1 position)
              temp = next;
            }
            return this; {
            let temp = this.head;
            this.head = this.tail;
            this.tail = temp;
            let next = temp.next;
            let prev = null;

            for (let index = 0; index < this.length; index++) {
              // assign next to right of current node (advance 1 position from current)
              next = temp.next;
              // assign current node's pointer (temp.next) to previous node
              temp.next = prev;
              // assign previous node to current node (advance 1 position)
              prev = temp;
              // assign current node to next node (advance 1 position)
              temp = next;
            }
            return this; {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;

        for (let index = 0; index < this.length; index++) {
          // assign next to right of current node (advance 1 position from current)
          next = temp.next;
          // assign current node's pointer (temp.next) to previous node
          temp.next = prev;
          // assign previous node to current node (advance 1 position)
          prev = temp;
          // assign current node to next node (advance 1 position)
          temp = next;
        }
        return this; {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;

    for (let index = 0; index < this.length; index++) {
      // assign next to right of current node (advance 1 position from current)
      next = temp.next;
      // assign current node's pointer (temp.next) to previous node
      temp.next = prev;
      // assign previous node to current node (advance 1 position)
      prev = temp;
      // assign current node to next node (advance 1 position)
      temp = next;
    }
    return this;
  }

  ///////////////////////////
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
    if (this.head === null) {
      console.log("Tail: null");
    } else {
      console.log("Tail: " + this.tail.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }
}

// DO NOT CHANGE TEST FUNCTION
function test() {
  let myLinkedList = new LinkedList(0);
  myLinkedList.push(1);
  myLinkedList.push(2);

  myLinkedList.getHead();
  myLinkedList.getTail();
  myLinkedList.getLength();
  console.log("\nLinked List:");
  myLinkedList.printList();
  myLinkedList.getLength();
  const reversedList = myLinkedList.reverse();
  console.log("\nLinked List:", reversedList);
  myLinkedList.printList();
  myLinkedList.getLength();
}

test();
