import { MinHeap } from "./minheap.js";

console.log("--- Building heap via insert ---");
const heap = new MinHeap();
heap.insert(10);
heap.insert(5);
heap.insert(12);
heap.insert(3);
heap.insert(7);

console.log("Heap array:", heap.heap); // Should be [3, 5, 12, 10, 7] or similar
console.log("Smallest element is:", heap.peek()); // 3

console.log("\n--- Extracting elements ---");
console.log("Extracted:", heap.extractMin()); // 3
console.log("New smallest element is:", heap.peek()); // 5
console.log("Heap array after extraction:", heap.heap);

console.log("Extracted:", heap.extractMin()); // 5
console.log("New smallest element is:", heap.peek()); // 7
console.log("Heap array after extraction:", heap.heap);

console.log("\n--- Building heap from an array ---");
const initialArray = [12, 56, 23, 34, 1, 78, 5, 9, 10, 3];
const heapFromArr = new MinHeap(initialArray);
console.log("Heap built from array:", heapFromArr.heap); // e.g. [1, 3, 5, 9, 10, 78, 23, 56, 34, 12]
console.log("Smallest element is:", heapFromArr.peek()); // 1