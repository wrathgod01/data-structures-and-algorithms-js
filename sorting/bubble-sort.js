function bubbleSort(arr) {
    const n = arr.length;
    let swaps = 0, passes = 0, comparison = 0;
    for(let i = 0; i < n - 1; i++) {
        for(let j = 0; j < n - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];  // swap
                swaps++;
            }
            comparison++;
        }
        console.log("i =", i, arr.toString());
        passes++;
    }

    console.log("Bubble Sort swaps:", swaps);
    console.log("Bubble Sort comparison:", comparison);
    console.log("Bubble Sort passes:", passes);

    return arr;
}

function optimizedBubbleSort(arr) {
    const n = arr.length;
    let swaps = 0, passes = 0, comparison = 0;
    for(let i = 0; i < n - 1; i++) {
        let isSwapped = false;
        for(let j = 0; j < n - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];  // swap
                isSwapped = true; swaps++;
            }
            comparison++;
        }
        passes++;
        console.log("i =", i, arr.toString());

        if(!isSwapped) {
            break;
        }
    }

    console.log("Optimized Bubble Sort swaps:", swaps);
    console.log("Optimized Bubble Sort comparison:", comparison);
    console.log("Optimized Bubble Sort passes:", passes);
    return arr;
}

// let unsortedArray = [12,56,23,34,1,78,5,9,10,3];
let unsortedArray = [1, 5, 2, 3, 4];
let sortedArray = bubbleSort([...unsortedArray]);
let sortedArray2 = optimizedBubbleSort([...unsortedArray]);
console.log(sortedArray.toString());
console.log(sortedArray2.toString());

// Algorithm: It compares adjacent elements if arr[i] > arr[i+1], then swap
// Iterate i = 0 -> size-2
//    Iterate j = 0 -> size-2-i (i as in every iteration, large elements will get pushed to the end and need not require scanning)
//         if arr[j] > arr[j+1] then swap

// Time Complexity: O(n^2)
// Space Complexity: O(1)