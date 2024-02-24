class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() { // O(1)
        return this.length === 0;
    }

    printList() { // O(n)
        let curr = this.head;
        if(!this.length) {
            console.log("EMPTY LIST");
            console.log("Length of Linked List: " + this.length);
            return;
        } 
        
        let list = "";
        list += "null <- ";
        while(curr.next) {
            list += curr.data + " <-> ";
            curr = curr.next;
        }
        list += curr.data + " -> null";
        console.log("List: " + list);
        console.log("Length of Linked List: " + this.length);
    }

    printListReverse() {  // O(n)
        let curr = this.tail;
        if(!this.length) {
            console.log("EMPTY LIST");
            console.log("Length of Linked List: " + this.length);
            return;
        } 
        
        let list = "";
        list += "null <- ";
        while(curr.prev) {
            list += curr.data + " <-> ";
            curr = curr.prev;
        }
        list += curr.data + " -> null";
        console.log("Reverse List: " + list);
        console.log("Length of Linked List: " + this.length);
    }

    insertAtEnd(data) {  // O(1)
        let node = new Node(data);

        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.length++;
            return;
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;

        this.length++;
    }

    deleteAtEnd() { // O(1)
        if(this.isEmpty()) {
            console.log("Error: Invalid Operation - List Empty");
        }

        if(this.length == 1) {
            this.head = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next.prev = null;
            this.tail.next = null;
        }

        this.length--;
    }
    
    insert(data, index) { // O(1)
        if(index >= this.length) {
            this.insertAtEnd(data);
            return;   
        }
        let node = new Node(data);
        
        if(index == 0) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        } else {
            let curr = this.head;
            for(let i = 0; i < (index-1); i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
            node.prev = curr;
            node.next.prev = node;
        }
        this.length++;
    }

    delete(index) {
        if(this.isEmpty()) {
            console.log("Error: Invalid Operation - List Empty");
        }
        if(index == (this.length-1)) {
            this.deleteAtEnd();
            return;
        }

        let curr = this.head;
        if(index == 0) {
            this.head = this.head.next;
            this.head.prev = null;
            curr.next = null;
        } else {
            for(let i = 0; i < index; i++) {
                curr = curr.next;
            }

            curr.prev.next = curr.next;
            curr.next.prev = curr.prev;
            curr.next = null;
            curr.prev = null;
        }

        this.length--;
    }
}

let dl = new DoublyLinkedList();

dl.insertAtEnd(10);
dl.insertAtEnd(20);
dl.insertAtEnd(30);
dl.insertAtEnd(40);
dl.insertAtEnd(50);
dl.printList();

dl.deleteAtEnd();
dl.printList();

dl.insert(35, 3);
dl.printList();
dl.printListReverse();

dl.delete(3);
dl.printList();
dl.printListReverse();