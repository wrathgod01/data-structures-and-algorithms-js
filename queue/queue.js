class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class QueueArray {
    constructor(MAX_SIZE) {
        this.MAX_SIZE = MAX_SIZE;
        this.front = -1;
        this.rear = -1;
        this.queue = new Array(MAX_SIZE);
    }

    size() {
        if(this.isEmpty()) {
            return 0;
        }
        return this.rear - this.front + 1;
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        return this.size() === this.MAX_SIZE;
    }

    peek() {
        if(this.isEmpty()) {
            return null;
        }
        return this.queue[this.front];
    }

    enqueue(data) {
        if(this.isFull()) {
            console.log("Queue full")
            return;
        }

        if(this.isEmpty()) {
            this.front++;
        }

        this.queue[++this.rear] = data;
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("Queue empty")
            return null;
        }

        if(this.size() === 1) {
            let val = this.queue[this.front];
            this.front = this.rear = -1;
            return val;
        }

        return this.queue[this.front++];
    }

    print() {
        console.log("Current Queue --->");
        if(this.isEmpty()) {
            console.log("null");
            return;
        }
        
        console.log(JSON.stringify(this.queue.slice(this.front, this.rear+1)));
    }
}

export class QueueLinkedList {
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
        if(this.isFull()) {
            console.log("Queue full");
            return;
        }

        let node = new ListNode(data);
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
            console.log("Queue empty");
            return null;
        }

        let node = this.front;
        this.front = this.front.next;
        node.next = null;

        if(this.length === 1) {
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

        let queue = "FRONT -> ";
        while(curr) {
            queue += `${curr.value} `;
            curr = curr.next;
        }
        queue += "<-REAR"
        console.log(queue);
    }
}