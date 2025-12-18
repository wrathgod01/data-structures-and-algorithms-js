class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        let node = new ListNode(data);

        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }

        this.length++;
    }
    
    pop() {
        if(!this.head) {
            return "Empty List (-1)";
        }

        let curr = this.head, newTail = this.head;

        while(curr.next) {
            newTail = curr;
            curr = curr.next;
        }

        this.tail = newTail;
        this.tail.next = null;

        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return curr;
    }

    unshift(data) {
        let node = new ListNode(data);

        if(!this.head) {
            this.head = node;
            this.tail = node;   
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
    }

    shift() {
        if(!this.head) {
            return "Empty List (-1)"
        }
        
        let curr = this.head;

        if(this.head.next === null) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        curr.next = null;
        this.length--;

        return curr;
    }   

    print() {
        let res = [];
        let curr = this.head;

        while(curr) {
            res.push(curr.data);
            curr = curr.next;
        }

        console.log(res.join("->"));
    }

}

let list = new SinglyLinkedList();
list.push(4);
list.push(8);
list.push(5);
list.push(10);
list.print();

console.log(list.pop());
list.unshift(18);
list.unshift(7);
list.print();

console.log(list.shift());
list.print();