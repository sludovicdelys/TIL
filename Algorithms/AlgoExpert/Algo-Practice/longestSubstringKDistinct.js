function longestSubstringKDistinct(s, k) {
    // Your code here
    if (k === 0 || s.length === 0) return 0;

    let charFrequency = {};
    let start = 0;
    let maxLength = 0;

    for (let end = 0; end < s.length; end++) {
        // Add the current character to the window
        const currentChar = s[end];
        charFrequency[currentChar] = (charFrequency[currentChar] ?? 0) + 1;
        // While we have more than k distinct characters
        while (Object.keys(charFrequency).length > k) {
            // Shrink the window from the left
            const leftChar = s[start];
            charFrequency[leftChar]--;
            if (charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar];
            }
            start++; 
        }

        // Update maxLength if necessary
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Test cases
console.log(longestSubstringKDistinct("aabacbebebe", 3)); // Should output 7
console.log(longestSubstringKDistinct("aaaa", 1)); // Should output 4
console.log(longestSubstringKDistinct("aabacabebebe", 3)); // Should output 7

// Problem: Longest Substring with K Distinct Characters
// Given a string s and an integer k, find the length of the longest substring that contains at most k distinct characters.
// For example:
// Input: s = "aabacbebebe", k = 3
// Output: 7
// Explanation: The longest substring with at most 3 distinct characters is "cbebebe".