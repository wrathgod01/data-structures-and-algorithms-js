import { BinarySearchTree } from './binarysearchtree.js';

let bst = new BinarySearchTree();
console.log(bst.search(20));
bst.insert(50);
bst.insert(30);
bst.insert(20);
bst.insert(35);
bst.insert(30);
bst.insert(70);
bst.insert(65);

console.log(bst.print());

console.log("30: ", bst.search(30));
console.log("90: ", bst.search(90));
console.log("50: ", bst.search(50));
console.log("70: ", bst.search(70));