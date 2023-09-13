// Hash Table
// Time complexity in big O notation = O(1)

const hash = (stringKey, bucketNum) => {
  let hash = 0;
  for (let i = 0; i < stringKey.length; i++) {
    hash += string.charCodeAt(i);
  }
  const index = hash % bucketNum;
  return index;
};

class HashTable {
  constructor() {
    this.list = [];
    this.bucketNum = 4;

    this.print = () => {
      console.log(this.list);
    };
  }

  add = (key, value) => {
    const index = hash(key, this.bucketNum);
    if (this.list[index] === undefined) {
      this.list[index] = [[key, value]]; // list[index] is a list contains [key, value] inside a list
    } else {
      let inserted = false;
      for (let i = 0; i < this.list[index].length; i++) {
        if (this.list[index][i][0] === key) {
          // (0 is the key, 1 is the value)
          list[index][i][0] === value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.list[index].push([key, value]);
      }
    }
  };

  remove = (key) => {
    const index = hash(key, this.bucketNum);
    if (this.list[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < list[index].length; i++) {
        if (list[index] === 1 && list[index][i][1] === key) {
          delete list[index];
        } else {
          for (let i = 0; i < list[index].length; i++) {
            if (list[index][i][0] === key) {
              delete list[index][i];
            }
          }
        }
      }
    }
  };

  lookup = (key) => {
    const index = hash(key, this.bucketNum);
    if (this.list[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[index][i][0] === key) {
          return this.list[index][i][1];
        }
      }
    }
  };
}

/* console.log(hash("Muaffaq", 10));
console.log(hash("Muaffaq", 10));
console.log(hash("Muaffaq", 10));
console.log(hash("maeen", 10));

// console.log("Muwaffaq")

let ht = new HashTable();
ht.add("muwaffaq", "person");
ht.add("max", "music");
ht.add("Alice", "girl");
ht.add("Tesla", "car");

console.log(ht.lookup("Tesla")); */
// ht.print();
