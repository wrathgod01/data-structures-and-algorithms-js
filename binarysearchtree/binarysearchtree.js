class TreeNode {
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
        let node = new TreeNode(value);

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
                if(curr.left === null) {
                    curr.left = node;
                    break;
                }
                
                curr = curr.left;
            } else if(node.value > curr.value) {
                if(curr.right === null) {
                    curr.right = node;
                    break;
                }
                
                curr = curr.right;
            }
        }
    }

    delete(value) {
        let deleteHelper = (currentNode, value) => {
            if(currentNode === null) {
                return null;
            }

            if(value < currentNode.value) {
                currentNode.left = deleteHelper(currentNode.left, value);
            } else if(value > currentNode.value) {
                currentNode.right = deleteHelper(currentNode.right, value);
            } else {

                // 1. Node is a leaf node
                if(currentNode.left === null && currentNode.right === null) {
                    return null;
                }

                // 2. Node has one child
                if(currentNode.left === null) {
                    return currentNode.right;
                }

                if(currentNode.right === null) {
                    return currentNode.left;
                }

                // 3. Node has 2 children
                // 3.1 Find inorder successor - min value in right subtree
                let findMinValueNode = (currentNode) => {
                    while(currentNode.left !== null) {
                        currentNode = currentNode.left;
                    }

                    return currentNode;
                }

                let successor = findMinValueNode(currentNode.right);
                // 3.2 Set value of current node to inorder successor value
                currentNode.value = successor.value;
                // 3.3 Remove the successor node in right subtree of currentNode
                currentNode.right = deleteHelper(currentNode.right, successor.value);
            }
            return currentNode;
        }

        this.root = deleteHelper(this.root, value);
    }

    // only for quick glance
    print() {
        return this.root;
    }

    inorderTraversal(currentNode = this.root, res = []) {
        if(currentNode === null) {
            return;
        }

        this.inorderTraversal(currentNode.left, res);
        res.push(currentNode.value);
        this.inorderTraversal(currentNode.right, res);

        return res;
    }

    preorderTraversal(currentNode = this.root, res = []) {
        if(currentNode === null) {
            return null;
        }

        res.push(currentNode.value);
        this.preorderTraversal(currentNode.left, res);
        this.preorderTraversal(currentNode.right, res);

        return res;
    }

    postorderTraversal(currentNode = this.root, res = []) {
        if(currentNode === null) {
            return;
        }

        this.postorderTraversal(currentNode.left, res);
        this.postorderTraversal(currentNode.right, res);
        res.push(currentNode.value);
    
        return res;
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