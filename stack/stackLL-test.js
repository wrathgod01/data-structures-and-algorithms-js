import { StackLinkedList } from './stack.js';

let stack = new StackLinkedList(100);
console.log(stack.isEmpty());

stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
stack.push(25);
console.log(stack.peek());

console.log(stack.pop());
console.log(stack.isFull());
console.log(stack.peek());

stack.print();

console.log(stack.pop());
stack.print();