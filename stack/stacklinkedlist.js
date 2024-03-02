const SinglyLinkedList = require("../linkedlist/singlylinkedlist");

class StackLinkedList {
    constructor() {
        this.stack = new SinglyLinkedList();
    }

    isEmpty() {
        return this.stack.isEmpty();
    }

    push(data) {
        this.stack.insertAtEnd(data);
    }

    pop() {
        return this.stack.deleteAtEnd();
    }

    peek() {
        return this.stack.tail ? this.stack.tail.data: null;
    }

    printStack() {
        this.stack.printList("Stack");
    }
}

module.exports = StackLinkedList;