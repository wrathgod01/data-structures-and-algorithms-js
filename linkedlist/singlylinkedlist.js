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

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    push(data) {
        let node = new ListNode(data);
        
        if(this.isEmpty()) {
            this.head = node;
        }
        
        if(this.tail) {
            this.tail.next = node;
        }
        
        this.tail = node;
        this.length++;
    }

    pop() {
        if(this.isEmpty()) {
            return null;
        }
        
        let node = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = null, curr = this.head;
            while(curr !== node) {
                prev = curr;
                curr = curr.next;
            }

            prev.next = null;
            this.tail = prev;
        }
        
        this.length--;
        return node.data;
    }

    shift() {
        if(this.isEmpty()) {
            return undefined;
        }

        let node = this.head;
        this.head = this.head.next;
        node.next = null;

        if(this.length === 1) {
            this.tail = null;
        }

        this.length--;
        return node.data;
    }

    unshift(data) {
        let node = new ListNode(data);
        if(this.isEmpty()) {
            this.tail = node;
        }

        node.next = this.head;
        this.head = node;
        this.length++;
    }
    
    valueAt(index) {
        if(index >= this.length) {
            return null;
        }

        let curr = this.head;

        for(let i = 0; i < index; i++) {
            curr = curr.next;
        }

        return curr.data;
    }

    insert(data, index) {
        if(index > this.length) {
            console.log("Invalid insert position passed", index);
            return;
        }

        if(index == 0) {
            this.unshift(data);
            return;
        }

        if(index == this.length) {
            this.push(data);
            return;
        }

        let curr = this.head;
        for(let i = 0; i < (index-1); i++) {
            curr = curr.next;
        }

        let node = new ListNode(data);
        node.next = curr.next;
        curr.next = node;
        this.length++;
    }

    delete(index) {
        if(index >= this.length) {
            console.log("Invalid delete position passed", index);
            return null;
        }

        if(index == 0) {
            return this.shift();
        }

        if(index == this.length - 1) {
            return this.pop();
        }

        let curr = this.head;
        for(let i = 0; i < (index-1); i++) {
            curr = curr.next;
        }

        let node = curr.next;
        curr.next = curr.next.next;
        node.next = null;
        this.length--;

        return node.data;
    }

    removeValue(data) {
        if(this.isEmpty()) {
            return null;
        }

        let index = this.search(data);
        if(index === -1) {
            console.log("No such value exists");
            return undefined;
        }

        return this.delete(index);
    }

    search(data) {
        let curr = this.head;

        let index = 0;
        while(curr) {
            if(curr.data === data) {
                return index;
            }

            curr = curr.next;
            index++;
        }

        return -1;
    }

    print() {
        let curr = this.head;
        let list = "";
        while(curr) {
            list += (curr.data + "->");
            curr = curr.next;
        }

        list += "null";

        console.log(list);
        console.log("Size:", this.size());
    }
}

module.exports = SinglyLinkedList;