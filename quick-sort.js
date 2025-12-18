function partition(arr, start, end) {
    let pivotValue = arr[end];
    let pivotIndex = start;

    for(let i = start; i < end; i++) {
        if(arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
}

function quickSort(arr, start, end) {
    if(start >= end) return;

    let pivot = partition(arr, start, end);
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
}

let arr = [9,4,6,24,7,1,18];
quickSort(arr, 0, arr.length - 1)
console.log(JSON.stringify(arr));