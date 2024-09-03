// Problem: Write a function called areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in.
// Give it a try yourself first, and let me know if you need any hints or if you'd like to see the solution. 
// Remember, it's okay to struggle - that's part of the learning process!

function areThereDuplicates(...args) {
    // Create a frequency counter object
    let frequency = {}; 

    // Iterate through the arguments
    for (let val of args) {
        // Check for duplicates
        if (frequency[val]) {
            return true
        } else {
            frequency[val] = 1; 
        }

    }
    
    // If no duplicates found, return false
    return false; 
}

//time complexity of O(n)
// This kind of problem-solving approach is very useful in front-end development. 
// For example, you might use a similar technique when processing user input, checking for duplicate items in a list, or analyzing data received from an API.
