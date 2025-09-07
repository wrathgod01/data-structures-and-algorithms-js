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
    for(let i = start; i <= end; i++) {
        arr[i] = temp[i - start];
    }
    console.log("Sort and Merge Step:", arr.slice(start, end+1).toString());

    return arr;
}

function mergeSort(arr, start, end) {
    if(start >= end) return;

    let mid = start + Math.floor((end - start) / 2);
    mergeSort(arr, start, mid);
    console.log("Split:", arr.slice(start, mid+1));
    mergeSort(arr, mid+1, end);
    console.log("Split:", arr.slice(mid+1, end+1));
    return merge(arr, start, mid, end);
}

let unsortedArray = [12,56,23,34,1,78,5,9,10,3];
console.log("Original Array: ", JSON.stringify(unsortedArray));
let sortedArray = mergeSort([...unsortedArray], 0, unsortedArray.length-1);
console.log("Final Sorted Array: ", JSON.stringify(sortedArray));

// Algorithm: It mainly divides array into 2 parts - left side and right side recursively (divide and conquer), 
// and then merges these fragments one by one

// Time Complexity: O(nlogn)
// Space Complexity: O(n)