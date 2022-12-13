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
  insertNode(node, newNode){   /*рекусрсия*/
    if (newNode.data < node.data) {
      if (node.left === null) {
          node.left = newNode;
      } else {
          this.insertNode(node.left, newNode);
      }
  } else {
      if (node.right === null) {
          node.right = newNode;
      } else {
          this.insertNode(node.right, newNode);
      }
  }
  }

  has(data) {
    if (this.search(this.root_node, data) === null)
    return false;
  else
    return true;
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
