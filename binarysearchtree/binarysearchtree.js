class ListNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new ListNode(value);

        if(this.root == null) {
            this.root = node;
            return;
        }

        let curr = this.root;

        while(curr !== null) {
            // duplicates not allowed to be inserted
            if(node.value === curr.value) {
                break;
            }

            if(node.value < curr.value) {
                if(curr.left !== null) {
                    curr = curr.left;
                    continue;
                }

                curr.left = node;
                break;
            }

            if(node.value > curr.value) {
                if(curr.right !== null) {
                    curr = curr.right;
                    continue;
                }

                curr.right = node;
                break;
            }
        }
    }

    // only for quick glance
    print() {
        return this.root;
    }

    search(value) {
        if(this.root === null) {
            console.log("BST is empty");
            return -1;
        }

        let curr = this.root;
        while(curr !== null) {
            if(value === curr.value) {
                return curr;
            }
            
            if(value < curr.value) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }

        return -1;
    }
}