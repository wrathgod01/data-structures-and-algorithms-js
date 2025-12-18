class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class QueueLL {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    enqueue(data) {
        let node = new ListNode(data);

        if(this.isEmpty()) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = this.rear.next;
        }

        this.length++;
    }

    dequeue() {
        if(this.isEmpty()) return "Empty Queue";

        let node = this.front;

        if(this.front.next === null) {
            this.front = null;
            this.rear = null;
        } else {
            this.front = this.front.next;
        }

        node.next = null;
        this.length--;

        return node;
    }

    peek() {
        if(this.isEmpty()) return "Empty Queue";

        return this.front.data;
    }

    print() {
        let curr = this.front;
        let res = [];

        while(curr) {
            res.push(curr.data);
            curr = curr.next;
        }

        console.log("FRONT -> " + res.join(" ") + " <- REAR");
    }
}

class QueueMap {
    constructor() {
        this.queue = new Map();
        this.front = -1;
        this.rear = -1;
    }

    size() {
        if(this.isEmpty()) return 0;

        return this.rear - this.front + 1;
    }

    isEmpty() {
        return this.front === -1;
    }

    peek() {
        if(this.isEmpty()) return "Empty Queue";

        return this.queue.get(this.front);
    }

    enqueue(data) {
        if(this.isEmpty()) {
            this.front++;
        }

        this.queue.set(++this.rear, data);
    }

    dequeue() {
        if(this.isEmpty()) return "Empty Queue";

        let data = this.queue.get(this.front);
        if(this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
            this.queue.clear();
        } else {
            this.queue.delete(this.front++);
        }

        return data;
    }

    print() {
        let res = [];

        for(const [key, value] of this.queue) {
            res.push(value);
        }

        console.log("FRONT -> " + res.join(" ") + " <- REAR");
    }
}

// let queue = new QueueLL();
let queue = new QueueMap();
queue.enqueue(34);
// queue.enqueue(16);
// queue.enqueue(45);
// queue.enqueue(98);
// queue.enqueue(23);

queue.print();

console.log(queue.dequeue());
queue.print();

console.log(queue.peek());
queue.print();