function selectionSort(arr: number[]) {
    for(let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }

        if(min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }

        console.log("Pass " + (i + 1) + ": " + JSON.stringify(arr));
    }

    console.log("Final Array: " + JSON.stringify(arr));
}

selectionSort([98,8,2,5,1,9,23,14,0]);