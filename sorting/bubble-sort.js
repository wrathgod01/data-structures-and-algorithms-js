function bubbleSort(arr) {
    const size = arr.length;

    for(let i = 0; i < size - 1; i++) {
        for(let j = 0; j < size - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];  // swap
            }
        }
        console.log("i =", i, JSON.stringify(arr));
    }
}

bubbleSort([12,56,23,34,1,78,5,9,10,3]);

// Algorithm: It compares adjacent elements if arr[i] > arr[i+1], then swap
// Iterate i = 0 -> size-2
//    Iterate j = 0 -> size-2-i (i as in every iteration, large elements will get pushed to the end and need not require scanning)
//         if arr[j] > arr[j+1] then swap

// Time Complexity: O(n^2)
// Space Complexity: O(1)