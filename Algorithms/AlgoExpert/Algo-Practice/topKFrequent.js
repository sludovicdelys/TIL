// Coding Challenge
// Now, let's combine array manipulation with sorting in a coding challenge.
// Challenge: Top K Frequent Elements
// Given an array of integers and an integer k, return the k most frequent elements.
// For example:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

function topKFrequent(nums, k) {
    // Your code here

    let frequency = {};

    for (let num of nums) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    // Convert object to array of [num, freq] pairs
    let pairs = Object.entries(frequency);

    pairs.sort((a, b) => b[1] - a[1]);

    // Take top k elements and return only the numbers
    return pairs.slice(0, k).map(pair => parseInt(pair[0]));
}

// Test cases
console.log(topKFrequent([1,1,1,2,2,3], 2));  // Should output [1,2]
console.log(topKFrequent([1], 1));  // Should output [1]


//EXAMPLE IN ACTION : 
let frequency = {1: 3, 2: 2, 3: 1, 4: 2};
let k = 2;

let pairs = Object.entries(frequency);
console.log("After Object.entries():", pairs);
// Output: [[1, 3], [2, 2], [3, 1], [4, 2]]

pairs.sort((a, b) => b[1] - a[1]);
console.log("After sorting:", pairs);
// Output: [[1, 3], [2, 2], [4, 2], [3, 1]]

let result = pairs.slice(0, k).map(pair => pair[0]);
console.log("Final result:", result);
// Output: [1, 2]