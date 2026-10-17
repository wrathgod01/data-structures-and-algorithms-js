class Heap<T> {
    private heap: Array<T>;
    private compareFn: (a: T, b: T) => number;

    constructor(compareFn: (a: T, b: T) => number = (a: any, b: any): number => a - b) {
        this.heap = new Array<T>();
        this.compareFn = compareFn;
    }

    private parentIdx = (idx: number): number => Math.floor((idx - 1) / 2);
    private leftChildIdx = (idx: number): number => 2 * idx + 1;
    private rightChildIdx = (idx: number): number => 2 * idx + 2;
    private swap = (i: number, j: number) => { [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]] } 

    private heapifyUp = (idx: number) => {
        while(idx > 0) {
            let parent = this.parentIdx(idx);

            if(this.compareFn(this.heap[idx], this.heap[parent]) >= 0) break;
            this.swap(idx, parent);
            idx = parent;
        }
    }
    private heapifyDown = (idx: number) => {
        while(true) {
            let smallest = idx;
            let left = this.leftChildIdx(idx), right = this.rightChildIdx(idx);
    
            if(left < this.size() - 1 && this.compareFn(this.heap[left], this.heap[smallest]) <= 0) {
                smallest = left;
            }

            if(right < this.size() - 1 && this.compareFn(this.heap[right], this.heap[smallest]) <= 0) {
                smallest = right;
            }

            if(smallest === idx) break;
            this.swap(smallest, idx);
            idx = smallest;
        }
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    enqueue(item: T) {
        this.heap.push(item);
        this.heapifyUp(this.heap.length - 1);
    }

    dequeue(): T | null {
        if(this.isEmpty()) return null;
        if(this.size() === 1) return this.heap.pop()!;

        let min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown(0);

        return min;
    }

    print() {
        console.log(JSON.stringify(this.heap));
    }

    peek(): T | null {
        let min = this.heap[0] ?? null;
        console.log(min)
        return min;
    }
}

const minHeap = new Heap<number>();
minHeap.enqueue(7);
minHeap.enqueue(5);
minHeap.enqueue(9);
minHeap.enqueue(1);
minHeap.enqueue(3);
minHeap.peek();
minHeap.print();

minHeap.dequeue();
minHeap.peek();
minHeap.print();
