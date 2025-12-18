function merge(arr, start, mid, end) {
    let temp = new Array(end - start + 1);
    let i = 0, left = start, right = mid + 1;

    while(left <= mid && right <= end) {
        if(arr[left] <= arr[right]) {
            temp[i++] = arr[left++];
        } else {
            temp[i++] = arr[right++];
        }
    }

    while(left <= mid) {
        temp[i++] = arr[left++];
    }

    while(right <= end) {
        temp[i++] = arr[right++];
    }

    for(i = start; i <= end; i++) {
        arr[i] = temp[i - start];
    }

    return arr;
}

function mergeSort(arr, start, end) {
    if(start >= end) return;

    let mid = start + Math.floor((end - start) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    return merge(arr, start, mid, end);
}

let arr = [9,4,6,24,7,1,18];
console.log(JSON.stringify(mergeSort(arr, 0, arr.length - 1)));