class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList {
    constructor(MAX_SIZE) {
        this.top = null;
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

    push(data) {
        let node = new Node(data);
        if(!this.isEmpty()) {
            node.next = this.top;
        }

        this.top = node;
        this.length++;
    }

    pop() {
        let node = this.top;
        this.top = this.top.next;
        node.next = null;
        this.length--;

        return node.value;
    }

    peek() {
        return this.top.value;
    }

    print() {
        console.log("Current Stack --->");
        if(this.isEmpty()) {
            console.log("null");
            return;
        }
        let curr = this.top;

        console.log("HEAD");
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

module.exports = StackLinkedList;