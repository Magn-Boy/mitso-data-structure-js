const { NotImplementedError } = require("../extensions/index.js");


const { Node } = require('../extensions/list-tree.js');

module.exports = class BinarySearchTree {
  constructor() {
    this.root_node = null; 
  }
  root() {
    return this.root_node;
  }

  add(data ) {
    let newNode = new Node(data);
    if (this.root_node === null) 
    {
        this.root_node = newNode;
    } 
    else 
    {
        this.insertNode(this.root_node, newNode); // helper method below
    }
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
};
