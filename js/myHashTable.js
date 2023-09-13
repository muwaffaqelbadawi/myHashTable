// HashTable Data Structure

const myHashFunc = (stringKey, bucketNum) => {
  let hash = 0; //initialize hash variable

  for (let i = 0; i < stringKey.length; i++) {
    // loo through all key characters
    hash += stringKey.charCodeAt(i); // add up all charater's UTF-16 code to hash variable
  }
  const index = hash % bucketNum; // index is the remainder of the dividing hash by number of buckets
  return index;
};

class myHashClass {
  constructor() {
    this.bucketNum = 5; // initialise the number of buckets in the consrtructor
    this.list = new Array(this.bucketNum); //Initializing empty array
  }

  add = (key, value) => {
    const index = myHashFunc(key, this.bucketNum); // get a random index from hash formula
    if (this.list[index] === undefined) {
      // if there's no [key,value] pairs in specified index
      this.list[index] = [[key, value]]; // insert [key,value] pair in specified index
    } else {
      // if location is not empty
      let inserted = false; // initialize inserted flag and set it to false
      for (let i = 0; i < this.list.length; i++) {
        // loop through the entire list
        if (this.list[index][i][0] === key) {
          // 0 is the key, 1 is the value
          // key is available but no value inserted
          this.list[index][i][1] = value; // insert the value with the existing key
          inserted = true; // set inserted flag to true
        }
      }
      if (inserted === false) {
        // if inserted flag to false
        this.list[index].push([key, value]); // push a new [key,value] pair into the list
      }
    }
  };

  remove = (key) => {
    const index = myHashFunc(key, this.bucketNum); // get random index from hash function
    if (this.list[index] === undefined) {
      // if returned index does not exist
      return undefined; // return nothing (undefined)
    }
    if (this.list.length === 1 && this.list[index][i][0] === key) {
      // if there's only one [key,value] pair in the list and key exist
      delete this.list[index]; //delete the item
    } else {
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[index][i][0] === key) {
          delete this.list[index][i][0]; // if key exist with other items in the list
        }
      }
    }
  };

  lookup = (key) => {
    const index = myHashFunc(key, this.bucketNum); // get random index from hash function
    if (this.list[index] === undefined) {
      // if returned index does not exist
      return undefined; // return nothing (undefined)
    } else {
      for (let i = 0; i < array.length; i++) {
        // 0 is the key 1 is the value
        if (this.list[index][i][0] === key) { // if key exist in the i position
            return this.list[index][i][1]; // return the value
        }
      }
    }
  };
}
