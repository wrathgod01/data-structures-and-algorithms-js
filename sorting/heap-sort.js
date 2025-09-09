function heapSort(arr) {
    const n = arr.length;

    function heapifyDown(size, i) {
        let l = 2 * i + 1, r = 2 * i + 2;
        let largest = i;

        if(l < size && arr[l] > arr[largest]) {
            largest = l;
        }

        if(r < size && arr[r] > arr[largest]) {
            largest = r;
        }

        if(largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapifyDown(size, largest);
        }
    }

    function heapifyDownIterative(size, i) {
        let l = 2 * i + 1;
        
        while(l < size) {
            let r = 2 * i + 2;
            let largest = i;

            if(arr[l] > arr[largest]) {
                largest = l;
            }

            if(r < size && arr[r] > arr[largest]) {
                largest = r;
            }

            if(largest === i) {
                return;    
            }

            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            i = largest;
            l = 2 * i + 1;
        }
    }

    // step 1: start heapifying from last non-leaf node to create MaxHeap
    const firstParentIdx = Math.floor(n / 2) - 1;
    for(let i = firstParentIdx; i >= 0; i--) {
        // heapifyDown(n, i);
        heapifyDownIterative(n, i);
    }
    
    console.log("Max Heap:", JSON.stringify(arr));

    // step 2: extract max from heap and repeat heapify on reduced array size
    for(let i = n - 1; i > 0; i--) {
        // swap as max is at idx = 0
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // heapifyDown(i, 0);
        heapifyDownIterative(i, 0);
        console.log("i =", i, arr.toString());
    }

    return arr;
}

const unsortedArray = [12, 56, 23, 34, 1, 78, 5, 9, 10, 3];
console.log("Original Array:", JSON.stringify(unsortedArray));
const sortedArray = heapSort([...unsortedArray]);
console.log("Sorted Array:", JSON.stringify(sortedArray));