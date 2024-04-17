let reverse = (arr) => {
    let stack = [];
    let reversedArr = [];
    for(let item of arr) {
        stack.push(item);
    }

    while(stack.length) {
        reversedArr.push(stack.pop());
    }

    return reversedArr;
}

console.log(reverse([1,2,3,4,5]));

// Using Stack
// Time COmplexity = O(n)
// Space Complexity = O(n)