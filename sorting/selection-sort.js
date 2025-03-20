function selectionSort(arr) {
    const size = arr.length;

    for(let i = 0; i < size; i++) {
        let min = i;
        for(let j = i+1; j < size; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }

        [arr[i], arr[min]] = [arr[min], arr[i]]; // swap

        console.log("i =", i, JSON.stringify(arr));
    }
}

selectionSort([12,56,23,34,1,78,5,9,10,3]);

// Algorithm: It mainly divides array into 2 parts - sorted(left side) and unsorted(right side), finds min from unsorted and places
// in sorted portion in each iteration
// Iterate i = 0 -> size-1
//    Iterate j = i+1 -> size-1
//         if arr[min] > arr[j] min = j
//    swap element at min index and current iteration index(i)

// Time Complexity: O(n^2)
// Space Complexity: O(1)