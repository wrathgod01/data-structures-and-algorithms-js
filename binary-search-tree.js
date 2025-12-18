class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertRecursive(value) {
        let _insert = (root) => {
            if(!root) return new TreeNode(value);

            if(root.val > value) {
                root.left = _insert(root.left);
            } else if(root.val < value) {
                root.right = _insert(root.right);
            }

            return root;
        }

        this.root = _insert(this.root);
        return this;
    }

    insertIterative(value) {
        if(!this.root) {
            this.root = new TreeNode(value);
            return;
        }

        let curr = this.root;
        while(curr) {
            if(curr.val === value) return this;

            if(curr.val > value) {
                if(curr.left === null) {
                    curr.left = new TreeNode(value);
                    return this;
                }
                curr = curr.left;
            } else if(curr.val < value) {
                if(curr.right === null) {
                    curr.right = new TreeNode(value);
                    return this;
                }
                curr = curr.right;
            }
        }
    }

    searchRecursive(value) {
        let _search = (root) => {
            if(!root) return null;

            if(root.val === value) return root;

            if(root.val > value) {
                return _search(root.left);
            } 

            return _search(root.right);
        }

        let node = _search(this.root);
        return node;
    }

    searchIterative(value) {
        let curr = this.root;

        while(true) {
            if(curr.val === value) break;

            if(curr.val > value) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }

        return curr;
    }

    deleteIterative(value) {
        let curr = this.root, parent = null;

        while(curr && curr.val != value) {
            parent = curr;
            if(curr.val > value) {
                curr = curr.left;
            } else {
                curr = curr.right;
            }
        }

        if(!curr) return null;

        // Node has 2 children
        if(curr.left && curr.right) {
            let successor = curr.right;
            let successorParent = curr;

            while(successor.left) {
                successorParent = successor;
                successor = successor.left;
            }

            curr.val = successor.val;
            curr = successor;
            parent = successorParent;
        }

        // Node has 0 or 1 child
        let child = (curr.left != null) ? curr.left : curr.right;

        if(parent == null) {
            // special case - deletion of bst root
            this.root = child;
        } else {
            if(parent.left === curr) {
                parent.left = child;
            } else {
                parent.right = child;
            }
        }

        return this.root;
    }

    deleteRecursive(value) {
        let _delete = (root) => {
            if(!root) return null;

            if(root.val > value) {
                root.left = _delete(root.left);
                return root;
            } else if(root.val < value) {
                root.right = _delete(root.right);
                return root;
            }
            
            // node has 2 children
            if(root.left && root.right) {
                let successor = root.right;

                while(successor.left) {
                    successor = successor.left;
                }

                [root.val, successor.val] = [successor.val, root.val];
                root.right = _delete(root.right);

                return root;
            }

            // node has 0 or 1 child
            return root.left !== null ? root.left : root.right;
        }

        this.root = _delete(this.root);
        return this.root;
    }
}


// Kth Smallest element in BST
function KthSmallest(root, k) {
    let res = null;
    let _helper = (root) => {
        if(!root || res !== null) return;

        _helper(root.left);

        if((--k) === 0) {
            res = root.val;
            return;
        }

        _helper(root.right);
    }

    _helper(root);
    return res;
}