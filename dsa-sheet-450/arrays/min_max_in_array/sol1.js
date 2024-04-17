// Time Complexity: O(n)
// Space Complexity: O(1)
let min = (arr) => {
    let minVal = Infinity;

    for(let item of arr) {
        if(item < minVal) minVal = item;
    }

    return minVal;
}

let max = (arr) => {
    let maxVal = -Infinity;
    
    for(let item of arr) {
        if(item > maxVal) maxVal = item;
    }

    return maxVal;
}

let arr = [55, 67, 12, 45, 90, 3, 79];
console.log(min(arr));
console.log(max(arr));
