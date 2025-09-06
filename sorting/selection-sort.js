function selectionSort(arr) {
    const n = arr.length;
    let swaps = 0, passes = 0, comparison = 0;

    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i+1; j < n; j++) {
            if(arr[min] > arr[j]) {
                min = j;
            }
            comparison++;
        }
        
        if(min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]]; // swap
            swaps++;
        }
        
        passes++;
        console.log("i =", i, arr.toString());
    }

    console.log("Selection Sort swaps:", swaps);
    console.log("Selection Sort comparison:", comparison);
    console.log("Selection Sort passes:", passes);

    return arr;
}
let unSortedArray = [12,56,23,34,1,78,5,9,10,3];
let sortedArray = selectionSort([...unSortedArray]);
console.log(sortedArray.toString());

// Algorithm: It mainly divides array into 2 parts - sorted(left side) and unsorted(right side), finds min from unsorted and places
// in sorted portion in each iteration
// Iterate i = 0 -> size-1
//    Iterate j = i+1 -> size-1
//         if arr[min] > arr[j] min = j
//    swap element at min index and current iteration index(i)

// Time Complexity: O(n^2)
// Space Complexity: O(1)