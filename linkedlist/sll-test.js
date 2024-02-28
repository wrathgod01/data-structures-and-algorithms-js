const SinglyLinkedList = require("./singlylinkedlist");

let ll = new SinglyLinkedList();
ll.insertAtEnd(10);
ll.insertAtEnd(20);
ll.insertAtEnd(30);
ll.insertAtEnd(40);
ll.insertAtEnd(50);
ll.printList();

console.log(ll.deleteAtEnd());
ll.printList();

ll.insert(45, 4);
ll.insert(65, 10);
ll.insert(95, 0);
ll.insert(35, 3);
ll.printList();

console.log(ll.delete(2));
console.log(ll.delete(6));
console.log(ll.delete(4));
console.log(ll.delete(0));
ll.printList();