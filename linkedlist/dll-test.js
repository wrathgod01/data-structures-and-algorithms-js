import { DoublyLinkedList } from './doublylinkedlist.js';

let list = new DoublyLinkedList();

list.insert(10, 0);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
console.log(list.valueAt(3));
console.log(list.search(30));
list.print();

console.log(list.pop());
list.print();

list.unshift(45);
list.unshift(75);
list.unshift(25);
list.print();

console.log(list.shift());
list.print();

list.insert(35, 3);
list.delete(2);
list.print();
list.print("backward");

console.log(list.removeVal(20));
list.print();

