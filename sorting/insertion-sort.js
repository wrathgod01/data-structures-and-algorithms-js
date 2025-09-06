function insertionSort(arr) {
    const n = arr.length;

    for(let i = 1; i < n; i++) {
        let j = i - 1;
        let current = arr[i];
        while(j >= 0 && arr[j] > current) {
            arr[j+1] = arr[j];
            j--;
        }

        arr[j+1] = current;

        console.log("i =", i, arr.toString());
    }

    return arr;
}
let unsortedArray = [12,56,23,34,1,78,5,9,10,3];
let sortedArray = insertionSort([...unsortedArray]);
console.log(sortedArray.toString());

// Algorithm: It mainly divides array into 2 parts - sorted(left side) and unsorted(right side), finds min from unsorted and places
// in sorted portion in each iteration
// Iterate i = 1 -> size-1
//    j = i
//    compare and swap until j >= 0 && arr[j] < arr[j-1]
//    decrement j by 1 (j--)

// Time Complexity: O(n^2)
// Space Complexity: O(1)