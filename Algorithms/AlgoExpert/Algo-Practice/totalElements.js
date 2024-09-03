// Exercise:
// Try to write a recursive function that counts the total number of elements in a nested array. For example, given [1, [2, 3], [4, [5, 6]]], the function should return 6.
// Give it a try, and let me know if you need any hints or want to discuss your solution!

function totalElements(array) {
    if (array.length === 0) return 0; 

    let total = 0; 

    for (let element of array) {
        if (Array.isArray(element)) {
            total += totalElements(element);
        } else {
            total++;
        }
    }

    return total; 
}