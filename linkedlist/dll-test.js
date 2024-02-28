const DoublyLinkedList = require("./doublylinkedlist")

let dl = new DoublyLinkedList();

dl.insertAtEnd(10);
dl.insertAtEnd(20);
dl.insertAtEnd(30);
dl.insertAtEnd(40);
dl.insertAtEnd(50);
dl.printList();

console.log(dl.deleteAtEnd());;
dl.printList();

dl.insert(35, 3);
dl.printList();
dl.printListReverse();

console.log(dl.delete(3));;
dl.printList();
dl.printListReverse();

