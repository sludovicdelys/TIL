function isAlphanumeric(char) {
  return (
    (char >= "A" && char <= "Z") ||
    (char >= "a" && char <= "z") ||
    (char >= "0" && char <= "9")
  );
}

function isPalindrome(s) {
  // Your code here
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isAlphanumeric(s[left])) {
      left++;
      continue;
    }

    if (!isAlphanumeric(s[right])) {
      right--;
      continue;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Should return true
console.log(isPalindrome("race a car")); // Should return false

// Here's a quick rundown of how your function works:

// Start with pointers at both ends of the string.
// Skip any non-alphanumeric characters.
// Compare the lowercase versions of alphanumeric characters.
// If at any point the characters don't match, return false.
// If we make it through the entire string without finding a mismatch, return true.

// This solution has:

// Time Complexity: O(n), where n is the length of the string
// Space Complexity: O(1), as we're using a constant amount of extra space
