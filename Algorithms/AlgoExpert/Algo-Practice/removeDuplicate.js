function removeDuplicates(nums) {
  // Your code here
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

// Test case
let nums = [1, 1, 2];
let k = removeDuplicates(nums);
console.log(k, nums);
