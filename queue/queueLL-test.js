import { QueueLinkedList } from './queue.js';

let queue = new QueueLinkedList(100);
console.log(queue.isEmpty());

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
queue.enqueue(25);
console.log(queue.peek());

console.log(queue.dequeue());
console.log(queue.isFull());
console.log(queue.peek());

queue.print();

console.log(queue.dequeue());
queue.print();