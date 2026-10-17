function bubbleSort(arr: number[]) {
    for(let i = 0; i < arr.length - 1; i++) {
        let isSwapped = false;
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                isSwapped = true;
            }
        }

        console.log("Pass " + (i + 1) + ": " + JSON.stringify(arr));
        if(!isSwapped) break;
    }

    console.log("Final Array: " + JSON.stringify(arr));
}

bubbleSort([98,8,2,5,1,9,23,14,0]);