let reverse = (arr) => {
    let start = 0, end = arr.length - 1;

    while(start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];  // swap extreme end values
        start++;
        end--;
    }

    return arr;
}

console.log(reverse([1,2,3,4,5]));

// Using 2 pointers
// Time Complexity = O(n)
// Space COmplexity = O(1)