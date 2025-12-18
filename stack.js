class ArrayStack {
    constructor() {
        this.stack = [];
    }

    size() {
        return this.stack.length;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    peek() {
        if(this.isEmpty()) return "Empty Stack";

        return this.stack[this.size() - 1];
    }

    push(data) {
        this.stack.push(data);
    }

    pop() {
        if(this.isEmpty()) return "Empty Stack";

        return this.stack.pop();
    }

    print() {
        console.log(this.stack + "<- TOP");
    }
}

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackLL {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    size() {
        return this.length;
    }

    isEmpty() {
        return this.length === 0;
    }

    peek() {
        if(this.isEmpty()) return "Empty Stack";

        return this.top.data;
    }

    push(data) {
        let node = new ListNode(data);

        if(this.isEmpty()) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }

        this.length++;
    }

    pop() {
        if(this.isEmpty()) return "Empty Stack";

        let node = this.top;
        this.top = this.top.next;

        node.next = null;
        this.length--;

        return node;
    }

    print() {
        let curr = this.top;
        let res = [];
        while(curr) {
            res.push(curr.data);

            curr = curr.next;
        }

        console.log("TOP -> " + res.join(" "));
    }
}

let stack = new StackLL();
// let stack = new ArrayStack();
stack.push(34);
stack.push(16);
stack.push(45);
stack.push(98);
stack.push(23);

stack.print();

console.log(stack.pop());
stack.print();

console.log(stack.peek());
stack.print();