class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        if(this.isEmpty()) return "Empty Heap";

        return this.heap[0];
    }

    _getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    _getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    _getRightChildIndex(index) {
        return 2 * index + 2;
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    _heapifyUp(index) {
        let parent = this._getParentIndex(index);

        while(index > 0 && this.heap[parent] > this.heap[index]) {
            this._swap(parent, index);
            index = parent;
            parent = this._getParentIndex(index);
        }
    }

    _heapifyDown(index) {
        let left = this._getLeftChildIndex(index);
        let right = this._getRightChildIndex(index);
        let smallest = index;

        while(left < this.size() && right < this.size()) {
            if(this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if(this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if(smallest === index) break;

            this._swap(smallest, index);
            index = smallest;
            left = this._getLeftChildIndex(index);
            right = this._getRightChildIndex(index);
        }
    }

    insert(data) {
        console.log("Inserting "+data+"...")
        this.heap.push(data);
        this._heapifyUp(this.size() - 1);
    }

    extractMin() {
        if(this.isEmpty()) return "Empty Heap";

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);

        return min;
    }

    print() {
        console.log(JSON.stringify(this.heap));
    }

    buildHeap(arr) {
        this.heap = [...arr];

        let lastNonLeafNodeIdx = Math.floor(this.size() / 2) - 1;
        for(let i = lastNonLeafNodeIdx; i >= 0; i--) {
            this._heapifyDown(i);
        }

        this.print();
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        if(this.isEmpty()) return "Empty Heap";
    }

    _getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    _getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    _getRightChildIndex(index) {
        return 2 * index + 2;
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    _heapifyUp(index) {
        let parent = this._getParentIndex(index);

        while(index > 0 && this.heap[parent] < this.heap[index]) {
            this._swap(parent, index);
            index = parent;
            parent = this._getParentIndex(index);
        }
    }

    _heapifyDown(index) {
        let left = this._getLeftChildIndex(index);
        let right = this._getRightChildIndex(index);
        let largest = index;

        while(left < this.size()) {
            if(this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if(right < this.size() && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if(largest === index) break;

            this._swap(largest, index);
            index = largest;
            left = this._getLeftChildIndex(index);
            right = this._getRightChildIndex(index);
        }
    }

    insert(data) {
        this.heap.push(data);
        this._heapifyUp(this.size() - 1);
    }

    extractMax() {
        if(this.isEmpty()) return "Empty Heap";
        if(this.heap.length === 1) return this.heap.pop();

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);

        return max;
    }

    print() {
        console.log(JSON.stringify(this.heap));
    }

    buildHeap(arr) {
        this.heap = [...arr];
        let lastNonLeafNode = Math.floor(this.size() / 2) - 1;

        for(let i = lastNonLeafNode; i >= 0; i--) {
            this._heapifyDown(i);
        }

        this.print();
    }
}

let heap = new MaxHeap();
// let heap = new MinHeap();
heap.buildHeap([9,7,6,4,3,2,1]);
heap.insert(55);
heap.insert(45);
heap.insert(35);
heap.insert(15);
heap.insert(25);
heap.print();

console.log(heap.extractMax());
// console.log(heap.extractMin());

heap.print();