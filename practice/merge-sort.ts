function mergeSort(arr: number[], start: number, end: number) {
    if(start >= end) return;

    let mid = Math.floor((end + start) / 2);
    mergeSort(arr, 0, mid);
    mergeSort(arr, mid+1, end);
    return merge(arr, start, mid, end);
}

function merge(arr: number[], start: number, mid: number, end: number) {
    let temp: Array<number> = new Array<number>(end - start + 1);
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

    for(let i = start; i <= end; i++) {
        arr[i] = temp[i - start];
    }

    return arr;
}

let arr = [98,8,2,5,1,9,23,14,0];
let res = mergeSort(arr, 0, arr.length - 1);
console.log(JSON.stringify(res));