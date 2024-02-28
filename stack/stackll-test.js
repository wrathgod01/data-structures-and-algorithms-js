const StackLinkedList = require("./stacklinkedlist");

let stack = new StackLinkedList();
console.log(stack.isEmpty());

stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
stack.push(25);
stack.printStack();

console.log(stack.pop());
stack.printStack();

console.log(stack.peek());
console.log(stack.pop());
stack.printStack();