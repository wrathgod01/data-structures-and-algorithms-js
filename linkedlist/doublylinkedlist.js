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

    size() {
        return this.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    push(data) {
        let node = new Node(data);

        if(this.isEmpty()) {
            this.head = node;
        }

        node.prev = this.tail;
        if(this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
    }

    pop() {
        if(this.isEmpty()) {
            return undefined;
        }

        let node = this.tail;
        this.tail = this.tail.prev;
        if(this.tail) {
            this.tail.next = null;
        }
        node.prev = null;
        this.length--;

        return node.data;
    }

    shift() {
        if(this.isEmpty()) {
            return undefined;
        }

        let node = this.head;
        this.head = this.head.next;
        if(this.head) {
            this.head.prev = null;
        }
        node.next = null;
        this.length--;

        return node.data;
    }

    unshift(data) {
        let node = new Node(data);
        if(this.isEmpty()) {
            this.tail = node;
        }

        node.next = this.head;
        if(this.head) {
            this.head.prev = node;
        }
        this.head = node;
        this.length++;
    }

    valueAt(index) {
        if(index >= this.size()) {
            return undefined;
        }

        let curr = this.head;

        for(let i = 0; i < index; i++) {
            curr = curr.next;
        }

        return curr.data;
    }

    search(data) {
        let curr = this.head;
        let index = 0;
        while(curr !== null) {
            if(curr.data === data) {
                return index;
            }
            curr = curr.next;
            index++;
        }

        return -1;
    }

    insert(data, index) {
        if(index > this.size()) {
            console.log("Invalid insert index passed", index);
            return;
        }

        if(index == 0) {
            this.unshift(data);
            return;
        }

        if(index == this.size()) {
            this.push(data);
            return;
        }

        let curr = this.head;
        for(let i = 0; i < index-1; i++) {
            curr = curr.next;
        }

        let node = new Node(data);
        node.next = curr.next;
        node.prev = curr;
        curr.next.prev = node;
        curr.next = node;
        this.length++;
    }

    delete(index) {
        if(index > this.size()) {
            console.log("Invalid delete index passed", index);
            return;
        }

        if(index == 0) {
            return this.shift();
        }

        if(index == this.size()) {
            return this.pop();
        }

        let curr = this.head;
        for(let i = 0; i < index-1; i++) {
            curr = curr.next;
        }

        let node = curr.next;
        curr.next = node.next;
        node.next.prev = curr;
        node.next = null;
        node.prev = null;
        this.length--;

        return node.data;
    }

    removeVal(data) {
        let index = this.search(data);
        if(index === -1) {
            console.log("No such value exists");
            return undefined;
        }

        return this.delete(index);
    }

    print(direction = "forward") {
        let list = "";
        if(this.isEmpty()) {
            console.log(list);
            console.log("Size: ", this.size());
            return;
        }

        list = "null<-";
        let curr = this.head;
        switch(direction) {
            case 'forward':
                while(curr.next) {
                    list += (curr.data + "<->");
                    curr = curr.next;
                }
                break;
            case 'backward':
                curr = this.tail;
                while(curr.prev) {
                    list += (curr.data + "<->");
                    curr = curr.prev;
                }
                break;
        }

        list += (curr.data+"->null");

        console.log(list);
        console.log("Size: ", this.size());
    }
}

module.exports = DoublyLinkedList;