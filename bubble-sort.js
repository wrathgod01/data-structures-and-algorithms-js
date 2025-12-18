function bubbleSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n - 1; i++) {
        for(let j = 0; j < n - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];    
            }
        }
    }

    return arr;
}

function bubbleSortOptimized(arr) {
    let n = arr.length;
    for(let i = 0; i < n - 1; i++) {
        let isSwapped = false;

        for(let j = 0; j < n - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                isSwapped = true;      
            }
        }

        if(!isSwapped) break;
    } 

    return arr;
}

console.log(JSON.stringify(bubbleSort([9,4,6,24,7,1,18])));
console.log(JSON.stringify(bubbleSortOptimized([9,4,6,24,7,1,18])));
