import { MaxHeap } from "./maxheap.js";

console.log("--- Building heap via insert ---");
const heap = new MaxHeap();
heap.insert(10);
heap.insert(5);
heap.insert(12);
heap.insert(3);
heap.insert(7);

console.log("Heap array:", heap.heap); // Should be [12, 7, 10, 3, 5] or similar
console.log("Largest element is:", heap.peek()); // 12

console.log("\n--- Extracting elements ---");
console.log("Extracted:", heap.extractMax()); // 12
console.log("New largest element is:", heap.peek()); // 10
console.log("Heap array after extraction:", heap.heap);

console.log("Extracted:", heap.extractMax()); // 10
console.log("New largest element is:", heap.peek()); // 7
console.log("Heap array after extraction:", heap.heap);

console.log("\n--- Building heap from an array ---");
const initialArray = [12, 56, 23, 34, 1, 78, 5, 9, 10, 3];
const heapFromArr = new MaxHeap(initialArray);
console.log("Heap built from array:", heapFromArr.heap); // e.g. []
console.log("Largest element is:", heapFromArr.peek()); // 78