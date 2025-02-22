class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class QueueLinkedList {
    constructor(MAX_SIZE) {
        this.front = null;
        this.rear = null;
        this.length = 0;
        this.MAX_SIZE = MAX_SIZE;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    isFull() {
        return this.size() === this.MAX_SIZE; 
    }

    enqueue(data) {
        let node = new Node(data);
        if(this.isEmpty()) {
            this.front = node;
        }

        if(this.rear) {
            this.rear.next = node;
        }

        this.rear = node;
        this.length++;
    }
    
    dequeue() {
        if(this.isEmpty()) {
            return undefined;
        }

        let node = this.front;
        this.front = this.front.next;
        node.next = null;

        if(this.size() === 1) {
            this.rear = null;
        }

        this.length--;
        return node.value;
    }

    peek() {
        return this.front.value;
    }

    print() {
        console.log("Current Queue --->");
        if(this.isEmpty()) {
            console.log("null");
            return;
        }
        let curr = this.front;

        console.log("FRONT");
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
        console.log("REAR");
    }
}

module.exports = QueueLinkedList;