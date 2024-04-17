let reverse = (arr) => {
    let reversedArr = [];
    
    for(let i in arr) {
        reversedArr.push(arr[arr.length - i - 1]);
    }

    return reversedArr;
}

console.log(reverse([1,2,3,4,5]));

// Using extra space
// Time COmplexity = O(n)
// Space Complexity = O(n)