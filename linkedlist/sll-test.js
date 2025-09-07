import { SinglyLinkedList } from './singlylinkedlist.js';

let list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.print();
console.log(list.valueAt(3));

console.log(list.pop());
list.print();

console.log(list.shift());
list.print();

list.unshift(45);
list.unshift(25);
list.print();

console.log(list.shift());
list.print();

list.insert(45, 4);
list.insert(65, 10);
list.insert(95, 0);
list.insert(35, 3);
list.print();

console.log(list.delete(2));
console.log(list.delete(6));
console.log(list.delete(4));
console.log(list.delete(0));
list.print();

console.log(list.search(34));
console.log(list.search(35));
console.log(list.removeValue(45));
list.print();