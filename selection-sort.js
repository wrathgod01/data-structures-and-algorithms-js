function selectionSort(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i + 1; j < n; j++) {
            if(arr[min] > arr[j]) {
                min = j;
            }
        }

        if(min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }

    return arr;
}

console.log(JSON.stringify(selectionSort([9,4,6,24,7,1,18])));