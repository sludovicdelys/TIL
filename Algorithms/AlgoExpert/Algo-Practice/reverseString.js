function reverseString(s) {
  // Convert string to array because strings are immutable in JavaScript
  let arr = s.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap characters
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Move pointers towards middle
    left++;
    right--;
  }

  // Join array back into string
  return arr.join("");
}

// Test the function
console.log(reverseString("hello")); // Should output: "olleh"
