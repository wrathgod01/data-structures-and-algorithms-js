function partition(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = arr[end];

    for(let i = start; i < end; i++) {
        if(arr[i] < pivotValue) {
            if(pivotIndex !== i) {
                [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
            }
            pivotIndex++;
        }
    }

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    
    return pivotIndex;
}

function quickSort(arr, start, end) {
    if(start >= end) return;

    let pivotIndex = partition(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
}

let arr = [12,56,23,34,1,78,5,9,10,3];
console.log("Original Array: ", JSON.stringify(arr));
quickSort(arr, 0, arr.length-1);  // in-place sort
console.log("Final Sorted Array: ", JSON.stringify(arr));

// Time Complexity: O(n^2) Theta(nlogn)
// Space Complexity: O(logn)
