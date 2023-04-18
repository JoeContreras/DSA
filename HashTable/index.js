class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    // obtain the index eg: 1-6
    let index = this._hash(key);
    // if the position in the array is empty, create an empty array in that position
    if (!this.dataMap[index]) this.dataMap[index] = [];
    // push key value pair into existing array
    this.dataMap[index].push([key, value]);
    return this;
  }
  get(key) {
    // obtain the index eg: 1-6
    let index = this._hash(key);
    // check if the array is not empty
    if (this.dataMap[index]) {
      // loop through the array
      for (let i = 0; i < this.dataMap[index].length; i++) {
        // check if the key is matches key we are looking for
        if (this.dataMap[index][i][0] === key) {
          // if key matches return the value of that key
          return this.dataMap[index][i][1];
        }
      }
    }
    // if index in that position is empty return undefined
    return undefined;
  }

  keys() {
    // create empty array
    let allKeys = [];
    // iterate through datamap
    for (let i = 0; i < this.dataMap.length; i++) {
      // check if position in array is not empty
      if (this.dataMap[i]) {
        // iterate through internal array (bc separate chaining)
        for (let j = 0; j < this.dataMap[i].length; j++) {
          // push current key into allKeys array
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}
let myHT = new HashTable();
myHT.set("bolts", 1400);
myHT.set("washers", 50);

console.log(myHT.get("bolts"));
console.log(myHT.get("washers"));
console.log(myHT.get("lumber"));
console.log(myHT.keys());
