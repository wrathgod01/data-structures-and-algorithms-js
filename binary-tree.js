class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxDepth(root) {
    if(!root) return 0;

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

function preOrder(root) {
    let res = [];

    let traverse = (root) => {
        if(!root) return;

        res.push(root.val);
        traverse(root.left);
        traverse(root.right);
    }

    traverse(root);

    return res;
}

function inOrder(root) {
    let res = [];

    let traverse = (root) => {
        if(!root) return;

        traverse(root.left);
        res.push(root.val);
        traverse(root.right);
    }

    traverse(root);

    return res;
}

function postOrder(root) {
    let res = [];

    let traverse = (root) => {
        if(!root) return;

        traverse(root.left);
        traverse(root.right);
        res.push(root.val);
    }

    traverse(root);

    return res;
}

function levelOrderTraversal(root) {
    if(!root) return [];

    let queue = [root];
    let front = 0;
    let res = [];

    while(front < queue.length) {
        let levelSize = queue.length - front;
        let currentLevel = [];

        for(let i = 0; i < levelSize; i++) {
            let node = queue[front++];
            currentLevel.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        res.push(currentLevel);
    }

    return res;
}

function isValidBST(root) {
    let validate = (root, min, max) => {
        if(!root) return true;

        if (root.val <= min || root.val >= max) return false;

        return validate(root.left, min, root.val) && validate(root.right, root.val, max);
    }

    return validate(root, -Infinity, +Infinity);
}

function lowestCommonAncestorBinaryTree(root, p, q) {
    if(!root || root === p || root === q) {
        return root;
    }

    let left = lowestCommonAncestorBinaryTree(root.left, p, q);
    let right = lowestCommonAncestorBinaryTree(root.right, p, q);

    if(left && right) return root;

    return left || right;
}

function treeView(root, direction) {
    if(!root) return [];

    let queue = [root], front = 0;
    let res = [];

    while(front < queue.length) {
        let levelSize = queue.length - front;

        for(let i = 0; i < levelSize; i++) {
            let node = queue[front++];
            
            if(direction === 'left' && i === 0) res.push(node.val);

            if(direction === 'right' && i === levelSize - 1) res.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }

    return res;
}

function treeViewDFS(root, direction) {
    let res = [];
    let dfs = (root, depth) => {
        if(!root) return;

        // if this it true, then it is the first time the control has reached here..
        if(res.length === depth) {
            res.push(root.val);
        }

        switch(direction) {
            case 'left': 
                dfs(root.left, depth + 1);
                dfs(root.right, depth + 1);
                break;
            case 'right':
                dfs(root.right, depth + 1);
                dfs(root.left, depth + 1);
                break;
        }
    }

    dfs(root, 0);
    return res;
}

function maxDiameter(root) {
    let maxD = 0;

    let height = (root) => {
        if(!root) return 0;

        let leftH = height(root.left);
        let rightH = height(root.right);

        maxD = Math.max(maxD, leftH + rightH);

        return 1 + Math.max(leftH, rightH);
    }

    height(root);
    return maxD;
}

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(4);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.left.right.right = new TreeNode(17);

// console.log(maxDepth(root));
// console.log(preOrder(root));
// console.log(inOrder(root));
// console.log(postOrder(root));
// console.log(levelOrderTraversal(root));

// console.log(treeView(root, 'left'));
// console.log(treeView(root, 'right'));
console.log(treeViewDFS(root, 'left'));
console.log(treeViewDFS(root, 'right'));