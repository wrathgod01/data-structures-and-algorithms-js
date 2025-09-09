export class MaxHeap {
    constructor(arr = []) {
        this.heap = [];
        if(arr.length > 0) {
            this._buildHeap(arr);
        }
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return !this.isEmpty() ? this.heap[0]: null;
    }

    _buildHeap(arr) {
        this.heap = [...arr];
        let lastNonLeafNodeIdx = Math.floor(this.size() / 2) - 1;
        
        for(let currentIdx = lastNonLeafNodeIdx; currentIdx >= 0; currentIdx--) {
            this._heapifyDown(currentIdx);
        }
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    _getParentIndex(i) {
        return Math.floor((i-1)/2);
    }

    _getLeftChildIndex(i) {
        return 2 * i + 1;
    }
    
    _getRightChildIndex(i) {
        return 2 * i + 2;
    }

    _heapifyUp(currentIdx) {
        let parentIdx = this._getParentIndex(currentIdx);

        while(currentIdx > 0 && this.heap[parentIdx] < this.heap[currentIdx]) {
            this._swap(parentIdx, currentIdx);
            currentIdx = parentIdx;
            parentIdx = this._getParentIndex(currentIdx);
        }
    }
    
    _heapifyDown(currentIdx) {
        let endIdx = this.size() - 1;
        let leftChildIdx = this._getLeftChildIndex(currentIdx);

        while(leftChildIdx <= endIdx) {
            let rightChildIdx = this._getRightChildIndex(currentIdx);
            let largestChildIdx = -1;

            if(rightChildIdx <= endIdx && this.heap[rightChildIdx] > this.heap[leftChildIdx]) {
                largestChildIdx = rightChildIdx;
            } else {
                largestChildIdx = leftChildIdx;
            }

            if(this.heap[currentIdx] >= this.heap[largestChildIdx]) {
                return; // node is in correct position
            }

            this._swap(currentIdx, largestChildIdx);
            currentIdx = largestChildIdx;
            leftChildIdx = this._getLeftChildIndex(currentIdx);
        }
    }

    insert(data) {
        this.heap.push(data);
        this._heapifyUp(this.size() - 1);
    }

    extractMax() {
        this._swap(0, this.size() - 1);
        let maxVal = this.heap.pop();
        this._heapifyDown(0);

        return maxVal;
    }  
}