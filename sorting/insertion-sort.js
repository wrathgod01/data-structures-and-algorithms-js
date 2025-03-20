function insertionSort(arr) {
    const size = arr.length;

    for(let i = 1; i < size; i++) {
        let j = i;
        while(j >= 0 && arr[j] < arr[j-1]) {
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]];  // swap
            j--;
        }

        console.log("i =", i, JSON.stringify(arr));
    }
}

insertionSort([12,56,23,34,1,78,5,9,10,3]);

// Algorithm: It mainly divides array into 2 parts - sorted(left side) and unsorted(right side), finds min from unsorted and places
// in sorted portion in each iteration
// Iterate i = 1 -> size-1
//    j = i
//    compare and swap until j >= 0 && arr[j] < arr[j-1]
//    decrement j by 1 (j--)

// Time Complexity: O(n^2)
// Space Complexity: O(1)