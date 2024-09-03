function maxSubarraySum(arr, k) {
    // Your code here
    if (arr.length < k) return null;

    let maxSum = 0;
    let windowSum = 0; 

    // Calculate sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];

        if (windowSum > maxSum) {
            maxSum = windowSum;
        }
    }

    return maxSum; 
}

// Test case
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); 

//arr[i]
//first for {let i = 0}
//  windowSum = arr[0] = 1
//  maxSum = windowSum = 1
//second for {let i = 1}
//  windowSum = 1 - arr[1 - 4] + arr[1]; 
//  windowSum = 1 - 1 + 4; 
