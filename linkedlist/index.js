// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    if (!node) {
      return null;
    }

    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prevNode = this.head;
    let node = this.head.next;

    while (node.next) {
      prevNode = node;
      node = node.next;
    }

    prevNode.next = null;
  }

  insertLast(data) {
    const newNode = new Node(data);
    const lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  getAt(index) {
    let node = this.head;
    let count = 0;

    if (!node) {
      return null;
    }

    while (node) {
      if (count === index) {
        return node;
      }
      count++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prevNode = this.getAt(index - 1);
    if(!prevNode || !prevNode.next) {
        return;
    }

    prevNode.next = prevNode.next.next

    
  }
}

module.exports = { Node, LinkedList };
