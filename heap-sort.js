function heapSort(arr) {
    let n = arr.length;

    let heapify = (n, i) => {
        let left = 2 * i + 1, right = 2 * i + 2;
        let largest = i;

        if(left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        if(right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        if(largest !== i) {
            [arr[largest], arr[i]] = [arr[i], arr[largest]];
            heapify(n, largest);
        }
    }

    // build max heap
    for(let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);
    }

    // extract elements in-place
    for(let i = n - 1; i > 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        heapify(i, 0);
    }

    return arr;
}

let arr = [9,4,6,24,7,1,18];
console.log("Original Array:", JSON.stringify(arr));
console.log("Sorted Array:", JSON.stringify(heapSort(arr)));