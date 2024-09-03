// Problem: Valid Anagram
// Write a function called isAnagram which takes two strings and determines if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as 'cinema' formed from 'iceman'.
// Here are some rules for this problem:

// You may assume the string contains only lowercase alphabets.
// You should consider spaces and treat them as any other character.
// You should ignore cases where the lengths of the strings are different (return false for these).

// Here's a function signature to get you started:

function isAnagram(str1, str2) {
    // Your code here

    if(str1.length !== str2.length) return false;

    let frequency1 = {};
    let frequency2 = {};

    for (let i = 0; i < str1.length; i++) {
        frequency1[str1[i]] = (frequency1[str1[i]] || 0) + 1;
    }

    for(let j = 0; j < str2.length; j++){
        frequency2[str2[j]] = (frequency2[str2[j]] || 0) + 1;
    }

    for(let char in frequency1){
        if(frequency1[char] !== frequency2[char]) return false;
    }

    return true; 
}

// Here are some steps you might consider:

// Check if the lengths of the strings are the same. If not, return false.
// Create frequency counters for both strings.
// Compare the frequency counters.

//This solution has a time complexity of O(n), where n is the length of the strings, because you make a fixed number of passes through the strings