class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length === 0;
    }

    printList() {
        let curr = this.head;
        let list = "";
        while(curr) {
            list += curr.data + " -> ";
            curr = curr.next;
        }
        list += this.length != 0 ? "null": "EMPTY LIST";
        console.log(list);
        console.log("Length of Linked List: " + this.length);
    }

    insertAtEnd(data) {
        let node = new Node(data);
        
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }

        this.length++;
    }

    deleteAtEnd() {
        if(this.isEmpty()) {
            console.log("Error: Invalid Operation - List Empty");
        } else {
            let curr = this.head;
            if(this.head.next == null) {
                this.head = null;
            } else {
                while(curr.next.next != null) {
                    curr = curr.next;
                }
                curr.next = null;
            }

            this.length--;
        }
    }

    insert(data, index) {
        let node = new Node(data);
        if(index == 0) {
            node.next = this.head;
            this.head = node;
        } else if(index > this.length - 1) {
            this.insertAtEnd(data);
            return;
        } else {
            let curr = this.head;
            for(let i = 0; i < (index-1); i++) {
                curr = curr.next;
            }

            node.next = curr.next;
            curr.next = node;
        }

        this.length++;
    }

    delete(index) {
        if(this.isEmpty()) {
            console.log("Error: Invalid Operation - List Empty");
        }
        if(index == 0) {
            let curr = this.head;
            this.head = this.head.next;
            curr.next = null;
        } else {
            if(index >= this.length-1) {
                this.deleteAtEnd();
                return;
            }
            let curr = this.head;
            for(let i = 0; i < (index-1); i++) {
                curr = curr.next;
            }
            let ptr = curr.next;
            curr.next = curr.next.next;
            ptr.next = null;
        }
        this.length--;
    }
}

let ll = new SinglyLinkedList();
ll.insertAtEnd(10);
ll.insertAtEnd(20);
ll.insertAtEnd(30);
ll.insertAtEnd(40);
ll.insertAtEnd(50);
ll.printList();

ll.deleteAtEnd();
ll.printList();

ll.insert(45, 4);
ll.insert(65, 10);
ll.insert(95, 0);
ll.insert(35, 3);
ll.printList();

ll.delete(2);
ll.delete(6);
ll.delete(4);
ll.delete(0);
ll.printList();




