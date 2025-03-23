function merge(arr, start, mid, end) {
    let temp = new Array(end - start + 1);
    let idx = 0;
    let left = start, right = mid+1;
    
    while(left <= mid && right <= end) {
        // whichever is lesser is copied get copied to the array first
        if(arr[left] <= arr[right]) {
            temp[idx++] = arr[left++];
        } else {
            temp[idx++] = arr[right++];
        }
    }

    // for copying left out array elements
    while(left <= mid) {
        temp[idx++] = arr[left++];
    }

    while(right <= end) {
        temp[idx++] = arr[right++];
    }

    // copying temp arr contents to original array
    let str = "";
    for(let i = start; i <= end; i++) {
        arr[i] = temp[i - start];
        str += (arr[i] + " ");
    }
    console.log("Sort and Merge Step:", str);
}

function mergeSort(arr, start, end) {
    if(start >= end) return;

    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid+1, end);
    merge(arr, start, mid, end);
}

let arr = [12,56,23,34,1,78,5,9,10,3];
console.log("Original Array: ", JSON.stringify(arr));
mergeSort(arr, 0, arr.length-1);
console.log("Final Sorted Array: ", JSON.stringify(arr));

// Algorithm: It mainly divides array into 2 parts - left side and right side recursively (divide and conquer), 
// and then merges these fragments one by one

// Time Complexity: O(nlogn)
// Space Complexity: O(n)