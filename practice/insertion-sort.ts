function insertionSort(arr: number[]) {
    for(let i = 1; i < arr.length; i++) {
        let num: number = arr[i];
        let j: number = i - 1;

        while(j >= 0 && arr[j] > num) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = num;

        console.log("Pass " + i + ": " + JSON.stringify(arr));
    }
    
    console.log("Final Array: " + JSON.stringify(arr));
}

insertionSort([98,8,2,5,1,9,23,14,0]);