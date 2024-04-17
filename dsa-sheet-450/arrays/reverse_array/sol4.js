let reverse = (arr) => {
    let start = 0, end = arr.length - 1;
    let helper = (arr, start, end) => {
        if(start >= end)
            return arr;

        [arr[start], arr[end]] = [arr[end], arr[start]];  // swap extreme end values
        return helper(arr, start+1, end-1);
    }

    return helper(arr, start, end);
}

console.log(reverse([1,2,3,4,5]));

// Using Recursion
// Time COmplexity = O(n)
// Space Complexity = O(1)