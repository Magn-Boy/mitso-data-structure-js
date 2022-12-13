const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor(){
    this._q = _q;
  }

  getUnderlyingList() {
    return this._q;
  }

  enqueue(value) {
    if (!this._q) this._q = new ListNode(value);
 else{
  let node = this._q;
  while(node.next){
    node = node.next;
  }
  node.next=new ListNode(value);
 }
}
  

  dequeue() {
    if (!this._q) return;
    const x = this._q.value;
    this._q = this._q.next;
    return x;
  }

}
