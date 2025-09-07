class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class StackArray {
    constructor(MAX_SIZE) {
        this.top = -1;
        this.MAX_SIZE = MAX_SIZE;
        this.stack = new Array(MAX_SIZE);
    }

    size() {
        return this.top + 1;
    }

    isEmpty() {
        return this.top === -1;
    }

    isFull() {
        return this.top === this.MAX_SIZE - 1;
    }

    peek() {
        return !this.isEmpty() ? this.stack[this.top]: null;
    }

    push(data) {
        if(this.isFull()) {
            console.log("Stack full");
            return;
        }
        
        this.stack[++this.top] = data;
    }

    pop() {
        return !this.isEmpty() ? this.stack[this.top--]: null;
    }

    print() {
        console.log("Current Stack --->");
        console.log(JSON.stringify(this.stack.slice(0, this.top + 1)), "<-TOP");
    }
}

export class StackLinkedList {
    constructor(MAX_SIZE) {
        this.top = null;
        this.length = 0;
        this.MAX_SIZE = MAX_SIZE;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    isFull() {
        return this.length === this.MAX_SIZE;
    }

    push(data) {
        if(this.isFull()) {
            console.log("Stack full");
            return;
        }

        let node = new ListNode(data);
        if(!this.isEmpty()) {
            node.next = this.top;
        }

        this.top = node;
        this.length++;
    }

    pop() {
        if(this.isEmpty()) {
            console.log("Stack empty");
            return null;
        }

        let node = this.top;
        this.top = this.top.next;
        node.next = null;
        this.length--;

        return node.value;
    }

    peek() {
        return this.top ? this.top.value: null;
    }

    print() {
        console.log("Current Stack --->");
        if(this.isEmpty()) {
            console.log("null");
            return;
        }
        let curr = this.top;

        console.log("TOP");
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}